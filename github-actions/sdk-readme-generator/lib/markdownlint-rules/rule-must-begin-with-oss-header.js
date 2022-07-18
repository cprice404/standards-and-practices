"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mustBeginWithOssHeader = void 0;
const collections_1 = require("../collections");
/*
  const customMarkdownLintRule: markdownlint.Rule = {
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

 */
const ossHeaderTag = 'ossHeader';
exports.mustBeginWithOssHeader = {
    names: ['must-begin-with-oss-header'],
    description: 'Template must begin with OSS Header',
    tags: ['momento-oss'],
    information: new URL('https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator'),
    function: (params, onError) => {
        const firstThreeTokens = params.tokens.slice(0, 3);
        if (firstThreeTokens.length !== 3) {
            onError({
                lineNumber: params.tokens[0].lineNumber,
                detail: 'Template is possibly empty?',
            });
            return;
        }
        const firstThreeTokenTypes = firstThreeTokens.map(t => t.type);
        if (!(0, collections_1.arrayEquals)(['paragraph_open', 'inline', 'paragraph_close'], firstThreeTokenTypes)) {
            console.error(`First three token types: ${JSON.stringify(firstThreeTokenTypes)}`);
            onError({
                lineNumber: firstThreeTokens[0].lineNumber,
                detail: `Expected template file to begin with {{ ${ossHeaderTag} }}, on a line by itself.`,
            });
            return;
        }
        const inlineToken = firstThreeTokens[1];
        if (inlineToken.content !== `{{ ${ossHeaderTag} }}`) {
            console.error(`First template line: '${inlineToken.content}'`);
            onError({
                lineNumber: firstThreeTokens[0].lineNumber,
                detail: `Expected template file to begin with {{ ${ossHeaderTag} }}, on a line by itself.`,
            });
            return;
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1tdXN0LWJlZ2luLXdpdGgtb3NzLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bmxpbnQtcnVsZXMvcnVsZS1tdXN0LWJlZ2luLXdpdGgtb3NzLWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxnREFBMkM7QUFFM0M7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVILE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUVwQixRQUFBLHNCQUFzQixHQUFzQjtJQUN2RCxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztJQUNyQyxXQUFXLEVBQUUscUNBQXFDO0lBQ2xELElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUNyQixXQUFXLEVBQUUsSUFBSSxHQUFHLENBQ2xCLDBGQUEwRixDQUMzRjtJQUNELFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUM1QixNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsT0FBTyxDQUFDO2dCQUNOLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7Z0JBQ3ZDLE1BQU0sRUFBRSw2QkFBNkI7YUFDdEMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsTUFBTSxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0QsSUFDRSxDQUFDLElBQUEseUJBQVcsRUFDVixDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxFQUMvQyxvQkFBb0IsQ0FDckIsRUFDRDtZQUNBLE9BQU8sQ0FBQyxLQUFLLENBQ1gsNEJBQTRCLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUNuRSxDQUFDO1lBQ0YsT0FBTyxDQUFDO2dCQUNOLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO2dCQUMxQyxNQUFNLEVBQUUsMkNBQTJDLFlBQVksMkJBQTJCO2FBQzNGLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUVELE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksV0FBVyxDQUFDLE9BQU8sS0FBSyxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sQ0FBQztnQkFDTixVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtnQkFDMUMsTUFBTSxFQUFFLDJDQUEyQyxZQUFZLDJCQUEyQjthQUMzRixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7SUFDSCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1hcmtkb3dubGludCBmcm9tICdtYXJrZG93bmxpbnQnO1xuaW1wb3J0IHtSdWxlT25FcnJvckluZm99IGZyb20gJ21hcmtkb3dubGludCc7XG5pbXBvcnQge2FycmF5RXF1YWxzfSBmcm9tICcuLi9jb2xsZWN0aW9ucyc7XG5cbi8qXG4gIGNvbnN0IGN1c3RvbU1hcmtkb3duTGludFJ1bGU6IG1hcmtkb3dubGludC5SdWxlID0ge1xuICAgIG5hbWVzOiBbJ2F3ZXNvbWUtY3VzdG9tLXJ1bGUnXSxcbiAgICBkZXNjcmlwdGlvbjogJ2NvbnRlbnQgbXVzdCBiZSBhd2Vzb21lJyxcbiAgICB0YWdzOiBbJ21vbWVudG8tb3NzJ10sXG4gICAgZnVuY3Rpb246IChwYXJhbXMsIG9uRXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBJTiBDVVNUT00gTUFSS0RPV05MSU5UIFJVTEU7IHBhcmFtcy5uYW1lOiAke3BhcmFtcy5uYW1lfWApO1xuICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBwYXJhbXMudG9rZW5zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBNQVJLRE9XTiBUT0tFTjogJHtKU09OLnN0cmluZ2lmeSh0b2tlbil9YCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICovXG5cbmNvbnN0IG9zc0hlYWRlclRhZyA9ICdvc3NIZWFkZXInO1xuXG5leHBvcnQgY29uc3QgbXVzdEJlZ2luV2l0aE9zc0hlYWRlcjogbWFya2Rvd25saW50LlJ1bGUgPSB7XG4gIG5hbWVzOiBbJ211c3QtYmVnaW4td2l0aC1vc3MtaGVhZGVyJ10sXG4gIGRlc2NyaXB0aW9uOiAnVGVtcGxhdGUgbXVzdCBiZWdpbiB3aXRoIE9TUyBIZWFkZXInLFxuICB0YWdzOiBbJ21vbWVudG8tb3NzJ10sXG4gIGluZm9ybWF0aW9uOiBuZXcgVVJMKFxuICAgICdodHRwczovL2dpdGh1Yi5jb20vbW9tZW50b2hxL3N0YW5kYXJkcy1hbmQtcHJhY3RpY2VzL2dpdGh1Yi1hY3Rpb25zL29zcy1yZWFkbWUtZ2VuZXJhdG9yJ1xuICApLFxuICBmdW5jdGlvbjogKHBhcmFtcywgb25FcnJvcikgPT4ge1xuICAgIGNvbnN0IGZpcnN0VGhyZWVUb2tlbnMgPSBwYXJhbXMudG9rZW5zLnNsaWNlKDAsIDMpO1xuICAgIGlmIChmaXJzdFRocmVlVG9rZW5zLmxlbmd0aCAhPT0gMykge1xuICAgICAgb25FcnJvcih7XG4gICAgICAgIGxpbmVOdW1iZXI6IHBhcmFtcy50b2tlbnNbMF0ubGluZU51bWJlcixcbiAgICAgICAgZGV0YWlsOiAnVGVtcGxhdGUgaXMgcG9zc2libHkgZW1wdHk/JyxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaXJzdFRocmVlVG9rZW5UeXBlcyA9IGZpcnN0VGhyZWVUb2tlbnMubWFwKHQgPT4gdC50eXBlKTtcblxuICAgIGlmIChcbiAgICAgICFhcnJheUVxdWFscyhcbiAgICAgICAgWydwYXJhZ3JhcGhfb3BlbicsICdpbmxpbmUnLCAncGFyYWdyYXBoX2Nsb3NlJ10sXG4gICAgICAgIGZpcnN0VGhyZWVUb2tlblR5cGVzXG4gICAgICApXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgRmlyc3QgdGhyZWUgdG9rZW4gdHlwZXM6ICR7SlNPTi5zdHJpbmdpZnkoZmlyc3RUaHJlZVRva2VuVHlwZXMpfWBcbiAgICAgICk7XG4gICAgICBvbkVycm9yKHtcbiAgICAgICAgbGluZU51bWJlcjogZmlyc3RUaHJlZVRva2Vuc1swXS5saW5lTnVtYmVyLFxuICAgICAgICBkZXRhaWw6IGBFeHBlY3RlZCB0ZW1wbGF0ZSBmaWxlIHRvIGJlZ2luIHdpdGgge3sgJHtvc3NIZWFkZXJUYWd9IH19LCBvbiBhIGxpbmUgYnkgaXRzZWxmLmAsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbmxpbmVUb2tlbiA9IGZpcnN0VGhyZWVUb2tlbnNbMV07XG4gICAgaWYgKGlubGluZVRva2VuLmNvbnRlbnQgIT09IGB7eyAke29zc0hlYWRlclRhZ30gfX1gKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGaXJzdCB0ZW1wbGF0ZSBsaW5lOiAnJHtpbmxpbmVUb2tlbi5jb250ZW50fSdgKTtcbiAgICAgIG9uRXJyb3Ioe1xuICAgICAgICBsaW5lTnVtYmVyOiBmaXJzdFRocmVlVG9rZW5zWzBdLmxpbmVOdW1iZXIsXG4gICAgICAgIGRldGFpbDogYEV4cGVjdGVkIHRlbXBsYXRlIGZpbGUgdG8gYmVnaW4gd2l0aCB7eyAke29zc0hlYWRlclRhZ30gfX0sIG9uIGEgbGluZSBieSBpdHNlbGYuYCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=