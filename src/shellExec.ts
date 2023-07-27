const shelljs = require("shelljs");

const { exec } = shelljs;

// function to execute commands in cli
async function shellExec(command: string, silentMode: boolean = true): Promise<void> {
  const result = exec(command, { silent: silentMode });
  if (result.code !== 0) {
    throw new Error(`Error executing command: ${command}`);
  }
}

// export the shellExec function
export default shellExec;
