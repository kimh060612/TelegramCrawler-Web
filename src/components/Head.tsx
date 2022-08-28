import Head from "next/head";
import { string } from "yup/lib/locale";

interface Props {
    title: string;
}

export default function Seo( { title }: Props) {
    return (
        <Head>
            <title>
                {title} | White List HappyIC
            </title>
        </Head>
    );
}