$(document).ready(function(){
alert('Ride the elevator');

$('.about').on('click', function(){
$('.about') .removeClass('opendoor');
$('.about1') .removeClass('opendoorr');
});

$('.triangledown').on('click', function(){
$('.about') .addClass('opendoor');
$('.about1') .addClass('opendoorr');
});

$('.triangleup').on('click', function(){
$('.about') .addClass('opendoor');
$('.about1') .addClass('opendoorr');
});

$('.second').on('click', function(){
$('.button') .empty('button');
$('.close') .empty('close');
$('.numbers') .empty('numbers');
$('.exit') .empty('exit');
$('.elisha') .empty('elisha');
$('.panel') .empty('elisha');
$('.goods').html('<img src="images/goods.jpg" height="250" width="250">');
$('.resident').html('<img src="images/resident.jpg" height="250" width="250">');
$('.how') .html('Impact on society');
$('.works') .html('Before elevators were invented, buildings were no bigger than 7 stories. The wealthy usually livied on the lower floors and the invention of elevators reversed the social hierachy as penthouses and high rise buildings were built ');
$('.who') .html('Elevator Types');
$('.made') .html('<li>Passanger Elevator <br/> Designed to allow passangers to travel between different floors </li> <li>Fright Elevators <br/> Designed to carry goods and passangers are usually not allowed </li> <li> Sidewalk Elevators <br/> Designed to move goods between the ground and basement floors </li> <li> Vehicle Elevators <br/> Designed to move cars </li> <li>Residential Elevators <br/> Designed to work inside homes and are not commercial </li>');
$('.effect') .html('Safety');
$('.rule') .html('<li>Cable-borne elevators</li>Extremly Safe<br/> <li>Hydraulic elevators</li> Past problems include pipe and control failures <br/> <li> Mine-shaft elevators </li> Tested based on the strength of the cables');
$('.safety').html('<img src="images/safety.jpg" height="250" width="250">');
$('.process') .empty('process');
$('.cite') .empty('cite');
$('.citetitle') .empty('citetitle');
$('.stepone') .empty('stepone');
$('.steptwo') .empty('steptwo');
$('.stepthree') .empty('stepthree');
$('.stepfour') .empty('stepfour');
$('.stepfive') .empty('stepfive');
$('.stepsix') .empty('stepsix');
$('.check') .empty('check');
$('.call') .empty('call');
});

$('.first').on('click', function(){
$('.button') .empty('button');
$('.close') .empty('close');
$('.numbers') .empty('numbers');
$('.exit') .empty('exit');
$('.about') .addClass('opendoor');
$('.about1') .addClass('opendoorr');
$('.goods') .empty('goods');
$('.resident') .empty('resident');
$('.how').html('How does it work?');
$('.works').html('<li>Elevators are powered by electric motors.</li> <li>Doors prevent passangers from falling into the shaft. Usually two panel doors are used however, in older elevators a single panel door was used.</li> <li>Usually has an up or down button to indicate where the passanger would like to travel to.</li> <li>Has a buzzer that indicates the elevator car is overloaded.</li> <li>Has a control pannel with call buttons in case of emergencies, and open or close door buttons.</li> <li>Has floor buttons where passangers can indicate where they want to travel to.</li>');
$('.elisha').html('<img src="images/elisha.jpg" height="350" width="300">');
$('.who').html('Who invented the elevator?');
$('.made').html('The elevator was first seen from works on a Roman architect Vitruvius and was built by Archimedes in 236 BC.<br/><br/>Elisha Graves Otis invented the safety break which made the elevator safer and revolutionized its functionality in 1852.<br/><br/><br/>');
$('.panel').html('<img src="images/panel.jpg" height="200" width="200">');
$('.effect') .empty('effect');
$('.rule') .empty('rule');
$('.safety') .empty('safety');
$('.process') .empty('process');
$('.cite') .empty('cite');
$('.citetitle') .empty('citetitle');
$('.stepone') .empty('stepone');
$('.steptwo') .empty('steptwo');
$('.stepthree') .empty('stepthree');
$('.stepfour') .empty('stepfour');
$('.stepfive') .empty('stepfive');
$('.stepsix') .empty('stepsix');
$('.check') .empty('check');
$('.call') .empty('call');
});


$('.third').on('click', function(){
$('.about') .addClass('opendoor');
$('.about1') .addClass('opendoorr');
$('.goods') .empty('goods');
$('.resident') .empty('resident');
$('.how').empty('how');
$('.works').empty('works');
$('.elisha').empty('elisha');
$('.who').empty('who');
$('.made').empty('made');
$('.panel').empty('panel');
$('.effect') .empty('effect');
$('.rule') .empty('rule');
$('.safety') .empty('safety');
$('.process') .html('Step by Step');
$('.cite') .empty('cite');
$('.citetitle') .empty('citetitle');
$('.stepone') .html('1-Call the elevator');
$('.steptwo') .html('2-Choose your floor');
$('.stepthree') .html('3-Close the doors');
$('.stepfour') .html('4-Check for your floor');
$('.stepfive') .html('5-Call for help in emergencies');
$('.stepsix') .html('6-Exit on your floor');
$('.button').html('<img src="images/button.jpg" height="300" width="250">');
$('.numbers').html('<img src="images/numbers.jpg" height="300" width="250">');
$('.close').html('<img src="images/close.jpg" height="300" width="250">');
$('.check').html('<img src="images/check.jpg" height="300" width="250">');
$('.call').html('<img src="images/call.jpg" height="300" width="250">');
$('.exit').html('<img src="images/exit.jpg" height="300" width="250">');
});

$('.fourth').on('click', function(){
$('.button') .empty('button');
$('.close') .empty('close');
$('.numbers') .empty('numbers');
$('.exit') .empty('exit');
$('.citetitle') .html('Citations');
$('.cite') .html('Elevator. Wikipedia. Wikimedia Foundation, January 15, 2020. https://en.wikipedia.org/wiki/Elevator#Safety. <br/> <br/> Schumm, Laura. Who Invented the Elevator? History.com. A&E Television Networks, April 23, 2014. https://www.history.com/news/who-invented-the-elevator.');
$('.process') .empty('process');
$('.goods') .empty('goods');
$('.resident') .empty('resident');
$('.how').empty('how');
$('.works').empty('works');
$('.elisha').empty('elisha');
$('.who').empty('who');
$('.made').empty('made');
$('.panel').empty('panel');
$('.effect') .empty('effect');
$('.rule') .empty('rule');
$('.safety') .empty('safety');
$('.stepone') .empty('stepone');
$('.steptwo') .empty('steptwo');
$('.stepthree') .empty('stepthree');
$('.stepfour') .empty('stepfour');
$('.stepfive') .empty('stepfive');
$('.stepsix') .empty('stepsix');
$('.check') .empty('check');
$('.call') .empty('call');
});

//$('.triangledown').on('click', function(){
//$('.about') .removeClass('opendoor');
//$('.about1') .removeClass('opendoorr');
//$('.how') .empty('how');
//$('.works') .empty('works');
//$('.elisha') .empty('elisha');
//$('.who') .empty('who');
//$('.made') .empty('made');
//});

});