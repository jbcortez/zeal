import React from "react";
import { screen } from "@testing-library/react";
import Column from "./index";
import { customRender, dropContext } from "../../test-utils";
import { Tasks } from "../../types";
import { v4 as uuidv4 } from "uuid";

const tasks: Tasks = [
  {
    id: uuidv4(),
    description: "Finish Kanban project",
    columnId: "test",
    status: "open",
    userId: "1234",
  },
];

describe("Column", () => {
  it("displays a title", () => {
    customRender(
      dropContext(<Column id={"test"} tasks={tasks} title={"Column One"} />)
    );
    const element = screen.getByText(/Column One/i);
    expect(element).toBeInTheDocument();
  });

  it("should render tasks", () => {
    customRender(
      dropContext(<Column id={"test"} tasks={tasks} title={"Column One"} />)
    );
    const element = screen.getByText(/Finish Kanban project/i);
    expect(element).toBeInTheDocument();
  });

  it("should render a Create Task button", () => {
    customRender(
      dropContext(<Column id={"test"} tasks={tasks} title={"Column One"} />)
    );
    const element = screen.getByTestId("create-issue");

    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Create Issue");
  });
});
