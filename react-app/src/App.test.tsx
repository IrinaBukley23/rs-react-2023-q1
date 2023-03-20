/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

describe("App", () => {
  it("renders Home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toHaveTextContent("Home page");
  });
  it("renders About us page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toHaveTextContent("About us page");
  });
  it("Renders not found if invalid path", () => {
    render(
      <MemoryRouter initialEntries={["/this-route-does-not-found"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
      })
    ).toHaveTextContent("Page not found");
  });
});
