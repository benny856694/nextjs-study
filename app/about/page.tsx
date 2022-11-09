'use client';

import { use } from 'react';

async function fetchData() {
  const resp = await fetch('/api/hello');
  return await resp.json();
}

const data = fetchData();

export default function Page() {

  const d = use(data);

  return <>{d.result.map((x: string, i: number) => <div key={i}>{x}</div>)} </>;
}
