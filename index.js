function toptext(){
    document.getElementById("start").innerHTML="Hello !!!!!<br>My name is Mr. Bot and its my job to tell you about <p class='important'>Mayank Kumar</p><br>Enter help to see available choices<br><br>";
}
function codetext(){
    document.getElementById("code").innerHTML="<p class='important'>user@infinity</p>:~$ ";
}
function editable(){
    document.getElementById("editable").focus();
}
function giveninput(event){
    if(event.which == 13 || event.keyCode == 13){
        var topdata = document.getElementById("start").innerHTML+document.getElementById("code").innerHTML;
        var getresultfor = document.getElementById("editable").innerText;
        getresultfor = getresultfor.slice(0,-2);
        console.log(getresultfor);
        document.getElementById("editable").innerHTML = '';
        document.getElementById("start").innerHTML = topdata+getresultfor+"<br>";
        insertresult(getresultfor);
        editable();
    }
}









                                                /* BackChodi */

function insertresult(result){
    switch(result){
        case 'help': {
            var insertdata = "1. about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--tells you about me<br>";
            insertdata = insertdata+"2. experience&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--tells about my experience<br>";
            insertdata = insertdata+"3. education&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--my education<br>";
            insertdata = insertdata+"4. skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--my skills<br>";
            insertdata = insertdata+"5. works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--my interest<br>";
            insertdata = insertdata+"6. contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--my contact<br>";
            insertdata = insertdata+"7. reset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--to reset this page<br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "about": {
            var insertdata = "I am self motivated and intermidiate backend developer.Like to work with different and exiting<br>";
            insertdata = insertdata+"tecnologies.I enjoy building things. Feeling that people are going to use my app in someway <br>";
            insertdata = insertdata+"facinates me. Apart from coding I like play games and also have affection towards building games.<br>";
            insertdata = insertdata+"I love to develope and thing language does not matter at all.<br>";
            insertdata = insertdata+"<p class='importantdata'>My ultimate career goal is to always be doing things that interest me and aiming to make a difference to the world...</p><br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "experience": {
            var insertdata = "I am new to development world so am having very less experience. Have participated<br>";
            insertdata = insertdata+"in few hackathons like :-<br>";
            insertdata = insertdata+"<p class='importantdata'>1. HACK DTU</p><br>";
            insertdata = insertdata+"<p class='importantdata'>2. Rajasthan HACK</p><br>";
            insertdata = insertdata+"<p class='importantdata'>3. Jugaduthon IIIT</p><br>";
            insertdata = insertdata+"<p class='importantdata'>4. Tech Marathon</p><br>";
            insertdata = insertdata+"Although I would like to say that I tring my best to gain as much knowledge as I can<br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "education": {
            var insertdata = "Currently :-<br>";
            insertdata = insertdata+"Netaji Subhas Institute of Technology <p class='importantdata'>NSIT</p><br>";
            insertdata = insertdata+"Computer Engineering <p class='importantdata'>COE</p><br>"
            insertdata = insertdata+"Graduation Year <p class='importantdata'>2019</p><br>"
            insertdata = insertdata+"School :- The Air Force School <p class='importantdata'>TAFS</p><br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "skills": {
            var insertdata = "Ruby -----#<br>Python -----#<br>C# -----#<br>Java ---#<br>C++ -------#<br>Javascript -----#<br>HTML -----#<br>"; 
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;    
            break;
        }
        case "works": {
            var insertdata = "github handle :- <a class='siteinfo' href='https://github.com/kidminks'>https://github.com/kidminks</a><br>";
            insertdata = insertdata+"site1 :- <a class='siteinfo' href='https://kidminks.github.io/pingpong'>https://kidminks.github.io/pingpong</a><br>";
            insertdata = insertdata+"JS ping-pong game<br>";
            insertdata = insertdata+"site2 :- <a class='siteinfo' href='http://one-liners.000webhostapp.com'>http://one-liners.000webhostapp.com</a><br>";
            insertdata = insertdata+"Build in php this allows user to see quotes and insert new quotes<br>";
            insertdata = insertdata+"site3 :- <a class='siteinfo' href='http://prochatting.000webhostapp.com'>http://prochatting.000webhostapp.com</a><br>";
            insertdata = insertdata+"Chat room build in php<br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "contact": {
            var insertdata = "Phone:- 9582858625<br>";
            insertdata = insertdata+"Gmail:- mk9990143266@gmail.com<br>"
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;            
        }
        case "reset": {
            document.getElementById("start").innerHTML="Hello !!!!!<br>My name is Mr. Bot and its my job to tell you about <p class='important'>Mayank Kumar</p><br>Enter help to see available choices<br><br>";
            document.getElementById("code").innerHTML="<p class='important'>user@infinity</p>:~$ ";
            break;
        }
        default: {
            var insertdata = "Sorry invalid entry!!! see help for commands"+"<br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
        }
    }

}