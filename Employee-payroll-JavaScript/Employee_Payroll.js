//UC-6 Storing Daily Wage in a Array
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

function CalculateDailyWage(empHrs){
    return empHrs*wage_Per_Hour
}
let total_Emp_Hrs=0
let toal_Working_Days=0

let empDailywage_array = new Array()

while (total_Emp_Hrs <= max_Hrs_In_Month && toal_Working_Days < num_Of_Working_Days) {
  toal_Working_Days++ 
let empCheck = Math.floor(Math.random()*10)%3
let empHrs = get_Working_Emp_Hours(empCheck)
total_Emp_Hrs += empHrs
empDailywage_array.push(CalculateDailyWage(empHrs))
}
let empWage = CalculateDailyWage(total_Emp_Hrs)

console.log("Calculating Employee Wage.")
console.log("Employee Wage is - " + empWage +" units")
console.log(" & Total Hours - " + total_Emp_Hrs +" Hours")
console.log("In Total Working Days As -"+toal_Working_Days+" Days")
