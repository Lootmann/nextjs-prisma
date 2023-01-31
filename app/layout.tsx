import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>No Juice</title>
      </head>

      <body className="bg-slate-400">
        <header className="p-4 bg-slate-700">
          <h1 className="text-slate-200 text-2xl">hoge</h1>
        </header>

        <main className="p-4 text-2xl">{children}</main>
      </body>
    </html>
  );
}
