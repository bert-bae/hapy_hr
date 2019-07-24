import Head from 'next/head';
import MenuItemForm from '../../components/establishmentForm/menuItemForm';
import { useState, useEffect } from 'react';

export default function List() {
  const [applicantName, setApplicantName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [establishmentName, setEstablishmentName] = useState("");
  const [establishmentDescription, setEstablishmentDescription] = useState("");
  const [menuItems, setMenuItems] = useState([{ name: "", price: 0.00, weekdays: [], type: "" }]);

  return (
    <div className="page-container">
      <Head>
        <title>HappyR | List Your Restaurant & Bar</title>
        <meta description="HappyR deals at the user's fingertips. List your restaurant or bar with us today to get approved listing on our HappyR user's radars for growth, exposure, and success."></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="add-establishment-container">
        <h1 className="subheader">Your Contact Information</h1>
        <div className="form-group about-you">
          <div className="inner-container">
            <div className="form-control">
              <label htmlFor="location-name">Your Name (required)</label>
              <input 
                className="form-input" 
                type="text" 
                name="applicant-name" 
                placeholder="E.g. Bert"
                value={applicantName}
                onChange={(e) => { setApplicantName(e.target.value); }}
                ></input>
            </div>
            <div className="form-control">
              <label htmlFor="location-name">Your Email (required)</label>
              <input 
                className="form-input" 
                type="email" 
                name="contact-email" 
                placeholder="E.g. bert@happyr.ca"
                value={contactEmail}
                onChange={(e) => { setContactEmail(e.target.value); }}></input>
            </div>
          </div>
        </div>
        
        <h1 className="subheader">About Your Establishment</h1>
        <div className="form-group">
          <div className="form-control restaurant-name">
            <label htmlFor="location-name">Restaurant or Bar Name (required)</label>
            <input 
              className="form-input" 
              type="text" 
              maxLength="150" 
              name="location-name" 
              placeholder="Establishment Name"
              value={establishmentName}
              onChange={(e) => { setEstablishmentName(e.target.value); }}></input>
          </div>
          <div className="form-control">
            <label htmlFor="location-name">Restaurant or Bar Description (required)</label>
            <textarea 
              className="form-input" 
              type="text" 
              maxLength="300" 
              name="location-description" 
              placeholder="Random Establishment specializes in providing a fun, casual, and lively environment with many cocktails, wide variety of craft beers, and games. Our specialty are our seafood dishes which go well with rum based cocktails any day of the week!"
              value={establishmentDescription}
              onChange={(e) => { setEstablishmentDescription(e.target.value); }}></textarea>
          </div>
        </div>
        
        <h1 className="subheader">Establishment Location</h1>        
        <div className="form-group address-group">
          <div className="inner-container">
            <div className="form-control">
              <label htmlFor="address-line">Street Address (required)</label>
              <input 
                className="form-input" 
                type="text" 
                name="address-line" 
                placeholder="E.g. 123 Granville Street"
                value={streetAddress}
                onChange={(e) => { setStreetAddress(e.target.value); }}></input>
            </div>
            <div className="form-control">
              <label htmlFor="location-name">City (required)</label>
              <input 
                className="form-input" 
                type="text" 
                name="city" 
                placeholder="E.g. Vancouver"
                value={city}
                onChange={(e) => { setCity(e.target.value); }}></input>
            </div>
          </div>
          <div className="inner-container">
            <div className="form-control">
              <label htmlFor="location-name">Province (required)</label>
              <input 
                className="form-input" 
                type="text" 
                name="province" 
                placeholder="E.g. BC"
                value={province}
                onChange={(e) => { setProvince(e.target.value); }}></input>
            </div>
            <div className="form-control">
              <label htmlFor="location-name">Postal Code (required)</label>
              <input 
                className="form-input" 
                type="text" 
                maxLength="7" 
                name="postal-code" 
                placeholder="E.g. V9T 1V6"
                value={postalCode}
                onChange={(e) => { setPostalCode(e.target.value); }}></input>
            </div>
          </div>
        </div>

        <h1 className="subheader">Menu Items</h1>
        {// Prototype - Form control for menu items below
          menuItems.map((item, key) => {
            return <MenuItemForm 
              key={`item-${key}`} 
              item={item} 
              menuItems={menuItems}
              setMenuItems={setMenuItems}
              menuItemIndex={key}/>
          })
        }
        <button 
          type="button"
          className="add-item link-option"
          onClick={() => {
            let newMenuItems = JSON.parse(JSON.stringify(menuItems));
            newMenuItems.push({ name: "", price: 0.00, weekdays: [], type: "" })
            setMenuItems(newMenuItems);
        }}>Add Another Item</button>
      </div>
    </div>
  )
}

// TODO: CREATE HAPPY HOUR INPUT FORM SECTION