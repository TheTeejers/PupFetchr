//get json from server.js using ajax

$(document).ready(function(){
  console.log('Document ready');

  $('.searchButton').on('click', handleSearch);
  $('.photos').on('click', handleImageClick);
})


// var zip = document.querySelector('input #location');
// console.log(zip)

function handleSearch(evt) {
  evt.preventDefault();
  console.log('Clicked');
  let zip = document.querySelector('#location');
  console.log('Zipp ', zip.value)

   zip = parseInt(zip.value);
   console.log('Zip num ', zip)

     $.ajax({
       method: 'GET',
       url: '/search/' + zip,
       data: 'json',
       dataType: '',
       success: onSuccess,
       error: onError
     })
};

function onSuccess(json) {
  console.log('Success! ');
}

function onError() {
  var errorRes = console.log('Error! ');
}

function handleImageClick(event) {
  event.preventDefault();
  console.log(event)
  let photo = document.querySelector('.photos');

  
    console.log(photo.currentTarget, ' current');

}

    // get the text input field
    // store the search value
    // make an AJAX call with the search value
    // handle the response
