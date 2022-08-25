import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NextPage } from 'next';
import Layout from '../../components/layout/Layout';

interface Props {}

const LoginPage: NextPage<Props> = () => {

    const router = useRouter();
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    

    return (
        <Layout>

        </Layout>
    );
};