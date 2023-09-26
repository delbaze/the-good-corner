/**========================================================================
 *                           Premiere maniere de faire une layout
 *========================================================================**/
// import Layout1 from "@/components/Layout1";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Layout1>
//       <Component {...pageProps} />
//     </Layout1>
//   );
// }
/**========================================================================
 *                           DEUXIEME MANIERE DE FAIRE UNE LAYOUT
 *========================================================================**/

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next/types";

interface ComponentWithLayout extends AppProps {
  Component: NextComponentType<NextPageContext, any, any> & {
    getLayout(Component: JSX.Element): JSX.Element;
  };
}
export default function App({ Component, pageProps }: ComponentWithLayout) {
  // export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: any) => page);//si jamais j'ai défini un getLayout dans le composant à rendre, on le stocke DANS cette variable, sinon c'est la page par défaut
  return getLayout(<Component {...pageProps} />);

  // return <Component {...pageProps} />
}
