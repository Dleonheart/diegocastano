<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>My main page</title>

	<link href='https://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Exo:400,300' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="{{asset('css/app.css')}}">
	<script src="{{asset('js/main.js')}}"></script>

</head>
<body>

<div class="background">
	<!-- <img src="{{asset('img/meself.jpg')}}" alt="meself"> -->
	<div id="stage"></div>
	<div class="pattern"></div>
</div>

<div class="masterContent" id="master">

	<div class="generalContainer clearfix">

		<nav class="mainNavigation" id="cunt">

			<ul>
				<li><a v-link="'/'">Home</a></li>
				<li><a v-link="'/'">Software</a></li>
				<li><a v-link="'/'">Design</a></li>
				<li><a v-link="'music'">Music</a></li>
			</ul>

		</nav>

			<router-view></router-view>

	</div>


	<div class="loader" v-show="loading">
		<div id="loader"></div>
	</div>


</div>
@include('components.home');
@include('components.music');
</body>
</html>