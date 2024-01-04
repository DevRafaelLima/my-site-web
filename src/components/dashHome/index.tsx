import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import Nav from '../navigation'

const DashHome: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);
    const handleMenuClick = (component: React.ReactNode | null) => {
        setSelectedComponent(component);
    };

    return (
        <Box sx={{ height: "100vh" }}>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <Nav onMenuClick={handleMenuClick}/>
                </Grid>
                <Grid item xs={9}>
                    {selectedComponent || <p>Selecione um item no menu</p>}
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashHome