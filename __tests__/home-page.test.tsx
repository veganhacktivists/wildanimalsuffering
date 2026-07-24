import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import En from "../pages/index";

const replace = vi.fn();

vi.mock("next/router", () => ({
  useRouter: () => ({ replace }),
}));

// The page's own job is language detection; the homepage it renders is covered
// by its components' tests.
vi.mock("~/screens/home", () => ({
  default: () => <div />,
}));

const stubStorage = (overrides: Partial<Storage>) => {
  vi.stubGlobal("localStorage", {
    getItem: () => null,
    setItem: () => {},
    ...overrides,
  });
};

const stubLanguages = (languages: string[]) => {
  vi.spyOn(window.navigator, "languages", "get").mockReturnValue(languages);
};

describe("En (language detection)", () => {
  beforeEach(() => {
    replace.mockClear();
  });

  it("redirects a first-time German visitor to /de/", () => {
    stubStorage({});
    stubLanguages(["de-DE", "en-US"]);

    render(<En />);

    expect(replace).toHaveBeenCalledWith("/de/");
  });

  it("stays on English when the browser prefers English", () => {
    stubStorage({});
    stubLanguages(["en-GB"]);

    render(<En />);

    expect(replace).not.toHaveBeenCalled();
  });

  it("stays on English for an unsupported language", () => {
    stubStorage({});
    stubLanguages(["sv-SE"]);

    render(<En />);

    expect(replace).not.toHaveBeenCalled();
  });

  it("does not redirect a returning visitor", () => {
    stubStorage({ getItem: () => "true" });
    stubLanguages(["de-DE"]);

    render(<En />);

    expect(replace).not.toHaveBeenCalled();
  });

  it("survives storage being blocked", () => {
    stubStorage({
      getItem: () => {
        throw new Error("access denied");
      },
    });
    stubLanguages(["de-DE"]);

    expect(() => render(<En />)).not.toThrow();
    expect(replace).not.toHaveBeenCalled();
  });

  it("does not redirect when the visit cannot be recorded", () => {
    stubStorage({
      setItem: () => {
        throw new Error("quota exceeded");
      },
    });
    stubLanguages(["de-DE"]);

    expect(() => render(<En />)).not.toThrow();
    expect(replace).not.toHaveBeenCalled();
  });
});
