import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

import {GlobalProvider} from './contexts/GlobalState.jsx';

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
      <CssBaseline>
        <Header />
        <Main />
      </CssBaseline>
      </GlobalProvider>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
