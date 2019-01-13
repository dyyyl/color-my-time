import React, { Fragment, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { getTime } from './helpers/time';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:100');

  * {
    margin: 0 auto;
  }

  html {
    background-color: ${props => props.color};
  }

  h1 {
    font-family: 'Lato', Helvetiva, Arial, sans-serif;
    font-size: 5rem;
    font-weight: 100;
  }
`;

const App = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setTime(getTime());
  });

  return (
    <Fragment>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ color: '#ffffff' }}>{time}</h1>
      </div>
      <GlobalStyle color={time} />
    </Fragment>
  );
};

export default App;
