const AdmZip = require('adm-zip');
const fs = require('fs');

function extractZip(zipFilePath, extractFolder) {
  try {
    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(extractFolder, /*overwrite*/ true);
    console.log('Extraction complete!');
  } catch (error) {
    console.error('Error extracting the zip file:', error.message);
  }
}

// Replace 'example.zip' with the actual path to your zip file
const zipFilePath = 'example.zip';
const extractFolder = 'output'; // Specify the folder where you want to extract the contents

// Check if the zip file exists
if (fs.existsSync(zipFilePath)) {
  // Perform extraction
  extractZip(zipFilePath, extractFolder);
} else {
  console.error('Zip file not found!');
}
