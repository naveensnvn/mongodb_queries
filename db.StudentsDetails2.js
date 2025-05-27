db.StudentsDetails2.drop()

db.StudentsDetails2.insertMany([
    {  
        "_id" : 1,
            "std_name" : "Mukesh",  
            "Gender" : "Male",  
            "class" : "VI",  
            "age" : 11,  
            "grd_point" : 33  
    },  
    {  
        "_id" : 2,
            "std_name" : "Dechamma",  
            "Gender" : "Female",  
            "class" : "VI",  
            "age" : 13,  
            "grd_point" : 30  
    },  
    {  
        "_id" : 3,    


            "std_name" : "Akash",
            "Gender" : "Male",  
            "class" : "V",  
            "age" : 14,  
            "grd_point" : 35.1257  
    },  
    { 
        "_id" : 4, 
            "std_name" : "Geetha",  
            "Gender" : "Female",  
            "class" : "X",  
            "age" : 17,  
            "grd_point" : 36.2514  
    },  
    {  

        "_id" : 5,
            "std_name" : "Bhomika",  
            "Gender" : "Female",  
            "class" : "X",  
            "age" : 19,  
            "grd_point" : 35.5201  
    },
   {  
    "_id" : 6,  
    "std_name" : "Nitin",  
            "Gender" : "Male",  
            "class" : "V",  
            "age" : 16,  
            "grd_point" : 35.5201  
    }  
] )

///mongodb Mongodb queries

db.StudentsDetails2.find()

//select * from StudentsDetails2
//in mysql


//#returns no of records 
db.StudentsDetails2.find().count()

//fetches 1st two records 
db.StudentsDetails2.find().limit(1)

db.StudentsDetails2.find().limit(2)


//skips first record and displays seond record
db.StudentsDetails2.find().skip(1)

db.StudentsDetails2.find().skip(2)


// sorting examples 
// sort based on std_name i.e student name ie ascending order
db.StudentsDetails2.find().sort({std_name:1})

// sort based on std_name i.e student name ie desc order
db.StudentsDetails2.find().sort({std_name:-1})


