import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import FormPage from "./FormPage";

describe("Render Form Page", () => {
  it("should show form", () => {
    render(<FormPage />);
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toHaveTextContent("Form page");
  });
});
