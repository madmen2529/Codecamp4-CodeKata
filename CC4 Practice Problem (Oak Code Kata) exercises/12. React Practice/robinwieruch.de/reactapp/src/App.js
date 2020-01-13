//https://www.robinwieruch.de/react-function-component#react-function-component-lifecycle

import React, { useState } from 'react';
import './App.css';

function App() {
  const prop = 'This is a prop!';
  const header = 'Title';
  const content = 'Lorem ipsum';

return (
  <div>
    <Example />
    <Props value={prop}/>
    <ArrowComponent header={header} content={content}/>
    <StateComponent />
    <EventHandlerComponent /> 
    <CallbackFunctionComponent />
    <OverrideComponent />
  </div>
  );
}

/*
  REACT FUNCTION COMPONENT EXAMPLE
*/

function Example(){
  const example = 'Hello Function Component!';
  return <h1>{example}</h1>;
}

/*
  REACT FUNCTION COMPONENT: PROPS
*/

function Props(props) {
  return <h1>{props.value}</h1>;
}

/*
  REACT ARROW FUNCTION COMPONENT
*/

const ArrowComponent = ({ header, content}) => 
  <div><h1>{header}</h1><p>{content}</p></div>;

/*
  REACT FUNCTION COMPONENT: STATE
*/

const StateComponent = () => {
  const [sampleState, setSampleState] = useState(
    'Hello This is a state!'
  );

  return (
    <div>
      <p>{sampleState}</p>
      <input
        type="text"
        value={sampleState}
        onChange={e => setSampleState(e.target.value)}
      />
    </div>
  );
}

/*
  REACT FUNCTION COMPONENT: EVENT HANDLER
*/

const EventHandlerComponent = () => {
  const [sampleState, setSampleState] = useState(
    'Hello This is a state from EventHandlerComponent!'
  );

  const handleChange = e => setSampleState(e.target.value);

  return (
    <div>
      <p>{sampleState}</p>
      <input
        type="text"
        value={sampleState}
        onChange={handleChange}
      />
    </div>
  );
}

/*
  REACT FUNCTION COMPONENT: CALLBACK FUNCTION
*/

const CallbackFunctionComponent = () => {
  const [sampleState, setSampleState] = useState(
    'Hello This is a state from CallFunction!'
  );
  const handleChange = e => setSampleState(e.target.value);

  return (
    <div>
      <Headline headline={sampleState} />
      <Input value={sampleState} onChangeInput={handleChange}>
        Set Headline:
      </Input>
    </div>
  );
};
const Headline = ({ headline }) => (
    <h2>{headline}</h2>
)
const Input = ({ value, onChangeInput, children}) => (
  <label>
    {children}
    <input type="text" value={value} onChange={onChangeInput} />
  </label>
)

const OverrideComponent = () => {
  const sayHello = () => alert('Hello');
  const sayHelloAsync = () => setTimeout(() => alert(`Hello with delay 1000 ms`), 1000);
  return (
    <div>
      <ButtonBasic handleClick={sayHello} />
      <ButtonDestructuring />
      <ButtonDefaultProps />
      <ButtonAsync handleClick={sayHelloAsync}/>
      <ButtonAsyncWithState />
    </div>
  )
};

const ButtonBasic = ({ handleClick }) => {
  const sayDefault = () => alert('Default');
  const onClick = handleClick || sayDefault;
  return (
    <button type="button" onClick={onClick}>
      Button Basic
    </button>
  );
};

const ButtonDestructuring  = ({ handleClick = () => alert('Default') }) => (
  <button type="button" onClick={handleClick}>
    Button Destructuring
  </button>
);

const ButtonDefaultProps = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Button Default Props
  </button>
);
ButtonDefaultProps.defaultProps = {
  handleClick: () => alert('Default'),
};

const ButtonAsync = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Button Async
  </button>
);

const ButtonAsyncWithState = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () =>
    setTimeout(
      () => setCount(currentCount => currentCount + 1),
      1000
    );
  const handleDecrement = () =>
    setTimeout(
      () => setCount(currentCount => currentCount - 1),
      1000
    );
  return (
    <div>
      <h1>{count}</h1>
      <ButtonAsyncWithStateTemplate handleClick={handleIncrement}>Increment</ButtonAsyncWithStateTemplate>
      <ButtonAsyncWithStateTemplate handleClick={handleDecrement}>Decrement</ButtonAsyncWithStateTemplate>
    </div>
  );
};
const ButtonAsyncWithStateTemplate = ({ handleClick, children }) => (
  <button type="button" onClick={handleClick}>
    {children}
  </button>
);

/*
  REACT FUNCTION COMPONENT: LIFECYCLE
*/


/*
  PURE REACT FUNCTION COMPONENT
*/

export default App;
