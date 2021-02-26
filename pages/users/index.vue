<template>
  <section>
    <h1>Users Page</h1>
    <ul>
      <li v-for="user of users" :key="user.id" @click="openUser(user.id)">
        {{ user.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["users/getUsers"].length === 0) {
      await store.dispatch("users/fetchUsers");
    }
  },
  methods: {
    openUser(user) {
      this.$router.push(`users/${user}`);
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/getUsers"];
    }
  },
  middleware: "auth"
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
