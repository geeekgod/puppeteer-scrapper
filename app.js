const puppeteer = require('puppeteer');
const fs = require("fs")

const fetchSite = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://rishabhsingh-dev.me/');
    setTimeout(async () => {
        await page.click('button.primaryBtn');
        setTimeout(async () => {
            await page.screenshot({ path: 'example.png', fullPage: true});
            await browser.close();
            console.log("Done")
        }, 2000)
    }, 1000)
}

fetchSite()

