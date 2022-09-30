import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/future/image'
import Head from 'next/head';
import { baseUrl } from './consts';
import type { Product } from './model/product';



export const getStaticProps: GetStaticProps = async (context) => {
  const resp = await fetch(`${baseUrl}/products`)
  const json = await resp.json() as Product[]
  console.log(json)
  return {
    redirect: { statusCode: 302, destination: '/products' }
  }
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      redirected
    </div>
  );
}
