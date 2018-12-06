<template>
    <div class="input-wrapper">
        <input
            type="text"
            placeholder="Please, write your budget">
        <button><span>Search</span></button>
    </div>
</template>

<script>
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