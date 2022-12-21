

//Rename artboards script.
//Loops through LayerSets (arboards) and changes texts through find and replace


var doc = app.activeDocument;

jsfind = prompt("Find: ", "");
jsreplace = prompt("Replace: ", "");

for ( var i=0; i<doc.layerSets.length ;i++)
{
	var aBoard = doc.layerSets[i].active;
	var oldName = doc.layerSets[i].name;
	doc.layerSets[i].name = oldName.replace (jsfind, jsreplace);
}