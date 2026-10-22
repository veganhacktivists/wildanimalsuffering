import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import "../i18n";
import { Navigation } from "./navigation";

const scrollIntoView = Object.getOwnPropertyDescriptor(
  Element.prototype,
  "scrollIntoView",
);

beforeAll(() => {
  // jsdom has no layout; observe requests to reveal the focused element.
  Object.defineProperty(Element.prototype, "scrollIntoView", {
    configurable: true,
    value: vi.fn(),
    writable: true,
  });
});

afterAll(() => {
  if (scrollIntoView) {
    Object.defineProperty(Element.prototype, "scrollIntoView", scrollIntoView);
  } else {
    Reflect.deleteProperty(Element.prototype, "scrollIntoView");
  }
});

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

    const trigger = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(trigger);
    await userEvent.click(screen.getByRole("button", { name: "Close menu" }));

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("opens a named dialog and moves focus inside it", async () => {
    render(<Navigation />);

    await userEvent.click(screen.getByRole("button", { name: "Menu" }));

    expect(screen.getByRole("dialog", { name: "Menu" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveFocus();
    expect(
      screen.queryByRole("button", { name: "Menu" }),
    ).not.toBeInTheDocument();
  });

  it("keeps tab navigation inside the menu and reveals the focused item", async () => {
    render(<Navigation />);

    await userEvent.click(screen.getByRole("button", { name: "Menu" }));
    const first = screen.getByRole("button", { name: "Close menu" });
    const last = screen.getByRole("link", { name: "Vegan Hacktivists" });
    const reveal = vi.mocked(Element.prototype.scrollIntoView);

    first.focus();
    reveal.mockClear();
    await userEvent.tab({ shift: true });
    expect(last).toHaveFocus();
    expect(reveal).toHaveBeenLastCalledWith({
      block: "nearest",
      inline: "nearest",
    });
    expect(reveal.mock.contexts.at(-1)).toBe(last);

    await userEvent.tab();
    expect(first).toHaveFocus();
    expect(reveal).toHaveBeenLastCalledWith({
      block: "nearest",
      inline: "nearest",
    });
    expect(reveal.mock.contexts.at(-1)).toBe(first);
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    render(<Navigation />);

    const trigger = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("closes when clicking outside the dialog and restores focus", async () => {
    render(<Navigation />);

    const trigger = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(trigger);
    const overlay = screen.getByRole("dialog").parentElement!;
    await userEvent.click(overlay);

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("closes on hash changes and restores focus without scrolling", async () => {
    render(<Navigation />);

    const trigger = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(trigger);
    const focus = vi.spyOn(trigger, "focus");
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    act(() => {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    await waitFor(() => {
      expect(focus).toHaveBeenCalledWith({ preventScroll: true });
    });
  });

  it("keeps section links navigating when the dialog closes", async () => {
    render(<Navigation />);

    const trigger = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(trigger);
    const focus = vi.spyOn(trigger, "focus");
    const link = screen.getByRole("link", { name: "Introduction" });
    const destination = link.getAttribute("href");
    await userEvent.click(link);

    await waitFor(() => {
      expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });
    expect(window.location.hash).toBe(destination);
    await waitFor(() => {
      expect(focus).toHaveBeenCalledWith({ preventScroll: true });
    });
    window.history.replaceState(null, "", window.location.pathname);
  });
});
