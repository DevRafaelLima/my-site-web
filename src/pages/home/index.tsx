import { Box, Button, Grid, Typography } from "@mui/material"
import { Instagram, Facebook, GitHub, LinkedIn } from '@mui/icons-material';
import Header from "@/components/header";
import '../../styles/reset.css';
import { TItensMenu } from "@/types/TItensMenu";
import ItemMenu from "@/components/itemMenuHeader";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const itensMenu: TItensMenu[] = [
  {
    nome: "",
    icone: <GitHub sx={{ color: "#FFF" }} />,
    link: process.env.NEXT_PUBLIC_REDE_SOCIAL_GITHUB as string,
    abrirEmNovaAba: true,
    // selecionado: false
  }, {
    nome: "",
    icone: <Instagram sx={{ color: "#fff" }} />,
    link: process.env.NEXT_PUBLIC_REDE_SOCIAL_INSTAGRAM as string,
    abrirEmNovaAba: true,
    // selecionado: false

  }, {
    nome: "",
    icone: <LinkedIn sx={{ color: "#fff" }} />,
    link: process.env.NEXT_PUBLIC_REDE_SOCIAL_LINKEDIN as string,
    abrirEmNovaAba: true,
    // selecionado: false
  }
]
const Home = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flex={1}>
        <Header />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
        <Box maxWidth="90%" textAlign="center">
          <Slider ref={sliderRef} {...settings}>
            <Box maxWidth="500px" textAlign="center">
              <Box display="flex" justifyContent="center">
                <img src='/images/1651843626007.jpg' alt='perfil' height="200px" width="200px" style={{ borderRadius: '50%' }} />
              </Box>
              <Typography variant="body1" marginTop={2}>
                Rafael Santos
              </Typography>
              <Typography variant="body2" marginTop={2}>
                Olá, Eu sou um estudante de engenharia de software apaixonado por desenvolvimento web. Atualmente, estou trabalhando como desenvolvedor web full stack como estagiário, explorando e aprendendo continuamente.
              </Typography>
              <Box display="flex" justifyContent="center" marginTop={2}>
                {itensMenu.map(item => (
                  <ItemMenu nome={item.nome} icone={item.icone} link={item.link} abrirEmNovaAba={item.abrirEmNovaAba} />
                ))}
              </Box>
            </Box>
            <Box height="60vh">
              <Box height="50px">
                <Typography textAlign="center" variant="h1" fontSize={30}>
                  Conhecimentos sobre
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/html2.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/css.webp")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/javascript.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>

            </Box>
            <Box height="60vh">
              <Box height="50px">
                <Typography textAlign="center" variant="h1" fontSize={30}>
                  Conhecimentos sobre
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={5}>
                  <Grid item xs={4} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/typescript.svg")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/php.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/mysql.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </Box>
            <Box height="60vh">
              <Box height="50px">
                <Typography textAlign="center" variant="h1" fontSize={30}>
                  Conhecimentos sobre
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={5}>
                  <Grid item xs={4} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/react.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/next.jpg")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/laravel.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </Box>
            <Box height="60vh">
              <Box height="50px">
                <Typography textAlign="center" variant="h1" fontSize={30}>
                  Conhecimentos sobre
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={5}>
                  <Grid item xs={4} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/java.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/jquery.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/boostrap.jpg")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </Box>
            <Box height="60vh">
              <Box height="50px">
                <Typography textAlign="center" variant="h1" fontSize={30}>
                  Conhecimento sobre
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={5}>
                  <Grid item xs={12} height="calc(100vh - 50px)">
                    <Box height="300px" display="flex" justifyContent="center" alignItems="center">
                      <Box
                        sx={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                          backgroundImage: 'url("images/nodejs.png")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </Box>
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default Home