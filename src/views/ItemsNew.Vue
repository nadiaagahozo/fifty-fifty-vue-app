<template>
  <div class="items-new">
    <!-- <form v-on:submit.prevent="createItem(item)">
      <h1>New Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div v-for="item in items">
        <div class="form-group">
        <label>Listing:</label> 
        <input type="text" class="form-control" v-model="item.listing">
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="item.description">
      </div>
      <div class="form-group">
        <label>Ideal Trade:</label>
        <input type="text" class="form-control" v-model="item.ideal_trade">
      </div>
      <div class="form-group">
        <label>City</label>
        <input type="text" class="form-control" v-model="item.city">
      </div>
      <div class="form-group">
        <label>State</label>
        <input type="text" class="form-control" v-model="item.state">
      </div>
      <div class="form-group">
        <label>Zip Code</label>
        <input type="text" class="form-control" v-model="item.zipcode">
      </div>
      <div class="form-group">
        <label>Image (Max of 4)</label>
        <input type="text" class="form-control" v-model="item.images">
      </div>


      
      <!-- <div>
          Description: <input type="text" v-model="description" />
          Ideal Trade: <input type="text" v-model="ideal_trade" />
          Image: <input type="text" v-model="images" />
          <img v-bind:src="`${item.images}`" v-bind:alt="item.listing">
          City: <input type="text" v-model="city" />
          State: <input type="text" v-model="state" />
          Zipcode: <input type="text" v-model="zipcode" /> 
       </div>  -->
        
    <!-- </form>  -->

    
    <div>
      <img v-if="status" v-bind:src="`https://http.cat/${status}`" />
      <form v-on:submit.prevent="submit()">
        <h1>New Post</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Listing:</label>
          <input type="text" class="form-control" v-model="listing" />
        </div>
        <div class="form-group">
          <label>Description:</label>
          <input type="text" class="form-control" v-model="description" />
        </div>
        <div class="form-group">
          <label>Ideal Trade:</label>
          <input type="text" class="form-control" v-model="ideal_trade" />
        </div>
        <div class="form-group">
          <label>City:</label>
          <input type="text" class="form-control" v-model="city" />
        </div>

        <div class="form-group">
          <label>State:</label>
          <input type="text" class="form-control" v-model="state" />
        </div>

        <div class="form-group">
          <label>Zip Code:</label>
          <input type="text" class="form-control" v-model="zipcode" />
        </div>

        <div class="form-group">
          <label>Image:</label>
          <input type="text" class="form-control" v-model="images" />
        </div>
      </form>
    </div>

    <button v-on:click="createItem()"> Post!</button>
    <a href="/items" class="button primary">Home</a>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      items: [],
      listing: "",
      description: "",
      ideal_trade: "",
      images: "",
      city: "",
      state: "",
      zipcode: "",
      status: "",
      errors: [],
      currentItem: {},
    };
  },
  methods: {
  created: function(){
    this.items = response.data;
  },
    createItem: function(){
      console.log("New Item");
      var params = {
      listing: this.listing,
      description: this.description,
      ideal_trade: this.ideal_trade,
      images: this.images,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      };
      axios.post("/api/items", params).then(response => {
        console.log("Success", response.data);
        this.items.push(response.data);
        this.listing = "";
        this.description = "";
        this.ideal_trade = "";
        this.images = "";
        this.city = "";
        this.state = "";
        this.zipcode = "";
        this.$router.push("/items");
      })
      .catch(error => console.log(error.response));
    },
  },
  showItem: function(item){
    console.log(item);
    this.currentItem = item;
  },
};
</script>

