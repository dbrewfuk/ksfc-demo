 import React, { useState } from "react";

class MobileNav extends React.Component {
    state = {
    isMobileNavOpen: false,
  };

  openMobileNav = () => {
    this.setState({ isMobileNavOpen: true });
  };

  closeMobileNav = () => {
    this.setState({ isMobileNavOpen: false });
  };


  render() {






  return (
    <>
	<div>

{this.state.isMobileNavOpen && (


<div>
  	<div class="mobile-nav__close"><img src="./assets/ic_close_48px.svg"/></div>
  	<div class="mobile-nav__logo"><svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="white"/>
              <circle cx="40" cy="40" r="8" fill="white"/>
            </svg></div>
  	<input/>
  		<ul class="mobile-nav__list">
  			<li class="mobile-nav__list-item"><a class="mobile-nav__link" href="">Primary Nav Item</a></li>
  			<li class="mobile-nav__list-item"><a class="mobile-nav__link" href="">Primary Nav Item</a></li>
  			<li class="mobile-nav__list-item"><a class="mobile-nav__link" href="">Primary Nav Item</a></li>
  			<li class="mobile-nav__list-item"><a class="mobile-nav__link" href="">Primary Nav Item</a></li>
  			<li class="mobile-nav__list-item"><a class="mobile-nav__link" href="">Primary Nav Item</a></li>
  			<li class="mobile-nav__list-item"><a class="mobile-nav__link" href="">Primary Nav Item</a></li>
  		</ul>
  
</div>
  
  )}
	</div>
  </>

)
}
}

export default MobileNav;