import Calculator from "./Calculator";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Calculator", () => {
  it("renders the calculator", () => {
    render(<Calculator />);

    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });


  it("calculates the sum of two numbers", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByTestId("num1"), { target: { value: "5" } });
    fireEvent.change(screen.getByTestId("num2"), { target: { value: "10" } });
    fireEvent.click(screen.getByTestId("add"));
    expect(screen.getByTestId("result")).toHaveTextContent("15");
  })
  
  it("calculates the difference of two numbers", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByTestId("num1"), { target: { value: "10" } });
    fireEvent.change(screen.getByTestId("num2"), { target: { value: "5" } });
    fireEvent.click(screen.getByTestId("subtract"));
    expect(screen.getByTestId("result")).toHaveTextContent("5");
  })

  it("calculates the product of two numbers", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByTestId("num1"), { target: { value: "5" } });
    fireEvent.change(screen.getByTestId("num2"), { target: { value: "10" } });
    fireEvent.click(screen.getByTestId("multiply"));
    expect(screen.getByTestId("result")).toHaveTextContent("50");
  })

  it("calculates the quotient of two numbers", () => {
    render(<Calculator />);

    fireEvent.change(screen.getByTestId("num1"), { target: { value: "10" } });
    fireEvent.change(screen.getByTestId("num2"), { target: { value: "5" } });
    fireEvent.click(screen.getByTestId("divide"));
    expect(screen.getByTestId("result")).toHaveTextContent("2");
  })
})