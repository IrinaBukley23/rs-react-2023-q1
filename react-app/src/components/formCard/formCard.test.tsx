import React from "react";
import { render, screen, within } from "@testing-library/react";
import FormCard from "./formCard";

describe("FormCard", () => {
  const mockData = {
    id: "1",
    name: "Irina",
    birth: "01.01.2001",
    country: "Sweeden",
    female: true,
    male: false,
    profile: "",
    sex: "male",
  };

  it("shows list", () => {
    render(<FormCard user={mockData} />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(5);
  });
});
