
import homedark from './home-dark.svg'
import homelight from './home-light.svg'
import sublight from './sub-light.svg'
import subdark from './sub-dark.svg'
import librarylight from './library-light.svg'
import librarydark from './library-dark.svg'
import shortslight from './shorts-light.svg'
import shortsdark from './shorts-dark.svg'

function Vnavbar(props){



    return(  


        <div className="V-navbar">

<div className="nav-bar">

<ul style={{color:props.mode=='light'? 'black' :'white'}}>
    <li ><a href=""><img src={props.mode=='light'?homelight:homedark} alt="" /></a></li>
    <p id="p">Home</p>
<li ><a href=""><img src= {props.mode=='light'?shortslight:shortsdark} alt="" /></a></li>
    <p id="p">Shorts</p>
    <li ><a href=""><img src={props.mode=='light'?sublight:subdark}  alt="" /></a></li>
    <p id="p-3">Subscriptions</p>
    <li v><a href=""><img src={props.mode=='light'?librarylight:librarydark} alt="" /></a></li>
    <p id="p">library</p>
   
</ul>


</div>



        </div>
    )
}

export default Vnavbar;