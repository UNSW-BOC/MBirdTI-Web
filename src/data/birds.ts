
import type { BirdResult } from '@/types';
// Note: Ensure these images exist. For now using what we have.
import ISTJ_CN_IMG from '@/assets/images/birds/ISTJ.png';
import ISFJ_CN_IMG from '@/assets/images/birds/ISFJ.png';
import INFJ_CN_IMG from '@/assets/images/birds/INFJ.png';
import INTJ_CN_IMG from '@/assets/images/birds/INTJ.png';
import ISTP_CN_IMG from '@/assets/images/birds/ISTP.png';
import ISFP_CN_IMG from '@/assets/images/birds/ISFP.png';
import INFP_CN_IMG from '@/assets/images/birds/INFP.png';
import INTP_CN_IMG from '@/assets/images/birds/INTP.png';
import ESTP_CN_IMG from '@/assets/images/birds/ESTP.png';
import ESFP_CN_IMG from '@/assets/images/birds/ESFP.png';
import ENFP_CN_IMG from '@/assets/images/birds/ENFP.png';
import ENTP_CN_IMG from '@/assets/images/birds/ENTP.png';
import ESTJ_CN_IMG from '@/assets/images/birds/ESTJ.png';
import ESFJ_CN_IMG from '@/assets/images/birds/ESFJ.png';
import ENFJ_CN_IMG from '@/assets/images/birds/ENFJ.png';
import ENTJ_CN_IMG from '@/assets/images/birds/ENTJ.png';
// Fallback for EN images (using same image or placeholder until provided)
const ISTJ_EN_IMG = ISTJ_CN_IMG; // TODO: Replace with real EN image import
const ISFJ_EN_IMG = ISFJ_CN_IMG; // TODO: Replace with real EN image import
const INFJ_EN_IMG = INFJ_CN_IMG; // TODO: Replace with real EN image import
const INTJ_EN_IMG = INTJ_CN_IMG; // TODO: Replace with real EN image import
const ISTP_EN_IMG = ISTP_CN_IMG; // TODO: Replace with real EN image import
const ISFP_EN_IMG = ISFP_CN_IMG; // TODO: Replace with real EN image import
const INFP_EN_IMG = INFP_CN_IMG; // TODO: Replace with real EN image import
const INTP_EN_IMG = INTP_CN_IMG; // TODO: Replace with real EN image import
const ESTP_EN_IMG = ESTP_CN_IMG; // TODO: Replace with real EN image import
const ESFP_EN_IMG = ESFP_CN_IMG; // TODO: Replace with real EN image import
const ENFP_EN_IMG = ENFP_CN_IMG; // TODO: Replace with real EN image import
const ENTP_EN_IMG = ENTP_CN_IMG; // TODO: Replace with real EN image import
const ESTJ_EN_IMG = ESTJ_CN_IMG; // TODO: Replace with real EN image import
const ESFJ_EN_IMG = ESFJ_CN_IMG; // TODO: Replace with real EN image import
const ENFJ_EN_IMG = ENFJ_CN_IMG; // TODO: Replace with real EN image import
const ENTJ_EN_IMG = ENTJ_CN_IMG; // TODO: Replace with real EN image import

