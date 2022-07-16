"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReadmeStringFromTemplateString = exports.generateReadmeFileFromTemplateFile = void 0;
const nunjucks = require("nunjucks");
const fs = require("fs");
const markdownlint = require("markdownlint");
function generateReadmeFileFromTemplateFile(options) {
    const templateContents = fs.readFileSync(options.templateFile).toString();
    const outputContents = generateReadmeStringFromTemplateString({
        templateContents: templateContents,
        projectStatus: options.projectStatus,
        projectStability: options.projectStability,
    });
    fs.writeFileSync(options.outputFile, outputContents);
}
exports.generateReadmeFileFromTemplateFile = generateReadmeFileFromTemplateFile;
function generateReadmeStringFromTemplateString(options) {
    // markdownlint.
    const customMarkdownLintRule = {
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
    const markdownLintOptions = {
        config: {
            default: true,
        },
        customRules: [customMarkdownLintRule],
        strings: { README_template: options.templateContents },
    };
    const lintResults = markdownlint.sync(markdownLintOptions);
    console.log(`LINT RESULTS: ${JSON.stringify(lintResults, null, 2)}`);
    nunjucks.configure({ autoescape: true });
    const templateContext = {
        projectStatus: options.projectStatus,
        projectStability: options.projectStability,
    };
    return nunjucks.renderString(options.templateContents, templateContext);
}
exports.generateReadmeStringFromTemplateString = generateReadmeStringFromTemplateString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZG1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JlYWRtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMseUJBQXlCO0FBQ3pCLDZDQUE2QztBQVc3QyxTQUFnQixrQ0FBa0MsQ0FDaEQsT0FBbUM7SUFFbkMsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxRSxNQUFNLGNBQWMsR0FBRyxzQ0FBc0MsQ0FBQztRQUM1RCxnQkFBZ0IsRUFBRSxnQkFBZ0I7UUFDbEMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhO1FBQ3BDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0I7S0FDM0MsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFWRCxnRkFVQztBQWFELFNBQWdCLHNDQUFzQyxDQUNwRCxPQUFxQztJQUVyQyxnQkFBZ0I7SUFDaEIsTUFBTSxzQkFBc0IsR0FBc0I7UUFDaEQsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDOUIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekQ7UUFDSCxDQUFDO0tBQ0YsQ0FBQztJQUNGLE1BQU0sbUJBQW1CLEdBQXdCO1FBQy9DLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7UUFDRCxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNyQyxPQUFPLEVBQUUsRUFBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixFQUFDO0tBQ3JELENBQUM7SUFDRixNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVyRSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDdkMsTUFBTSxlQUFlLEdBQW9CO1FBQ3ZDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYTtRQUNwQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCO0tBQzNDLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUEvQkQsd0ZBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbnVuanVja3MgZnJvbSAnbnVuanVja3MnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgbWFya2Rvd25saW50IGZyb20gJ21hcmtkb3dubGludCc7XG5pbXBvcnQge09wdGlvbnMgYXMgTWFya2Rvd25MaW50T3B0aW9uc30gZnJvbSAnbWFya2Rvd25saW50JztcbmltcG9ydCB7UHJvamVjdFN0YXR1c30gZnJvbSAnLi9pbnB1dHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRtZUZpbGVHZW5lcmF0b3JPcHRpb25zIHtcbiAgdGVtcGxhdGVGaWxlOiBzdHJpbmc7XG4gIG91dHB1dEZpbGU6IHN0cmluZztcbiAgcHJvamVjdFN0YXR1czogUHJvamVjdFN0YXR1cztcbiAgcHJvamVjdFN0YWJpbGl0eTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZWFkbWVGaWxlRnJvbVRlbXBsYXRlRmlsZShcbiAgb3B0aW9uczogUmVhZG1lRmlsZUdlbmVyYXRvck9wdGlvbnNcbik6IHZvaWQge1xuICBjb25zdCB0ZW1wbGF0ZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKG9wdGlvbnMudGVtcGxhdGVGaWxlKS50b1N0cmluZygpO1xuICBjb25zdCBvdXRwdXRDb250ZW50cyA9IGdlbmVyYXRlUmVhZG1lU3RyaW5nRnJvbVRlbXBsYXRlU3RyaW5nKHtcbiAgICB0ZW1wbGF0ZUNvbnRlbnRzOiB0ZW1wbGF0ZUNvbnRlbnRzLFxuICAgIHByb2plY3RTdGF0dXM6IG9wdGlvbnMucHJvamVjdFN0YXR1cyxcbiAgICBwcm9qZWN0U3RhYmlsaXR5OiBvcHRpb25zLnByb2plY3RTdGFiaWxpdHksXG4gIH0pO1xuICBmcy53cml0ZUZpbGVTeW5jKG9wdGlvbnMub3V0cHV0RmlsZSwgb3V0cHV0Q29udGVudHMpO1xufVxuXG5pbnRlcmZhY2UgUmVhZG1lU3RyaW5nR2VuZXJhdG9yT3B0aW9ucyB7XG4gIHRlbXBsYXRlQ29udGVudHM6IHN0cmluZztcbiAgcHJvamVjdFN0YXR1czogc3RyaW5nO1xuICBwcm9qZWN0U3RhYmlsaXR5OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZW1wbGF0ZUNvbnRleHQge1xuICBwcm9qZWN0U3RhdHVzOiBzdHJpbmc7XG4gIHByb2plY3RTdGFiaWxpdHk6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmVhZG1lU3RyaW5nRnJvbVRlbXBsYXRlU3RyaW5nKFxuICBvcHRpb25zOiBSZWFkbWVTdHJpbmdHZW5lcmF0b3JPcHRpb25zXG4pOiBzdHJpbmcge1xuICAvLyBtYXJrZG93bmxpbnQuXG4gIGNvbnN0IGN1c3RvbU1hcmtkb3duTGludFJ1bGU6IG1hcmtkb3dubGludC5SdWxlID0ge1xuICAgIG5hbWVzOiBbJ2F3ZXNvbWUtY3VzdG9tLXJ1bGUnXSxcbiAgICBkZXNjcmlwdGlvbjogJ2NvbnRlbnQgbXVzdCBiZSBhd2Vzb21lJyxcbiAgICB0YWdzOiBbJ21vbWVudG8tb3NzJ10sXG4gICAgZnVuY3Rpb246IChwYXJhbXMsIG9uRXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBJTiBDVVNUT00gTUFSS0RPV05MSU5UIFJVTEU7IHBhcmFtcy5uYW1lOiAke3BhcmFtcy5uYW1lfWApO1xuICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBwYXJhbXMudG9rZW5zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBNQVJLRE9XTiBUT0tFTjogJHtKU09OLnN0cmluZ2lmeSh0b2tlbil9YCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgY29uc3QgbWFya2Rvd25MaW50T3B0aW9uczogTWFya2Rvd25MaW50T3B0aW9ucyA9IHtcbiAgICBjb25maWc6IHtcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBjdXN0b21SdWxlczogW2N1c3RvbU1hcmtkb3duTGludFJ1bGVdLFxuICAgIHN0cmluZ3M6IHtSRUFETUVfdGVtcGxhdGU6IG9wdGlvbnMudGVtcGxhdGVDb250ZW50c30sXG4gIH07XG4gIGNvbnN0IGxpbnRSZXN1bHRzID0gbWFya2Rvd25saW50LnN5bmMobWFya2Rvd25MaW50T3B0aW9ucyk7XG4gIGNvbnNvbGUubG9nKGBMSU5UIFJFU1VMVFM6ICR7SlNPTi5zdHJpbmdpZnkobGludFJlc3VsdHMsIG51bGwsIDIpfWApO1xuXG4gIG51bmp1Y2tzLmNvbmZpZ3VyZSh7YXV0b2VzY2FwZTogdHJ1ZX0pO1xuICBjb25zdCB0ZW1wbGF0ZUNvbnRleHQ6IFRlbXBsYXRlQ29udGV4dCA9IHtcbiAgICBwcm9qZWN0U3RhdHVzOiBvcHRpb25zLnByb2plY3RTdGF0dXMsXG4gICAgcHJvamVjdFN0YWJpbGl0eTogb3B0aW9ucy5wcm9qZWN0U3RhYmlsaXR5LFxuICB9O1xuICByZXR1cm4gbnVuanVja3MucmVuZGVyU3RyaW5nKG9wdGlvbnMudGVtcGxhdGVDb250ZW50cywgdGVtcGxhdGVDb250ZXh0KTtcbn1cbiJdfQ==