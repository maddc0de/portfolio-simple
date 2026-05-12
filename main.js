"use strict";
// ============================================================
// main.ts — Madelane Daz Portfolio
// ============================================================
// To compile:           npx tsc
// To watch for changes: npx tsc --watch
// (tsconfig.json handles all compiler options automatically)
const THEME_KEY = "theme";
/**
 * Reads the saved theme from localStorage.
 * Returns null if nothing has been saved yet.
 */
function getSavedTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark")
        return saved;
    return null;
}
/**
 * Applies a theme to the <html> element and saves it to localStorage.
 */
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
}
/**
 * Toggles between light and dark themes.
 */
function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
}
/**
 * Initialises the theme toggle button.
 */
function initThemeToggle() {
    // Restore saved preference on page load
    const saved = getSavedTheme();
    if (saved)
        applyTheme(saved);
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) {
        console.warn("Theme toggle button not found.");
        return;
    }
    toggleBtn.addEventListener("click", toggleTheme);
}
// Run on DOM ready
// Note: script is already at the bottom of <body> so DOM is ready by the time
// this runs - DOMContentLoaded is kept as a safety net in case <script> is ever moved
document.addEventListener("DOMContentLoaded", initThemeToggle);
