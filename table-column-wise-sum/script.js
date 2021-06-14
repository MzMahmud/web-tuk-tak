function getTotalColId(tableId, columnIndex) {
    return tableId + '-total-col-' + columnIndex;
}

function addTotalRow(tableId, totalTitle, totalTitleColSpan) {
    const table = document.getElementById(tableId);
    const nCols = table.rows[0].cells.length;

    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.colSpan = totalTitleColSpan;
    titleTd.innerText = totalTitle;

    tr.append(titleTd);

    for (let columnIndex = totalTitleColSpan; columnIndex < nCols; columnIndex++) {
        const td = document.createElement('td');
        td.id = getTotalColId(tableId, columnIndex);
        tr.append(td);
    }

    const tableFoot = document.createElement('tfoot');
    tableFoot.append(tr);
    table.append(tableFoot);
}

function getIfValidOrOther(str, other = 0) {
    const num = Number(str.trim());
    return isNaN(num) ? other : num;
}

function showSumOfColumnValues(tableId, columnIndex) {
    const tableBody = document.querySelector('#' + tableId + " tbody");
    const columns = [...tableBody.rows].map(row => row.cells[columnIndex]);

    const columnsValueSum = columns.reduce((acc, val) => acc + extractCellValue(val), 0);

    const totalCol = document.getElementById(
        getTotalColId(tableId, columnIndex)
    );
    totalCol.innerText = columnsValueSum;
}

function extractCellValue(cellElement) {
    const input = cellElement.querySelector('input');
    const val = input ? input.value : cellElement.innerText;
    return getIfValidOrOther(val);
}

function sumThisColumn() {
    const tableId = this.closest('table').id;
    const columnIndex = this.closest('td').cellIndex;
    showSumOfColumnValues(tableId, columnIndex);
}

function setupTotalRow(tableId, totalTile, totalTitleColSpan, colIndices) {
    addTotalRow(tableId, totalTile, totalTitleColSpan);

    colIndices.forEach(columnIndex => showSumOfColumnValues(tableId, columnIndex));

    const colIndicesSet = new Set(colIndices);
    document.querySelectorAll('#' + tableId + ' tbody td input').forEach(input => {
        const columnIndex = input.closest('td').cellIndex;
        if (colIndicesSet.has(columnIndex))
            input.onkeyup = sumThisColumn;
    });
}