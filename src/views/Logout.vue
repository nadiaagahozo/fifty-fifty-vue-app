<template>
  <div class="logout">
    <p> {{message}} </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.message = "You are Logged Out.";
  }
};
</script>