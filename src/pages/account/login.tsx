import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NextPage } from 'next';
import Layout from '../../components/layout/Layout';
import LoginContainer from "@/components/login/Login";

interface Props {}

const LoginPage: NextPage<Props> = () => {
    const router = useRouter();

    return (
        <Layout>
        </Layout>
    );
};