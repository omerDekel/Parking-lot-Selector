# Parking-lot-Selector
   A service written in NodeJS which gets an image of a license plate and returns a decision whether the vehicle may enter a parking lot. Each decision 
   is writen to a local MongoDB data base. 
## Setup instructions:
* Download the files of this repository.
* Run these commands in terminal from the directory of the project:
    * npm install
    * npm start
* Open Postman and send post request as follows:
    *  request url : http://localhost:3010/entries
    *  body : fill the path to the image this way : { "imagePath": [Path to the image]}.
 ## Some pathes of images for the requests :
 * "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/1.jpg?raw=true"
 * "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/Capture.JPG?raw=true"
 * "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/13.png?raw=true"
 * "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/9.jpeg?raw=true"
 *  "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/5.jpg?raw=true"
 ## Data Base
 The data of the entries is saved this way:
 * licensePlateNumber
 * isVerified - true or false
 * created - date of creation
 * whyw - desciption for decline the entry (empty if the car may enter)
 * whyid -  reprented this way:
 ** "may_enter":0
 ** "public_tranpost":1,
 ** "military_or_enforcment":2,
 ** "prohibted_seven_digs":3,
 ** "operated_by_gas":4
