//Task Collection
db.tasks.insertMany([
    {
        task_id:1,
        tasktitle:"Write a blog on Difference between HTTP1.1 vs HTTP2",
        task_Date: new Date("2020-10-03")
    },
    {
        task_id:2,
        tasktitle:"Write a blog on the Difference between document and window objects.",
        task_Date: new Date("2020-10-04")
    },
    {
        task_id:3,
        tasktitle:"Do the below programs in anonymous function & IIFE & Arrow functions",
        task_Date: new Date("2020-10-10")
    },
    {
        task_id:4,
        tasktitle:"Create your own resume data in JSON format",
        task_Date: new Date("2020-10-11")
    },
    {
        task_id:5,
        tasktitle:"Write a “person” class to hold all the details.",
        task_Date: new Date("2020-10-17")
    },
    {
        task_id:6,
        tasktitle:"Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).",
        task_Date: new Date("2020-10-18")
    },
    {
        task_id:7,
        tasktitle:"From the below Title you can pick any two and complete them with responsive design. For your reference visit this URL https://github.com/rvsp/HTML-CSS/tree/master/Tasks",
        task_Date: new Date("2020-10-24")
    },
    {
        task_id:8,
        tasktitle:"DOM Manipulation with Forms",
        task_Date: new Date("2020-10-25")
    },
    {
        task_id:9,
        tasktitle:"CALL Back Hell Task",
        task_Date: new Date("2020-10-31")
    },
    {
        task_id:10,
        tasktitle:"Promise Related Tasks",
        task_Date: new Date("2020-11-01")
    },
])

//topics collection
db.topics.insertMany([
    {
        topic_id:1,
taskid:1,
        topictitle:"JavaScript - Day -1 : Introduction to Browser & web",
        topic_Date: new Date("2020-10-03")
    },
    {
        topic_id:2,
taskid:2,
        topictitle:"JavaScript - Day -2 : Request & Response cycle",
        topic_Date: new Date("2020-10-04")
    },
    {
        topic_id:3,
taskid:3,
        topictitle:"JavaScript - Day -3 : Functions",
        topic_Date: new Date("2020-10-10")
    },
    {
        topic_id:4,
taskid:4,
        topictitle:"JavaScript - Day -4 : ES5 vs ES6",
        topic_Date: new Date("2020-10-11")
    },
    {
        topic_id:5,
taskid:5,
        topictitle:"JavaScript - Day -5 : OOPs in JS",
        topic_Date: new Date("2020-10-17")
    },
    {
        topic_id:6,
taskid:6,
        topictitle:"JavaScript - Day -6 : Array Methods",
        topic_Date: new Date("2020-10-18")
    },
    {
        topic_id:7,
taskid:7,
        topictitle:"HTML- Day -1 : HTML",
        topic_Date: new Date("2020-10-24")
    },
    {
        topic_id:8,
taskid:8,
        topictitle:"HTML & CSS- Day -2 : HTML recap CSS",
        topic_Date: new Date("2020-10-25")
    },
    {
        topic_id:9,
taskid:9,
        topictitle:"HTML & CSS- Day -3 : CSS",
        topic_Date: new Date("2020-10-31")
    },
    {
        topic_id:10,
taskid:10,
        topictitle:"HTML & CSS- Day -4 : CSS",
        topic_Date: new Date("2020-11-01")
    },
])
//Users collection
db.users.insertMany([
    {
        User_id:1,
        UserName:"ARJUN",
        email: "arjun@gmail.com",
batchassigned:"B40",
placementappeared: true
    },
    {
        User_id:2,
        UserName:"ARUN",
        email: "arun@gmail.com",
batchassigned:"B40",
placementappeared: true

    },
    {
       User_id:3,
        UserName:"BALAKRISHNAN",
        email: "balakrishnan@gmail.com",
batchassigned:"B40",
placementappeared: false

    },
    {
       User_id:4,
        UserName:"CHANDRAN",
        email: "chandran@gmail.com",
batchassigned:"B40",
placementappeared: false

    },
    {
        User_id:5,
        UserName:"DHARSHAN",
        email: "dharshan@gmail.com",
batchassigned:"B40",
placementappeared: true

    },
]);

//company drives

