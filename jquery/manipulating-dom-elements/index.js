// Method 1: Changing Content
let contentChange = $("#contentChange");
contentChange.text("Content changed using jQuery!");

// Method 2: Changing HTML
let htmlChange = $("#htmlChange");
htmlChange.html("HTML content <strong>changed</strong> using jQuery!");

// Method 3: Changing Attributes
let attributeChange = $("#attributeChange");
attributeChange.attr("src", "assets/img/dog.jpeg");
attributeChange.attr("alt", "Dog");

// Method 4: Changing CSS Properties
let cssChange = $(".cssChange");
cssChange.css({
  "background-color": "yellow",
  padding: "10px",
});

// Method 5: Appending and Prepending Elements
let list = $("#list");
list.append("<li>Item 2</li>");
list.prepend("<li>Item 0</li>");

// Method 6: Removing Elements
let toBeRemoved = $(".toBeRemoved");
toBeRemoved.remove();
