
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}


// About us Tab

var aboutUs = {
  "Mission": "To empower our clients to use the web to its full potential by providing affordable, effective, custom solutions.",
  "Vision": "We consistently work on our development process to provide an informative, user-friendly and effective strategy to provide companies with the message or goal they are hoping to accomplish. This development process is tailored to meet the needs of small, medium and large size businesses and enterprises.",
  "Values": "<ul><li>Committed to Customer Satisfaction</li><li>A knowledge-driven company</li><li>Building solutions that create rewarding results</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs = document.getElementsByClassName("single-tab");

for (var a = 0; a < aboutUsTabs.length; a++) {
  aboutUsTabs[a].onclick = function() {
    var clickedValue = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[clickedValue];

    for (var b = 0; b < aboutUsTabs.length; b++) {
      aboutUsTabs[b].style["background-color"] = unseletectedColor;
      aboutUsTabs[b].style["font-weight"] = "normal";
    }

    this.style["background-color"] = seletectedColor;
    this.style["font-weight"] = "bold";


  }
}



// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'We engage our website visitors with a user-friendly design and in an interactive format and delight them with our product or service offerings beyond their expectations.'
  },

  {
    'title': 'Branding',
    'text': 'We develop sustainable business models and marketing strategies to fuel small business growth.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'We will be best in providing consistently successful, unique, and forward-thinking digital marketing solutions that take into account the individual requirements and unique demands of each client.'
  }
  
];

var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var serviceTitleArea = document.getElementById("service-title");
var serviceTextArea = document.getElementById("service-text");

var currentService = 0;

nextArrow.onclick = function() {
  if (currentService == (ourServices.length - 1)) {
    currentService = 0;
  } else {
    currentService += 1;
  }
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}

previousArrow.onclick = function() {
  if (currentService == 0) {
    currentService = ourServices.length - 1;
  } else {
    currentService -= 1;
  }
  
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}




// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();


  
   


   