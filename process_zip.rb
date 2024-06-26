require 'zip'
require 'fileutils'
require 'find'

# Function to find and extract zip file, and check for PDF files recursively
def process_zip_file(directory)
  zip_file_path = nil

  # Step 1: Search for the zip file
  Dir.foreach(directory) do |file|
    if File.extname(file) == '.zip'
      zip_file_path = File.join(directory, file)
      break
    end
  end

  if zip_file_path.nil?
    puts "No zip file found in the directory."
    return
  else
    puts "Found zip file: #{zip_file_path}"
  end

  # Step 2: Extract the zip file
  extract_path = File.join(directory, "extracted")
  FileUtils.mkdir_p(extract_path)

  Zip::File.open(zip_file_path) do |zip_file|
    zip_file.each do |entry|
      file_path = File.join(extract_path, entry.name)
      FileUtils.mkdir_p(File.dirname(file_path))
      zip_file.extract(entry, file_path) unless File.exist?(file_path)
    end
  end

  puts "Zip file extracted to #{extract_path}"

  # Step 3: Check for PDF files recursively
  pdf_files = []

  Find.find(extract_path) do |path|
    pdf_files << path if File.file?(path) && File.extname(path) == '.pdf'
  end

  if pdf_files.any?
    puts "PDF files found:"
    pdf_files.each { |pdf| puts pdf }
  else
    puts "No PDF files found in the extracted contents."
  end
end

# Specify the directory containing the zip file
directory = '/path/to/your/folder'
process_zip_file(directory)
