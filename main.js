menu_list_array = [
    " Veg Margherita Pizza",
    " Farm House Pizza",
    " Double Cheese Margherita Pizza",
    " Herby Pizza",
    " Jalapeno & Red Paprika Pizza",
    " Deluxe Veggie",
    " Farmhouse Pizza",
    " Cloud 9 Pizza",
    " Crisp Capsicum & Fresh Tomato Pizza"  
 ];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i]
    }
    htmldata=htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='class'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'
    +'<img src="images/pizzaImg.png"/>'
    + '<p>' +  menu_list_array[i] + '</div>'
}
htmldata=htmldata + "</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
var item = document.getElementById("add_item").value;
menu_list_array.push(item)
add_item();
}
