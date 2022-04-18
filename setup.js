const { execSync } = require ("child_process");

;(function(){
    console.log("========================================== BUILD AND INSTALL START ================================================");
    const commandList = [
        "sudo npm i -g lerna@3.22.1",
        "lerna bootstrap",
        "./node_modules/typescript/bin/tsc -p ./packages/common-module/",
        "./node_modules/typescript/bin/tsc -p ./packages/hooks/", 
        "./node_modules/typescript/bin/tsc -p ./packages/utils-js/",
        "./node_modules/typescript/bin/tsc -p ./packages/components/",
    ];
    for(var command of commandList){
        try {
            let res = execSync(command);
            console.log(res.toString())
        } catch(err){
            console.log(`!! ${command} failed !!`);
            continue;
        }

        console.log(`** ${command} completed **`);
    }
    console.log("========================================== BUILD AND INSTALL END ================================================");
}());