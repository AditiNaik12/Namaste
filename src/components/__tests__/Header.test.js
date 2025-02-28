import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore";

test("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"Login"})

  expect(loginButton).toBeInTheDocument()
});

test("should render header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart(0)")
  
    expect(cartItems).toBeInTheDocument()
  });

  test("should render header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginButton)
  
    const logoutButton = screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument()
  });
