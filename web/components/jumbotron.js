import { useState, useEffect } from 'react';
import '../styles/components/jumbotron.scss';
import Link from 'next/link';

export default function Jumbotron({ imgSrc, mainHeader, subHeader, searchInput}) {
  // const [addressInput, setAddressInput] = useState("");
  useEffect(() => {
    const getUserLocation = navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
    });


  }, [])
  return (
    <div>
      <div className="jumbotron-container" style={{backgroundImage: `url('${imgSrc}')`}}>
        <h1>{mainHeader}</h1>
        <p>{subHeader}</p>
        <Link href={{ pathname: '/deals/', query: { latitude: 0, longitude: 0 } }} as='/deals'>
          <a className="search-near-me">Search Near Me!</a>
        </Link>
        {/* { searchInput && 
          <div className="input-container">
            <input type="text" 
              placeholder="Search near your address!" 
              value={addressInput} 
              onChange={(e) => {setAddressInput(e.target.value);}}></input>
            <Link href={{ pathname: '/deals/', query: { addressInput: addressInput } }} as='/deals'>
              <a className="nav-option">Find Deals</a>
            </Link>
          </div>
        } */}
      </div>
    </div>
  )
}