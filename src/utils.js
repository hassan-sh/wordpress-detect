function isString(input) {
    return typeof input === 'string';
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

// Export for CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { isString, isValidUrl };
}

// Export for ES6 Modules
export { isString, isValidUrl };