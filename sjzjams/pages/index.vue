<template>
  <section class="container">
      <div>
      <h1>Super secret page</h1>
      <p>If you try to access this URL not connected, you will see the error page telling your that you are not connected.</p>
      <nuxt-link to="/">Back to the home page</nuxt-link>
    </div>
    <div class="content">
      <app-logo/>
     
      <h1 class="title">
        
        creditvane
      </h1>
       <test/>
      <h2 class="subtitle">
        fxb ui
      </h2>
      <div class="links">
        <a href="/user" class="button--green">查看图书</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import test from '~/components/test.vue'
export default {
  middleware: 'auth',
  components: {
    AppLogo,
    test
  }
}
</script>

