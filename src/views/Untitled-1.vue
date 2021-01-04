
// listing: "",
//       description: "",
//       ideal_trade: "",
//       username: "",
//       image: "",
//       city: "",
//       state: "",
//       zipcode: "",
//       currentItem: {},
//       errors: [],


//   submit: function() {
//       var params = {
//       listing: this.item.listing,
//       description: this.item.description,
//       ideal_trade: this.item.ideal_trade,
//       username: this.item.username,
//       image: this.item.image,
//       city: this.item.city,
//       state: this.item.state,
//       zipcode: this.item.zipcode,
//     };
//     axios
//       .post("/api/items", params)
//       .then(response => {
//       this.$router.push("/items");
//     })
//     .catch(error => {
//         this.errors = error.response.data.errors;
//       });
//     },
// </script>

Copy and paste variables:
listing: "",
description: "",
ideal_trade: "",
username: "",
image: "",
city: "",
state: "",
zipcode: "",
currentItem: {},
errors: [],

listing: 
description: 
ideal_trade: 
username: 
image: 
city: 
state: 
zipcode: 

listing 
description 
ideal_trade 
username 
image 
city 
state 
zipcode

item.listing
item.description
item.ideal_trade
item.username
item.image
item.city
item.state
item.zipcode


this.item.listing,
this.item.description,
this.item.ideal_trade,
this.item.username,
this.item.image,
this.item.city,
this.item.state,
this.item.zipcode,

this.item.listing
this.item.description
this.item.ideal_trade
this.item.username
this.item.image
this.item.city
this.item.state
this.item.zipcode



newItemListing
newItemDescription
newItemIdealTrade
newItemUsername
newItemImage
newItemCity
newItemState
newItemZipcode

this.newItemListing
this.newItemDescription
this.newItemIdealTrade
this.newItemUsername
this.newItemImage
this.newItemCity
this.newItemState
this.newItemZipcode

this.newItemListing = "";
this.newItemDescription = "";
this.newItemIdealTrade = "";
this.newItemUsername = "";
this.newItemImage = "";
this.newItemCity = "";
this.newItemState = "";
this.newItemZipcode = "";














// <template>
<!-- //   <div class="items-new">
//     <h1>New Post</h1> -->
<!-- //     <div>
//       Listing: <input type="text" v-model="newItemListing" />
//       Description: <input type="text" v-model="newItemDescription" />
//       Ideal_trade: <input type="text" v-model="newItemIdealTrade" />
//       Image: <input type="text" v-model="newItemImage" />
//       City: <input type="text" v-model="newItemCity" />
//       State: <input type="text" v-model="newItemState" />
//       Zipcode: <input type="text" v-model="newItemZipcode" />
//       <button v-on:click="createItem()"> New Post</button>
//     </div> -->
    
<!-- //     <router-link v-bind:to="`/`"> Home</router-link>
//     <h1>All Photos</h1>
//         <div v-for="photo in photos">
//           <h2>{{ photo.name }}</h2>
<!--  -->
<!-- //   </div> -->
<!-- // </template> -->

<!-- // <script> --> -->
// import axios from "axios";

// export default {
//   data: function() {
//     return {
//       items: [],
//       newItemListing: "",
//       newItemDescription: "",
//       newItemIdealTrade: "",
//       newItemImage: "",
//       newItemCity: "",
//       newItemState: "",
//       newItemZipcode: "",
//       currentItem: {},
//     };
//   },
//   created: function(){
//     this.items = response.data;
//   },
//   createItem: function(){
//     console.log("New Item");
//     var params = {
//     listing: this.newItemListing,
//     description: this.newItemDescription,
//     ideal_trade: this.newItemIdealTrade,
//     image: this.newItemImage,
//     city: this.newItemCity,
//     state: this.newItemState,
//     zipcode: this.newItemZipcode,
//     };
//     axios.post("/api/items", params).then(response => {
//       console.log("Success", response.data);
//       this.items.push(response.data);
//       this.newItemListing = "";
//       this.newItemDescription = "";
//       this.newItemIdealTrade = "";
//       this.newItemImage = "";
//       this.newItemCity = "";
//       this.newItemState = "";
//       this.newItemZipcode = "";
//     })
//     .catch(error => console.log(error.response));
//   },
//   // showItem: function(item){
//   //   console.log(item);
//   //   this.currentItem = item;
//   // },
// };
<!-- // </script> -->

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
        <input type="text" class="form-control" v-model="item.images">
      </div>

      <div>
        <input type="submit" class="btn btn-primary" value="Submit">

      </div>

      <button v-on:click="destroyItem(item)">Delete Item</button>
      <router-link v-bind:to="`/items/`">Cancel</router-link>


    </form>

     
    



  </div>