(function() {
    // window.addEventListener('click',(e) => {
    //     console.log(e.button);
    //     if(e.button === 2) {
    //         console.log('kk');
    //         e.returnValue = false;
    //         e.cancelBubble = true;
    //         return false;
    //     }
    // })
    document.oncontextmenu = function() {
        return false;
    }
}) ()