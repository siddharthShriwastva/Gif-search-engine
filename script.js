// grab the input

document.querySelector(".btn").addEventListener('click',function(){
  var input = document.querySelector("input").value;
  // console.log(input);
  dataStuff(input);
});

document.querySelector(".userInput").addEventListener('keyup',function(e){
  console.log(e);
  // from here you will get keycode for enter grab that and comapare
  var input = document.querySelector("input").value;
  // console.log(input);

  // if Enter is pressed then..
  if(e.which===13){
    dataStuff(input);
  }else if (e.which===8) {
    dataStuff(input);
  }
});


//do the data stuff with the API
function dataStuff(input) {
  var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC";
  console.log(url);
  // AJAX request
  var GifCall = new XMLHttpRequest();
  GifCall.open('Get',url);
  GifCall.send();

  GifCall.addEventListener('load',function(e){
    // console.log(e);
  var data = e.target.response;
  // console.log(data);
  pushToDOM(data);

  })

}


// show me the GIFs

function pushToDOM(input) {
  var response = JSON.parse(input);
  var imgUrl = response.data;
  imgUrl.forEach(function(image) {
    var src = image.images.fixed_height.url;
    // console.log(src);
    var showGif = document.querySelector('.showGif');
    showGif.innerHTML+='<img src="'+src+'" class=\"container-image\">';
  });

}
