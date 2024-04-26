$(document).ready(function () {
    
    var table = $('#artTable').DataTable({
        ajax: {
            url: 'https://api.artic.edu/api/v1/artworks',
            dataSrc: 'data',
        },
        columns: [
            { data: 'id' },
            { data: 'artist_title' },
            { data: 'title' },
            { data: 'classification_title' },
            { data: 'date_display' }
        ],
        columnDefs: [
            {
                targets: 0,
                searchable: false,
                visible: false,
            }
        ],
    });

    $('tbody').on('click', 'tr', function () {
        console.log(table.row(this).data());
    });

});