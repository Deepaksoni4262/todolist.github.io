const form= document.querySelector('.form');

const big= document.querySelector('.bigbox');

const find= document.querySelector('.find input');

const date= document.querySelector('.date');

const dates= document.querySelector('.dates');


//generating html template

const htmlgenrator=todo=>{
   const html=` <li class="small">
   ${todo}  
<span class="delete"><img src="RED.png" alt="" class="delete"></span>
</li>`

big.innerHTML+=html;

}

//submiting new todos
form.addEventListener('submit',(e)=>{
    e.preventDefault();


    const todo=form.add.value.trim();
    if(todo.length>2){
        htmlgenrator(todo);
        form.reset();
    }
    
});

//deleting todos 
big.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
})


//searching a particular todo


  //we use arry.form bcoz it is basically a html collection and we cant use arrays method on it without coverting it intob an array

const filteredterm=term=>{
    console.log(Array.from(big.children));
 Array.from(big.children).filter((todo)=>{
     return !todo.textContent.includes(term);
 }).forEach((todo)=>{
     todo.classList.add('filter')
 });


 Array.from(big.children).filter((todo)=>{
     return todo.textContent.includes(term);
 }).forEach(todo=>{
     todo.classList.remove('filter')
 })

 }


   
find.addEventListener('keyup',()=>{

    const term = find.value.trim().toLowerCase();
    filteredterm(term);

});

const dat=new Date();

mydate=dat.toDateString();

dates.innerHTML+=mydate;
