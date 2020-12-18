<template>
  <div class="update">
    <form v-on:submit.prevent="submit()">
      <h1>Update</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Username:</label> 
        <input type="text" class="form-control" v-model="username">
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
        <label>Image (Max of 4)</label>
        <input type="image" class="form-control" v-model="image">
      </div>

      <div>
        <button>Cancel</button>
        <button v-on:click="destroyItem(currentItem)">Delete</button>
        <button v-on:click="updateItem(currentItem)">Update</button>
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
      currentItem: {},
    };
  },
  methods: {
    updateItem: function(item){
      var params = {
        username: item.username,
        description: item.description,
        image: item.image,
        // ideal_trade: item.ideal_trade,
        city: item.city,
        state: item.state,
        zipcode: item.zipcode
      };
      axios.patch("/api/items/" + item.id, params).then(response => {
        console.log("Success", response.data);
      });
    },
    destroyItem: function(item){
      axios.delete("/api/items/" + items.id).then(response => {
        console.log("item Deleted", response.data);
        var index = this.item.indexOf(item)
        this.item.splice(index, 1);
      });
    },
  },
};
</script>