import type { GetServerSideProps, NextPage } from "next";
import { getServerAuthSession } from "@/server/auth";
import Layout from "@/components/layout";
import Main from "@/components/layout/main";
import Section from "@/components/shared/section";

const Home: NextPage = () => {
  return (
    <Layout>
      <Section>
        <div className="col-span-full lg:col-span-9 xl:col-span-6">
          <Main />
        </div>
        <div className="hidden xl:col-span-3 xl:block">
          <div className="sticky top-0">
            <div className="flex items-center justify-between"></div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
