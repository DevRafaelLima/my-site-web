import Header from '@/components/header'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import '../../styles/reset.css';
import React from 'react'

const ExperProfissional = () => {
    return (
        <Box display="flex" flexDirection="column" height="100vh" bgcolor="#000">
            <Box flex={1}>
                <Header />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" padding={2}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/images/logo-startse.JPG'
                                alt="logo startse"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Empresa: StartSe
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descrição do cargo: Como estagiário na StartSe, sou desenvolvedor web focado em NextJS, TypeScript, MUI no front-end, e PHP, Laravel e MySQL no back-end. Contribuo ativamente para implementação de funcionalidades e manutenção do sistema dashboard. Em constante evolução, enfrento desafios diários, aprimorando minhas habilidades técnicas e colaborativas. Minha jornada na StartSe é uma valiosa experiência de aprendizado e crescimento profissional.
                                </Typography>

                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Emprego atual
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    )
}

export default ExperProfissional