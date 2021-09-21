import '../styles/global.css'

import { ChallengeProvider, ChallengesContext } from '../contexts/ChallengeContexts';

function MyApp({ Component, pageProps }) {
  return (
   <ChallengeProvider >
     <Component {...pageProps} />
   </ChallengeProvider>
  )
}

export default MyApp
