<template>
  <section class="container">
    <div>
      <h1 class="title">
        Nuxt.js testing playground
      </h1>
    </div>
    <search-input/>
    <results-list/>
  </section>
</template>

<script>
import SearchInput from '~/components/SearchInput.vue'
import ResultsList from '~/components/ResultsList.vue'

export default {
  components: {
      SearchInput,
      ResultsList
  }
}
</script>
