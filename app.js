$(document).ready(function () {    
    var table = $('#artTable').DataTable({
        ajax: {
            url: 'https://api.artic.edu/api/v1/artworks?fields=id,title,date_display,artist_title,artist_display,classification_title,medium_display,dimensions,description,credit_line,copyright_notice,image_id,thumbnail&limit=100',
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

        if (selection.image_id === null) {
            image.src = "./default-image.jpeg";
        } else {
            image.src = `https://www.artic.edu/iiif/2/${selection.image_id}/full/843,/0/default.jpg`;

            if (selection.thumbnail === null) {
                image.alt = "";
            } else {
                image.alt = selection.thumbnail.alt_text;
            }
        }

        document.getElementById('modal-id').innerHTML = selection.id;
        document.getElementById('modal-title').innerHTML = `"${selection.title}"`;
        document.getElementById('modal-year').innerHTML = `cir. ${selection.date_display}`;
        document.getElementById('modal-artist').innerHTML = selection.artist_display;
        document.getElementById('modal-materials').innerHTML = selection.medium_display;
        document.getElementById('modal-dimensions').innerHTML = selection.dimensions;
        document.getElementById('modal-description').innerHTML = selection.description;
        document.getElementById('modal-collection').innerHTML = selection.credit_line;
        document.getElementById('modal-copyright').innerHTML = selection.copyright_notice;

        artModal.show();
    });
});