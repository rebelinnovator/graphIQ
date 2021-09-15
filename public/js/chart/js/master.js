window.is_admin = true;

function admin_function() {
    var type = getParameterByName('type');
    socket.on('save_patterns', function(error) {
        $.notify({
            message: 'It found errors:' + error.s,
        }, {
            type: 'danger',
            timer: 3000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    })

    window.widget
        .headerReady()
        .then(function() {
            var button_save = $(widget.createButton());
            button_save.text('Save Pattern');
            button_save.on('click', function() {
                var points = [];
                widget
                    .chart()
                    .getAllShapes()
                    .forEach(function(shape) {
                        var obj = widget.chart().getShapeById(shape.id);
                        var pattern_points = obj.getPoints();
                        var result = true;

                        points.push({
                            type: shape.name,
                            points: pattern_points,
                            overrides: obj.getProperties(),
                        })

                    });

                socket.emit('save_patterns', {
                    data: points,
                    symbol: widget.chart().symbol(),
                    type: type,
                });
                alert('Pattern was successfully saved.')
            });

            var button_decline = $(widget.createButton());
            button_decline.text('Delete Pattern');
            button_decline.on('click', function() {

                socket.emit('delete_patterns', {
                    symbol: widget.chart().symbol(),
                    type: type,
                });

                alert('Pattern was successfully Deleted.');
            });
        })
}
//ждем пока не создатся виджет
var interval_id = setInterval(function() {
    if (window.widget != undefined) {
        clearInterval(interval_id);
        admin_function();
    }
}, 1000)