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
      let config = {
        baseURL: 'https://api.github.com/search/',
        url: '/users',
        method: 'get',
        params: {
          q: this.inputName
        }
      }
      this.$bus.$emit(EVENT.LOADING_GITHUB_USER, config);
      axios(config).then((response) => {
        this.$bus.$emit(EVENT.UPDATE_GITHUB_USER, {
          isOk: true,
          userList: response.data.items
        });
      },(error) => {
        this.$bus.$emit(EVENT.UPDATE_GITHUB_USER, {
          isOk: false,
          errorMsg: error.message
        });
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