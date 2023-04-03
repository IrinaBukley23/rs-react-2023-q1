import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MyForm from "./myForm";

describe("MyForm", () => {
  it("render MyForm", () => {
    render(<MyForm />);

    expect(screen.getByLabelText(/Enter your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter your birthday/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select your country/i)).toBeInTheDocument();
  });

  it("errors with focus", async () => {
    render(<MyForm />);
    await waitFor(() => {
      fireEvent.click(screen.getByText(/submit/i));
      fireEvent.click(screen.getByText(/reset/i));
    });

    expect(screen.findByText(/field is required/i)).toBeDefined();

    await waitFor(() => {
      fireEvent.focus(screen.getAllByRole("textbox")[0]);
    });
  });
});
