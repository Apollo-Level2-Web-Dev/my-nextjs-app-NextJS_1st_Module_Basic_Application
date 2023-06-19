import RootLayout from "@/components/Layouts/RootLayouts";
import Head from "next/head";
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name="home page" description="this page in created by next js" />
      </Head>
      <h1>This is Next.JS Home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
