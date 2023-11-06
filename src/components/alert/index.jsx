import React, { useState } from "react";

class Alert extends React.Component {
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
              <p class="alert__content">
                Emergency Alert Message.{" "}
                <a class="alert__link" href="" title="visit kheaa.com">
                  Learn More
                </a>
              </p>
            </div>
            <div class="alert__close" onClick={this.closeAlert}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_69_1111)">
                  <path
                    d="M1.23692 0L0 1.23866L10.7622 12.0009L0 22.7631L1.23692 24L11.9991 13.2378L22.7631 24L24 22.7613L13.2378 11.9991L24 1.23692L22.7631 0.00174953L12.0017 10.764L1.23692 0Z"
                    fill="#00467F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_69_1111">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Alert;
