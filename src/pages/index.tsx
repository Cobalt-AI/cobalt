import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const Index: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/requests");
  }, []);

  return <div></div>;
};

export default Index;
