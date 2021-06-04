export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}

import * as React from "react";
import type { NextComponentType, NextPageContext } from "next";
import type { NextRouter } from "next/router";
// import { AppState } from "components/app-state";

export default function App({ Component, pageProps }: AppRenderProps) {
  // const appState = useContext(AppState);
  return <Component {...pageProps} />;
}
