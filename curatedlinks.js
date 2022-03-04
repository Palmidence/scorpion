var source = $("#curatedlinks").html(); 
var template = Handlebars.compile(source); 

var data = { // Army Email
    armyEmail: [
    {
cardTitle:"Army Email",
cardText:"Provides access to the Army's web mail portal",
cardImage:"https://logos-world.net/wp-content/uploads/2021/02/Outlook-Logo.png",
cardLink:"https://webapps.mail.mil",
cardTags:"all", "army-websites"]
}; 

$('body').append(template(data));
