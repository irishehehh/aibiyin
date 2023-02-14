import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'normalize.css'
import { Provider } from 'react-redux';
import store  from './store';
import { ThemeProvider } from 'styled-components';
import theme from '@/assest/theme'



import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="Loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App/>
        </HashRouter>

      </ThemeProvider>


    </Provider>

  </Suspense>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

