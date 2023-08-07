 module.exports = function toReadable(number) {
    number = number.toString();
    let result = '';
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    beforeTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (Number(number) === 0) {
            result += 'zero';
    }
    function readNumbers (number) {
        if (number.length === 1) {
                result += units[number]; 
        } else if (number.length === 2) {
            if (Number(number) < 20) {
                result += beforeTwenty[number - 10];
            } else {
                result += tens[Math.trunc(Number(number)/10) - 2] + ' ' + units[number % 10];
            }

        } else if (number.length === 3) {
            if (number % 100 === 0) {
                result = units[Math.trunc(number/100)] + ' ' + 'hundred';
            } else {
                result = units[Math.trunc(number/100)] + ' ' + 'hundred' + ' ' + toReadable (number % 100);

            }
        }
        return result.trim();
    }
    return readNumbers(number);
}
