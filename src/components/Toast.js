import React from 'react';

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white rounded-lg px-4 py-2 shadow-lg flex items-center justify-between">
      <span>{message}</span>
      <button
        className="ml-4 text-gray-400 hover:text-gray-200"
        onClick={onClose}
      >
        &#10005;
      </button>
    </div>
  );
};

export default Toast;
