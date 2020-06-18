<template>
<div class="jumbotron">
    <h3 class="display-4">Your Input</h3>
    <div class="form-group row">
        <p for="firstName" class="col-sm-2 col-form-p">First Name: {{firstname}}</p>
    </div>
    <div class="form-group row">
        <p for="lastName" class="col-sm-2 col-form-p">Last Name: {{lastname}}</p>
    </div>
    <div class="form-group row">
        <p for="lastName" class="col-sm-2 col-form-p">Newsletter: {{newsletter}}</p>
    </div>

            <form method="POST" action="/validata2" @submit.prevent="DBvalidation2">
        <!-- @csrf {{ csrf_field() }} -->
        <div class="form-group row">
            <label for="firstName" class="col-sm-2 col-form-label">Favorite Sport</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="firstName" v-model="sport">
            </div>
        </div>
        <div class="form-group row">
            <label for="lastName" class="col-sm-2 col-form-label">Why ?</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="lastName" v-model="why">
            </div>
        </div>
        </form>

    <button v-on:click="DBvalidation2" class="btn btn-primary">Next</button>

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
            set (value) {
                 this.$store.commit('updateSport', value);
            }
        },
        why: {
            get () {
                return this.$store.state.why
            },
            set (value) {
                 this.$store.commit('updateWhy', value);
            }
        },
    },
    methods: {
        DBvalidation2 () {
            this.$store.dispatch('DBvalidation2')
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
