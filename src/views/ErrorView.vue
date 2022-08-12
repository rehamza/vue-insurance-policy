<template>
  <div class="home">
    <HandleError title="Ooops" msg="Your age is over our accepted limit." />
  </div>
</template>

<script>
// @ is an alias to /src
import HandleError from "@/components/HandleError.vue";

export default {
  name: "HomeView",
  components: {
    HandleError,
  },
};
</script>
