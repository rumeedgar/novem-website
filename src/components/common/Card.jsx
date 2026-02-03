import React from 'react';

const Card = ({ title, items, link, label }) => {
  return (
    <div className="border border-gray-300 rounded p-8 transition-colors duration-200 hover:border-black">
      <span className="block font-mono text-xs uppercase tracking-wider text-black mb-2">{label}</span>
      <h3 className="font-mono text-base font-semibold mb-2">{title}</h3>
      <ul className="list-none mb-4">
        {items.map((item, index) => (
          <li key={index} className="relative pl-8 mb-2 text-gray-600 text-sm">
            <span className="absolute left-0 text-black">—</span>
            {item}
          </li>
        ))}
      </ul>
      <a href="#" className="inline-block mt-4 font-mono text-xs text-black underline underline-offset-4">
        {link}
      </a>
    </div>
  );
};

export default Card;
