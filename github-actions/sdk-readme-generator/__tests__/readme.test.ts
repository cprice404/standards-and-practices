import {generateReadmeStringFromTemplateString} from '../src/readme';

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

// shows how the runner will run a javascript action with env / stdout protocol
test('template happy path', () => {
  const templateString = `
STATIC CONTENT
PROJECT STATUS: {{ projectStatus }}
PROJECT STABILITY: {{ projectStability }}
STATIC CONTENT
`;
  const output = generateReadmeStringFromTemplateString({
    templateContents: templateString,
    projectStatus: 'incubating',
    projectStability: 'alpha',
  });
  expect(output).toEqual(`
STATIC CONTENT
PROJECT STATUS: incubating
PROJECT STABILITY: alpha
STATIC CONTENT
`);
});
