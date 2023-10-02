 import React, { useState } from "react";

class Header extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    isOpen: false,
    searchIsOpen: false
  };

  this.toggleMenu = this.toggleMenu.bind(this);
}



toggleMenu() {
  this.setState({ isOpen: !this.state.isOpen })
}

closeSearch = () =>   {
  this.setState({ searchIsOpen: false })
}

openSearch = () => {
  this.setState({ searchIsOpen: true })
}


  render() {
    const { isOpen } = this.state;
    const { searchIsOpen } = this.state;
    
  return (


<>

<div class="header--mobile">
<div class="header--mobile__header">
  <div class="header--mobile__logo"><svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40" r="40" fill="white"/>
<circle cx="40" cy="40" r="8" fill="white"/>
</svg></div>
  <div className={`{header--mobile__menu-toggle ${isOpen ? 'is-open' :''}`} onClick={this.toggleMenu}>
  {isOpen ? (
<div class="header--mobile__menu__close"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_128_7)">
<path d="M38 12.8301L35.17 10.0001L24 21.1701L12.83 10.0001L10 12.8301L21.17 24.0001L10 35.1701L12.83 38.0001L24 26.8301L35.17 38.0001L38 35.1701L26.83 24.0001L38 12.8301Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_128_7">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg></div>
    
    ) : (

    <div class="header--mobile__menu__open"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_155_116)">
<path d="M6 36H42V32H6V36ZM6 26H42V22H6V26ZM6 12V16H42V12H6Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_155_116">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg></div>
 


    )}
  
   
  </div>
</div>
<div className={`header__nav ${isOpen ? 'is-open' : ''}`}>
<div class="header--mobile__search">
<input/>
</div>

 <ul class="header__primary-nav__list">
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
              </ul>
         
</div>
</div>

<div class="header--large">
      <div class="header__utility-nav">
        <div class="header__utility-nav__wrapper">
          <div class="header__utility-nav__flex">
            <div class="header__utility-nav__flex__flex-item">
              <ul class="header__utility-nav__list">
                <li class="header__utility-nav__list-item"><a class="header__utility-nav__link" href="">Utility Nav Link</a></li>
                <li class="header__utility-nav__list-item"><a class="header__utility-nav__link" href="">Utility Nav Link</a></li>
                <li class="header__utility-nav__list-item"><a class="header__utility-nav__link" href="">Utility Nav Link</a></li>
              </ul>
            </div>
            <div class="header__utility-nav__flex__flex-item">
              <div className="header__utility-nav__search">
                <span className="search-icon" onClick={this.openSearch}>Search</span>
                {this.state.searchIsOpen && (
                <div class="search__wrapper">
                <input/>
                <span class="close-icon" id="search-close" onClick={this.closeSearch}>Close</span>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
   

      <div class="header__primary-nav">
      <div class="header__primary-nav__wrapper">
        
          <div class="header__primary-nav__grid">
          
            <div class="header__primary-nav__grid__grid-item">
              <ul class="header__primary-nav__list">
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
              </ul>
            </div>
            <div class="header__primary-nav__grid__grid-item">
              <div class="header-logo">
              <a href="/">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="white"/><circle cx="40" cy="40" r="8" fill="white"/></svg>
                </a>
              </div>
            </div>
            <div class="header__grid__grid-item">
              <ul class="header__primary-nav__list">
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
                <li class="header__primary-nav__list-item"><a class="header__primary-nav__link" href="">Primary Nav Item</a></li>
              </ul>
            </div>
          </div>
          </div>
          </div>
      </div>
   
</>

)}
};
    
export default Header;