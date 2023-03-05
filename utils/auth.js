import axios from "axios";

const API_KEY = "AIzaSyD4YcR6IrrvEg_WCUTIJAM7AXFtGjT5IOo";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const payload = {
    email,
    password,
    returnSecureToken: true,
  };

  const response = await axios.post(url, payload);
  const token = response.data.idToken;
  return token;
}

export function createUser(mode, email, password) {
  return authenticate(mode, email, password);
}

export async function loginUser(mode, email, password) {
  return authenticate(mode, email, password);
}
