import Head from "next/head";
import Layout from "@/layout";
import Login from "@/components/Login";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </Layout>
  );
}
