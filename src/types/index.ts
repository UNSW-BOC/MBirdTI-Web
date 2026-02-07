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

  tagsCn?: string[]; // e.g. ['现实派', '秩序控', '定心石']
  tagsEn?: string[]; // e.g. ['Realist', 'Orderly', 'Anchor']
}
