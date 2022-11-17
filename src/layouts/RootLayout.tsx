import NextHead from "next/head";
import Navbar from "../components/root/navbar/Navbar";
import SkipToContent from "@components/root/SkipToContent";
import Footer from "@components/root/footer/Footer";
import { config } from "@configs/site-config";
import ExportedImage from "next-image-export-optimizer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <meta
          name="author"
          content={`${config.author.company} - ${config.author.name} - ${config.author.url}`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#f31260"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
      </NextHead>
      <div className="pointer-events-none fixed inset-0 -z-50 h-screen w-screen">
        <ExportedImage
          src="/images/bg/bg-1.jpg"
          alt="Obrázek pozadí"
          width={1620}
          height={1080}
          loading="eager"
          placeholder="blur"
          className="h-full w-full bg-zinc-900 object-cover opacity-60"
        />
      </div>
      <header>
        <SkipToContent />
        <Navbar />
      </header>
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
