import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, items, link, label }) => {
  const linkPath = label === 'PAYMENTS' ? '/payments' : '/cash';

  return (
    <div className="border border-gray-300 rounded p-4 md:p-8 transition-colors duration-200 hover:border-black">
      <span className="block font-mono text-xs uppercase tracking-wider text-black mb-2">{label}</span>
      <h3 className="font-mono text-sm md:text-base font-semibold mb-2">{title}</h3>
      <ul className="list-none mb-4">
        {items.map((item, index) => (
          <li key={index} className="relative pl-6 md:pl-8 mb-2 text-gray-600 text-xs md:text-sm">
            <span className="absolute left-0 text-black">—</span>
            {item}
          </li>
        ))}
      </ul>
      <Link to={linkPath} className="inline-block mt-4 font-mono text-xs text-black underline underline-offset-4">
        {link}
      </Link>
    </div>
  );
};

export default Card;
