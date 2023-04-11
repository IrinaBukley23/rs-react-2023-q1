import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./card";

const mochData = {
  id: 1,
  created: "10.04.2023",
  gender: "male",
  image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  name: "Rick",
  species: "human",
  status: "alive",
};

describe("Card", () => {
  it("renders Card by title", () => {
    render(<Card char={mochData} key={mochData.id} />);
    expect(
      screen.findByRole("heading", {
        level: 5,
        name: "/Rick/i",
      })
    ).toBeDefined();
  });
  it("renders Card button", () => {
    render(<Card char={mochData} key={mochData.id} />);
    expect(
      screen.findByRole("button", {
        name: "/More info/i",
      })
    ).toBeDefined();
  });
  it("renders Modal window", () => {
    render(<Card char={mochData} key={mochData.id} />);
    expect(
      screen.findByRole("button", {
        name: "/X/i",
      })
    ).toBeDefined();
  });
});
