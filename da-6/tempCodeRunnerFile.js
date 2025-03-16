let ctr = 0;
function callBack() {
    console.log(ctr);
    ctr++;
}

setInterval(callBack, 1000);