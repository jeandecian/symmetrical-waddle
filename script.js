function greet() {
  let name = document.getElementById("name").value;
  if (name.trim() !== "") {
    alert("Hello " + name + "!");
  } else {
    alert("Hello, World!");
  }
}

document.getElementById("submitBtn").addEventListener("click", greet);
