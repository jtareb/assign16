 var data = { nameinfo: [
      {username: "john", firstName: "John", lastName: "Albritton", email: "jtareb1@gmail.com" },
      
    ]};

console.log(data);

 var source   = $("#nameinfo").html();
 var template = Handlebars.compile(source);
  $("#nameinfo").html(template(data));
