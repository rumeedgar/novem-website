import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      textDecoration: "none",
      color: isActive ? "var(--c-text-primary)" : "var(--c-text-secondary)",
      fontSize: "0.75rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      position: "relative",
      cursor: "pointer",
      borderBottom: isActive ? "1px solid var(--c-text-primary)" : "none",
      paddingBottom: "2px",
    };
  };

  return (
    <nav className="py-4 md:py-8 mb-0 flex justify-between items-center border-b border-transparent">
      <Link to="/" className="font-bold tracking-wider text-sm md:text-base no-underline text-inherit">
        Novem
      </Link>
      <div className="flex gap-4 md:gap-8">
        <Link to="/payments" style={navLinkStyle("/payments")}>
          Payments
        </Link>
        <Link to="/cash" style={navLinkStyle("/cash")}>
          Cash
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
