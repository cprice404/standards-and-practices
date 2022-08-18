import * as core from '@actions/core';
import {generateReadmeFileFromTemplateFile} from './readme';
import {
  validateProjectStability,
  validateProjectStatus,
  validateProjectType,
} from './inputs';

function run(): void {
  try {
    const projectType = validateProjectType(
      core.getInput('project_type', {required: true, trimWhitespace: true})
    );
    const projectStatus = validateProjectStatus(
      core.getInput('project_status', {required: true, trimWhitespace: true})
    );
    const projectStability = validateProjectStability(
      core.getInput('project_stability', {required: true, trimWhitespace: true})
    );

    const templateFile = core.getInput('template_file', {
      required: false,
      trimWhitespace: true,
    });

    const outputFile = core.getInput('output_file', {
      required: false,
      trimWhitespace: true,
    });

    core.info(`
Generating Momento OSS README
         input file: ${templateFile}
        output file: ${outputFile}
       project type: ${projectType}
     project status: ${projectStatus}
  project stability: ${projectStability}
`);
    generateReadmeFileFromTemplateFile({
      templateFile: templateFile,
      outputFile: outputFile,
      projectType: projectType,
      projectStatus: projectStatus,
      projectStability: projectStability,
    });
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
