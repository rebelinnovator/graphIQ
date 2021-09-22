function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

document.addEventListener("DOMContentLoaded", function(event) {
    window.chartReady = false;

    function timeframe(timeframe) {
        switch (timeframe) {
            case 'M1':
                return '1';
                break;
            case 'M5':
                return '5';
                break;
            case 'M15':
                return '15';
                break;
            case 'M30':
                return '30';
                break;
            case 'H1':
                return '60';
                break;
            case 'H4':
                return '240';
                break;
            case 'D1':
                return '1D';
                break;
        }
    }


    function get_symbol_name() {
        return modalwidget
            .chart()
            .symbol()
            .split(':')
            .slice(-3)
            .join(':');
    }

    var first_time = true;
    var ticker = '';
    // var host = window.location.origin;
    // console.log("asdfasdf");
    // console.log("HOST",host);
//    var host = "http://45.33.120.127";
    var host = "http://45.33.118.136";

    var pattern_type = getParameterByName('type');
    
    window.socket = io(host, {
        path: '/api',
    });

    socket.emit('start_symbol', {
        type: pattern_type,
    })

    function transform_timezone(key) {
        var timezones = {
            '-3': 'America/Sao_Paulo',
            '-3': 'America/Argentina/Buenos_Aires',
            '-5': 'America/Bogota',
            '-5': 'America/New_York',
            '-5': 'America/Toronto',
            '0': 'UTC',
            '1': 'Europe/London',
            '1': 'Europe/Berlin',
            '1': 'Europe/Madrid',
            '1': 'Europe/Paris',
            '1': 'Europe/Warsaw',
            '1': 'Europe/Zurich',
            '2': 'Africa/Johannesburg',
            '2': 'Europe/Athens',
            '3': 'Europe/Moscow',
            '3': 'Europe/Istanbul',
            '3.30': 'Asia/Tehran',
            '4': 'America/Caracas',
            '4': 'Asia/Dubai',
            '5': 'Asia/Ashkhabad',
            '5.30': 'Asia/Kolkata',
            '5.45': 'Asia/Kathmandu',
            '6': 'America/Chicago',
            '6': 'America/El_Salvador',
            '6': 'America/Mexico_City',
            '6': 'Asia/Almaty',
            '7': 'America/Phoenix',
            '7': 'Asia/Bangkok',
            '7': 'US/Mountain',
            '8': 'America/Los_Angeles',
            '8': 'America/Vancouver',
            '8': 'Asia/Hong_Kong',
            '8': 'Asia/Shanghai',
            '8': 'Asia/Singapore',
            '8': 'Asia/Taipei',
            '9': 'Asia/Seoul',
            '9': 'Asia/Tokyo',
            '9.30': 'Australia/Adelaide',
            '10': 'Australia/Brisbane',
            '10': 'Australia/Sydney',
            '10': 'Pacific/Honolulu',
            '12': 'Pacific/Auckland',
            '12.45': 'Pacific/Chatham',
            '13': 'Pacific/Fakaofo',
            // 'Australia/ACT'
        }
        return timezones[key];
    }

    function interval2timeframe(interval) {
        var timeframe = '';
        switch (interval) {
            case '5':
                timeframe = 'M5';
                break;
            case '15':
                timeframe = 'M15';
                break;
            case '30':
                timeframe = 'M30';
                break;
            case '60':
                timeframe = 'H1';
                break;
            case '240':
                timeframe = 'H4';
                break;
            case '1D':
                timeframe = 'D1';
                break;
        }

        return timeframe
    }

    socket.on('start_symbol', function(symbol) {

        if (symbol.ticker.indexOf('undefined') > -1) {
            setTimeout(function() {
                socket.emit('new_symbol');
            }, 1000);
            return;
        }
        ticker = symbol.ticker;
        window.pattern_id = symbol.id;
        var host = window.location.host;
        window.modalwidget = new TradingView.widget({
            symbol: symbol.ticker,
            autosize: true,
            // debug: true,
            interval: timeframe(symbol.timeframe),
            timeframe: '60',
            timezone: transform_timezone('2'),
            symbol_search_request_delay: 500,
            container_id: "modalchart",
            //  BEWARE: no trailing slash is expected in feed URL 
            datafeed: new Datafeeds.UDFCompatibleDatafeed(socket, 10000),
            library_path: "js/chart/charting_library/",
            charts_storage_url: "/storage",
            charts_storage_api_version: "1.1",
            client_id: document.getElementById('project').innerText,
            user_id: document.getElementById('user_id').innerText,
            custom_indicators_getter: function(PineJS) {
                
                return Promise.resolve([{
                    name: "My Customizing Indicators",
                    metainfo: {
                        "_metainfoVersion": 27,
                        "id": "My Customizing Indicators@tv-basicstudies-1",
                        "scriptIdPart": "",
                        "name": "My Customizing Indicators",
                
                        "description": "My Customizing Indicators",
                
                        "shortDescription": "mycustomindi",
                
                        "is_hidden_study": false,
                        "is_price_study": true,
                        "isCustomIndicator": true,
                
                        isTVScript: !1,
                        isTVScriptStub: !1, 
                
                        "plots": [
                            { "id": "plot_0", "type": "line" },
                            { "id": "plot_1", "type": "line" },
                            { "id": "plot_2", "type": "line" },
                            { "id": "plot_3", "type": "line" },
                            { "id": "plot_4", "type": "line" },
                        ],
                        "defaults": {
                            "styles": {
                                    "plot_0": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#0845A0" },
                                    "plot_1": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#C0C0C0" },
                                    "plot_2": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#ADD8E6" },
                                    "plot_3": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#FF0000" },
                                    "plot_4": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#FFFF00" },
                            },
                            "precision": 4,
                            "inputs": { "in_0": 9, "in_1":"close", "in_2":0 },
                        },
                        "styles": {
                            "plot_0": { "title": "800 Day EMA", "histogramBase": 0, "joinPoints": !1 },
                            "plot_1": { "title": "200 Day EMA", "histogramBase": 0, "joinPoints": !1 },
                            "plot_2": { "title": "50 Day EMA", "histogramBase": 0, "joinPoints": !1 },
                            "plot_3": { "title": "13 Day EMA", "histogramBase": 0, "joinPoints": !1 },
                            "plot_4": { "title": "5 Day EMA", "histogramBase": 0, "joinPoints": !1 },
                        },
                        "inputs": [
                            { "id": "in_0", "name": "Length", "defval": 9, "type": "integer", "min": 1, "max": 1e4 },
                            { "id": "in_1", "name":"Source", "defval":"close", "type":"source", "options":["open","high","low","close","hl2","hlc3","ohlc4"]},
                            { "id": "in_2", "name": "Offset", "defval": 0, "type": "integer", "min": -1e4, "max": 1e4 },
                        ],
                    },
                
                    constructor: function() {
                
                        this.main = function(context, inputCallback) {
                            this._context = context;
                            this._input = inputCallback;
            
                            var i=PineJS.Std[this._input(1)](this._context);
                            r=this._input(0);
                            o=this._input(2);
                            return[{value:PineJS.Std.ema(this._context.new_var(i),800,this._context),offset:o},
                                {value:PineJS.Std.ema(this._context.new_var(i),200,this._context),offset:o},
                                {value:PineJS.Std.ema(this._context.new_var(i),50,this._context),offset:o},
                                {value:PineJS.Std.ema(this._context.new_var(i),13,this._context),offset:o},
                                {value:PineJS.Std.ema(this._context.new_var(i),5,this._context),offset:o}];
                            
                        }
                    }
                }]);
            },
            // load_last_chart:true,
            locale: getParameterByName('lang') || "en",
            enabled_features: ["hide_left_toolbar_by_default"],
            disabled_features: ["header_compare", "border_around_the_chart"],
            snapshot_url: 'http://' + host + '/save_screenshot.php',
            
            /*
            overrides: {
                "symbolWatermarkProperties.color": "rgba(255, 0, 0, 1)",
                "paneProperties.vertGridProperties.color": "rgba(0, 255, 0, 1)",
                "paneProperties.horzGridProperties.color": "rgba(0, 0, 255, 1)",
                "paneProperties.legendProperties.showStudyTitles": false,
                "paneProperties.legendProperties.showStudyValues": false,
                "volumePaneSize": "small",
                "mainSeriesProperties.showCountdown": true,
                "mainSeriesProperties.candleStyle.upColor": "#0f0",
                "mainSeriesProperties.candleStyle.borderUpColor": "#f00",
               
            },
            */
            
            overrides: {
                // "theme" : "#FF0000",
                // "volumePaneSize": "medium", 
                // "symbolWatermarkProperties.color": "#00FF00", 
                // "symbolWatermarkProperties.transparency": 100, 
                // "paneProperties.topMargin": 10, 
                // "paneProperties.background": "#00FF00", 
                // "paneProperties.vertGridProperties.color": "#FF0000", 
                // "paneProperties.horzGridProperties.color": "#F2F2F2", 
                // "scalesProperties.showStudyLastValue": true
                "symbolWatermarkProperties.color": "rgba(0, 0, 0, 0)",
                "paneProperties.vertGridProperties.color": "rgba(0, 0, 0, 0)",
                "paneProperties.horzGridProperties.color": "rgba(0, 0, 0, 0)",
                "paneProperties.legendProperties.showStudyTitles": false,
                "paneProperties.legendProperties.showStudyValues": false,
                "volumePaneSize": "small",
                "mainSeriesProperties.showCountdown": true,
                "mainSeriesProperties.candleStyle.upColor": "#4169e1",
                "mainSeriesProperties.candleStyle.borderUpColor": "#4169e1",
            },
            
            
            theme: 'dark',
            style: '1',
            //toolbar_bg: "#000",
            drawings_access: {
                type: 'black',
                tools: [{
                    name: "Regression Trend"
                }]
            },
        });

        modalwidget.headerReady()
            .then(function() {
                var button = $(modalwidget.createButton());
                var symbol_name = get_symbol_name();

                //button.text(get_symbol_name());
                button.text(symbol_name.split(',')[0].split(':')[1]);
            })

        modalwidget.onChartReady(function() {

            modalwidget
                .chart()
                .onIntervalChanged()
                .subscribe(null, function(interval, obj) {

                    // change symbol to one with right timeframe
                    var new_symbol_name = get_symbol_name()
                        .split(':')
                        .slice(-3)
                        .slice(0, 2);

                    new_symbol_name.push(interval2timeframe(interval))

                    modalwidget.chart().setSymbol(new_symbol_name.join(':'));
                })

            window.chartReady = true;

            modalwidget.chart().setResolution(timeframe(symbol.timeframe));
            window.get_patterns = function() {
                socket.emit('patterns', {
                    symbol: get_symbol_name(),
                    type: pattern_type,
                    id: window.pattern_id,
                });
            }
            get_patterns();
            modalwidget.chart().onDataLoaded().subscribe(null, function() {
                console.log('data loaded');

                get_patterns();
            });
            // при смене символа чистим массив с таймстампами предыдущего символа
            modalwidget.chart().onSymbolChanged().subscribe(null, function(symbol) {
                ticker = symbol.ticker;
                first_time = true;
                var symbol_name = get_symbol_name();
                modalwidget.chart().setResolution(timeframe(symbol_name.split(',')[0].split(':')[2]));
                //modalwidget.chart().setResolution(timeframe(symbol_name.split(',')[0]));
                button.text(symbol_name.split(',')[0].split(':')[1]);

            });
			//modalwidget.chart().createStudy('Williams Fractal', true, false);
            modalwidget.chart().createStudy('My Customizing Indicators', true, false);
            if (getParameterByName('type') == 'Pick_Pocket') {
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [200],
                    null, {
                        'plot.color.0': '#bc59ff',
                        'plot.linewidth': 3,

                    }
                );
                modalwidget.chart().createStudy('SuperTrend', false, false, [2], null, {
                    'Color 0.color.0': '#4169e1'
                });
                modalwidget.chart().createStudy('Williams Fractal', false, false, [2], null, {
                    'Up Fractals.color.0': '#ff3b31',
                    'Down Fractals.color.0': '#4169e1',
                    'Down Fractals.plottype': 'Arrow Up'
                });

            } else if (getParameterByName('type') == 'Simple_Scalper') {
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [200],
                    null, {
                        'plot.color.0': '#bc59ff',
                        'plot.linewidth': 3,

                    }
                );
                modalwidget.chart().createStudy('Stochastic', false, false, [5, 1, 1], null, {
                    "%d.color": "#000000",
                    "%k.color": "#000000",
                    "upperlimit.color": "#ff3b31",
                    "lowerlimit.color": "#4169e1",
                    "lowerlimit.linewidth": 3,
                    "upperlimit.linewidth": 3,
                    "hlines background.color": "#ffffff"
                });
                modalwidget.chart().createStudy('Relative Strength Index', false, false, [4], null, {
                    "plot.color.0": "#000000",
                    "upperlimit.color": "#ff3b31",
                    "lowerlimit.color": "#4169e1",
                    "lowerlimit.linewidth": 3,
                    "upperlimit.linewidth": 3,
                    "hlines background.color": "#ffffff"
                });
                modalwidget.chart().createStudy('Bollinger Bands', false, false, [20], null, {
                    'plot.color.0': '#D4AF37',
                    'plot.linewidth': 6,
                    'upper.color.0': '#ff3b31',
                    'upper.linewidth': 6,
                    'lower.color.0': '#4169e1',
                    'lower.linewidth': 6,
                    'plots background.color.0': '#ffffff'
                });
                modalwidget.chart().createStudy('Parabolic SAR', false, false, [2], null, {
                    'plot.color.0': '#bc59ff',
                    'plot.linewidth': 2,
                    'plot.plottype': 'circles'
                });
                modalwidget.chart().createStudy('Volume', true, false, [1], null, {
                    'volume.color.1': '#4169e1'
                });


            } else if (getParameterByName('type') == 'Web_Slinger') {
                modalwidget.chart().createStudy(
                    'Ichimoku Cloud', false, false, [4], null, {
                        'plot.color.0': '#4169e1',
                        'plot.linewidth': 3,
                        'Plots Background[Color 1].color.1': '#4169e1'
                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [5],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,
                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [10],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [15],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [20],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [25],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 4,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [30],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [35],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [40],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [45],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [50],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 4,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [55],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [60],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [65],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [70],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [75],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 4,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [80],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [85],
                    null, {
                        'plot.color.0': '#000',
                        'plot.linewidth': 1,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [90],
                    null, {
                        'plot.color.0': '#A231A2',
                        'plot.linewidth': 5,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average Exponential',
                    false,
                    false, [9],
                    null, {
                        'plot.color.0': '#90EE90',
                        'plot.linewidth': 5,

                    });
                modalwidget.chart().createStudy(
                    'Moving Average',
                    false,
                    false, [9],
                    null, {
                        'plot.color.0': '#137B13',
                        'plot.linewidth': 5,

                    });
            } else {

            }

            var object_ids = [];

            function setRange(timeX, timeD) {
                var half = (timeD - timeX) / 2;
                var start = timeX - half;
                var end = timeD + half;

                modalwidget.chart().setVisibleRange({
                    from: start,
                    to: end,
                });
            }

            function get_symbol_name() {
                var symbol_parts_array = modalwidget.chart().symbol().split(':');
                symbol_parts_array.shift();
                return symbol_parts_array.join(':');
            }

            socket.on('patterns', draw_pattern);

            function draw_pattern(responce) {
                var symbol_name = get_symbol_name();

                if (!responce.error && responce.s == "ok") {
                    // удалить паттерны 
                    object_ids.forEach(function(id, i, array) {
                        modalwidget.chart().removeEntity(id);
                    });

                    object_ids = [];
                }
                var i = 0;
                responce
                    .expert
                    .sort(function(a, b) {
                        return b.time - a.time;
                    })
                    .forEach(function(point) {
                        if (i >= 1) {
                            return;
                        }
                        i++;

                        var color = '#ff3b31'
                        if (getParameterByName('type') == 'Web_Slinger') {
                            var arrow = 0xf143; // down

                            if (point.trend.indexOf('Buy') > -1) {
                                arrow = 0xf143; // up
                                var color = '#4169e1'
                            }
                        } else if (getParameterByName('type') == 'Pick_Pocket') {
                            var arrow = 0xf0d6; // down
                            var color = '#4169e1'
                            if (point.trend.indexOf('Buy') > -1) {
                                arrow = 0xf0d6; // up
                                var color = '#ff3b31'
                            }
                        } else if (getParameterByName('type') == 'Simple_Scalper') {
                            var arrow = 0xf05b; // down

                            if (point.trend.indexOf('Buy') > -1) {
                                arrow = 0xf05b; // up
                                var color = '#4169e1'
                            }
                        } else {
                            var arrow = 0xf063; // down

                            if (point.trend.indexOf('Buy') > -1) {
                                arrow = 0xf062; // up
                                var color = '#4169e1'

                            }
                        }
                        var arrow_id = modalwidget.chart().createShape({
                            time: point.time,
                            price: point.price,
                        }, {
                            shape: 'icon',
                            icon: arrow,
                            zOrder: 'top',
                            overrides: {
                                color: color,
                                backgroundColor: '#FF0000',
                                size: 20,
                            },
                        });

                        object_ids.push(arrow_id);
                        //var text = 'Entry Price:'+point.price
                        var point2 = {
                            time: point.time,
                            price: point.price,
                            channel: 'close'
                        };

                        var options = {
                            shape: 'horizontal_line',
                            text: point.price,
                            lock: false,
                            overrides: {
                                linecolor: '#ffbf5f',
                                linestyle: 1,
                                linewidth: 1,
                                horzLabelsAlign: "right",
                                showPrice: true,
                                showLabel: true,
                                text: 'Entry Price ',
                                textcolor: '#656565',
                                fontsize: 14,
                                vertLabelsAlign: 'bottom',
                                zOrder: 'bottom',
                            }
                        };

                        var line_id = modalwidget.chart().createShape(point2, options);
                        object_ids.push(line_id);
                    });

                // patterns from admin
                var objects_for_shape = ['arrow_up', 'arrow_down', 'flag', 'vertical_line', 'horizontal_line'];
                responce
                    .master
                    .forEach(function(pattern) {
                        // console.log('draw pattern from admin ')
                        var line_id;
                        if (object_ids.includes(pattern.type)) {
                            line_id = modalwidget.chart().createShape(pattern.points, {
                                shape: pattern.type,
                                overrides: pattern.overrides,
                            });
                        } else {
                            line_id = modalwidget.chart().createMultipointShape(pattern.points, {
                                shape: pattern.type,
                                overrides: pattern.overrides
                            });
                        }

                        object_ids.push(line_id);
                    });
            }
            setInterval(get_patterns, 10 * 1000); //setInterval(          
        }); // modalwidget.onChartReady
    });
}); // document ready
