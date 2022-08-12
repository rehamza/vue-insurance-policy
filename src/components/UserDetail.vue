<template>
  <div class="formContainer">
    <h1> {{msg}}</h1>
    <div class="form">
        <label for="name">Name</label>
        <input v-model="user.name" type="text" class="input" name="name" placeholder="Add text" />
   
        <label for="age">Age</label>
        <input :value="user.age"  @input="event => handleAge(event.target.value)" type="number" class="input" name="age" placeholder="age" />

        <label for="country">Where do you live</label>
        <select :value="user.country"  @input="event => handleCountry(event.target.value)" id="country" class="input" name="country">
          <option value="HongKong">Hong Kong</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
        </select>
    </div>
  </div>
  <div class="box">
    <div style="width: 50%; display: inline-block;">
      <div class="radio" >
        <input @input="event => handleRadio(event.target.value)" type="radio" id="html" name="package" value="standard" :checked="user.package === 'standard' ? true : false" />
        <label for="standard" style="margin-top: 5px;">Standard</label>
      </div>
       <div class="radio" >
         <input @input="event => handleRadio(event.target.value)" type="radio" id="html" name="package" value="safe" :checked="user.package === 'safe' ? true : false" />
         <label for="safe" style="margin-top: 5px;" >Safe (+{{safeVal}}{{user.currency}} , 50%)</label>
       </div>
       <div class="radio" >
         <input @input="event => handleRadio(event.target.value)" type="radio" id="html" name="package" value="superSafe" :checked="user.package === 'superSafe' ? true : false" /> 
         <label for="superSafe" style="margin-top: 5px;">Super Safe (+{{superSafeVal}}{{user.currency}} , 75%)</label>

       </div>
    </div>
    <h2>Your premium is: {{user.premium}}{{user.currency}}</h2>
     <button class="button2" @click="handleBack()" >Back</button>
     <button class="button1" @click="handleNext()" >Next</button>
  </div>
</template>

<script>
import {currencyData} from "@/constant/currencyData"
export default {
  name: "UserDetail",
  props: {
    msg: String,
  },
  data: function () {
    return {
      user:{},
      currencyData,
      standardVal: 0,
      safeVal: 0,
      superSafeVal: 0
    }
  } ,
  mounted(){
   this.user = this.$store.getters.getUser; 
  },
  methods: {
    handleBack() {
      this.$router.push('/')
    },
    handleNext() {
      if(this.user.age > 100){
        this.$router.push({path:'/error'})
      }else if(this.user.name && this.user.age && this.user.country){ 
        this.$store.commit("setUser" , this.user)
        this.$router.push('/summary')
      }else{
        alert("Name , Age , Country fields are required")
      }
    },
     handleAge(v) {
      this.user.age = v
      const currency = this.currencyData.find(c => c.country === this.user.country)
      this.standardVal = 10 * this.user.age * currency.rate
      this.user.premium =  this.standardVal
      this.safeVal = this.user.premium * (50/100)
      this.user.currency = currency.currencyCode
      this.superSafeVal = this.user.premium * (75/100)
    },
    handleCountry(v) {
      const currency = this.currencyData.find(c => c.country === v)
      this.user.country = v
      this.standardVal = 10 * this.user.age * currency.rate
      this.user.premium =  this.standardVal
      this.safeVal = this.user.premium * (50/100)
      this.user.currency = currency.currencyCode
      this.superSafeVal = this.user.premium * (75/100)

    },
    handleRadio(v) {
       if(v === "standard"){
         this.user.premium =  this.standardVal
       }else if(v === "safe"){
         this.user.premium =  this.safeVal + this.standardVal
       }else{
         this.user.premium =  this.superSafeVal + this.standardVal
       }
       this.user.package = v
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .box {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  height: 50%;
  width: 40%;
  left: 50%;
  top: 90%;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
}
.formContainer{
    position: absolute;
    top: 30%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
}
h1{
  margin-top: 50px;
}
.radio{
  display: flex;
  margin-top: 15px;
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
}
.form{
  width: 40%;
  display: inline-block  
}
label{
  margin-left: 10px;
  margin-top: 10px;
  float: left;
}
.input{
  width: 100%;
  padding: 12px 20px;
  margin: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
