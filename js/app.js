const boxes = document.querySelector('.boxright3');
// console.log(boxes);

function getscroll(){
    // console.log('e');

    const innerheight = window.innerHeight /5 * 4;
    // console.log(innerheight);

    const boxheight = boxes.getBoundingClientRect().top;
    // console.log(boxheight);

    if(boxheight < innerheight){
        boxes.classList.add('show');
    }else{
        boxes.classList.remove('show');
    }
}


getscroll();
window.addEventListener('scroll',getscroll);


const left = document.querySelector('.left');
// console.log(left);

function scroll(){
    const innerheight = window.innerHeight/5 * 4;
    // console.log(innerheight);

    const boxheight = left.getBoundingClientRect().top;
    // console.log(boxheight);

    if(boxheight < innerheight){
        left.classList.add('repeat');
    }else{
        left.classList.remove('repeat');
    }
}

scroll();

window.addEventListener('scroll',scroll);

const imageboxes = document.querySelectorAll('.imagebox');
// console.log(imageboxes);

function slides(){
    imageboxes.forEach((image)=>{
        // console.log(image);
        const innerheight = window.innerHeight / 5 * 4;
        // console.log(innerheight);

        const imageheight = image.getBoundingClientRect().top;
        // console.log(imageheight);

        if(imageheight < innerheight){
            image.classList.add('slide');
        }else{
            image.classList.remove('slide');
        }
    });
}
slides();

window.addEventListener('scroll',slides);




function time(){
    const hour = document.querySelector('.hour');
// console.log(hour);

    const minutes = document.querySelector('.minutes');
// console.log(minutes);

    const seconds = document.querySelector('.second');
// console.log(seconds);

    const date = new Date();
// console.log(date);

    const gethour = date.getHours();
// console.log(gethour);

    const getminutes = date.getMinutes();
// console.log(getminutes);

    const getseconds = date.getSeconds();
// console.log(getseconds);


    hour.innerHTML = gethour < 10 ? "0"+gethour+" :" : gethour+" :";
    minutes.innerHTML = getminutes < 10 ? "0"+getminutes+" :" : getminutes+" :";
    seconds.innerHTML = getseconds < 10 ? "0"+getseconds : getseconds;
}

// time();
setInterval(time,1000);

