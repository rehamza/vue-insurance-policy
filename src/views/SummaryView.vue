<template>
  <div class="home">
    <UserSummary title="Summary" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserSummary from "@/components/UserSummary.vue";

export default {
  name: "SummaryView",
  components: {
    UserSummary,
  },
};
</script>
