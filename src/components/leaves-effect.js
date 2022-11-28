import { useEffect, useRef } from "react";

class LeafScene {
  constructor(el) {
    this.viewport = el;
    this.world = document.createElement("div");
    this.leaves = [];

    this.options = {
      numLeaves: 20,
      wind: {
        magnitude: 1.2,
        maxSpeed: 12,
        duration: 300,
        start: 0,
        speed: (t, y) => 0,
      },
    };

    this.width = this.viewport.offsetWidth;
    this.height = this.viewport.offsetHeight;

    // animation helper
    this.timer = 0;
  }

  init() {
    for (let i = 0; i < this.options.numLeaves; i++) {
      const el = document.createElement("div");
      el.className =
        "absolute top-0 left-0 w-5 h-5 bg-cover bg-leaf [transform-style:preserve-3d] [backface-visibility:visible]";

      const leaf = {
        el,
        x: 0,
        y: 0,
        z: 0,
        rotation: {
          axis: "X",
          value: 0,
          speed: 0,
          x: 0,
        },
        xSpeedVariation: 0,
        ySpeed: 0,
        path: {
          type: 1,
          start: 0,
        },
        image: 1,
      };

      this._resetLeaf(leaf);
      this.leaves.push(leaf);
      this.world.appendChild(leaf.el);
    }

    this.world.className = "absolute inset-0 [transform-style:preserve-3d]";
    this.viewport.appendChild(this.world);

    // set perspective
    this.world.style.perspective = "400px";

    window.onresize = (event) => {
      this.width = this.viewport.offsetWidth;
      this.height = this.viewport.offsetHeight;
    };
  }

  render() {
    this._updateWind();
    for (let i = 0; i < this.leaves.length; i++) {
      this._updateLeaf(this.leaves[i]);
    }

    this.timer++;

    requestAnimationFrame(this.render.bind(this));
  }

  _resetLeaf(leaf) {
    // place leaf towards the top left
    leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
    leaf.y = -10;
    leaf.z = Math.random() * 200;
    if (leaf.x > this.width) {
      leaf.x = this.width + 10;
      leaf.y = (Math.random() * this.height) / 2;
    }
    // at the start, the leaf can be anywhere
    if (this.timer == 0) {
      leaf.y = Math.random() * this.height;
    }

    // Choose axis of rotation.
    // If axis is not X, chose a random static x-rotation for greater variability
    leaf.rotation.speed = Math.random() * 10;
    const randomAxis = Math.random();
    if (randomAxis > 0.5) {
      leaf.rotation.axis = "X";
    } else if (randomAxis > 0.25) {
      leaf.rotation.axis = "Y";
      leaf.rotation.x = Math.random() * 180 + 90;
    } else {
      leaf.rotation.axis = "Z";
      leaf.rotation.x = Math.random() * 360 - 180;
      // looks weird if the rotation is too fast around this axis
      leaf.rotation.speed = Math.random() * 3;
    }

    // random speed
    leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
    leaf.ySpeed = Math.random() + 1.5;

    return leaf;
  }

  _updateLeaf(leaf) {
    const leafWindSpeed = this.options.wind.speed(
      this.timer - this.options.wind.start,
      leaf.y
    );

    const xSpeed = leafWindSpeed + leaf.xSpeedVariation;
    leaf.x -= xSpeed;
    leaf.y += leaf.ySpeed;
    leaf.rotation.value += leaf.rotation.speed;

    let t =
      "translateX( " +
      leaf.x +
      "px ) translateY( " +
      leaf.y +
      "px ) translateZ( " +
      leaf.z +
      "px )  rotate" +
      leaf.rotation.axis +
      "( " +
      leaf.rotation.value +
      "deg )";
    if (leaf.rotation.axis !== "X") {
      t += " rotateX(" + leaf.rotation.x + "deg)";
    }
    leaf.el.style.webkitTransform = t;
    leaf.el.style.MozTransform = t;
    leaf.el.style.oTransform = t;
    leaf.el.style.transform = t;

    // reset if out of view
    if (leaf.x < -10 || leaf.y > this.height + 10) {
      this._resetLeaf(leaf);
    }
  }

  _updateWind() {
    // wind follows a sine curve: asin(b*time + c) + a
    // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
    // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

    if (
      this.timer === 0 ||
      this.timer > this.options.wind.start + this.options.wind.duration
    ) {
      this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
      this.options.wind.duration =
        this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
      this.options.wind.start = this.timer;

      const screenHeight = this.height;

      this.options.wind.speed = (t, y) => {
        // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
        const a =
          ((this.options.wind.magnitude / 2) * (screenHeight - (2 * y) / 3)) /
          screenHeight;

        return (
          a *
            Math.sin(
              ((2 * Math.PI) / this.options.wind.duration) * t +
                (3 * Math.PI) / 2
            ) +
          a
        );
      };
    }
  }
}

export function LeavesEffect() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const leaves = new LeafScene(ref.current);

    leaves.init();
    leaves.render();
  }, [ref]);

  return <div ref={ref} className="h-full w-full" />;
}
