<template>
  <div class="result-container">
    <!-- Header -->
    <div class="header">
      <!-- Back button removed -->
      <div style="width: 40px"></div>
      
      <div class="header-right">
        <LanguageSwitch class="mini-lang-switch" />
      </div>
    </div>

    <div class="scroll-content">
      <!-- Title Section -->
      <div class="title-section">
        <div class="sub-label">{{ isZh ? '你的结果已生成' : 'Your result is ready' }}</div>
        <div class="main-title">
          <span class="mbti-code">{{ bird?.id }}</span>
          <span class="mbti-name">· {{ isZh ? bird?.titleCn : bird?.titleEn }}</span>
        </div>
      </div>

      <!-- Flip Card Area -->
      <div class="card-area">
        <FlipCard class="bird-card">
          <template #front>
            <div class="card-face card-front">
              <img :src="isZh ? bird?.imageUrlCn : bird?.imageUrlEn" class="bird-image" alt="Bird Card" />
            </div>
          </template>
          <template #back>
            <div class="card-face card-back">
               <!-- Back content same as front image but zoomed/flipped visual if requested, 
                    OR detailed info. User said "reverse is original image magnified". 
                    Let's just show the image again but maybe add some text overlay if needed.
                    For now, assuming user wants the same image or a detail view.
                    Wait, looking at the provided design image 2, the back seems to be the bird + details below?
                    Actually, design image 2 shows "Bird + Name + Tags". This looks like what happens when you flip?
                    Let's implement the design from Image 2 as the "Back" side.
               -->
               <div class="back-content">
                 <img :src="isZh ? bird?.imageUrlCn : bird?.imageUrlEn" class="bird-image-back" />
                 <div class="back-details">
                   <div class="back-header-row">
                     <div class="back-role">{{ isZh ? bird?.titleCn : bird?.titleEn }} :</div>
                     <div class="type-badge">{{ bird?.id }}</div>
                   </div>
                   <div class="back-bird-name">{{ isZh ? bird?.birdNameCn : bird?.birdNameEn }}</div>
                   <div class="tags">
                    <span class="tag" v-for="(tag, index) in (isZh ? bird?.tagsCn : bird?.tagsEn)" :key="index">
                      {{ tag }}
                    </span>
                  </div>
                 </div>
               </div>
            </div>
          </template>
        </FlipCard>
      </div>

      <!-- Arrow Down -->
      <div class="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="#D8D3C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Description Section -->
      <div class="description-section">
        <div class="section-title">{{ isZh ? '关于这只鸟，你可能不知道的几件事...' : 'Things you might not know about this bird...' }}</div>
        <div class="divider-line"></div>
        
        <div class="text-content">
          <p class="desc-paragraph">
            {{ isZh ? bird?.descCn : bird?.descEn }}
          </p>
        </div>
        
        <!-- MBTI Dimensions (Dynamic based on scores) -->
        <div class="dimensions-card">
           <div class="dim-row blue">
             <div class="dim-label">{{ isZh ? (pIE > 50 ? '外向 (E)' : '内向 (I)') : (pIE > 50 ? 'Extrovert (E)' : 'Introvert (I)') }}</div>
             <div class="dim-val">{{ pIE > 50 ? pIE : (100 - pIE) }}%</div>
             <div class="dim-desc">{{ isZh ? (pIE > 50 ? '更倾向从外部世界获取能量' : '更倾向从内在世界获取能量') : (pIE > 50 ? 'Gains energy from outer world' : 'Gains energy from inner world') }}</div>
             <div class="dim-bar-bg"><div class="dim-bar-fg" :style="{ width: (pIE > 50 ? pIE : (100 - pIE)) + '%' }"></div></div>
           </div>
           <div class="dim-row green">
             <div class="dim-label">{{ isZh ? (pSN > 50 ? '直觉 (N)' : '实感 (S)') : (pSN > 50 ? 'Intuition (N)' : 'Sensing (S)') }}</div>
             <div class="dim-val">{{ pSN > 50 ? pSN : (100 - pSN) }}%</div>
             <div class="dim-desc">{{ isZh ? (pSN > 50 ? '更关注抽象概念、未来可能性' : '更关注具体事实、细节') : (pSN > 50 ? 'Focuses on concepts and possibilities' : 'Focuses on facts and details') }}</div>
             <div class="dim-bar-bg"><div class="dim-bar-fg" :style="{ width: (pSN > 50 ? pSN : (100 - pSN)) + '%' }"></div></div>
           </div>
           <div class="dim-row purple">
             <div class="dim-label">{{ isZh ? (pTF > 50 ? '思考 (T)' : '情感 (F)') : (pTF > 50 ? 'Thinking (T)' : 'Feeling (F)') }}</div>
             <div class="dim-val">{{ pTF > 50 ? pTF : (100 - pTF) }}%</div>
             <div class="dim-desc">{{ isZh ? (pTF > 50 ? '决策时更依赖逻辑' : '决策时更依赖个人价值观') : (pTF > 50 ? 'Decides based on logic' : 'Decides based on personal values') }}</div>
             <div class="dim-bar-bg"><div class="dim-bar-fg" :style="{ width: (pTF > 50 ? pTF : (100 - pTF)) + '%' }"></div></div>
           </div>
           <div class="dim-row yellow">
             <div class="dim-label">{{ isZh ? (pJP > 50 ? '判断 (J)' : '感知 (P)') : (pJP > 50 ? 'Judging (J)' : 'Perceiving (P)') }}</div>
             <div class="dim-val">{{ pJP > 50 ? pJP : (100 - pJP) }}%</div>
             <div class="dim-desc">{{ isZh ? (pJP > 50 ? '倾向于计划和秩序' : '倾向于灵活和即兴') : (pJP > 50 ? 'Prefers planning and order' : 'Prefers flexibility and spontaneity') }}</div>
             <div class="dim-bar-bg"><div class="dim-bar-fg" :style="{ width: (pJP > 50 ? pJP : (100 - pJP)) + '%' }"></div></div>
           </div>
        </div>
      </div>
      
      <!-- Footer Actions -->
      <div class="footer-actions">
        <button class="action-btn secondary" @click="handleRestart">
          <span>{{ isZh ? '重新测试' : 'Restart' }}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M23 4v6h-6M1 20v-6h6" />
             <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        </button>
        <button class="action-btn primary" @click="handleSave">
          <span>{{ isZh ? '保存到手机' : 'Save Image' }}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
        </button>
      </div>
      
      <!-- Bottom Spacing -->
      <div style="height: 40px;"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { birdsData } from '@/data/birds'
