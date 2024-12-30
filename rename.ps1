# Define the directory path
$directoryPath = "C:\Users\vincb\Documents\Cadeau_Joo\conf.secret\Secret"  # Use relative path

# Get all files in the specified directory
$files = Get-ChildItem -Path $directoryPath

# Initialize the counter
$counter = 1

# Loop through each file and rename it
foreach ($file in $files) {
    # Ensure the file is not a directory
    if ($file.PSIsContainer) {
        continue
    }

    # Generate the new name with a valid extension
    $newName = "secret" + $counter + $file.Extension

    # Rename the file
    Rename-Item -Path $file.FullName -NewName $newName

    # Increment the counter
    $counter++
}

Write-Output "Renaming complete. Renamed $counter files."
