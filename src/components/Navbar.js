
import youtubelight from './youtube-light.svg'
import youtubedark from './youtube-dark.svg'
import createlight from './create-light.svg'
import createdark from './create-dark.svg'
import sublight from './sub-light.svg'
import subdark from './sub-dark.svg'
import belllight from './bell-light.svg'
import belldark from './bell-dark.svg'
import miclight from './mic-light.svg'
import micdark from './mic-dark.svg'
import searchlight from './search-light.svg'
import searchdark from './search-dark.svg'
import librarylight from './library-light.svg'
import librarydark from './library-dark.svg'
import movieslight from './movies-light.svg'
import moviesdark from './movies-dark.svg'
import historylight from './history-light.svg'
import historydark from './history-dark.svg'
import livelight from './live-light.svg'
import livedark from './live-dark.svg'
import gameslight from './games-light.svg'
import gamesdark from './games-dark.svg'
import musiclight from './music-light.svg'
import musicdark from './music-dark.svg'
import trendinglight from './trending-light.svg'
import trendingdark from './trending-dark.svg'
import shortslight from './shorts-light.svg'
import shortsdark from './shorts-dark.svg'
import yourvideosdark from './yourvideos-dark.svg'
import yourvideoslight from './yourvideos-light.svg'
import likelight from './like-light.svg'
import likedark from './like-dark.svg'
import homedark from './home-dark.svg'
import homelight from './home-light.svg'
import profilelight from './profile-light.png'
import profiledark from './profile-dark.png'
import barlight from './bar-light.svg'
import bardark from './bar-dark.svg'




function Navbar( props){


    return( 


        <div className="div">

<nav className={`navbar navbar-fixed navbar-sticky navbar-${props.mode} bg-${{backgroundColor:props.mode=='light'?'rgb(16, 16, 16)' : 'white'}}`}>
  <div className="container-fluid ">

  <button className="navbar-toggle  "  style={{backgroundColor:props.mode=='light'?'white':'rgb(16, 16, 16)'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  {/* <span className="navbar-toggler-icon "></span> */}
 <span><img src={props.mode=='light'? barlight:bardark}  alt="" /></span>
    </button>  
    <img src={props.mode=='light'? youtubelight:youtubedark} id='youtube' alt="" />
    <div className="input-btn">
    <input type="text"  style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':' rgb(16, 16, 16)',borderColor:props.mode=='light'?'#d1deed':'lightgrey'}} placeholder='Search' />
    <button id='btn'  style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'rgb(244, 242, 242)':' #333131'}}><img src={props.mode=='light'? searchlight:searchdark} id='search-icon' alt="" /></button>
    <img src={props.mode=='light'? miclight:micdark} id='mic' alt="" />
    </div>
   <div className="left-icons">
    <img src={props.mode=='light'? createlight:createdark} id='nav-icon' alt="" />
    <img src={props.mode=='light'? belllight:belldark} id='nav-icon' alt="" />
    <img src={props.mode=='light'? profilelight:profiledark} id='nav-icon' alt="" />

   </div>

    <div className="offcanvas offcanvas-start"  id="offcanvasNavbar" >
      <div className="offcanvas-header" style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':' rgb(16, 16, 16)'}}>
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={props.mode=='light'? youtubelight:youtubedark} id='youtube1' alt="" /> </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body " style={{color:props.mode=='light'? 'black' :'white', backgroundColor:props.mode=='light'?'white':' rgb(16, 16, 16)'}}>
        <ul className="navbar-nav ">

        <li className="nav-item1">
 
 <div className="form-check form-switch">
<input className="form-check-input" type="checkbox"  onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode=='light'?"Dark Mode" :"Light Mode"}</label>
</div>
 </li>
 <hr />


          <li className="nav-item" >
            <span><img src={props.mode=='light'?homelight:homedark}  id='icon' alt="" /></span> 
            <a className="nav-link active" aria-current="page" href="/">Home</a>  
          </li>
          <li className="nav-item">
         <img src={props.mode=='light'?shortslight:shortsdark} id='icon' alt="" /><a className="nav-link active" href="/">Shorts</a>
          </li>
          <li className="nav-item">
          
          <span><img src={props.mode=='light'?sublight:subdark} id='icon' alt="" /></span> <a className="nav-link active" href="/">Subscriptions</a>            
          </li>
          <hr />  
          <li className="nav-item">
          
          <span><img src={props.mode=='light'?librarylight:librarydark} id='icon' alt="" /></span> <a className="nav-link active" href="/">library</a>            
          </li>
          <li className="nav-item">
          
          <span><img src={props.mode=='light'?yourvideoslight:yourvideosdark} id='icon' alt="" /></span> <a className="nav-link active" href="/">Your Videos</a>            
          </li>
          {/* <li className="nav-item">
          
          <span><img src={watch} id='icon' alt="" /></span> <a className="nav-link active" href="/">Watch later</a>            
          </li> */}
          <li className="nav-item">
          
          <span><img src={props.mode=='light'? likelight:likedark} id='icon' alt="" /></span> <a className="nav-link active" href="/">Like Videos</a>            
          </li>
        <hr />
        <li className="nav-item">
           
          <span><img src={props.mode=='light'? trendinglight:trendingdark} id='icon' alt="" /></span> <a className="nav-link active" href="/">Trendings</a>            
          </li>
          <li className="nav-item">
          
          
          <span><img src={props.mode=='light'? movieslight:moviesdark} id='icon' alt="" /></span> <a className="nav-link active" href="/">Movies</a>            
          </li>
          <li className="nav-item">
          
          <span><img src={props.mode=='light'? musiclight:musicdark} id='icon' alt="" /></span> <a className="nav-link active" href="/">Music</a>            
          </li>
          <li className="nav-item">
          
          <span><img src={props.mode=='light'? gameslight:gamesdark} id='icon' alt="" /></span> <a className="nav-link active" href="/">Sports</a>            
          </li>
          {/* <li className="nav-item">
          
          <span><img src={gaming} id='icon' alt="" /></span> <a className="nav-link active" href="/">Gaming</a>    

          </li> */}
         

     

        </ul>
       
      </div>
    </div>
  </div>
</nav>


        </div>
    )
}

export default Navbar;