import Header from '@/components/header'
import { Box, Typography } from '@mui/material'
import React from 'react'
import '../../styles/reset.css';

const Blog: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" bgcolor="#000">
        <Box flex={1}>
            <Header/>
        </Box>
        <Box  display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
            <Typography variant="body2" color="#FFF">
                Nenhum artigo publicado.
            </Typography>
        </Box>
    </Box>
  )
}

export default Blog