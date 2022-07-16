import * as core from '@actions/core';
import {generateReadmeFileFromTemplateFile} from './readme';
import {validateProjectStatus} from './inputs';
// import {wait} from './wait';

// async function run(): Promise<void> {
function run(): void {
  try {
    // const ms: string = core.getInput('milliseconds');
    // core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    //
    // core.debug(new Date().toTimeString());
    // await wait(parseInt(ms, 10));
    // core.debug(new Date().toTimeString());
    //
    // core.setOutput('time', new Date().toTimeString());
    const projectStatus = validateProjectStatus(
      core.getInput('project_statusy', {required: true, trimWhitespace: true})
    );
    const projectStability = core.getInput('project_stability');
    core.info(
      `Hallo there! status: '${projectStatus}', stability: '${projectStability}'`
    );
    generateReadmeFileFromTemplateFile({
      templateFile: 'README.md',
      outputFile: 'README.md.out',
      projectStatus: projectStatus,
      projectStability: projectStability,
    });
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
// .then(() => {
//   console.log('success!!');
// })
// .catch(e => {
//   console.error('Uncaught exception while running readme generator', e);
//   throw e;
// });
