const child_process = require("child_process");
const paths = require("./paths");
const fs = require("fs");

process.env['FORCE_COLOR'] = 1;

Object.keys(paths).forEach(item => {
    if(!fs.existsSync(paths[item])){
        console.log('\x1b[33m%s\x1b[0m', "Cannot locate " + item + " at " + paths[item]);
        delete process.env[item];
        return;
    }

    process.env[item] = paths[item];
})

function buildCore(){
    console.log('\x1b[33m%s\x1b[0m', "Building Core");

    return new Promise(resolve => {
        const installProcess = child_process.exec(
            `cd ${process.env.CORE} && npm run build ${process.argv.includes("--test") ? "-- --test" : ""}`,
            {env: process.env});
        installProcess.stdout.pipe(process.stdout);
        installProcess.stderr.pipe(process.stderr);

        installProcess.on("exit", resolve);
    });
}

(async function(){
    await buildCore();
})()
