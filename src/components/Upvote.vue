<script lang="ts">
import { defineComponent, PropType } from "vue";
import ArrowIconComponent from "../assets/arrow.svg?component";
import { UpvoteId } from "../store/state";

export default defineComponent({
  name: "Upvote",
  components: { ArrowIconComponent },
  props: {
    upvoteType: {
      required: true,
      type: String as PropType<UpvoteId>,
    },
  },
});
</script>

<template>
  <div :class="upvoteType" class="upvote-item">
    <ArrowIconComponent class="upvote-icon" />
  </div>
</template>

<style scoped>
.notFill {
  background-color: #fdebeb;
}

.notFill .upvote-icon {
  fill: #d71515;
  stroke: #d71515;
}

.notSelected {
  background-color: #f4f6f8;
}

.notSelected .upvote-icon {
  fill: #343a40;
  stroke: #343a40;
}

.selected {
  background-color: #e5e8fd;
}

.selected .upvote-icon {
  fill: #253cf2;
  stroke: #253cf2;
}
</style>
