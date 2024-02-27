// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import useTelegram from "../../hooks/useTelegram";
import { useEffect } from "react";

const Home = () => {
  const tg = useTelegram();

  useEffect(() => {
    tg.ready()

     tg.expand();
        tg.BackButton.show();
        tg.MainButton.show();
        tg.MainButton.text="I am a main button";
  }, [tg]);

  const fullName = tg?.initDataUnsafe?.user?.first_name + " " + tg?.initDataUnsafe?.user?.last_name;
  const userId = tg?.initDataUnsafe?.user?.id
  
  const onShowPopupClick=()=>{
    tg.showPopup({
      title: "Hello",
      message: "World",
      buttons: [
        { type: "default", text: "OK", },
        { type: "ok", text: "OK", },
        { type: "cancel", text: "cancel", },
      ]
    },
      (res) => {
        console.log(res);
      }
    );
    
  }
  const showAlert=()=>{
    tg.showAlert("alert",
    (res) => {
      console.log(res);
    });
  }
  const showConfirm=()=>{
    tg.showConfirm("confirm",
    (res) => {
      console.log(res);
      }
    );
  }
  const showScanQrPopup=()=>{
    tg.showScanQrPopup("scanQrPopup",
    (res) => {
      console.log(res);
      }
    );
  }
  const readTextFromClipboard = () => {
    tg.showAlert(tg.readTextFromClipboard("readTextFromClipboard"))
  }

  return (
    <div>
      <div>
      {fullName}
      </div>
      <div>
      {userId}
      </div>
      <button onClick={onShowPopupClick} >showPopup</button>
      <button onClick={showAlert} >showAlert</button>
      <button onClick={showConfirm} >showConfirm</button>
      <button onClick={showScanQrPopup} >showScanQrPopup</button>
      <button onClick={readTextFromClipboard}>readTextFromClipboard</button>
    </div>
  );
};

export default Home;
