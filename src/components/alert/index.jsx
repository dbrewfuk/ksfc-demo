 import React, { useState } from "react";

class Alert extends React.Component  
{

  state = {
    isAlertOpen: true,
  };

  closeAlert = () => {
    this.setState({ isAlertOpen: false });
  };


  render() {
    return (
      <>
{this.state.isAlertOpen && (
<div class="alert">
  <div class="alert__container">
    <p class="alert__content">Emergency Alert Message. <a class="alert__link" href="" title="visit kheaa.com">Learn More</a></p>
  </div>
  <div class="alert__close" onClick={this.closeAlert}>
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_128_7)">
<path d="M38 12.8301L35.17 10.0001L24 21.1701L12.83 10.0001L10 12.8301L21.17 24.0001L10 35.1701L12.83 38.0001L24 26.8301L35.17 38.0001L38 35.1701L26.83 24.0001L38 12.8301Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_128_7">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
  </div>
  
</div>

)}
</>
)}
}

export default Alert;