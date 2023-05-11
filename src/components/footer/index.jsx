 import React, { useState } from "react";

class Footer extends React.Component  
{
 	render() {
 		return (
 			<>
 			<div class="footer">
  <div class="footer__wrapper">
    <div class="footer__nav">
      <div class="footer__nav__flex">
        <div class="footer__nav__flex-item">
          <div class="footer__logo"><svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="white"/>
            <circle cx="40" cy="40" r="8" fill="white"/>
          </svg>
          <dl class="footer__address">
            <dt>Name</dt>
            <dd>Street Address</dd>
            <dd>City, State, Zipcode</dd>
          </dl>
        </div>
      </div>
      <div class="footer__nav__flex-item">
        <div class="footer__nav__lists">
          <div class="footer__nav__lists__flex">
            <div class="footer__nav__lists__flex__item">
              <ul class="footer__nav__list">
                <li class="list__title">Title</li>
                <li><a href="">Footer Nav Item</a></li>
                <li><a href="">Footer Nav Item</a></li>
                <li><a href="">Footer Nav Item</a></li>
                <li><a href="">Footer Nav Item</a></li>
              </ul>
            </div>
            <div class="footer__nav__lists__flex__item">
              <ul class="footer__nav__list">
                <li class="list__title">Title</li>
                <li><a href="">Footer Nav Item</a></li>
                <li><a href="">Footer Nav Item</a></li>
                <li><a href="">Footer Nav Item</a></li>
                <li><a href="">Footer Nav Item</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="footer__form">
   <div class="footer__form__headline">
    Subscribe to the newsletter
  </div>
  <form>
    <formfield>
      <label>Name</label>

      <input/>
    </formfield>
    <formfield>
      <label>Email</label>
      <input/>
    </formfield>
    <button class="button button--t-dark">Submit</button>
  </form>

</div>

</div>
</div>
<div class="footer__footer">
  <div class="footer__flex">
    <div class="footer__flex__item">
      <div class="footer__copyright">Copyright 2023 Kentucky Community & Technical College System</div></div>
      <div class="footer__flex__item">
        <ul class="footer__cta">
          <li><a href="">Contact</a></li>
          <li><a href="">Terms &amp; Conditions</a></li>
          <li><a href="">Privacy</a></li>
        </ul>
      </div>

    </div>
  </div>
</>
 			)
 	}
 }

 export default Footer;



