//This app is created by Salik shaikh after consulting Ata Shaikh

// api link for covid 19
// https://api.covid19api.com/live/country/india/status/confirmed/date/2021-02-21T23:50:00Z

//api link for summary
//https://api.covid19api.com/summary

//world total
//https://api.covid19api.com/world/total

let country = document.getElementById("country");
const dataList = document.getElementById("countryName");
const submitBtn = document.getElementById("submitBtn");
const cases = document.getElementById("cases");
const deaths = document.getElementById("deaths");
const recovered = document.getElementById("recovered");
const countryName2 = document.getElementById("countryName2");
const provinces = document.getElementById("provinces");
const province = document.getElementById("province");
const loading = document.getElementById("loading");
const results = document.getElementById("results");
const worldData = document.querySelectorAll(".worldData");
const worldCases = document.getElementById("worldCases");
const worldRecovered = document.getElementById("worldRecovered");
const worldDeaths = document.getElementById("worldDeaths");
const USCases = document.getElementById("USCases");
const USRecovered = document.getElementById("USRecovered");
const USDeaths = document.getElementById("USDeaths");
const indiaCases = document.getElementById("indiaCases");
const indiaRecovered = document.getElementById("indiaRecovered");
const indiaDeaths = document.getElementById("indiaDeaths");
const spinnerBorder = document.querySelectorAll(".spinner-border");
const pieChartBox = document.getElementById("pieChart").getContext("2d");
const pieChartOuter = document.querySelector(".pieChartBox");

let pieCases;
let pieDeaths;
let pieRecoveres;

//All the countries
let countries = [
  "Costa Rica",
  "Netherlands",
  "Venezuela (Bolivarian Republic)",
  "Saint Helena",
  "Syrian Arab Republic (Syria)",
  "Hungary",
  "Bolivia",
  "Burundi",
  "Ecuador",
  "Saudi Arabia",
  "Cyprus",
  "Greenland",
  "Pakistan",
  "India",
  "Korea (North)",
  "China",
  "Cook Islands",
  "Finland",
  "Libya",
  "Russian Federation",
  "Slovenia",
  "Antigua and Barbuda",
  "Isle of Man",
  "Heard and Mcdonald Islands",
  "Paraguay",
  "Tunisia",
  "Grenada",
  "Guinea",
  "South Sudan",
  "Bhutan",
  "Haiti",
  "Maldives",
  "Saint Kitts and Nevis",
  "Ukraine",
  "Israel",
  "Myanmar",
  "Nepal",
  "Nigeria",
  "Pitcairn",
  "British Virgin Islands",
  "Bulgaria",
  "Gibraltar",
  "United Kingdom",
  "Comoros",
  "Côte d'Ivoire",
  "Faroe Islands",
  "Togo",
  "Turkmenistan",
  "Bosnia and Herzegovina",
  "Cocos (Keeling) Islands",
  "United States of America",
  "Macedonia, Republic of",
  "Mozambique",
  "Australia",
  "Western Sahara",
  "Aruba",
  "Christmas Island",
  "Svalbard and Jan Mayen Islands",
  "Equatorial Guinea",
  "Uruguay",
  "Romania",
  "Hong Kong, SAR China",
  "Republic of Kosovo",
  "Palestinian Territory",
  "Cambodia",
  "Estonia",
  "Georgia",
  "Luxembourg",
  "Saint-Martin (French part)",
  "Bahrain",
  "Canada",
  "Chile",
  "Benin",
  "Jordan",
  "Mayotte",
  "San Marino",
  "Tanzania, United Republic of",
  "Armenia",
  "Vanuatu",
  "Mongolia",
  "Rwanda",
  "Tajikistan",
  "Bahamas",
  "Chad",
  "Saint Vincent and Grenadines",
  "Thailand",
  "Viet Nam",
  "Afghanistan",
  "Gambia",
  "Germany",
  "Cuba",
  "Macao, SAR China",
  "Anguilla",
  "Brunei Darussalam",
  "Congo (Brazzaville)",
  "Iraq",
  "Kyrgyzstan",
  "New Caledonia",
  "Qatar",
  "Angola",
  "Czech Republic",
  "Guatemala",
  "Niger",
  "Saint Lucia",
  "Montenegro",
  "Poland",
  "Algeria",
  "Jamaica",
  "Mexico",
  "Brazil",
  "Ireland",
  "Japan",
  "Saint Pierre and Miquelon",
  "Bouvet Island",
  "Marshall Islands",
  "Mauritania",
  "South Africa",
  "Falkland Islands (Malvinas)",
  "Mauritius",
  "Netherlands Antilles",
  "Uzbekistan",
  "Croatia",
  "Réunion",
  "Trinidad and Tobago",
  "Barbados",
  "Greece",
  "Lao PDR",
  "Zambia",
  "Niue",
  "Guam",
  "Jersey",
  "Montserrat",
  "Honduras",
  "Palau",
  "Zimbabwe",
  "French Polynesia",
  "Sudan",
  "Moldova",
  "Belize",
  "Liechtenstein",
  "Madagascar",
  "Indonesia",
  "Timor-Leste",
  "Argentina",
  "South Georgia and the South Sandwich Islands",
  "Switzerland",
  "United Arab Emirates",
  "US Minor Outlying Islands",
  "Guinea-Bissau",
  "Kenya",
  "Oman",
  "Kuwait",
  "Wallis and Futuna Islands",
  "Korea (South)",
  "Peru",
  "Somalia",
  "Northern Mariana Islands",
  "Yemen",
  "Samoa",
  "Turkey",
  "Bangladesh",
  "Denmark",
  "Eritrea",
  "Namibia",
  "Tokelau",
  "ALA Aland Islands",
  "Antarctica",
  "Tonga",
  "Bermuda",
  "Nauru",
  "Panama",
  "Micronesia, Federated States of",
  "Portugal",
  "Senegal",
  "Suriname",
  "Austria",
  "Azerbaijan",
  "Martinique",
  "Nicaragua",
  "Singapore",
  "Belgium",
  "Cape Verde",
  "Liberia",
  "Serbia",
  "Seychelles",
  "Congo (Kinshasa)",
  "French Southern Territories",
  "Puerto Rico",
  "Sao Tome and Principe",
  "Andorra",
  "Philippines",
  "Lebanon",
  "Lithuania",
  "Malawi",
  "Malaysia",
  "Spain",
  "British Indian Ocean Territory",
  "French Guiana",
  "Sri Lanka",
  "Sweden",
  "Uganda",
  "Egypt",
  "Tuvalu",
  "Fiji",
  "Guyana",
  "El Salvador",
  "Lesotho",
  "Virgin Islands, US",
  "Botswana",
  "Dominica",
  "Papua New Guinea",
  "Slovakia",
  "Swaziland",
  "Burkina Faso",
  "Colombia",
  "Ghana",
  "Iran, Islamic Republic of",
  "Norfolk Island",
  "France",
  "Guadeloupe",
  "Guernsey",
  "Kazakhstan",
  "Belarus",
  "Monaco",
  "Albania",
  "Ethiopia",
  "Holy See (Vatican City State)",
  "Iceland",
  "Italy",
  "American Samoa",
  "Cayman Islands",
  "Gabon",
  "Saint-Barthélemy",
  "Cameroon",
  "New Zealand",
  "Kiribati",
  "Malta",
  "Morocco",
  "Turks and Caicos Islands",
  "Djibouti",
  "Dominican Republic",
  "Solomon Islands",
  "Taiwan, Republic of China",
  "Central African Republic",
  "Latvia",
  "Norway",
  "Mali",
  "Sierra Leone",
];

