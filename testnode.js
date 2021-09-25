const totalMarks = [{name:'Arun', mark: 450},
                {name:'Ashok', mark : 380},
                {name:'Annie', mark : 432},
                {name:'Anbu', mark : 400},
                {name:'Aadhi', mark : 399}];

 // filter()  
 const listFiltered = totalMarks.filter((goodMark) => {
    return goodMark.mark >= 400
 })           

 console.log(totalMarks);