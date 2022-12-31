import useGetColumns from "./useGetColumns";
import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";

const TestComponent: React.FC = () => {
  const columns = useGetColumns();
  return (
    <div>
      <p data-testid={"length"}>{columns.length}</p>
      <div>
        {columns.map((col) => (
          <div key={col.id}>{col.title}</div>
        ))}
      </div>
    </div>
  );
};

describe("index", () => {
  it("retrieves columns", () => {
    customRender(<TestComponent />);
    const title = screen.getByText(/My First Column/i);
    const length = screen.getByTestId("length");

    expect(title).toBeInTheDocument();
    expect(length.innerHTML).toBe("2");
  });
});
