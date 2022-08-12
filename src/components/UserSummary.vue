<template>
  <div class="box">
    <h1> {{ title }}</h1>
    <h5>Name: {{ user.name }}</h5>
    <h5>Age: {{ user.age }}</h5>
    <h5>Where do you live: {{ user.country }}</h5>
    <h5>Package: {{ user.package }}</h5>
    <h5>Premium: {{ user.premium }}{{ user.currency }}</h5>

    <button class="button2" @click="handleBack()">Back</button>
    <button class="button1" @click="handleBuy()">Buy</button>
  </div>
</template>

<script>
export default {
  name: "UserSummary",
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  props: {
    title: String,
  },
  methods: {
    handleBack() {
      this.$router.push('/user')
    },
    handleBuy() {
      const u = {
        name: "",
        age: 0,
        country: "HongKong",
        package: "standard",
        premium: 0,
        currency: ""
      }
      this.$store.commit("setUser", u)
      this.$router.push('/')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  border-radius: 5px;
  background: #f2f2f2;
  box-shadow: rgba(254, 205, 211, 0.1) 0px 4px 16px, rgba(254, 205, 211, 0.1) 0px 8px 24px, rgba(254, 205, 211, 0.1) 0px 16px 56px;
  height: 70%;
  width: 40%;
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}

h1 {
  margin-top: 50px;
}

p {
  margin: 20px;
}

.button1 {
  height: 2.5rem;
  width: 7rem;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-left: 8px;
  margin-top: 20px;
}

.button2 {
  height: 2.5rem;
  width: 7rem;
  background-color: white;
  color: black;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-top: 20px;
}
</style>
