const apiURL = 'https://api.artic.edu/api/v1/artworks';

$(document).ready( function () {
    $('#artTable').DataTable( {
        ajax: {
            url: apiURL,
            dataSrc: 'data'
        },
        columns: [
            { data: 'artist_title' },
            { data: 'title' },
            { data: 'classification_title' },
            { data: 'date_display' }
        ]
    });
} );