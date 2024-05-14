import React, { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.scss";
const Footer = () => {
  const FlyoutLink = ({ children, href }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <a href={href} className="relative text-white">
          {children}
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: open ? "left" : "right",
              height: "0.05rem",
            }}
            className="absolute -bottom-0.5 -left-0 -right-1 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out"
          />
        </a>
      </div>
    );
  };
  return (
    <div>
      <footer className="footer footer--border-top">
        <div className="footer__content-top page-width">
          <div className="grid">
            <div className="grid__item footer__content-left footer__content-left--alt">
              <div
                style={{ display: "flex" }}
                className="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet"
              >
                <footer-accordion
                  style={{
                    flex: "1",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  className="grid__item accordion footer-block "
                >
                  <p className="h4 accordion__title"></p>

                  <div className="footer-block__details-content footer-block-image left">
                    <a href="/" aria-label="Home">
                      <img
                        srcset="//www.pebblecart.com/cdn/shop/files/Asset_1_4x-8_e1bae8a2-9db3-4243-8ba0-a7b1422cb3eb.png?v=1665584543&amp;width=200, //www.pebblecart.com/cdn/shop/files/Asset_1_4x-8_e1bae8a2-9db3-4243-8ba0-a7b1422cb3eb.png?v=1665584543&amp;width=400 2x"
                        src="//www.pebblecart.com/cdn/shop/files/Asset_1_4x-8_e1bae8a2-9db3-4243-8ba0-a7b1422cb3eb.png?v=1665584543&amp;width=200"
                        alt=""
                        loading="lazy"
                      />
                    </a>
                    <p className="caption-large">
                      Since inception in 2013, there has been one principle that
                      we, at Pebble have held as holy grail – build experiences
                      crafted around ‘you’. We are a technology brand that
                      endeavours to get the perfect blend of innovation,
                      technology and design in each of our products.
                    </p>
                  </div>
                </footer-accordion>

                <footer-accordion
                  style={{
                    display: "flex",
                    flex: "1",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  className="accordion footer-block grid__item footer-block--menu"
                >
                  <div className="center-content">
                    <p className="h4 accordion__title">Products</p>
                    <ul className="footer-block__details-content list-unstyled">
                      <li>
                        <a
                          href="/collections/headphones"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Headphones</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/collections/wireless-speaker"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Wireless Speakers</FlyoutLink>
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer-accordion>
                <footer-accordion
                  style={{
                    display: "flex",
                    flex: "1",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  className="accordion footer-block grid__item footer-block--menu"
                >
                  <div className="center-content">
                    <p className="accordion__title h4">Company</p>

                    <ul className="footer-block__details-content list-unstyled">
                      <li>
                        <a
                          href="/pages/about-us"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Our Story</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/corporate-order"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Corporate Orders</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policies/contact-information"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Contact Us</FlyoutLink>
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer-accordion>
                <footer-accordion
                  style={{
                    display: "flex",
                    flex: "1",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  className="accordion footer-block grid__item footer-block--menu"
                >
                  <div className="center-content">
                    <p className="accordion__title h4">SUPPORT</p>
                    <ul className="footer-block__details-content list-unstyled">
                      <li>
                        <a
                          href="/pages/register-your-product"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Register Product Warranty</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/raise-a-complaint"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Raise Warranty Complaint</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/faqs"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>FAQs</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/warranty-policy"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Warranty Policy</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policies/refund-policy"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>
                            Replacement &amp; Refund Policy
                          </FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policies/shipping-policy"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Shipping Policy</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policies/privacy-policy"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Privacy Policy</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/e-waste-policy"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>E-waste Policy</FlyoutLink>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policies/terms-of-service"
                          className="link list-menu__item list-menu__item--link"
                        >
                          <FlyoutLink>Terms of Service</FlyoutLink>
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer-accordion>
              </div>
            </div>
            <div className="grid__item footer__content-right">
              <div className="grid__item footer__content-right">
                <div className="grid">
                  <div className="grid__item small-hide">
                    <div></div>
                  </div>
                  <div className="grid_item">
                    <p className="h4 accordion__title">GET IN TOUCH</p>
                    <div className="footer-block__details-content">
                      <div className="footer-block__newsletter">
                        <div className="footer__newsletter_content typeset rte">
                          <p>
                            Vaishnavi Properties, #30/1, Silicon Terraces,, 2nd
                            and 3rd Floor, Adugodi, Hosur Main Road,
                            Koramangala, Bengaluru – 560095
                          </p>
                          <p>
                            Email:{" "}
                            <a
                              href="mailto:support@pebblecart.com"
                              title="mailto:support@pebblecart.com"
                            >
                              support@pebblecart.com
                            </a>
                            <br />
                            Phone:{" "}
                            <a
                              href="tel:+91-8800271651 "
                              title="tel:+91-8800271651 "
                            >
                              +91-8800271651{" "}
                            </a>{" "}
                            <br />
                            Mon-Sun: 10:00AM - 7:00PM
                          </p>
                        </div>
                        <form
                          method="post"
                          id="ContactFooter"
                          accept-charset="UTF-8"
                          className="footer__newsletter newsletter-form"
                        >
                          <input
                            type="hidden"
                            name="form_type"
                            value="customer"
                          ></input>
                          <input type="hidden" name="utf8" value="✓"></input>
                          <p style={{fontSize:"15px", fontWeight:"bolder"}} className="newsletter-form-heading">
                            Subscribe to Our Newsletter{" "}
                          </p>
                          {/* <input
                            type="hidden"
                            name="contact[tags]"
                            value="newsletter"
                          /> */}

                          <div className="field">
                            <input
                              id="ContactFooter-email"
                              type="email"
                              name="contact[email]"
                              className="field__input required"
                              // value=""
                              aria-required="true"
                              autocorrect="off"
                              autocapitalize="none"
                              autocomplete="email"
                              placeholder="Your Email Address"
                              required=""
                              style={{color:"black"}}
                            ></input>
                            <button
                              type="submit"
                              className="button "
                              name="commit"
                              aria-label="Subscribe"
                            >
                              Subscribe
                            </button>
                          </div>
                          <div className="typeset rte"></div>
                          <div className="bottom-cta-wrapper">
                            <a
                              className="button2"
                              href="/pages/register-your-product"
                            >
                              Register Your Product
                            </a>
                          </div>
                        </form>
                      </div>
                      <p className="h4 accordion__title"></p>
                      <ul
                        className="footer__list-social list-unstyled list-social"
                        role="list"
                      >
                        <li className="list-social__item">
                          <a
                            target="_blank"
                            rel="noopener"
                            href="#"
                            className="list-social__link link link--text link-with-icon"
                            aria-describedby="a11y-external-message"
                          >
                            <div className="icon">
                              <FacebookIcon className="icon"/>
                            </div>
                            {/* <span className="visually-hidden">Facebook</span> */}
                          </a>
                        </li>
                        <li className="list-social__item">
                          <a
                            target="_blank"
                            rel="noopener"
                            href="#"
                            className="list-social__link link link--text link-with-icon"
                            aria-describedby="a11y-external-message"
                          >
                             <div className="icon">
                             <InstagramIcon className="icon"/>
                            </div>
                            {/* <span className="visually-hidden">Instagram</span> */}
                          </a>
                        </li>
                        <li className="list-social__item">
                          <a
                            target="_blank"
                            rel="noopener"
                            href="#"
                            className="list-social__link link link--text link-with-icon"
                            aria-describedby="a11y-external-message"
                          >
                            <div className="icon">
                            <LinkedInIcon className="icon"/>
                            </div>
                            {/* <span className="visually-hidden">LinkedIn</span> */}
                          </a>
                        </li>
                        <li className="list-social__item">
                          <a
                            target="_blank"
                            rel="noopener"
                            href="#"
                            className="list-social__link link link--text link-with-icon"
                            aria-describedby="a11y-external-message"
                          >
                            <div  className="icon">
                            <YouTubeIcon className="icon"/>
                            </div>
                            {/* <span className="visually-hidden">YouTube</span> */}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content-bottom">
    <div className="footer__content-bottom-wrapper page-width">
      <div className="footer__column footer__column--info">
        <div style={{display:"flex", gap:"10px"}} className="footer__copyright">
          <div style={{display:"flex", gap:"10px"}}  className="copyright__content">&copy; 2024, <a href="https://www.linkedin.com/in/robin-rathore-833863238" title="">Robin Rathore</a>. All rights reserved.</div>
        </div>
      </div>
    </div>
  </div>
      </footer>
    </div>
  );
};

export default Footer;
