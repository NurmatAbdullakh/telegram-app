import { useShowPopup, MainButton } from "@vkruglikov/react-telegram-web-app";

const Home = () => {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: "Hello, I am popup",
    });

  return <MainButton text="SHOW POPUP" onClick={handleClick} />;
};

export default Home;
