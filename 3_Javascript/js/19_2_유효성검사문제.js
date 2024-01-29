document.getElementById("id-input").addEventListener("keyup", function(){

    const regExp = /^[a-z]+[A-Z]+[0-9]+$/;
    console.log(regExp.test(this.value));

})