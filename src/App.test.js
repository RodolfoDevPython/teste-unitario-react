import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const Button = ({ label, onClick = () => null }) => {
  return ( 
    <button 
      onClick={onClick} 
      testid="my-button" 
      aria-label="my-button" >{label}
    </button>
  )
}

test("should add button in document", () => {
  render(<Button label="MyButton" />)
  
  const btnElement = screen.getByText("MyButton")

  expect(btnElement).toBeInTheDocument()
})

test("get element for getByLabelText", () => {
  render(<Button label="MyButton" />)
  
  const btnElement = screen.getByLabelText("my-button")

  expect(btnElement).toBeInTheDocument()
})

test("should add button in document with text correct", () => {
  render(<Button label="MyButton" />)

  const btnElement = screen.getByLabelText("my-button")

  expect(btnElement).toBeInTheDocument()
  expect(btnElement).toHaveTextContent("MyButton")
})

test("should add button in document with text correct and test event click", () => {

  const onClick = jest.fn();

  render(<Button label="MyButton" onClick={onClick} />)

  const btnElement = screen.getByLabelText("my-button")

  //captura eventos
  fireEvent.click(btnElement)

  expect(onClick).toHaveBeenCalled() //verificando se a function foi chamada
  expect(btnElement).toBeInTheDocument()
  expect(btnElement).toHaveTextContent("MyButton")
})