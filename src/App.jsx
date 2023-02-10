import { useEffect ,useDispatch } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';


function App() {

  const dispatch = useDispatch();

      useEffect(
        ()=>{
          apiTesting();
        }
        , []
      );

    const apiTesting = ()=>
    {
      fetchDataFromApi('/movie/popular')
      .then((res)=>{
        console.log(res);
        dispatch(getApiConfiguration
          (res));
      });
    };

  return (
   <>
   </>
  )
}

export default App
