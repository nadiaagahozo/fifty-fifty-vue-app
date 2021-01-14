<template>
  <div  class="items-show">
    <img v-bind:src="`${item.images}`" v-bind:alt="item.listing">
    <section>
      <h3>{{ item.listing }}</h3>
      <div class="table-wrapper">
        <table class="alt">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Username</b></td>
              <td>{{ item.username }}</td>
            </tr>
            <tr>
              <td><b>Ideal Trade</b></td>
              <td>{{ item.ideal_trade }}</td>
            </tr>
            <tr>
              <td><b>Description</b></td>
              <td> {{ item.description }}</td>
            </tr>
            <tr>
              <td><b>City</b></td>
              <td>{{ item.city }}</td>
            </tr>
            <tr>
              <td><b>State and Zipcode</b></td>
              <td> {{ item.state }} -- {{ item.zipcode }}</td>
            </tr>
          </tbody>
        </table>
      </div>
		</section>



    <a href="`/items`" class="button small">Contact Info</a>
    <a v-bind:href="`/items/${item.id}/edit`" class="button primary small">Update</a>
    <a v-bind:href="`/items`" class="button small">Home</a>
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