<template>
  <div class="container">
    <GithubSearch></GithubSearch>
    <GithubUserList></GithubUserList>
  </div>
</template>

<script>
import GithubSearch from './components/GithubSearch.vue';
import GithubUserList from './components/GithubUserList.vue'

export default {
  name: 'App',
  components: {
    GithubSearch,
    GithubUserList,
  }
}
</script>

<style>

</style>
