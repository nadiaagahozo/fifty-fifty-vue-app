<template>
    <div class="home">
      <h1>All Items</h1>

      <div>
        Search by listing:
        <input v-model="listingFilter" />
      </div>

      <div v-for="item in filterBy(items, listingFilter, 'listing', 'description', 'ideal_trade', 'username', 'image', 'city', 'state', 'zipcode')">
        <img v-bind:src="`${item.image}`" v-bind:alt="item.listing" />
      </div>

      <div class="card-group">
        <div class="card" v-for="item in filterBy(items, listingFilter, 'listing', 'description', 'ideal_trade', 'username', 'image', 'city', 'state', 'zipcode')">
          <img v-bind:src="`${item.images}`" v-bind:alt="item.listing" />
          <div class="card-body">
            <router-link v-bind:to="`/items/${item.id}`">
              <h5 class="card-title">{{ item.listing }}</h5>
            </router-link>
          </div>
          <p class="card-text">Items: {{ item.ideal_trade }}</p>        
        </div>
      </div>
    





    </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";


export default  {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      items: [],
      listingFilter: "",
    };
  },
  created: function() {
    this.indexItems();
  },
  methods: {
    indexItems: function() {
      axios.get("/api/items").then(response => {
        this.items = response.data;
        console.log("All Items:", this.Items);
      });
    },
    showItem: function(item){
      console.log(item);
      this.currentItem = item;
    },
  },
};
</script>