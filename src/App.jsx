import React from 'react'
import Heading from './components/Heading'
import CreateForm from './components/CreateForm'
import Status from './components/Status'
import ListGroup from './components/ListGroup'
import List from './components/List'

const App = () => {
  return (
    <div className='w-[440px] mx-auto mt-20'>
      <Heading/>
      <CreateForm/>
      <Status/>
      <ListGroup/>
    </div>
  )
}

export default App