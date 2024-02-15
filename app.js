let input = prompt('Enter Your To-Do Task Here!');

const todos = ['Go Grocery Shopping' , 'Do Laundry' , 'Take Out Trash'];

while( input !== 'quit' && input !== 'q'){
    if(input === 'list') {
        console.log('Your Todo List:');
        for(let i=0; i<todos.length; i++){
            console.log(`${i} :  ${todos[i]}`);
            }
        console.log("-Over-");
    }else if (input === 'new'){
        const newToDo = prompt('Create your New Task List here!');
        todos.push(newToDo);
        console.log(`"${newToDo}" has been added to the list.`);

    }else if (input === 'delete'){
        const index = parseInt(prompt('OOPS! Enter the index  number of the task you want to delete:'));
        if(!Number.isNaN(index)){  
            const deleted = todos.splice(index,1);
            console.log(`OOPSIE! Deleted "${deleted}" fot you`);
        }else
            alert('unknown index');
            console.log('unknown index');  
    }
    
    
    
    input = prompt('Enter Your To-Do Task Here!');
}
    


alert('Thanks for Visting!');
console.log("Thanks for Visting!");