const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(b){

    console.log(b); //THIS WILL GIVE US ALL BUTTONS
    
    b.addEventListener('click', function(e){
        
        console.log(e);         // IT GIVES ALL THE DETAILS FOR BUTTON
        console.log(e.target);  //TARGET GIVES A SPECIFIC HTML BUTTON DETAILS SUCH AS ID AND CLASS ETC WHEN CLICKED

        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })    

});

