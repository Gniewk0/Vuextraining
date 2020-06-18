<template>
    <div class="jumbotron">
        <form method="POST" action="/validata" @submit.prevent="DBvalidation">
        <!-- @csrf {{ csrf_field() }} -->
        <div class="form-group row">
            <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="firstName" v-model="firstname">
            </div>
        </div>
        <div class="form-group row">
            <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="lastName" v-model="lastname">
            </div>
        </div>
        <fieldset class="form-group">
            <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Newsletter</legend>
            <div class="col-sm-10">
                <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="newyes" value="yes" checked  v-model="newsletter">
                <label class="form-check-label" for="newyes">
                    Yes
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="newsno" value="no"  v-model="newsletter">
                <label class="form-check-label" for="newsno">
                    No
                </label>
                </div>
            </div>
            </div>
        </fieldset>
        </form>

        <button v-on:click="DBvalidation" class="btn btn-primary">Next</button>

    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'app',
    computed: {
        firstname: {
            get () {
                return this.$store.state.firstname
            },
            set (value) {
                 this.$store.commit('updateFirstname', value);
            }
        },
        lastname: {
            get () {
                return this.$store.state.lastname
            },
            set (value) {
                 this.$store.commit('updateLastname', value);
            }
        },
        newsletter: {
             get () {
                return this.$store.state.newsletter
            },
            set (value) {
                 this.$store.commit('updateNewsletter', value);
            }
        },
    },
    methods: {
        updateFirstname (e) {
            this.$store.commit('updateFirstname', e.target.value)
        },
        updateLastname (e) {
            this.$store.commit('updateLastname', e.target.value)
        },
        updateNewsletter (e) {
            this.$store.commit('updateNewsletter', e.target.value)
        },
        DBvalidation () {
            this.$store.dispatch('DBvalidation')
        },
    },
    mounted() {
    },
    created () {
    this.$store.state.firstname = JSON.parse(localStorage.getItem('name'))
    this.$store.state.lastname = JSON.parse(localStorage.getItem('last'))
    this.$store.state.newsletter = JSON.parse(localStorage.getItem('news'))
    }
}

</script>
