import React from 'react';
import resim from './Saly-10.png'

const Home = () => {
    
    return (
    <div className="icerik">
      <div className="iceriksol">
         <h1>Upgrade YOUR skills for Better Future</h1>
         <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus saepe placeat eius, obcaecati beatae impedit.</h4>
         <button>Check Courses</button>
         <button className='buttonn'>Learn More</button>
      </div>
      <div className="iceriksag">
        <img className='image' src={resim}/>
      </div>
    </div>
  );
}
 
export default Home;