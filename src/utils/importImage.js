export const importImage = (imagePath) => {
    if (!imagePath) {
        console.error("No image path provided.");
        return "";
    }

    // Log the image path to ensure it's correct
    console.log("Importing image with path:", imagePath);

    // Return the image path from the public directory
    const resolvedPath = `/${imagePath}`;  // Absolute path from the public folder
    console.log("Resolved image path:", resolvedPath);  // Debugging resolved path
    return resolvedPath;
};


