let light = document.getElementById('light');
let dark = document.getElementById('dark');
let mode = document.getElementById('mode');


function lightMode(){
    dark.classList.replace("d-none","d-inline-block");
    light.classList.replace("d-inline-block" , "d-none");
    mode.classList.replace("fa-moon","fa-mountain-sun");
    document.querySelector("html").setAttribute("class","bg-light");
}
function darkMode(){
    light.classList.replace("d-none","d-inline-block");
    dark.classList.replace("d-inline-block" , "d-none");
    mode.classList.replace("fa-mountain-sun","fa-moon");
    document.querySelector("html").setAttribute("class","bg-dark");
}
// clear calc
function clearCalc(){
    document.getElementById('result').value = '';
}
//   display calc
function liveScreen(val){
    document.getElementById('result').value +=val;
}

//  switch theme
function switchTheme(){
    let dark = document.getElementById('dark');
    let theme = document.getElementById('theme');
    if(theme.getAttribute('href') == 'css/dark.css'){
        theme.href = 'css/light.css';
        dark.innerHTML = `Dark Mode 
        <i id="mode" class="fa-solid fa-moon fa-rotate-270 "  style="color: #FFD43B;"></i>`;
    }else{
        theme.href = 'css/dark.css';
        dark.innerHTML = `light Mode 
        <i id="mode" class="fa-solid fa-moon fa-rotate-270 "  style="color: #FFD43B;"></i>`;
    }
}


