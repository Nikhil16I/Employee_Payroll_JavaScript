//UC-2 Calculating Employee Wage
const is_Absent = 0
const is_Part_Time = 1
const is_Full_Time = 2
const full_Time_Hours = 8
const part_Time_Hours = 4
const wage_Per_Hour = 20

let empHrs = 0
let empCheck = Math.floor(Math.random()*3)
switch(empCheck) {
	case is_Part_Time:
		empHrs = part_Time_Hours
		break;
	case is_Full_Time :
		empHrs = full_Time_Hours
		break;
	default :
		empHrs = 0
}
let empWage = empHrs * wage_Per_Hour;
console.log("Calculating Employee Wage.")
console.log("Employee Wage is - " + empWage +" units")

