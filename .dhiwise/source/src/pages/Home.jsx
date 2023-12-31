import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/itemavailability">ItemAvailability</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/invoicebilling">InvoiceBilling</Link>
        </li>
        <li>
          <Link to="/captcha">Captcha</Link>
        </li>
        <li>
          <Link to="/ordersummary">Ordersummary</Link>
        </li>
        <li>
          <Link to="/pricingengine">PricingEngine</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/payments">Payments</Link>
        </li>
        <li>
          <Link to="/subscriptions">Subscriptions</Link>
        </li>
        <li>
          <Link to="/cardconnectintegration">CardconnectIntegration</Link>
        </li>
        <li>
          <Link to="/pushnotifications">PushNotifications</Link>
        </li>
        <li>
          <Link to="/summarycard">Summarycard</Link>
        </li>
        <li>
          <Link to="/productquickview">ProductQuickview</Link>
        </li>
        <li>
          <Link to="/shippingaddressvalidation">ShippingAddressValidation</Link>
        </li>
        <li>
          <Link to="/shippingchargecalculator">ShippingChargeCalculator</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/hamburgermenu">HamburgerMenu</Link>
        </li>
        <li>
          <Link to="/googlepayintegration">GooglePayIntegration</Link>
        </li>
        <li>
          <Link to="/landingpage">LandingPage</Link>
        </li>
        <li>
          <Link to="/paypalintegration">PaypalIntegration</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/storelocator">StoreLocator</Link>
        </li>
        <li>
          <Link to="/termsandconditions">TermsAndConditions</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
