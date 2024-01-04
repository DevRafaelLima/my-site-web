import Header from '@/components/header'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import '../../styles/reset.css';

const Educacao: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" bgcolor="#000">
            <Box flex={1}>
                <Header />
            </Box>
            <Box padding={2} mt={8}>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/images/default.jpg'
                                alt="Nome curso"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nome: Curso 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam eius aperiam a hic enim optio consequatur, aspernatur sit eos aut quos sapiente quam minima rem doloribus accusamus reprehenderit atque!
                                </Typography>

                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Tecnologias/conceitos apreendidos: x, y e z
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/images/default.jpg'
                                alt="Nome curso"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nome: Curso 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam eius aperiam a hic enim optio consequatur, aspernatur sit eos aut quos sapiente quam minima rem doloribus accusamus reprehenderit atque!
                                </Typography>

                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Tecnologias/conceitos apreendidos: x, y e z
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/images/default.jpg'
                                alt="Nome curso"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nome: Curso 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam eius aperiam a hic enim optio consequatur, aspernatur sit eos aut quos sapiente quam minima rem doloribus accusamus reprehenderit atque!
                                </Typography>

                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Tecnologias/conceitos apreendidos: x, y e z
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/images/default.jpg'
                                alt="Nome curso"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nome: Curso 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam eius aperiam a hic enim optio consequatur, aspernatur sit eos aut quos sapiente quam minima rem doloribus accusamus reprehenderit atque!
                                </Typography>

                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Tecnologias/conceitos apreendidos: x, y e z
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/images/default.jpg'
                                alt="Nome curso"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nome: Curso 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam eius aperiam a hic enim optio consequatur, aspernatur sit eos aut quos sapiente quam minima rem doloribus accusamus reprehenderit atque!
                                </Typography>

                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Tecnologias/conceitos apreendidos: x, y e z
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/images/default.jpg'
                                alt="Nome curso"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nome: Curso 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descrição: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam eius aperiam a hic enim optio consequatur, aspernatur sit eos aut quos sapiente quam minima rem doloribus accusamus reprehenderit atque!
                                </Typography>

                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Tecnologias/conceitos apreendidos: x, y e z
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
  )
}

export default Educacao