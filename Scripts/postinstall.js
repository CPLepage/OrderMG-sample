const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

const pathCore = path.resolve(__dirname, "../OrderMG-core")

function checkForCore(){
    return fs.existsSync(pathCore);
}

function installCoreDeps(){
    console.log('\x1b[33m%s\x1b[0m', "Installing Core dependencies");

    return new Promise(resolve => {
        const installProcess = child_process.exec(`cd ${pathCore} && npm install`);
        installProcess.stdout.pipe(process.stdout);
        installProcess.stderr.pipe(process.stderr);

        installProcess.on("exit", resolve);
    });
}

(async function(){
    if(!checkForCore()){
        console.log("\x1b[31m%s\x1b[0m\x1b[33m%s\x1b[0m", "Core not present. Please run : ", "git submodule init && git submodule update");
        console.log("\x1b[31m%s\x1b[0m%s", "Then re-run : ", "npm install");
        return;
    }

    await installCoreDeps();
})()
