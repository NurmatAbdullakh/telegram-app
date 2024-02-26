import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useEffect } from "react";

const Home = () => {
  const [initDataUnsafe, initData] = useInitData();

  useEffect(() => {
    console.log(initDataUnsafe?.user);
  }, [initData, initDataUnsafe]);

  return <div>{initDataUnsafe?.user?.first_name}</div>;
};

export default Home;
