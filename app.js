$(document).ready(function () {
    
    var table = $('#artTable').DataTable({
        ajax: {
            url: 'https://api.artic.edu/api/v1/artworks',
            dataSrc: 'data',
        },
        columns: [
            { data: 'artist_title' },
            { data: 'title' },
            { data: 'classification_title' },
            { data: 'date_display' }
        ],
    });

    $('tbody').on('click', 'tr', function () {
        var data = table.row(this).data();
        
        var artModal = new bootstrap.Modal(document.getElementById('artModal'));
        var title = document.getElementById('modal-title');
        var artist = document.getElementById('modal-artist');
        var origin = document.getElementById('modal-origin');
        var year = document.getElementById('modal-year');
        var materials = document.getElementById('modal-materials');
        var imageURL = document.getElementById('modal-imageURL');
        var imageALT = document.getElementById('modal-imageALT');
        var description = document.getElementById('modal-description');
        var dimensions = document.getElementById('modal-dimensions');
        var medium = document.getElementById('modal-medium');
        var collection = document.getElementById('modal-collection');

        artModal.show();
    });

});