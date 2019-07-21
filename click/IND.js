$(document).ready (function () {
    "use strict";

    $('div').click(function (e) {
            var x = (e.offsetX === undefined) ? e.layerX : e.offsetX;
            var y = (e.offsetY === undefined) ? e.layerY : e.offsetY;

            var str='<div class="small"><p>x='+x+'</p><p></p>y='+y+'</p></div>';

            $('div').append(str);
            $('div.small').css( {
                "left":x,
                "top":y,
            }
            )


        }
    );
});