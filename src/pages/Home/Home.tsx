// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { MainButton } from "@vkruglikov/react-telegram-web-app";
import useTelegram from "../../hooks/useTelegram";
import { useEffect } from "react";

const Home = () => {
  const tg = useTelegram();

  useEffect(() => {
    console.log(tg);

    if (tg) {
      tg?.initDataUnsafe &&
        console.log("====>>>", tg?.initDataUnsafe?.user?.first_name);
    }
  }, [tg]);

  return (
    <div>
      {tg?.initDataUnsafe?.user?.first_name}
      <MainButton text="Click me" />
    </div>
  );
};

export default Home;
