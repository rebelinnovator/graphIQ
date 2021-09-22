// BTC, ETH, XRP, ADA, DOT, SOL, DOGE, BNB
let chartSymbolList = [
    {
        cname:'side-bar-spaceship',
        list:[
            'MAXR', 'LMT', 'SPCE', 'ASTR'
        ],
    },
    {
        cname:'side-bar-eth',
        list:[
            'BTC', 'ETH', 'XRP', 'ADA', 'DOT', 'SOL', 'DOGE', 'BNB',
        ],
    },
]
let ActIcon = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 10V17" stroke="#498C64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.5563 4H11.4437C11.3123 4 11.1823 4.02587 11.061 4.07612C10.9396 4.12638 10.8294 4.20004 10.7365 4.29289L4.29289 10.7365C4.20004 10.8294 4.12638 10.9396 4.07612 11.061C4.02587 11.1823 4 11.3123 4 11.4437V20.5563C4 20.6877 4.02587 20.8177 4.07612 20.939C4.12638 21.0604 4.20004 21.1706 4.29289 21.2635L10.7365 27.7071C10.8294 27.8 10.9396 27.8736 11.061 27.9239C11.1823 27.9741 11.3123 28 11.4437 28H20.5563C20.6877 28 20.8177 27.9741 20.939 27.9239C21.0604 27.8736 21.1706 27.8 21.2635 27.7071L27.7071 21.2635C27.8 21.1706 27.8736 21.0604 27.9239 20.939C27.9741 20.8177 28 20.6877 28 20.5563V11.4437C28 11.3123 27.9741 11.1823 27.9239 11.061C27.8736 10.9396 27.8 10.8294 27.7071 10.7365L21.2635 4.29289C21.1706 4.20004 21.0604 4.12638 20.939 4.07612C20.8177 4.02587 20.6877 4 20.5563 4Z" stroke="#498C64" stroke-width="2" stroke-miterlimit="10"/>
        <path d="M16 23C16.8284 23 17.5 22.3284 17.5 21.5C17.5 20.6716 16.8284 20 16 20C15.1716 20 14.5 20.6716 14.5 21.5C14.5 22.3284 15.1716 23 16 23Z" fill="#498C64"/>
    </svg>
`
let GraphIcon = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 26H4V6" stroke="#960D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.0002 8L16.0002 18L12.0002 14L4.00024 22" stroke="#960D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.0002 13V8H21.0002" stroke="#960D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`
$(".side-bar-item").click(function(){
    let id = $(this).attr("id");
    
    if(id == 'side-bar-spaceship' || id == 'side-bar-eth'){
        resetChartSymbolPanel(id);
    }
})
const resetChartSymbolPanel = (id) =>{
    let phtml = ""
    //FXCM:GBPCAD:M5
    let cindex = chartSymbolList.findIndex((c)=>c.cname == id)
    console.log(cindex)
    chartSymbolList[cindex].list.forEach(symbol => {
        phtml += `
            <div class="chartSymbolItem" id="FXCM:${symbol}:M5">
                <div class="chartSymbolItemName">
                    ${symbol}
                </div>
                <div class="chartSymbolItemAct">
                    ${ActIcon}
                </div>
                <div class="chartSymbolItemGraph">
                    ${GraphIcon}
                </div>
            </div>
        `
    });
    $('.chartSymbolPanel').html(phtml);
}
resetChartSymbolPanel('side-bar-spaceship');
$(document).on('click', '.chartSymbolPanel > .chartSymbolItem > .chartSymbolItemName', function() {
    //let symbolName = $(this).attr('id');
    widget.chart().setSymbol($(this).parent().attr('id'));
})

$(document).on('click', '.chartSymbolPanel > .chartSymbolItem > .chartSymbolItemAct', function() {
    console.log($(this).parent().attr('id'));
    $("#chartModalTitle").text($(this).parent().attr('id'))
    modalwidget.chart().setSymbol($(this).parent().attr('id'));
    $("#chartModal").modal('show')
})
