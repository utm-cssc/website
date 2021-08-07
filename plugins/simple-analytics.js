import SimpleAnalytics from 'simple-analyticsvue'
import Vue from 'vue'
Vue.use(SimpleAnalytics, {skip: process.env.NODE_ENV !== 'production'})
