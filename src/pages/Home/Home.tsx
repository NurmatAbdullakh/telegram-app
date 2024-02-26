import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useEffect } from "react";

const Home = () => {
  const [initDataUnsafe] = useInitData();

  useEffect(() => {
    if (initDataUnsafe) {
      console.log(initDataUnsafe);
    }
  }, [initDataUnsafe]);

  return <div>{JSON.stringify(initDataUnsafe)}</div>;
};

export default Home;
