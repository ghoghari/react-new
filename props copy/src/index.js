import React from 'react';
import ReactDom from 'react-dom';

function Card(){

  return (

    <>

<div className='cards'>
  <div className='card'>
  <img src="https://picsum.photos/200/300" alt="mypic" width="500" height="600"/>
    <div className='card_info'>
      <span className='card_category'>A Original Series</span>
      <h3 className='card_title'>Manifest</h3>
      <a href="https://www.netflix.com/in/title/80241318"><button type="button">Watch Now</button></a>
      <h3 className='card_title'>Inside Man</h3>
      <a href="https://www.netflix.com/title/81332052"><button type="button">Watch Now</button></a> 
      <h3 className='card_title'>From Scratch</h3>
      <a href="https://www.netflix.com/in/title/81104486"><button type="button">Watch Now</button></a>
      <h3 className='card_title'>Love is Blind</h3>
      <a href="https://www.netflix.com/in/title/80996601"><button type="button">Watch Now</button></a>
      <h3 className='card_title'>Guillermo del Toro's Cabinet of Curiosities</h3>
      <a href="https://www.netflix.com/in/title/80209229"><button type="button">Watch Now</button></a>
    </div>
  </div>
</div>

</>

  );

}

ReactDom.render(<>
<Card></Card>
</>,document.getElementById("root"));
