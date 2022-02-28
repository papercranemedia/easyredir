import React from "react";
import informationImg from "../images/solutions/information-technology.svg";
import marketerImg from "../images/solutions/solutions-for-marketers.svg";
import agencyImage from "../images/solutions/solutions-for-agencies.svg";
import isvImage from "../images/solutions/solutions-for-isv.svg";

export default function Solutions() {
  return  (
    <main>
        <section className="solutions-hero__section">
          <div className="solutions-hero__container container">
            <h2>Redirecting problems to solutions</h2>
            <p>EasyRedir helps your organization save time and money, protects your digital infrastructure, provides continuity during website changes or acquisitions and enhances your brand. Explore all the ways EasyRedir can support your business. Simply and easily.</p>
          </div >
        </section>
        <section className="solutions-sub__section">
          <div className="solutions-sub__container container">
            <h5>Solutions for redirecting your audience to the content you want them to see.</h5>
            <h2>Enterprise-class URL redirection.</h2>
            <div className="solutions-sub__icon-container container">
              <div className="solutions-sub__icon-card">
                <div className="solutions-sub__icon-block"></div>
                <h4>Simple</h4>
                <p>We make it easy. Set up new link redirects in just one step. We get you up and running within minutes.</p>
              </div>
              <div className="solutions-sub__icon-card">
                <div className="solutions-sub__icon-block"></div>
                <h4>Fast</h4>
                <p>We're built for speed. Our lightning-fast URL redirect service won't ever interrupt your users.</p>
              </div>
              <div className="solutions-sub__icon-card">
                <div className="solutions-sub__icon-block"></div>
                <h4>Reliable</h4>
                <p>We deliver. We target 100% uptime, enabled by top-tier providers and multiple points-of-presence.</p>
              </div>
            </div>
          </div >
        </section>
        <section className="solutions-split__section">
          <div className="solutions-split__container container">
            <div className="solutions-split__text-col"></div>
            <div className="solutions-split__illustration-col"><img src={informationImg} alt="" /></div>
          </div >
          <div className="solutions-split__container container">
            <div className="solutions-split__text-col"></div>
            <div className="solutions-split__illustration-col"><img src={marketerImg} alt="" /></div>
          </div >
          <div className="solutions-split__container container">
            <div className="solutions-split__text-col"></div>
            <div className="solutions-split__illustration-col"><img src={agencyImage} alt="" /></div>
          </div >
          <div className="solutions-split__container container">
            <div className="solutions-split__text-col"></div>
            <div className="solutions-split__illustration-col"><img src={isvImage} alt="" /></div>
          </div >
        </section>
    </main>
  );
}