import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import { Provider } from 'react-redux';
import store from '../redux/store';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.array,
}.isRequired;
