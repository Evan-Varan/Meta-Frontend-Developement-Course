import { render, fireEvent, screen } from "@testing-library/react";
import NumberofGuests from "./NumberofGuests";

test('Renders the number of guests page', () => {
    render(<NumberofGuests/>);
    const h1Element = screen.getByText("Select number of guests");
    expect(h1Element).toBeInTheDocument();

    const pElement = screen.getByText(/Parties larger than 6 can contact us/i);
    expect(pElement).toBeInTheDocument();
})

test("user clicks number of guests button", () => {
  const stepForwards = jest.fn();
  render(<NumberofGuests stepForwards={stepForwards} />);

  const buttons = screen.getAllByRole("button");

  buttons.forEach((button) => {
    fireEvent.click(button);
  })

  expect(stepForwards).toHaveBeenCalledTimes(buttons.length);
});