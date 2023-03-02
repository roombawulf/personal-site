import { AnimatePresence } from 'framer-motion'
import Header from '../components/header/Header'

import '../styles/global.css'
import '../styles/layout.css'

import '@fontsource/amiko'
import '@fontsource/bebas-neue'

function App({ Component, pageProps }) {
  return (
      <AnimatePresence mode='wait' initial={false}>
        <>
          <Header className='header' />
          <main className='main' >
            <Component {...pageProps} />
          </main>
        </>
      </AnimatePresence>
  )
}

export default App