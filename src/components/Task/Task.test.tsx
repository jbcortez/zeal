import React from "react";
import { screen } from "@testing-library/react";
import Task from "./index";
import { customRender, dropContext } from "../../test-utils";

describe("Task", () => {
  it("displays content", () => {
    customRender(dropContext(<Task id={"test"} index={0} content={"hello"} />));
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });
});
