<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="about-container">
      <img :src="getCurrentUser.avatar" alt="">
      <div class="about-container-title">
        <div class="about-container-title-name">{{getCurrentUser.name}}</div>
        <div class="about-container-title-email">{{getCurrentUser.email}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapGetters(['getCurrentUser'])
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-container {
    margin: 0 auto;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    border-radius: 14px;
    width: 350px;
    height: 70px;
    padding: 10px 15px;
    align-items: center;
    img {
      border: 2px solid #42b983;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 1em;
    }
    &-title {
      flex: 1;
      font-weight: bold;
      &-name {
        font-size: 18px;
        color: #1C1C1C;
      }
      &-email {
        color: #657786;
      }
    }
  }
}
</style>
