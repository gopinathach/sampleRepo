let details = [
    {
     name: "Gopi" ,
     carAndmodel : "BMW X1",
     color: "Blue"
    },
    {
     name: "Sridhu" ,
     carAndmodel : "Audi A1",
     color: "Red"
    },
    {
     name: "Ajay" ,
     carAndmodel : "BMW X2",
     color: "Pink"
    },
    {
     name: "Prashanth" ,
     carAndmodel : "BMW X3",
     color: "Black"
    },
    {
     name: "Sedhu" ,
     carAndmodel : "BMW X4",
     color: "Blue"
    },
    {
     name: "Sunil" ,
     carAndmodel : "BMW X5",
     color: "Blue"
    }
]
details.forEach((e)=>{
    // e.car = e.carAndmodel.split(" ")[0]
    e.model = e.carAndmodel.split(" ")[1]
})
console.log(details)

// 1. Modify the existing array with hexa codes of the color 
// 2. Add two key-value pairs to each object by splitting the car and model seperately and delete the carAndmodel property]