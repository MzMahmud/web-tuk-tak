function hyphenCaseToCamelCase(hyphenCaseStr) {
    return hyphenCaseStr.replace(
        /-[a-zA-Z]/g,
        matchedGroup => matchedGroup[1].toUpperCase()
    );
}

const variableNamesInHyphenCase = [
    'background-color',
    'get-by-id',
    'get-by-employee-id',
    'variableName-In-Hyphen-case',
    'alpha_numeric_characters-test',
];

const variableNamesInCamelCase = variableNamesInHyphenCase.map(name => hyphenCaseToCamelCase(name));

console.log(variableNamesInHyphenCase);
console.log(variableNamesInCamelCase);

