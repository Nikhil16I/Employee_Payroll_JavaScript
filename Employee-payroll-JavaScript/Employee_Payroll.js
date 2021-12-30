//UC-3 Gettig working Hours for daily working Hours
const is_Absent = 0
const is_Part_Time = 1
const is_Full_Time = 2
const full_Time_Hours = 8
const part_Time_Hours = 4
const wage_Per_Hour = 20

function get_Working_Emp_Hours(empCheck) {
	switch(empCheck) {
		case is_Part_Time:
			return part_Time_Hours;
			break;
		case is_Full_Time :
			return full_Time_Hours;
			break;
		default :
			return 0
	}
}
let empHrs=0

let empCheck = Math.floor(Math.random()*10)%3
empHrs = get_Working_Emp_Hours(empCheck)

let empWage = empHrs * wage_Per_Hour;  

console.log("Calculating Employee Wage.")
console.log("Employee Wage is - " + empWage +" units")