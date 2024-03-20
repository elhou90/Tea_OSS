
import puppeteer from 'puppeteer';

async function generateScreenshot(url, outputFileName) {

    if (!url) {
        console.error('Usage: node script.js <URL> [<outputFileName>]');
        process.exit(1);
    }

    if (!outputFileName){
        outputFileName = 'default.png'
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: outputFileName });

    await browser.close();
}


export {
    generateScreenshot
}


