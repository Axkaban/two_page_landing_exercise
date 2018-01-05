$(document).ready(() => {

//  adding listener for the submit to form
    $('#contact-info').on('submit', e => {
    e.preventDefault();
    // useful variables
        const contactContainer = $('#contact-info'),
              firstName = $('#name'),
              lastName = $('#last-name'),
              email = $('#email'),
              zipCode = $('#zip-code'),
              usState = $('#us-state'),
              nameTest = /[A-Za-z]\w+/,
            lastNameTest = /([A-Za-z-'].\w)\D/,
              emailTest = /[^ @]*@[^ @]*/,
              zipCodeTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

        // function to validate the input in each field
    const validate = (el, pattern) => {
            if(el.val() === ''){
                 el.focus();
                 let alert = contactContainer.append("<p class = 'alert'> All fields must be filled <p>");
                $('.alert').fadeOut(5000);
                console.log('failed')
                return false;
            } else if(!pattern.test(el.val())){
                if(el === firstName){
                    console.log('failed name')
                    el.focus();
                    let alert = contactContainer.append("<p class = 'alert'> Your name must contain only aphabetic characters <p>");
                    $('.alert').fadeOut(5000);
                    return false;
                };
                if (el === lastName) {
                    console.log('failed last')
                    el.focus();
                    let alert = contactContainer.append("<p class = 'alert'> Your last name cannot contain numbers or any characters other than alphabetic, apostrophes, and hyphen <p>");
                    $('.alert').fadeOut(5000);
                    return false;
                };
                if (el === email) {
                    console.log('failed email')
                    el.focus();
                    let alert = contactContainer.append("<p class = 'alert'> Please insert a valid email <p>");
                    $('.alert').fadeOut(5000);
                    return false;
                };
                if (el === zipCode) {
                    console.log('failed zip')
                    el.focus();
                    let alert = contactContainer.append("<p class = 'alert'> Please insert a valid zip code <p>");
                    $('.alert').fadeOut(5000);
                    return false;
                };
                return false;
            } else {
                return true;
            } ; 
    };//end of validate()
// if all the inputs have the right data
        if (validate(firstName, nameTest) && validate(lastName, lastNameTest) && validate(email,emailTest) && validate(zipCode, zipCodeTest)){
            // send the values to be placed in db
            $.ajax({
                method:'POST',
                url:'/contacts',
                data: {
                    first_name: firstName.val(),
                    last_name: lastName.val(),
                    email: email.val(),
                    zip_code: zipCode.val(),
                    us_state: usState.val()
                },
                success: res => {
                    console.log('success');
                    window.location.replace('/tasks');
                }, error: err => console.log(err)
            }); // end of Ajax call
        }
})// end of listener

});// end of document.ready

// ([A-Za-z-'].\w)\D

