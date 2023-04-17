import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import store from "../store/store";
import FormPage from "./FormPage";

describe("Render Form Page", () => {
  it("should show form", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toHaveTextContent("Form page");
  });
});
