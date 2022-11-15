<template>
  <div class="row">
    <div class="card" v-for="(user) in userList" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px">
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
import {EVENT} from '../config/constants';

export default {
  name: 'GithubUserList',
  mounted() {
    this.$bus.$on(EVENT.UPDATE_GITHUB_USER, this.handleUpdateUserList);
  },
  beforeDestroy() {
    this.$bus.$off(EVENT.UPDATE_GITHUB_USER)
  },
  data() {
    return {
      userList: []
    }
  },
  methods: {
    handleUpdateUserList(userList) {
      this.userList = userList;
    }
  },
}
</script>

<style lang="scss" scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
    img {
      margin-bottom: .75rem;
      // border-radius: 100px;
    }
    .card-text {
      font-size: 85%;
    }
  }
</style>