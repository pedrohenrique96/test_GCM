import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
