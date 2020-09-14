
import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';


import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'


library.add(faChevronRight,faChevronLeft,faStar);



Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)