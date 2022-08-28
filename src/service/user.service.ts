import Router from 'next/router';
import { useCookies } from 'react-cookie';

import axios from 'axios';

async function login(username: string, password: string) {
    const [cookie, setCookie] = useCookies<string>(['token']);

    const _data = await axios.post(`/auth/login`, {
        username, 
        password
    });
    setCookie('token', _data.data, {
        expires: new Date()
    });
    return _data;
}

async function logout() {
    const [cookie, setCookie, removeCookie] = useCookies<string>(['token']);
    removeCookie('token');
    Router.push('/');
}

export default login;