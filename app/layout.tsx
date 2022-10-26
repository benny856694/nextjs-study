import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <title>NextJs 13</title>
      <head></head>
      <body className="container mx-auto">
        <h2 className="text-center text-lg mt-4">Nextjs 13 is Cool</h2>
        {children}
      </body>
    </html>
  );
}
