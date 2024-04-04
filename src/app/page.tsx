"use client";

import Link from 'next/link';
import type { NextPage } from 'next';
import './globals.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AppPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, []);
  return (
    <div className='flex w-full h-full justify-center items-center h-screen'>
      <h1 className='text-black'>Loading...</h1>
    </div>
  );
};

export default AppPage;
