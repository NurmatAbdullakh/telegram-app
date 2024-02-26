import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useEffect } from "react";

const Home = () => {
  const [InitDataUnsafe] = useInitData();

  useEffect(() => {
    console.log(InitDataUnsafe);
  }, [InitDataUnsafe]);

  return <div>{InitDataUnsafe?.user?.first_name}</div>;
};

export default Home;
