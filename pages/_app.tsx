import '../styles/globals.css'
import type { AppContext, AppInitialProps, AppLayoutProps, AppProps } from 'next/app'
import Header from './components/header'
import Footer from './components/footer'
import { Component, ReactNode } from 'react'
import { NextComponentType } from 'next'
import { SessionProvider } from 'next-auth/react'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  // const getLayout = Component.getLayout || ((page: ReactNode) => page);
  if(Component.getLayout){
    return (
      Component.getLayout(
        <Component {...pageProps}/>
      )
    )
  }
  // return getLayout(<Component {...pageProps} />);
  return (
    <>
    <SessionProvider>
   <Header/>
   <Component {...pageProps} />
   <Footer/>
   </SessionProvider>
   </>
  )
};

export default MyApp;

// export default function App({ Component, pageProps }: AppProps) {
//   if(Component.getLa){
//     return (Component as Page).getLayout(
//       <Component {...pageProps} />
//     )
//   }
//   return (
//   <>
//   <Header/>
//   <Component {...pageProps} />
//   <Footer/>
//   </>
//   )
// }
