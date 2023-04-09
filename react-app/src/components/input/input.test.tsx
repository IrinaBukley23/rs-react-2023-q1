import { describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./input";

const setup = () => {
  const mockFunc = vi.fn;
  const utils = render(
    <Input search="23" onChange={mockFunc} onClick={mockFunc} />
  );
  const input: HTMLInputElement =
    screen.getByPlaceholderText("Enter char name");
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
