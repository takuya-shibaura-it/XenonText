import React from 'react';
import FileStatus from './FileStatus';

export default function Tabs() {
  const item = 'Untitled';

  return (
    <div className="bg-gray-900 h-8 w-40 flex flex-row items-center">
      <h2
        className="
                text-xs text-gray-300 select-none
                my-1 ml-2 leading-6
                w-full h-6
                "
      >
        {item}
      </h2>
      <FileStatus />
    </div>
  );
}
