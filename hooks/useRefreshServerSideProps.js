import { useRouter } from "next/router";

export const useRefreshServerSideProps = () => {
  const router = useRouter();

  const refreshServerSideProps = () => {
    router.replace(router.asPath);
  };

  return { refreshServerSideProps };
};
