import React from 'react';
import MyRouter from './router/router'
import { Provider } from 'react-redux'
import Store from './store/store'

import './app.css'

function App() {
  return (
    <Provider store={Store}>
      <MyRouter />
    </Provider>
  );
}

export default App;
