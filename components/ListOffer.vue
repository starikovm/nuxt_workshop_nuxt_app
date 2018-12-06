<template>
    <article class="item">
        <h3 class="item__title">Offer</h3>
        <div class="item__content">
            <div class="item__content__img">
                <img
                    src="/img/nophoto.gif"
                    alt="No item photo">
            </div>
            <div class="item__content__text">
                <p>
                    Est eum eius cupiditate excepturi enim omnis officia. Id sequi ut ut sit. Eveniet sed ut aliquid necessitatibus error impedit deserunt unde. Asperiores rerum id doloremque fugit voluptates perspiciatis. Reprehenderit et soluta eius autem quas ut facere. Eius itaque accusantium dicta.
                </p>
            </div>
            <div class="item__content__column">
                <span class="item__content__price">9999 Eur</span>
                <nuxt-link :to="{ name: 'item-item', params: { item: 'itemName' }}">
                    <button class="item__button"><span>View Offer</span></button>
                </nuxt-link>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "ListOffer",
        props: {
            name: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: 0
            },
        }
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
                width: 60px;
                flex-grow: 2;
                padding: 10px;
                img {
                    max-width: 100%;
                }
            }
            &__text {
                flex-grow: 4;
                flex-basis: 0;
                font-size: 18px;
                text-align: center;
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
        &__button {
            height: 40px;
            border-radius: 16px;
            box-shadow: 0 1px 10px rgba(41,51,57,.8);
            border: none;
            background-color: dodgerblue;
            cursor: pointer;
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