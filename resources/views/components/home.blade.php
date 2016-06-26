<template id="home">
<div>
	<hgroup class="mainHeading" >
		<h1>@{{pageHeading}}</h1>
		<svg viewBox="0 0 730 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

            <path  d="M2,31.0820313 L269.154072,31.0820313 L300.016609,0.219493919 L712.379387,0.219493919" id="headerOutline" stroke="#16D593" fill-opacity="0"></path>

		</svg>
	</hgroup>

	<section class="pageTop" id="colita">



		<blockquote class="quote">
			<span class="intro">I'm Diego Castaño Castiblanco</span>
			<span class="emphasis">a software craftsman</span>
			<span class="punchline">currently fighting out of Bogotá Colombia</span>
		</blockquote>

	</section>

	<section class="dynamicContent">

		<div class="column genericContent dominant">

			<h3>A little word about me </h3>

			<p>I’m a creative professional in the field of software engineering. I’m particularly interested in the design, testing and development of web based user interfaces that are not only merely functional but beautiful and pleasing.</p>

			<p>I focus on designing and crafting maintainable software, while always learning the latest technologies that can help me do a better job at delivering the best possible user experience by the means of the software I write.</p>

			<h3>Some of the stuff I do</h3>

			<ul class="genericList">
				<li>Front-end development</li>
				<li>Back-end integrations</li>
				<li>UI/UX design</li>
				<li>Train teams or individuals in this wonderful craft</li>
			</ul>
		</div>

		<div class="column">

			<h3>Wanna get in touch ?</h3>
			<span>oh My that's lovely here's how</span>

			<ul class="social">
				<li>
				<a href="#"><img src="{{asset('img/message_icon.png')}}" alt=""><span>Send me a message !</span></a>
				<svg width="178px" height="15px" viewBox="0 0 178 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

				    <path stroke="#00DAA3" fill-opacity="0" d="M0,1 L21.9570312,14.0273438 L178.001549,14.0273438" id="Path-98"></path>

				</svg>
				</li>
				<li><a href="#"><img src="{{asset('img/twitter_icon.png')}}" alt=""><span>Follow me !</span></a>
				<svg width="178px" height="15px" viewBox="0 0 178 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

				    <path stroke="#00DAA3" fill-opacity="0" d="M0,1 L21.9570312,14.0273438 L178.001549,14.0273438" id="Path-98"></path>

				</svg></li>
				<li><a href="#"><img src="{{asset('img/linkedin_icon.png')}}" alt=""><span>View my professional profile</span></a>
				<svg width="178px" height="15px" viewBox="0 0 178 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

				    <path stroke="#00DAA3" fill-opacity="0" d="M0,1 L21.9570312,14.0273438 L178.001549,14.0273438" id="Path-98"></path>

				</svg>

				</li>
				<li><a href="#"><img src="{{asset('img/soundcloud_icon.png')}}" alt=""><span>Listen to my music !</span></a>
				<svg width="178px" height="15px" viewBox="0 0 178 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

				    <path stroke="#00DAA3" fill-opacity="0" d="M0,1 L21.9570312,14.0273438 L178.001549,14.0273438" id="Path-98"></path>

				</svg>
				</li>
				<li><a href="#"><img src="{{asset('img/youtube_icon.png')}}" alt=""><span>Watch my videos !</span></a>
				<svg width="178px" height="15px" viewBox="0 0 178 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

				    <path stroke="#00DAA3" fill-opacity="0" d="M0,1 L21.9570312,14.0273438 L178.001549,14.0273438" id="Path-98"></path>

				</svg>
				</li>

			</ul>
		</div>

	</section>


	<!-- <div class="supportingImage">
		<img src="{{asset('img/meself_aux_full.png')}}" alt="">
	</div> -->
</div>
</template>