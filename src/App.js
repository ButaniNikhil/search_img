import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  let [pic, setimg] = useState([]);
  let [page, setpage] = useState(1);

  useEffect( () => {
  
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=f67a4020861e0bc0a5f77916fc64a05e&per_page=500&page=1&format=json&nojsoncallback=1&auth_token=72157719734845313-3532daeebbad31b9&api_sig=fdc3109f48596a3c66029d421d6a62e2`).then((res)=>{
      setimg(res.data.photos.photo)
    })
    },[]);

    function changePhoto(){
      setpage(page+1);
    }

  return (
    <div className="App">
      <nav>
        <h1>Search image</h1>
        <input type='search'></input>
      </nav>
      <div className='img_container'>
          {pic.slice(0, page*50).map((photo,index) => {
            
            return(
              <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}></img>
            )})}
        </div>
        <button onClick={changePhoto}>Show more</button>
    </div>
  );
}

export default App;
