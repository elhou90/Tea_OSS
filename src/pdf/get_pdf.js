import puppeteer from 'puppeteer'

async function generatePDF(url, outputFileName) {

    if (!url) {
        console.error('Usage: node script.js <URL> [<outputFileName>]');
        process.exit(1);
    }

    if (!outputFileName) {
        outputFileName = 'default.pdf'
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.pdf({ path: outputFileName, format: 'A4' });

    await browser.close();
}


export {
    generatePDF
}

