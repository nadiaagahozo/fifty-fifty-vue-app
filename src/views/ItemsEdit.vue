<template>
  <div class="items-edit">
    <form v-on:submit.prevent="updateItem(item)">
      <h1>Update</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Username:</label> 
        <input type="text" class="form-control" v-model="item.username">
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
        <input type="image" class="form-control" v-model="item.image">
      </div>

      <div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </div>
      
      

    </form>


    



  </div>
</template>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      errors: [],
      item: {},
    };
  },
  created: function() {
    axios.get("/api/items/" + this.$route.params.id).then(response => {
      this.item = response.data;
      console.log("item shown", response.data);
    });
  },
  methods: {
    updateItem: function(item){
      var params = {
        username: item.username,
        description: item.description,
        image: item.image,
        ideal_trade: item.ideal_trade,
        city: item.city,
        state: item.state,
        zipcode: item.zipcode
      };
      axios
        .then(response => {
          this.$router.push("/posts");
        })
        .catch(error => {
          this.errors = error.response.data.errors;

      });
    },
    // destroyItem: function(item){
    //   axios.delete("/api/items/" + items.id).then(response => {
    //     console.log("item Deleted", response.data);
    //     var index = this.item.indexOf(item)
    //     this.item.splice(index, 1);
    //   });
    // },
  },
};
</script>