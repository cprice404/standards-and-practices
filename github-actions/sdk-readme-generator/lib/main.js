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
        const projectStability = (0, inputs_1.validateProjectStability)(core.getInput('project_stability', { required: true, trimWhitespace: true }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FBeUU7QUFDekUsK0JBQStCO0FBRS9CLHdDQUF3QztBQUN4QyxTQUFTLEdBQUc7SUFDVixJQUFJO1FBQ0Ysb0RBQW9EO1FBQ3BELDJIQUEySDtRQUMzSCxFQUFFO1FBQ0YseUNBQXlDO1FBQ3pDLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsRUFBRTtRQUNGLHFEQUFxRDtRQUNyRCxNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFxQixFQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDeEUsQ0FBQztRQUNGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSxpQ0FBd0IsRUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDLENBQzNFLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUNQLHlCQUF5QixhQUFhLGtCQUFrQixnQkFBZ0IsR0FBRyxDQUM1RSxDQUFDO1FBQ0YsSUFBQSwyQ0FBa0MsRUFBQztZQUNqQyxZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLGFBQWEsRUFBRSxhQUFhO1lBQzVCLGdCQUFnQixFQUFFLGdCQUFnQjtTQUNuQyxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxLQUFLLFlBQVksS0FBSztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0gsQ0FBQztBQUVELEdBQUcsRUFBRSxDQUFDO0FBQ04sZ0JBQWdCO0FBQ2hCLDhCQUE4QjtBQUM5QixLQUFLO0FBQ0wsZ0JBQWdCO0FBQ2hCLDJFQUEyRTtBQUMzRSxhQUFhO0FBQ2IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvcmUgZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5pbXBvcnQge2dlbmVyYXRlUmVhZG1lRmlsZUZyb21UZW1wbGF0ZUZpbGV9IGZyb20gJy4vcmVhZG1lJztcbmltcG9ydCB7dmFsaWRhdGVQcm9qZWN0U3RhYmlsaXR5LCB2YWxpZGF0ZVByb2plY3RTdGF0dXN9IGZyb20gJy4vaW5wdXRzJztcbi8vIGltcG9ydCB7d2FpdH0gZnJvbSAnLi93YWl0JztcblxuLy8gYXN5bmMgZnVuY3Rpb24gcnVuKCk6IFByb21pc2U8dm9pZD4ge1xuZnVuY3Rpb24gcnVuKCk6IHZvaWQge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IG1zOiBzdHJpbmcgPSBjb3JlLmdldElucHV0KCdtaWxsaXNlY29uZHMnKTtcbiAgICAvLyBjb3JlLmRlYnVnKGBXYWl0aW5nICR7bXN9IG1pbGxpc2Vjb25kcyAuLi5gKTsgLy8gZGVidWcgaXMgb25seSBvdXRwdXQgaWYgeW91IHNldCB0aGUgc2VjcmV0IGBBQ1RJT05TX1NURVBfREVCVUdgIHRvIHRydWVcbiAgICAvL1xuICAgIC8vIGNvcmUuZGVidWcobmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKSk7XG4gICAgLy8gYXdhaXQgd2FpdChwYXJzZUludChtcywgMTApKTtcbiAgICAvLyBjb3JlLmRlYnVnKG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkpO1xuICAgIC8vXG4gICAgLy8gY29yZS5zZXRPdXRwdXQoJ3RpbWUnLCBuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpKTtcbiAgICBjb25zdCBwcm9qZWN0U3RhdHVzID0gdmFsaWRhdGVQcm9qZWN0U3RhdHVzKFxuICAgICAgY29yZS5nZXRJbnB1dCgncHJvamVjdF9zdGF0dXMnLCB7cmVxdWlyZWQ6IHRydWUsIHRyaW1XaGl0ZXNwYWNlOiB0cnVlfSlcbiAgICApO1xuICAgIGNvbnN0IHByb2plY3RTdGFiaWxpdHkgPSB2YWxpZGF0ZVByb2plY3RTdGFiaWxpdHkoXG4gICAgICBjb3JlLmdldElucHV0KCdwcm9qZWN0X3N0YWJpbGl0eScsIHtyZXF1aXJlZDogdHJ1ZSwgdHJpbVdoaXRlc3BhY2U6IHRydWV9KVxuICAgICk7XG4gICAgY29yZS5pbmZvKFxuICAgICAgYEhhbGxvIHRoZXJlISBzdGF0dXM6ICcke3Byb2plY3RTdGF0dXN9Jywgc3RhYmlsaXR5OiAnJHtwcm9qZWN0U3RhYmlsaXR5fSdgXG4gICAgKTtcbiAgICBnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlKHtcbiAgICAgIHRlbXBsYXRlRmlsZTogJ1JFQURNRS5tZC50ZW1wbGF0ZScsXG4gICAgICBvdXRwdXRGaWxlOiAnUkVBRE1FLm1kJyxcbiAgICAgIHByb2plY3RTdGF0dXM6IHByb2plY3RTdGF0dXMsXG4gICAgICBwcm9qZWN0U3RhYmlsaXR5OiBwcm9qZWN0U3RhYmlsaXR5LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSBjb3JlLnNldEZhaWxlZChlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5ydW4oKTtcbi8vIC50aGVuKCgpID0+IHtcbi8vICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MhIScpO1xuLy8gfSlcbi8vIC5jYXRjaChlID0+IHtcbi8vICAgY29uc29sZS5lcnJvcignVW5jYXVnaHQgZXhjZXB0aW9uIHdoaWxlIHJ1bm5pbmcgcmVhZG1lIGdlbmVyYXRvcicsIGUpO1xuLy8gICB0aHJvdyBlO1xuLy8gfSk7XG4iXX0=