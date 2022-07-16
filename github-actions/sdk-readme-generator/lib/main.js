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
        const projectStatus = (0, inputs_1.validateProjectStatus)(core.getInput('project_status', { required: true, trimWhitespace: true }));
        const projectStability = core.getInput('project_stability');
        core.info(`Hallo there! status: '${projectStatus}', stability: '${projectStability}'`);
        (0, readme_1.generateReadmeFileFromTemplateFile)({
            templateFile: 'README.md.template',
            outputFile: 'README.md',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FBK0M7QUFDL0MsK0JBQStCO0FBRS9CLHdDQUF3QztBQUN4QyxTQUFTLEdBQUc7SUFDVixJQUFJO1FBQ0Ysb0RBQW9EO1FBQ3BELDJIQUEySDtRQUMzSCxFQUFFO1FBQ0YseUNBQXlDO1FBQ3pDLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsRUFBRTtRQUNGLHFEQUFxRDtRQUNyRCxNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFxQixFQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDeEUsQ0FBQztRQUNGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQ1AseUJBQXlCLGFBQWEsa0JBQWtCLGdCQUFnQixHQUFHLENBQzVFLENBQUM7UUFDRixJQUFBLDJDQUFrQyxFQUFDO1lBQ2pDLFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsVUFBVSxFQUFFLFdBQVc7WUFDdkIsYUFBYSxFQUFFLGFBQWE7WUFDNUIsZ0JBQWdCLEVBQUUsZ0JBQWdCO1NBQ25DLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxJQUFJLEtBQUssWUFBWSxLQUFLO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDM0Q7QUFDSCxDQUFDO0FBRUQsR0FBRyxFQUFFLENBQUM7QUFDTixnQkFBZ0I7QUFDaEIsOEJBQThCO0FBQzlCLEtBQUs7QUFDTCxnQkFBZ0I7QUFDaEIsMkVBQTJFO0FBQzNFLGFBQWE7QUFDYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29yZSBmcm9tICdAYWN0aW9ucy9jb3JlJztcbmltcG9ydCB7Z2VuZXJhdGVSZWFkbWVGaWxlRnJvbVRlbXBsYXRlRmlsZX0gZnJvbSAnLi9yZWFkbWUnO1xuaW1wb3J0IHt2YWxpZGF0ZVByb2plY3RTdGF0dXN9IGZyb20gJy4vaW5wdXRzJztcbi8vIGltcG9ydCB7d2FpdH0gZnJvbSAnLi93YWl0JztcblxuLy8gYXN5bmMgZnVuY3Rpb24gcnVuKCk6IFByb21pc2U8dm9pZD4ge1xuZnVuY3Rpb24gcnVuKCk6IHZvaWQge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IG1zOiBzdHJpbmcgPSBjb3JlLmdldElucHV0KCdtaWxsaXNlY29uZHMnKTtcbiAgICAvLyBjb3JlLmRlYnVnKGBXYWl0aW5nICR7bXN9IG1pbGxpc2Vjb25kcyAuLi5gKTsgLy8gZGVidWcgaXMgb25seSBvdXRwdXQgaWYgeW91IHNldCB0aGUgc2VjcmV0IGBBQ1RJT05TX1NURVBfREVCVUdgIHRvIHRydWVcbiAgICAvL1xuICAgIC8vIGNvcmUuZGVidWcobmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKSk7XG4gICAgLy8gYXdhaXQgd2FpdChwYXJzZUludChtcywgMTApKTtcbiAgICAvLyBjb3JlLmRlYnVnKG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkpO1xuICAgIC8vXG4gICAgLy8gY29yZS5zZXRPdXRwdXQoJ3RpbWUnLCBuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpKTtcbiAgICBjb25zdCBwcm9qZWN0U3RhdHVzID0gdmFsaWRhdGVQcm9qZWN0U3RhdHVzKFxuICAgICAgY29yZS5nZXRJbnB1dCgncHJvamVjdF9zdGF0dXMnLCB7cmVxdWlyZWQ6IHRydWUsIHRyaW1XaGl0ZXNwYWNlOiB0cnVlfSlcbiAgICApO1xuICAgIGNvbnN0IHByb2plY3RTdGFiaWxpdHkgPSBjb3JlLmdldElucHV0KCdwcm9qZWN0X3N0YWJpbGl0eScpO1xuICAgIGNvcmUuaW5mbyhcbiAgICAgIGBIYWxsbyB0aGVyZSEgc3RhdHVzOiAnJHtwcm9qZWN0U3RhdHVzfScsIHN0YWJpbGl0eTogJyR7cHJvamVjdFN0YWJpbGl0eX0nYFxuICAgICk7XG4gICAgZ2VuZXJhdGVSZWFkbWVGaWxlRnJvbVRlbXBsYXRlRmlsZSh7XG4gICAgICB0ZW1wbGF0ZUZpbGU6ICdSRUFETUUubWQudGVtcGxhdGUnLFxuICAgICAgb3V0cHV0RmlsZTogJ1JFQURNRS5tZCcsXG4gICAgICBwcm9qZWN0U3RhdHVzOiBwcm9qZWN0U3RhdHVzLFxuICAgICAgcHJvamVjdFN0YWJpbGl0eTogcHJvamVjdFN0YWJpbGl0eSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgY29yZS5zZXRGYWlsZWQoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxucnVuKCk7XG4vLyAudGhlbigoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKCdzdWNjZXNzISEnKTtcbi8vIH0pXG4vLyAuY2F0Y2goZSA9PiB7XG4vLyAgIGNvbnNvbGUuZXJyb3IoJ1VuY2F1Z2h0IGV4Y2VwdGlvbiB3aGlsZSBydW5uaW5nIHJlYWRtZSBnZW5lcmF0b3InLCBlKTtcbi8vICAgdGhyb3cgZTtcbi8vIH0pO1xuIl19