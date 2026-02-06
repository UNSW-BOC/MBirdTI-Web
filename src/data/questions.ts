// 这个文件定义了问题和选项的数据结构，以及具体的问题数据

import cityImg from '@/assets/images/selectioncard/city.png'
import forestImg from '@/assets/images/selectioncard/forest.png'
import grasslandImg from '@/assets/images/selectioncard/grassland.png'
import wetlandImg from '@/assets/images/selectioncard/wetland.png'

export type Option =
  | {
      type: 'text'
      label: string // ✅ 现在直接写文案
      key?: string // ✅ 可选：以后上 i18n 用（现在不用也没关系）
    }
  | {
      type: 'image'
      image: string
      label: string // 图片下的文字（现在直接写文案）
      key?: string // ✅ 可选：以后上 i18n 用
    }

export type Question = {
  id: string
  title: string //题干
  titleKey?: string // 以后上 i18n 用
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 'q1',
    title: '哎呀！你突然变成了一只鸟！\n你决定前往：',
    titleKey: 'quiz.q1.title',
    options: [
      { type: 'image', image: cityImg, label: '城市', key: 'quiz.q1.options.0' },
      { type: 'image', image: forestImg, label: '森林', key: 'quiz.q1.options.1' },
      { type: 'image', image: grasslandImg, label: '草原', key: 'quiz.q1.options.2' },
      { type: 'image', image: wetlandImg, label: '湿地', key: 'quiz.q1.options.3' },
    ],
  },
  {
    id: 'q2',
    title: '呼！安全落在枝头\n接下来你准备：',
    titleKey: 'quiz.q2.title',
    options: [
      { type: 'text', label: '结识新的好朋鸟，迅速融入鸟群中', key: 'quiz.q2.options.0' },
      { type: 'text', label: '和附近的小鸟打个招呼，慢慢熟悉周围。', key: 'quiz.q2.options.1' },
      { type: 'text', label: '安静地站着，不太受其他鸟影响', key: 'quiz.q2.options.2' },
      { type: 'text', label: '在高处独自享受一会儿微风', key: 'quiz.q2.options.3' },
    ],
  },
  {
    id: 'q3',
    title: '哇！今天是个好天气，\n你这样放松自己:',
    titleKey: 'quiz.q3.title',
    options: [
      { type: 'text', label: '在人类头顶拉屎，以此惩恶扬善', key: 'quiz.q3.options.0' },
      { type: 'text', label: '去码头整点薯条，边吃边思考鸟生真谛', key: 'quiz.q3.options.1' },
      { type: 'text', label: '在草地上啄叶子玩，在枝头蹦来蹦去', key: 'quiz.q3.options.2' },
      { type: 'text', label: '仔细啃好爪爪，精心梳理羽毛', key: 'quiz.q3.options.3' },
    ],
  },
  {
    id: 'q4',
    title: '危险！一只巨大的人类正在向你靠近！你: ',
    titleKey: 'quiz.q4.title',
    options: [
      { type: 'text', label: '立即采取行动，飞走或隐蔽', key: 'quiz.q4.options.0' },
      { type: 'text', label: '保持静止，提高警惕', key: 'quiz.q4.options.1' },
      { type: 'text', label: '暗中观察，敌不动我不动', key: 'quiz.q4.options.2' },
      { type: 'text', label: '旋转！跳跃！让我看看怎么个事!', key: 'quiz.q4.options.3' },
    ],
  },
  {
    id: 'q5',
    title: '呼！笨笨人类没有发现你，你松了一口气',
    titleKey: 'quiz.q5.title',
    options: [
      { type: 'text', label: '梳理前因后果，原来人是这样的动物', key: 'quiz.q5.options.0' },
      { type: 'text', label: '看来刚刚的策略很好，下次还这么干', key: 'quiz.q5.options.1' },
      { type: 'text', label: ' 慢慢舒展羽毛，享受安全的环境', key: 'quiz.q5.options.2' },
      { type: 'text', label: '一展歌喉，机智如我～', key: 'quiz.q5.options.3' },
    ],
  },
]
