import React, { useState } from 'react';
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore, Home, ListAltOutlined, LocationCity, ProductionQuantityLimitsTwoTone, Category, Moving, PeopleAltOutlined, Person, MediationOutlined, AddCircleOutlined } from '@mui/icons-material';
import Link from 'next/link';

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    items?: MenuItem[];
    open?: boolean;
    show?: boolean;
    component: React.ReactNode | null
}

interface NavProps {
    onMenuClick: (component: React.ReactNode) => void;
}
const Nav: React.FC<NavProps> = ({ onMenuClick }) => {
    //   const { permissions } = useAuthContext();
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        { label: 'Home', icon: <Home />, component: <p>Componente de menu</p> },
        {
            label: 'Gestão de Usuários',
            icon: <LocationCity />,
            items: [
                { label: 'Listar', icon: <ListAltOutlined />, component: <p>Listar usuários</p> },
                { label: 'Criar', icon: <ListAltOutlined />, component: <p>criar</p> }
            ],
            show: /*permissions?.isSuperUser*/ true,
            component: null
        },
        {
            label: 'Gestão de Clientes',
            icon: <LocationCity />,
            items: [
                { label: 'Listar', icon: <ListAltOutlined />, component: <p>Listar Clientes</p> },
                { label: 'Criar', icon: <ListAltOutlined />, component: <p>criar</p> }
            ],
            show: /*permissions?.isSuperUser*/ true,
            component: null
        },
        {
            label: 'Produtos',
            icon: <LocationCity />,
            items: [
                { label: 'Criar', icon: <ListAltOutlined />, component: <p>Criar produtos</p> },
                { label: 'Criar Categoria', icon: <ListAltOutlined />, component: <p>criar categoria</p> },
                { label: 'Listar Produtos', icon: <ListAltOutlined />, component: <p>Listar produtos</p> },
                { label: 'Listar Categorias', icon: <ListAltOutlined />, component: <p>Listar Categorias</p> }
            ],
            show: /*permissions?.isSuperUser*/ true,
            component: null
        },
    ]);

    const handleCollapse = (index: number) => {
        setMenuItems((prevItems) => {
            const newItems = [...prevItems];
            newItems[index].open = !newItems[index].open;
            return newItems;
        });
    };

    const renderMenuItem = (item: any, index: number) => (
        <React.Fragment key={index}>
            <ListItemButton onClick={() => { handleCollapse(index);  onMenuClick(item.component); }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
                {item.items && (item.open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {item.items && (
                <Collapse in={item.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.items.map((subItem: any, subIndex: number) => (
                            <ListItemButton sx={{ pl: 4 }} onClick={() => onMenuClick(subItem.component)}>
                                <ListItemIcon>{subItem.icon}</ListItemIcon>
                                <ListItemText primary={subItem.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            )}
        </React.Fragment>
    );

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            {menuItems.map((item: any, index: number) =>
                item.show ? renderMenuItem(item, index) : null
            )}
        </List>
    );
};

export default Nav;
