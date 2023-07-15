import React, { useState } from 'react'
import InlineStyle from './component/InlineStyle'
import './App.css'
import car from './images/car.jpg'

export default function App() {

  const [imageBool, setImageBool] = useState(true);
  const imgClick = () => {
    if (imageBool) {
      setImageBool(false);
    } else {
      setImageBool(true)
    }
  }
  return (
    <div>
      <InlineStyle />
      <div className="box_image">
        {imageBool ? <img src={process.env.PUBLIC_URL + "img1.png"} alt="ji" width='500px' srcset="" /> :
          <img src={car} alt="car" width='500px' srcset="" />
        }
        <button className='btn' type="button" onClick={imgClick}>Click for Image</button>
      </div>
    </div>
  )
}
