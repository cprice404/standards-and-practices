import {generateReadmeStringFromTemplateString} from '../src/readme';
import {ProjectStability, ProjectStatus, ProjectType} from '../src/inputs';
import * as fs from 'fs';
import * as path from 'path';

describe('readme generator', () => {
  // shows how the runner will run a javascript action with env / stdout protocol
  it('succeeds on happy path', () => {
    const templateString = `
{{ ossHeader }}

# Foo

foo

## Foo Sub

foo sub

# Bar  

STATIC CONTENT
`;
    const output = generateReadmeStringFromTemplateString({
      templateContents: templateString,
      projectType: ProjectType.OTHER,
      projectStatus: ProjectStatus.INCUBATING,
      projectStability: ProjectStability.BETA,
    });
    expect(output).toEqual(`
<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

[![project status](https://momentohq.github.io/standards-and-practices/badges/project-status-incubating.svg)](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-on-github.md)
[![project stability](https://momentohq.github.io/standards-and-practices/badges/project-stability-beta.svg)](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-on-github.md) 


# Foo

foo

## Foo Sub

foo sub

# Bar  

STATIC CONTENT
`);
  });

  it("throws an error if the template doesn't begin with the ossHeader marker", () => {
    const templateStringWithoutOssHeader = `
# FIRST SECTION
`;
    expect(() => {
      generateReadmeStringFromTemplateString({
        templateContents: templateStringWithoutOssHeader,
        projectType: ProjectType.OTHER,
        projectStatus: ProjectStatus.INCUBATING,
        projectStability: ProjectStability.EXPERIMENTAL,
      });
    })
      .toThrowError(`README template does not conform to Momento OSS requirements:
{"lineNumber":2,"ruleNames":["must-begin-with-oss-header"],"ruleDescription":"Template must begin with OSS Header","ruleInformation":"https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator","errorDetail":"Expected template file to begin with {{ ossHeader }}, on a line by itself.","errorContext":null,"errorRange":null,"fixInfo":null}`);
  });
});

const EXPECTED_FIRST_LINE = new RegExp(
  '^<img src="https://docs\\.momentohq\\.com/img/logo\\.svg" alt="logo" width="400"/>'
);

it('succeeds for an SDK README that includes all of the expected section headers', () => {
  const validTemplateContents = fs
    .readFileSync(path.join(__dirname, 'workflows', 'valid-sdk-template.md'))
    .toString();
  expect(
    generateReadmeStringFromTemplateString({
      templateContents: validTemplateContents,
      projectType: ProjectType.SDK,
      projectStatus: ProjectStatus.INCUBATING,
      projectStability: ProjectStability.EXPERIMENTAL,
    })
  ).toMatch(EXPECTED_FIRST_LINE);
});

it('fails for an SDK README that is missing an expected section header', () => {
  expect(true).toEqual(false);
});

it('fails for an SDK README that has expected section headers in the wrong order', () => {
  expect(true).toEqual(false);
});
