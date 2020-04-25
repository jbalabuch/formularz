import React from 'react';
import { Hi } from './Hi';
import { Nav } from './Nav';
// import Hi from './Hi';

const List = (props) => {
  return (
    <ul>
      <li>
        {props.stala}
      </li>
    </ul>
  )
}

const Button = (props) => <button>{props.children}</button>;

const App = () => {
  return (
    <>
<List stala="WSB" />
<List stala="PWR" />
<Button>nowy click</Button>
<Hi name="John"/>
<Nav />
    </>
  );
}

export default App;
