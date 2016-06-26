import Vue from 'vue';
import gsap from 'gsap';
import transition from '../mixins/transition';




let MusicComponent =  Vue.extend({

	template : '#music',

	mixins : [transition],

	data : function(){

		return {
			pageHeading : 'My sounds !',
			'songs' : [
				{name:'Stay', description: 'Black Stone Cherry acoustic cover by Diego', youtube:'youtube', soundcloud:'soundcloud'},
				{name:'Stay', description: 'Black Stone Cherry acoustic cover by Diego', youtube:'youtube', soundcloud:'soundcloud'}
				],
			'image'  : 'img/meself.jpg',
		}
	}


});

export default MusicComponent;