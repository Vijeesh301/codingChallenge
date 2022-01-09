function validate() {
    const email = document.getElementById("email");
    const validRegex =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if (validRegex.test(e.value)){
        return true;
    }  
    else {
        alert ('Enter a valid email address...!');
        return false;
    }
}