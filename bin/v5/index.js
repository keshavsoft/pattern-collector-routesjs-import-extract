import getAllMatches from "pattern-collector-routesjs-import";

const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/end-points\.js['"];/;
const showLog = false;

const startFunc = ({ fileContent, inShowLog }) => {

    const matches = getAllMatches({ fileContent });

    if (inShowLog) console.log("matches : ", matches);
    if (showLog) console.log("matches : ", matches);

    return matches.map(match => {
        const clean = match.line.replace(/[\r\n]/g, '');

        const parts = clean.match(parseRegex);

        if (parts) {
            return {
                variable: parts[1],
                folderName: parts[2],
                line: match.line,
                lineNumber: match.lineNumber
            };
        };

        return null;

    }).filter(Boolean);
};

export default startFunc;