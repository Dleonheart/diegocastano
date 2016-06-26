import PIXI  from 'pixi.js';
import gsap from 'gsap' ;
import $ from 'jquery';
import pixiParticles from 'pixi-particles';
import {loader, TextureCache, Texture, Sprite, TilingSprite} from '../utils/rendererLayer';


class HomeScene {


	constructor() {

		this.bindEvents();

		this.container = new PIXI.Container();

		loader.add('img/city.jpg')
			  .add('img/meself.jpg')
			  .add('img/background_grad.png')
			  .add('img/light.png')
			  .add('img/particle.png')
			  .add('img/fire.png')
			  .add('img/general_container.png')
			 .load(this.setup.bind(this));

	}


	windowDidResize() {

		this.positionBackground();
		this.positionContainer();
		this.curtain.width = windowW;
		this.curtain.height = windowH;
	}


	bindEvents() {
		$(window).on('resize', this.windowDidResize.bind(this));
	}

	introSection(options){

		this.background.texture  = TextureCache[options.img];
		let line = $(options.el).find('#headerOutline');
		let tl  = new TimelineLite();

		tl.from(options.el, .7, {
				autoAlpha : 0.2,
				y: options.mode === 'up' ? "-=70"  : 50,
				scale:0.9,
				ease: Expo.easeOut
			}, 0);


		tl.from(this.background.position, 1, {
			y: options.mode == 'up' ? "-=70"  : "+=70",
			ease: Circ.easeOut
		},0);

		tl.from(line, .7, {strokeDashoffset : 723, ease:Circ.easeOut},0.2);

		tl.to(this.background, .3, {alpha:1, ease: Sine.easeOut}, 0);
		tl.fromTo(this.blur, 1, {blurY:25, ease: Circ.easeOut},
								 {blurY:0, ease: Circ.easeOut} , 0);
	}

	outroSection(options, callback) {

		let tl  = new TimelineLite();

		tl.to(options.el, .4, {
			autoAlpha : 0,
			y: options.mode === 'up' ? '-=50' : 50,
			scale:0.9,
			onComplete : callback,

		});

		tl.to(this.background.position, .5, {
			y: options.mode === 'up' ? "-=70"  : '+=70',
			ease: Expo.easeIn
		},0);

		tl.to(this.blur, 0.5, {blurY:25, ease: Expo.easeIn} , 0);
		tl.to(this.background, .5, {alpha:0}, 0);

	}

	introSequence() {

		this.blur  = new PIXI.filters.BlurFilter();


		this.blur.blurX = 15;
		this.blur.blurY = 0;
		this.background.filters = [this.blur];


		var tl = new TimelineLite();

		tl.timeScale(1.1)
		tl.addLabel('first');
		tl.set('.generalContainer', {opacity:1});

		// tl.to(this.background, 2, {alpha:1},'first');
		tl.to(this.background, .5, {alpha:1, ease: Sine.easeOut}, 'first');
		tl.from(this.background.scale, 1, {x:1.5,y:1.5, ease: Back.easeOut.config(0.7)}, 'first');
		tl.to(this.blur, 1.5, {blurX:0, ease: Back.easeInOut} , 'first');
		tl.from(this.curtain, 1.3, {alpha:0.3}, '-=1.5')
		tl.from(this.generalContainer , 1 , {width:0, ease: Expo.easeInOut}, '-=0.7');
		tl.from('.generalContainer ', 1 , {autoAlpha:0, x:10, ease: Expo.easeInOut, clearProps:'transform'}, '-=1')
		tl.from('.mainNavigation', .7 , {scale:0, y:15, ease:Back.easeOut}, '-=0.5')
		tl.staggerFrom('.mainNavigation li', .4, {scale:0, ease:Back.easeOut}, .1, '-=0.3');
	}

	positionBackground() {
		var aspectRatio = this.background.texture.width / this.background.texture.height;

		if((windowW / windowH) < aspectRatio) {

			this.background.height = windowH;
			this.background.scale.x = this.background.scale.y;

		}
		else {

			this.background.width = windowW;
			this.background.scale.y = this.background.scale.x;

		}
		this.background.anchor.set(0.5);
		this.background.position.x =  windowW/2;
		this.background.position.y =  windowH/2;


	}

	setupEmitter() {
		this.emitter = new cloudkid.Emitter(

  // The DisplayObjectContainer to put the emitter in
  // if using blend modes, it's important to put this
  // on top of a bitmap, and not use the PIXI.Stage
		  this.container,

		  // The collection of particle images to use
		  [TextureCache['img/particle.png'], TextureCache['img/particle.png']],

		    // Emitter configuration, edit this to change the look
		    // of the emitter
		    {
			        "alpha": {
					"start": 0.62,
					"end": 0
				},
				"scale": {
					"start": 0.25,
					"end": 0.75,
					"minimumScaleMultiplier": 1
				},
				"color": {
					"start": "#fffdf0",
					"end": "#670f96"
				},
				"speed": {
					"start": 500,
					"end": 500
				},
				"acceleration": {
					"x": 0,
					"y": 0
				},
				"startRotation": {
					"min": 248,
					"max": 275
				},
				"rotationSpeed": {
					"min": 50,
					"max": 50
				},
				"lifetime": {
					"min": 0.1,
					"max": 0.75
				},
				"blendMode": "screen",
				"frequency": 0.001,
				"emitterLifetime": -1,
				"maxParticles": 1000,
				"pos": {
					"x": 0,
					"y": 0
				},
				"addAtBack": false,
				"spawnType": "circle",
				"spawnCircle": {
					"x": 0,
					"y": 0,
					"r": 10
				}
		    }
		);
	}

	positionContainer() {

		this.generalContainer.width = (windowW *.9 > 1024) ? 1024 : window*.9;

		if(windowW *.9 > 1024) {
			this.generalContainer.width = 1024;
			this.generalContainer.x = (windowW - 1024) / 2;
		} else {
			this.generalContainer.width = windowW * .9;
			this.generalContainer.x = (windowW - (windowW* .9)) / 2;
		}

		this.generalContainer.height  = windowH -60;
		this.generalContainer.y = windowH - this.generalContainer.height;


	}

	setup() {

		this.background = new Sprite(TextureCache['img/city.jpg']);
		this.positionBackground();

		this.curtain = new TilingSprite(TextureCache['img/background_grad.png'], windowW, windowH);

		this.generalContainer = new Sprite(TextureCache['img/general_container.png']);

		this.positionContainer();


		// this.setupEmitter();


		// this.light = new Sprite(TextureCache['img/light.png']);
		// this.light.x = windowW/2;
		// this.light.y = windowH/2;
		// this.light.width=50;
		// this.light.height = windowH;
		// this.light.blendMode = PIXI.BLEND_MODES.ADD;
		// this.light.interactive = true;
		// this.light.anchor.x = 0.5;
		// this.light.anchor.y = 0.5;

		// this.light.on('mousemove' , function(mouseData){

		// 	this.light.x = mouseData.data.global.x;
		// 	this.light.y = mouseData.data.global.y;
		// 	this.emitter.updateSpawnPos(mouseData.data.global.x, mouseData.data.global.y - 153);
		// }.bind(this))

		this.curtain.x = 0;
		this.curtain.y = 0;
		this.curtain.alpha = 0.95;
		this.curtain.blendMode = PIXI.BLEND_MODES.DARKEN;


		this.container.addChild(this.background);
		this.container.addChild(this.curtain);
		// this.container.addChild(this.light);
		this.container.addChild(this.generalContainer);

		this.introSequence();

	}


}

export default HomeScene;