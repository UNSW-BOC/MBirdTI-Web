export interface BirdResult {
  id: string; // MBTI Code, e.g. 'ISTJ'
  cnName: string; // MBTI Archetype Name, e.g. '物流师'
  enName: string; // e.g. 'Logistician'
  
  birdNameCn: string; // e.g. '鸸鹋'
  birdNameEn: string; // e.g. 'Emu'
  
  titleCn: string; // e.g. '可靠的责任守护者'
  descCn: string; // Full description
  
  titleEn: string; // e.g. 'The Reliable Guardian'
  descEn: string; // Full description
  
  imageUrlCn: string; // e.g. '/src/assets/images/birds/ISTJ_CN.png'
  imageUrlEn: string; // e.g. '/src/assets/images/birds/ISTJ_EN.png'
}
