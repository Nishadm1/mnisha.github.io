class SocialProfile{
   private Id?: number;
   private about?: string;
   private phoneNumber?:number;
   private emailId?:string;
   private Work?:string;
   private DateOfBirth?:string;
   private Name?:string
   private Friends?:string[];
   private photos?:string[];
   private videos?:string[]
   private education?:string
   private currentcity?:string
   private hometown?:string
   private Music?:string[];
   private Movies?:string[];
   private television?:string[];
   private Games?:string[];
   private Other?:string[];
   private contactinformation?:number;
   private Address?:string;
   private contactList?:string[];
   private likes?:string[]
        constructor(Id?:number,about?:string,phoneNumber?:number,emailId?:string,Work?:string, DateOfBirth?:string,
            Name?:string, Friends?:string[], photos?:string[], videos?:string[], education?:string, currentcity?:string,
            hometown?:string, Music?:string[],  Movies?:string[], television?:string[],  Games?:string[], Other?:string[],
            contactinformation?:number, Address?:string,contactList?:string[], likes?:string[])
            {
    this.Id=Id;
    this.about=about;
    this.phoneNumber=phoneNumber;
    this.emailId=emailId;
    this.Work=Work;
    this.DateOfBirth=DateOfBirth;
    this.Name=Name;
    this.Friends=Friends;
    this.photos=photos;
    this.videos=videos;
    this.education=education;
    this.currentcity=currentcity;
    this.hometown=hometown;
    this.Music=Music;
    this.Movies=Movies;
    this.television=television;
    this.Games=Games;
    this.Other=Other;
    this.contactinformation=contactinformation;
    this.Address=Address;
    this.contactList=contactList;
    this.likes=likes;
    }//end of constructor
    
 //getter
    getIds=()=>
    {
    return this.Id
    }
    getAbout=()=>
    {
        return this.about
    }
    getPhoneNumber=()=>
    {
        if(this.phoneNumber)
        {
        return this.phoneNumber
        }
        else
        {
            return null;
        }
    }
    getWork=()=>
    {
        return this.Work
    }
    getDateOfBirth=()=>
    {
        return this.DateOfBirth
    }
    getName=()=>
    {
        if(this.phoneNumber)
        {            
            return this.Name
        }
        else
        {
            return null
        }
    }
    getFriendList =()=>
    {
        return this.Friends
    }
    getPhotos =()=>
    {
       return this.photos 
    }
    getVideo=()=>
    {
        return this.videos
    }
    getEducation=()=>
    {
        return this.education
    }
    getcurrentcity=()=>
    {
        return this.currentcity
    }
    getMusic=()=>
    {
        return this.Music
    }
    getMovies=()=>
    {
        return this.Movies

    }
    gettelevision=()=>
    {
        return this.television
    }
    getGames=()=>
    {
        return this.Games
    }
    getLikes=()=>
    {
        return this.likes
    }   
    getContactList=()=>
    {
      return this.contactList
   }
   getOther=()=>
   {
       return this.Other
   }
   getHomeTown=()=> {
       return this.hometown
   }
   getEmailId=()=> {
       return this.emailId
   }

    //methods
    getContactInformation=()=>
    {
        console.log("contactinformation")
    }
    getAddress=()=>
    {
        console.log("Display Address")
    }
 

}//end of class


//Input
let deepaliProfile= new SocialProfile(
    160989,//ID
    "Interested in Female",//About
    7767012620,//phone number
    "dipali16.madge@yahoo.com",//email-id
    "Assistant Professor at GHRCOE, Ahmednagar",//Work
    "16/09/1989",//Date ofbirth
    "Deepali Harish Madge",//Name
    ["Deepali", "Amol","Akshaya","Aditi","Shagufta","Afrin"],//FriedList
    ["http://www.facebook.com/photo/1","http://www.facebook.com/photo//2","http://www.facebook.com/photo//3,","http://www.facebook.com/photo/4"],//photos
    ["http://www.facebook.com/videos/2", "http://www.facebook.com/photo/fhh","http://www.facebook.com/photo/ujlk","http://www.facebook.com/photo/"],//videos
    "M.E.(ETC)",//education
    "Ahmednagar",//currentCity
    "Ahmedngar",//Hometown
    ["A.R.Rehman","R.D.Burman","Sajid-Wajid"],//Music
    ["Kabh Khushi Kabhi Gam","Dangal","Devdas"],//Movies
    ["colors Marathi","ABP maza","IBN Lokmat","Star Plus"],//Television
    ["Candy Crush-saga","farming"],//Games
    ["Fashion","Craft","farmiong"],//others
    9503979312,//contact information
    "Gondhale Lane, Ahmednagr",//Address
    ["Priya","Riya","Divya"],//ContactList
    ["Aditi","Priya","Deepali"]
)

console.log("Id  :",deepaliProfile.getIds())
console.log("About  :", deepaliProfile.getAbout())
console.log("Phone Number : ", deepaliProfile.getPhoneNumber())
console.log("emainId: " ,deepaliProfile.getEmailId())
console.log("Work: ",deepaliProfile.getWork())
console.log("DateOfBirth: ",deepaliProfile.getDateOfBirth())
console.log("Name: ",deepaliProfile.getName())
console.log("Friends: ",deepaliProfile.getFriendList())
console.log("Photos: ",deepaliProfile.getPhotos())
console.log("videos: ",deepaliProfile.getVideo())
console.log("Education: ",deepaliProfile.getEducation())
console.log("Current City: ", deepaliProfile.getcurrentcity())
console.log("Home town: ",deepaliProfile.getHomeTown())
console.log("Music: ",deepaliProfile.getMusic())
console.log("Movies: ",deepaliProfile.getMovies())
console.log("Television: ",deepaliProfile.gettelevision())
console.log("Games: ",deepaliProfile.getGames())
console.log("Others: ",deepaliProfile.getOther())
console.log("Conatct Informtion: ",deepaliProfile.getContactInformation())
console.log("Address: ", deepaliProfile.getAddress())
console.log("Contact List: ", deepaliProfile.getContactList())
console.log("Likes: ",deepaliProfile.getLikes())







