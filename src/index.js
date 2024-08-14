const { isString, isValidUrl } = require('./utils.js');

async function isWordPress(url) {
    try {
        // Validate the input is a string
        if (!isString(url)) {
            throw new Error('Input must be a string');
        }

        // Validate the input is a valid URL
        if (!isValidUrl(url)) {
            throw new Error('Input must be a valid URL');
        }
        
        const response = await fetch(url);
        const html = await response.text();

        if (html.includes('wp-content') || 
            html.includes('wp-includes') ||
            html.includes('wp-json') || 
            html.includes('wp-')) {
            return true;
        }

        return false;
    } catch (error) {
        console.error('Error fetching the URL:', error.message);
        return false;
    }
}

module.exports = { isWordPress };