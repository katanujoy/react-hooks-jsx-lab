import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { username, city } from "../data/data";
import "@testing-library/jest-dom";  // Add this import

test("renders the h1 with the text 'Name is a Web Developer from City'", () => {
  render(<Home />);
  const h1 = screen.queryByText(`${username} is a Web Developer from ${city}`);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);
  const h1 = screen.queryByText(`${username} is a Web Developer from ${city}`);
  expect(h1).toHaveStyle({ color: "firebrick" });
});
