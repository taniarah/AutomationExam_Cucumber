$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/TF_Dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Background color change validation",
  "description": "",
  "id": "background-color-change-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#\tGiven"
    }
  ],
  "line": 5,
  "name": "Sky Blue Background",
  "description": "",
  "id": "background-color-change-validation;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the blue button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "DashboardStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 3634460900,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepDefinition.i_click_on_the_blue_button()"
});
formatter.result({
  "duration": 83797900,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 46273400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Outline White Background Change",
  "description": "",
  "id": "background-color-change-validation;outline-white-background-change",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on the white button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "DashboardStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 2420550200,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepDefinition.i_click_on_the_white_button()"
});
formatter.result({
  "duration": 105636200,
  "status": "passed"
});
formatter.match({
  "location": "DashboardStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 40675000,
  "status": "passed"
});
});