import React from 'react'
import vid from './Movies.mp4';
import img from './moo.gif';

const About = () => {
  return (
    <div style={{color:"white" ,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h2 style={{color:"red",margin:"20px auto",textAlign:'center',paddingTop:"30px"}}>what's a movie</h2>
        <img src={img} alt=" " width="650" heigth="400" style={{color:"red",margin:"70px 300px",textAlign:'center',paddingTop:"20px"}}/>
        <blockquote style={{width:"50%",height:"80%",margin:"50px 300px",lineHeight:"2" ,textAlign:"justify"}}>
        A<span style={{color:"red"}}> movie or film</span> is a type of visual communication which uses moving pictures and sound to tell stories or teach people something. Most people watch (view) movies as a type of entertainment or a way to have fun. For some people, fun movies can mean movies that make them laugh, while for others it can mean movies that make them cry, or feel afraid.
        </blockquote>
      
    <div style={{display:"Block",width:"50%",height:"80%",alignText:"justify",lineHeight:"2",textAlign:"justify"}}>
          <h3 style={{color:"red",textDecoration:"underline"}}> the favorite genre</h3>
          <ul>
            <li >
            <span style={{color:"red"}}>Action movies</span> have a lot of exciting effects like car chases and gun fights, involving stuntmen. They usually involve 'goodies' and 'baddies', so war and crime are common subjects. Action movies usually need very little effort to watch, since the plot is normally simple. For example, in Die Hard, terrorists take control of a skyscraper and ask for a big ransom in exchange for not killing the hostage workers. One hero somehow manages to save everyone. Action movies do not usually make people cry, but if the action movie is also a drama, emotion will be involved.
            </li>
            <li>
            <span style={{color:"red"}}>Animated movies</span> use artificial images like talking cartoons to tell a story. These movies used to be drawn by hand, one frame at a time, but are now made on computers. They can be 2D animated or 3D animated.
         </li>
         <li>
         <span style={{color:"red"}}> Comedies</span> are funny movies about people being silly or doing unusual things or being in silly or unusual situations that make the audience laugh.
         </li>
          </ul>
        
          <video width="600" height="400" controls style={{margin:" 20px 10px 0 70px"}}>
              <source src={vid} type="video/mp4"/>
          </video>
        
          </div>
    </div>
  )
}

export default About
