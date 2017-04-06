var apiUrl = '/api/job_listings/';

function getDashboardListings(){
  var jobListingTemplate = Handlebars.compile( $('#job-listing-template').html() );
  $.ajax({ url: apiUrl }).done(renderIndex);

  function renderIndex(listings){
    // console.log(listings);
    listings.forEach(function(listing){
      var x = new Date(listing.created_at);
      var fullDate = x.getDate() + " / " + (x.getMonth()+1) + " / " + x.getFullYear();
      listing.created_at = fullDate;
      var html = jobListingTemplate(listing);
      $('.job-listings').append(html);
    });
  }
}


function updateListing(){
  // Grab editListing template and append it to edit-form-wrap
  var editListingTemplate = Handlebars.compile( $('#edit-listing-template').html());
  var html = editListingTemplate();
  $('.edit-form-wrap').append(html);

  // On click - set edit forms input value to event.targets values for easier editing
  $('.job-listings').on('click', '.job-listing', function(event){
    var currentListing = $(event.target).closest('.job-listing');
    var listingId = currentListing.data('id');
    // $('.edit-form-wrap').addClass('show');

    console.log(listingId);
    $.ajax({
      url: apiUrl + listingId
    }).done(function(listing){
      console.log(listing);
      $('.listing-position').val(listing.position);
      $('.listing-company').val(listing.company);
      $('.listing-contact').val(listing.contact);
      $('.listing-url').val(listing.url);
      $('.listing-notes').val(listing.notes);
    });

    $('#edit-listing').on('click', function(event){
      event.preventDefault();
      console.log('clicked');
      $.ajax({
        url: apiUrl + listingId,
        data: {
          position: $('.listing-position').val(),
          company: $('.listing-company').val(),
          contact: $('.listing-contact').val(),
          url: $('.listing-url').val(),
          notes: $('.listing-notes').val(),
          status: $('.listing-status').val()
        },
        method: 'PUT'
      }).done(function(listing){
        // console.log(listingId);

        // find child element in .job-listings that has a matching data-id
        var $jobListings = $('.job-listings');
        // console.log($jobListings);
        var $currentlistingElement = $('[data-id=' + listingId + ']');
        // console.log(currentlistingElement);
        // change values to ajax response in child element
        var jobListingTemplate = Handlebars.compile( $('#job-listing-template').html() );
        var updatedListing = jobListingTemplate(listing);
        $currentlistingElement.replaceWith(updatedListing);
      });
    });

  });

}
// Callbacks are in App.js
