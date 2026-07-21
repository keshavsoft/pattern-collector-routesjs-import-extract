import getAllMatches from "pattern-collector-routesjs-import";

const startFunc = ({ fileContent }) => {

    const matches = getAllMatches({ fileContent });

    return matches.map(match => {
        const clean = match.replace(/[\r\n]/g, '');

        const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/end-points\.js['"];/;

        const parts = clean.match(parseRegex);

        if (parts) {
            return {
                variable: parts[1],
                folderName: parts[2]
            };
        };

        return null;

    }).filter(Boolean);
};

export default startFunc;