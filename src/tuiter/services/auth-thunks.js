import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk("users/login", async (user) => {
    const currentUser = await authService.login(user);
    return currentUser;
  });

export const profileThunk = createAsyncThunk(
    "users/profile", async () => {
    const response = authService.profile();
    return response.data;
   });
export const logoutThunk = createAsyncThunk(
    "users/logout", async () => {
    return await authService.logout();
    }); 
export const updateUserThunk = createAsyncThunk(
    "users/updateUser", async (user) => {
    await authService.updateUser(user);
    return user;
});
export const registerThunk = createAsyncThunk(
    "users/register", async (credentials) => {
    const user = await authService.register(credentials);
    return user;
    });
   