export const birdsData: BirdResult[] = [
  {
    id: "ISTJ",
    cnName: "物流师",
    enName: "Logistician",
    birdNameCn: "鸸鹋",
    birdNameEn: "Emu",
    titleCn: "稳健的秩序执行者",
    descCn: `稳健的秩序执行者：鸸鹋 (ISTJ，“物流师”)
鸸鹋是澳洲体型最大的本土鸟类，也是澳洲荒原上的“步行者”。它们体型高大、步伐稳健，虽不具备飞行能力，却凭借惊人的耐力与对秩序的坚守在前行。这种务实的特质，正如 ISTJ——沉默寡言，却用行动托举着群体的稳定。

鸸鹋对责任的恪守尤其体现在繁殖中。雄鸟会独自承担孵化与育雏的重任，长达八周不饮不食，只为守护新生命的降临。这种对职责的绝对忠诚，呼应了ISTJ人格中高度的责任感、纪律性与牺牲精神。

传说鸸鹋能“预知降雨”，这其实源于它们对现实信号的高度专注。它们能察觉细微的天气转变，通过听觉和观察捕捉远方的雷声与云层变化。这种依赖事实、经验与可验证信息进行判断的方式，正是“物流师”ISTJ 的真实写照：坚定、务实、行稳致远。`,
    titleEn: "The Steady Upholder",
    descEn: `The Steady Upholder: Emu (ISTJ). 

As Australia's largest native bird, flightless emus traverse vast plains with endurance and discipline. Like ISTJs, they are quiet but uphold group stability through action. They are known for their strong sense of responsibility: males will incubate eggs for up to eight weeks without food or water and independently care for chicks, demonstrating their profound duty and sacrifice. 

Folklore claims that emus “predict rain” through their sensitivity to distant thunder, reflecting the ISTJ’s reliance on facts, experience, and verifiable data: steadfast, practical, and grounded.`,
    imageUrlCn: ISTJ_CN_IMG,
    imageUrlEn: ISTJ_EN_IMG,
    tagsCn: ['现实派', '秩序控', '定心石'],
    tagsEn: ['Realist', 'Orderly', 'Anchor']
  },
  {
    id: "ISFJ",
    cnName: "守护者",
    enName: "Defender",
    birdNameCn: "茶色蛙口夜鹰",
    birdNameEn: "Tawny Frogmouth",
    titleCn: "低调的幕后守护者",
    descCn: `低调的幕后守护者：茶色蛙口夜鹰 (ISFJ，“守护者”)
茶色蛙口夜鹰是鸟类中的“拟态大师”。它们拥有如枯树皮般的保护色，白天会采取“冻结”姿势伪装成断木，与树干浑然一体。这种不求瞩目的生存策略，恰如ISFJ作为“守护者”细致稳定的特质，善于在群体中维持和谐，却常隐于背景之中。

不同于主动追捕的猛禽，它们像耐心的观察者，会栖息于固定枝头，凭借宽大的口部捕捉送上门的昆虫或小型脊椎动物。这种以静制动的捕食方式，体现了ISFJ的务实与专注：不张扬却可靠，在熟悉的模式中达成目标。

它们践行终身伴侣制，双方密切协作，共同筑巢、轮流孵卵。同时，它们对巢域极为忠诚，常年不迁徙。这种以稳定、责任与持续关怀为核心的关系模式，正是ISFJ的缩影：在持久陪伴中默默付出，以行动构筑安全感。`,
    titleEn: "The Quiet Guardian",
    descEn: `The Quiet Guardian: Tawny Frogmouth (ISFJ).

Tawny frogmouths are masters of camouflage. They have a protective plumage which mimics tree bark. During the day, they freeze in place to blend seamlessly with tree trunks which embodies the ISFJ’s unassuming presence. Unlike active hunters, they perch patiently, only catching prey that comes near, mirroring the ISFJ’s focus within familiar routines. 

In relationships, tawny frogmouths form lifelong pairs, sharing nesting duties and remaining loyal to the same territory year after year. This enduring, nurturing bond reflects the ISFJ’s essence, showing how ISFJs build security through quiet consistency, loyalty, and dependable care.`,
    imageUrlCn: ISFJ_CN_IMG,
    imageUrlEn: ISFJ_EN_IMG,
    tagsCn: ['守护者', '细腻', '奉献'],
    tagsEn: ['Protector', 'Detailed', 'Devoted']
  },
  {
    id: "INFJ",
    cnName: "提倡者",
    enName: "Advocate",
    birdNameCn: "王吸蜜鸟",
    birdNameEn: "Regent Honeyeater",
    titleCn: "稀有的灵魂共鸣者",
    descCn: `稀有的灵魂共鸣者：王吸蜜鸟 (INFJ，“提倡者”)
王吸蜜鸟是澳洲林地中极其稀有的“隐士”。因栖息地丧失，目前野外个体已跌至不足300只，正如 INFJ：在人群中比例极低，却拥有深邃的内在世界。

它们的生存境遇尤为特殊。由于种群极度分散，在学鸣期，雄鸟因周围缺乏同类，会转而学习其他鸟类的叫声。这种现象恰如INFJ可能经历的孤独探索，他们需要在缺乏共鸣的环境里，内化外界信息并构建真正属于自己的内在表达。

尽管自身岌岌可危，王吸蜜鸟的存在却守护着整片森林。对它们生存状态的关注和保护间接保护了相同生态环境下的其他濒危物种。这正如INFJ所蕴含的理想主义与洞察力，他们的存在本身就维系着系统的平衡与希望的存在。这种孤独、脆弱，却向光而生的特质，正是INFJ的写照。`,
    titleEn: "The Spiritual Resonator",
    descEn: `The Spiritual Resonator: Regent Honeyeater (INFJ). 

The Regent Honeyeater is one of Australia’s rarest birds, with fewer than 300 individuals remaining in the wild. This critically endangered bird mirrors the rarity of INFJs. Isolated males, lacking tutors, learn songs from other species, which is a metaphor for the INFJ’s solitary quest for authentic self-expression. 

Though fragile, the conservation of Regent Honeyeaters has the potential to protect entire ecosystems. Delicate yet purposeful, their presence inspires hope and ecological balance, just as INFJs uphold systemic harmony through insight and idealism.`,
    imageUrlCn: INFJ_CN_IMG,
    imageUrlEn: INFJ_EN_IMG,
    tagsCn: ['理想家', '洞察力', '共情'],
    tagsEn: ['Idealist', 'Insightful', 'Empathetic']
  },
  {
    id: "INTJ",
    cnName: "架构师",
    enName: "Architect",
    birdNameCn: "猛鹰鸮",
    birdNameEn: "Powerful Owl",
    titleCn: "理智的顶级战略家",
    descCn: `理智的顶级战略家：猛鹰鸮 (INTJ，“架构师”)
作为澳大利亚最大的猫头鹰，猛鹰鸮以沉默而持久的方式占据着食物链顶端。它们凭借精准的夜间视力与卓越的捕杀能力独立掌控全局，这种高度自控、以结果为重的生存方式，恰如 INTJ：冷峻、系统、直击核心。

在捕食策略上，猛鹰鸮展现出远超同类的魄力。大多数猛禽捕猎对象不超过自身体重的20%，而它却能通过展现高超的捕猎技巧捕获高达自身体重重量1.5倍的猎物。这与 INTJ 不满足于常规目标，并靠周密计划确保成功的思维高度吻合。

由于长期稳定的配偶制与严格的领地守护，猛鹰鸮不争一时之锋，却在数十年间守护着同一片领地，持续优化狩猎路线与巢区结构。这正是INTJ作为“系统构建者”的特质：在孤独中规划长远体系，在克制中积累结构性优势，最终重塑环境秩序。`,
    titleEn: "The Methodical Strategist",
    descEn: `The Methodical Strategist: Powerful Owl (INTJ). 

Powerful owls are Australia's largest species of owl, silently ruling the night with elegant authority. Their precise night vision and independent strength mirror the INTJ's cold, systematic focus. While most birds of prey will opt for prey sized below 20% of their body mass, powerful owls will target prey up to 1.5 times their own weight, symbolizing an INTJ’s ambition and meticulous planning which makes them stand out amongst their peers. 

With their lifelong mates, powerful owls defend, maintain and optimise a single territory for decades, reflecting the INTJ tendency to build durable systems, accumulate structural advantages, and reshape their environment over time.`,
    imageUrlCn: INTJ_CN_IMG,
    imageUrlEn: INTJ_EN_IMG,
    tagsCn: ['战略家', '独立', '远见'],
    tagsEn: ['Strategist', 'Independent', 'Visionary']
  },
  {
    id: "ISTP",
    cnName: "鉴赏家",
    enName: "Virtuoso",
    birdNameCn: "缎蓝园丁鸟",
    birdNameEn: "Satin Bowerbird",
    titleCn: "理性的现实工匠",
    descCn: `理性的现实工匠：缎蓝园丁鸟 (ISTP，“鉴赏家”)
缎蓝园丁鸟是森林中的“天才工程师”。它们凭借惊人的空间想象力，搭建结构精密、比例考究的“园丁巢”。它们会反复拆解巢穴、调整材料以追求极致的稳定性，这种在试错中优化结果的行为，正是 ISTP 的典型写照——务实、灵活，对物理世界有着精准的把控。

它们对材料有着敏锐的感知力，会收集蓝色羽毛、瓶盖等鲜艳物件来装饰场地，将它们组合成功能化的结构，且从不拘泥于固定方案。这种以结果为导向的创造力，体现了 ISTP 强大的现实探索欲。

它们的建造行为具有功能导向与时效性。求偶结束后便不再执着于持续维护场地，不追求长久的存在感。这种以效率、行动与解决问题为核心的姿态，正是ISTP 的真实写照：高效务实，不空谈构想，只用行动验证可能性。`,
    titleEn: "The Rational Craftsman",
    descEn: `The Rational Craftsman: Satin Bowerbird (ISTP). 

Satin bowerbirds represent rational, hands-on craftsmen analogous to the ISTP. They construct intricate bowers, constantly testing and refining for stability which showcases the ISTP’s preference for practical experimentation. Males will selectively gather blue objects (such as bottle caps and feathers) to create functional and aesthetic arrangements without rigid adherence to fixed designs, mirroring the result-driven creativity and real-world exploration of ISTPs. 

Satin bowerbirds value results over permanence. They do do not maintain the bower indefinitely after mating, reflecting the ISTP mindset of acting decisively, avoiding abstract speculation, and validating ideas through direct action.`,
    imageUrlCn: ISTP_CN_IMG,
    imageUrlEn: ISTP_EN_IMG,
    tagsCn: ['巧匠', '冷静', '务实'],
    tagsEn: ['Virtuoso', 'Cool', 'Pragmatic']
  },
  {
    id: "ISFP",
    cnName: "冒险家",
    enName: "Adventurer",
    birdNameCn: "华丽琴鸟",
    birdNameEn: "Superb Lyrebird",
    titleCn: "感性的艺术创作者",
    descCn: `感性的艺术创作者：华丽琴鸟 (ISFP,“冒险家”)
华丽琴鸟是自然界中最具艺术气质的“声音模仿大师”。它们能模仿数十种鸟鸣，甚至相机快门、汽车警报等人类世界的声音，这源于对环境高度敏锐的观察与吸收。这种安静而细腻的感知方式，恰如ISFP人格，温柔而敏锐地感知着世界。

它们始终保持好奇，终生都在更新自己的声音库。在求偶季，华丽琴鸟会通过精心编排的歌声与舞蹈进行展示，形成高度个人化的艺术表达。这种不依赖语言逻辑，而是通过感官与情绪传递意义的方式，正是 ISFP 所擅长的独特路径。

尽管表演时极具魅力，它们在日常中却行踪隐秘，独来独往。它们不迎合、不解释，忠于内在感受，在世界一隅安静地创造美。这种姿态正是ISFP的真实写照：自由而忠于本心，用审美与行动赋予生活色彩。`,
    titleEn: "The Sensitive Artist",
    descEn: `The Sensitive Artist: Superb Lyrebird (ISFP). 

Embodying the emotional artistic creator, superb lyrebirds replicates chainsaws, camera shutters, and car alarms, reflecting an ISFP's acute sensory awareness. They remains curious throughout their lives and continually expand their sound repertoires. During courtship, lyrebirds perform carefully composed songs and dances, conveying meaning through sensation and emotion rather than verbal logic, which mirrors the ISFP creative pathway. 

Despite their striking performances, superb lyrebirds live secretive and independent  day-to-day lives, avoiding attention and remaining true to their inner values. This behavior symbolises the ISFP spirit of freedom, authenticity, and the creation of beauty through both perception and action.`,
    imageUrlCn: ISFP_CN_IMG,
    imageUrlEn: ISFP_EN_IMG,
    tagsCn: ['探险家', '温和', '艺术'],
    tagsEn: ['Explorer', 'Gentle', 'Artistic']
  },
  {
    id: "INFP",
    cnName: "调停者",
    enName: "Mediator",
    birdNameCn: "华丽细尾鹩莺",
    birdNameEn: "Superb Fairywren",
    titleCn: "温柔的理想守护者",
    descCn: `温柔的理想守护者：华丽细尾鹩莺 (INFP,“调停者”)
华丽细尾鹩莺是林间色彩斑斓的“浪漫诗人”。它们体型小巧、天性谨慎，却在亲密关系中拥有极强的情感投入。雄鸟求偶时会衔着鲜艳的花瓣献给伴侣，这种不以力量取胜、而以美感与仪式传达爱意的行为，恰如INFP调停者人格，细腻、纯粹、富于想象。

它们以惊人的同理心维系着群体，会帮助抚育毫无血缘关系的雏鸟。当危险降临，它们会施展“鼠跑”策略，假装成逃窜的小鼠以引开天敌，保护雏鸟。这种牺牲自我、守护弱小的决绝，呼应了INFP在价值驱动下的内在坚定与自我牺牲倾向。

华丽细尾鹩莺象征着一种安静而深情的力量。它们用同理心与理想主义编织世界，即便身处丛林，也要守护内心相信的纯净。正如INFP——柔软、纯真，以无声的慈悲温暖荒野。`,
    titleEn: "The Gentle Idealist",
    descEn: `The Gentle Idealist: Superb Fairywren (INFP). 

Superb fairywrens appear as colourful “romantic poets” of the forest: small and cautious, yet deeply emotionally invested in close relationships. Males usually express their love by offering colorful petals to females, mirroring the INFP's poetic romance and sensitive imagination. 

Superb fairywrens show remarkable empathy, often caring for other couples' chicks, while some adults will perform a “rodent-run” to lure predators away from nests. This selfless protection reflects the INFP’s value-driven courage. Though delicate, it builds a kinder world through compassion, just like the INFP, who remains soft, sincere, and compassionately resilient even in harsh environments.`,
    imageUrlCn: INFP_CN_IMG,
    imageUrlEn: INFP_EN_IMG,
    tagsCn: ['治愈者', '纯粹', '诗意'],
    tagsEn: ['Healer', 'Pure', 'Poetic']
  },
  {
    id: "INTP",
    cnName: "逻辑学家",
    enName: "Logician",
    birdNameCn: "澳洲鸢",
    birdNameEn: "Black-shouldered Kite",
    titleCn: "冷静的逻辑观察者",
    descCn: `冷静的逻辑观察者：澳洲鸢 (INTP,“逻辑学家”)
澳洲鸢是荒原上理性的“空中思想家”。它们以惊人的悬停技术著称，能长时间静止于半空，细致扫描地面的一切动向。这种捕猎前先进行极致拆解与评估的策略，成功率高达75%，正如 正如INTP不急于行动而先深入分析的本质。

它们善于运用气流节省体力，常以滑翔代替主动振翅，并能与伴侣在飞行中完成精准的食物交接。这种对能量效率与协作机制的本能优化，与INTP 对结构与机制的好奇心高度一致。

在荒野中，它们始终保持独立与清醒。澳洲鸢象征着一种安静而锋利的智慧：不随波逐流，只在思考中寻找真相的最优路径。正如 INTP，以理性的视角默默拆解世界的运作方式——独立、好奇，在静默中洞察万物。`,
    titleEn: "The Calm Observer",
    descEn: `The Calm Observer: Black-shouldered Kite (INTP). 

Over the outback, black-shouldered kites use their exceptional hovering ability to stay motionless mid-air. They meticulously scan their terrain before they strike, allowing them to maintain a 75% success rate during hunts, embodying the INTP’s precision through analysis. 

Black-shouldered kites efficiently use air currents to conserve energy, gliding rather than flapping and even exchanging food mid-air with their partners, reflecting the INTP's fascination with systems, efficiency, and structural mechanisms. In the wilderness, they remain independent and mentally sharp, symbolising a quiet yet incisive intelligence that seeks optimal solutions through reasoning, much like the INTP, who dissects reality with curiosity and logical clarity.`,
    imageUrlCn: INTP_CN_IMG,
    imageUrlEn: INTP_EN_IMG,
    tagsCn: ['思想家', '逻辑', '好奇'],
    tagsEn: ['Thinker', 'Logical', 'Curious']
  },
  {
    id: "ESTP",
    cnName: "企业家",
    enName: "Entrepreneur",
    birdNameCn: "澳洲钟鹊",
    birdNameEn: "Australian Magpie",
    titleCn: "敏捷的现实行动家",
    descCn: `敏捷的现实行动家：澳洲钟鹊 (ESTP，“企业家”)
澳洲钟鹊是精力充沛的“全能派”。它们以极高的社交性与反应速度著称，常在嬉戏与追逐中建立社会关系。面对新情况，它们倾向于直接介入与互动。这种“先上手、再调整”的生命节奏，正如ESTP大胆而务实的风格，在行动中寻找答案。

它们展现出强大的学习与问题解决能力，不仅识能别不同人类的面孔并作出区别反应，还学会了通过协作移除同伴身上的追踪器。这种在实践中试错、在互动中快速进化的能力，与ESTP依赖亲身经验、信任直观感知的认知方式高度契合。

澳洲钟鹊在多变环境中始终保持着警觉与活跃，它们不依赖于长线计划，而是凭借即时判断推动局势发展。它象征着一种生动而直接的智慧，正如ESTP的行动哲学：迅速出手，在体验中掌握主动权。`,
    titleEn: "The Agile Realist",
    descEn: `The Agile Realist: Australian Magpie (ESTP). 

Australian magpies are highly social and energetic. They wrestle, play, and bond through physical interaction and tend to respond to new situations through direct engagement, just like the bold and practical ESTP approach of learning by doing. They also show strong problem-solving ability, recognising individual humans and even cooperating to remove tracking devices from their companions, reflecting the ESTP reliance on firsthand experience and instinctive perception. 

Thriving in urban settings, Australian magpies adapt instantly to change. Always alert and responsive, they trust instinct over plans. The magpie embodies the ESTP “Entrepreneur”: bold, resourceful, and mastering the present through hands-on experience and fearless engagement.`,
    imageUrlCn: ESTP_CN_IMG,
    imageUrlEn: ESTP_EN_IMG,
    tagsCn: ['行动派', '无畏', '活力'],
    tagsEn: ['Doer', 'Fearless', 'Energetic']
  },
  {
    id: "ESFP",
    cnName: "表演者",
    enName: "Entertainer",
    birdNameCn: "虹彩吸蜜鹦鹉",
    birdNameEn: "Rainbow Lorikeet",
    titleCn: "热情的生命表演者",
    descCn: `热情的生命表演者：虹彩吸蜜鹦鹉 (ESFP，“表演者”)
虹彩吸蜜鹦鹉是森林中绚丽的“社交达人”。它们羽色艳丽，行动外向，常成群结队地在喧闹中穿行。这种情绪外显、即时回应外界的方式，正是 ESFP 的典型体现——活在当下，用最直接的感官与世界共舞。

它们具有极强的群体意识，能够对同伴的情绪和行为变化报以热烈回应。群体中的同步飞行、集体觅食与嬉戏打闹，都体现出它们在社会互动中获取能量的本能。这种“在连接中体验生活”的特质，与 ESFP 追求人际共鸣、享受社交乐趣的天性高度一致。

它们对人类环境展现出惊人的适应力，甚至会利用人类活动创造新的互动与食物机会。它们的存在本身就极具感染力，用色彩与鸣叫交织出鲜活的现场感。正如ESFP，他们用热情与真实情绪点亮空间，让世界变得明亮而有温度。`,
    titleEn: "The Passionate Performer",
    descEn: `The Passionate Performer: Rainbow Lorikeet (ESFP). 

Rainbow lorikeets act as dazzling social experts of the forest, displaying vivid plumages and outgoing behaviour. They like travelling in noisy flocks, reacting instantly to their surroundings and fully living in the present. They feed, fly, and play in large groups, drawing energy from social connection. 

Highly adaptable to cities, rainbow lorikeets can even use human activity to create new feeding and social opportunities. Their presence is always vibrant, warm, and inclusive. This captures the character of the ESFP: living fully in the moment, and spreading delight through color, sound, and spontaneous, heartfelt interaction.`,
    imageUrlCn: ESFP_CN_IMG,
    imageUrlEn: ESFP_EN_IMG,
    tagsCn: ['表演者', '热情', '乐天'],
    tagsEn: ['Performer', 'Enthusiastic', 'Optimistic']
  },
  {
    id: "ENFP",
    cnName: "活动家",
    enName: "Campaigner",
    birdNameCn: "笑翠鸟",
    birdNameEn: "Laughing Kookaburra",
    titleCn: "热忱的灵魂链接者",
    descCn: `热忱的灵魂链接者：笑翠鸟 (ENFP，“活动家”)
笑翠鸟以极具感染力的“笑声”闻名丛林。这洪亮而连贯的鸣叫不仅是领地的宣言，更会引发群体性的“笑声”共鸣，点燃周围氛围。这种用情绪注入活力的本能，正如 ENFP，他们是天然的情感引线，总能在人群中激发灵感与希望。

在社会结构上，笑翠鸟展现出令人惊叹的温情：许多亚成年个体选择留在家中，协助亲鸟抚育弟妹。这种基于情感联结的跨代协作，与 ENFP 对共情与理想化关系的重视高度契合。他们深信连接本身的力量，并愿意为守护重要的人持续投入。

笑翠鸟的存在从不是为了冷冰冰的控制，而是为了维系群体的凝聚力。它们象征着一种自由而温暖的生命态度：在真实表达中分享快乐。正如ENFP——用笑声与想象力打破隔阂，让世界变得更有生机与温度。`,
    titleEn: "The Enthusiastic Connector",
    descEn: `The Enthusiastic Connector: Laughing Kookaburra (ENFP). 

Laughing kookaburras are famous for their loud, contagious laughter-like call, which not only marks their territory but also triggers group vocal responses that energise the surrounding environment, much like ENFPs who inspire emotion and optimism in others. Many young kookaburras stay with their parents to help raise siblings, showing cross-generational cooperation based on emotional bonds, which reflects the ENFP belief in empathy, connection, and ideal relationships. 

Rather than heated competition, laughing kookaburras unite through warmth and expression, symbolising a free, joyful approach to life, just like ENFPs, who use imagination and laughter to bridge divides and spread vitality.`,
    imageUrlCn: ENFP_CN_IMG,
    imageUrlEn: ENFP_EN_IMG,
    tagsCn: ['追梦人', '灵感', '感染力'],
    tagsEn: ['Dreamer', 'Inspiring', 'Charismatic']
  },
  {
    id: "ENTP",
    cnName: "辩论家",
    enName: "Debater",
    birdNameCn: "啸鸢",
    birdNameEn: "Whistling Kite",
    titleCn: "机智的颠覆者",
    descCn: `机智的颠覆者：啸鸢 (ENTP，“辩论家”)
啸鸢是空中极具适应力的“策略大师”。它们不拘泥于单一的捕食方式，既能精准狩猎，也善于利用各种机会抢食。这种思路多变、反应迅速的特性，正如 ENTP一般，擅长在动态中捕捉可能性。

在行为上，啸鸢以聪明和大胆闻名。有观察记录显示，它们会主动叼起燃烧的树枝投向未燃区域，制造火势，惊出藏匿的猎物。这种非常规、甚至带有“挑衅”意味的策略，体现了对规则边界的试探与重组，恰如 ENTP 不满足既有路径，持续提出新解法的思维模式。

啸鸢的鸣声清亮而穿透力强，在盘旋中强化存在感。虽非最强猛禽，却凭借敏锐观察、快速决策与大胆尝试占据独特生态位。它象征着一种机智而有创造力的智慧，正如ENTP：以创意与持续试探，推动世界向新的方向展开。`,
    titleEn: "The Clever Opportunist",
    descEn: `The Clever Opportunist: Whistling Kite (ENTP, “Debater”). 

As an opportunistic feeder, whistling kites scavenge and steal boldly, turning their constraints into chances, akin to ENTPs who thrive on dynamic possibilities. They are known for their intelligence and boldness, and have been recorded carrying burning sticks to spread fire and flush out potential prey. This uncommon behavior demonstrates their unconventional and boundary-testing character, which mirrors the ENTP tendency to challenge existing frameworks. 

Their sharp whistle cuts through skies, announcing their presence. Although they are not the strongest bird of prey, they thrive via adaptability and clever risk-taking. Like ENTPs, they challenge norms with restless curiosity, reshaping possibilities through their wit and unconventional thinking.`,
    imageUrlCn: ENTP_CN_IMG,
    imageUrlEn: ENTP_EN_IMG,
    tagsCn: ['发明家', '机智', '挑战'],
    tagsEn: ['Innovator', 'Witty', 'Challenger']
  },
  {
    id: "ESTJ",
    cnName: "管理者",
    enName: "Executive",
    birdNameCn: "澳洲鹈鹕",
    birdNameEn: "Australian Pelican",
    titleCn: "稳健的秩序构建者",
    descCn: `稳健的秩序构建者：澳洲鹈鹕 (ESTJ，“管理者”)
澳洲鹈鹕是水域中极具“组织感”的鸟类。它们以巨大的喙和有序的捕食策略著称。它们时常列队游动或围成半圆形，同步驱赶鱼群至浅水区，再统一进行滤食。这种依赖规则、分工与极致协作的策略，正如 ESTJ——重视秩序与效率，在现实世界中推行严谨的行事逻辑。

在社会结构上，它们是责任意识的化身。它们遵循稳定的一夫一妻制，亲鸟共同筑巢与抚育幼鸟，在群体繁殖区中维持清晰的层级与秩序。这种以角色分配和长期投入维系集体运作的模式，与 ESTJ 重视制度、责任与组织稳定的特质高度一致。

澳洲鹈鹕并非灵活的行动者，却是可靠的执行者。它们象征着一种建立在规则与协作上的集体力量，正如ESTJ，以稳健、务实与责任感，构建并守护社会运作的基础。`,
    titleEn: "The Orderly Builder",
    descEn: `The Orderly Builder: Australian Pelican (ESTJ). 

Australian pelicans display strong organisational behaviour, using their large bills and coordinated strategies to drive fish into shallow water, reflecting ESTJ emphasis on rules, efficiency, and structured teamwork. Australian pelicans embody responsibility through lifelong monogamy, and co-nest within colonies featuring clear hierarchies and shared chick-rearing. This long-term, role-based investment mirrors the ESTJ’s dedication to systems and collective efficiency. 

Dependable and methodical, Australian pelicans strengthen group stability through routine and responsibility, much like the ESTJ, who constructs and protects functional social systems through practicality and discipline.`,
    imageUrlCn: ESTJ_CN_IMG,
    imageUrlEn: ESTJ_EN_IMG,
    tagsCn: ['管家', '果断', '高效'],
    tagsEn: ['Executive', 'Decisive', 'Efficient']
  },
  {
    id: "ESFJ",
    cnName: "执政官",
    enName: "Consul",
    birdNameCn: "澳洲白鹮",
    birdNameEn: "Australian White Ibis",
    titleCn: "可靠的社群维系者",
    descCn: `可靠的社群维系者：澳洲白鹮 (ESFJ，“执政官”)
澳洲白鹮是城市与湿地中极具“社会感”的居民。它们偏好密集的群体生活，常在相近的树上集中筑巢，形成紧密的繁殖社群。这种依赖集体协作、分担育儿责任的行为，正如 ESFJ，他们天然对集体福祉有着强烈的使命感，乐于通过行动织就温情的人际网络。

在育幼行为中，它们展现出高度组织化的集体关怀。它们会共同建立专门的育雏区域，将适龄雏鸟集中看护，并轮流承担喂养与守卫责任。这种以服务他人、维护氛围来建立联结的方式，与 ESFJ 重视和谐与人际价值的特质高度契合。

澳洲白鹮在复杂的人类环境中仍能维持稳定的群体结构，它们象征着一种以服务与责任为纽带的社群生命力。正如ESFJ：以持续的付出守护集体，让每个人都能找到归属。`,
    titleEn: "The Social Stabilizer",
    descEn: `The Social Stabilizer: Australian White Ibis (ESFJ). 

Australian white ibises live in dense social groups in both cities and wetlands, nesting closely together and forming tightly connected breeding colonies, just like an ESFJ's commitment to collective well-being. These tight colonies result in a practice of “communal childcare”: adults rotate  between feeding and guarding chicks in shared “nurseries.” This cooperative system reflects the ESFJ’s drive to nurture group well-being. 

Even in complex human environments, Australian white ibises maintain strong social bonds through consistent interaction. They symbolize a type of dependable care seen in the ESFJ, who nurtures belonging and cohesion through consistent dedication.`,
    imageUrlCn: ESFJ_CN_IMG,
    imageUrlEn: ESFJ_EN_IMG,
    tagsCn: ['东道主', '热心', '和谐'],
    tagsEn: ['Host', 'Warm', 'Harmonious']
  },
  {
    id: "ENFJ",
    cnName: "主人公",
    enName: "Protagonist",
    birdNameCn: "葵花鹦鹉",
    birdNameEn: "Sulphur-crested Cockatoo",
    titleCn: "热忱的信念引导者",
    descCn: `热忱的信念引导者：葵花鹦鹉 (ENFJ，“主人公”)
葵花鹦鹉是森林中极具感召力的“灵魂人物”。它们表现出鲜明的集体责任感，在群体进食时总有成员主动放哨，主动警戒周围并及时发出警报。这种为集体安全承担责任的自觉，正如 ENFJ，他们总能为正确的事发声，确保群体中没人被忽视。

它们还具有显著的社会学习与知识共享行为。它们会主动向同伴传授获取食物的新技能，通过分享经验提升整个群体的生存能力。这种以激励他人成长、提升整体福祉为核心的互动方式，与 ENFJ 善于发掘他人潜能的特质高度一致。

葵花鹦鹉情感外显，善于用行动凝聚共识。它们象征着一种基于关怀与示范的的领导力：不以权威压制，而以信念与关怀指引方向。正如ENFJ：用行动唤起共鸣，用关怀连接个体，引领群体走向更好的未来。`,
    titleEn: "The Inspirational Guide",
    descEn: `The Inspirational Guide: Sulphur-crested Cockatoo (ENFJ). 

Sulphur-crested cockatoos show strong collective responsibility by assigning sentinel birds during feeding who warn the group of incoming danger, reflecting the ENFJ tendency to speak up for what is right and protect others. They also actively engage in social learning and knowledge sharing, teaching companions to open bins or taps to improve group survival, just like ENFJs who nurture others’ potential.

Expressive and empathetic, sulphur-crested cockatoos build collective capability. Their loud calls and bold presence rally attention toward common goals. Akin to the ENFJ, they inspire change through mentorship, moral clarity, and an unwavering belief in people’s potential to grow together.`,
    imageUrlCn: ENFJ_CN_IMG,
    imageUrlEn: ENFJ_EN_IMG,
    tagsCn: ['导师', '感召', '利他'],
    tagsEn: ['Mentor', 'Inspiring', 'Altruistic']
  },
  {
    id: "ENTJ",
    cnName: "指挥官",
    enName: "Commander",
    birdNameCn: "黑额矿吸蜜鸟",
    birdNameEn: "Noisy Miner",
    titleCn: "果敢的战略统帅",
    descCn: `果敢的战略统帅：黑额矿吸蜜鸟 (ENTJ，“指挥官”)
黑额矿吸蜜鸟是澳洲丛林中不容置疑的“领地指挥官”。它们以高效的集体行动著称，通过严密分工与持续鸣叫协同行动，在觅食与防御中展现出统一的执行力。这种目标一致、步调精准的集体行动，正是 ENTJ 所擅长的战略型组织——明确方向，并以极致的执行力推动结果。

面对威胁时，它们表现出惊人的主动性与决断力。即便对手体型更大，它们也能快速在压力下达成共识，通过密集骚扰袭击共同驱离入侵者。这种果断对抗、敢于正面迎击的集体勇气，与 ENTJ 主动掌控局势的统帅气质高度一致。

黑额矿吸蜜鸟不仅依赖力量，还善于调动资源以建立秩序，它们象征着一种以结果为导向的领导力。正如ENTJ：他们以清晰愿景凝聚意志，在竞争中开辟疆域，引领集体走向目标。`,
    titleEn: "The Decisive Leader",
    descEn: `The Decisive Leader: Noisy Miner (ENTJ). 

Noisy miners are famous for their coordinated collective action through ordered role assignments and constant vocal communication. This behavior helps them achieve unified efficiency in foraging and defence, reflecting ENTJs who combine vision with execution. When facing threats, noisy miners show remarkable initiative and decisiveness, quickly reaching a group consensus to harass and drive away larger intruders (even humans, if necessary), which reflects the ENTJ’s willingness to confront challenges directly.

Beyond sheer force, the noisy miner mobilises resources to maintain order, symbolising results-oriented leadership. Like ENTJs, they lead with vision, decisiveness, and structured force to achieve collective dominance and long-term control.`,
    imageUrlCn: ENTJ_CN_IMG,
    imageUrlEn: ENTJ_EN_IMG,
    tagsCn: ['统帅', '决断', '宏图'],
    tagsEn: ['Commander', 'Decisive', 'Ambitious']
  }
];
