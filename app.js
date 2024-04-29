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
        var selection = table.row(this).data();
        var artModal = new bootstrap.Modal(document.getElementById('artModal'));
        
        var image = document.getElementById('modal-image');
        image.src = `https://www.artic.edu/iiif/2/${selection.image_id}/full/843,/0/default.jpg`;
        image.alt = selection.thumbnail.alt_text;
        
        document.getElementById('modal-title').innerHTML = `"${selection.title}"`;
        document.getElementById('modal-year').innerHTML = selection.date_display;
        document.getElementById('modal-artist').innerHTML = selection.artist_display;
        document.getElementById('modal-materials').innerHTML = selection.medium_display;
        document.getElementById('modal-description').innerHTML = selection.description;
        document.getElementById('modal-dimensions').innerHTML = selection.dimensions;
        document.getElementById('modal-medium').innerHTML = selection.medium_display;
        document.getElementById('modal-collection').innerHTML = selection.credit_line;
        document.getElementById('modal-copyright').innerHTML = selection.copyright_notice;

        artModal.show();
    });

});