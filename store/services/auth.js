import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async (user, thunkAPI) => {
    const response = await fetch('/users/sign_in.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user 
      })
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    const response = await fetch('/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user 
      })
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)


export const fetchMe = createAsyncThunk(
  'auth/me',
  async (slug, thunkAPI) => {
    const response = await fetch(`/api/users/1.json`).then((res) => {
      return res.json()
    });
    return response.user;
  }
)

export const unAuthenticate = createAsyncThunk(
  'auth/unauthenticate',
  async (user, thunkAPI) => {
    const response = await fetch('/users/sign_out.json', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json()
    });
    return response;
  }
)