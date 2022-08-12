<template>
  <div class="home">
    <HomeStart title="Hello There!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeStart from "@/components/HomeStart.vue";

export default {
  name: "HomeView",
  components: {
    HomeStart,
  },
};
</script>
