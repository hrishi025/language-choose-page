// When page is loaded
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "./json/languages.json",
    success: function (result) {
      sessionStorage.setItem("lang", JSON.stringify(result));
      var output = all(result);
      $("#avaliabe-lang-grid").html(output);
    },
  });
});

function all(result) {
  var output = "";
  for (const i in result) {
    output +=
      "<div class='lang-outer-card' style= 'background:" +
      result[i].bg +
      "'><h3 class='lang-card-text'>" +
      result[i].lang_name +
      "</h3><img class='lang-card-img' src='" +
      result[i].image +
      "'/></div>";
  }
  return output;
}

//   // When category button is pressed
//   $("button").click(function () {
//     $("#search_input").val("");
//     var button = $(button);
//     var output = "";

//     let result = JSON.parse(sessionStorage.getItem("items"));
//     //   alert(result);

//     if (this.id == "btn-all") {
//       output = all(result);
//     } else if (this.id == "btn-cake") {
//       output = i_filter(result, "cake");
//     } else if (this.id == "btn-cupcake") {
//       output = i_filter(result, "cupcake");
//     } else if (this.id == "btn-sweet") {
//       output = i_filter(result, "sweets");
//     }
//     $("#item-card-grid").html("");
//     $("#item-card-grid").html(output);
//   });

//   function i_filter(result, category) {
//     let arr = result.filter((item) => item.cat == category);

//     var output = "";
//     for (let i in arr) {
//       output +=
//         "<div class='item-card'><img src='" +
//         arr[i].image +
//         "'/><div class='item-card-bottom'><div class='item-card-name'>" +
//         arr[i].name +
//         "</div><div class='item-card-price'>" +
//         arr[i].price +
//         "</div></div></div>";
//     }
//     return output;
//   }

//   // When product is searched
//   function search(result) {
//     let arr = [];
//     var input, filter, i, txtValue;
//     input = document.getElementById("search_input");

//     filter = input.value.toUpperCase();
//     ele = document.getElementById("item-card-grid");

//     var output = "";

//     for (i = 0; i < result.length; i++) {
//       txtValue = result[i].name;
//       if (result[i].name.toUpperCase().indexOf(filter) > -1) arr.push(result[i]);
//     }
//     output = all(arr);
//     $("#item-card-grid").html("");
//     $("#item-card-grid").html(output);
//   }
