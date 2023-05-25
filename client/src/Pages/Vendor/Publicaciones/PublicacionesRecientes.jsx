import React from 'react'
import { Box, Typography } from '@mui/material'
import HomeCardComents from '../../../Components/Home/HomeTopPublicaiones/HomeCardComents'

export const PublicacionesRecientes = () => {
  return (
    <Box sx={{ width: "400px", marginRight: "70px" }}>
      
      <Typography variant="h5" color="primary" sx={{marginBottom:4}} align='left'>Top publicaciones</Typography>
        <HomeCardComents/>  
    </Box>
  )
}