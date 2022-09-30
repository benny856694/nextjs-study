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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Ecommerce Shop</title>
      </Head>

      <main className="">
        <div className="text-lg sticky top-0 bg-black text-white font-bold p-2">
          <h1 className="container mx-auto">Ecommerce Shop</h1>
        </div>
        <div className='container mx-auto flex flex-wrap p-4 gap-2 justify-center'>
          {
            products.map(p => (<a href='#' className='flex w-96 items-start border rounded p-4 hover:shadow-lg transition' key={p.id}>
              <Image src={p.image} width={100} height={50} alt={''} />
              <div className='flex flex-col ml-4 content-start items-start'>
                <h4 className='font-bold leading-tight'>{p.title}</h4>
                <h5 className='font-medium my-2'>{p.category}</h5>
                <p className='line-clamp-3 break-all'>{p.description}</p>
              </div>

            </a>))
          }
        </div>
      </main>
    </div>
  );
}
