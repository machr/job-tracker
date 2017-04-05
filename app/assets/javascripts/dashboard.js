function getDashboardListings(){
  var apiUrl = '/api/job_listings/';
  var jobListingTemplate = Handlebars.compile( $('#job-listing-template').html() );
  var editListingTemplate = Handlebars.compile( $('#edit-listing-template').html() );
  $.ajax({ url: apiUrl }).done(renderIndex);
  renderEditForm();


  function renderEditForm(event){
    // var listingId = $(event.target).closest('.job-listing').data('id');
    var html = editListingTemplate();
    $('.job-listings').append(html);
    // console.log(listingId);
  }

  // $('.job-listings').on('click', '.job-listing', function(event){
  //   $('.edit-form').toggleClass(show);
  // });

  function renderIndex(listings){
    // console.log(listings);
    listings.forEach(function(listing){
      var html = jobListingTemplate(listing);
      $('.job-listings').append(html);
    });
  }
}
