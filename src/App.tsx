// import { useState } from 'react'

import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'

const App: React.FC = () => {
  return (
<div className='w-full min-h-screen'>
<Nav/>
<Home/>
</div>
  )
}

export default App
