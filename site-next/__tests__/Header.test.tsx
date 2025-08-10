import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

test("renders header brand name", () => {
  render(<Header />);
  const brand = screen.getByText(/Jesse Campbell/i);
  expect(brand).toBeInTheDocument();
});
