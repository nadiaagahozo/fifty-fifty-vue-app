<template>
    <div class="home">

      <!-- Main -->
        <div id="main">
          <div class="inner">
            <section class="tiles">
              <!-- <article v-for="item in items" class="style1">
                <span class="image">
                  <img src="images/pic01.jpg" alt="" />
                </span>
                <a href="/items/`${item.images}`">
                  <h2>{{item.listing}}</h2>
                  <h2>{{item.username}}</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article> -->
              <!-- <article class="style2">
                <span class="image">
                  <img src="images/pic02.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Lorem</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article> -->
              <!-- <article class="style3">
                <span class="image">
                  <img src="images/pic03.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Feugiat</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article> -->
              <!-- <article class="style4">
                <span class="image">
                  <img src="images/pic04.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Tempus</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article> -->
              <article v-for="item in items" class="style5">
                <span class="image fit">
                  <img v-bind:src="`${item.images}`" v-bind:alt="item.listing" width="200" height="300" />
                </span>
                <a v-bind:href="`/items/${item.id}`">

                  <h2>{{item.listing}}</h2>
                  <h3>{{item.username}}</h3>
                  <div class="content">
                    <p>{{ item.ideal_trade }}</p>
                  </div>
                </a>
              </article>
              <!-- <article class="style6">
                <span class="image">
                  <img src="images/pic06.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Veroeros</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article>
              <article class="style2">
                <span class="image">
                  <img src="images/pic07.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Ipsum</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article>
              <article class="style3">
                <span class="image">
                  <img src="images/pic08.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Dolor</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article>
              <article class="style1">
                <span class="image">
                  <img src="images/pic09.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Nullam</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article>
              <article class="style5">
                <span class="image">
                  <img src="images/pic10.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Ultricies</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article>
              <article class="style6">
                <span class="image">
                  <img src="images/pic11.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Dictum</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article>
              <article class="style4">
                <span class="image">
                  <img src="images/pic12.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Pretium</h2>
                  <div class="content">
                    <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                  </div>
                </a>
              </article> -->
            </section>
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