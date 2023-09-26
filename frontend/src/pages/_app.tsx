import Layout1 from "@/components/Layout1";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout1>
      <Component {...pageProps} />
    </Layout1>
  );
}

// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { NextComponentType, NextPageContext } from "next/types";

// interface ComponentWithLayout extends AppProps {
//   Component: NextComponentType<NextPageContext, any, any> & {
//     getLayout(Component: JSX.Element): JSX.Element;
//   };
// }
// export default function App({ Component, pageProps }: ComponentWithLayout) {
//   // export default function App({ Component, pageProps }: AppProps) {
//   const getLayout = Component.getLayout || ((page: any) => page);
//   return getLayout(<Component {...pageProps} />);

//   // return <Component {...pageProps} />
// }
