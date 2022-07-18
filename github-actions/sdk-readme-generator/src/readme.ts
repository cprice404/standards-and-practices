import * as nunjucks from 'nunjucks';
import * as fs from 'fs';
import * as markdownlint from 'markdownlint';
import {LintResults, Options as MarkdownLintOptions} from 'markdownlint';
import {ProjectStability, ProjectStatus} from './inputs';
import {mustBeginWithOssHeader} from './markdownlint-rules/rule-must-begin-with-oss-header';

export interface ReadmeFileGeneratorOptions {
  templateFile: string;
  outputFile: string;
  projectStatus: ProjectStatus;
  projectStability: ProjectStability;
}

export function generateReadmeFileFromTemplateFile(
  options: ReadmeFileGeneratorOptions
): void {
  const templateContents = fs.readFileSync(options.templateFile).toString();
  const outputContents = generateReadmeStringFromTemplateString({
    templateContents: templateContents,
    projectStatus: options.projectStatus,
    projectStability: options.projectStability,
  });
  fs.writeFileSync(options.outputFile, outputContents);
}

interface ReadmeStringGeneratorOptions {
  templateContents: string;
  projectStatus: ProjectStatus;
  projectStability: ProjectStability;
}

interface HeaderTemplateContext {
  projectStatus: string;
  projectStability: string;
}

const OSS_README_HEADER_TEMPLATE = `<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

[![project status](https://momentohq.github.io/standards-and-practices/project-status-official.svg)](https://github.com/momentohq/standards-and-practices/momento-on-github.md)
[![project status](https://momentohq.github.io/standards-and-practices/project-status-official.svg)](https://github.com/momentohq/standards-and-practices/momento-on-github.md) 
`;

interface ReadmeTemplateContext {
  ossHeader: string;
}

export function generateReadmeStringFromTemplateString(
  options: ReadmeStringGeneratorOptions
): string {
  // markdownlint.
  // const customMarkdownLintRule: markdownlint.Rule = {
  //   names: ['awesome-custom-rule'],
  //   description: 'content must be awesome',
  //   tags: ['momento-oss'],
  //   function: (params, onError) => {
  //     console.log(`IN CUSTOM MARKDOWNLINT RULE; params.name: ${params.name}`);
  //     for (const token of params.tokens) {
  //       console.log(`MARKDOWN TOKEN: ${JSON.stringify(token)}`);
  //     }
  //   },
  // };
  const markdownLintOptions: MarkdownLintOptions = {
    config: {
      default: true,
      'no-trailing-spaces': false,
      'first-line-heading': false,
    },
    customRules: [mustBeginWithOssHeader],
    strings: {README_template: options.templateContents},
  };
  const lintResults: markdownlint.LintResults =
    markdownlint.sync(markdownLintOptions);
  console.log(`LINT RESULTS: ${JSON.stringify(lintResults, null, 2)}`);
  const lintErrors: Array<markdownlint.LintError> =
    lintResults['README_template'];
  if (lintErrors.length > 0) {
    throw new Error(
      `README template does not conform to Momento OSS requirements:\n${lintErrors
        .map(le => JSON.stringify(le))
        .join('\n')}`
    );
  }

  // TODO: render
  const ossHeader = OSS_README_HEADER_TEMPLATE;

  nunjucks.configure({autoescape: false});
  const templateContext: ReadmeTemplateContext = {
    ossHeader: ossHeader,
  };
  return nunjucks.renderString(options.templateContents, templateContext);
}
