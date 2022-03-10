const fs = require("fs");
const child_process = require("child_process");
const {CORE} = require("./paths");

process.env['FORCE_COLOR'] = 1;

function checkForCore(){
    return fs.existsSync(CORE + "/package.json");
}

function installCoreDeps(){
    console.log('\x1b[33m%s\x1b[0m', "Installing Core dependencies");

    return new Promise(resolve => {
        const installProcess = child_process.exec(`cd ${CORE} && npm install`);
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
