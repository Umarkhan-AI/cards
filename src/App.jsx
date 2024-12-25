import { useState } from 'react'
import { Data } from './assets/data'
import { Card } from './component/Card'
import "./App.css"


function App() {
  return (
     <div className='main'>
        {
        Data.map((e, i) => (
          <Card key={i} img={e.image} id={e.id} title={e.title}
          prize={e.price} desc={e.description}   cata={e.category}
          rate={e.rating.rate} count={e.rating.count}     />
        ))
      }
     </div>
  );
}

export default App;
 