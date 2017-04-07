$(document).ready(function() {
  // Callback to Handlebar function
  if($('#job-listing-template').length) {
    getDashboardListings();
    updateListing();
    createNewListing();
    // deleteListing();

    $('.add-listing-btn').on('click', function(event){
      event.preventDefault();
      $('.create-listing-wrap').slideToggle(300);
    });
  }
});
