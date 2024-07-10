fetch('pvpokeplus.csv')
.then(response => response.text())
.then(text => {
    let rows = text.split('\n').slice(1); // Skip header row
    rows.forEach(row => {
        const cols = row.split(',');
        if (cols.length == 8) { // Avoid empty rows
            let tr = document.createElement('tr');
            cols.forEach(col => {
                let td = document.createElement('td');
                if (col=='1000') {
                    td.className = 'font-zero';
                }
                td.innerText = col;
                tr.appendChild(td);
            });
            document.querySelector('#myTable tbody').appendChild(tr);
        } else {
            console.log(row)
        }
    });
    $(document).ready(function() {
        $('#myTable').DataTable({
            pageLength: 1000,
            searching: true,
            info: false,
            lengthChange: false,
            paging: false,
            language: {
              search: "",
              searchPlaceholder: "Search"
            },
            fixedHeader: {
              header: true,
              footer: true
            },
            scrollCollapse: true,
            scrollX: false,
            scrollY: "90vh",
            order: [[0, 'asc']],
          });


        for (let i = 5; i <= 11; i++) {
            $('table.dataTable > thead > tr > td:nth-child(' + (i) + ')').addClass('invisible');
            $('table.dataTable > thead > tr > th:nth-child(' + (i) + ')').addClass('invisible');
        }

        for (let i = 1; i <= 4; i++) {
            $('table.dataTable > thead > tr > td:nth-child(' + (i) + ')').addClass('center');
            $('table.dataTable > thead > tr > th:nth-child(' + (i) + ')').addClass('center');
        }

    });
});