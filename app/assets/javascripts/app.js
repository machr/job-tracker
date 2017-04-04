console.log('log');

function listingsIndex(){
  var apiUrl = '/api/job_listings/';
  var jobListingTemplate = Handlebars.compile( $('#job-listing-template').html() );
  $.ajax({ url: apiUrl }).done(renderIndex);

  // $.ajax({
  //   url: apiUrl,
  //   method: 'get'
  // }).done(function(listings){
  //   console.log(listings);
  // });

  function renderIndex(listings){
    console.log(listings);
    listings.forEach(function(listing){
      var html = jobListingTemplate(listing);
      $('.job-listings').append(html);
    });
  }
}




$(document).ready(function() {
  // Callback to Handlebar function
  listingsIndex();
});
