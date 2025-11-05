let path = document.querySelector('path')
let pathlength = path.getTotalLength()

path.style.strokeDasharray = pathlength + ' ' + pathlength;

path.style.strokeDashoffset = pathlength;

window.addEventListener('scroll',() => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var drawLength = pathlength * scrollPercentage;

    path.style.strokeDashoffset = pathlength - drawLength;
})
