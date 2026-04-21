import "./globals.css";

export const metadata = {
  title: "M7-Cátalogo",
  description: "Conheça o nosso  catálogo de produtos !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}