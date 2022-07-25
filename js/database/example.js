fetch("https://modskinbr.github.io/L.S.P.-UT/test/students.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));