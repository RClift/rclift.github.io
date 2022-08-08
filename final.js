const mode = document.querySelector(".mode");

function darkLight(){
    if(mode.textContent == "Dark Mode"){
            //mode.style.backgroundColor = "whitesmoke";
            //mode.style.color = "var(--dark)";
            mode.textContent = "Light Mode";
            document.documentElement.style.setProperty('--light', '#000000');
            document.documentElement.style.setProperty('--dark', '#ffffff');
            document.documentElement.style.setProperty('--pale', 'darkslategrey');
            document.documentElement.style.setProperty('--grey', 'whitesmoke');
    }else{
        //mode.style.backgroundColor = "darkslategrey";
        //mode.style.color = "var(--light)";
        mode.textContent = "Dark Mode";
        document.documentElement.style.setProperty('--light', '#ffffff');
        document.documentElement.style.setProperty('--dark', '#000000');
        document.documentElement.style.setProperty('--pale', 'whitesmoke');
        document.documentElement.style.setProperty('--grey', 'darkslategrey');
    }
}