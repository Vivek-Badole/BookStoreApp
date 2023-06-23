import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
            loading="lazy"
          />
        </div>
        <div className="col-md-4">
          <p>Scope of application
Information collected and how it is used
Information automatically collected by using the website or application
Information collected from third parties (linked social media accounts, for example)
Sharing of information
Cookie policy
Direct marketing and behavioral advertising practices
Security measures
Data storage
Children’s privacy
Information specific to California residents and visitors from outside of the United States
Changes to the privacy policy
Contact information</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
