//UC-4 Calculating Employee Wage For a Month
const is_Absent = 0
const is_Part_Time = 1
const is_Full_Time = 2
const full_Time_Hours = 8
const part_Time_Hours = 4
const wage_Per_Hour = 20
const num_Of_Working_Days=24
const max_Hrs_In_Month =120

function get_Working_Emp_Hours(empCheck) {
	switch(empCheck) {
		case is_Part_Time:
			return part_Time_Hours
			break;
		case is_Full_Time :
			return full_Time_Hours
			break;
		default :
			return 0
	}
}
let empHrs=0

let total_Emp_Hrs=0
let toal_Working_Days=0
 
while (total_Emp_Hrs <= max_Hrs_In_Month && toal_Working_Days < num_Of_Working_Days) {
  toal_Working_Days++ 
let empCheck = Math.floor(Math.random()*10)%3
total_Emp_Hrs += get_Working_Emp_Hours(empCheck)
}
let empWage = total_Emp_Hrs * wage_Per_Hour

console.log("Calculating Employee Wage.")
console.log("Employee Wage is - " + empWage +" units")
console.log(" & Total Hours - " + total_Emp_Hrs +"Hours")
console.log("In Total Working Days As -"+toal_Working_Days+" Days")