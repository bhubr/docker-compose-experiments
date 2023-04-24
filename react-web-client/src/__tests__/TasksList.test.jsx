import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TasksList from "../TasksList";

test("displays tasks", async () => {
  const sampleTasks = [{ id: 1, title: "Sample task #1", done: false }];

  render(<TasksList tasks={sampleTasks} />);

  expect(screen.getByTestId("task-1")).toHaveTextContent("Sample task #1");
});
