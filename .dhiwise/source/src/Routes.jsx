import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
const StoreLocator = React.lazy(() => import("pages/StoreLocator"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const PaypalIntegration = React.lazy(() => import("pages/PaypalIntegration"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const GooglePayIntegration = React.lazy(
  () => import("pages/GooglePayIntegration"),
);
const HamburgerMenu = React.lazy(() => import("pages/HamburgerMenu"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const ShippingChargeCalculator = React.lazy(
  () => import("pages/ShippingChargeCalculator"),
);
const ShippingAddressValidation = React.lazy(
  () => import("pages/ShippingAddressValidation"),
);
const ProductQuickview = React.lazy(() => import("pages/ProductQuickview"));
const Summarycard = React.lazy(() => import("pages/Summarycard"));
const PushNotifications = React.lazy(() => import("pages/PushNotifications"));
const CardconnectIntegration = React.lazy(
  () => import("pages/CardconnectIntegration"),
);
const Subscriptions = React.lazy(() => import("pages/Subscriptions"));
const Payments = React.lazy(() => import("pages/Payments"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const PricingEngine = React.lazy(() => import("pages/PricingEngine"));
const Ordersummary = React.lazy(() => import("pages/Ordersummary"));
const Captcha = React.lazy(() => import("pages/Captcha"));
const InvoiceBilling = React.lazy(() => import("pages/InvoiceBilling"));
const Map = React.lazy(() => import("pages/Map"));
const ItemAvailability = React.lazy(() => import("pages/ItemAvailability"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/itemavailability" element={<ItemAvailability />} />
          <Route path="/map" element={<Map />} />
          <Route path="/invoicebilling" element={<InvoiceBilling />} />
          <Route path="/captcha" element={<Captcha />} />
          <Route path="/ordersummary" element={<Ordersummary />} />
          <Route path="/pricingengine" element={<PricingEngine />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route
            path="/cardconnectintegration"
            element={<CardconnectIntegration />}
          />
          <Route path="/pushnotifications" element={<PushNotifications />} />
          <Route path="/summarycard" element={<Summarycard />} />
          <Route path="/productquickview" element={<ProductQuickview />} />
          <Route
            path="/shippingaddressvalidation"
            element={<ShippingAddressValidation />}
          />
          <Route
            path="/shippingchargecalculator"
            element={<ShippingChargeCalculator />}
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/hamburgermenu" element={<HamburgerMenu />} />
          <Route
            path="/googlepayintegration"
            element={<GooglePayIntegration />}
          />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/paypalintegration" element={<PaypalIntegration />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/storelocator" element={<StoreLocator />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
