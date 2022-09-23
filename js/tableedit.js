var dataSet = [
    [localStorage["datap1"],localStorage["datab1"],localStorage["dataq1"]],
    [localStorage["datap2"],localStorage["datab2"],localStorage["dataq2"]],
    [localStorage["datap3"],localStorage["datab3"],localStorage["dataq3"]],
    [localStorage["datap4"],localStorage["datab4"],localStorage["dataq4"]],
    [localStorage["datap5"],localStorage["datab5"],localStorage["dataq5"]],
    [localStorage["datap6"],localStorage["datab6"],localStorage["dataq6"]],
    [localStorage["datap7"],localStorage["datab7"],localStorage["dataq7"]],
];
 
$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'Obtido por:' },
            { title: 'Bonus Extra:' },
            { title: 'Quantidade:' },
        ],
    });
});