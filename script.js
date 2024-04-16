document.getElementById("androidBTN").classList.add("android-btn");
document.getElementById("appleBTN").classList.add("apple-btn");
//Android Button
//Input
document.getElementById("androidBTN").addEventListener("click", androidFTW);

//Process
function androidFTW() {
  document.getElementById("app-vs-droid").src = "images/Android-Logo.jpg";
  document.getElementById("androidBTN").classList.add("android-btn");
  document.getElementById("html").style.backgroundColor = `rgb(164,201,59)`;
  document.getElementById("linkBTN").innerHTML = "Android Home";
  document.getElementById("debate-button").style.backgroundColor =
    "rgb(164,201,59)";
  document.getElementById("BODY").style.fontFamily = "'Roboto', sans-serif";
  document.getElementById("androidBTN").classList.add("active");
  document.getElementById("appleBTN").classList.remove("active");
  document.getElementById("debate-button").href = "https://www.android.com/";
}

//Apple button
//Input
document.getElementById("appleBTN").addEventListener("click", appleFTW);

//process
function appleFTW() {
  document.getElementById("app-vs-droid").src = "images/Apple-Logo.jpg";
  document.getElementById("linkBTN").innerHTML = "Apple Home";
  document.getElementById("debate-button").style.backgroundColor =
    "rgb(182,188,202)";
  document.getElementById("html").style.backgroundColor = "rgb(182,188,202)";
  document.getElementById("BODY").style.fontFamily = "'Brygada 1918', serif";
  document.getElementById("appleBTN").classList.add("active");
  document.getElementById("androidBTN").classList.remove("active");
  document.getElementById("debate-button").href = "https://www.apple.com/";
}
