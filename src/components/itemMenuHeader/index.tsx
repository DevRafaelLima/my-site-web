import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import React from 'react'
type TItemMenu = {
    nome: string
    icone: any,
    link: string,
    abrirEmNovaAba?: boolean
}
const ItemMenu: React.FC<TItemMenu> = ({ nome, icone, link, abrirEmNovaAba}) => {

    return (
        <Link href={link} style={{
            textDecoration: 'none',
            margin: 1,
            color: 'inherit',
        }} target={abrirEmNovaAba ? '_blank' : undefined} >
            <ListItemButton sx={{ 
                margin: 1, 
                padding: 0, 
                textAlign: "right" }}
                >
                <ListItemIcon sx={{ display: "flex", justifyContent: "center", margin: 0, padding: 0 }}>
                    {icone}
                </ListItemIcon>
                <ListItemText primary={nome} />
            </ListItemButton>
        </Link>
    )
}

export default ItemMenu