import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {};

const banner = (
  <Banner storageKey="some-key">
    당근 커뮤니티에 입사하신 것을 환영합니다 🎉
  </Banner>
);
const navbar = <Navbar logo={<b>🥕 당근 커뮤니티</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © 당근 커뮤니티.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          themeSwitch={{
            dark: "dark",
            light: "light",
            system: "system",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
