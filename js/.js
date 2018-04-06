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
	"title":"Love Colored Master Spark",
	"artist":"Zun",
	"mp3Url":"https://www.youtube.com/watch?v=7RBJ4NMOBV0",
	"imageUrl":"https://orig00.deviantart.net/d2f3/f/2015/357/8/4/kirisame_marisa_by_crossryou-d9l5imk.jpg",
	"songLength":"30:00 min"
}

var myPlayList = [
	{
		"title":"Battle Against A True Hero",
		"artist":"Toby Fox",
		"mp3Url":"https://www.youtube.com/watch?v=bPCMJC1Ig6s",
		"imageUrl":"https://pre00.deviantart.net/3174/th/pre/f/2016/006/9/4/undyne_the_undying___the_true_hero_by_walkingmelonsaaa-d9mzxpf.png",
		"songLength":"30:00 min",
	},
	{
		"title":"Running Hell",
		"artist":"Pixel",
		"mp3Url":"https://www.youtube.com/watch?v=Vtxp70tVHyM",
		"imageUrl":"http://www.brainygamer.com/.a/6a00e39824440288330133ec4d519c970b-pi",
		"songLength":"8:55 min"
	},
	{
		"title":"The Venerable Ancient Battlefield ~ Suwa Foughten Field",
		"artist":"Zun",
		"mp3-url":"https://www.youtube.com/watch?v=uXlqR94K0sM",
		"imageUrl":"https://en.touhouwiki.net/images/thumb/7/75/LoT2_Chara_Reimu_Stand.png/300px-LoT2_Chara_Reimu_Stand.png",
		"songLength":"8:55 min"
	},
	{
		"title":"In the Final",
		"artist":"Nintendo",
		"mp3Url":"https://www.youtube.com/watch?v=uXlqR94K0sM",
		"imageUrl":"https://i.kinja-img.com/gawker-media/image/upload/s--mK9-tpKW--/c_fit,fl_progressive,q_80,w_320/18j4fzxct8yh3jpg.jpg",
		"songLength":"30.01 min"
	},
	{	
		"title":"Moonsong",
		"artist":"pixel",
		"mp3Url":"https://www.youtube.com/watch?v=HVzC6WZImGY",
		"imageUrl":"https://lh3.googleusercontent.com/xsEzrLeeBREBrkly1FCkcDuhjQ43wwbscFJJ1tuUOzfRp_CvGcAWjJVNHXvdUe3O-E8=w300",
		"songLength":"8:34 min"
	},
	{
		"title":"Never let up!",
		"artist":"Nintendo",
		"mp3Url":"https://www.youtube.com/watch?v=bR2lft3cduc",
		"imageUrl":"https://i.kinja-img.com/gawker-media/image/upload/s--mK9-tpKW--/c_fit,fl_progressive,q_80,w_320/18j4fzxct8yh3jpg.jpg",
		"songLength":" 30:00 min"
	},

]


// <!-- https://www.pinterest.com/pin/591027151069668646/ -->

// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	
	for (var i =0; i< myPlayList.length; i++) {
    var colorObject = myPlayList[i];
    var title = colorObject.title;
    $("#b").append("<div>" + title + "</div>");
    
    } 
	
	
	
	
	
	
	
  $('#a').append("<h1> Song Name: " + mySong.title + "</h1>");
	$('#a').append("<a href='#' >" + "<img id='x' src=" + mySong.imageUrl + ">" + " </a>");
	$("#x").click(function(){
	//	$('#a').append("");
		
		$('#a').append("<audio src='./Songs/Love_coloured_Master_Spark.mp3' autoplay=autoplay loop=loop></audio>");
		
		});
	
// <img src= "http://i0.kym-cdn.com/photos/images/original/000/688/345/271.jpg">

});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
