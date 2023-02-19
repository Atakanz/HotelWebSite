import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './bookingForm';
// *it* (or test) should be a valid email adress.

describe('Counter Tests', () => {
  let increaseAdultbtn,
    increaseChildbtn,
    decreaseAdultbtn,
    decreaseChildbtn,
    adult,
    child;
  beforeEach(() => {
    //eslint-disable-next-line
    render(<BookingForm />);
    increaseAdultbtn = screen.getByRole('button', {name: /increaseAdult/i});
    increaseChildbtn = screen.getByRole('button', {name: /increaseChild/i});
    decreaseAdultbtn = screen.getByRole('button', {name: /decreaseAdult/i});
    decreaseChildbtn = screen.getByRole('button', {name: /decreaseChild/i});
    adult = screen.getByTestId('adult');
    child = screen.getByTestId('child');
  });

  // beforeAll works just one time.
  // afterAll works just one time after all.

  it('increase adultbtn', () => {
    userEvent.click(increaseAdultbtn);
    expect(adult).toHaveTextContent('1');
  });
  it('increase childbtn', () => {
    userEvent.click(increaseChildbtn);
    expect(child).toHaveTextContent('1');
  });
  it('decrease adultbtn', () => {
    userEvent.click(decreaseAdultbtn);
    expect(adult).toHaveTextContent('0');
  });
  it('decrease childbtn', () => {
    userEvent.click(decreaseChildbtn);
    expect(child).toHaveTextContent('0');
  });
});
