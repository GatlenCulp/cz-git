import { onMounted, onBeforeUnmount, ref } from "vue";
import type { Ref } from "vue";

/* eslint-disable prettier/prettier */
/* prettier-ignore */
const emojiArr = ["🎉", "🐛", "💚", "🔍️", "💫", "👷", "🎡", "🧱", "💄", "⚡️", "♻️", "🔧", "✨", "🔨", "🏷️", "🚀", "🌐", "📝", "📚", "✅", "🔖", "📦️"];

export const useEmojiItem = (): Ref<string> => {
  const emoji = ref("✨");
  onMounted(() => {
    const interval = setInterval(() => {
      emoji.value = emojiArr[Math.floor(Math.random() * emojiArr.length)];
    }, 340);
    onBeforeUnmount(() => {
      clearInterval(interval);
    });
  })
  return emoji
};
