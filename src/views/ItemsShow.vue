<template>
  <div  class="items-show">
    <h2>{{ item.listing }}</h2>
    <img v-bind:src="`${item.images}`" v-bind:alt="item.listing">
    
    <p>username: {{ item.username }}</p>
    <p>ideal trade: {{ item.ideal_trade }}</p>
    <p>Description: {{ item.description }}</p>
    <p>city: {{ item.city }}</p>
    <p>state: {{ item.state }}</p>
    <p>zipcode: {{ item.zipcode }}</p>




    <router-link v-bind:to="`/items/${item.id}/edit`">Update</router-link>
    <button>Contact Info</button>
    <router-link v-bind:to="`/`"> Home</router-link>
  </div>
  
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      item: {},
    };
  },
  created: function() {
    axios.get("/api/items/" + this.$route.params.id).then(response => {
      this.item = response.data;
      console.log("item shown", response.data);
    });
  },  
}
</script>