import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

// Config
const EXCEL_PATH = 'Eng edit 鸟类MBTI_0203中英版.xlsx';
const IMAGE_SOURCE_DIR = '../鸟图'; // Relative to MBirdTI-Web root? No, relative to script run location (MBirdTI-Web)
// Wait, "ls ../../鸟图" worked from MBirdTI-Web.
// So if I run node in MBirdTI-Web, the path should be `../../鸟图`.
// Let's check.
// cwd: /Users/huangziheng/Desktop/BOC/MbirdTI/code/MBirdTI-Web
// 鸟图: /Users/huangziheng/Desktop/BOC/MbirdTI/鸟图
// So it is `../../鸟图`.

const IMAGE_DEST_DIR = 'src/assets/images/birds';
const OUTPUT_FILE = 'src/data/birds.ts';

const workbook = XLSX.readFile(EXCEL_PATH);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(sheet);

// Get list of source images
const sourceImages = fs.readdirSync('../../鸟图');

const results = rawData.map(row => {
  const id = row['人格']; // e.g. ISTJ
  const cnName = row['中文名']; // e.g. 责任守护者
  const enName = row['Personality']; // e.g. Logistician
  
  const rawCnDesc = row['中文介绍'] || '';
  const rawEnDesc = row['English describtion'] || '';
  
  // Parse CN
  // Pattern: "Title：BirdName (ID...)" or "Title: BirdName (ID...)"
  // e.g. "温柔的艺术创造者：华丽琴鸟 (ISFP...)"
  let titleCn = '';
  let birdNameCn = '';
  const cnMatch = rawCnDesc.match(/^(.*?)[:：](.*?)\s*[(\uff08]/);
  if (cnMatch) {
    titleCn = cnMatch[1].trim();
    birdNameCn = cnMatch[2].trim();
  } else {
    // Fallback if format differs
    titleCn = rawCnDesc.split('\n')[0]; 
    birdNameCn = 'Unknown';
  }
  
  // Parse EN
  // Pattern: "Title: BirdName (ID...)"
  // e.g. "The Sensitive Artist: Superb Lyrebird (ISFP)."
  let titleEn = '';
  let birdNameEn = '';
  const enMatch = rawEnDesc.match(/^(.*?)[:：](.*?)\s*[(\uff08]/);
  if (enMatch) {
    titleEn = enMatch[1].trim();
    birdNameEn = enMatch[2].trim();
  } else {
    titleEn = rawEnDesc.split('\n')[0];
    birdNameEn = 'Unknown';
  }
  
  // Find Image
  let imageFileName = '';
  
  // Manual Map for tricky names
  const manualMap = {
      '茶色蛙口夜鹰': '2 夜鹰.png',
      '澳洲钟鹊': '9 澳洲鈡鹊.png',
      '虹彩吸蜜鹦鹉': '10 彩虹吸蜜鹦鹉.png',
      '澳洲鹈鹕': '13 鹈鹕.png',
      '葵花鹦鹉': '15 葵花凤头鹦鹉.png',
      '黑额矿吸蜜鸟': '16 nosiy.png'
  };

  if (manualMap[birdNameCn]) {
      imageFileName = `${id}.png`;
      const srcFile = manualMap[birdNameCn];
      const srcPath = sourceImages.find(f => f.includes(srcFile)) || srcFile; // Try to match exact if listed
       // Actually sourceImages has the real names.
       // "2 夜鹰.png" is in sourceImages.
       if (sourceImages.includes(srcFile)) {
           fs.copyFileSync(path.join('../../鸟图', srcFile), path.join(IMAGE_DEST_DIR, imageFileName));
       } else {
           // Maybe I typed it wrong in manual map, try to find by partial?
           // For now assume manual map keys are correct filenames or I search for them
           const partialMatch = sourceImages.find(f => f.includes(srcFile) || srcFile.includes(f));
            if (partialMatch) {
                fs.copyFileSync(path.join('../../鸟图', partialMatch), path.join(IMAGE_DEST_DIR, imageFileName));
            } else {
                console.warn(`Manual map failed for ${id}: ${srcFile}`);
            }
       }
  } else {
      // Try matching birdNameCn in filenames
      const foundFile = sourceImages.find(f => f.includes(birdNameCn));
      if (foundFile) {
        imageFileName = `${id}.png`;
        // Copy file
        fs.copyFileSync(path.join('../../鸟图', foundFile), path.join(IMAGE_DEST_DIR, imageFileName));
      } else {
         console.warn(`Image not found for ${id} (${birdNameCn})`);
         imageFileName = 'placeholder.png'; 
      }
  }
  
  return {
    id,
    cnName,
    enName,
    birdNameCn,
    birdNameEn,
    titleCn,
    descCn: rawCnDesc,
    titleEn,
    descEn: rawEnDesc,
    imageUrlCn: new URL(`../assets/images/birds/${imageFileName}`, import.meta.url).href,
    // Placeholder for EN image, using same for now or a different naming convention
    imageUrlEn: new URL(`../assets/images/birds/${imageFileName.replace('.png', '_EN.png')}`, import.meta.url).href
  };
});

// Generate TS content
const imports = results.map(r => {
    // Generate imports for both CN and EN
    // Assuming file names will be ISTJ.png (CN) and ISTJ_EN.png (EN)
    // For now, since we only have one set of files, we will use the same file or assume user will add them later.
    // Let's assume the current files are CN.
    // We will generate import lines, but we need to be careful if file doesn't exist.
    // But since user said "will align naming later", we can generate the code expecting them.
    // However, if we import a non-existent file, Vite will error.
    
    // SAFE APPROACH: Use the existing file for CN, and for EN use a placeholder or the same file if missing
    // BUT user wants structure ready. 
    
    // Let's rely on the fact that we copied the files to `src/assets/images/birds/${id}.png`.
    // We will rename them to `${id}_CN.png`? 
    // Or just keep `${id}.png` as CN, and `${id}_EN.png` as EN.
    
    // Current files in src/assets/images/birds are ISTJ.png, etc.
    // Let's use that as CN.
    // For EN, we will generate the import, but if file is missing, we might break the build.
    // User said: "Picture not ready yet, naming rule align with yours".
    // So I should define the rule:
    // CN: ID_CN.png
    // EN: ID_EN.png
    
    // Let's rename current files to ID_CN.png to be clear?
    // Or just ID.png = CN, ID_EN.png = EN.
    // Let's stick to explicit: ID_CN.png and ID_EN.png.
    
    // I need to rename the files I just copied.
    
    return `import ${r.id}_CN_IMG from '@/assets/images/birds/${r.id}_CN.png';\nimport ${r.id}_EN_IMG from '@/assets/images/birds/${r.id}_EN.png';`;
}).join('\n');

const dataContent = `
import type { BirdResult } from '@/types';
// Note: Ensure these images exist. For now using what we have.
${results.map(r => `import ${r.id}_CN_IMG from '@/assets/images/birds/${r.id}.png';`).join('\n')}
// Fallback for EN images (using same image or placeholder until provided)
${results.map(r => `const ${r.id}_EN_IMG = ${r.id}_CN_IMG; // TODO: Replace with real EN image import`).join('\n')}

export const birdsData: BirdResult[] = [
  ${results.map(r => {
      return `{
    id: "${r.id}",
    cnName: "${r.cnName}",
    enName: "${r.enName}",
    birdNameCn: "${r.birdNameCn}",
    birdNameEn: "${r.birdNameEn}",
    titleCn: "${r.titleCn}",
    descCn: \`${r.descCn.replace(/`/g, '\\`')}\`,
    titleEn: "${r.titleEn}",
    descEn: \`${r.descEn.replace(/`/g, '\\`')}\`,
    imageUrlCn: ${r.id}_CN_IMG,
    imageUrlEn: ${r.id}_EN_IMG
  }`;
  }).join(',\n  ')}
];
`;

fs.writeFileSync(OUTPUT_FILE, dataContent);
console.log(`Generated ${OUTPUT_FILE} with ${results.length} entries.`);
