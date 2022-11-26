import React, { useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "../../schema/signIn";
import axiosClient from "../../api/axiosClient";
import { Navigate } from "react-router";
import {Link as LinkRouter } from 'react-router-dom'

const theme = createTheme();

const SignIn = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("Waiting")
      const response = await axiosClient.post("/users/sign_in", data);
      const localStorageTokenName = "guh_token"
      if (response?.data?.status === 'success') {
        localStorage[localStorageTokenName] = response.headers.authorization.slice(7)
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isSuccess) return <Navigate to="/dashboard" />;
  else
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <Input
                {...register("email")}
                type="email"
                id="email"
                name="email"
                label="Email"
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
              <Input
                {...register("password")}
                type="password"
                id="password"
                name="password"
                label="Password"
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#047857"}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <LinkRouter to="/sign-up" className="text-emerald-700 hover:font-bold">
                    Don't have an account? Sign Up
                  </LinkRouter>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
};

export default SignIn;
