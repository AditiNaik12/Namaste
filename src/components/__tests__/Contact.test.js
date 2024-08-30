import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact Us page test cases", () => {
    test("should reload the component", () => {
        render(<Contact />);
      
        const heading = screen.getByRole("heading");
      
        expect(heading).toBeInTheDocument();
      });
      
      test("should reload the component", () => {
          render(<Contact />);
        
          const button = screen.getByText("Submit");
        
          expect(button).toBeInTheDocument();
        });
      
        test("should reload the component", () => {
          render(<Contact />);
        
          const InputBoxes = screen.getAllByRole("textbox");
          // console.log(InputBoxes)
        
          expect(InputBoxes.length).toBe(2);
        });
})


