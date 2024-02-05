class handleQueue {
    constructor() {
        this.queue = []; //hold task
        this.isOnWork = false; //queue currently processing task
    }
    enqueue(task) { //add new task to que       
       
        this.queue.push(task); //push task into que array
            console.log(this.queue);
            if (!this.isOnWork) { // if que not currently busy if isbusy false it call dequeue to start processing task
                this.dequeue();
            }        
    }
    async dequeue() {
        if (this.queue.length === 0 || this.isOnWork) { // it check if que empty or busy if condition true it return false indicate no further process can be done at momemnt
            console.log(false);
            return false; // return
        }
        const task = this.queue.shift(); //remove nd return first ele from array then set isbusy to true to indicate that queue is now processing task
        this.isOnWork = true;

        try {
            await task();            
        }
        catch (error) {
            console.error(error);                
        }
        finally {
            this.dequeue();
            this.isOnWork = false; //
            //process next task           
        }
    }
    
}
const HandleQueue = new handleQueue();
const api1 = () => fetch('https://jsonplaceholder.typicode.com/todos');
const api2 = () => fetch('https://pokeapi.co/api/v2/pokemon?limit=50');


HandleQueue.enqueue(api1);
// console.log();
 HandleQueue.enqueue(api2);
