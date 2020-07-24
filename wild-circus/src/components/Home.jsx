import React from 'react';
import Carrousel from './Carrousel';
import '../Style/Home.css';



function Home() {
  return(
    <>
    <div className="text">
	<h1>Welcome</h1>
</div>
<h2>To_The_Wild_Circus</h2>
    <div>
      <Carrousel />
    </div>
    </>
  );
}



export default Home;