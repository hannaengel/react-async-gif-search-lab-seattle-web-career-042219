import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '/Users/hannaengel/Development/Mod4/react-async-gif-search-lab-seattle-web-career-042219/src/containers/GifListContainer.js'

const App = () => {

  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
