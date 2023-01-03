import React from 'react'
import { remo } from './assets'

import {
  Navbar,
  Landing,
  Yard,
  Nfts,
  Utilities,
  Team,
  Roadmap,
  Questions,
  Footer,
} from './components'


const App = () => (
  <div className="max-w-[1700px] min-w-[300px] m-auto bg-[url(./assets/Rectangle-34624161.webp)] bg-no-repeat bg-bottom bg-contain overflow-x-hidden">
    <Navbar/>
    <Landing />
    <Yard />
    <Nfts />
    <Utilities />
    <Team />
    <Roadmap />
    <Questions />
    <Footer />
  </div>
)

export default App