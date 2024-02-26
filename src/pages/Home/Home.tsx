import { useEffect } from "react";
import useTelegram from "../../hooks/useTelegram";

const Home = () => {
  const tg = useTelegram();

  useEffect(() => {
    tg && console.log(JSON.stringify(tg.initDataUnsafe));
  }, [tg]);

  return <div>{tg?.initDataUnsafe.user?.first_name}</div>;
};

export default Home;