import FlipCard from '@/components/FlipCard.vue'
import LanguageSwitch from '@/components/LanguageSwitch.vue' // Add LanguageSwitch

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const isZh = computed(() => appStore.language === 'zh')

// Get bird data based on query param (e.g. ?type=ISTJ)
// Default to first one if not found (for testing)
const birdId = (route.query.type as string) || 'ISTJ'
const bird = computed(() => birdsData.find(b => b.id === birdId) || birdsData[0])

// Get percentages from query params
const pIE = computed(() => parseInt(route.query.pIE as string) || 50)
const pSN = computed(() => parseInt(route.query.pSN as string) || 50)
const pTF = computed(() => parseInt(route.query.pTF as string) || 50)
const pJP = computed(() => parseInt(route.query.pJP as string) || 50)

const handleRestart = () => {
  router.push('/')
}

const handleSave = () => {
  console.log('Save image')
  // TODO: Implement save image logic
}
</script>

<style scoped>
.result-container {
  width: 100%;
  min-height: 100vh;
  background-color: #F6F1E5;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

.header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: #F6F1E5; /* Keep header opaque */
}

.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mini-lang-switch {
  transform: scale(0.8);
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.scroll-content {
  margin-top: 120px; /* Increased to avoid overlap with fixed header */
  padding: 0 28px;
  padding-bottom: 40px;
}

/* Title Section */
.title-section {
  margin-bottom: 24px;
}
.sub-label {
  color: #766630;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  margin-bottom: 4px;
}
.main-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
.mbti-code {
  color: #695A29;
  font-size: 32px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
}
.mbti-name {
  color: #766630;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
}

/* Card Area */
.card-area {
  width: 100%;
  aspect-ratio: 334/500; /* Approximate card ratio */
  margin-bottom: 24px;
}

.bird-card {
  width: 100%;
  height: 100%;
}

.card-face {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
}

.bird-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Back Face Styling */
.back-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: #F0EAD6; 
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Gradient overlay to fade image into background color */
.back-content::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65%;
  background: linear-gradient(to bottom, rgba(240, 234, 214, 0) 0%, #F0EAD6 60%);
  z-index: 5;
  pointer-events: none;
}

.bird-image-back {
  width: 100%;
  height: 100%; 
  object-fit: cover;
  /* Zoom in effect */
  transform: scale(1.5);
  transform-origin: center 40%;
}

.back-details {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  padding: 0 24px;
  text-align: left;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.back-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
}

.back-role {
  color: #564A24;
  font-size: 18px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
}

.type-badge {
  background: black;
  color: white;
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
}

.back-bird-name {
  color: #564A24;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 1.1;
  font-family: Poppins, sans-serif;
}

.tags {
  display: flex;
  gap: 12px;
}

.tag {
  background: #FFFFFF;
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 14px;
  color: #564A24;
  font-weight: 500;
}

/* Scroll Indicator */
.scroll-indicator {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  animation: float 2s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* Description Section */
.description-section {
  position: relative;
  padding-bottom: 100px; /* Space for footer */
}

.section-title {
  color: #766630;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.divider-line {
  width: 68px;
  height: 4px;
  background-color: rgba(179, 173, 154, 0.5);
  margin: 0 auto 24px;
  border-radius: 2px;
}

.text-content {
  color: #766630;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 32px;
  white-space: pre-line; /* Respect newlines in text */
}

/* Dimensions Card (Mock) */
.dimensions-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dim-row {
  border-radius: 12px;
  padding: 12px 16px;
  border: 1px solid;
  position: relative;
  background: white;
}
.dim-row.blue { border-color: #4298B4; background: #ECF4F7; }
.dim-row.green { border-color: #69A765; background: #E9F6E8; }
.dim-row.purple { border-color: #9D84B7; background: #F3EEF8; }
.dim-row.yellow { border-color: #E6C84F; background: #FEF9E6; }

.dim-label { font-weight: 600; font-size: 16px; margin-bottom: 4px; }
.dim-row.blue .dim-label { color: #2C7A94; }
.dim-row.green .dim-label { color: #4A8546; }
.dim-row.purple .dim-label { color: #7B6296; }
.dim-row.yellow .dim-label { color: #C4A62D; }

.dim-val {
  position: absolute;
  top: 12px;
  right: 16px;
  font-weight: bold;
  opacity: 0.6;
}

.dim-desc {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.dim-bar-bg {
  width: 100%;
  height: 6px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 3px;
  overflow: hidden;
}

.dim-bar-fg {
  height: 100%;
  border-radius: 3px;
  background-color: currentColor; /* Inherit color from parent row text color if possible, or specify */
}

/* Specific bar colors */
.dim-row.blue .dim-bar-fg { background-color: #2C7A94; }
.dim-row.green .dim-bar-fg { background-color: #4A8546; }
.dim-row.purple .dim-bar-fg { background-color: #7B6296; }
.dim-row.yellow .dim-bar-fg { background-color: #C4A62D; }



/* Footer Actions */
.footer-actions {
  position: relative; /* Changed from fixed to relative to flow with content */
  margin-top: 40px;
  padding: 0;
  background: transparent;
  display: flex;
  gap: 16px;
  z-index: 10;
}

.action-btn {
  flex: 1;
  height: 48px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
}

.action-btn.secondary {
  border: 1px solid #564A24;
  color: #564A24;
  background: transparent;
}

.action-btn.primary {
  background: #564A24;
  color: white;
  border: none;
}
</style>
