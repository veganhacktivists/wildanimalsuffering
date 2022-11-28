import { useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { FogEffect } from "./fog-effect";
import { LeavesEffect } from "./leaves-effect";
import { RainfallEffect } from "./rainfall-effect";
import { SnowfallEffect } from "./snowfall-effect";

const effectComponents = {
  fog: FogEffect,
  leaves: LeavesEffect,
  rain: RainfallEffect,
  snow: SnowfallEffect,
};

function buildThresholdList(numSteps) {
  return Array.from({ length: numSteps }).map((_, idx) => (1 / numSteps) * idx);
}

export function useBackgroundEffect() {
  const screenRef = useRef(null);
  const effectOpacity = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ rootBounds, boundingClientRect, intersectionRatio }]) => {
        const ratio = 1 - rootBounds.height / boundingClientRect.height;

        effectOpacity.set(
          (intersectionRatio - 0.5) * 2 + intersectionRatio * ratio
        );
      },
      { threshold: buildThresholdList(100) }
    );

    observer.observe(screenRef.current);

    return () => observer.disconnect();
  }, []);

  return { screenRef, effectOpacity };
}

export function BackgroundEffect({ type }) {
  const EffectComponent = effectComponents[type];

  if (!EffectComponent) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 h-screen w-screen">
      <EffectComponent />
    </div>
  );
}
