import Vue from 'vue';
import Vuex from 'vuex';
import router from './router'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        firstname: '',
        lastname: '',
        newsletter: 'yes',
        sport: '',
        why: '',
    },
    mutations: {
        updateFirstname (state, firstname) {
            state.firstname = firstname;

            let storedVar = JSON.parse(localStorage.getItem('name'));
            if (!storedVar) storedVar = {} // jeżeli nie ma default empty object

            localStorage.setItem('name', JSON.stringify(firstname)) // zapisuje zmiany w localStorage
        },
        updateLastname (state, lastname) {
            state.lastname = lastname;

            let storedVar = JSON.parse(localStorage.getItem('last'));
            if (!storedVar) storedVar = {} // jeżeli nie ma default empty object

            localStorage.setItem('last', JSON.stringify(lastname)) // zapisuje zmiany w localStorage
        },
        updateNewsletter (state, newsletter) {
            state.newsletter = newsletter;

            let storedVar = JSON.parse(localStorage.getItem('news'));
            if (!storedVar) storedVar = {} // jeżeli nie ma default empty object

            localStorage.setItem('news', JSON.stringify(newsletter)) // zapisuje zmiany w localStorage
        },
        updateSport (state, sport) {
            state.sport = sport;

            let storedVar = JSON.parse(localStorage.getItem('sport'));
            if (!storedVar) storedVar = {} // jeżeli nie ma default empty object

            localStorage.setItem('sport', JSON.stringify(sport)) // zapisuje zmiany w localStorage
        },
        updateWhy (state, why) {
            state.why = why;

            let storedVar = JSON.parse(localStorage.getItem('why'));
            if (!storedVar) storedVar = {} // jeżeli nie ma default empty object

            localStorage.setItem('why', JSON.stringify(why)) // zapisuje zmiany w localStorage
        },
    },

    actions: {
        DBvalidation (state) {
            axios.post('/index/validata', {
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                newsletter: this.state.newsletter,
            })
            .then(response => router.push('/secound'))
            .catch(console.log(error => this.errors = error.response.state));
        },
        DBvalidation2 (state) {
            axios.post('/index/validata2', {
                sport: this.state.sport,
                why: this.state.why,
            })
            .then(response => router.push('/summary'))
            .catch(console.log(error => this.errors = error.response.state));
        },
        DBstore (state) {
            axios.post('/index/store', {
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                newsletter: this.state.newsletter,
                sport: this.state.sport,
                why: this.state.why,
            })
            .then(alert('succes'))
            .catch(error => this.errors = error.response.state);
        },
        next () {
        },
    },

    getters: {

    }
})
