<template>
  <div>
    <v-app-bar dense dark class="d-flex">
      <v-toolbar-title>Nuxt Up</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-item-group>
        <v-item>
          <nuxt-link exact to="/">Home</nuxt-link>
        </v-item>
        <v-item>
          <nuxt-link to="/about" no-prefetch>About</nuxt-link>
        </v-item>
        <v-item>
          <nuxt-link to="/users" no-prefetch>Users</nuxt-link>
        </v-item>
        <v-item>
          <nuxt-link to="/logIn" no-prefetch @click="logOut">LogOut</nuxt-link>
        </v-item>
      </v-item-group>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

a.nuxt-link-active {
  color: #00c58e;
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
