import React, { useContext, useState } from 'react';
import { MyContext } from './context';

function Content() {
  const [count, setCount] = useState(0);
  const [displayContent, setDisplayContent] = useState(false);
  const { dark, setDark } = useContext(MyContext);

  const themeChanged = () => {
    setDark(!dark);
  };

  const visibilityChanged = () => {
    alert("The button is clicked")
    setDisplayContent(!displayContent);
  };

  const countChanged = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={themeChanged}>Toggle</button>
      <div className='div1'
        style={{
          backgroundColor: dark ? 'black' : 'white',
          color: dark ? 'white' : 'black'
        }}
      >
        <p style={{ display: displayContent ? 'block' : 'none' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus. Mauris in aliquam sem fringilla ut morbi tincidunt. Sit amet tellus cras adipiscing enim eu turpis egestas. Diam quis enim lobortis scelerisque fermentum dui faucibus. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Malesuada bibendum arcu vitae elementum. Vel eros donec ac odio tempor orci dapibus ultrices in. In egestas erat imperdiet sed euismod nisi porta lorem. Enim tortor at auctor urna. Commodo odio aenean sed adipiscing diam donec adipiscing.
        </p>
        <button onClick={visibilityChanged}>Content</button>
        <h3>{count}</h3>
        <button onClick={countChanged}>Like</button>
      </div>
    </div>
  );
}

export default Content;