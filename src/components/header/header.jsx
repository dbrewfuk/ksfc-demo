

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainNav = () => {
  const [activeNav, setActiveNav] = useState(null);

  const handleNavHover = (navItem) => {
    setActiveNav(navItem);
  };

  const mainNavItems = ['Item 1', 'Item 2', 'Item 3'];

  const subNavs = {
    'Item 1': ['Link 1.1', 'Link 1.2', 'Link 1.3'],
    'Item 2': ['Link 2.1', 'Link 2.2', 'Link 2.3'],
    'Item 3': ['Link 3.1', 'Link 3.2', 'Link 3.3'],
  };

  return (
    <div>
      <ul className="nav nav-pills">
        {mainNavItems.map((item) => (
          <li
            key={item}
            className={`nav-item ${activeNav === item ? 'active' : ''}`}
            onMouseEnter={() => handleNavHover(item)}
            onMouseLeave={() => handleNavHover(null)}
          >
            <a className="nav-link" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="sub-nav">
        <ul className="nav nav-pills">
          {subNavs[activeNav] && subNavs[activeNav].map((link) => (
            <li key={link} className="nav-item">
              <a className="nav-link" href="#">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainNav;