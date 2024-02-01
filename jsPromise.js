let promise = new Promise(function (resolve, reject) {

    resolve("i will resolved!");
    console.log(promise)   
});

// -----------------------------------------------------------

let promise1  = new Promise(function (resolve, reject) {
    reject(new Error('i will be rejected')); 
    resolve("Ignored?"); // ignored
    console.log(promise1);
});

// -------------------------------------------------------------

let promise3 = new Promise(function (resolve, reject) {

 resolve("i resolved!");  
});

const consumer = () => {
    promise3.then(     //handle resolved nd rejected error
        (result) => {
            console.log(result)
        },
        (error) => {
            console.log(error)
        }
    );
}
consumer()

// ---------------------------------------------------------------

new Promise((resolve, reject) => {
    throw new Error("Something is wrong!");
})
.catch((error) => console.log(error)); 

// ---------------------------------------------------------------

function getPromise(URL) {
    let promise = new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", URL);
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } 
            else {
                reject("There is an Error!");
            }
        };
        req.send();
    });
    return promise;
}
const toDo = 'https://jsonplaceholder.typicode.com/todos';

let promise5 = getPromise(toDo);

const consumers = () => {
    promise5.then(
        (result) => {
            console.log({ result }); // get data from todo
        },
        (error) => {
            console.error('We have encountered an Error!');
        });
}
consumers();

// ---------------------------------------------------------------
// async/await 

const asynchronous = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //send http request to server
        const json = await response.json(); //convert text or byte format into js object 
        console.log(json); 
    } 
    catch (error) {
        console.log(error);
    }
};
asynchronous();

