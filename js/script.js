// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title": "",
	"artist": "",
	"mp3Url": "",
	"imageUrl": "",
	"songLength": "",
};

var myPlayList = [{
		"title": "Love Colored Master Spark",
		"artist": "Zun",
		"mp3Url": "https://www.youtube.com/watch?v=7RBJ4NMOBV0",
		"imageUrl": "https://orig00.deviantart.net/d2f3/f/2015/357/8/4/kirisame_marisa_by_crossryou-d9l5imk.jpg",
		"songLength": "30:00 min",
		"mp3Link": "Songs/Love_coloured_Master_Spark.mp3",
	},

	{
		"title": "Battle Against A True Hero",
		"artist": "Toby Fox",
		"mp3Url": "https://www.youtube.com/watch?v=bPCMJC1Ig6s",
		"imageUrl": "https://pre00.deviantart.net/3174/th/pre/f/2016/006/9/4/undyne_the_undying___the_true_hero_by_walkingmelonsaaa-d9mzxpf.png",
		"songLength": "30:00 min",
		"mp3Link": "./Songs/Battle_Against_A_True_Hero.mp3",
	},
	{
		"title": "Running Hell",
		"artist": "Pixel",
		"mp3Url": "https://www.youtube.com/watch?v=Vtxp70tVHyM",
		"imageUrl": "http://www.brainygamer.com/.a/6a00e39824440288330133ec4d519c970b-pi",
		"songLength": "8:55 min",
		"mp3Link": "./Songs/Running_Hell.mp3"
	},
	{
		"title": "The Venerable Ancient Battlefield ~ Suwa Foughten Field",
		"artist": "Zun",
		"mp3Url": "https://www.youtube.com/watch?v=uXlqR94K0sM",
		"imageUrl": "https://static.zerochan.net/Yasaka.Kanako.full.1219672.jpg",
		"songLength": "8:55 min",
		"mp3Link": "./Songs/The_Venerable_Ancient_Battlefield~Suwa_Foughten_Field.mp3"
	},
	{
		"title": "In the Final",
		"artist": "Nintendo",
		"mp3Url": "https://www.youtube.com/watch?v=uXlqR94K0sM",
		"imageUrl": "https://i.kinja-img.com/gawker-media/image/upload/s--mK9-tpKW--/c_fit,fl_progressive,q_80,w_320/18j4fzxct8yh3jpg.jpg",
		"songLength": "30.01 min",
		"mp3Link": "./Songs/In_The_Final.mp3"
	},
	{
		"title": "Moonsong",
		"artist": "Pixel",
		"mp3Url": "https://www.youtube.com/watch?v=HVzC6WZImGY",
		"imageUrl": "https://lh3.googleusercontent.com/xsEzrLeeBREBrkly1FCkcDuhjQ43wwbscFJJ1tuUOzfRp_CvGcAWjJVNHXvdUe3O-E8=w300",
		"songLength": "8:34 min",
		"mp3Link": "./Songs/Moonsong.mp3"
	},
	{
		"title": "Never Let Up!",
		"artist": "Nintendo",
		"mp3Url": "https://www.youtube.com/watch?v=bR2lft3cduc",
		"imageUrl": "https://upload.wikimedia.org/wikipedia/en/b/bc/MarioLuigiDreamTeam.jpg",
		"songLength": " 30:00 min",
		"mp3Link": "./Songs/Never_Let_Up.mp3"
	},

	{
		"title": "Last Battle",
		"artist": "Pixel",
		"mp3Url": "https://www.youtube.com/watch?v=IdAzVhCof_4",
		"imageUrl": "http://i0.kym-cdn.com/photos/images/original/000/688/345/271.jpg",
		"songLength": " 9:06 min",
		"mp3Link": "./Songs/Last_Battle.mp3"
	},
	{
		"title": "Michael Jackson 'Corey Haim' Boss Battle/Fight Music Theme",
		"artist": "South Park",
		"mp3Url": "https://www.youtube.com/watch?v=O3ZlO4fIkNw",
		"imageUrl": "https://i.ytimg.com/vi/p_vZ-H6fJGE/maxresdefault.jpg",
		"songLength": " 26:00 min",
		"mp3Link": "./Songs/Michael_Jackson_Music.mp3"
	}
];


// <!-- https://www.pinterest.com/pin/591027151069668646/ -->

// DOCUMENT READY FUNCTION
$(document).ready(function() {

	for (var i = 0; i < myPlayList.length; i++) {
		var colorObject = myPlayList[i];

		var title = colorObject.title;
		var artist = colorObject.artist;
		var mp3Url = colorObject.mp3Url;
		var imageUrl = colorObject.imageUrl;
		var songLength = colorObject.songLength;
		var mp3Link = colorObject.mp3Link;
		
		var songTtile = "<p>" + "Song Title: " + title + "</p>";
		var Author = "Author: " + artist ;
		var Link = "<p>" + "Song Link: " + mp3Url + "</p>";
		var image = "<p>" + "<img " + " onclick='document.getElementById(\"" + mp3Link + "\").play()' " + "id=" + title + " src=" + imageUrl + ">" + "</p>";
		var length = "<p>" + "Length: " + songLength + "</p>";
		
		var audio = "<audio id = '" + mp3Link + "'  src='" + mp3Link + "' loop=loop></audio>";
		$("#b").append("<div class='c'>" + songTtile + Author + Link + image + audio + length + "</div>");

		

	}






 /*
	$('#a').append("<h1> Song Name: " + mySong.title + "</h1>");
	$('#a').append("<a href='#' >" + "<img id='x' src=" + mySong.imageUrl + ">" + " </a>");
	$("#x").click(function() {
		//	$('#a').append("");

		$('#a').append("<audio src='./Songs/Love_coloured_Master_Spark.mp3' autoplay=autoplay loop=loop></audio>");

	});
	$(".y").click(function() {
		//	$('#a').append("");

		$('#a').append("<audio src='./Songs/Running_Hell.mp3' autoplay=autoplay loop=loop></audio>");

	});
	// <img src= "http://i0.kym-cdn.com/photos/images/original/000/688/345/271.jpg">
*/
});

function displayList() {



}

function clearList() {



}

function addSong() {



}
