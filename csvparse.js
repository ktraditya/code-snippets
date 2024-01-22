const fs = require('fs');

class CSVReader {
  constructor() {
    this.data = [];
  }

  readFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    this.parseCSV(fileContent);

    // Example: Get string value based on ID
    const idToLookup = '123'; // Replace with the desired ID
    const stringValue = this.getStringById(idToLookup);
    console.log(stringValue);
  }

  parseCSV(csvData) {
    this.data = csvData.split('\n').map(line => {
      const [id, stringValue] = line.split(',');
      return id && stringValue ? { id, stringValue } : null;
    }).filter(Boolean);
  }

  getStringById(id) {
    const matchingEntry = this.data.find(entry => entry.id === id);
    return matchingEntry ? matchingEntry.stringValue : null;
  }
}

// Example usage:
const csvReader = new CSVReader();
csvReader.readFile('path/to/your/file.csv');