# page-screenshot

It uses [puppeteer](https://github.com/GoogleChrome/puppeteer) to take screenshot

## How to run

```
git clone git@github.com:victorferraz/page-screenshot.git
npm install

const TakePrint = require('./screenshot');
const array = [
  {width: 1024, height: 768},
  {width: 800, height: 600},
  {width: 1440, height: 900},
  {width: 320, height: 600},
];
const data = {path: 'tmp', sizes: array, url: 'http://www.bbc.com/'};
new TakePrint(data).run();

```
