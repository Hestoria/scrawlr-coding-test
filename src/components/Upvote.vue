<script lang="ts">
import { defineComponent, PropType } from "vue";
import { UpvoteId } from "../store/state";

export default defineComponent({
  name: "Upvote",
  props: {
    upvoteType: {
      required: true,
      type: String as PropType<UpvoteId>,
    },
  },
});
</script>

<template>
  <div :class="upvoteType" class="upvote-item">^</div>
</template>

<style scoped>
.notFill {
  background-color: #ffcccc;
}

.notSelected {
  background-color: #f4f6f8;
}

.selected {
  background-color: #e5e8fd;
}
.upvote-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.25rem;
  height: 30px;
  width: 30px;
}
</style>
