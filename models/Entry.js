const dbService = require('../services/dbService')
let db = null;
// class represent the entry to the parking lot
class Entry{
    constructor(licensePlateNumber,isVerified,created,whyw){
        this.licensePlateNumber = licensePlateNumber;
        this.isVerified = isVerified;
        //date of entry to the parking lot
        this.created = created;
        // reason for decline
        this.whyw = whyw;
        //data base service to save the entries
        db = new dbService();
    }

    async saveToDB (){
        await db.initDB("ParkingLot");
        await db.insertOne(this,"entries");
    }

    setIsVerified(isVerified){
        this.isVerified = isVerified;
    }

    // deciding if the vehicle may enter according to some criterions 
    checkVerification(){
        
        if(!this.isPrivateVehicle()){
            this.whyw = "Public Transportation Vehicle";
            this.isVerified = false;
        }
        
        else if(this.isMilitaryOrLawEnforcementVehicle()){
            this.whyw = "Military Or Law Enforcement Vehicle";
            this.isVerified = false;
        }

        else if(!this.isSevenDigitsAllowedVehicle()){
            this.whyw = "Seven Digits Prohibited Vehicle";
            this.isVerified = false;
        }

        else if(!this.isNotOperatedByGas()){
            this.whyw = "Operated By Gas Vehicle";
            this.isVerified = false;
        }

        else{
            this.isVerified = true;
        }

    }
    // check if it's not public transportation vehicle
    isPrivateVehicle(){
        const lastTwoDigits = this.licensePlateNumber.substring(this.licensePlateNumber.length-2);
        if(lastTwoDigits==="25" || lastTwoDigits==="26"){
            return false;
        }
        return true;
    }
    // Military & law enforcement vehicles include an alphabet letter
    isMilitaryOrLawEnforcementVehicle(){
        for(let char of this.licensePlateNumber){
            if(char < "0" || char > "9"){
                return true;
            }
        }
        return false;
    }

    //checks if the plat contains seven digits and prohibited Suffixes
    isSevenDigitsAllowedVehicle(){
        if(this.licensePlateNumber.length!== 7){
            return true;
        }
        const prohibitedSuffixes =  ["85","86","87","88","89","00"];
        const lastTwoDigits = this.licensePlateNumber.substring(this.licensePlateNumber.length-2);
        for(let suffix of prohibitedSuffixes){
            if(lastTwoDigits===suffix){
                return false;
            }
        }
        return true;
    }

    isNotOperatedByGas(){
        if(this.licensePlateNumber.length!== 7 && this.licensePlateNumber.length!== 8){
            return true;
        }
        let sumOfDigits = 0;
        for(let digit of this.licensePlateNumber){
            sumOfDigits+= Number(digit);
        }
        if(sumOfDigits%7===0){
            return false;
        }
        return true;
    }
}

module.exports = Entry;