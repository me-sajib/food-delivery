import React from "react";
import apps from "../../images/apps.png";
const Apps = () => {
  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col">
          <div className="logo-app">
            <img src={apps} alt="logo-app" className="img-fluid" />
          </div>
        </div>
        <div className="col">
          <div className="details-app">
            <div>
              <h1>
                Connecting our user with iOS & Android apps. Download from iTune
                & Play store
              </h1>
              <p>
                Pick one of our stock themes, or create your custom theme with
                the most advanced theme editor on any online survey building
                tool. We’re driven beyond just finishing the projects. We want
                to find solutions using our website & apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
