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

module.exports = { isString, isValidUrl };