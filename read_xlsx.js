import XLSX from 'xlsx';

try {
    const workbook = XLSX.readFile('Eng edit 鸟类MBTI_0203中英版.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    console.log(JSON.stringify(data, null, 2));
} catch (e) {
    console.error("Error reading file:", e);
}
