console.log("Question 3")

// fetch (' https://jsonplaceholder.typicode.com/todos/')


// .then(response=>response.json())
// .then((data=>console.log(data)))

// function fetchTodo(){
//     const response = fetch ('https://jsonplaceholder.typicode.com/todos/');
//     const data = response;

//     console.log (data);
// }
// fetchTodo();




function fetchTodo(){
    fetch("https://jsonplaceholder.typicode.com/todos").then(response=>{console.log(response)
     return response.json()})
     .then(data=>{
         console.log(data);
         for(let i=0;i<data.length;i++){
             if(data[i].completed==true){
                 console.log(data[i]);
             }
         }
        })
     .catch(error=>console.log(error))

}
fetchTodo();