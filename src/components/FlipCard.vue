<template>
  <div class="flip-card-container" :class="{ flipped: isFlipped }" @click="toggleFlip">
    <div class="flip-card-inner">
      <!-- Front Side -->
      <div class="flip-card-front">
        <slot name="front"></slot>
      </div>
      <!-- Back Side -->
      <div class="flip-card-back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
import { ref } from 'vue'

const isFlipped = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}
</script> -->

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const props = defineProps<{
  flipped?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:flipped', value: boolean): void
}>()

// 内部状态
const innerFlipped = ref(false)

// 如果父组件传了 flipped，就以父组件为准
watch(
  () => props.flipped,
  (val) => {
    if (typeof val === 'boolean') {
      innerFlipped.value = val
    }
  },
  { immediate: true },
)

const isFlipped = computed({
  get: () => innerFlipped.value,
  set: (val: boolean) => {
    innerFlipped.value = val
    emit('update:flipped', val)
  },
})

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<style scoped>
.flip-card-container {
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
  overflow: hidden;
}

/* Front is default */
.flip-card-front {
  background-color: transparent;
}

/* Back is rotated 180deg initially */
.flip-card-back {
  background-color: #f6f1e5; /* Match card background */
  transform: rotateY(180deg);
  /* Add subtle shadow or border if needed to distinguish back */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
