import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import "../i18n";
import { Navigation } from "./navigation";

describe("Navigation", () => {
  it("keeps the menu closed until the toggle is pressed", () => {
    render(<Navigation />);

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("opens the menu with the section links", async () => {
    render(<Navigation />);

    await userEvent.click(screen.getByRole("button", { name: "Menu" }));

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Introduction" }),
    ).toBeInTheDocument();
  });

  it("closes the menu with the close button", async () => {
    render(<Navigation />);

    await userEvent.click(screen.getByRole("button", { name: "Menu" }));
    await userEvent.click(screen.getByRole("button", { name: "Close menu" }));

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("closes the menu when the hash changes", async () => {
    render(<Navigation />);

    await userEvent.click(screen.getByRole("button", { name: "Menu" }));
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    act(() => {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});
