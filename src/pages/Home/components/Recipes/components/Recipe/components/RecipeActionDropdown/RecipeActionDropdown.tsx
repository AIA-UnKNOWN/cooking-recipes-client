import React, { useState } from 'react';

const RecipeActionDropdown = props => {
  const [isDropdownCollapsed, setIsDropdownCollapsed] = useState(false);
  const [actions, setActions] = useState([
    {
      name: 'Delete',
      onClick: (e) => console.log('delete'),
    },
  ]);

  return (
    <div className='relative'>
      <label
        className='rounded-full flex justify-center items-center h-[20px]
          w-[20px] cursor-pointer hover:bg-gray-300 text-[14px]'
        htmlFor=""
        onClick={() => setIsDropdownCollapsed(!isDropdownCollapsed)}
      >
        <i className="fa fa-ellipsis-vertical"></i>
      </label>
      {isDropdownCollapsed && (
        <ul className='absolute z-10 top-[110%] right-0 shadow-sm shadow-gray-400 rounded-sm overflow-hidden'>
          {actions?.map((action, i) => (
            <li
              className='cursor-pointer bg-white hover:bg-gray-300 px-4 py-1 text-center'
              key={i}
              onClick={e => {
                action.onClick(e);
                setIsDropdownCollapsed(!isDropdownCollapsed);
              }}
            >
              {action.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeActionDropdown;