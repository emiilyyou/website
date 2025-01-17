export const importImage = (imagePath) => {
    if (!imagePath) {
        console.error("No image path provided.");
        return "";
    }

    console.log("Importing image with path:", imagePath);

    // Directly return the image path as it's within the 'public' directory
    return `/${imagePath}`;
};



