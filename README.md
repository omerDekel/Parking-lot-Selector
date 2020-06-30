# Parking-lot-Selector
   A service written in NodeJS which gets an image of a license plate and returns a decision whether the vehicle may enter a parking lot. Each decision 
   is writen to a local MongoDB data base. 
## Setup instructions:
* Download the files of this repository (Images directory is not neccesery).
* Run these instructions in the directory of the project:
    * npm install
    * npm start
* Open MongoDb and connect it.
* Open Postman and send post request as follows:
    *  url : http://localhost:3009/selector
    *  add Header (in Headers section) of :{ key :Content-Type, value: application/json}
    *  choose "raw" in body and enter : { "imagePath": [Path to the image]}.
    *  now you can see the decision of the service in response's body (choose raw) 
 ## Some pathes of images for the requests :
 * "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/1.jpg?raw=true"
 * "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/Capture.JPG?raw=true"
 * "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/13.png?raw=true"
 * "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/9.jpeg?raw=true"
 *  "https://github.com/omerDekel/Parking-lot-Selector/blob/master/images/5.jpg?raw=true"
