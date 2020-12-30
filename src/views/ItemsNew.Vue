<template>
  <div class="items-new">
    <h1>New Post</h1>
    <div>
      Listing: <input type="text" v-model="newItemListing" />
      Description: <input type="text" v-model="newItemDescription" />
      Ideal_trade: <input type="text" v-model="newItemIdealTrade" />
      Image: <input type="text" v-model="newItemImage" />
      <img v-bind:src="`${item.images}`" v-bind:alt="item.listing">
      City: <input type="text" v-model="newItemCity" />
      State: <input type="text" v-model="newItemState" />
      Zipcode: <input type="text" v-model="newItemZipcode" />
      <button v-on:click="createItem()"> New Post</button>
    </div>
    
    <router-link v-bind:to="`/`"> Home</router-link>
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
      newItemImage: "",
      newItemCity: "",
      newItemState: "",
      newItemZipcode: "",
      currentItem: {},
    };
  },
  methods: {
  // created: function(){
  //   this.items = response.data;
  // },
    createItem: function(){
      console.log("New Item");
      var params = {
      listing: this.newItemListing,
      description: this.newItemDescription,
      ideal_trade: this.newItemIdealTrade,
      image: this.newItemImage,
      city: this.newItemCity,
      state: this.newItemState,
      zipcode: this.newItemZipcode,
      };
      axios.post("/api/items", params).then(response => {
        console.log("Success", response.data);
        this.items.push(response.data);
        this.newItemListing = "";
        this.newItemDescription = "";
        this.newItemIdealTrade = "";
        this.newItemImage = "";
        this.newItemCity = "";
        this.newItemState = "";
        this.newItemZipcode = "";
      })
      .catch(error => console.log(error.response));
    },
  },
  // showItem: function(item){
  //   console.log(item);
  //   this.currentItem = item;
  // },
};
</script>

