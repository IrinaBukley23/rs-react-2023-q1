import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import MyForm from "./myForm";

describe("MyForm", () => {
  const mockFunc = vi.fn;
  it("render MyForm", () => {
    render(<MyForm setForm={mockFunc} />);

    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/birth/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
  });

  it("errors with focus", async () => {
    render(<MyForm setForm={mockFunc} />);
    await waitFor(() => {
      fireEvent.click(screen.getByText(/submit/i));
    });

    expect(screen.findByText(/field is required/i)).toBeDefined();

    await waitFor(() => {
      fireEvent.focus(screen.getAllByRole("textbox")[0]);
    });
  });
});
