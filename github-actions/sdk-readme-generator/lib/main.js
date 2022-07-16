"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const readme_1 = require("./readme");
const inputs_1 = require("./inputs");
// import {wait} from './wait';
// async function run(): Promise<void> {
function run() {
    try {
        // const ms: string = core.getInput('milliseconds');
        // core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
        //
        // core.debug(new Date().toTimeString());
        // await wait(parseInt(ms, 10));
        // core.debug(new Date().toTimeString());
        //
        // core.setOutput('time', new Date().toTimeString());
        const projectStatus = (0, inputs_1.validateProjectStatus)(core.getInput('project_statusy', { required: true, trimWhitespace: true }));
        const projectStability = core.getInput('project_stability');
        core.info(`Hallo there! status: '${projectStatus}', stability: '${projectStability}'`);
        (0, readme_1.generateReadmeFileFromTemplateFile)({
            templateFile: 'README.md',
            outputFile: 'README.md.out',
            projectStatus: projectStatus,
            projectStability: projectStability,
        });
    }
    catch (error) {
        if (error instanceof Error)
            core.setFailed(error.message);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FBK0M7QUFDL0MsK0JBQStCO0FBRS9CLHdDQUF3QztBQUN4QyxTQUFTLEdBQUc7SUFDVixJQUFJO1FBQ0Ysb0RBQW9EO1FBQ3BELDJIQUEySDtRQUMzSCxFQUFFO1FBQ0YseUNBQXlDO1FBQ3pDLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsRUFBRTtRQUNGLHFEQUFxRDtRQUNyRCxNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFxQixFQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDekUsQ0FBQztRQUNGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQ1AseUJBQXlCLGFBQWEsa0JBQWtCLGdCQUFnQixHQUFHLENBQzVFLENBQUM7UUFDRixJQUFBLDJDQUFrQyxFQUFDO1lBQ2pDLFlBQVksRUFBRSxXQUFXO1lBQ3pCLFVBQVUsRUFBRSxlQUFlO1lBQzNCLGFBQWEsRUFBRSxhQUFhO1lBQzVCLGdCQUFnQixFQUFFLGdCQUFnQjtTQUNuQyxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxLQUFLLFlBQVksS0FBSztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0gsQ0FBQztBQUVELEdBQUcsRUFBRSxDQUFDO0FBQ04sZ0JBQWdCO0FBQ2hCLDhCQUE4QjtBQUM5QixLQUFLO0FBQ0wsZ0JBQWdCO0FBQ2hCLDJFQUEyRTtBQUMzRSxhQUFhO0FBQ2IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvcmUgZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5pbXBvcnQge2dlbmVyYXRlUmVhZG1lRmlsZUZyb21UZW1wbGF0ZUZpbGV9IGZyb20gJy4vcmVhZG1lJztcbmltcG9ydCB7dmFsaWRhdGVQcm9qZWN0U3RhdHVzfSBmcm9tICcuL2lucHV0cyc7XG4vLyBpbXBvcnQge3dhaXR9IGZyb20gJy4vd2FpdCc7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHJ1bigpOiBQcm9taXNlPHZvaWQ+IHtcbmZ1bmN0aW9uIHJ1bigpOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCBtczogc3RyaW5nID0gY29yZS5nZXRJbnB1dCgnbWlsbGlzZWNvbmRzJyk7XG4gICAgLy8gY29yZS5kZWJ1ZyhgV2FpdGluZyAke21zfSBtaWxsaXNlY29uZHMgLi4uYCk7IC8vIGRlYnVnIGlzIG9ubHkgb3V0cHV0IGlmIHlvdSBzZXQgdGhlIHNlY3JldCBgQUNUSU9OU19TVEVQX0RFQlVHYCB0byB0cnVlXG4gICAgLy9cbiAgICAvLyBjb3JlLmRlYnVnKG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkpO1xuICAgIC8vIGF3YWl0IHdhaXQocGFyc2VJbnQobXMsIDEwKSk7XG4gICAgLy8gY29yZS5kZWJ1ZyhuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpKTtcbiAgICAvL1xuICAgIC8vIGNvcmUuc2V0T3V0cHV0KCd0aW1lJywgbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKSk7XG4gICAgY29uc3QgcHJvamVjdFN0YXR1cyA9IHZhbGlkYXRlUHJvamVjdFN0YXR1cyhcbiAgICAgIGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhdHVzeScsIHtyZXF1aXJlZDogdHJ1ZSwgdHJpbVdoaXRlc3BhY2U6IHRydWV9KVxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdFN0YWJpbGl0eSA9IGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhYmlsaXR5Jyk7XG4gICAgY29yZS5pbmZvKFxuICAgICAgYEhhbGxvIHRoZXJlISBzdGF0dXM6ICcke3Byb2plY3RTdGF0dXN9Jywgc3RhYmlsaXR5OiAnJHtwcm9qZWN0U3RhYmlsaXR5fSdgXG4gICAgKTtcbiAgICBnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlKHtcbiAgICAgIHRlbXBsYXRlRmlsZTogJ1JFQURNRS5tZCcsXG4gICAgICBvdXRwdXRGaWxlOiAnUkVBRE1FLm1kLm91dCcsXG4gICAgICBwcm9qZWN0U3RhdHVzOiBwcm9qZWN0U3RhdHVzLFxuICAgICAgcHJvamVjdFN0YWJpbGl0eTogcHJvamVjdFN0YWJpbGl0eSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgY29yZS5zZXRGYWlsZWQoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxucnVuKCk7XG4vLyAudGhlbigoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCdzdWNjZXNzISEnKTtcbi8vIH0pXG4vLyAuY2F0Y2goZSA9PiB7XG4vLyAgIGNvbnNvbGUuZXJyb3IoJ1VuY2F1Z2h0IGV4Y2VwdGlvbiB3aGlsZSBydW5uaW5nIHJlYWRtZSBnZW5lcmF0b3InLCBlKTtcbi8vICAgdGhyb3cgZTtcbi8vIH0pO1xuIl19