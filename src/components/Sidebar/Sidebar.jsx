import { Stack, Typography } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <Stack direction='column' sx={{ p:5 }}>
        <Typography>option 1</Typography>
        <Typography>option 2</Typography>
        <Typography>option 3</Typography>

      </Stack>
    </div>
  )
}

export default Sidebar