<template>
    <div class="input-wrapper">
        <input
            type="text"
            placeholder="Please, write your budget">
        <button><span>Search</span></button>
    </div>
</template>

<script>
    // import { mapAction } from 'vuex';
    // @TODO 4 - update user budget on button click
    // create a method, which will execute an action for user budget update in store (you can import action from store with mapAction)
    // assign this method on button click
    // user is putting his budget in input field

    export default {
        name: "SearchInput"
    }
</script>

<style lang="scss" scoped>
.input-wrapper {
    width: 100%;

    input {
        height: 40px;
        font-size: 24px;
        line-height: 40px;
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 1px 10px rgba(41,51,57,.8);
        padding: 0 6px;
        width: 80%;
        margin: 2px 6px 2px 0;
        border: none;
    }

    button {
        height: 40px;
        width: 18%;
        border-radius: 16px;
        box-shadow: 0 1px 10px rgba(41,51,57,.8);
        border: none;
        background-color: dodgerblue;
        &:active,
        &:focus {
            background-color: cornflowerblue;
        }
        span {
            color: white;
            font-size: 24px;
        }
    }
}
</style>