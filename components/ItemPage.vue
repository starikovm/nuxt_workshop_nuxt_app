<template>
    <article class="item">
        <h3 class="item__title">{{ name }}</h3>
        <div class="item__content">
            <div class="item__content__img">
                <img
                    src="/img/nophoto.gif"
                    alt="No item photo">
            </div>
            <span class="item__content__price">9999 Eur</span>
        </div>
        <div class="item__content__text">
            <p>
                Est eum eius cupiditate excepturi enim omnis officia. Id sequi ut ut sit. Eveniet sed ut aliquid necessitatibus error impedit deserunt unde. Asperiores rerum id doloremque fugit voluptates perspiciatis. Reprehenderit et soluta eius autem quas ut facere. Eius itaque accusantium dicta.
            </p>
        </div>
    </article>
</template>

<script>
    // import { mapState } from 'vuex';

    // @TODO 7 - map items props from current item in state and show them in template
    export default {
        name: "ItemPage",
        props: {
            name: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: 0
            },
        },
    }
</script>


<style lang="scss">
    .item {
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 1px 10px rgba(41,51,57,.8);
        &__title {
            text-align: left;
            padding: 20px;
            font-size: 26px;
        }

        &__content {
            display: flex;
            flex-direction: row;
            &__img {
                width: 80px;
                flex-grow: 1;
                padding: 10px;
                img {
                    max-width: 100%;
                }
            }
            &__text {
                flex-grow: 4;
                flex-basis: 0;
                font-size: 24px;
                text-align: left;
                padding: 20px;
            }
            &__price {
                flex-grow: 1;
                font-size: 22px;
                font-weight: bold;
            }
            &__column {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin: 20px;
            }
        }
    }
</style>