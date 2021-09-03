Feature: Background color change validation

#Background:
#	Given 
Scenario: Sky Blue Background
	Given "Set SkyBlue Background" button exists
	When I click on the blue button
	Then The background color will change to sky blue
	
Scenario: Outline White Background Change
	Given "Set SkyWhite Background" button exists
	When  I click on the white button
	Then  The background color will change to white