$(function () {
    if ($.fn.bjqs) {
        console.log('gfgf');
        $('.slider').bjqs({
            height      : 373,
            width       : 900,
            'display': 'inline-block',
            'position': 'absolute',
            'responsive': false,
            'automatic': true,
            'nexttext' : '', // Text for 'next' button (can use HTML)
            'prevtext' : '', // Text for 'previous' button (can use HTML)
            'animtype': 'slide'
        });
    }
});