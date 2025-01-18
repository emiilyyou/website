export const importImage = (imagePath) => {
    if (!imagePath) {
      console.error("No image path provided.");
      return "";
    }
  
    // Log the image path to ensure it's correct
    console.log("Importing image with path:", imagePath);
  
    // Return the image path from the public directory with the correct base URL
    const resolvedPath = `/website/${imagePath}`;  // Prepend 'website/' to the image path
    console.log("Resolved image path:", resolvedPath);  // Debugging resolved path
    return resolvedPath;
  };
  






