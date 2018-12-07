<template>
    <ul class="search-list">
        <ListOffer/>
        <li
            v-for="offer in offers"
            :key="offer.name">
            <ListOffer v-bind="offer"/>
        </li>
    </ul>
</template>

<script>
    import { mapActions } from 'vuex';

    // @TODO 1 - get loaded products list from store
    // Now we have empty offers in components data
    // They should be loaded on component mount and mapped from Vuex store
    import ListOffer from './ListOffer.vue';
    export default {
        name: "ResultsList",
        components: {
            ListOffer
        },
        data: () => ({
            offers: []
        }),
        methods: {
            ...mapActions(['loadList'])
        },
    }
</script>

<style scoped>
    .search-list {
        padding: 30px 0;
    }
</style>