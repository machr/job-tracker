function getDashboardListings(){
  var apiUrl = '/api/job_listings/';
  var jobListingTemplate = Handlebars.compile( $('#job-listing-template').html() );
  $.ajax({ url: apiUrl }).done(renderIndex);


  var editListingTemplate = Handlebars.compile( $('#edit-listing-template').html() );
  var html = editListingTemplate();
  $('.edit-form-wrap').append(html);

  $('.job-listings').on('click', '.job-listing', function(event){
    var listingId = $(event.target).closest('.job-listing').data('id');
    console.log(listingId);
    $.ajax({
      url: apiUrl + listingId
    }).done(function(listing){
      $('.listing-position').val(listing.position);
      $('.listing-company').val(listing.company);
      $('.listing-contact').val(listing.contact);
      $('.listing-url').val(listing.url);
      $('.listing-notes').val(listing.notes);
    });

  } );

  function sendEditedInformation(){
  $('#edit-listing').on('submit', function(event){
        event.preventDefault();
        console.log(listingId);
        $.ajax({
          url: apiUrl + listingId,
          data: {
            position: $('.listing-position').val(),
            company: $('.listing-company').val(),
            contact: $('.listing-contact').val(),
            url: $('.listing-url').val(),
            notes: $('.listing-notes').val()
          },
          method: 'PUT'
        }).done(function(listing){
          console.log(listing);
        });
  });
  }

  function renderIndex(listings){
    console.log(listings);
    listings.forEach(function(listing){
      var html = jobListingTemplate(listing);
      $('.job-listings').append(html);
    });
  }
}


// Callbacks are in App.js
