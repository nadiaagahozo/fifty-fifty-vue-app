<template>
  <div class="items-new">
    <form v-on:submit.prevent="submit()">
      <h1>Create a new item</h1>
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
        <label>Ideal trade:</label>
        <input type="text" class="form-control" v-model="ideal_trade" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="image" />
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
        <label> zipcode:</label>
        <input type="text" class="form-control" v-model="zipcode" />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
      <router-link v-bind:to="`/`"> Home</router-link>
    </form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      listing: "",
      description: "",
      ideal_trade: "",
      username: "",
      image: "",
      city: "",
      state: "",
      zipcode: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
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
    axios
      .post("/api/items", params)
      .then(response => {
      this.$router.push("/items");
    })
    .catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    // showItem: function(item){
    //   console.log(item);
    //   this.currentItem = item;
  },
};
</script>