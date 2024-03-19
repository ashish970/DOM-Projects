const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button){
    // console.log(button);
    // add event listener
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor =e.target.id
        }

        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'red'){
            body.style.backgroundColor = 'red'
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'magenta'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'aquamarine'){
            body.style.backgroundColor = e.target.id
        }

    })
})