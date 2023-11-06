import React, { useState, useEffect } from "react";

const AnchorList = () => {
  const anchorItems = [
    { id: "section1", label: "Section 1" },
    { id: "section2", label: "Section 2" },
    { id: "section3", label: "Section 3" },
  ];

  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const handleAnchorClick = (item) => {
    setSelectedItem(item);
    setExpanded(false);
    updateHash(item.id);
  };

  const updateHash = (hash) => {
    window.location.hash = hash;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const item = anchorItems.find((item) => item.id === hash);
      setSelectedItem(item || "");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [anchorItems]);

  useEffect(() => {
    // Show the list by default on medium displays and up
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setExpanded(mediaQuery.matches);

    // Update the hash fragment on component mount to reflect the active item
    if (selectedItem) {
      updateHash(selectedItem.id);
    }
  }, [selectedItem]);

  return (
    <div>
      <button onClick={handleButtonClick}>
        {selectedItem ? selectedItem.label : "Select an Anchor"}
      </button>
      {expanded && (
        <ul>
          {anchorItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleAnchorClick(item)}
              className={selectedItem === item ? "active" : ""}
            >
              {item.label}
              {selectedItem === item && <div className="dot"></div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnchorList;
