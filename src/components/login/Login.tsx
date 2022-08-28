import { NextPage } from "next";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "../layout/Layout";

import LoginInputContainer from '../input/LoginInput';
import ButtonComponent from '../button/LoginButton';
import login from "@/service/user.service";

interface Props {}

const LoginContainer: NextPage<Props> = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ invalidLoginMessage, setInvalidLoginMessage ] = useState<string>('');

    const router = useRouter();
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);

    async function submitForm(username: string, password: string) {
        const data = await login(username, password);
        return data;
    }

    return (
        <Layout>
            <div className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-screen max-w-sm sm:max-w-md">
                <h3 className="text-gray-500 text-center uppercase font-bold mb-2">Login</h3>
                
            </div>
        </Layout>
    );
};

export default LoginContainer;