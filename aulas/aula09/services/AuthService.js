import axios from 'axios';

const API_KEY = 'AIzaSyDejM_bbjcSgrD-JJGdAI87Jhm-WEarXfQ';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

const signIn = async (email, password) => {
  try {
    await axios.post(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });
  } catch (error) {
    if (error.response.data.error.message === 'INVALID_LOGIN_CREDENTIALS')
      throw Error('Usuário/Senha Inválidos');
  }
};

const signUp = async (displayName, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}:signUp?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });
    await update(response.idToken, displayName);
  } catch (error) {
    if (error.response.data.error.message === 'INVALID_LOGIN_CREDENTIALS') {
      throw Error('Usuário já cadastrado');
    }
  }
};

const update = async (idToken, displayName) => {
  try {
    await axios.post(`${BASE_URL}:update?key=${API_KEY}`, {
      idToken,
      displayName,
      returnSecureToken: true,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export { signIn, signUp };
