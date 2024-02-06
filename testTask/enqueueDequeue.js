class HandleQueue {
    constructor() {
        this.queue = [];
        this.isOnWork = false;
    }

    enqueue(task) {
        this.queue.push(task);
        if (!this.isOnWork) {
            this.isOnWork = true;
            this.dequeue();
        }
    }

    async dequeue() {
        if (this.queue.length === 0) {
            console.log(this.queue);
            this.isOnWork = false; // Set to false indicating queue is not busy
            return false;
        }

        const task = this.queue.shift();
        console.log(`Start processing task ${task.name}`);

        try {
            const result = await task();
            console.log(`Task completed ${task.name}`);
            console.log(result);
        }         
        catch (error) {
            console.error("Error:", error);
        }        
        finally {            
            this.dequeue();
        }
    }
}

const handleQueue = new HandleQueue();

const api1 = () => fetch('https://jsonplaceholder.typicode.com/posts/1');
const api2 = () => fetch('https://jsonplaceholder.typicode.com/posts/2');
//const api2 = () => fetch(''); // Empty URL
const api3 = () => fetch('https://jsonplaceholder.typicode.com/posts/3');

handleQueue.enqueue(api1);
handleQueue.enqueue(api2);
handleQueue.enqueue(api3);