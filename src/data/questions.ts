// 这个文件定义了问题和选项的数据结构，以及具体的问题数据

import cityImg from '@/assets/images/selectioncard/city.png'
import forestImg from '@/assets/images/selectioncard/forest.png'
import grasslandImg from '@/assets/images/selectioncard/grassland.png'
import wetlandImg from '@/assets/images/selectioncard/wetland.png'

export type Option =
  | {
      type: 'text'
      labelCn: string // 中文文案
      labelEn: string // 英文文案
      key?: string 
      value?: Record<string, number>
    }
  | {
      type: 'image'
      image: string
      labelCn: string // 中文文案
      labelEn: string // 英文文案
      key?: string
      value?: Record<string, number>
    }

export type Question = {
  id: string
  titleCn: string // 中文题干
  titleEn: string // 英文题干
  titleKey?: string
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 'q1',
    titleCn: '哎呀！你突然变成了一只鸟！你决定前往：',
    titleEn: 'Oops! You suddenly turned into a bird. Where would you go?',
    titleKey: 'quiz.q1.title',
    options: [
      { type: 'image', image: forestImg, labelCn: '枝叶茂密的大树、林下光影、层层树冠', labelEn: 'A dense forest with layered tree canopies', key: 'quiz.q1.options.0', value: { S: -1 } },
      { type: 'image', image: grasslandImg, labelCn: '草原、稀疏树木、远处地平线', labelEn: 'Open grassland with scattered trees and a wide horizon', key: 'quiz.q1.options.1', value: { P: -1 } },
      { type: 'image', image: wetlandImg, labelCn: '海岸、红树林、湿地、浅水滩', labelEn: 'Coastlines, mangroves, wetlands, and shallow water', key: 'quiz.q1.options.2', value: { F: -1 } },
      { type: 'image', image: cityImg, labelCn: '建筑、路灯、栏杆、电线', labelEn: 'Buildings, streetlights, railings, and power lines', key: 'quiz.q1.options.3', value: { E: 1 } },
    ],
  },
  {
    id: 'q2',
    titleCn: '呼！安全降落。接下来你准备：',
    titleEn: 'Nice landing! What to do next?',
    titleKey: 'quiz.q2.title',
    options: [
      { type: 'text', labelCn: '结识新的好朋鸟，迅速融入鸟群中。', labelEn: 'Fly over and join a flock — instant bird friends!', key: 'quiz.q2.options.0', value: { E: 4, J: 1 } },
      { type: 'text', labelCn: '和附近的小鸟打个招呼，慢慢熟悉周围。', labelEn: 'Take it slow, give a few chirps to the birds nearby.', key: 'quiz.q2.options.1', value: { E: 2, F: -1 } },
      { type: 'text', labelCn: '安静地站着，不太受其他鸟影响。', labelEn: 'Stay quiet and keep to yourself, just watching around.', key: 'quiz.q2.options.2', value: { I: -2, J: 1 } },
      { type: 'text', labelCn: '在高处独自享受一会儿微风。', labelEn: 'Perch high up and enjoy the breeze on your own.', key: 'quiz.q2.options.3', value: { I: -4, F: -1 } },
    ],
  },
  {
    id: 'q3',
    titleCn: '哇！今天是个好天气，你这样放松自己：',
    titleEn: 'Good day, mate! Time to relax. You:',
    titleKey: 'quiz.q3.title',
    options: [
      { type: 'text', labelCn: '在人类头顶拉屎，以此惩恶扬善。', labelEn: 'Poop on humans below — bird justice is served.', key: 'quiz.q3.options.0', value: { N: 4, E: 1 } },
      { type: 'text', labelCn: '去码头整点薯条，边吃边思考鸟生真谛。', labelEn: 'Grab some fries at the pier and think about bird stuff.', key: 'quiz.q3.options.1', value: { N: 2, T: 1 } },
      { type: 'text', labelCn: '在草地上啄叶子玩，在枝头蹦来蹦去。', labelEn: 'Hop hop hop, peck peck peck — just messing around.', key: 'quiz.q3.options.2', value: { S: -2, F: -1 } },
      { type: 'text', labelCn: '仔细啃好爪爪，精心梳理羽毛。', labelEn: 'Settle down, preen your feathers, and fully recharge.', key: 'quiz.q3.options.3', value: { S: -4, I: -1 } },
    ],
  },
  {
    id: 'q4',
    titleCn: '啊哦！你的视野里远远地出现了一只人类！你：',
    titleEn: 'Uh-oh! A human appears far away in your view. You:',
    titleKey: 'quiz.q4.title',
    options: [
      { type: 'text', labelCn: '眉头一皱，决定立刻飞走。', labelEn: 'Hmmm… Nope, gotta hide.', key: 'quiz.q4.options.0', value: { J: 3, I: -1 } },
      { type: 'text', labelCn: '拉长耳朵提高警觉，神经细胞全面戒备！', labelEn: 'Enemy spotted! Eyes peeled, stay sharp.', key: 'quiz.q4.options.1', value: { J: 2 } },
      { type: 'text', labelCn: '发生甚么事了？敌不动我不动。', labelEn: 'Not sure. Let me see…', key: 'quiz.q4.options.2', value: { P: -2, T: 1 } },
      { type: 'text', labelCn: '不确定，看一眼？再看一眼。', labelEn: 'Detective mode on. Peek, Peek again!', key: 'quiz.q4.options.3', value: { P: -3, E: 1 } },
    ],
  },
  {
    id: 'q5',
    titleCn: '呼！笨笨人类没有发现你，你松了一口气：',
    titleEn: 'Phew! The human didn’t notice you and walked away. You:',
    titleKey: 'quiz.q5.title',
    options: [
      { type: 'text', labelCn: '梳理前因后果，原来人是这样的动物。', labelEn: 'Go over the moment in your head — Ah, humans are like that.', key: 'quiz.q5.options.0', value: { T: 4, N: 1 } },
      { type: 'text', labelCn: '看来刚刚的策略很好，下次还这么干。', labelEn: 'Feel satisfied. That move worked! Keep it for next time.', key: 'quiz.q5.options.1', value: { T: 2, S: -1 } },
      { type: 'text', labelCn: '慢慢舒展羽毛，享受安全的环境。', labelEn: 'Loosen up, stretch, and soak in the peaceful air.', key: 'quiz.q5.options.2', value: { F: -2, S: -1 } },
      { type: 'text', labelCn: '一展歌喉，机智如我～', labelEn: 'Start singing — what a clever bird you are!', key: 'quiz.q5.options.3', value: { F: -4, N: 1 } },
    ],
  },
]
