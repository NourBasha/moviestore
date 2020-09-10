
import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'

import { faAirFreshener } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faPhone } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faEnvelope,faAirFreshener,faPhone);



Vue.component('font-awesome-icon', FontAwesomeIcon);