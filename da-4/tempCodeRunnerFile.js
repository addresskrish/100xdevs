function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function logName() {
    console.log("hi");
    function logName() {
        console.log("hello");
        function logName() {
            console.log("hello there");
        }
        setTimeoutPromisified(5000).then(logName);
    }
    setTimeoutPromisified(3000).then(logName);
}
setTimeoutPromisified(1000).then(logName);