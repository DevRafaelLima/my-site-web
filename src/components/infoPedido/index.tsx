import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
type TProduto = {
    nome: string,
    preco: string
};
const produtos: TProduto[] = [
    { nome: "Produto 1", preco: "100,00" },
    { nome: "Produto 2", preco: "10,00" },
    { nome: "Produto 3", preco: "14,00" },
    { nome: "Produto 4", preco: "19,00" },
    { nome: "Produto 5", preco: "2,00" },
    { nome: "Produto 6", preco: "35,00" },
    { nome: "Produto 7", preco: "14,00" },
];
const InfoPedido = () => {
    return (
        <>
            <Box>
                <Typography variant='body1'>
                    Carrinho de compras
                </Typography>
            </Box>
            <Box mb={5}>
                <span>
                    <Typography fontSize={12}>
                        3 itens no carrinho
                    </Typography>
                </span>
            </Box>
            {produtos.map((item, key) => (
                <>
                    <Box component="div" height="1px" bgcolor="#fff" mb={1} />
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>{item.nome}</Typography>

                        </Grid>
                        <Grid item xs={3}>
                            <span>Remover</span>
                        </Grid>
                        <Grid item xs={3}>
                            <b>R$: {item.preco}</b>
                        </Grid>
                    </Grid>
                </>
            ))}
        </>
    )
}

export default InfoPedido