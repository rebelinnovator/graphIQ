jQuery(document).ready(function($) {
    var menu = $('#cssmenu');
    var pattern_type = getParameterByName('type');

    var transform_algo_name = {
        Simple_Scalper_Ea: 'Algo1',
        TripleFire: 'Algo2',
        Extreme_Scalper: 'Extreme Scalper',
        StarBurst: 'StarBurst',
    };
    // changetext of menu
    $('#cssmenu li>a>span').text(transform_algo_name[pattern_type]);
    //change pattern_name
    $('#cssmenu li>a').attr('data-pattern', pattern_type);

    function socketAvailable() {
        socket.emit('get_symbols', {
            pattern: pattern_type,
        });

        socket.on('get_symbols', function(symbols) {
            var symbol_name = widget
                .chart()
                .symbol()
                .split(':')
                .slice(-3)
                .join(':');

            menu.empty();
            var template = $('<section>\
                    <header>New Trade!</header>\
                    <ol>\
                        <li><strong class="trend">SELL</strong> ON <strong class="symbol">USDJPY</strong> AROUND <strong class="price">110.421</strong></li>\
                        <li>ON TF <strong class="timeframe">240M</strong></li>\
                        <li class="has_master">Has Master Trade</li>\
                        <li class="notes">NOTES:<span>Some notes from server</span></li>\
                        <li>UTC TIME:<strong class="utctime">2019-05-22 13:41:00</strong></li>\
                        <li>LOCAL TIME:<strong class="localtime">2019-05-22 07:41:00</strong></li>\
                        <li>TIME PASSED(MIN):<strong class="timeago">2 HOUR AND 13 MINUTES</strong></li>\
                    </ol>\
                </section>')

            var elements = symbols
                .map(function(item) {
                    var link = template.clone();
                    if (item.name == symbol_name) {
                        link.addClass('selected_item');
                    }

                    if (item.has_master == false) {
                        link.find('.has_master').remove()
                    }
                    if (item.notes) {
                        link.find('.notes span').text(item.notes)
                    } else {
                        link.find('.notes').hide();
                    }

                    link.attr('data-id', item.id);
                    link.find('.trend').text(item.trend);
                    link.find('.symbol').text(item.symbol_name);
                    link.find('.price').text(item.price);
                    link.find('.timeframe').text(item.timeframe);
                    link.find('.utctime').text(item.utctime);
                    link.find('.localtime').text(item.localtime);
                    link.find('.timeago').text(item.agotime);
                    link.attr('data-name', item.name);
                    return link
                })

            menu.append(elements);
        })
    }

    // $('#cssmenu>ul>li>a').on('click', function(event) {
    //     event.preventDefault();
    //     console.log('click');
    //     $(this).find('~ul').slideToggle();
    // })

    $('#cssmenu').on('click', 'section', function(event) {
        event.preventDefault();
        var section = $(this);
        // receive old pattern name
        var old_symbol_name = widget
            .chart()
            .symbol()
            .split(':')
            .slice(-3)
            .join(':');

        var new_symbol_name = section.attr('data-name')
        window.pattern_id = section.attr('data-id')

        if (old_symbol_name == new_symbol_name) {
            get_patterns();
        } else {
            widget.chart().setSymbol(new_symbol_name);
        }

        $('#cssmenu section').removeClass('selected_item');
        section.addClass('selected_item');
    })

    var intervalId = setInterval(function() {
        if (socket && window.chartReady) {
            socketAvailable();
            clearInterval(intervalId);
        }
    }, 1000)
})
