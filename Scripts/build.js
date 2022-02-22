const dotenv = require('dotenv');
const child_process = require("child_process");
const {pathCore} = require("./constant");
dotenv.config();

function buildCore(){
    console.log('\x1b[33m%s\x1b[0m', "Building Core");

    return new Promise(resolve => {
        const installProcess = child_process.exec(`cd ${pathCore} && npm run build`, {env: process.env});
        installProcess.stdout.pipe(process.stdout);
        installProcess.stderr.pipe(process.stderr);

        installProcess.on("exit", resolve);
    });
}

(async function(){
    await buildCore();
})()
