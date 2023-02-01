import "../styles/globals.css";
import Header from "./Header";

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
        <Header />
        <main className="p-4 text-2xl">{children}</main>
      </body>
    </html>
  );
}
