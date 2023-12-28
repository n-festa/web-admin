import React, { Fragment } from 'react';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import RefreshTokenHandler from '@utils/RefreshTokenHandler';
import { useState } from 'react';
import { NextPage } from 'next';
import { ToastContainer } from "react-toastify";
// types
import type { AppProps } from 'next/app';

// global styles

import "react-toastify/dist/ReactToastify.css";
import '@assets/css/bootstrap.min.css';
import '@assets/css/global.css';
import '@assets/css/fonts.css';
import '@assets/css/login.css';
import '@assets/css/style.css';

type ExtendedAppProps = AppProps & {
  Component: NextPage;
//  emotionCache?: EmotionCache;
};

const MyApp = ({ 
    Component, 
    pageProps: { session, ...pageProps }, 
  }: ExtendedAppProps) => {
    
    const [interval, setInterval] = useState(0);

    return(
      <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
        <SessionProvider session={session} refetchInterval={interval}>
          <Component {...pageProps} />
          <RefreshTokenHandler setInterval={setInterval} />
        </SessionProvider>
      </Fragment>
    )
};

export default appWithTranslation(MyApp);