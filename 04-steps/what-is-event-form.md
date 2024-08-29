# ⚛️ Event Handling and Forms in React - EN

## 🎯 Event Handling in React

Event handling is a crucial aspect of React, enabling components to become interactive. React facilitates this by offering a mechanism to manage user interactions, including clicks, form submissions, and keyboard events, through event handlers.

Here’s a summary of how event handling works:

- **Event Handlers** <br>
  Functions that respond to user interactions. Common event handlers include `onClick`, `onChange`, `onSubmit`, etc.
- **Event Objects** <br>
  React wraps native events in a synthetic event object to ensure consistent behavior across browsers. This object is passed to the event handler and contains details about the event.
- **Binding Event Handlers** <br>
  Event handlers are often bound to the component’s context. This can be done using arrow functions or `.bind(this)`.

Example of an event handler in a React component:

```jsx
function MyComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

## 📝 Forms in React

Forms in React involve handling user input and managing form state. React provides several tools and patterns for working with forms:

**Controlled components** are components that manage their own form data via state. The value of the form element is controlled by React state, making it easy to validate and handle input changes.

Example of a controlled component:

```jsx
function MyForm() {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted with value: " + inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Uncontrolled components** are components that use refs to access form data. The form data is not controlled by React state but by the DOM itself.

Example of an uncontrolled component:

```jsx
function MyForm() {
  const inputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted with value: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```
