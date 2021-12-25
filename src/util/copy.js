/**
 * Copies a string to clipboard
 * @param {string} string 
 */
export default function copy(string) {
    window.navigator.clipboard.writeText(string);
}