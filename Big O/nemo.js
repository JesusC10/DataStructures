const nemo = ['nemo'];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(1000).fill("nemo");


function findNemo(array){
    let t0 = performance.now();

    for(let i = 0; i < array.length; i++){
        if(array[i] === "nemo"){
            console.log('FOUND NEMO!!!');
        }
    }

    let t1 = performance.now()
    console.log("Finding Nemo took: " + (t1 - t0) + " miliseconds")
}

findNemo(large);