import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/Header'
import './App.css';
import Aside from './Components/Aside';
import Main from './Components/Main';

function App() {
  const [news, setNews] = useState([]);
  const [headlines, setHeadlines] = useState([]);
  const apikey = '8dc5040e74934888b1d9c6a0467cef33'
  const category = window.location.pathname.replace('/','');
  const [mobileAside, setMobileAside] = useState(false)
  const url = category == '' ? `https://newsapi.org/v2/everything?q=entertainment&apiKey=${apikey}` : `https://newsapi.org/v2/everything?q=${category}&apiKey=${apikey}`;
  var urlHeadlines =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`

  const getNews = async () => {
    await axios.get(url).then((response) => {
      setNews(response.data.articles)
    })
  }
  const getHeadlines = async () => {
    await axios.get(urlHeadlines).then(response => {
      setHeadlines(response.data.articles)
    })
  }

  useEffect(() => {
    getNews();
    getHeadlines()
  },[])
  return (
    <div>
      <Header mobilAside={mobileAside} getMobileAside={e => setMobileAside(e)} />
       <div className='flex'>
     <Aside mobilAside={mobileAside} getMobilAside={e => setMobileAside=(e)}/>
    {
      news != [] ?  <Main news={news} headlines={headlines}/> : <div className='flex justify-center text-center items-center text-3xl text-slate-500'>Gösterilecek Bir veri yok </div> 
    }
     </div>
    </div>
  );
}

export default App;
