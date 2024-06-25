import React from 'react'



const About = () => {

  return (
    <>    
    <div>
     <h1 style={{textAlign: 'center'}}> About </h1>
      </div>
      <br/><br/>
  
<div>
<h3 style={{textAlign:"center"}}>KORA, the Greek Goddess<br/>
of flowers, vegetation and spring.</h3>
<h5 style={{textAlign:"center"}}>Family-owned restaurant KORA, showcases a selection of reimagined <br/>classics drawing on the best of Scotland’s land and sea. A <br/>neighbourhood restaurant that puts locality at its heart – a destination<br/> to explore the very best of seasonal Scottish simplicity.

The finest Scottish produce, sourced<br/> responsibly from Kitchin Group’s enviable team of <br/>dedicated sustainable suppliers, farmers, foragers, growers and gatherers.</h5>
</div>
<br/><br/>
<div className='container'>
      <img className='d-block w-100 h-100' 
        alt='First slide'
        src={process.env.PUBLIC_URL + "/images/A.png"} style={{width: "50", objectFit: "cover"}}
        />
   </div>

  </>

  )
}

export default About
