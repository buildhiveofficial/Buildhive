// components/Avatar.js
import React from 'react';
import { createCanvas } from 'canvas';

const Avatar = ({ name, size = 100 }) => {
  // Function to generate avatar data URL
  const generateAvatar = (name) => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Set background color (optional)
    ctx.fillStyle = '#f14e11'; // Change this to any color you prefer
    ctx.fillRect(0, 0, size, size);

    // Get the first letter of the name
    const firstLetter = name.charAt(0).toUpperCase();
    
    // Set text properties
    ctx.fillStyle = '#FFFFFF'; // Text color
    ctx.font = `${size / 2}px Arial`; // Font size
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw the letter in the center of the canvas
    ctx.fillText(firstLetter, size / 2, size / 2);

    // Return the data URL
    return canvas.toDataURL();
  };

  return (
    <img src={generateAvatar(name)} alt="Avatar" width={size} height={size} />
  );
};

export default Avatar;
