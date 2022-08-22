import { NextPage } from "next";
import { useState, useEffect } from 'react';
import Layout from "../layout/Layout";

import LoginInputContainer from '../input/LoginInput';
import ButtonComponent from '../button/LoginButton';

interface Props {}

const LoginContainer: NextPage<Props> = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ invalidLoginMessage, setInvalidLoginMessage ] = useState<string>('');

    async function submitForm(username: string, password: string) {
        
    }

    return (
        <Layout>
            <div className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-screen max-w-sm sm:max-w-md">
                <h3 className="text-gray-500 text-center uppercase font-bold mb-2">Login</h3>
                <LoginInputContainer
                    message="Enter your Email"
                    onChange={}
                    errorMessage={}
                    required
                    id="username"
                    label="email"
                    name="username"
                    placeholder="Enter Your Email"
                / >

            </div>
        </Layout>
    );
};

export default LoginContainer;