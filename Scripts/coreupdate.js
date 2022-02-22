const child_process = require("child_process");
const {pathCore} = require("./constant");

function updateCore(){
    console.log('\x1b[33m%s\x1b[0m', "Pulling latest Core");

    return new Promise(resolve => {
        const installProcess = child_process.exec(`cd ${pathCore} && git checkout main && git pull`);
        installProcess.stdout.pipe(process.stdout);
        installProcess.stderr.pipe(process.stderr);

        installProcess.on("exit", resolve);
    });
}

(async function(){
    await updateCore();
})()
