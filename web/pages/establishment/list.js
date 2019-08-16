import axios from 'axios';
import getConfig from 'next/config';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ValidatorForm } from 'react-form-validator-core';

import MenuItemForm from '../../components/establishmentForm/menuItemForm';
import TimeInput from '../../components/establishmentForm/timeInput';
import TextAreaValidator from '../../components/establishmentForm/textAreaValidator';
import TextValidator from '../../components/establishmentForm/textValidator';
import RestrictedPage from '../../components/restrictedPage';

import { deepCopy } from '../../utils/objectUtils';
import formUtils from '../../utils/formUtils';
import { useAuth0 } from "../../utils/Auth/react-auth0-wrapper";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function List() {
  const { user } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(true);
  const [applicantName, setApplicantName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [establishmentName, setEstablishmentName] = useState("");
  const [establishmentDescription, setEstablishmentDescription] = useState("");
  const [menuItems, setMenuItems] = useState([{ name: "", price: 0.00, weekday: [], type: "" }]);
  const [happyTimes, setHappyTimes] = useState([{ weekday: "", start: "", end: "" }]);

  let form = React.createRef();

  const addRestaurantToDatabase = async () => {
    const data = {
      user: user,
      establishment: formUtils.createEstablishmentObject(establishmentName, city, streetAddress, province, postalCode, establishmentDescription, null, null),
      menuItems,
      happyTimes,
    };
    await axios.post(`${publicRuntimeConfig.DATABASE_URL}/establishment/create`, data);
  }

  useEffect(() => {
    if (user) {
      setIsAdmin(user.isAdmin);
    }
  }, [])

  const addHappyTime = () => {
    let newTime = deepCopy(happyTimes);
    newTime.push({ weekday: "", start: "", end: "" });
    setHappyTimes(newTime);
  }
  const addMenuItem = () => {
    let newMenuItems = deepCopy(menuItems);
    newMenuItems.push({ name: "", price: 0.00, weekday: [], type: "" })
    setMenuItems(newMenuItems);
  }
  return (
    <div className="page-container">
      <Head>
        <title>HappyR | List Your Restaurant & Bar</title>
        <meta description="HappyR deals at the user's fingertips. List your restaurant or bar with us today to get approved listing on our HappyR user's radars for growth, exposure, and success."></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <link href="/static/icons/happyr-icon.png" rel="icon" type="image/gif"></link>
      </Head>
      { !isAdmin && 
        <RestrictedPage/>
      }
      { isAdmin &&
        <div className="add-establishment-container">
          <ValidatorForm
            ref={form}
            onSubmit={() => {addRestaurantToDatabase();}}>
            {/* <div className="form-section about-you">
              <h2 className="subheader">Your Contact Information</h2>
              <div className="inner-container">
                <div className="form-subgroup">
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
                <div className="form-subgroup">
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
            </div> */}
            
            <div className="form-section">
              <h2 className="subheader">Establishment Information</h2>
              <div className="form-subgroup restaurant-name">
                <label htmlFor="location-name">Restaurant or Bar Name (required)</label>
                <TextValidator
                  value={establishmentName}
                  placeholder="Establishment Name"
                  type="text"
                  onChange={(e) => {setEstablishmentName(e.target.value);}}
                  validators={['required', 'trim']}
                  errorMessages={['This field is required', 'This field is required']}/>
              </div>
              <div className="form-subgroup">
                <label htmlFor="location-description">Restaurant or Bar Description (required)</label>
                <TextAreaValidator 
                  className="form-input" 
                  type="text" 
                  maxLength="300" 
                  placeholder="Random Establishment specializes in providing a fun, casual, and lively environment with many cocktails, wide variety of craft beers, and games. Our specialty are our seafood dishes which go well with rum based cocktails any day of the week!"
                  value={establishmentDescription}
                  onChange={(e) => { setEstablishmentDescription(e.target.value); }}
                  validators={['required', 'trim']}
                  errorMessages={['This field is required', 'This field is required']}/>
              </div>
            </div>
            
            <div className="form-section address-group">
              <h2 className="subheader">Establishment Location</h2>        
              <div className="inner-container">
                <div className="form-subgroup">
                  <label htmlFor="address-line">Street Address (required)</label>
                  <TextValidator
                    className="form-input" 
                    type="text" 
                    placeholder="E.g. 123 Granville Street"
                    value={streetAddress}
                    onChange={(e) => { setStreetAddress(e.target.value); }}
                    validators={['required', 'trim']}
                    errorMessages={['This field is required', 'This field is required']}/>
                </div>
                <div className="form-subgroup">
                  <label htmlFor="city">City (required)</label>
                  <TextValidator 
                    className="form-input" 
                    type="text" 
                    placeholder="E.g. Vancouver"
                    value={city}
                    onChange={(e) => { setCity(e.target.value); }}
                    validators={['required', 'trim']}
                    errorMessages={['This field is required', 'This field is required']}/>
                </div>
              </div>
              <div className="inner-container">
                <div className="form-subgroup">
                  <label htmlFor="province">Province (required)</label>
                  <TextValidator 
                    className="form-input" 
                    type="text" 
                    placeholder="E.g. BC"
                    value={province}
                    onChange={(e) => { setProvince(e.target.value); }}
                    validators={['required', 'trim']}
                    errorMessages={['This field is required', 'This field is required']}/>
                </div>
                <div className="form-subgroup">
                  <label htmlFor="postal-code">Postal Code (required)</label>
                  {// TODO APPLY POSTAL CODE REGEX HERE
                  }
                  <TextValidator 
                    className="form-input" 
                    type="text" 
                    placeholder="E.g. V9T1V6"
                    value={postalCode}
                    maxLength="6"
                    onChange={(e) => { setPostalCode(e.target.value); }}
                    validators={['required', 'matchRegexp:^[a-z]\\d[a-z]\\d[a-z]\\d$']}
                    errorMessages={['This field is required', 'Postal code format should be V1V1V1.']}/>
                </div>
              </div>
            </div>

            <div className="form-section time-inputs">
              <h2 className="subheader">Happy Hour Times</h2>
                { happyTimes.map((time, key) => {
                  return <TimeInput
                    key={`time${key}`}
                    time={time}
                    happyTimes={happyTimes}
                    setHappyTimes={setHappyTimes}
                    happyTimeIndex={key}/>
                })}
              <button 
                type="button" 
                className="add-item link-option"
                onClick={() => { addHappyTime(); }}>Add Another Time</button>
            </div>

            <div className="form-section">
              <h2 className="subheader">Menu Items</h2>
              {// Prototype - Form control for menu items below
                menuItems.map((item, key) => {
                  return <MenuItemForm 
                    key={`item${key}`} 
                    item={item} 
                    menuItems={menuItems}
                    setMenuItems={setMenuItems}
                    menuItemIndex={key}/>
                })
              }
              <button 
                type="button"
                className="add-item link-option"
                onClick={() => { addMenuItem(); }}>Add Another Item</button>
            </div>
            <button type="submit" className="confirm-button">Confirm</button>
          </ValidatorForm>
        </div>
      }
    </div>
  )
}