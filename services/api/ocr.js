
const axios = require('axios');

async function getLicensePlateNumber(imgUrl){

    const apikey = "6a95d7362188957";
    let response = null;
    try{
        response = await axios.get("https://api.ocr.space/parse/imageurl?apikey=" + apikey + "&url=" + imgUrl)

    }
    catch(error){
        console.log(error)
    }
    //return plate without redundant chars
    return response.data.ParsedResults[0].ParsedText.replace(/[^0-9a-z]/gi, "");
}

module.exports = getLicensePlateNumber;