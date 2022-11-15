<template>
  <div class="row">
    <h1 v-if="isFirst">Welcome to use!</h1>
    <h1 v-show="isLoading">Loading...</h1>
    <h1 v-show="errorMsg" style="color: red">响应异常：{{errorMsg}}</h1>
    <div v-show="userList.length" class="card" v-for="(user) in userList" :key="user.id">
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
    const context = this;
    this.$bus.$on(EVENT.LOADING_GITHUB_USER, function() {
      if(context.isFirst) context.isFirst = false;
      context.isLoading = true;
      context.errorMsg = '';
    });
    this.$bus.$on(EVENT.UPDATE_GITHUB_USER, function(resultObj) {
      context.isLoading = false;
      if(resultObj.isOk) {
        context.userList = resultObj.userList;
      } else {
        context.errorMsg = resultObj.errorMsg;
      }
    });
  },
  beforeDestroy() {
    this.$bus.$off(EVENT.UPDATE_GITHUB_USER)
    this.$bus.$off(EVENT.LOADING_GITHUB_USER)
  },
  data() {
    return {
      isFirst: true,
      isLoading: false,
      userList: [],
      errorMsg: ''
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