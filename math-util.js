function isNumber(string) {
    if (string === null || string === undefined)
        return false;

    string = string.trim();
    if (string === '')
        return false;

    return !isNaN(string);
}

function getNumber(string) {
    if (isNumber(string))
        return Number(string.trim());
}

function testisNumberGetNumber() {
    const strings = [
        null,
        undefined,
        '',
        '    ',
        '  4647',
        '8745 666',
        '4,546',
        '+46546',
        '-874',
        '   -874  ',
        '4,85,474',
        '-4,85,474',
        '+4,85,474',
        '.1',
        '0',
        '0.0',
        '.0',
        '-3.1',
        '+3.1',
        '-3.1.4',
        '+3.1.4',
        '1e3',
    ];

    strings.forEach(s => {
        const isNum = isNumber(s);
        console.log(`isNumber('${s}') = ${isNum}`);
        if (isNum) {
            const number = getNumber(s);
            console.log(`${number} + 1 = ${number + 1}`);
        }
        console.log('----x----');
    });
}

function isBdDate(string) {
    if (string === null || string === undefined)
        return false;

    string = string.trim();
    if (string === '')
        return false;

    const dateRegex = /^[0-9০-৯]{1,2}[-/][0-9০-৯]{1,2}[-/][0-9০-৯]{2,4}$/;
    // const dateRegex = /^[0-9\u09e6-\u09ef]{1,2}[-/][0-9\u09e6-\u09ef]{1,2}[-/][0-9\u09e6-\u09ef]{2,4}$/;
    return dateRegex.test(string);
}

function convertToEnglishNumber(str) {
    str = String(str);
    str = str.replaceAll('০', '0');
    str = str.replaceAll('১', '1');
    str = str.replaceAll('২', '2');
    str = str.replaceAll('৩', '3');
    str = str.replaceAll('৪', '4');
    str = str.replaceAll('৫', '5');
    str = str.replaceAll('৬', '6');
    str = str.replaceAll('৭', '7');
    str = str.replaceAll('৮', '8');
    str = str.replaceAll('৯', '9');
    return str;
}

// bdDateStr -> day/month/year format
function getTimeStamp(bdDateStr) {
    bdDateStr = convertToEnglishNumber(bdDateStr);
    bdDateStr = bdDateStr.replaceAll('-', '/');
    const dayMonthYear = bdDateStr.split('/');
    const date = new Date(dayMonthYear[2], dayMonthYear[1] - 1, dayMonthYear[0]);
    return Number(date.getTime());
}

function testDate() {
    let dates = [
        '31/12/1999',
        '31/12/19990',
        '31/12/19990',
        '04/10/96',
        '০৪/১০/৯৬',
        '০৪/১০/৯৬৫৪',
        '৪/১০/৯৬৫৪',
        '৪-১০-৯৬৫৪',
        '৪-১০-৯৬৫৪আ',
        '৪-১০-৯৬৫৪আ',
    ];

    // const dateRegex = /^[0-9০-৯]{1,2}[-/][0-9০-৯]{1,2}[-/][0-9০-৯]{2,4}$/;
    const dateRegex = /^[0-9\u09e6-\u09ef]{1,2}[-/][0-9\u09e6-\u09ef]{1,2}[-/][0-9\u09e6-\u09ef]{2,4}$/;
    console.log(dateRegex);

    dates = dates.filter(date => dateRegex.test(date));

    dates.forEach(dateStr => {
        const timeStamp = getTimeStamp(dateStr);
        const date = new Date(timeStamp);
        console.log(`${dateStr} => ${timeStamp} => ${date}`);
    });
}

function convertToEnglishNumberUnicode(string) {
    const banglaZero = '\u09e6';
    const englishZero = '0';
    let banglaDigit, englishDigit;

    string = String(string);
    for (let i = 0; i <= 9; i++) {
        banglaDigit = String.fromCharCode(banglaZero.charCodeAt(0) + i);
        englishDigit = String.fromCharCode(englishZero.charCodeAt(0) + i);
        string = string.replaceAll(banglaDigit, englishDigit);
    }
    return string;
}