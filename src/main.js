import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import router from './router'
import store from './store'


Amplify.configure({
  Auth: {
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_doTINpVyK',
    userPoolWebClientId: '4dh77ija4dqplejnd86ljh2hb1',
    mandatorySignIn: true
  }
})

const myAppConfig = {
  'aws_appsync_graphqlEndpoint': 'https://l4mztksuqzexjilhoxxdl7gr44.appsync-api.eu-central-1.amazonaws.com/graphql',
  'aws_appsync_region': 'eu-central-1',
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS'
}

Amplify.configure(myAppConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
