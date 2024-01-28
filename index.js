const btnEl = document.getElementById("btn")
let country = document.getElementById("country")
let country_code = document.getElementById("country_code")
let region = document.getElementById("region")
let city = document.getElementById("city")
let time_stamp = document.getElementById("timezone")
let f = document.getElementById("f")
const apiKey = "J1BvqwWGldwCywwEjhRinw==1a3OJZKQ1fwEMRDc"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURl = "https://api.api-ninjas.com/v1/urllookup?url="
async function getinfo(){
    f.innerHTML = "Finding URL ..."
    var url = document.getElementById("inp").value
    const response =  await fetch(apiURl+url,options)
    const data =  await response.json()
    f.innerHTML = "Details are as follows .. "
    country.innerHTML =  "Country:"+data.country
    country_code.innerHTML  = "Country Code:"+data.country_code
    region.innerHTML = "Region:"+data.region
    city.innerHTML = "City:"+data.region
    time_stamp.innerHTML =  "TimeZone: "+data.timezone
}
btnEl.addEventListener("click",getinfo)
