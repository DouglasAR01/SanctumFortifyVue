<template>
  <div class="d-flex w-50 m-auto align-items-center">
    <div class="card card-body">
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" name="email" v-model="user.email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" name="password" v-model="user.password"/>
        </div>
        <div class="form-check pb-2">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="user.remember"
            name="remember"
          />
          <label for="remember" class="form-check-label">Remember me?</label>
        </div>
        <button
          class="btn btn-block btn-primary"
          @click.prevent="login"
          :disabled="loading"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
        remember: false,
      },
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        await axios.get('/sanctum/csrf-cookie');
        try {
          await axios.post('/api/login', this.user);
          console.log('Funca');
        } catch (error) {
          console.log('No funca');
        }
      } catch (error) {
        console.log('Fatal');
      }
      this.loading = false;
    },
  },
};
</script>