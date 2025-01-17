export const importImage = (imagePath) => {
    if (!imagePath) {
      console.error("No image path provided.");
      return "";
    }
  
    console.log("Importing image with path:", imagePath);
  
    // Prepend the base path (if deployed under a subdirectory like /website/)
    const basePath = "/website";  // Update this if needed
  
    // Return the image path with the base path for correct referencing in GitHub Pages
    return `${basePath}/${imagePath}`;
  };
  


