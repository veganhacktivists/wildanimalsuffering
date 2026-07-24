import { describe, expect, it } from "vitest";
import { cx } from "./cx";

describe("cx", () => {
  it("joins class names with a space", () => {
    expect(cx("a", "b", "c")).toBe("a b c");
  });

  it("drops falsy and non-string values", () => {
    expect(cx("a", null, undefined, false, "", "b")).toBe("a b");
  });

  it("supports conditional classes", () => {
    const active = false;
    expect(cx("base", active && "is-active")).toBe("base");
  });

  it("returns an empty string when nothing is passed", () => {
    expect(cx()).toBe("");
  });
});
