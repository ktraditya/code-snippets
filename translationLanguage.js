
Certainly! Here's an example of a Node.js class that encapsulates the enum and provides methods to retrieve all values and a single value:

javascript
Copy code
// Enum definition
const Colors = {
  RED: 'Red',
  GREEN: 'Green',
  BLUE: 'Blue',
  YELLOW: 'Yellow',
};

// Node.js class
class ColorEnum {
  static getEnumValues() {
    return Object.values(Colors);
  }

  static getEnumValue(color) {
    return Colors[color] || null;
  }
}

// Example usage
const enumValues = ColorEnum.getEnumValues();
console.log(enumValues); // Output: ['Red', 'Green', 'Blue', 'Yellow']

const selectedColor = ColorEnum.getEnumValue('RED');
console.log(selectedColor); // Output: 'Red'
