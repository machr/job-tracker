$(document).ready(function() {
  // Callback to Handlebar function
  if($('#job-listing-template').length) {
    getDashboardListings();
    updateListing();
    createNewListing();
    // deleteListing();
  }
});
