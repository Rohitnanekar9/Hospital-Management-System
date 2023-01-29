function isLogin(){
	var check=document.getElementById('logincheck').value;
	switch(check){
		case'Receptionist': window.open('ReceptionistDash.html');break;
		case'Doctor': window.open('DoctorDash.html');break;
		case'Medical': window.open('MedicalDash.html');break;
		case'Account': window.open('AccountDash.html');break;
		default : alert("Select one of login");break;
	}

}

function delete_data(){
	var con=confirm("Do you want to delete this?");
	if(con){alert("The data has been deleted")}
}
function logOut(){
	window.open('Login_page.html');
}