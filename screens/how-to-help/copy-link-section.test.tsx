import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import "../../i18n";
import { CopyLinkSection } from "./copy-link-section";

const stubClipboard = (writeText: () => Promise<void>) => {
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });
};

describe("CopyLinkSection", () => {
  it("says the link was copied once the write succeeds", async () => {
    stubClipboard(vi.fn().mockResolvedValue(undefined));
    render(<CopyLinkSection />);

    await userEvent.click(screen.getByRole("button"));

    expect(await screen.findByText("Link copied!")).toBeInTheDocument();
  });

  it("stays quiet when the write fails", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("denied"));
    stubClipboard(writeText);
    render(<CopyLinkSection />);

    await userEvent.click(screen.getByRole("button"));

    expect(writeText).toHaveBeenCalled();
    expect(screen.queryByText("Link copied!")).not.toBeInTheDocument();
  });
});
