var apiUrl = '/api/job_listings/';

// Callbacks are in App.js
function getDashboardListings(){
  var jobListingTemplate = Handlebars.compile( $('#job-listing-template').html() );
  $.ajax({ url: apiUrl }).done(renderIndex);
  function renderIndex(listings){
    // console.log(listings);
    listings.forEach(function(listing){
      listing.created_at = formatDisplayDate(listing.created_at);
      var colorClass = getColorStatus(listing.status);
      var $html = $(jobListingTemplate(listing));
      $html.find('.status').addClass(colorClass);
      $('.job-listings').append($html);
    });
  }
}

function getColorStatus(status_name){
  var color = "";
  switch(status_name){
    case "Application Submitted":
    color = "status-submited";
    break;

    case "Just Added":
    color = "status-black";
    break;

    case "Rejected":
    color = "status-red"
    break;

    default:
    break;
  }
  return color;
}

function formatDisplayDate(oridate){
  var dateConverted = new Date(oridate);
  var formattedDate = dateConverted.getDate() + " / " + (dateConverted.getMonth()+1) + " / " + dateConverted.getFullYear();
  return formattedDate;
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
    $('.edit-form-wrap').addClass('show');

    $('.edit-form-wrap').on('click', '.delete', function(event) {
      $('.edit-form-wrap').removeClass('show');
    });

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
        //format date to dd/mm/yyyy
        listing.created_at = formatDisplayDate(listing.created_at);
        // find child element in .job-listings that has a matching data-id
        var $jobListings = $('.job-listings');
        // console.log($jobListings);
        var $currentlistingElement = $('[data-id=' + listingId + ']');
        // console.log(currentlistingElement);
        // change values to ajax response in child element
        var jobListingTemplate = Handlebars.compile( $('#job-listing-template').html() );

        var colorClass = getColorStatus(listing.status);
        var $updatedListing = $(jobListingTemplate(listing));
        $updatedListing.find('.status').addClass(colorClass);
        $currentlistingElement.replaceWith($updatedListing);
      });
    });

    $('#delete-listing').on('click', function(event){
      // var currentListing = $(event.target).closest('.job-listing');
      var listingId = currentListing.data('id');
      console.log('Deleted ' + listingId);
      $.ajax({
        url: apiUrl + listingId,
        method: 'delete'
      }).done(function(){
        currentListing.fadeOut(250, function() {
          currentListing.remove();
        });
      });
    });
  });

}

function createNewListing(){
  // get handlebar tempalte for creating, and appending it too page
  var createListingTemplate = Handlebars.compile( $('#create-listing-template').html());
  var compiledTemplate = createListingTemplate();
  $('.create-listing-wrap').append(compiledTemplate);

  $('#add-listing').on('click', function(event) {
    event.preventDefault();
    console.log('Add listing clicked');
      $.ajax({
        url: apiUrl,
        method: 'post',
        data: {
          position: $('.create-listing-position').val(),
          company: $('.create-listing-company').val(),
          contact: $('.create-listing-contact').val(),
          url: $('.create-listing-url').val(),
          notes: $('.create-listing-notes').val(),
          status: $('.create-listing-status').val()
        }
      }). done( function(newListing) {
        console.log(newListing);

        var createListingTemplate = Handlebars.compile( $('#job-listing-template').html());
        var compiledTemplate = createListingTemplate(newListing);
        $('.job-listings').prepend(compiledTemplate);

        $('#create-listing-form').trigger("reset");
      }); // End .done
    }); // End create-card-action click handler
} //end createNewListing