db.companydrives.insertMany([
    {
        drive_id:1,
        companyName:"HCL",
        appeareddate: new Date("2020-10-01"),
isplacement: true
    },
    {
        drive_id:2,
        companyName:"INFOSYS",
        appeareddate: new Date("2020-10-15"),
isplacement: true

    },
    {
       drive_id:3,
        companyName:"CTS",
       appeareddate: new Date("2020-10-28"),
isplacement: false

    },
    {
       drive_id:4,
        companyName:"TCS",
       appeareddate: new Date("2020-10-31"),
isplacement: false

    },
    {
        drive_id:5,
        companyName:"ACCENTURE",
        appeareddate: new Date("2020-11-10"),
isplacement: true

    },
    
]);
//mentor collection
db.mentors.insertMany([
    {
        mentor_id:1,
        mentorName:"TAMILARASU",
        menteecount:10
    },
    {
        mentor_id:2,
        mentorName:"VIGNESH",
        menteecount:15

    },
    {
       mentor_id:3,
        mentorName:"SARANYA",
       menteecount:20

    },
    {
       mentor_id:4,
        mentorName:"RAJESH",
       menteecount:2

    },
    {
        mentor_id:5,
        mentorName:"ARUN",
       menteecount:16

    },
    
]);
//attendance collection
db.attendance.insertMany([
    {att_id:1,user_id:1,classdate: new Date("2020-10-03"),present:true,tasksubmitdate:new Date("2020-10-10")},
    {att_id:2,user_id:1,classdate: new Date("2020-10-04"),present:true,tasksubmitdate:new Date("2020-10-12")},
 {att_id:3,user_id:1,classdate: new Date("2020-10-10"),present:true,tasksubmitdate:new Date("2020-10-13")},
 {att_id:4,user_id:1,classdate: new Date("2020-10-11"),present:true,tasksubmitdate:new Date("2020-10-14")},
 {att_id:5,user_id:1,classdate: new Date("2020-10-17"),present:false,tasksubmitdate:new Date("2020-11-03")},
 {att_id:6,user_id:1,classdate: new Date("2020-10-18"),present:false,tasksubmitdate:new Date("2020-11-05")},
 {att_id:7,user_id:1,classdate: new Date("2020-10-24"),present:false,tasksubmitdate:new Date("2020-11-07")},
 {att_id:8,user_id:1,classdate: new Date("2020-10-25"),present:false,tasksubmitdate:new Date("2020-11-10")},
 {att_id:9,user_id:1,classdate: new Date("2020-10-31"),present:false,tasksubmitdate:new Date("2020-11-17")},
 {att_id:10,user_id:1,classdate: new Date("2020-11-01"),present:true,tasksubmitdate:new Date("2020-11-20")},
  {att_id:11,user_id:2,classdate: new Date("2020-10-03"),present:true,tasksubmitdate:new Date("2020-10-10")},
    {att_id:12,user_id:2,classdate: new Date("2020-10-04"),present:true,tasksubmitdate:new Date("2020-10-12")},
 {att_id:13,user_id:2,classdate: new Date("2020-10-10"),present:true,tasksubmitdate:new Date("2020-10-13")},
 {att_id:14,user_id:2,classdate: new Date("2020-10-11"),present:true,tasksubmitdate:new Date("2020-10-14")},
 {att_id:15,user_id:2,classdate: new Date("2020-10-17"),present:false,tasksubmitdate:new Date("2020-10-20")},
 {att_id:16,user_id:2,classdate: new Date("2020-10-18"),present:false,tasksubmitdate:new Date("2020-10-23")},
 {att_id:17,user_id:2,classdate: new Date("2020-10-24"),present:false,tasksubmitdate:new Date("2020-11-02")},
 {att_id:18,user_id:2,classdate: new Date("2020-10-25"),present:false,tasksubmitdate:new Date("2020-11-10")},
 {att_id:19,user_id:2,classdate: new Date("2020-10-31"),present:false,tasksubmitdate:new Date("2020-11-12")},
 {att_id:20,user_id:2,classdate: new Date("2020-11-01"),present:true,tasksubmitdate:new Date("2020-11-15")},
  {att_id:21,user_id:3,classdate: new Date("2020-10-03"),present:true,tasksubmitdate:new Date("2020-10-10")},
    {att_id:22,user_id:3,classdate: new Date("2020-10-04"),present:true,tasksubmitdate:new Date("2020-10-12")},
 {att_id:23,user_id:3,classdate: new Date("2020-10-10"),present:true,tasksubmitdate:new Date("2020-10-13")},
 {att_id:24,user_id:3,classdate: new Date("2020-10-11"),present:true,tasksubmitdate:new Date("2020-10-14")},
 {att_id:25,user_id:3,classdate: new Date("2020-10-17"),present:false,tasksubmitdate:new Date("2020-11-03")},
 {att_id:26,user_id:3,classdate: new Date("2020-10-18"),present:false,tasksubmitdate:new Date("2020-11-05")},
 {att_id:27,user_id:3,classdate: new Date("2020-10-24"),present:false,tasksubmitdate:new Date("2020-11-08")},
 {att_id:28,user_id:3,classdate: new Date("2020-10-25"),present:false,tasksubmitdate:new Date("2020-11-15")},
 {att_id:29,user_id:3,classdate: new Date("2020-10-31"),present:false,tasksubmitdate:new Date("2020-11-20")},
 {att_id:30,user_id:3,classdate: new Date("2020-11-01"),present:true,tasksubmitdate:new Date("2020-11-25")},
 {att_id:31,user_id:4,classdate: new Date("2020-10-03"),present:true,tasksubmitdate:new Date("2020-10-10")},
    {att_id:32,user_id:4,classdate: new Date("2020-10-04"),present:true,tasksubmitdate:new Date("2020-10-12")},
 {att_id:33,user_id:4,classdate: new Date("2020-10-10"),present:true,tasksubmitdate:new Date("2020-10-13")},
 {att_id:34,user_id:4,classdate: new Date("2020-10-11"),present:true,tasksubmitdate:new Date("2020-10-14")},
 {att_id:35,user_id:4,classdate: new Date("2020-10-17"),present:true,tasksubmitdate:new Date("2020-10-17")},
 {att_id:36,user_id:4,classdate: new Date("2020-10-18"),present:true,tasksubmitdate:new Date("2020-10-25")},
 {att_id:37,user_id:4,classdate: new Date("2020-10-24"),present:true,tasksubmitdate:new Date("2020-10-27")},
 {att_id:38,user_id:4,classdate: new Date("2020-10-25"),present:true,tasksubmitdate:new Date("2020-10-31")},
 {att_id:39,user_id:4,classdate: new Date("2020-10-31"),present:true,tasksubmitdate:new Date("2020-11-04")},
 {att_id:40,user_id:4,classdate: new Date("2020-11-01"),present:true,tasksubmitdate:new Date("2020-11-06")},
 {att_id:41,user_id:4,classdate: new Date("2020-10-03"),present:true,tasksubmitdate:new Date("2020-10-10")},
    {att_id:42,user_id:5,classdate: new Date("2020-10-04"),present:true,tasksubmitdate:new Date("2020-10-12")},
 {att_id:43,user_id:5,classdate: new Date("2020-10-10"),present:true,tasksubmitdate:new Date("2020-10-13")},
 {att_id:44,user_id:5,classdate: new Date("2020-10-11"),present:true,tasksubmitdate:new Date("2020-10-14")},
 {att_id:45,user_id:5,classdate: new Date("2020-10-17"),present:true,tasksubmitdate:new Date("2020-10-16")},
 {att_id:46,user_id:5,classdate: new Date("2020-10-18"),present:true,tasksubmitdate:new Date("2020-10-19")},
 {att_id:47,user_id:5,classdate: new Date("2020-10-24"),present:true,tasksubmitdate:new Date("2020-10-25")},
 {att_id:48,user_id:5,classdate: new Date("2020-10-25"),present:true,tasksubmitdate:new Date("2020-10-29")},
 {att_id:49,user_id:5,classdate: new Date("2020-10-31"),present:true,tasksubmitdate:new Date("2020-11-07")},
 {att_id:50,user_id:5,classdate: new Date("2020-11-01"),present:true,tasksubmitdate:new Date("2020-11-10")},

]);
//codekata collection

