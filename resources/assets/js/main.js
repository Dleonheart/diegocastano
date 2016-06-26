import $ from 'jquery';
import PIXI  from 'pixi.js';
import {loader} from './utils/rendererLayer';
import gsap from 'gsap';
import HomeScene from './scenes/HomeScene';
import Stage from './scenes/Stage';
import Vue from 'vue';
import VueRouter from 'vue-router';
import BaseComponent from './components/base';
import HomeComponent from './components/home';
import MusicComponent from './components/music';


$(document).ready(function(){

	Vue.use(VueRouter);



	window.windowW = $(window).width(),
	window.windowH = $(window).height();

	let router = new VueRouter();

	/*========================================
	=            pixi stage setup            =
	========================================*/

	let stage = new Stage($('#stage'));

	let homeScene = new HomeScene();


	stage.loadScene(homeScene);


	stage.gameLoop();


	/*=====  End of pixi stage setup  ======*/


	/**
	 *
	 * route mappings
	 *
	 */


	router.map({

		'/' :  {
			component : HomeComponent,
			sceneHandler : homeScene,
			order : 1
		},

		'/music' : {
			component : MusicComponent,
			sceneHandler : homeScene,
			order: 4

		}

	});


	/**
	 *
	 * router configuration
	 *
	 */


	router.start(BaseComponent, '#master', function() {

		loader.on('progress', function(event){

			router.app.setProgress(event.progress);
		});

		loader.on('complete', function(event){
			router.app.loaded();

		});

	});

});