const myfun = delay => {
    console.log('hello after ' + delay + 'seconds');
}

setTimeout(myfun, 5*1000, 'five');

setTimeout(myfun, 10*1000, 'ten');

setTimeout(myfun, 15*1000, 'fifteen');