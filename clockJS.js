setInterval(showTime,1000);
function showTime(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var day = d.getDay();
	var dayCon;
	var month = d.getMonth();
	var monthCon;
	if(month == 0){
		monthCon = "January";
	}
	else if(month ==1){
		monthCon = "Feburary";
	}
	else if(month ==2){
		monthCon = "March";
	}
	else if(month ==3){
		monthCon = "April";
	}
	else if(month ==4){
		monthCon = "May";
	}
	else if(month ==5){
		monthCon = "June";
	}
	else if(month ==6){
		monthCon = "July";	
	}
	else if(month ==7){
		monthCon = "August";
	}
	else if(month ==8){
		monthCon = "September";
	}
	else if(month ==9){
		monthCon = "October";
	}
	else if(month ==10){
		monthCon = "November";
	}
	else if(month ==11){
		monthCon = "December";
	}
	


	if(day == 0){
		dayCon = "Sunday";
	}
	else if(day == 1){
		dayCon = "Monday";
	}
	else if(day == 2){
		dayCon = "Tuesday";
	}
	else if(day == 3){
		dayCon = "Wednesday";
	}
	else if(day == 4){
		dayCon = "Thursday";
	}
	else if(day == 5){
		dayCon = "Friday";
	}
	else if(day == 6){
		dayCon = "Saturday";
	}
	var day = document.getElementById("day");
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var ampm = document.getElementById("ampm");
	if(h<10){
		h = '0' + h;
	}
	if(m<10){
		m = '0' + m;
	}
	if(s<10 ){
		s = '0' + s;
	}
	hours.innerHTML = h;
	minutes.innerHTML = m;
	seconds.innerHTML = s;
	day.innerHTML = dayCon + " "+ monthCon +" " + d.getDate() + " " +(1900 + d.getYear());
	if(parseInt(h) < 12)
	ampm.innerHTML = "AM";
	else
	ampm.innerHTML = "PM";
	
}