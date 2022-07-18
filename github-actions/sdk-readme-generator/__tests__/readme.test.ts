import {generateReadmeStringFromTemplateString} from '../src/readme';
import {ProjectStability, ProjectStatus} from '../src/inputs';

// import * as process from 'process';
// import * as cp from 'child_process';
// import * as path from 'path';

// test('throws invalid number', async () => {
//   const input = parseInt('foo', 10);
//   await expect(wait(input)).rejects.toThrow('milliseconds not a number');
// });
//
// test('wait 500 ms', async () => {
//   const start = new Date();
//   await wait(500);
//   const end = new Date();
//   const delta = Math.abs(end.getTime() - start.getTime());
//   expect(delta).toBeGreaterThan(450);
// });

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
PROJECT STATUS: {{ projectStatus }}
PROJECT STABILITY: {{ projectStability }}
STATIC CONTENT
`;
    const output = generateReadmeStringFromTemplateString({
      templateContents: templateString,
      projectStatus: ProjectStatus.OFFICIAL,
      projectStability: ProjectStability.EXPERIMENTAL,
    });
    expect(output).toEqual(`
<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>
[![project status](https://momentohq.github.io/standards-and-practices/project-status-official.svg)](https://github.com/momentohq/standards-and-practices/momento-on-github.md)
[![project status](https://momentohq.github.io/standards-and-practices/project-status-official.svg)](https://github.com/momentohq/standards-and-practices/momento-on-github.md) 


# Foo

foo

## Foo Sub

foo sub

# Bar  

STATIC CONTENT
PROJECT STATUS: 
PROJECT STABILITY: 
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
        projectStatus: ProjectStatus.INCUBATING,
        projectStability: ProjectStability.EXPERIMENTAL,
      });
    })
      .toThrowError(`README template does not conform to Momento OSS requirements:
{"lineNumber":2,"ruleNames":["must-begin-with-oss-header"],"ruleDescription":"Template must begin with OSS Header","ruleInformation":"https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator","errorDetail":"Expected template file to begin with {{ ossHeader }}, on a line by itself.","errorContext":null,"errorRange":null,"fixInfo":null}`);
  });
});
