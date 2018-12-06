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
    import ListOffer from './ListOffer.vue';
    export default {
        name: "ResultsList",
        components: {
            ListOffer
        },
        data: () => ({
            offers: []
        }),
    }
</script>

<style scoped>
    .search-list {
        padding: 30px 0;
    }
</style>