const form = document.getElementById("form");

// Loading data whenever the page loads/reloads
window.addEventListener("load", async () => {
  try {
    let response = await fetch(`https://api.covid19api.com/summary`);
    let data = await response.json();
    Array.from(spinnerBorder).forEach((spinner) => {
      spinner.style.display = "none";
    });
    // Updating world data
    worldCases.innerText = data.Global.NewConfirmed;
    worldRecovered.innerText = data.Global.NewRecovered;
    worldDeaths.innerText = data.Global.NewDeaths;
    // Filtering data keep only (United States of America & India)
    const filteredData = data.Countries.filter((country) => {
      return (
        country.Country === "United States of America" ||
        country.Country === "India"
      );
    });
    // Updating US data
    USCases.innerText = filteredData[1].NewConfirmed;
    USRecovered.innerText = filteredData[1].NewRecovered;
    USDeaths.innerText = filteredData[1].NewDeaths;
    // Updating India's data
    indiaCases.innerText = filteredData[0].NewConfirmed;
    indiaRecovered.innerText = filteredData[0].NewRecovered;
    indiaDeaths.innerText = filteredData[0].NewDeaths;
    Array.from(worldData).forEach((worlddata) => {
      worlddata.style.display = "block";
    });
  } catch (error) {
    console.log("Error: ", error);
  }
});

//Creating the options for the data list on the fly
countries.forEach((country) => {
  let option = document.createElement("option");
  option.value = country;
  dataList.appendChild(option);
});

//Whenever user click submit call the fetch function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData();
});

//Fetching data from an API
async function fetchData(index = 0) {
  try {
    provinces.innerHTML = "";
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() - 1;
    let hour = date.getHours();
    let minute = date.getMinutes();
    loading.style.display = "block";
    results.style.display = "none";
    const response = await fetch(
      `https://api.covid19api.com/live/country/${
        country.value
      }/status/confirmed/date/${year + "-" + month + "-" + day}T${
        hour + ":" + minute
      }:00Z`
    );
    let data = await response.json();

    //setting provinces on the fly
    data.forEach((data, index) => {
      if (data.Province !== "") {
        let option = document.createElement("option");
        option.value = index;
        option.innerText = `${data.Province}`;
        provinces.appendChild(option);
      }
    });

    loading.style.display = "none";
    cases.innerHTML = `${data[index].Active}`;
    deaths.innerHTML = `${data[index].Deaths}`;
    recovered.innerHTML = `${data[index].Recovered}`;

    //Pie chart
    var myPieChart = new Chart(pieChartBox, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [
              data[index].Active,
              data[index].Deaths,
              data[index].Recovered,
            ],
            backgroundColor: ["#007bff", "#dc3545", "#28a745"],
          },
        ],
        labels: ["Cases", "Deaths", "Recovers"],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    province.innerHTML = `${data[index].Province}`;
    countryName2.innerHTML = `${country.value}`;
    results.style.display = "block";
    pieChartOuter.style.display = "block";
  } catch (error) {
    loading.style.color = "#dc3545";
    loading.innerText = "Server error, please try agian later.";
  }
}

//Update data when user changes provinces/states
provinces.addEventListener("change", (e) => {
  let index = e.target.value;
  fetchData(parseInt(index));
});
