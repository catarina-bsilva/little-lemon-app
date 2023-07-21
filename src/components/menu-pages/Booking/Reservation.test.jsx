import ReservationForm from "./ReservationForm";
import { render, screen } from "@testing-library/react"


describe('ReservationForm', () => {
    it('renders headline', () => {
      render(<ReservationForm />);
      const HeadingElement = screen.getByText("Date");
    expect(HeadingElement).toBeInTheDocument()
    });
  });




