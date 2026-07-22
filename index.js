import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const v = getLatestVersion();
const latestModule = require(`./bin/${v}/index.js`);

const load = ({ fileContent, parseRegex, showLog, showLogStep1 }) => {

    return latestModule.default({
        fileContent, parseRegex,
        inShowLog: showLog, showLogStep1
    });
};

export default load;