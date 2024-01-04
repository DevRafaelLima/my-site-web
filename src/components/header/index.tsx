import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, ListItemButton, ListItemIcon, ListItemText, List, Collapse } from '@mui/material';
import { ShoppingCart, AssignmentTurnedIn, Dashboard, Instagram, Facebook, Person, ExitToApp, LinkedIn, Work, Code, School, Create, GitHub, Home } from '@mui/icons-material';
import Link from 'next/link';
import ItemMenu from '../itemMenuHeader';
import { TItensMenu } from '@/types/TItensMenu';
import { deflate } from 'zlib';
import { useMenuContext } from '@/contexts/MenuSelectContext';
import { useRouter } from 'next/router';



const Header = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
    const [isActiveExpProfissional, setIsActiveExpProfissional] = useState(false);
    const [isActiveHome, setIsActiveHome] = useState(true);

    // const handleClick = (nome: string) => {
    //     setSelectedMenu(nome)

    //     switch (nome) {
    //         case 'Home':
    //             setIsActiveHome(true);
    //             setIsActiveExpProfissional(false);
    //             setIsActiveProjeto(false);
    //             setIsActiveEducacao(false);
    //             setIsActiveBlog(false)
    //             break;
    //         case 'Experiencia Profissional':
    //             setIsActiveHome(false);
    //             setIsActiveExpProfissional(true);
    //             setIsActiveProjeto(false);
    //             setIsActiveEducacao(false);
    //             setIsActiveBlog(false);
    //             break;
    //         case 'Projetos':
    //             setIsActiveHome(false);
    //             setIsActiveExpProfissional(false);
    //             setIsActiveProjeto(true);
    //             setIsActiveEducacao(false);
    //             setIsActiveBlog(false);
    //             break;
    //         case 'Educacao':
    //             setIsActiveHome(false);
    //             setIsActiveExpProfissional(false);
    //             setIsActiveProjeto(false);
    //             setIsActiveEducacao(true);
    //             setIsActiveBlog(false);
    //             break;
    //         case 'Blog':
    //             setIsActiveHome(false);
    //             setIsActiveExpProfissional(false);
    //             setIsActiveProjeto(false);
    //             setIsActiveEducacao(false);
    //             setIsActiveBlog(true);
    //             break;
    //         default:
    //             setIsActiveHome(true);
    //             setIsActiveExpProfissional(false);
    //             setIsActiveProjeto(false);
    //             setIsActiveEducacao(false);
    //             setIsActiveBlog(false);
    //             break;
    //     }

    // }

    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const itensMenu: TItensMenu[] = [
        {
            nome: "",
            icone: <GitHub sx={{ color: "#FFF" }} />,
            link: process.env.NEXT_PUBLIC_REDE_SOCIAL_GITHUB as string,
            abrirEmNovaAba: true,
        }, {
            nome: "",
            icone: <Instagram sx={{ color: "#fff" }} />,
            link: process.env.NEXT_PUBLIC_REDE_SOCIAL_INSTAGRAM as string,
            abrirEmNovaAba: true,

        }, {
            nome: "",
            icone: <LinkedIn sx={{ color: "#fff" }} />,
            link: process.env.NEXT_PUBLIC_REDE_SOCIAL_LINKEDIN as string,
            abrirEmNovaAba: true,
        },
        {
            nome: "Home",
            icone: <Home sx={{ color: "#fff" }} />,
            link: '/',
            abrirEmNovaAba: false,
        },
        {
            nome: "Experiência Profissional",
            icone: <Work sx={{ color: "#fff" }} />,
            link: '/experienciaProfissional',
            abrirEmNovaAba: false,
        }, {
            nome: "Projetos",
            icone: <Code sx={{ color: "#fff" }} />,
            link: '/projetos',
            abrirEmNovaAba: false,
        }, {
            nome: "Educação",
            icone: <School sx={{ color: "#fff" }} />,
            link: '/educacao',
            abrirEmNovaAba: false,
        }, {
            nome: "Blog",
            icone: <Create sx={{ color: "#fff" }} />,
            link: '/blog',
            abrirEmNovaAba: false,
        }
    ]

    return (
        <AppBar sx={{ backgroundColor: '#000', color: "#fff" }}>
            <Toolbar sx={{ display: "flex", alignContent: "center" }}>
                {/* Menus */}
                <Box flex={1} display="flex" justifyContent="flex-end">
                    <Box>
                        <List
                            component="nav"
                            sx={{ display: 'flex', flexDirection: 'row' }}
                        >
                            {itensMenu.map(item => (
                                <ItemMenu
                                    nome={item.nome}
                                    icone={item.icone}
                                    link={item.link}
                                    abrirEmNovaAba={item.abrirEmNovaAba} />
                            ))}
                            <ListItemButton onClick={(e: React.MouseEvent<HTMLDivElement>) => handleMenuClick(e)}>
                                <ListItemIcon>
                                    <Person sx={{ color: "#fff" }} />
                                </ListItemIcon>
                                <ListItemText primary="Perfil" />
                            </ListItemButton>
                        </List>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>Informações</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Dash</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
                        </Menu>


                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
