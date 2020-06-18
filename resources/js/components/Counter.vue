<template>
    <div>
        <router-link to="/">Home</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router';

export default {
    name: 'app',
}
</script>
