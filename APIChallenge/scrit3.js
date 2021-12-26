function getChecked() {
    //Create an Array.
    var checked = new Array();

    //Reference the Table.
    var genreSearch = document.getElementById("genreSearch");

    //Reference all the CheckBoxes in Table.
    var check = genreSearch.getElementsByTagName("INPUT");

    // Loop and push the checked CheckBox value in Array.
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            checked.push(check[i].value);
        }
    }

    //Display the checked CheckBox values.
    if (checked.length > 0) {
        alert("checked values: " + checked.join(","));
    }
};