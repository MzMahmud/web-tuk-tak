const mobileNumbers = [
    "01922900262",
    "01963611385",
    "+8801718441380",
    "8801521319307",
    "01221319307",
    "88015213193070",
]

console.log(mobileNumbers)

const bdPhoneNumberRegEx = /(\+?88)?(01[3-9][0-9]{8})/

const onlyNumber = mobileNumbers
    .filter(str => bdPhoneNumberRegEx.test(str))
    .map(number => number.replace(bdPhoneNumberRegEx, /$2/))
    .map(number => number.substr(1, 11))

console.log(onlyNumber)