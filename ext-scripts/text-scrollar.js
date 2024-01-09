import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function getScrollInfo(ind) {
    const pagescroll = document.getElementById('page' + String(ind) + 'scroll');
    
    // Calculate the amount scrolled
    const amountScrolled = pagescroll.scrollTop;
    
    // Calculate the height of the scrollbar thumb
    const scrollHeight = pagescroll.scrollHeight;
    const clientHeight = pagescroll.clientHeight;
    const scrollbarHeight = clientHeight * clientHeight / scrollHeight;
    const thumb = document.getElementById('scrollBar-thumb-page'+String(ind));
    thumb.style.height = scrollbarHeight + 'px';
    if(clientHeight-scrollbarHeight > amountScrolled){
        thumb.style.top = (amountScrolled)+ 'px';
    }
    // console.log('Amount Scrolled:', amountScrolled);
    // console.log('Height of Scrollbar Thumb:', scrollbarHeight);
    // // clientHeight-scrollbarHeight < amountScrolled
    // console.log('check:', clientHeight, scrollHeight);
}
export function textScrollBar(){// Your scroll container element
    // gsap.registerPlugin(ScrollTrigger);

    // const scrollBarThumb = document.getElementById('scrollBar-thumb-page2');
    // const pagescroll = document.getElementById('page2scroll');
    // console.log(pagescroll,scrollBarThumb)
    // ScrollTrigger.create({
    //   trigger: pagescroll,
    //   start: 'top top',
    //   end: 'bottom bottom',
    //   markers: true,
    //   onUpdate: self => {
    //     const amountScrolled = self.scroll();
    //     const scrollHeight = pagescroll.scrollHeight - pagescroll.clientHeight;
    //     const thumbHeight = (pagescroll.clientHeight / scrollHeight) * 100;
    //     const thumbPosition = (amountScrolled / scrollHeight) * 100;
    
    //     scrollBarThumb.style.height = `${thumbHeight}%`;
    //     scrollBarThumb.style.top = `${thumbPosition}%`;
    //   }
    // });
    
    for(let i=2;i<=9;i++){
        const pagescroll = document.getElementById('page' + String(i) + 'scroll');
        pagescroll.onscroll = () =>{
            getScrollInfo(i);
        }
        getScrollInfo(i);
    }
}