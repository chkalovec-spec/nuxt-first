<template>
  <div>
    <h1>{{ user.name }}</h1>
    <hr />
    <h2>{{ user.email }}</h2>
    <h3>{{ user.company.name }}</h3>
    <h4>{{ user.website }}</h4>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const id = params.id;
    const user = await $axios.$get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return { user };
  },
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  }
};
</script>
