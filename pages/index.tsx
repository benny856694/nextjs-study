import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/future/image'
import Head from 'next/head';
import { baseUrl } from './consts';
import type { Product } from './model/product';



export const getStaticProps: GetStaticProps<{ products: Product[] }> = async (context) => {
  const resp = await fetch(baseUrl)
  const json = await resp.json() as Product[]
  console.log(json)
  return {
    props: {
      products: json
    }
  }
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Fake Ecommerce</title>
      </Head>

      <main className="">
        <div className="text-lg bg-black text-white font-bold p-2">
          <h1 className="container mx-auto">Ecommerce Shop</h1>
        </div>
        <div className='flex flex-wrap p-4 gap-2 justify-center'>
          {
            products.map(p => (<div className='flex w-96  border rounded p-4 overflow-hidden' key={p.id}>
              <Image src={p.image} width={100} height={50} alt={''} className="self-start"/>
              <div className='flex flex-col ml-4'>
                <h4 className='font-bold overflow-hidden text-ellipsis whitespace-nowrap'>{p.title}</h4>
                <h5>{p.category}</h5>
                <p className='text-ellipsis '>{p.description}</p>
              </div>

            </div>))
          }
        </div>
      </main>
    </div>
  );
}
