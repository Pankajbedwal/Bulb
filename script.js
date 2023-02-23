function change(){
    // hii.src="yellow.png"
    if(btn.textContent=="ON"){
        btn.textContent="OFF";
        document.getElementById("blb").src="yellow.png";
    }
    else{
        btn.textContent="ON";
        document.getElementById("blb").src="white.png";
    }

}