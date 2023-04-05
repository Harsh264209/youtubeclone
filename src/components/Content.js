
import s from './saiyaan.jpg'
import img2 from './tmkoc.webp'

import kahani from './kahani.jpg'
import kk from './kk.jpg'
import ram from './ram.webp'
import harry from './harry.webp'
import merijaan from './merijaan.jpg'
import rabb from './rabb.jpg'

function Content(props){


 

    return(   

 <div className="div" >

<div className="btn-container">

  
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Music</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Live</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Cricket</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Tmkoc</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Arjit Singh</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Ankur Wariko</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Marathi</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>T-series</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Watched</button>
    <button className="btn"style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Jethalal</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Songs</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>mern</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>WebDev</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Harry</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Canva</button>
    <button className="btn" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?' #ebedee':' #333131'}}>Coding</button>
    
</div>



<div className= "card-container" >


<div className="row row1" >
  <div className="col-3">
    <div className="card" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}}>
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">Taarak Mehta Ka Ooltah Chashmah | तारक मेहता का उल्टा चश्मा | Episode 250 | Full Episode</h6>
        <p className="card-text">43M views 8 months ago</p>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}}>
      <img src={rabb} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">Koi Jaane Na: Tu Mane Ya Na Mane Rabb Manneya (Full Song) Lakhwinder W,Neeti M | Rochak K, Manoj M</h6>
        <p className="card-text">24M views  1 year ago</p>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}}>
        <img src={s} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">Saiyyan-Kailash Kher[Slowed +Reverb]@lofi_music3131 #saiyyan #kailashkher #lofimusic #slowedreverb</h6>
        <p className="card-text">3M views 2 months ago</p>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}}>
        <img src={ram} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">Ram siya Ram siya Ram Jay jay ram-- dj_pradunya</h6>
        <p className="card-text">20M views 2 months ago</p>
      </div>
    </div>
  </div>
 
</div>

<div className="row row2">
  <div className="col-3">
    <div className="card" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}}>
      <img src={merijaan} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">Maan Meri Jaan | Official Music Video | Champagne Talk | King</h6>
        <p className="card-text">321M views 5 months ago.</p>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}}>
      <img src={harry} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">React Js Tutorials in Hindi
</h6>
        <p className="card-text">Introduction to React Js + Installation | Complete React Course in Hindi #1
16:51
.</p>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}}>
        <img src={kk} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-title">SACH KEH RAHA HAI DEEWANA FULL SONG (LYRICS) - K.K. | REHNAA HAI TERRE DIL MEIN</h6>
        <p className="card-text">1.1M views 10 months ago</p>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}}>
        <img src={kahani} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">My-mix</h5>
        <p className="card-text">Gajendra Verma and more.</p>
      </div>
    </div>
  </div>
 
</div>
</div>





</div>



    )
}


export default Content;