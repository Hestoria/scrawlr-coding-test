<script lang="ts">
import { v4 } from "uuid";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Upvote from "./components/Upvote.vue";
import { useStore } from "./store";
import { MutationType } from "./store/mutations";
import { UpvoteId, UpvoteKey } from "./store/state";

export default defineComponent({
  setup() {
    const store = useStore();
    const moveItem = (fromUpvoteType: UpvoteKey) => {
      let toUpvoteType: UpvoteKey = "notFill";
      switch (fromUpvoteType) {
        case "notSelected":
          toUpvoteType = "selected";
          break;
        case "selected":
          toUpvoteType = "notFill";
          break;
        case "notFill":
          toUpvoteType = "notSelected";
          break;
      }
      store.commit(MutationType.MoveItem, { fromUpvoteType, toUpvoteType });
    };
    const AddItem = (upvoteType: UpvoteKey, data: UpvoteId) => {
      store.commit(MutationType.AddItem, { upvoteType, data });
    };
    const getUUid = () => {
      return v4();
    };
    return { moveItem, getUUid, AddItem };
  },
  name: "App",
  computed: { ...mapState(["Upvotes"]) },
  methods: {},
  components: { Upvote },
});
</script>

<template>
  <div class="wire-frame-container">
    <!-- type script error -->
    <!-- let key: keyof Upvotes -->
    <div class="Upvote-container" v-for="(value, key) in Upvotes">
      <Upvote
        v-for="value in Upvotes[key]"
        :key="value"
        :upvoteType="key"
        @Click="moveItem(key)"
      />
      <div class="upvote-add-btn upvote-item" @click="AddItem(key, getUUid())">
        +
      </div>
    </div>
  </div>
</template>

<style scope>
.wire-frame-container {
  justify-self: center;
  max-width: 720px;
  margin: auto;
  background-color: white;
  border-radius: 15px;
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
.upvote-add-btn {
  font-size: 24px;
  cursor: pointer;
  height: 30px;
  width: 30px;
}
.Upvote-container {
  padding: 14px;
  display: flex;
}
</style>
