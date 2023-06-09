import { Box } from '@mui/material'
import React, { useState } from 'react'
import Conversations from './Conversations'
import Header from './Header'
import Search from './Search'

const Menu = () => {

  const [text,setText] = useState('')

  return (
    <Box>
      <Header />
      <Search setText={setText} />
      <Conversations text={text} />
    </Box>
  )
}

export default Menu