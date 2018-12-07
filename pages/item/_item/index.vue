<template>
    <section class="container">
        <h1 class="title">Item page</h1>
        <item-page/>
    </section>
</template>

<script>
    import axios from 'axios';
    import ItemPage from '~/components/ItemPage.vue';

    export default {
        async fetch({ params, store }) {
            // @TODO 6 - commit the right item in the store
            const response = await axios.get('http://localhost:3000/list.json');
            store.commit('setCurrentItem', {});
        },
        components: {
            ItemPage
        },
    }
</script>

<style scoped>

</style>