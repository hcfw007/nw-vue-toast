<template>
    <div class="container">
        <button @click="show">Show</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        show() {
            this.$toast("show")
        }
    }
}
</script>

<style>
.container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0%;
    right: 0;
    padding: 50px 50px;
}

button {
    padding: 15px;
    background-color: aquamarine;
}

</style>


