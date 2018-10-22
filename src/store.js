import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state() {
      return {
        message: 'How YOU doin\'?',
      };
    },
  });
}
