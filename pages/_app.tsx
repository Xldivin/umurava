import type { AppProps } from 'next/app'
import MuiTheme from "theme/MuiTheme";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";


type MyAppProps = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

const App = ({ Component, pageProps }:MyAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return(
    <MuiTheme>
        {getLayout(<Component {...pageProps} />)}
    </MuiTheme>
  )
}

export default App