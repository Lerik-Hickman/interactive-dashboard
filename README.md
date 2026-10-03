# Interactive Dashboard : WEB 115
This is a semester-long project for WEB 115 at Wake Technical Community College to demonstrate proficiency with basic web development.

## To-Do
 - [x] Create initial HTML, CSS, and JavaScript files for Dashboard
 - [x] Add a weekly task goal calculator
 - [x] Add Imperial-Metric Converter
 - [x] Add Magic Eight Ball Game
 - [x] Add task list
 - [ ] Add sidebar buttons
 - [ ] Create tool-tips for sidebar buttons
 - [ ] Add descriptive text under each element to explain to users what they are looking at

## Weekly Task Goals
The weekly task goal calculator displays the user's name as well as the total number of tasks that they hope to accomplish in a week by multiplying daily tasks by 5 and adding bonus tasks on top of that.

## Task List
The task list allows users to input tasks and display them in an itemized list. Tasks do not yet persist between sessions.

## Imperial-Metric Converter
This converter can take inches, feet, yards, or miles and convert them to centimeters, meters, or kilometers or visa-versa. Units must be given in all lowercase.

## Logic and Pseudocode
BEGIN
INPUT inputNum
INPUT inputUnit
INPUT outputUnit

IF outputUnit === inputUnit  

	validInput = false  

	OUTPUT "there is no conversion to be made"  

ELSE IF inputUnit is miles or mile or mi  

	IF outputUnit is kilometers or kilometer or km  

		outputNum = inputNum * 1.61  

	ELSE IF outputUnit is meters or meter or m  

		outputNum = inputNum * 161  

	ELSE IF outputUnit is centimeters or centimeter or cm  

		outputNum = inputNum * 16100  

ELSE IF inputUnit is yards or yard or yd  

	IF outputUnit is kilometers or kilometer or km  

		outputNum = inputNum *0.0091  

	ELSE IF outputUnit is meters or meter or m  

		outputNum = inputNum *0.91  

	ELSE IF outputUnit is centimeters or centimeter or cm  

		outputNum = inputNum * 91  

ELSE IF inputUnit is feet or foot or ft  

	IF outputUnit is kilometers or kilometer or km  

		outputNum = inputNum * 0.003048  

	ELSE IF outputUnit is meters or meter or m  

		outputNum = inputNum * 0.3048  

	ELSE IF outputUnit is centimeters or centimeter or cm  

		outputNum = inputNum * 30.48  

ELSE IF inputUnit is inches or inch or in  

	IF outputUnit is kilometers or kilometer or km  

		outputNum = inputNum * 0.000254  

	ELSE IF outputUnit is meters or meter or m  

		outputNum = inputNum * 0.0254  

	ELSE IF outputUnit is centimeters or centimeter or cm  

		outputNum = inputNum * 2.54  

ELSE IF inputUnit is kilometers or kilometer or km  

	IF outputUnit is miles or mile or mi  

		outputNum = inputNum * 0.62  

	ELSE IF outputUnit is yards or yard or yd  

		outputNum = inputNum * 109  

	ELSE IF outputUnit is feet or foot or ft  

		outputNum = inputNum * 3280  

	ELSE IF outputUnit is inches or inch or in  

		outputNum = inputNum * 3900  

ELSE IF inputUnit is meters or meter or m  

	IF outputUnit is miles or mile or mi  

		outputNum = inputNum * 0.00062  

	ELSE IF outputUnit is yards or yard or yd  

		outputNum = inputNum * 1.09  

	ELSE IF outputUnit is feet or foot or ft  

		outputNum = inputNum * 3.28  

	ELSE IF outputUnit is inches or inch or in  

		outputNum = inputNum * 39  

ELSE IF inputUnit is centimeters or centimeter or cm  

	IF outputUnit is miles or mile or mi  

		outputNum = inputNum * 0.0000062  

	ELSE IF outputUnit is yards or yard or yd  

		outputNum = inputNum * 0.0109  

	ELSE IF outputUnit is feet or foot or ft  

		outputNum = inputNum * 0.0328  

	ELSE IF outputUnit is inches or inch or in  

		outputNum = inputNum * 0.39  

ELSE  

	validInput = false  

	OUTPUT "You did not give valid input units. Please try again."
	
IF validInput
	OUTPUT "inputNum inputUnit(s) is outputNum outputUnit(s)"  
	
END

## Magic Eight Ball Game
This feature is an interactable element that allows for users to click on an image of an eight ball to answer questions. Providing a question is necessary for the eight ball to provide an answer.