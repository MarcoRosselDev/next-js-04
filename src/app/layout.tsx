import "./globals.css"; // al cargar css global en el root tenemos un alcanze global de stylos en la aplicacion
import { ThemeProvider } from "@/components/theme-provider" // probeedor de estilos recomentdados por next --@next-themes en npm 
import {inter} from "./ui/fonts" // cargar font de google en los archivos publicos para no molestar en la carga de la pagina

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`${inter.style} antialiased`}> esto de antialiased es para tailwind css */}
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}