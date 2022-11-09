'use client';

import { use } from 'react';

async function fetchData() {
  const resp = await fetch('/api/hello');
  return await resp.json();
}

const data = fetchData();

export default function Page() {

  const d = use(data);

  return <div>about page {d.name} </div>;
}
