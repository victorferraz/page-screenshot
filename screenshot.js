const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

class ScreenShot {
  constructor(params){
    this.config = params;
    this.successItems = [];
  }

  async run(){
    const browser = await puppeteer.launch().then();
    this.page = await browser.newPage();
    try {
      await this.page.goto(this.config.url);
      await this.loopItem();
      await browser.close();
    } catch (e) {
      throw new Error(e);
    }
    return this.successItems;
  }

  async loopItem () {
    for (var index = 0; index < this.config.sizes.length; index++) {
      await this.print(this.config.sizes[index]);
    }
  }

  async print(item){
    const imageObj = {
      path: `${this.config.path}/${item.width}x${item.height}.jpeg`,
      quality: 40,
      type: this.config.typeImage,
      fullPage: true
    };
    try {
      if (item.width <= 800){
        await this.page.emulate(devices['iPhone 6']);
      }
      await this.page.setViewport({width: item.width, height: item.height});
      await this.page.screenshot(imageObj);
    } catch(e) {
      throw new Error(e);
    }
    this.insertSuccessItem(imageObj);
  }

  insertSuccessItem(item) {
    this.successItems.push(item);
  }
}

module.exports = ScreenShot;
