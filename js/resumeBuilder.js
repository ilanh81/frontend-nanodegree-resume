/*
This is empty on purpose! Your code to build the resume will go here.
 */


/*
----------------------------------
The JSON objects with all the data
----------------------------------
*/

var bio = {
    "name": "Ilan Hayat",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "+972-544-797591",
        "email": "ilanhayat@gmail.com",
        "github": "https://github.com/ilanh81/frontend-nanodegree-resume",
        "location": "Binyamina-Giv'at Ada, Israel"
    },
    "welcomeMessage": "Welcome to my resume page, I hope we can fullfill drreams together!",
    "skills": [
        "HTML",
        "CSS",
        "Javascript",
        "PHP",
        "Python",
        "Machine Learning",
        "Data Anlaysis",
        "SEO",
        "iOS Development",
        "Android Development"
        
    ],
    "biopic": "images/me.jpg",
    "replace": function(target,content){
        return target.replace("%data%",content);
    },
    
    "display": function(){
        
        $('#header').prepend(this.replace(HTMLheaderRole,this.role));
        $('#header').prepend(this.replace(HTMLheaderName,this.name));
        $('#topContacts').append(this.replace(HTMLmobile,this.contacts.mobile));
        $('#topContacts').append(this.replace(HTMLemail,this.contacts.email));
        $('#topContacts').append(this.replace(HTMLlocation,this.contacts.location));
        $("#header").append(this.replace(HTMLbioPic,this.biopic));
        $("#header").append(this.replace(HTMLwelcomeMsg,this.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        for(skill in bio.skills) {
            $("#skills").append(this.replace(HTMLskills,bio.skills[skill]));
        };
        
        
    }
    
};

var education = {
    "schools":[
        {
            "name": "TLVU",
            "location": "Tel Aviv, Israel",
            "degree": "Economics and Business Administration",
            "majors": [
                "Economics",
                "Business Administration"
            ],
            "dates": "2004-2007",
            "url": "https://english.tau.ac.il/",
        },
        {
            "name": "TLVU",
            "location": "Tel Aviv, Israel",
            "degree": "Master of Business Administration",
            "majors": [
                "Marketing",
                "Information Technology Management"
            ],
            "dates": "In Progress",
            "url": "https://english.tau.ac.il/",
        }
    ],
    "onlineCourses": [
        {
            "title": "Become a Web Developer from Scratch",
            "school": "Udemy",
            "dates": "2013-2014",
            "url": "https://www.udemy.com/how-to-become-a-web-developer-from-scratch/learn/v4/overview"
        },
        {
            "title": "Javascript: Understaning the Weird Parts",
            "school": "Udemy",
            "dates": "2016-2016",
            "url": "https://www.udemy.com/understand-javascript/learn/v4/overview"
        },
        {
            "title": "Chinese for beginners parts 1-5",
            "school": "Rosetta Stone",
            "dates": "2016-2016",
            "url": "http://www.rosettastone.com/learn-chinese/"
        },
        {
            "title": "The complete web developer course",
            "school": "Udemy",
            "dates": "2015-2016",
            "url": "https://www.udemy.com/complete-web-developer-course/learn/v4/overview"
        }
        
    ],
    "upperCase": function(string){
    var split = string.split(" ");
    var result = "";
    for (var i=0;i<split.length;i++){
        var first = split[i].slice(0,1).toLocaleUpperCase();
        var rest = split[i].slice(1).toLocaleLowerCase();
        result += first+rest+" ";
        
    }
    return result.slice(0,result.length-1);
    }, 
    "replace": function(target,content){
        return target.replace("%data%",content);
    },
    "display": function(){
        $("#education").append(HTMLschoolStart);
        for (school in education.schools){
            $(".education-entry").append(this.replace(HTMLschoolName,education.schools[school].name)+this.replace(HTMLschoolDegree,education.schools[school].degree));
            $(".education-entry").append(this.replace(HTMLschoolDates,education.schools[school].dates));
            $(".education-entry").append(this.replace(HTMLschoolMajor,education.schools[school].majors));
        }
       
     
      $(HTMLonlineClasses).appendTo(".education-entry:last");
       for (onlineCourse in education.onlineCourses){
            $(".education-entry").append(this.replace(HTMLonlineTitle,education.onlineCourses[onlineCourse].title)+this.replace(HTMLonlineSchool,this.upperCase(this.onlineCourses[onlineCourse].school)));
            $(".education-entry").append(this.replace(HTMLonlineDates,this.onlineCourses[onlineCourse].dates));
           $(".education-entry").append(this.replace(HTMLonlineURL,this.onlineCourses[onlineCourse].url));
           
        }
    }
};

var work = {
    "jobs":[
        {
            "employer": "Orange",
            "title": "online support rep",
            "location": "petah tikva, Israel",
            "dates": "2004-2005",
            "description": "online support desk for the largest mobile carrier in Israel"
        },
        {
            "employer": "Jungo",
            "title": "sales and support engineer",
            "location": "Netanya, Israel",
            "dates": "2005-2007",
            "description": "inside sales and tier-1 support of software tools for embedded product development"
        },
        {
            "employer": "NDS",
            "title": "Account Executive",
            "location": "Netanya, Israel",
            "dates": "2007-2010",
            "description": "Strategic account management including sales, customer management, presales and upsales"
        },
         {
            "employer": "NDS",
            "title": "Director of Sales",
            "location": "Netanya, Israel",
            "dates": "2010-2013",
            "description": "Manager of all sales operations for the connectivity software group, managing 3 account executives and 3 regional sales offices in China, Japan and S.korea"
        },
        {
            "employer": "Jungo Connectivity",
            "title": "Business Director",
            "location": "Netanya, Israel",
            "dates": "2013-2014",
            "description": "Responsible for all strategic OEM accounts in USA, EU and China"
        },
        {
            "employer": "MCCI",
            "title": "Internation Sales and Business Development",
            "location": "Ithaca, New York",
            "dates": "2014-2016",
            "description": "Internation sales and business development of strategic account for embedded USB software products"
        },
         {
            "employer": "Guardian Optical",
            "title": "VP Business Development",
            "location": "Tel Aviv, Israel",
            "dates": "2015-2016",
            "description": "Responsible for strategic OEM account development in USA and Europe"
        }
    ],
    "replace": function(target,content){
        return target.replace("%data%",content);
    },
    "display": function(){
       
        for (position in this.jobs){
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(this.replace(HTMLworkEmployer,work.jobs[position].employer)+this.replace(HTMLworkTitle,work.jobs[position].title));
            $(".work-entry:last").append(this.replace(HTMLworkDates,this.jobs[position].dates));
            $(".work-entry:last").append(this.replace(HTMLworkDescription,this.jobs[position].description));
            $(".work-entry:last").append(this.replace(HTMLworkLocation,this.jobs[position].location));
         
            
        }
        
    }
};

var projects = {
  "projects":[
      {
          "title": "Online resume",
          "dates": "2016-2016",
          "description": "My career path",
          "images":[]
      },
      {
          "title": "Home Academy",
          "dates": "2016-2016",
          "description": "An internal portal for my kids to interactively learn math, hebrew, problem solving and more",
          "images":[
              "images/website.jpg"
          ]
      },
      {
          "title": "My first Bench",
          "dates": "2016-2016",
          "description": "My first woodworking attempt..",
          "images":[
              "images/my_bench.JPG"
          ]
      }
      
  ],
"upperCase": function(string){
    var split = string.split(" ");
    var result = "";
    for (var i=0;i<split.length;i++){
        var first = split[i].slice(0,1).toLocaleUpperCase();
        var rest = split[i].slice(1).toLocaleLowerCase();
        result += first+rest+" ";
        
    }
    
    return result.slice(0,result.length-1);
    
}, 
"replace": function(target,content){
    return target.replace("%data%",content);
 },
"display": function(){
    $("#projects").append(HTMLprojectStart);
    for (project in projects.projects){
       
        $(".project-entry").append(this.replace(HTMLprojectTitle,this.upperCase(this.projects[project].title)));
        $(".project-entry").append(this.replace(HTMLprojectDates,this.projects[project].dates));
        $(".project-entry").append(this.replace(HTMLprojectDescription,this.projects[project].description));
        $(".project-entry").append(this.replace(HTMLprojectDates,this.projects[project].dates));
        for (pic in this.projects[project].images){
            if(this.projects[project].images.length!=0){
                $(".project-entry").append(this.replace(HTMLprojectImage,this.projects[project].images[pic]));
                console.log(this.projects[project].images[pic]);
            }
        }
    }
}
};


/*
----------------------------------
How to append data to the index.html file
----------------------------------
*/

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);