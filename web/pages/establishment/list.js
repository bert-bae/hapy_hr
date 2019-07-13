import Head from 'next/head';
import '../../styles/components/contactForm.scss'

export default function List() {
  return (
    <div className="page-container">
      <Head>
        <title>HappyR | List Your Restaurant & Bar</title>
        <meta description="HappyR deals at the user's fingertips. List your restaurant or bar with us today to get approved listing on our HappyR user's radars for growth, exposure, and success."></meta>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="add-establishment-container">
        <div className="form-group">
          <div className="form-control restaurant-name">
            <label for="location-name">Restaurant or Bar Name (required)</label>
            <input class="form-input" type="text" maxLength="150" name="location-name" placeholder="Establishment Name"></input>
          </div>
          <div className="form-control">
            <label for="location-name">Restaurant or Bar Description (required)</label>
            <textarea class="form-input" type="text" maxLength="300" name="location-description" placeholder="Random Establishment specializes in providing a fun, casual, and lively environment with many cocktails, wide variety of craft beers, and games. Our specialty are our seafood dishes which go well with rum based cocktails any day of the week!"></textarea>
          </div>
        </div>
        <div className="form-group address-group">
          <div className="inner-container">
            <div className="form-control">
              <label for="address-line">Street Address (required)</label>
              <input class="form-input" type="text" name="address-line" placeholder="E.g. 123 Granville Street"></input>
            </div>
            <div className="form-control">
              <label for="location-name">City (required)</label>
              <input class="form-input" type="text" name="city" placeholder="E.g. Vancouver"></input>
            </div>
          </div>
          <div className="inner-container">
            <div className="form-control">
              <label for="location-name">Province (required)</label>
              <input class="form-input" type="text" name="province" placeholder="E.g. BC"></input>
            </div>
            <div className="form-control">
              <label for="location-name">Postal Code (required)</label>
              <input class="form-input" type="text" maxLength="7" name="postal-code" placeholder="E.g. V9T 1V6"></input>
            </div>
          </div>
        </div>
        <div className="form-group about-you">
          <div className="inner-container">
            <div className="form-control">
              <label for="location-name">Your Name (required)</label>
              <input class="form-input" type="text" name="applicant-name" placeholder="E.g. Bert"></input>
            </div>
            <div className="form-control">
              <label for="location-name">Your Email (required)</label>
              <input class="form-input" type="email" name="contact-email" placeholder="E.g. bert@happyr.ca"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}