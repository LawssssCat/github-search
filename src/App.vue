<template>
  <div class="container">
    <GithubSearch></GithubSearch>
    <UserList></UserList>
  </div>
</template>

<script>
import GithubSearch from './components/GithubSearch.vue';
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    GithubSearch,
    UserList,
  }
}
</script>

<style>

</style>
