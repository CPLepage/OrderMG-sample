const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const defaultServicesDir = path.resolve(__dirname, "../Services");
const defaultConstantsFile = path.resolve(__dirname, "../Constants.ts");
const defaultLanguagesDir = path.resolve(__dirname, "../i18n");

module.exports = {
    CORE: path.resolve(__dirname, "../OrderMG-core"),
    SERVICES_DIR: process.env.SERVICES_DIR ? path.resolve(__dirname, "../", process.env.SERVICES_DIR) :
        defaultServicesDir,
    CONSTANTS_FILE: process.env.CONSTANTS_FILE ? path.resolve(__dirname, "../", process.env.CONSTANTS_FILE) :
        defaultConstantsFile,
    LANGUAGES_DIR: process.env.LANGUAGES_DIR ? path.resolve(__dirname, "../", process.env.LANGUAGES_DIR) :
        defaultLanguagesDir,
}
