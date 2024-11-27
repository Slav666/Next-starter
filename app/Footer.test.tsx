import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders the Footer component with correct text", () => {
    render(<Footer />); // Render the Footer component
    const footerElement = screen.getByText(/footer/i); // Find the text "Footer"
    expect(footerElement).toBeInTheDocument(); // Check if it exists in the DOM
  });
});
