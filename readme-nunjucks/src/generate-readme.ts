import * as nunjucks from 'nunjucks';
import * as path from 'path';

function main() {
  console.log('hi');
  // nunjucks.configure({autoescape: true});
  // const output = nunjucks.renderString('Hello {{ username }}', {
  //   username: 'Chris',
  // });
  // console.log(output);

  console.log(`PATH: ${path.join(__dirname, 'templates')}`);

  nunjucks.configure(
    path.join(__dirname, 'templates'),
    // 'src/templates',
    {autoescape: true, throwOnUndefined: true}
  );
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
