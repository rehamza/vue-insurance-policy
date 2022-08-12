<template>
  <div class="home">
    <UserDetail msg="Tell us about yourself" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserDetail from "@/components/UserDetail.vue";

export default {
  name: "UserDetailView",
  components: {
    UserDetail,
  },
};
</script>
