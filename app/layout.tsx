import "../styles/globals.css";
import Link from "next/link";

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
        <header className="p-4 text-slate-200 bg-slate-700 flex items-baseline gap-4">
          <h1 className="text-3xl underline mr-4">hoge</h1>

          <Link href="/households" className="text-2xl hover:text-red-700">
            Create Household
          </Link>
        </header>

        <main className="p-4 text-2xl">{children}</main>
      </body>
    </html>
  );
}
