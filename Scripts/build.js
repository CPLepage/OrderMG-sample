const dotenv = require('dotenv');
const child_process = require("child_process");
const {pathCore} = require("./constant");
const path = require("path");
dotenv.config();

if(process.env.SERVICES_PATH){
    process.env.SERVICES_PATH = path.resolve(__dirname, "../", process.env.SERVICES_PATH);
}

if(process.env.CONSTANTS_FILE){
    process.env.CONSTANTS_FILE = path.resolve(__dirname, "../", process.env.CONSTANTS_FILE);
}

function buildCore(){
    console.log('\x1b[33m%s\x1b[0m', "Building Core");

    return new Promise(resolve => {
        const installProcess = child_process.exec(
            `cd ${pathCore} && npm run build ${process.argv.includes("--test") ? "-- --test" : ""}`,
            {env: process.env});
        installProcess.stdout.pipe(process.stdout);
        installProcess.stderr.pipe(process.stderr);

        installProcess.on("exit", resolve);
    });
}

(async function(){
    await buildCore();
})()
