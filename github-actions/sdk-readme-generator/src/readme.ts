import * as nunjucks from 'nunjucks';
import * as fs from 'fs';
import * as markdownlint from 'markdownlint';
import {Options as MarkdownLintOptions} from 'markdownlint';
import {ProjectStatus} from './inputs';

export interface ReadmeFileGeneratorOptions {
  templateFile: string;
  outputFile: string;
  projectStatus: ProjectStatus;
  projectStability: string;
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
  projectStatus: string;
  projectStability: string;
}

interface TemplateContext {
  projectStatus: string;
  projectStability: string;
}

export function generateReadmeStringFromTemplateString(
  options: ReadmeStringGeneratorOptions
): string {
  // markdownlint.
  const customMarkdownLintRule: markdownlint.Rule = {
    names: ['awesome-custom-rule'],
    description: 'content must be awesome',
    tags: ['momento-oss'],
    function: (params, onError) => {
      console.log(`IN CUSTOM MARKDOWNLINT RULE; params.name: ${params.name}`);
      for (const token of params.tokens) {
        console.log(`MARKDOWN TOKEN: ${JSON.stringify(token)}`);
      }
    },
  };
  const markdownLintOptions: MarkdownLintOptions = {
    config: {
      default: true,
    },
    customRules: [customMarkdownLintRule],
    strings: {README_template: options.templateContents},
  };
  const lintResults = markdownlint.sync(markdownLintOptions);
  console.log(`LINT RESULTS: ${JSON.stringify(lintResults, null, 2)}`);

  nunjucks.configure({autoescape: true});
  const templateContext: TemplateContext = {
    projectStatus: options.projectStatus,
    projectStability: options.projectStability,
  };
  return nunjucks.renderString(options.templateContents, templateContext);
}
