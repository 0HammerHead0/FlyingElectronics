function getScrollInfo(ind) {
    const pagescroll = document.getElementById('page' + String(ind) + 'scroll');
    const thumb = document.getElementById('scrollBar-thumb-page'+String(ind));
    const scrollHeight = pagescroll.scrollHeight;
    const clientHeight = pagescroll.clientHeight;
    // const scrollbarHeight = clientHeight * clientHeight / scrollHeight;
    // thumb.style.height = scrollbarHeight + 'px';
    const amountScrolled = pagescroll.scrollTop;
    const percentage = amountScrolled / (scrollHeight - clientHeight);
    thumb.style.top = (percentage * (clientHeight - thumb.offsetHeight)) + 'px';
    // console.log('amountScrolled: '+String(ind) +": "+ amountScrolled);
    console.log('scrollHeight: ' + String(ind)+": "+ scrollHeight);
    console.log('clientHeight: ' +String(ind)+": "+ clientHeight);
}
export function textScrollBar(){    
    for(let i=2;i<=9;i++){
        const pagescroll = document.getElementById('page' + String(i) + 'scroll');
        const thumb = document.getElementById('scrollBar-thumb-page'+String(i));
        // thumb.style.height = pagescroll.clientHeight * pagescroll.clientHeight / pagescroll.scrollHeight + 'px';
        switch(i){
            // scrollHeight: 2: 894
            // scrollHeight: 3: 769
            // scrollHeight: 4: 769
            // scrollHeight: 5: 1591
            // scrollHeight: 6: 738
            // scrollHeight: 7: 894
            // scrollHeight: 8: 863
            // scrollHeight: 9: 956
            case 2:
                thumb.style.height = 400 * 400 / 894 + 'px';
                break;
            case 3:
                thumb.style.height = 400 * 400 / 769 + 'px';
                break;
            case 4:
                thumb.style.height = 400 * 400 / 769 + 'px';
                break;
            case 5:
                thumb.style.height = 400 * 400 / 1591 + 'px';
                break;
            case 6:
                thumb.style.height = 400 * 400 / 738 + 'px';
                break;
            case 7:
                thumb.style.height = 400 * 400 / 894 + 'px';
                break;
            case 8:
                thumb.style.height = 400 * 400 / 863 + 'px';
                break;
            case 9:
                thumb.style.height = 400 * 400 / 956 + 'px';
                break;
        }
        getScrollInfo(i);
        pagescroll.addEventListener('scroll', getScrollInfo.bind(null, i));
    }
}