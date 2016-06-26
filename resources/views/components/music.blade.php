<template id="music">
<div>
	<hgroup class="mainHeading" >
		<h1>@{{pageHeading}}</h1>
		<svg viewBox="0 0 730 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

            <path  d="M2,31.0820313 L269.154072,31.0820313 L300.016609,0.219493919 L712.379387,0.219493919" id="headerOutline" stroke="#16D593" fill-opacity="0"></path>

		</svg>
	</hgroup>

	<section class="pageTop">

		<blockquote class="quote">
			<span class="intro">Welcome to the place where</span>
			<span class="emphasis">My sound</span>
			<span class="punchline">is built for all that would listen</span>
		</blockquote>

	</section>

	<section class="dynamicContent">

		<div class="column genericContent shrink35">

			<h3>Why music ?</h3>

			<p>It's hard to explain the reason of doing something you’ve always done, I guess a way to tell the tale is to say that, as teenager; I first fell in love with singing  listening to linking park and triyng to emulate the voices. tha’ts also, the way I learnt to speak english..</p>

			<p>The idea of producing a sound capable of proyecting feelings within you in a way that is not quite matched by any other art form, damm ... sheeez , its just intoxicating, that’s why I love playing music.</p>


		</div>

		<div class="column dominant">

			<h3>Welcome to my track list</h3>

			<ul class="songs">
				<li v-for="song in songs" class="song">

					<div class="songInfo">
						<h5>@{{song.name}}</h5>
						<span class="songDescription">@{{song.description}}</span>
					</div>


				<svg width="475px" height="11px" viewBox="0 0 475 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

				    <g id="Artboard-3" stroke="#979797" stroke-width="1" fill="none">
				        <path d="M0,1 L263.342014,1 L284.253807,10.3085938 L475.08284,10.3085938" id="Path-19"></path>
				    </g>

				</svg>

				<div class="socialLinks">
					<a href="" class="youtube icon">youtube</a>
					<a href="" class="soundcloud icon">soundcloud</a>
				</div>

				</li>


			</ul>
		</div>

	</section>


	<!-- <div class="supportingImage">
		<img src="{{asset('img/meself_aux_full.png')}}" alt="">
	</div> -->
</div>
</template>