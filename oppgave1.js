var current = 0;

function buttonClick() {
  current += 1;
  if (current > 3) {
    current = 1;
  }
  console.log(states_dictionary[current])
  document.getElementById('description').innerHTML = states_dictionary[current][0];
  document.getElementById('picture').src = states_dictionary[current][1]

};


states_dictionary={
     3:["Mmmmm naan bread.",
     "http://files.hungryforever.com/wp-content/uploads/2015/12/08113022/naanbread301-e1449554623179.jpg"],
     2:["Garlic bread makes the dinner gourmet.",
     "http://www.unitedblogger.no/imageserver/103/hvitlc3b8ksbaguette.jpg"],
     1:["No matter what, bread is there for you.",
     "https://www.panerabread.com/foundation/menu/details/sourdough-bread-loaf.jpg/_jcr_content/renditions/sourdough-bread-loaf.desktop.jpeg"]
};
