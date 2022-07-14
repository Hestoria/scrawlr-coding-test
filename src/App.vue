<script lang="ts">
import { v4 } from "uuid";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import AddIconComponent from "./assets/add.svg?component";
import Upvote from "./components/Upvote.vue";
import { useStore } from "./store";
import { MutationType } from "./store/mutations";
import { UpvoteId, UpvoteKey } from "./store/state";

export default defineComponent({
  setup() {
    const store = useStore();
    const moveItem = (fromUpvoteType: UpvoteKey): void => {
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

    const getUUid = (): string => {
      return v4();
    };

    return { moveItem, getUUid, AddItem };
  },
  name: "App",
  computed: { ...mapState(["Upvotes"]) },
  methods: {},
  components: { AddIconComponent, Upvote },
});
</script>

<template>
  <div class="wire-frame-container">
    <!-- type script error -->
    <!-- let key: keyof Upvotes -->
    <div class="upvote-row" v-for="(value, key) in Upvotes">
      <div class="upvote-container">
        <Upvote
          v-for="value in Upvotes[key]"
          :key="value"
          :upvoteType="key"
          @Click="moveItem(key)"
        />
      </div>
      <div class="upvote-add-btn upvote-item" @click="AddItem(key, getUUid())">
        <AddIconComponent />
      </div>
    </div>
  </div>
</template>

<style scope>
.wire-frame-container {
  overflow: auto;
  justify-self: center;
  max-width: 1024px;
  margin: auto;
  background-color: white;
  border-radius: 15px;
}
.upvote-add-btn {
  font-size: 24px;
  background-color: #f4f6f8;
}
.upvote-container {
  padding: 12px;
  margin: 20px;
  display: flex;
  border: 2px solid gray;
  border-radius: 15px;
  overflow: overlay;
  height: 86px;
  width: 85%;
}
.upvote-row {
  align-items: center;
  display: flex;
}
</style>
