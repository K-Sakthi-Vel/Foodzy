import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface DropdownItem {
  name: string;
  path: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
}

export default function Dropdown({ title, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium focus:outline-none">
        {title} <ChevronDownIcon className="w-3 h-3 ml-1" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
