import React, { Fragment, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { getTime } from './helpers/time';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300');

  * {
    margin: 0 auto;
  }

  html {
    background-color: ${props => props.color};
    font-family: 'Lato', Helvetiva, Arial, sans-serif;
  }

  h1 {
    font-size: 5rem;
    font-weight: 100;
  }

  footer {
    font-weight: 300;
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
      <Footer>Recreated with ❤️by Dyl 🦊</Footer>
      <GlobalStyle color={time} />
    </Fragment>
  );
};

export default App;
