import React, { useState } from "react";

// Updated sample data for layers, tabs, sub-items, and sub-sub-items
const layers = [
  {
    name: "Administration",
    tabs: [
      {
        name: "About",
      },

      {
        name: "Mission and Vision",
      },
      {
        name: "Board Members",
      },
    ],
  },
  {
    name: "Programs & Services",
    tabs: [
      {
        name: "Health and Wellness",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
      {
        name: "National Fire Incident Reporting",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
      {
        name: "Junior Firefighter Program",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
    ],
  },
  {
    name: "Training & Education",
    tabs: [
      {
        name: "Educational Programs",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
      {
        name: "Degree Programs",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
      {
        name: "Fire Department Training",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
      {
        name: "Emergency Services Training",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
      {
        name: "Business, Industry, and Government Training",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
    ],
  },
  {
    name: "Resources",
    tabs: [
      {
        name: "Forms",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
      {
        name: "Annual Reports",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
    ],
  },
  {
    name: "News & Events",
    tabs: [
      {
        name: "Sub Nav Item",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
      {
        name: "Sub Nav Item",
        subItems: [
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
          {
            name: "Sub Sub Nav Item",
          },
        ],
      },
    ],
  },

  // Add more layers and tabs as needed
];

function PrimaryNav() {
  const [layer, setLayer] = useState(0);
  const [tab, setTab] = useState(0);
  const [activeSubItem, setActiveSubItem] = useState(0);
  const [activeSubSubItem, setActiveSubSubItem] = useState(0);
  const [activeChildItem, setActiveChildItem] = useState(null);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setActiveSubItem(0); // Reset active sub-item when switching tabs
    setActiveSubSubItem(0); // Reset active sub-sub-item when switching tabs
  };

  const handleSubItemChange = (newSubItem) => {
    setActiveSubItem(newSubItem);
    setActiveSubSubItem(0); // Reset active sub-sub-item when switching sub-items
  };

  const handleSubSubItemChange = (newSubSubItem) => {
    setActiveSubSubItem(newSubSubItem);
  };
  const subIndex = 0;
  const [isActive, setIsActive] = React.useState(false);
  const [subIsActive, setSubIsActive] = React.useState(false);

  const handleMouseLeave = () => {
    // Remove the active class
    // Example: Updating state to remove the class
    // Assuming you have state variable called 'isActive' to track the active state
    setIsActive(false);
    setSubIsActive(false);
  };

  return (
    <div className="header__primary-nav" onMouseLeave={handleMouseLeave}>
      <ul className="header__primary-nav__list">
        {layers.map((layerItem, index) => (
          <li
            className={`header__primary-nav__list-item ${
              layer[0] === index ? "active" : ""
            }`}
            key={index}
            onMouseEnter={() => {
              setLayer(index);
              setActiveSubItem(0); // Reset active sub-item when switching main navigation items
              setActiveSubSubItem(0); // Reset active sub-sub-item when switching main navigation items
              setActiveChildItem(subIndex);
              setIsActive(true);
            }}
          >
            <a
              className="header__primary-nav__link"
              href=""
              className="header__primary-nav__link"
            >
              {layerItem.name}
            </a>
          </li>
        ))}
      </ul>

      <div className={`header__sub-nav ${isActive ? "active" : ""}`}>
        <ul className="header__sub-nav__list">
          {layers[layer].tabs?.map((tabItem, index) => (
            <li
              className="header__sub-nav__list-item" // Add class name for sub-navigation items
              key={index}
              onMouseEnter={() => {
                handleTabChange(index);
                setSubIsActive(true);
                handleSubItemChange(0); // Reset active sub-item when switching tabs
                handleSubSubItemChange(0); // Reset active sub-sub-item when switching tabs
              }}
            >
              <a className="header__sub-nav__link" href="">
                {tabItem.name}
              </a>
            </li>
          ))}
        </ul>
        <div className={`header__sub-nav ${subIsActive ? "active" : ""}`}>
          <ul className="header__sub-nav__list">
            {layers[layer]?.tabs?.[tab]?.subItems?.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className={`header__sub-nav__list-item ${
                  subIndex === activeSubItem ? "active" : ""
                }`}
                onMouseEnter={() => {
                  handleSubItemChange(subIndex);
                  handleSubSubItemChange(0); // Reset active sub-sub-item when switching sub-items
                }}
              >
                <a href="" className="header__sub-nav__link">
                  {subItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrimaryNav;
