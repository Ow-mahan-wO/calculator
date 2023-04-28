//Elems
const buttons=document.querySelectorAll('.calculator__btn')
const input=document.querySelector('.calculator__input')
//variable
let number1
let number2
let operator//to diagnose the operation

buttons.forEach((btn)=>{
    //change click event
btn.addEventListener('click',()=>{
    if(input.innerHTML==0){
        input.innerHTML=""
    }
    switch(btn.innerHTML){
        //subtraction
        case '-':
            number1=Number(input.innerHTML.slice(0,input.innerHTML.length))
            input.innerHTML=''
            operator='-'
            break;
        //division
         case '/':
            number1=Number(input.innerHTML.slice(0,input.innerHTML.length))
            input.innerHTML=''
            operator='/'
            break;
        //total   
        case '+':
            number1=Number(input.innerHTML.slice(0,input.innerHTML.length))
            input.innerHTML=''
            operator='+'
            break;
        //multiplication    
        case '*':
                number1=Number(input.innerHTML.slice(0,input.innerHTML.length))
                input.innerHTML=''  
                operator='*'
            break;
        //calculate the result    
        case '=':
           number2=Number(input.innerHTML.slice(0,input.innerHTML.length))
           input.innerHTML='' 
          if(operator=='*'){
           input.append(Number(number1*number2));
          }
          else if(operator=='+'){
            input.append(Number(number1+number2))
          }
          else if(operator=='-'){
            input.append(Number(number1-number2))
          }
          else if(operator=='/'){
            input.append(Number(number1/number2))
          }
                break;
        default:
            input.append(btn.innerHTML)
            break;        
    }
    //clear input
    if(btn.innerHTML=='C'){
        input.innerHTML=""
    }
})
})