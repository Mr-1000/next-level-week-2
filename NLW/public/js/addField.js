

document.querySelector('#add-time')

.addEventListener("click", cloneField)

document.querySelector('#rm-time')

.addEventListener("click", remove)


function cloneField() {

    const newFieldContainer = document.querySelector('.shedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    ///console.log(fields)

    fields.forEach(function(field) {
        field.value = ""
    });


    document.querySelector('#shedule-items').appendChild(newFieldContainer)

    
}   

function remove() {
    var i ;
    var fieldset = document.querySelector("#shedule-items").lastChild;
    var div = document.querySelectorAll(".shedule-item");
    if (fieldset) {
        for (i = 0; i < div.length; i++) {
            if ((i === 0)) {
             document.querySelectorAll(".shedule-item")[i];
            }

            if ((i >= 1)) {
                fieldset.remove();
            } 
       }
    }
}

// function remove() {
//     var i = 0;
//     var pai = document.querySelector('#shedule-items').lastChild;
//     var ultimo = document.querySelectorAll(".shedule-item");
//     var array =  [ultimo[i + 1]];
//     if (pai) {
//         for (const key in array) {
//             if (array[key]) {
//                 array[key].remove(pai);
//             }
//         }
//     }

// } 