import * as React from 'react';
import type { NextPage } from "next";

import Layout from '../components/layout/Layout';
import ArrowLink from '../components/link/ArrowLink';
import ButtonLink from '../components/link/ButtonLink';
import UnderlineLink from '../components/link/UnderlineLink';
import UnstyledLink from '../components/link/UnstyledLink';

import Vercel from '../../public/vercel.svg';

const Home: NextPage = () => {
  return (
    <Layout>

      <main>

        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4'>
              HappyIC Telegram Crawler Web Interface
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              This page is for controlling our telegram Crawler
            </p>

          </div>
        </section>

      </main>
    </Layout>
  );
};

export default Home;