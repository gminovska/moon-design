import React from 'react';

const CheckboxTD: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center h-full w-full justify-center pl-2">
    {children}
  </div>
);

export default CheckboxTD;
