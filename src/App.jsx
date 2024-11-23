import { useDispatch } from 'react-redux';
import './App.css';
import RouterComponent from './routes/RouterComponent';
import { useEffect } from 'react';
import {fetchGetСryptocurrency} from "./redux/slice/listSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log('work');
    
    dispatch(fetchGetСryptocurrency())
  }, [])


  return (
    <>
      <RouterComponent />
    </>
  )
}

export default App
