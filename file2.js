// Creating literal Objects

const Student = {
    Name : "Uchizi",
    Age : 34,
    Occupation : "Software Engineer",
    Favourites : ["Gaming","Anime","Travel"]
};

Student.Age++
console.log(Student.Age)
console.log(Student.Favourites.pop())
console.log(Student.Favourites.unshift("Praying"))
console.log(Student.Favourites)

// Class Object
class car {
    constructor(Year,Make,Name){
        this.Year = Year;
        this.Make = Make;
        this.Name = Name;
    }
}

let MyFirstCar = new car(2004,"Urus","Lamborghini")
console.log(MyFirstCar)