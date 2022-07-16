"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const readme_1 = require("./readme");
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
        const projectStatus = core.getInput('project_status');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCwrQkFBK0I7QUFFL0Isd0NBQXdDO0FBQ3hDLFNBQVMsR0FBRztJQUNWLElBQUk7UUFDRixvREFBb0Q7UUFDcEQsMkhBQTJIO1FBQzNILEVBQUU7UUFDRix5Q0FBeUM7UUFDekMsZ0NBQWdDO1FBQ2hDLHlDQUF5QztRQUN6QyxFQUFFO1FBQ0YscURBQXFEO1FBQ3JELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUNQLHlCQUF5QixhQUFhLGtCQUFrQixnQkFBZ0IsR0FBRyxDQUM1RSxDQUFDO1FBQ0YsSUFBQSwyQ0FBa0MsRUFBQztZQUNqQyxZQUFZLEVBQUUsV0FBVztZQUN6QixVQUFVLEVBQUUsZUFBZTtZQUMzQixhQUFhLEVBQUUsYUFBYTtZQUM1QixnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDbkMsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksS0FBSyxZQUFZLEtBQUs7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzRDtBQUNILENBQUM7QUFFRCxHQUFHLEVBQUUsQ0FBQztBQUNOLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsS0FBSztBQUNMLGdCQUFnQjtBQUNoQiwyRUFBMkU7QUFDM0UsYUFBYTtBQUNiLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb3JlIGZyb20gJ0BhY3Rpb25zL2NvcmUnO1xuaW1wb3J0IHtnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlfSBmcm9tICcuL3JlYWRtZSc7XG4vLyBpbXBvcnQge3dhaXR9IGZyb20gJy4vd2FpdCc7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHJ1bigpOiBQcm9taXNlPHZvaWQ+IHtcbmZ1bmN0aW9uIHJ1bigpOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCBtczogc3RyaW5nID0gY29yZS5nZXRJbnB1dCgnbWlsbGlzZWNvbmRzJyk7XG4gICAgLy8gY29yZS5kZWJ1ZyhgV2FpdGluZyAke21zfSBtaWxsaXNlY29uZHMgLi4uYCk7IC8vIGRlYnVnIGlzIG9ubHkgb3V0cHV0IGlmIHlvdSBzZXQgdGhlIHNlY3JldCBgQUNUSU9OU19TVEVQX0RFQlVHYCB0byB0cnVlXG4gICAgLy9cbiAgICAvLyBjb3JlLmRlYnVnKG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkpO1xuICAgIC8vIGF3YWl0IHdhaXQocGFyc2VJbnQobXMsIDEwKSk7XG4gICAgLy8gY29yZS5kZWJ1ZyhuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpKTtcbiAgICAvL1xuICAgIC8vIGNvcmUuc2V0T3V0cHV0KCd0aW1lJywgbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKSk7XG4gICAgY29uc3QgcHJvamVjdFN0YXR1cyA9IGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhdHVzJyk7XG4gICAgY29uc3QgcHJvamVjdFN0YWJpbGl0eSA9IGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhYmlsaXR5Jyk7XG4gICAgY29yZS5pbmZvKFxuICAgICAgYEhhbGxvIHRoZXJlISBzdGF0dXM6ICcke3Byb2plY3RTdGF0dXN9Jywgc3RhYmlsaXR5OiAnJHtwcm9qZWN0U3RhYmlsaXR5fSdgXG4gICAgKTtcbiAgICBnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlKHtcbiAgICAgIHRlbXBsYXRlRmlsZTogJ1JFQURNRS5tZCcsXG4gICAgICBvdXRwdXRGaWxlOiAnUkVBRE1FLm1kLm91dCcsXG4gICAgICBwcm9qZWN0U3RhdHVzOiBwcm9qZWN0U3RhdHVzLFxuICAgICAgcHJvamVjdFN0YWJpbGl0eTogcHJvamVjdFN0YWJpbGl0eSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgY29yZS5zZXRGYWlsZWQoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxucnVuKCk7XG4vLyAudGhlbigoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCdzdWNjZXNzISEnKTtcbi8vIH0pXG4vLyAuY2F0Y2goZSA9PiB7XG4vLyAgIGNvbnNvbGUuZXJyb3IoJ1VuY2F1Z2h0IGV4Y2VwdGlvbiB3aGlsZSBydW5uaW5nIHJlYWRtZSBnZW5lcmF0b3InLCBlKTtcbi8vICAgdGhyb3cgZTtcbi8vIH0pO1xuIl19