db.codekata.insertMany([
    {id: 1, topic_id:1, topicName: "Input/Output", noofproblems: 10, user_id: 1, solvedproblems: 8 },
    {id: 2, topic_id:2, topicName: "Absolute Beginner", noofproblems: 30, user_id: 1, solvedproblems: 25 },
    {id: 3, topic_id:3, topicName: "Array", noofproblems: 308, user_id: 1, solvedproblems: 10 },
    {id: 4, topic_id:4, topicName: "Mathematics", noofproblems: 192, user_id: 1, solvedproblems: 15 },
    {id: 5, topic_id:5, topicName: "Strings", noofproblems: 196, user_id: 1, solvedproblems: 56 },
    {id: 6, topic_id:1, topicName: "Input/Output", noofproblems: 10, user_id: 2, solvedproblems: 3 },
    {id: 7, topic_id:2, topicName: "Absolute Beginner", noofproblems: 30, user_id: 2, solvedproblems: 15 },
    {id: 8, topic_id:3, topicName: "Array", noofproblems: 308, user_id: 2, solvedproblems: 100 },
    {id: 9, topic_id:4, topicName: "Mathematics", noofproblems: 192, user_id: 2, solvedproblems: 45 },
    {id: 10, topic_id:5, topicName: "Strings", noofproblems: 196, user_id: 2, solvedproblems: 96 },
    {id: 11, topic_id:1, topicName: "Input/Output", noofproblems: 10, user_id: 3, solvedproblems: 10 },
    {id: 12, topic_id:2, topicName: "Absolute Beginner", noofproblems: 30, user_id: 3, solvedproblems: 15 },
    {id: 13, topic_id:3, topicName: "Array", noofproblems: 308, user_id: 3, solvedproblems: 100 },
    {id: 14, topic_id:4, topicName: "Mathematics", noofproblems: 192, user_id: 3, solvedproblems: 65 },
    {id: 15, topic_id:5, topicName: "Strings", noofproblems: 196, user_id: 3, solvedproblems: 79 },
    {id: 16, topic_id:1, topicName: "Input/Output", noofproblems: 10, user_id: 4, solvedproblems: 2 },
    {id: 17, topic_id:2, topicName: "Absolute Beginner", noofproblems: 30, user_id: 4, solvedproblems: 30 },
    {id: 18, topic_id:3, topicName: "Array", noofproblems: 308, user_id: 4, solvedproblems: 115 },
    {id: 19, topic_id:4, topicName: "Mathematics", noofproblems: 192, user_id: 4, solvedproblems: 35 },
    {id: 20, topic_id:5, topicName: "Strings", noofproblems: 196, user_id: 4, solvedproblems: 156 },
    {id: 21, topic_id:1, topicName: "Input/Output", noofproblems: 10, user_id: 5, solvedproblems: 10 },
    {id: 22, topic_id:2, topicName: "Absolute Beginner", noofproblems: 30, user_id: 5, solvedproblems: 28 },
    {id: 23, topic_id:3, topicName: "Array", noofproblems: 308, user_id: 5, solvedproblems: 200 },
    {id: 24, topic_id:4, topicName: "Mathematics", noofproblems: 192, user_id: 5, solvedproblems: 115 },
    {id: 25, topic_id:5, topicName: "Strings", noofproblems: 196, user_id: 5, solvedproblems: 89 },
    
])


