import React from "react";

const logoUrl = "images/Pokemon-Logo.png";

export interface HeaderProps {
  // Here
}

export const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={logoUrl} alt="Pokemon-Logo" className="w-32 md:w-48 lg:w-64" />
    </div>
  );
};
