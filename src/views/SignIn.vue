<template>
  <div class="signin">
    <h1>Vue.js App Sign In</h1>
    <form class="signin-form" @submit.prevent.stop="handleSubmit">
      <div class="signin-form-unit">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="signin-form-unit">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="signin-form-button">
        <button class="normal-btn" type="submit">Sign In</button>
      </div>
    </form>
    <button class="thirdParty-btn" @click.stop.prevent="loginByFacebook">
      <img src="../assets/facebook-signin.svg" alt="" />
      <span>Sign In with Facebook</span>
    </button>
    <div>
      <button class="thirdParty-btn" @click.stop.prevent="loginByGoogle">
        <img src="../assets/google-signin.svg" alt="" />
        <span>Sign In with Google</span>
      </button>
    </div>
  </div>
</template>

<script>
import authAPI from "../apis/authorize";
import { Toast } from "../utils/toast";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      isLoading: "false",
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.email.trim() || !this.password.trim()) return;
      try {
        const { data } = await authAPI.signin({
          email: this.email,
          password: this.password,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        localStorage.setItem("signInToken", data.token);
        this.$store.dispatch("setCurrentUser");
        Toast.fire({
          icon: "success",
          title: data.message,
        });
        this.$router.push("/about");
      } catch (error) {
        console.log(error.message);
        Toast.fire({
          icon: "error",
          title: error.message,
        });
      }
    },
    loginByFacebook() {
      window.location.href =
        "https://login-guan-api.herokuapp.com/api/auth/facebook" ||
        "http://localhost:3000/api/auth/facebook";
    },
    loginByGoogle() {
      window.location.href =
        "https://login-guan-api.herokuapp.com/api/auth/google" ||
        "http://localhost:3000/api/auth/google";
    },
  },
};
</script>

<style lang="scss" scoped>
.signin {
  &-form {
    margin: 0 auto;
    width: 300px;
    &-unit {
      text-align: start;
      margin-bottom: 1em;
      label {
        display: block;
        padding-bottom: 0.5em;
        font-weight: bold;
      }
      input {
        width: 98%;
        height: 1.5em;
        border: none;
        border-bottom: 1px solid #42b983;
        outline: none;
      }
    }
    &-button {
      .normal-btn {
        border: 1px solid #42b983;
        background-color: #42b983;
        color: white;
        margin-bottom: 1em;
        width: 300px;
        font-size: 1em;
        height: 2.2em;
        cursor: pointer;
        border-radius: 4px;
        &:hover {
          background-color: white;
          color: #42b983;
          font-weight: bold;
        }
      }
    }
  }
  .thirdParty-btn {
    margin: auto;
    border: 1px solid #42b983;
    width: 300px;
    margin-bottom: 1em;
    border-radius: 4px;
    background-color: white;
    color: #42b983;
    font-size: 1em;
    font-weight: bold;
    height: 2.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #42b983;
      color: white;
      font-weight: normal;
    }
    img {
      margin-right: 0.5em;
      width: 20px;
      height: 20px;
    }
    span {
      margin: auto;
    }
  }
}
</style>