<template>
  <div class="upload">
    <form v-on:submit.prevent="submit()">
      <h1>Upload</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Listing Name:</label> 
        <input type="text" class="form-control" v-model="listing">
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="description">
      </div>
      <div class="form-group">
        <label>Ideal Trade:</label>
        <input type="text" class="form-control" v-model="idealTrade">
      </div>
      <div class="form-group">
        <label>City</label>
        <input type="text" class="form-control" v-model="city">
      </div>
      <div class="form-group">
        <label>State</label>
        <input type="text" class="form-control" v-model="state">
      </div>
      <div class="form-group">
        <label>Zip Code</label>
        <input type="text" class="form-control" v-model="zipcode">
      </div>
      <div class="form-group">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile">
          <label class="custom-file-label" for="customFile">Choose file</label>
          <!-- <img v-bind:src="`${item.image}`" v-bind:alt="item.listing"> -->
        </div>
        <div>
          <button>Cancel</button>
          <button v-on:click="createItem()">Create</button>
        </div>
      </div>
      <div>
     
      
        
      </div>
      
    </form>
    



  </div>
</template>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      items: [],
      newItemListing: "",
      newItemDescription: "",
      newItemIdeal_trade: "",
      newItemCity: "",
      newItemState: "",
      newItemZipcode: "",
      currentItem: {},
    };
  },
  methods: {
    createItem: function(){
      console.log("Making a new recipe");

      var params = {
        listing: this.newItemListing,
        description: this.newItemDescription,
        ideal_trade: this.newIdealTrade,
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
    showItem: function(item){
      console.log(item);
      this.currentItem = item;
    },
  }
};
</script>