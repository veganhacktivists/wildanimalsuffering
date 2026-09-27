import { readdirSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../i18n";
import { Header } from "./header";

describe("Header", () => {
  it("offers every language the site has a translation for", () => {
    render(<Header />);

    const offered = screen
      .getAllByRole("option")
      .map((option) => (option as HTMLOptionElement).value)
      .sort();
    const translated = readdirSync("lang")
      .map((file) => file.replace(/\.json$/, ""))
      .sort();

    expect(offered).toEqual(translated);
  });
});
