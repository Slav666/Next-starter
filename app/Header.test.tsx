import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Footer Component", () => {
  test("renders the Footer component with correct text", () => {
    render(<Header />); // Render the Footer component
    const footerElement = screen.getByText(/header/i); // Find the text "Footer"
    expect(footerElement).toBeInTheDocument(); // Check if it exists in the DOM
  });

  test("applies the correct classes for styling", () => {
    render(<Header />); // Render the Footer component
    const footerElement = screen.getByText(/header/i); // Find the text "Footer"
    expect(footerElement).toHaveClass(
      "flex",
      "justify-center",
      "items-center",
      "bg-gray-400",
      "min-h-10"
    ); // Check if the classes are applied
  });
});
