import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MyForm from "./myForm";

describe("MyForm", () => {
  it("render MyForm", () => {
    render(<MyForm />);

    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/birth/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
  });

  it("errors with focus", async () => {
    render(<MyForm />);
    await waitFor(() => {
      fireEvent.click(screen.getByText(/submit/i));
    });

    expect(screen.findByText(/field is required/i)).toBeDefined();

    await waitFor(() => {
      fireEvent.focus(screen.getAllByRole("textbox")[0]);
    });
  });
});
