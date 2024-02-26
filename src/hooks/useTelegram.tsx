import { TelegramWebApps } from "telegram-webapps-types";
interface CustomWindow extends Window {
  Telegram?: TelegramWebApps.SDK;
}

const useTelegram = () => {
  const tg = (window as CustomWindow)?.Telegram?.WebApp;
  return tg;
};

export default useTelegram;
