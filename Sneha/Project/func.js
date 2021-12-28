function fnccopytext()
{
   document.getElementById('cp').innerHTML  = fullname.value;
   document.getElementById('unq').style.color = 'crimson';   
}
function fnccopytext1()
{
   document.getElementById('unq1').style.color = 'crimson';   
}
function fnccopytext2()
{
   document.getElementById('unq2').style.color = 'crimson';   
}
function fnccopytext3()
{
   document.getElementById('unq3').style.color = 'crimson';   
}
function fnccopytext4()
{
   document.getElementById('unq4').style.color = 'crimson'; 
}

window.onload = function(){
    // Buttons
    var quickAddBtn = document.getElementById('QuickAdd');
    var quickAddFormDiv = document.querySelector('.quickaddForm')
    var cancelBtn = document.getElementById('Cancel');
    var AddBtn = document.getElementById('Add');
    // Form Fields
    var fullname = document.getElementById('fullname');
    var price = document.getElementById('price');
    var description = document.getElementById('description');
    var author = document.getElementById('author');
    var date = document.getElementById('date');
    // Divs etc.
    var addBookDiv = document.querySelector('.addbook');

    quickAddBtn.addEventListener("click", function(){
        // display the form div
        quickAddFormDiv.style.display = "block";
       QuickAdd.style.display = "none";
    });

    cancelBtn.addEventListener("click", function(){
        quickAddFormDiv.style.display = "none";
       QuickAdd.style.display = "block";
    });

    AddBtn.addEventListener("click", addToBook);

    addBookDiv.addEventListener("click", removeEntry);

    // Storage Array
    var book = [];

   

    function jsonStructure(fullname,price,description,author,date){
        this.fullname = fullname;
        this.price = price;
        this.description = description;
        this.author = author;
        this.date = date;
    }

    function addToBook(){
        x = prompt("Enter Password");
        if(x == "12345"){
        var isNull = fullname.value!='' && price.value!='' && description.value!='' && author.value!='' && date.value!='';
        if(isNull){
            // format the input into a valid JSON structure
            var obj = new jsonStructure(fullname.value,price.value,description.value,author.value,date.value);
            book.push(obj);
            localStorage['addbook'] = JSON.stringify(book);
            quickAddFormDiv.style.display = "none";
            clearForm();
            showbook();
        }
        else{
            alert("Wrong password");
        }
    }
    else{
        alert("Wrong password");
    }
    }

    function removeEntry(e){
        x = prompt("Enter password");
        if(x =="12345"){
        if(e.target.classList.contains('delbutton')){
            var remID = e.target.getAttribute('data-id');
            book.splice(remID,1);
            localStorage['addbook'] = JSON.stringify(book);
            showbook();

        }
    }
    else{
        alert("Wrong password");
    }
    }

    function clearForm(){
        var formFields = document.querySelectorAll('.formFields');
        for(var i in formFields){
            formFields[i].value = '';
        }
    }

    function showbook(){
        if(localStorage['addbook'] === undefined){
            localStorage['addbook'] = '';
        } else {
            book = JSON.parse(localStorage['addbook']);

            addBookDiv.innerHTML = '';
            for(var n in book){
                var str = '<div class="entry">';
                    str += '<div class="name"><p>'+'<b>Name - </b>' + book[n].fullname + '</p></div>';
                    str += '<div class="date"><p>' +'<b>DOP - </b>'+ book[n].date + '</p></div>';
                    str += '<div class="price"><p>'+'<b>Price -</b> ' + book[n].price + '</p></div>';
                    str += '<div class="description"><p>'+'<b>Description - </b>' + book[n].description + '</p></div>';
                    str += '<div class="Author"><p>'+'<b>Author - </b>' + book[n].author + '</p></div>';
                    str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
                    str += '</div>';
                addBookDiv.innerHTML += str;
            }
        }
    }

    showbook();

}
// window.onload = () =>{
//     fadeOut();
//   }
// function loader(){
//     document.querySelector('.loader-container').classList.add('active');
//   }
  
//   function fadeOut(){
//     setTimeout(loader, 4000);
//   }