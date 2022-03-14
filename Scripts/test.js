const child_process = require("child_process");
const {CORE} = require("./paths");

process.env['FORCE_COLOR'] = 1;

function buildTests(){
    return new Promise(resolve => {
        const installProcess = child_process.exec(`npm run build -- --test`, {env: process.env});
        installProcess.stdout.pipe(process.stdout);
        installProcess.stderr.pipe(process.stderr);

        installProcess.on("exit", resolve);
    });
}

function launchTests(){
    console.log('\x1b[33m%s\x1b[0m', "Starting Tests");

    return new Promise(resolve => {
        const installProcess = child_process.exec(
            `cd ${CORE} && npm run test`,
            {env: process.env});
        installProcess.stdout.pipe(process.stdout);
        installProcess.stderr.pipe(process.stderr);

        installProcess.on("exit", resolve);
    });
}

(async function(){
    await buildTests();
    await launchTests();
})()
