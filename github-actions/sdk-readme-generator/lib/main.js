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
        const projectStatus = (0, inputs_1.validateProjectStatus)(core.getInput('project_statusy'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FBK0M7QUFDL0MsK0JBQStCO0FBRS9CLHdDQUF3QztBQUN4QyxTQUFTLEdBQUc7SUFDVixJQUFJO1FBQ0Ysb0RBQW9EO1FBQ3BELDJIQUEySDtRQUMzSCxFQUFFO1FBQ0YseUNBQXlDO1FBQ3pDLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsRUFBRTtRQUNGLHFEQUFxRDtRQUNyRCxNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFxQixFQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQ2pDLENBQUM7UUFDRixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUNQLHlCQUF5QixhQUFhLGtCQUFrQixnQkFBZ0IsR0FBRyxDQUM1RSxDQUFDO1FBQ0YsSUFBQSwyQ0FBa0MsRUFBQztZQUNqQyxZQUFZLEVBQUUsV0FBVztZQUN6QixVQUFVLEVBQUUsZUFBZTtZQUMzQixhQUFhLEVBQUUsYUFBYTtZQUM1QixnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDbkMsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksS0FBSyxZQUFZLEtBQUs7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzRDtBQUNILENBQUM7QUFFRCxHQUFHLEVBQUUsQ0FBQztBQUNOLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsS0FBSztBQUNMLGdCQUFnQjtBQUNoQiwyRUFBMkU7QUFDM0UsYUFBYTtBQUNiLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb3JlIGZyb20gJ0BhY3Rpb25zL2NvcmUnO1xuaW1wb3J0IHtnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlfSBmcm9tICcuL3JlYWRtZSc7XG5pbXBvcnQge3ZhbGlkYXRlUHJvamVjdFN0YXR1c30gZnJvbSAnLi9pbnB1dHMnO1xuLy8gaW1wb3J0IHt3YWl0fSBmcm9tICcuL3dhaXQnO1xuXG4vLyBhc3luYyBmdW5jdGlvbiBydW4oKTogUHJvbWlzZTx2b2lkPiB7XG5mdW5jdGlvbiBydW4oKTogdm9pZCB7XG4gIHRyeSB7XG4gICAgLy8gY29uc3QgbXM6IHN0cmluZyA9IGNvcmUuZ2V0SW5wdXQoJ21pbGxpc2Vjb25kcycpO1xuICAgIC8vIGNvcmUuZGVidWcoYFdhaXRpbmcgJHttc30gbWlsbGlzZWNvbmRzIC4uLmApOyAvLyBkZWJ1ZyBpcyBvbmx5IG91dHB1dCBpZiB5b3Ugc2V0IHRoZSBzZWNyZXQgYEFDVElPTlNfU1RFUF9ERUJVR2AgdG8gdHJ1ZVxuICAgIC8vXG4gICAgLy8gY29yZS5kZWJ1ZyhuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpKTtcbiAgICAvLyBhd2FpdCB3YWl0KHBhcnNlSW50KG1zLCAxMCkpO1xuICAgIC8vIGNvcmUuZGVidWcobmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKSk7XG4gICAgLy9cbiAgICAvLyBjb3JlLnNldE91dHB1dCgndGltZScsIG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkpO1xuICAgIGNvbnN0IHByb2plY3RTdGF0dXMgPSB2YWxpZGF0ZVByb2plY3RTdGF0dXMoXG4gICAgICBjb3JlLmdldElucHV0KCdwcm9qZWN0X3N0YXR1c3knKVxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdFN0YWJpbGl0eSA9IGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhYmlsaXR5Jyk7XG4gICAgY29yZS5pbmZvKFxuICAgICAgYEhhbGxvIHRoZXJlISBzdGF0dXM6ICcke3Byb2plY3RTdGF0dXN9Jywgc3RhYmlsaXR5OiAnJHtwcm9qZWN0U3RhYmlsaXR5fSdgXG4gICAgKTtcbiAgICBnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlKHtcbiAgICAgIHRlbXBsYXRlRmlsZTogJ1JFQURNRS5tZCcsXG4gICAgICBvdXRwdXRGaWxlOiAnUkVBRE1FLm1kLm91dCcsXG4gICAgICBwcm9qZWN0U3RhdHVzOiBwcm9qZWN0U3RhdHVzLFxuICAgICAgcHJvamVjdFN0YWJpbGl0eTogcHJvamVjdFN0YWJpbGl0eSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgY29yZS5zZXRGYWlsZWQoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxucnVuKCk7XG4vLyAudGhlbigoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCdzdWNjZXNzISEnKTtcbi8vIH0pXG4vLyAuY2F0Y2goZSA9PiB7XG4vLyAgIGNvbnNvbGUuZXJyb3IoJ1VuY2F1Z2h0IGV4Y2VwdGlvbiB3aGlsZSBydW5uaW5nIHJlYWRtZSBnZW5lcmF0b3InLCBlKTtcbi8vICAgdGhyb3cgZTtcbi8vIH0pO1xuIl19