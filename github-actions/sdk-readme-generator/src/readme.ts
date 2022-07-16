import * as nunjucks from 'nunjucks';
import * as fs from 'fs';

export interface ReadmeFileGeneratorOptions {
  templateFile: string;
  outputFile: string;
  projectStatus: string;
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
  nunjucks.configure({autoescape: true});
  const templateContext: TemplateContext = {
    projectStatus: options.projectStatus,
    projectStability: options.projectStability,
  };
  return nunjucks.renderString(options.templateContents, templateContext);
}
