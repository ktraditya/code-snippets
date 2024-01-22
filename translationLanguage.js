// Enum definition
const Colors = {
    RED: 'Red',
    GREEN: 'Green',
    BLUE: 'Blue',
    YELLOW: 'Yellow',
  };
  
  // Function to get a single value from the enum
  function getEnumValue(color) {
    return Colors[color] || null; // Return null if the color is not found
  }
  
  // Example usage
  const selectedColor = getEnumValue('RED');
  console.log(selectedColor); // Output: 'Red'
