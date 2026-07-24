import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RainfallEffect } from "./rainfall-effect";
import { WindEffect } from "./wind-effect";

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
    const clearInterval = vi.spyOn(window, "clearInterval");

    const { unmount } = render(<RainfallEffect />);
    unmount();

    expect(clearInterval).toHaveBeenCalled();
  });

  it("WindEffect cancels its animation frame on unmount", () => {
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
    const cancel = vi.spyOn(window, "cancelAnimationFrame");

    const { unmount } = render(<WindEffect />);
    unmount();

    expect(cancel).toHaveBeenCalled();
  });
});
