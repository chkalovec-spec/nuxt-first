<template>
  <div>
    <h1>Login Page</h1>
    <form>
      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.email]"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="showPass ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="showPass = !showPass"
      ></v-text-field>

      <v-btn class="mr-4" @click="submit">
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    showPass: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),

  methods: {
    submit() {
      this.$store.dispatch("login");
      this.$router.push("/");
    },
    clear() {
      this.email = "";
      this.password = "";
    }
  },

  layout: "empty"
};
</script>
