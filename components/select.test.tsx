import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./select";

const options = (
  <>
    <option value="en">English</option>
    <option value="de">German</option>
  </>
);

describe("Select", () => {
  it("renders its options", () => {
    render(<Select>{options}</Select>);

    expect(screen.getByRole("option", { name: "English" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "German" })).toBeInTheDocument();
  });

  it("honours defaultValue", () => {
    render(<Select defaultValue="de">{options}</Select>);

    expect(screen.getByRole("combobox")).toHaveValue("de");
  });

  it("forwards change events with the selected value", async () => {
    const onChange = vi.fn();
    render(
      <Select defaultValue="en" onChange={onChange}>
        {options}
      </Select>,
    );

    await userEvent.selectOptions(screen.getByRole("combobox"), "de");

    expect(onChange).toHaveBeenCalled();
    expect(screen.getByRole("combobox")).toHaveValue("de");
  });
});
