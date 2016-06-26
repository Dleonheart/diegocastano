import PIXI  from 'pixi.js';
import gsap from 'gsap' ;
import $ from 'jquery';
import * as R from '../utils/rendererLayer';

class Stage {


	constructor($el) {

		this.stageContainer  = $el;
		this.renderer = PIXI.autoDetectRenderer(windowW,windowH, {transparent:true});
		this.stageContainer.append(this.renderer.view);

		this.stage = new PIXI.Container();

		this.state = this.play;

		this.bindEvents();

	}

	windowDidResize() {
		windowW = $(window).width();
		windowH = $(window).height();
		this.renderer.resize(windowW, windowH);
	}


	bindEvents() {
		$(window).on('resize', this.windowDidResize.bind(this));
	}

	play(){

	}

	loadScene(scene) {
		scene.container.x = 0;
		scene.container.y = 0;
		scene.container.width = windowW;
		scene.container.height = windowH;
		this.stage.addChild(scene.container);

	}



	gameLoop() {

		requestAnimationFrame(this.gameLoop.bind(this));
		this.renderer.render(this.stage);
		this.state();

	}

}


export default Stage;