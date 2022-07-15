"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks = require("nunjucks");
const path = require("path");
function main() {
    console.log('hi');
    // nunjucks.configure({autoescape: true});
    // const output = nunjucks.renderString('Hello {{ username }}', {
    //   username: 'Chris',
    // });
    // console.log(output);
    console.log(`PATH: ${path.join(__dirname, 'templates')}`);
    nunjucks.configure(path.join(__dirname, 'templates'), 
    // 'src/templates',
    { autoescape: true, throwOnUndefined: true });
    const templateFileOutput = nunjucks.render('README.md.njk', {
        bar: 'FOOFOOFOO',
    });
    console.log('TEMPLATE FILE OUTPUT:');
    console.log(templateFileOutput);
}
main();
// .then(() => {
//   console.log('success!!');
// })
// .catch(e => {
//   console.error('Uncaught exception while running readme generator', e);
//   throw e;
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUtcmVhZG1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dlbmVyYXRlLXJlYWRtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFFN0IsU0FBUyxJQUFJO0lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQiwwQ0FBMEM7SUFDMUMsaUVBQWlFO0lBQ2pFLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sdUJBQXVCO0lBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFMUQsUUFBUSxDQUFDLFNBQVMsQ0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0lBQ2pDLG1CQUFtQjtJQUNuQixFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDLENBQzNDLENBQUM7SUFDRixNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQzFELEdBQUcsRUFBRSxXQUFXO0tBQ2pCLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDO0FBQ1AsZ0JBQWdCO0FBQ2hCLDhCQUE4QjtBQUM5QixLQUFLO0FBQ0wsZ0JBQWdCO0FBQ2hCLDJFQUEyRTtBQUMzRSxhQUFhO0FBQ2IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG51bmp1Y2tzIGZyb20gJ251bmp1Y2tzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnNvbGUubG9nKCdoaScpO1xuICAvLyBudW5qdWNrcy5jb25maWd1cmUoe2F1dG9lc2NhcGU6IHRydWV9KTtcbiAgLy8gY29uc3Qgb3V0cHV0ID0gbnVuanVja3MucmVuZGVyU3RyaW5nKCdIZWxsbyB7eyB1c2VybmFtZSB9fScsIHtcbiAgLy8gICB1c2VybmFtZTogJ0NocmlzJyxcbiAgLy8gfSk7XG4gIC8vIGNvbnNvbGUubG9nKG91dHB1dCk7XG5cbiAgY29uc29sZS5sb2coYFBBVEg6ICR7cGF0aC5qb2luKF9fZGlybmFtZSwgJ3RlbXBsYXRlcycpfWApO1xuXG4gIG51bmp1Y2tzLmNvbmZpZ3VyZShcbiAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAndGVtcGxhdGVzJyksXG4gICAgLy8gJ3NyYy90ZW1wbGF0ZXMnLFxuICAgIHthdXRvZXNjYXBlOiB0cnVlLCB0aHJvd09uVW5kZWZpbmVkOiB0cnVlfVxuICApO1xuICBjb25zdCB0ZW1wbGF0ZUZpbGVPdXRwdXQgPSBudW5qdWNrcy5yZW5kZXIoJ1JFQURNRS5tZC5uamsnLCB7XG4gICAgYmFyOiAnRk9PRk9PRk9PJyxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKCdURU1QTEFURSBGSUxFIE9VVFBVVDonKTtcbiAgY29uc29sZS5sb2codGVtcGxhdGVGaWxlT3V0cHV0KTtcbn1cblxubWFpbigpO1xuLy8gLnRoZW4oKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnc3VjY2VzcyEhJyk7XG4vLyB9KVxuLy8gLmNhdGNoKGUgPT4ge1xuLy8gICBjb25zb2xlLmVycm9yKCdVbmNhdWdodCBleGNlcHRpb24gd2hpbGUgcnVubmluZyByZWFkbWUgZ2VuZXJhdG9yJywgZSk7XG4vLyAgIHRocm93IGU7XG4vLyB9KTtcbiJdfQ==