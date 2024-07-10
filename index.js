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
            order: [[0, 'asc']],
          });

  
    });
});