import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
