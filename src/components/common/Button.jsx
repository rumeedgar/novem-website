import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, onClick, variant = 'primary', href, ...props }) => {
  const baseClass = "inline-flex items-center justify-center px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold no-underline transition-all duration-200 cursor-pointer";
  const variantClass = variant === 'primary'
    ? "bg-black text-white border border-black hover:opacity-80"
    : "bg-transparent text-black border border-gray-300 ml-4 hover:border-black";

  if (href) {
    return (
      <Link to={href} className={`${baseClass} ${variantClass}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${variantClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
