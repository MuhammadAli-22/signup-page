let formFeild = document.querySelectorAll("form input");

const [userName, userEmail, userPassword, userPic] = formFeild;

console.log(userName, userEmail, userPassword);

let imgUrl;
 let userArrayData = [];
const signup = () => {
    event.preventDefault();
    if (userName.value !== "" && userEmail.value !== '' && userPassword.value !== '') {
        let obj = {
            signUpEmail: userEmail.value,
            signupPassword: userPassword.value,
            user: userName.value,
            userProfile: imgUrl,
        }
        localStorage.setItem("userData", JSON.stringify(obj));
        window.location.href = 'login.html'

    }
    else {
        alert("please enter your data first ")
    }
}




    

