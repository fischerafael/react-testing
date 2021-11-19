import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "./TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it("should render the correct amount of incomplete tasks", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={3} />);
  const paragraphElement = screen.getByText(/3 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});
