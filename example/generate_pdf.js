
import { generatePDF } from "../src/pdf/get_pdf.js";


let url = 'https://www.baidu.com'
let outputFileName = 'test.pdf'

generatePDF(url, outputFileName)
    .then(() => console.log(`PDF generated: ${outputFileName}`))
    .catch(err => console.error('PDF generation failed:', err));