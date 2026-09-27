import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import "../i18n";
import { BackgroundEffect } from "./background-effect";
import { LeavesEffect } from "./leaves-effect";
import { RainfallEffect } from "./rainfall-effect";
import { WindEffect } from "./wind-effect";

const stubOnScreen = (isIntersecting: boolean) => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      callback: IntersectionObserverCallback;

      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
      }

      observe() {
        this.callback(
          [{ isIntersecting } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        );
      }

      disconnect() {}
    },
  );
};

const stubContext = () => {
  const context = {
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
  };
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
    context as unknown as CanvasRenderingContext2D,
  );
};

beforeEach(() => stubOnScreen(true));
afterEach(() => vi.unstubAllGlobals());

// jsdom has no 2D canvas implementation, so getContext returns null here — the
// same thing a browser does when it cannot hand out another context.
describe("canvas effects without a drawing context", () => {
  it("WindEffect renders without throwing", () => {
    expect(() => render(<WindEffect />)).not.toThrow();
  });

  it("RainfallEffect renders without throwing", () => {
    expect(() => render(<RainfallEffect />)).not.toThrow();
  });

  it("WindEffect schedules no animation frames", () => {
    const raf = vi.spyOn(window, "requestAnimationFrame");

    render(<WindEffect />);

    expect(raf).not.toHaveBeenCalled();
  });

  it("RainfallEffect starts no timer", () => {
    const setInterval = vi.spyOn(window, "setInterval");

    render(<RainfallEffect />);

    expect(setInterval).not.toHaveBeenCalled();
  });
});

describe("canvas effect cleanup", () => {
  it("RainfallEffect clears its timer on unmount", () => {
    stubContext();
    const clearInterval = vi.spyOn(window, "clearInterval");

    const { unmount } = render(<RainfallEffect />);
    unmount();

    expect(clearInterval).toHaveBeenCalled();
  });

  it("WindEffect cancels its animation frame on unmount", () => {
    stubContext();
    const cancel = vi.spyOn(window, "cancelAnimationFrame");

    const { unmount } = render(<WindEffect />);
    unmount();

    expect(cancel).toHaveBeenCalled();
  });

  it("LeavesEffect stops its animation and resize listener on unmount", () => {
    const cancel = vi.spyOn(window, "cancelAnimationFrame");
    const removeListener = vi.spyOn(window, "removeEventListener");

    const { unmount } = render(<LeavesEffect />);
    unmount();

    expect(cancel).toHaveBeenCalled();
    expect(removeListener).toHaveBeenCalledWith("resize", expect.any(Function));
  });
});

describe("effects off screen", () => {
  it("WindEffect schedules no animation frames until it is on screen", () => {
    stubOnScreen(false);
    stubContext();
    const raf = vi.spyOn(window, "requestAnimationFrame");

    render(<WindEffect />);

    expect(raf).not.toHaveBeenCalled();
  });

  it("WindEffect animates once it is on screen", () => {
    stubContext();
    const raf = vi.spyOn(window, "requestAnimationFrame");

    render(<WindEffect />);

    expect(raf).toHaveBeenCalled();
  });

  it("BackgroundEffect renders nothing while its section is off screen", () => {
    const { container } = render(
      <BackgroundEffect type="rain" onScreen={false} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("BackgroundEffect renders its effect while its section is on screen", () => {
    const { container } = render(<BackgroundEffect type="rain" onScreen />);

    expect(container.querySelector("canvas")).toBeInTheDocument();
  });
});
