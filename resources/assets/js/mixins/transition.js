export default {


	methods  : {

		introSequence : function(options) {

			 this.$route.sceneHandler.introSection(options);
		},

		outroSequence : function(options, callback){
			this.$route.sceneHandler.outroSection(options, callback);
		},

		fadeUp : function(transition) {

			this.outroSequence({mode : "up", el: this.$el}, () => transition.next())
		},

		fadeDown : function(transition) {

			this.outroSequence({mode : "down", el: this.$el}, () => transition.next())
		},

		fadeInUp : function(transition) {

			transition.next();
			this.introSequence({
				el: this.$el,
				img:this.image,
				mode: 'up'
			});


		},

		fadeInDown : function(transition) {

			transition.next();
			this.introSequence({
				el: this.$el,
				img:this.image,
				mode: 'down'
			});
		}
	},

	route :{

		deactivate  : function(transition) {


			if(transition.to.order > transition.from.order) {
				this.fadeUp(transition);
			} else {
				this.fadeDown(transition);
			}

		},

		activate : function(transition){

			if(transition.from.order > transition.to.order) {
				this.fadeInUp(transition);
			} else if(transition.from.order < transition.to.order) {
				this.fadeInDown(transition);
			} else {
				transition.next();
			}
		}
	}
}