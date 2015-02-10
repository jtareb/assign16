 var data = { nameinfo: [
      {username: "john", firstName: "John", lastName: "Albritton", email: "jtareb1@gmail.com" },
      {username: "ed", firstName: "Ed", lastName: "Smith", email: "edsmith2@gmail.com"},
    ]};

console.log(data);

 var source   = $("#nameinfo").html();
 console.log(source);
 var template = Handlebars.compile(source);
  $("#nameinfo").html(template(data));


//*var template = Handlebars.tempate(source);