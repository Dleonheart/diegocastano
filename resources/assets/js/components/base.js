
import Vue from 'vue';
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import ProgressBar from 'progressbar.js';
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

let circle;

let BaseComponent =  Vue.extend({



	data : function(){
		return {
			loading : false,
			loadProgress : 0
		}
	},


	ready : function() {

		this.initLoader();

		this.initiateMenu();

	},

	methods  : {

		initLoader : function(){
			 circle = new ProgressBar.Circle('#loader', {
			    color: '#00DAA3',
			    strokeWidth: 3,
			    trailWidth: 1,
			    duration: 1500,
			    text: {
			        value: '0'
			    },
			    step: function(state, bar) {
			        bar.setText((bar.value() * 100).toFixed(0) + '%');
			    }
			});
		},

		initiateMenu : function() {

			let controller  = new ScrollMagic.Controller({container:"#master"});
			let tween = TweenLite.to('.mainNavigation', .5, {x:'-=100%', ease: Back.easeOut});

			let scene  = new ScrollMagic.Scene({offset:170})
						.setTween(tween)
						.setPin("#cunt")
						.addTo(controller);

		},


		setProgress : function(progress) {

			this.loading = true;
			this.loadProgress = progress;
			circle.animate(progress/100, {duration:100});
		},


		loaded : function() {
			this.loading  = false;
		}
	},

	filters : {

		percentage : function(value){

			return Math.floor(value);
		}
	}


});

export default BaseComponent;