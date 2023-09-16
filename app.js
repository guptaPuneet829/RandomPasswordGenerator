const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbolSet="!@#$%^&*()_/";

const upperIp=document.getElementById("uppercase");
const lowerIp=document.getElementById("lowercase");
const numberIp=document.getElementById("numbers");
const symbolIp=document.getElementById("symbols");
const passwordBox=document.getElementById("passbox");
const passLen=document.getElementById("totalchar");

const generateRandomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generateRandomPassword=(password="")=>{
    if(upperIp.checked) password += generateRandomData(upperSet);
    if(lowerIp.checked) password += generateRandomData(lowerSet);
    if(numberIp.checked) password += generateRandomData(numberSet);
    if(symbolIp.checked) password += generateRandomData(symbolSet);
    if(password.length < passLen.value) return generateRandomPassword(password);
    passwordBox.innerText=trimPassword(password,passLen.value);
}

generateRandomPassword();

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generateRandomPassword();
    }
);

function trimPassword(str,num){
    if(str.length > num){
        let substr=str.substring(0,num);
        return substr;
    }
    else return str;
}