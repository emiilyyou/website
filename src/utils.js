// utils/importImage.js
export const importImage = (imagePath) => {
    if (!imagePath) {
        console.error("No image path provided.");
        return "";
    }

    console.log("Importing image with path:", imagePath); // Ensure the path is correct

    // Return the path directly, as the path is relative to public/
    return imagePath;
};







