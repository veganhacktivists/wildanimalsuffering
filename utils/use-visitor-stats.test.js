import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useVisitorStats } from "./use-visitor-stats";

const mockFetch = (implementation) => {
  const fetch = vi.fn(implementation);
  vi.stubGlobal("fetch", fetch);
  return fetch;
};

describe("useVisitorStats", () => {
  it("starts at zero", () => {
    mockFetch(() => new Promise(() => {}));

    const { result } = renderHook(() => useVisitorStats());

    expect(result.current).toBe(0);
  });

  it("returns the visitor count from the response", async () => {
    mockFetch(async () => ({
      ok: true,
      json: async () => ({ visitors: 4321 }),
    }));

    const { result } = renderHook(() => useVisitorStats());

    await waitFor(() => expect(result.current).toBe(4321));
  });

  it("stays at zero when the request fails", async () => {
    const fetch = mockFetch(async () => {
      throw new Error("network down");
    });

    const { result } = renderHook(() => useVisitorStats());

    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(result.current).toBe(0);
  });

  it("stays at zero on a non-ok response", async () => {
    const fetch = mockFetch(async () => ({
      ok: false,
      json: async () => ({ visitors: 99 }),
    }));

    const { result } = renderHook(() => useVisitorStats());

    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(result.current).toBe(0);
  });

  it("requests the stats endpoint once", async () => {
    const fetch = mockFetch(async () => ({
      ok: true,
      json: async () => ({ visitors: 1 }),
    }));

    renderHook(() => useVisitorStats());

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith(
      "https://visitors.wildanimalsuffering.org",
    );
  });
});
