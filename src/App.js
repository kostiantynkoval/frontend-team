import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store'
import {ThemeProvider} from 'styled-components'
import theme from './theme'
import Container from './components/Container/index';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Container/>
    </ThemeProvider>
  </Provider>
);

export default App;
