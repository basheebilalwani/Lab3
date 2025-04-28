function store(){
    alert("Successfully submitted");
    const student = {
        name : document.getElementById('name').value,
        roll: document.getElementById('roll').value,
        age: document.getElementById('age').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        sem: document.getElementById('sem').value,
        interest: document.getElementById('interest').value
    };

    document.getElementsByTagName("table")[0].style.display="table";
    
    document.getElementById("nameop").innerHTML = student.name;
    document.getElementById("rollop").innerHTML = student.roll;
    document.getElementById("ageop").innerHTML = student.age;
    document.getElementById("genderop").innerHTML = student.gender;
    document.getElementById("semop").innerHTML = student.sem;
    document.getElementById("interestop").innerHTML = student.interest;
}



