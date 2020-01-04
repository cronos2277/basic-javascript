import Vue from 'vue'
//a userKey sera a chave.
export const userKey = '__knowledge_user'
//porta que a aplicacao rodara: 4000
export const baseApiUrl = 'http://localhost:4000' 

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }