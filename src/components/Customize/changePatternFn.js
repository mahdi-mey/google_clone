export const changePattern = (newPattern) => {
    // Remove existing pattern classes
    document.body.classList.remove(
        "dots",
        "zig-zag",
        "paper",
        "stary-night",
        "threeD-boxes",
        "stairs",
    );

    // Add the new pattern class if not null
    if (newPattern) {
        document.body.classList.add(newPattern);

        // Update localStorage with the new pattern
        const storedThemeDetails = localStorage.getItem("themeDetails");
        const themeDetails = storedThemeDetails ? JSON.parse(storedThemeDetails) : {};

        themeDetails.selectedPattern = newPattern;
        localStorage.setItem("themeDetails", JSON.stringify(themeDetails));

        return newPattern; // Return the new pattern for state update
    }

    return "default"; // Return default if no pattern is selected
};
