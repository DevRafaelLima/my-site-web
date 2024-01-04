import { Box, Grid, TextField, Button, Typography, IconButton, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import React, { useState } from 'react'
import '../../styles/reset.css';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Api from '../../api';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type TInputs = {
    identificador: string,
    password: string
}
const schema = yup.object().shape({
    identificador: yup.string().required('Informe o identificador, cpf ou cnpj'),
    password: yup.string().required('Informe sua senha')
})
const api = process.env.NEXT_PUBLIC_BASE_URL_API

const Login = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<TInputs>({
        resolver: yupResolver(schema)
    })
    const [erroLogin, setErroLogin] = useState(false);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleLogin = async (credentials: any) => {
        try {

            const response = await Api.post(`v1/token`, credentials);
            const token = response.data.token

            const dateExpires = new Date();
            dateExpires.setTime(dateExpires.getTime() + (24 * 60 * 60 * 1000)); // 24 horas em milissegundos
            const expires = "expires=" + dateExpires.toUTCString();

            document.cookie = `token=${token}; ${expires}; path=/`;

            window.location.replace('/');

        } catch (error) {
            setErroLogin(true)
        }
    }
    const onSubmit = (formValues: any) => {
        const credentialsWithUserType = { ...formValues };
        handleLogin(credentialsWithUserType)
    }
    return (
        <Box height={100} sx={{ height: '100vh' }} display="flex" justifyContent="center" alignItems="center">
            login
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6} maxWidth={500}>
                    <Grid item xs={12}>
                        <Controller
                            name="identificador"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    fullWidth
                                    value={field.value}
                                    label={"CPF"}
                                    onChange={field.onChange}
                                    error={!!errors.identificador}
                                    InputLabelProps={{ shrink: true }}
                                    helperText={errors.identificador?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    fullWidth
                                    label="Senha"
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                        )
                                    }}
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={!!errors.password}
                                    InputLabelProps={{ shrink: true }}
                                    helperText={errors.password?.message}
                                />
                            )}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Button fullWidth variant='contained' type='submit'>
                            Entrar
                        </Button>
                    </Grid>
                    {erroLogin && (
                        <Typography m="5px" color="red">Identificador ou senha estão incorretos. </Typography>
                    )}
                </Grid>
            </form> */}
        </Box>
    )
}

export default Login