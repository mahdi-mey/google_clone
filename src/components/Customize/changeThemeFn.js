export const changeTheme = (newTheme) => {
    // Remove existing theme classes
    document.body.classList.remove(
        // light themes
        "default-light",
        "theme-red",
        "theme-yellow",
        "theme-green",
        // dark themes
        "default-dark",
        "theme-dark-red",
        "theme-dark-green",
        "theme-dark-yellow",
    );

    if (newTheme) {
        document.body.classList.add(newTheme);

        // Update localStorage with the new theme
        const storedThemeDetails = localStorage.getItem("themeDetails");
        const themeDetails = storedThemeDetails ? JSON.parse(storedThemeDetails) : {};

        themeDetails.selectedTheme = newTheme;
        localStorage.setItem("themeDetails", JSON.stringify(themeDetails));

        return newTheme; // Return the new theme for state update
    }

    return null; // Return null if no theme is selected
};