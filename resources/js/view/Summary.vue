<template>
<div class="jumbotron">
    <h3 class="display-4">Summary</h3>
    <div class="form-group row">
        <p for="firstName" class="col-sm-2 col-form-p">First Name: {{firstname}}</p>
    </div>
    <div class="form-group row">
        <p for="lastName" class="col-sm-2 col-form-p">Last Name: {{lastname}}</p>
    </div>
    <div class="form-group row">
        <p for="lastName" class="col-sm-2 col-form-p">Newsletter: {{newsletter}}</p>
    </div>
    <div class="form-group row">
        <p for="lastName" class="col-sm-2 col-form-p">Sport: {{sport}}</p>
    </div>
    <div class="form-group row">
        <p for="lastName" class="col-sm-2 col-form-p">why ? {{why}}</p>
    </div>

    <button v-on:click="DBstore" class="btn btn-primary">ADD</button>
</div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router';

export default {
    name: 'app',
        computed: {
        firstname: {
            get () {
                return this.$store.state.firstname
            },
        },
        lastname: {
            get () {
                return this.$store.state.lastname
            },
        },
        newsletter: {
             get () {
                return this.$store.state.newsletter
            },
        },
        sport: {
             get () {
                return this.$store.state.sport
            },
        },
        why: {
             get () {
                return this.$store.state.why
            },
        },
    },
    methods: {
        DBstore () {
        this.$store.dispatch('DBstore')
        },
    },
    created () {
    this.$store.state.firstname = JSON.parse(localStorage.getItem('name'))
    this.$store.state.lastname = JSON.parse(localStorage.getItem('last'))
    this.$store.state.newsletter = JSON.parse(localStorage.getItem('news'))
    this.$store.state.sport = JSON.parse(localStorage.getItem('sport'))
    this.$store.state.why = JSON.parse(localStorage.getItem('why'))
    }
}
</script>
