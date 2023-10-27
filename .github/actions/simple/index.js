const core = require("@actions/core")
const github = require("@actions/github")

try {
    core.error("Error");
    core.debug("Debug");
    core.info("Info");

    const name = core.getInput("greets");

    console.log(`Hello ${name}`);


    const time = new Date().toTimeString()

    core.setOutput("time_greet", time)

    core.exportVariable("HELLO_TIME", time)

} catch (error) {
    core.setFailed(error)
}

