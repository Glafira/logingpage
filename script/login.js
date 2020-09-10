const En='En';
const en_userName="User Name";
const en_password="Password";
const en_login="Login";

const Ru='Рус';
const ru_userName="Пользователь";
const ru_password="Пароль";
const ru_login="Войти";

const Ua='Укр';
const ua_userName="Користувач";
const ua_password="Пароль";
const ua_login="Вхід";



function openLang(){
	let el=document.querySelector('.lang');
	console.log(el);
	el.classList.toggle('active');
	
	//el.style.height = "0%";
}


function setLang(val){
	console.log(document.querySelector('#lbl_inpUser').textContent);
 if (val=='En') {
 	document.querySelector('.cur-lang').textContent=En;
 	document.querySelector('#lbl_inpUser').textContent=en_userName;
 	document.querySelector('#lbl_inpPassword').textContent=en_password;
 	document.querySelector('#btn-login').value=en_login;
 }
 if (val=='Ru') {
 	document.querySelector('.cur-lang').textContent=Ru;
 	document.querySelector('#lbl_inpUser').textContent=ru_userName;
 	document.querySelector('#lbl_inpPassword').textContent=ru_password;
 	document.querySelector('#btn-login').value=ru_login; 	
 }
 if (val=='Ua') {
 	document.querySelector('.cur-lang').textContent=Ua;
 	document.querySelector('#lbl_inpUser').textContent=ua_userName;
 	document.querySelector('#lbl_inpPassword').textContent=ua_password;
 	document.querySelector('#btn-login').value=ua_login; 	
 }

}

function setFont(val){
	document.querySelector('body').style.fontFamily=val;
}