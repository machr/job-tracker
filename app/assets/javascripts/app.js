console.log('log');

function listingsIndex(){
  var apiUrl = '/api/job_listings/';
  var jobListingTemplate = Handlebars.compile( $('#job-listing-template').html() );
  var editListingTemplate = Handlebars.compile( $('#edit-listing-template').html() );
  $.ajax({ url: apiUrl }).done(renderIndex);

  function renderEditForm(event){
    var listingId = $(event.target).closest('.job-listing').data('id');
    console.log(listingId);
  }

  $('.job-listings').on('click', '.job-listing', renderEditForm);

  function renderIndex(listings){
    console.log(listings);
    listings.forEach(function(listing){
      var html = jobListingTemplate(listing);
      $('.job-listings').append(html);
    });
  }
}

// $('#edit-card').on('submit', function(event){
// //       event.preventDefault();
// //       console.log(cardId);
// //       $.ajax({
// //         url: '/api/cards/' + cardId,
// //         data: {
// //           name: $('.edit-card-name').val(),
// //           image_url: $('.edit-card-image-url').val()
// //         },
// //         method: 'PUT'
// //       }).done(function(card){
// //         console.log(card);
// //       });
// //     });



// $('.container').on('click', '.edit-btn', function(event){
//     $('.modal-wrapper').addClass('show');
//     var cardId = $(event.target).closest('.card').data('id');
//
//     $('.modal-wrapper').on('click', '.modal-close-btn', function(event){
//       $('.modal-wrapper').removeClass('show');
//     });
//
//
//     $('#edit-card').on('submit', function(event){
//       event.preventDefault();
//       console.log(cardId);
//       $.ajax({
//         url: '/api/cards/' + cardId,
//         data: {
//           name: $('.edit-card-name').val(),
//           image_url: $('.edit-card-image-url').val()
//         },
//         method: 'PUT'
//       }).done(function(card){
//         console.log(card);
//       });
//     });
//   });





$(document).ready(function() {
  // Callback to Handlebar function
  listingsIndex();
});
