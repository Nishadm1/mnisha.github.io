var SocialProfile = /** @class */ (function () {
    function SocialProfile(Id, about, phoneNumber, emailId, Work, DateOfBirth, Name, Friends, photos, videos, education, currentcity, hometown, Music, Movies, television, Games, Other, contactinformation, Address, contactList, likes) {
        var _this = this;
        //getter
        this.getIds = function () {
            return _this.Id;
        };
        this.getAbout = function () {
            return _this.about;
        };
        this.getPhoneNumber = function () {
            if (_this.phoneNumber) {
                return _this.phoneNumber;
            }
            else {
                return null;
            }
        };
        this.getWork = function () {
            return _this.Work;
        };
        this.getDateOfBirth = function () {
            return _this.DateOfBirth;
        };
        this.getName = function () {
            if (_this.phoneNumber) {
                return _this.Name;
            }
            else {
                return null;
            }
        };
        this.getFriendList = function () {
            return _this.Friends;
        };
        this.getPhotos = function () {
            return _this.photos;
        };
        this.getVideo = function () {
            return _this.videos;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getcurrentcity = function () {
            return _this.currentcity;
        };
        this.getMusic = function () {
            return _this.Music;
        };
        this.getMovies = function () {
            return _this.Movies;
        };
        this.gettelevision = function () {
            return _this.television;
        };
        this.getGames = function () {
            return _this.Games;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getContactList = function () {
            return _this.contactList;
        };
        this.getOther = function () {
            return _this.Other;
        };
        this.getHomeTown = function () {
            return _this.hometown;
        };
        this.getEmailId = function () {
            return _this.emailId;
        };
        //methods
        this.getContactInformation = function () {
            console.log("contactinformation");
        };
        this.getAddress = function () {
            console.log("Display Address");
        };
        this.Id = Id;
        this.about = about;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
        this.Work = Work;
        this.DateOfBirth = DateOfBirth;
        this.Name = Name;
        this.Friends = Friends;
        this.photos = photos;
        this.videos = videos;
        this.education = education;
        this.currentcity = currentcity;
        this.hometown = hometown;
        this.Music = Music;
        this.Movies = Movies;
        this.television = television;
        this.Games = Games;
        this.Other = Other;
        this.contactinformation = contactinformation;
        this.Address = Address;
        this.contactList = contactList;
        this.likes = likes;
    } //end of constructor
    return SocialProfile;
}()); //end of class
//Input
var deepaliProfile = new SocialProfile(160989, //ID
"Interested in Female", //About
7767012620, //phone number
"dipali16.madge@yahoo.com", //email-id
"Assistant Professor at GHRCOE, Ahmednagar", //Work
"16/09/1989", //Date ofbirth
"Deepali Harish Madge", //Name
["Deepali", "Amol", "Akshaya", "Aditi", "Shagufta", "Afrin"], //FriedList
["http://www.facebook.com/photo/1", "http://www.facebook.com/photo//2", "http://www.facebook.com/photo//3,", "http://www.facebook.com/photo/4"], //photos
["http://www.facebook.com/videos/2", "http://www.facebook.com/photo/fhh", "http://www.facebook.com/photo/ujlk", "http://www.facebook.com/photo/"], //videos
"M.E.(ETC)", //education
"Ahmednagar", //currentCity
"Ahmedngar", //Hometown
["A.R.Rehman", "R.D.Burman", "Sajid-Wajid"], //Music
["Kabh Khushi Kabhi Gam", "Dangal", "Devdas"], //Movies
["colors Marathi", "ABP maza", "IBN Lokmat", "Star Plus"], //Television
["Candy Crush-saga", "farming"], //Games
["Fashion", "Craft", "farmiong"], //others
9503979312, //contact information
"Gondhale Lane, Ahmednagr", //Address
["Priya", "Riya", "Divya"], //ContactList
["Aditi", "Priya", "Deepali"]);
console.log("Id  :", deepaliProfile.getIds());
console.log("About  :", deepaliProfile.getAbout());
console.log("Phone Number : ", deepaliProfile.getPhoneNumber());
console.log("emainId: ", deepaliProfile.getEmailId());
console.log("Work: ", deepaliProfile.getWork());
console.log("DateOfBirth: ", deepaliProfile.getDateOfBirth());
console.log("Name: ", deepaliProfile.getName());
console.log("Friends: ", deepaliProfile.getFriendList());
console.log("Photos: ", deepaliProfile.getPhotos());
console.log("videos: ", deepaliProfile.getVideo());
console.log("Education: ", deepaliProfile.getEducation());
console.log("Current City: ", deepaliProfile.getcurrentcity());
console.log("Home town: ", deepaliProfile.getHomeTown());
console.log("Music: ", deepaliProfile.getMusic());
console.log("Movies: ", deepaliProfile.getMovies());
console.log("Television: ", deepaliProfile.gettelevision());
console.log("Games: ", deepaliProfile.getGames());
console.log("Others: ", deepaliProfile.getOther());
console.log("Conatct Informtion: ", deepaliProfile.getContactInformation());
console.log("Address: ", deepaliProfile.getAddress());
console.log("Contact List: ", deepaliProfile.getContactList());
console.log("Likes: ", deepaliProfile.getLikes());
