interface CustomWindow extends Window {
    Telegram?: {
        WebApp?: unknown; 
    }
}

const useTelegram = () => {
    const tg = (window as CustomWindow)?.Telegram?.WebApp;
    return tg;
}

export default useTelegram;