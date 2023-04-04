import { describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./input";

const setup = () => {
  const utils = render(<Input />);
  const input: HTMLInputElement =
    screen.getByPlaceholderText("Enter your text");
  return {
    input,
    ...utils,
  };
};
describe("Input", () => {
  it("renders input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
