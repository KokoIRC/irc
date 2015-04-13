var codes = {
    white: '\u000300',
    black: '\u000301',
    darkBlue: '\u000302',
    darkGreen: '\u000303',
    lightRed: '\u000304',
    darkRed: '\u000305',
    magenta: '\u000306',
    orange: '\u000307',
    yellow: '\u000308',
    lightGreen: '\u000309',
    cyan: '\u000310',
    lightCyan: '\u000311',
    lightBlue: '\u000312',
    lightMagenta: '\u000313',
    gray: '\u000314',
    lightGray: '\u000315',

    bold: '\u0002',
    underline: '\u001f',

    reset: '\u000f'
};
exports.codes = codes;

function wrap(color, text, resetColor) {
    if (codes[color]) {
        text = codes[color] + text;
        text += (codes[resetColor]) ? codes[resetColor] : codes.reset;
    }
    return text;
}
exports.wrap = wrap;
