import Vue from 'vue';
import gsap from 'gsap';
import transition from '../mixins/transition';



let HomeComponent =  Vue.extend({

	template : '#home',

	mixins : [transition],

	data : function(){

		return {
			pageHeading : 'Hello !',
			image : 'img/city.jpg',
		}
	}

});

export default HomeComponent;