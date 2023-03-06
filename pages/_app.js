import { AnimatePresence } from 'framer-motion'
import Header from '../components/header/Header'

import '../styles/global.css'
import '../styles/layout.css'

import '@fontsource/amiko'
import '@fontsource/bebas-neue'
import Experience from '../components/canvas/Experience'

function App({ Component, pageProps }) {
  return (
    <>
      <Experience className={'canvas'} />
      <Header  className={'header'}/>
      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default App