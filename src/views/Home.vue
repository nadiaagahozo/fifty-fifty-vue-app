<template>
  <div class="home">
    <h1>All Items</h1>
    <div v-for="item in items">
      <img v-bind:src="`${item.images}`" v-bind:alt="item.listing">
      <h2> {{ item.listing }} </h2>
      <p>username: {{ item.username }}</p>
      <p>ideal trade: {{ item.ideal_trade }}</p>
      <router-link v-bind:to="`/items/${item.id}`">More Info</router-link>
      
    </div>

    
    



  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      items: [],
      newItemListing: "",
      newItemDescription: "",
      newItemIdealTrade: "",
      newItemUsername: "",
      newItemImage: "",
      newItemCity: "",
      newItemState: "",
      newItemZipcode: "",
      currentItem: {},
    };
  },
  created: function() {
    this.indexItems();
  },
  methods: {
    indexItems: function() {
      axios.get("/api/items").then(response => {
        this.items = response.data;
        console.log("All Items", this.items)
      });
    },
    showItem: function(item){
      console.log(item);
      this.currentItem = item;
    },
    createItem: function(){
      console.log("New Item");
      var params = {
      listing: this.newItemListing,
      description: this.newItemDescription,
      ideal_trade: this.newItemIdealTrade,
      username: this.newItemUsername,
      image: this.newItemImage,
      city: this.newItemCity,
      state: this.newItemState,
      zipcode: this.newItemZipcode,
      };
      axios.post("/api/items", params).then(response => {
        console.log("Success", response.data);
        this.items.push(response.data);
      })
      .catch(error => console.log(error.response));
    },
    updateItem: function(item){
     var params = {
        listing: this.item.listing,
        description: this.item.description,
        ideal_trade: this.item.ideal_trade,
        username: this.item.username,
        image: this.item.image,
        city: this.item.city,
        state: this.item.state,
        zipcode: this.item.zipcode,
      };
      axios.patch("/api/items/" + item.id, params).then(response => {
        console.log("Success", response.data);
      });
    },
  },
}
</script>
