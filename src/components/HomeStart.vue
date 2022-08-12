<template>
  <div class="box">
    <h1> {{title}}</h1>
    <p>Let's buy some insurance. It is going to take only a few steps</p>
    <button class="button" @click="handleStart()" >Start</button>
  </div>

</template>

<script>
export default {
  name: "HomeStart",
  props: {
    title: String,
  },
  methods: {
    handleStart() {
      this.$router.push('/user')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .box {
    border-radius: 5px;
    background: #f2f2f2;
    box-shadow: rgba(254, 205, 211, 0.1) 0px 4px 16px, rgba(254,205,211,0.1) 0px 8px 24px, rgba(254,205,211, 0.1) 0px 16px 56px;
    height: 50%;
    width: 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
}
h1{
  margin-top: 50px;
}
p {
  margin: 20px;
}
.button {
  height: 3rem;
  width: 10rem;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

</style>
