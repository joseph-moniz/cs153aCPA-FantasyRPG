import React, { useState } from "react";
import ValueProvider from './ValueContext';
import CreateProfileScreen from './MainNav'

const App = () => {
  const data = {total:0, count:0, log:[]}

  return (
    <ValueProvider value={data}>
        <CreateProfileScreen />
    </ValueProvider>
  )
}

export default App