//1. Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
    {
        $lookup:
        {
            from: "tasks",
            localField: "taskid",
            foreignField: "task_id",
            as: "task_details"
        }
    },
    {
        $match: {
            $and: [
                {
                    "task_details.task_Date":{
                        $gte: ISODate("2020-10-01"),
                        $lte: ISODate("2020-10-31")
                    }
                },
                {
                    "topic_Date":{
                        $gte: ISODate("2020-10-01"),
                        $lte: ISODate("2020-10-31")
                    }
                }
            ]
        }
    }
]).pretty()

//2. Find all the company drives which appeared between 15-oct-2020 and 31-oct-2020
db.companydrives.find({appeareddate: {$gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31")}}).pretty()

//3. Find all the company drives and students who are appeared for the placement
db.companydrives.aggregate([
    {
        $lookup:
        {
            from: "users",
            localField: "isplacement",
            foreignField: "placementappeared",
            as: "student_details"
        }
    },
    {
        $match: {
            $and: [
                {
                    "student_details.placementappeared":{
                        $eq: true
                    }
                },
                {
                    "isplacement":{
                        $eq: true
                    }
                }
            ]
        }
    }
]).pretty()

//4. Find the number of problems solved by the user in codekata
db.codekata.aggregate([
    //stage-1 => group based on user_id and sum solvedproblems
 { $group: { _id: "$user_id", solvedproblemscount: { $sum: "$solvedproblems" } } },
//stage-2=> sort the _id in ascending order
{ $sort: { "_id": 1 } }
])

//5. Find all the mentors with who has the mentee's count more than 15
db.mentors.find({menteecount: {$gt:15}}).pretty()

//6. Find the number of users who are absent and task is not submitted between 15-oct-2020 and 31-oct-2020
db.attendance.aggregate([
    //stage-1 => match present and class date
    { $match: { $and:[
        {
        classdate:{
            $gte: ISODate("2020-10-15"),
            $lte:ISODate("2020-10-31")
        }
    },
    {
        present:{
            $eq:false,
        }
    },
    {
    tasksubmitdate:{
        $not:{
            $gte: ISODate("2020-10-15"),
            $lte:ISODate("2020-10-31")
        }
    }
}
    ] } },
    //stage-2 => group based on user_id
    { $group: { _id: "$user_id", totalcount: { $sum: 1 } } },
    //stage-3 => group based on user_id
    { $group: { _id: null, NoofUsers: { $sum: 1 } } }
    
])
