import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fake Ecommerce</title>
      </Head>

      <main className="">
        <div className="text-lg bg-black text-white font-bold p-2">
          <h1 className="container mx-auto">Ecommerce Shop</h1>
        </div>
        <div className="container mx-auto">Product Lists</div>
      </main>
    </div>
  );
}
