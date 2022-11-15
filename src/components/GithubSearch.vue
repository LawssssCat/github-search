<template>
  <section class="album">
    <h3>Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="inputName" @keyup.enter="searchUsers">&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import {EVENT} from '../config/constants';

export default {
  name: 'GithubSearch',
  data() {
    return {
      inputName: ''
    }
  },
  methods: {
    searchUsers() {
      axios.get(`https://api.github.com/search/users?q=${this.inputName}`)
      .then((response) => {
        this.$bus.$emit(EVENT.UPDATE_GITHUB_USER, response.data.items);
      });
    }
  },
}
</script>

<style scoped>
.album {
  /* min-height: 50rem; */
  padding: 3rem;
  padding-top: 5rem;
  background-color: #f7f7f7;
  margin-bottom: 3rem;
}
</style>