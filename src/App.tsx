import { useEffect } from 'react';
import './App.css'
import useTelegram from './hooks/useTelegram'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  const tg = useTelegram()

  useEffect(() => {
    if (tg) {
      console.log(tg);
      
    }
  }, [tg])

  
  
  return (
   <RouterProvider router={router} />
  )
}

export default App
