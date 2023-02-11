import { useEffect ,useDispatch } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';
import { useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
  state.home);
  console.log(url);

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
   {url?.total_pages}
   </>
  )
}

export default App
