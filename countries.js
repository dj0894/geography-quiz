// 195 countries: 193 UN member states plus Palestine and Vatican City.
const COUNTRIES = [
  {
    "country": "Afghanistan",
    "capital": "Kabul",
    "continent": "Asia",
    "code": "AFG",
    "flag": "🇦🇫",
    "lat": 33.0,
    "lng": 65.0,
    "level": "medium"
  },
  {
    "country": "Albania",
    "capital": "Tirana",
    "continent": "Europe",
    "code": "ALB",
    "flag": "🇦🇱",
    "lat": 41.0,
    "lng": 20.0,
    "level": "medium"
  },
  {
    "country": "Algeria",
    "capital": "Algiers",
    "continent": "Africa",
    "code": "DZA",
    "flag": "🇩🇿",
    "lat": 28.0,
    "lng": 3.0,
    "level": "medium"
  },
  {
    "country": "Andorra",
    "capital": "Andorra la Vella",
    "continent": "Europe",
    "code": "AND",
    "flag": "🇦🇩",
    "lat": 42.5063,
    "lng": 1.5218,
    "level": "hard"
  },
  {
    "country": "Angola",
    "capital": "Luanda",
    "continent": "Africa",
    "code": "AGO",
    "flag": "🇦🇴",
    "lat": -12.5,
    "lng": 18.5,
    "level": "medium"
  },
  {
    "country": "Antigua and Barbuda",
    "capital": "Saint John's",
    "continent": "North America",
    "code": "ATG",
    "flag": "🇦🇬",
    "lat": 17.05,
    "lng": -61.8,
    "level": "hard"
  },
  {
    "country": "Argentina",
    "capital": "Buenos Aires",
    "continent": "South America",
    "code": "ARG",
    "flag": "🇦🇷",
    "lat": -34.0,
    "lng": -64.0,
    "level": "easy"
  },
  {
    "country": "Armenia",
    "capital": "Yerevan",
    "continent": "Asia",
    "code": "ARM",
    "flag": "🇦🇲",
    "lat": 40.0,
    "lng": 45.0,
    "level": "medium"
  },
  {
    "country": "Australia",
    "capital": "Canberra",
    "continent": "Oceania",
    "code": "AUS",
    "flag": "🇦🇺",
    "lat": -27.0,
    "lng": 133.0,
    "level": "easy"
  },
  {
    "country": "Austria",
    "capital": "Vienna",
    "continent": "Europe",
    "code": "AUT",
    "flag": "🇦🇹",
    "lat": 47.33333333,
    "lng": 13.33333333,
    "level": "easy"
  },
  {
    "country": "Azerbaijan",
    "capital": "Baku",
    "continent": "Asia",
    "code": "AZE",
    "flag": "🇦🇿",
    "lat": 40.5,
    "lng": 47.5,
    "level": "medium"
  },
  {
    "country": "Bahamas",
    "capital": "Nassau",
    "continent": "North America",
    "code": "BHS",
    "flag": "🇧🇸",
    "lat": 24.25,
    "lng": -76.0,
    "level": "medium"
  },
  {
    "country": "Bahrain",
    "capital": "Manama",
    "continent": "Asia",
    "code": "BHR",
    "flag": "🇧🇭",
    "lat": 26.0,
    "lng": 50.55,
    "level": "medium"
  },
  {
    "country": "Bangladesh",
    "capital": "Dhaka",
    "continent": "Asia",
    "code": "BGD",
    "flag": "🇧🇩",
    "lat": 24.0,
    "lng": 90.0,
    "level": "easy"
  },
  {
    "country": "Barbados",
    "capital": "Bridgetown",
    "continent": "North America",
    "code": "BRB",
    "flag": "🇧🇧",
    "lat": 13.16666666,
    "lng": -59.53333333,
    "level": "hard"
  },
  {
    "country": "Belarus",
    "capital": "Minsk",
    "continent": "Europe",
    "code": "BLR",
    "flag": "🇧🇾",
    "lat": 53.0,
    "lng": 28.0,
    "level": "medium"
  },
  {
    "country": "Belgium",
    "capital": "Brussels",
    "continent": "Europe",
    "code": "BEL",
    "flag": "🇧🇪",
    "lat": 50.83333333,
    "lng": 4.0,
    "level": "easy"
  },
  {
    "country": "Belize",
    "capital": "Belmopan",
    "continent": "North America",
    "code": "BLZ",
    "flag": "🇧🇿",
    "lat": 17.25,
    "lng": -88.75,
    "level": "medium"
  },
  {
    "country": "Benin",
    "capital": "Porto-Novo",
    "continent": "Africa",
    "code": "BEN",
    "flag": "🇧🇯",
    "lat": 9.5,
    "lng": 2.25,
    "level": "hard"
  },
  {
    "country": "Bhutan",
    "capital": "Thimphu",
    "continent": "Asia",
    "code": "BTN",
    "flag": "🇧🇹",
    "lat": 27.5,
    "lng": 90.5,
    "level": "medium"
  },
  {
    "country": "Bolivia",
    "capital": "Sucre",
    "continent": "South America",
    "code": "BOL",
    "flag": "🇧🇴",
    "lat": -17.0,
    "lng": -65.0,
    "level": "medium",
    "aliases": [
      "La Paz"
    ]
  },
  {
    "country": "Bosnia and Herzegovina",
    "capital": "Sarajevo",
    "continent": "Europe",
    "code": "BIH",
    "flag": "🇧🇦",
    "lat": 44.0,
    "lng": 18.0,
    "level": "medium"
  },
  {
    "country": "Botswana",
    "capital": "Gaborone",
    "continent": "Africa",
    "code": "BWA",
    "flag": "🇧🇼",
    "lat": -22.0,
    "lng": 24.0,
    "level": "medium"
  },
  {
    "country": "Brazil",
    "capital": "Brasília",
    "continent": "South America",
    "code": "BRA",
    "flag": "🇧🇷",
    "lat": -10.0,
    "lng": -55.0,
    "level": "easy"
  },
  {
    "country": "Brunei",
    "capital": "Bandar Seri Begawan",
    "continent": "Asia",
    "code": "BRN",
    "flag": "🇧🇳",
    "lat": 4.5,
    "lng": 114.66666666,
    "level": "medium"
  },
  {
    "country": "Bulgaria",
    "capital": "Sofia",
    "continent": "Europe",
    "code": "BGR",
    "flag": "🇧🇬",
    "lat": 43.0,
    "lng": 25.0,
    "level": "medium"
  },
  {
    "country": "Burkina Faso",
    "capital": "Ouagadougou",
    "continent": "Africa",
    "code": "BFA",
    "flag": "🇧🇫",
    "lat": 13.0,
    "lng": -2.0,
    "level": "hard"
  },
  {
    "country": "Burundi",
    "capital": "Gitega",
    "continent": "Africa",
    "code": "BDI",
    "flag": "🇧🇮",
    "lat": -3.5,
    "lng": 30.0,
    "level": "hard"
  },
  {
    "country": "Cabo Verde",
    "capital": "Praia",
    "continent": "Africa",
    "code": "CPV",
    "flag": "🇨🇻",
    "lat": 16.0,
    "lng": -24.0,
    "level": "hard"
  },
  {
    "country": "Cambodia",
    "capital": "Phnom Penh",
    "continent": "Asia",
    "code": "KHM",
    "flag": "🇰🇭",
    "lat": 13.0,
    "lng": 105.0,
    "level": "medium"
  },
  {
    "country": "Cameroon",
    "capital": "Yaoundé",
    "continent": "Africa",
    "code": "CMR",
    "flag": "🇨🇲",
    "lat": 6.0,
    "lng": 12.0,
    "level": "medium"
  },
  {
    "country": "Canada",
    "capital": "Ottawa",
    "continent": "North America",
    "code": "CAN",
    "flag": "🇨🇦",
    "lat": 60.0,
    "lng": -95.0,
    "level": "easy"
  },
  {
    "country": "Central African Republic",
    "capital": "Bangui",
    "continent": "Africa",
    "code": "CAF",
    "flag": "🇨🇫",
    "lat": 7.0,
    "lng": 21.0,
    "level": "hard"
  },
  {
    "country": "Chad",
    "capital": "N'Djamena",
    "continent": "Africa",
    "code": "TCD",
    "flag": "🇹🇩",
    "lat": 15.0,
    "lng": 19.0,
    "level": "hard"
  },
  {
    "country": "Chile",
    "capital": "Santiago",
    "continent": "South America",
    "code": "CHL",
    "flag": "🇨🇱",
    "lat": -30.0,
    "lng": -71.0,
    "level": "easy"
  },
  {
    "country": "China",
    "capital": "Beijing",
    "continent": "Asia",
    "code": "CHN",
    "flag": "🇨🇳",
    "lat": 35.0,
    "lng": 105.0,
    "level": "easy"
  },
  {
    "country": "Colombia",
    "capital": "Bogotá",
    "continent": "South America",
    "code": "COL",
    "flag": "🇨🇴",
    "lat": 4.0,
    "lng": -72.0,
    "level": "easy"
  },
  {
    "country": "Comoros",
    "capital": "Moroni",
    "continent": "Africa",
    "code": "COM",
    "flag": "🇰🇲",
    "lat": -12.16666666,
    "lng": 44.25,
    "level": "hard"
  },
  {
    "country": "Congo, Democratic Republic of the",
    "capital": "Kinshasa",
    "continent": "Africa",
    "code": "COD",
    "flag": "🇨🇩",
    "lat": -2.9,
    "lng": 23.7,
    "level": "hard"
  },
  {
    "country": "Congo, Republic of the",
    "capital": "Brazzaville",
    "continent": "Africa",
    "code": "COG",
    "flag": "🇨🇬",
    "lat": -0.2,
    "lng": 15.8,
    "level": "hard"
  },
  {
    "country": "Costa Rica",
    "capital": "San José",
    "continent": "North America",
    "code": "CRI",
    "flag": "🇨🇷",
    "lat": 10.0,
    "lng": -84.0,
    "level": "easy"
  },
  {
    "country": "Côte d’Ivoire",
    "capital": "Yamoussoukro",
    "continent": "Africa",
    "code": "CIV",
    "flag": "🇨🇮",
    "lat": 7.54,
    "lng": -5.55,
    "level": "hard"
  },
  {
    "country": "Croatia",
    "capital": "Zagreb",
    "continent": "Europe",
    "code": "HRV",
    "flag": "🇭🇷",
    "lat": 45.16666666,
    "lng": 15.5,
    "level": "medium"
  },
  {
    "country": "Cuba",
    "capital": "Havana",
    "continent": "North America",
    "code": "CUB",
    "flag": "🇨🇺",
    "lat": 21.5,
    "lng": -80.0,
    "level": "easy"
  },
  {
    "country": "Cyprus",
    "capital": "Nicosia",
    "continent": "Asia",
    "code": "CYP",
    "flag": "🇨🇾",
    "lat": 35.0,
    "lng": 33.0,
    "level": "medium"
  },
  {
    "country": "Czechia",
    "capital": "Prague",
    "continent": "Europe",
    "code": "CZE",
    "flag": "🇨🇿",
    "lat": 49.75,
    "lng": 15.5,
    "level": "medium"
  },
  {
    "country": "Denmark",
    "capital": "Copenhagen",
    "continent": "Europe",
    "code": "DNK",
    "flag": "🇩🇰",
    "lat": 56.0,
    "lng": 10.0,
    "level": "easy"
  },
  {
    "country": "Djibouti",
    "capital": "Djibouti",
    "continent": "Africa",
    "code": "DJI",
    "flag": "🇩🇯",
    "lat": 11.5,
    "lng": 43.0,
    "level": "hard"
  },
  {
    "country": "Dominica",
    "capital": "Roseau",
    "continent": "North America",
    "code": "DMA",
    "flag": "🇩🇲",
    "lat": 15.41666666,
    "lng": -61.33333333,
    "level": "hard"
  },
  {
    "country": "Dominican Republic",
    "capital": "Santo Domingo",
    "continent": "North America",
    "code": "DOM",
    "flag": "🇩🇴",
    "lat": 19.0,
    "lng": -70.66666666,
    "level": "easy"
  },
  {
    "country": "Ecuador",
    "capital": "Quito",
    "continent": "South America",
    "code": "ECU",
    "flag": "🇪🇨",
    "lat": -2.0,
    "lng": -77.5,
    "level": "medium"
  },
  {
    "country": "Egypt",
    "capital": "Cairo",
    "continent": "Africa",
    "code": "EGY",
    "flag": "🇪🇬",
    "lat": 27.0,
    "lng": 30.0,
    "level": "easy"
  },
  {
    "country": "El Salvador",
    "capital": "San Salvador",
    "continent": "North America",
    "code": "SLV",
    "flag": "🇸🇻",
    "lat": 13.83333333,
    "lng": -88.91666666,
    "level": "hard"
  },
  {
    "country": "Equatorial Guinea",
    "capital": "Malabo",
    "continent": "Africa",
    "code": "GNQ",
    "flag": "🇬🇶",
    "lat": 2.0,
    "lng": 10.0,
    "level": "hard"
  },
  {
    "country": "Eritrea",
    "capital": "Asmara",
    "continent": "Africa",
    "code": "ERI",
    "flag": "🇪🇷",
    "lat": 15.0,
    "lng": 39.0,
    "level": "hard"
  },
  {
    "country": "Estonia",
    "capital": "Tallinn",
    "continent": "Europe",
    "code": "EST",
    "flag": "🇪🇪",
    "lat": 59.0,
    "lng": 26.0,
    "level": "medium"
  },
  {
    "country": "Eswatini",
    "capital": "Mbabane",
    "continent": "Africa",
    "code": "SWZ",
    "flag": "🇸🇿",
    "lat": -26.52,
    "lng": 31.47,
    "level": "hard",
    "aliases": [
      "Lobamba"
    ]
  },
  {
    "country": "Ethiopia",
    "capital": "Addis Ababa",
    "continent": "Africa",
    "code": "ETH",
    "flag": "🇪🇹",
    "lat": 8.0,
    "lng": 38.0,
    "level": "easy"
  },
  {
    "country": "Fiji",
    "capital": "Suva",
    "continent": "Oceania",
    "code": "FJI",
    "flag": "🇫🇯",
    "lat": -18.0,
    "lng": 175.0,
    "level": "medium"
  },
  {
    "country": "Finland",
    "capital": "Helsinki",
    "continent": "Europe",
    "code": "FIN",
    "flag": "🇫🇮",
    "lat": 64.0,
    "lng": 26.0,
    "level": "easy"
  },
  {
    "country": "France",
    "capital": "Paris",
    "continent": "Europe",
    "code": "FRA",
    "flag": "🇫🇷",
    "lat": 46.0,
    "lng": 2.0,
    "level": "easy"
  },
  {
    "country": "Gabon",
    "capital": "Libreville",
    "continent": "Africa",
    "code": "GAB",
    "flag": "🇬🇦",
    "lat": -1.0,
    "lng": 11.75,
    "level": "hard"
  },
  {
    "country": "Gambia",
    "capital": "Banjul",
    "continent": "Africa",
    "code": "GMB",
    "flag": "🇬🇲",
    "lat": 13.46666666,
    "lng": -16.56666666,
    "level": "hard"
  },
  {
    "country": "Georgia",
    "capital": "Tbilisi",
    "continent": "Asia",
    "code": "GEO",
    "flag": "🇬🇪",
    "lat": 42.0,
    "lng": 43.5,
    "level": "medium"
  },
  {
    "country": "Germany",
    "capital": "Berlin",
    "continent": "Europe",
    "code": "DEU",
    "flag": "🇩🇪",
    "lat": 51.0,
    "lng": 9.0,
    "level": "easy"
  },
  {
    "country": "Ghana",
    "capital": "Accra",
    "continent": "Africa",
    "code": "GHA",
    "flag": "🇬🇭",
    "lat": 8.0,
    "lng": -2.0,
    "level": "medium"
  },
  {
    "country": "Greece",
    "capital": "Athens",
    "continent": "Europe",
    "code": "GRC",
    "flag": "🇬🇷",
    "lat": 39.0,
    "lng": 22.0,
    "level": "easy"
  },
  {
    "country": "Grenada",
    "capital": "St. George's",
    "continent": "North America",
    "code": "GRD",
    "flag": "🇬🇩",
    "lat": 12.11666666,
    "lng": -61.66666666,
    "level": "hard"
  },
  {
    "country": "Guatemala",
    "capital": "Guatemala City",
    "continent": "North America",
    "code": "GTM",
    "flag": "🇬🇹",
    "lat": 15.5,
    "lng": -90.25,
    "level": "medium"
  },
  {
    "country": "Guinea",
    "capital": "Conakry",
    "continent": "Africa",
    "code": "GIN",
    "flag": "🇬🇳",
    "lat": 11.0,
    "lng": -10.0,
    "level": "hard"
  },
  {
    "country": "Guinea-Bissau",
    "capital": "Bissau",
    "continent": "Africa",
    "code": "GNB",
    "flag": "🇬🇼",
    "lat": 12.0,
    "lng": -15.0,
    "level": "hard"
  },
  {
    "country": "Guyana",
    "capital": "Georgetown",
    "continent": "South America",
    "code": "GUY",
    "flag": "🇬🇾",
    "lat": 5.0,
    "lng": -59.0,
    "level": "hard"
  },
  {
    "country": "Haiti",
    "capital": "Port-au-Prince",
    "continent": "North America",
    "code": "HTI",
    "flag": "🇭🇹",
    "lat": 19.0,
    "lng": -72.41666666,
    "level": "medium"
  },
  {
    "country": "Honduras",
    "capital": "Tegucigalpa",
    "continent": "North America",
    "code": "HND",
    "flag": "🇭🇳",
    "lat": 15.0,
    "lng": -86.5,
    "level": "medium"
  },
  {
    "country": "Hungary",
    "capital": "Budapest",
    "continent": "Europe",
    "code": "HUN",
    "flag": "🇭🇺",
    "lat": 47.0,
    "lng": 20.0,
    "level": "medium"
  },
  {
    "country": "Iceland",
    "capital": "Reykjavik",
    "continent": "Europe",
    "code": "ISL",
    "flag": "🇮🇸",
    "lat": 65.0,
    "lng": -18.0,
    "level": "medium"
  },
  {
    "country": "India",
    "capital": "New Delhi",
    "continent": "Asia",
    "code": "IND",
    "flag": "🇮🇳",
    "lat": 20.0,
    "lng": 77.0,
    "level": "easy"
  },
  {
    "country": "Indonesia",
    "capital": "Jakarta",
    "continent": "Asia",
    "code": "IDN",
    "flag": "🇮🇩",
    "lat": -5.0,
    "lng": 120.0,
    "level": "easy"
  },
  {
    "country": "Iran",
    "capital": "Tehran",
    "continent": "Asia",
    "code": "IRN",
    "flag": "🇮🇷",
    "lat": 32.0,
    "lng": 53.0,
    "level": "medium"
  },
  {
    "country": "Iraq",
    "capital": "Baghdad",
    "continent": "Asia",
    "code": "IRQ",
    "flag": "🇮🇶",
    "lat": 33.0,
    "lng": 44.0,
    "level": "medium"
  },
  {
    "country": "Ireland",
    "capital": "Dublin",
    "continent": "Europe",
    "code": "IRL",
    "flag": "🇮🇪",
    "lat": 53.0,
    "lng": -8.0,
    "level": "easy"
  },
  {
    "country": "Israel",
    "capital": "Jerusalem",
    "continent": "Asia",
    "code": "ISR",
    "flag": "🇮🇱",
    "lat": 31.5,
    "lng": 34.75,
    "level": "easy",
    "aliases": [
      "Tel Aviv"
    ]
  },
  {
    "country": "Italy",
    "capital": "Rome",
    "continent": "Europe",
    "code": "ITA",
    "flag": "🇮🇹",
    "lat": 42.83333333,
    "lng": 12.83333333,
    "level": "easy"
  },
  {
    "country": "Jamaica",
    "capital": "Kingston",
    "continent": "North America",
    "code": "JAM",
    "flag": "🇯🇲",
    "lat": 18.25,
    "lng": -77.5,
    "level": "easy"
  },
  {
    "country": "Japan",
    "capital": "Tokyo",
    "continent": "Asia",
    "code": "JPN",
    "flag": "🇯🇵",
    "lat": 36.0,
    "lng": 138.0,
    "level": "easy"
  },
  {
    "country": "Jordan",
    "capital": "Amman",
    "continent": "Asia",
    "code": "JOR",
    "flag": "🇯🇴",
    "lat": 31.0,
    "lng": 36.0,
    "level": "medium"
  },
  {
    "country": "Kazakhstan",
    "capital": "Astana",
    "continent": "Asia",
    "code": "KAZ",
    "flag": "🇰🇿",
    "lat": 48.0,
    "lng": 68.0,
    "level": "medium"
  },
  {
    "country": "Kenya",
    "capital": "Nairobi",
    "continent": "Africa",
    "code": "KEN",
    "flag": "🇰🇪",
    "lat": 1.0,
    "lng": 38.0,
    "level": "easy"
  },
  {
    "country": "Kiribati",
    "capital": "South Tarawa",
    "continent": "Oceania",
    "code": "KIR",
    "flag": "🇰🇮",
    "lat": 1.41666666,
    "lng": 173.0,
    "level": "hard"
  },
  {
    "country": "Kuwait",
    "capital": "Kuwait City",
    "continent": "Asia",
    "code": "KWT",
    "flag": "🇰🇼",
    "lat": 29.5,
    "lng": 45.75,
    "level": "medium"
  },
  {
    "country": "Kyrgyzstan",
    "capital": "Bishkek",
    "continent": "Asia",
    "code": "KGZ",
    "flag": "🇰🇬",
    "lat": 41.0,
    "lng": 75.0,
    "level": "medium"
  },
  {
    "country": "Laos",
    "capital": "Vientiane",
    "continent": "Asia",
    "code": "LAO",
    "flag": "🇱🇦",
    "lat": 18.0,
    "lng": 105.0,
    "level": "medium"
  },
  {
    "country": "Latvia",
    "capital": "Riga",
    "continent": "Europe",
    "code": "LVA",
    "flag": "🇱🇻",
    "lat": 57.0,
    "lng": 25.0,
    "level": "medium"
  },
  {
    "country": "Lebanon",
    "capital": "Beirut",
    "continent": "Asia",
    "code": "LBN",
    "flag": "🇱🇧",
    "lat": 33.83333333,
    "lng": 35.83333333,
    "level": "medium"
  },
  {
    "country": "Lesotho",
    "capital": "Maseru",
    "continent": "Africa",
    "code": "LSO",
    "flag": "🇱🇸",
    "lat": -29.5,
    "lng": 28.5,
    "level": "hard"
  },
  {
    "country": "Liberia",
    "capital": "Monrovia",
    "continent": "Africa",
    "code": "LBR",
    "flag": "🇱🇷",
    "lat": 6.5,
    "lng": -9.5,
    "level": "hard"
  },
  {
    "country": "Libya",
    "capital": "Tripoli",
    "continent": "Africa",
    "code": "LBY",
    "flag": "🇱🇾",
    "lat": 25.0,
    "lng": 17.0,
    "level": "medium"
  },
  {
    "country": "Liechtenstein",
    "capital": "Vaduz",
    "continent": "Europe",
    "code": "LIE",
    "flag": "🇱🇮",
    "lat": 47.26666666,
    "lng": 9.53333333,
    "level": "hard"
  },
  {
    "country": "Lithuania",
    "capital": "Vilnius",
    "continent": "Europe",
    "code": "LTU",
    "flag": "🇱🇹",
    "lat": 56.0,
    "lng": 24.0,
    "level": "medium"
  },
  {
    "country": "Luxembourg",
    "capital": "Luxembourg",
    "continent": "Europe",
    "code": "LUX",
    "flag": "🇱🇺",
    "lat": 49.75,
    "lng": 6.16666666,
    "level": "medium"
  },
  {
    "country": "Madagascar",
    "capital": "Antananarivo",
    "continent": "Africa",
    "code": "MDG",
    "flag": "🇲🇬",
    "lat": -20.0,
    "lng": 47.0,
    "level": "medium"
  },
  {
    "country": "Malawi",
    "capital": "Lilongwe",
    "continent": "Africa",
    "code": "MWI",
    "flag": "🇲🇼",
    "lat": -13.5,
    "lng": 34.0,
    "level": "hard"
  },
  {
    "country": "Malaysia",
    "capital": "Kuala Lumpur",
    "continent": "Asia",
    "code": "MYS",
    "flag": "🇲🇾",
    "lat": 2.5,
    "lng": 112.5,
    "level": "easy",
    "aliases": [
      "Putrajaya"
    ]
  },
  {
    "country": "Maldives",
    "capital": "Malé",
    "continent": "Asia",
    "code": "MDV",
    "flag": "🇲🇻",
    "lat": 3.25,
    "lng": 73.0,
    "level": "medium"
  },
  {
    "country": "Mali",
    "capital": "Bamako",
    "continent": "Africa",
    "code": "MLI",
    "flag": "🇲🇱",
    "lat": 17.0,
    "lng": -4.0,
    "level": "hard"
  },
  {
    "country": "Malta",
    "capital": "Valletta",
    "continent": "Europe",
    "code": "MLT",
    "flag": "🇲🇹",
    "lat": 35.83333333,
    "lng": 14.58333333,
    "level": "medium"
  },
  {
    "country": "Marshall Islands",
    "capital": "Majuro",
    "continent": "Oceania",
    "code": "MHL",
    "flag": "🇲🇭",
    "lat": 9.0,
    "lng": 168.0,
    "level": "hard"
  },
  {
    "country": "Mauritania",
    "capital": "Nouakchott",
    "continent": "Africa",
    "code": "MRT",
    "flag": "🇲🇷",
    "lat": 20.0,
    "lng": -12.0,
    "level": "hard"
  },
  {
    "country": "Mauritius",
    "capital": "Port Louis",
    "continent": "Africa",
    "code": "MUS",
    "flag": "🇲🇺",
    "lat": -20.28333333,
    "lng": 57.55,
    "level": "hard"
  },
  {
    "country": "Mexico",
    "capital": "Mexico City",
    "continent": "North America",
    "code": "MEX",
    "flag": "🇲🇽",
    "lat": 23.0,
    "lng": -102.0,
    "level": "easy"
  },
  {
    "country": "Micronesia",
    "capital": "Palikir",
    "continent": "Oceania",
    "code": "FSM",
    "flag": "🇫🇲",
    "lat": 7.43,
    "lng": 150.55,
    "level": "hard"
  },
  {
    "country": "Moldova",
    "capital": "Chișinău",
    "continent": "Europe",
    "code": "MDA",
    "flag": "🇲🇩",
    "lat": 47.0,
    "lng": 29.0,
    "level": "medium"
  },
  {
    "country": "Monaco",
    "capital": "Monaco",
    "continent": "Europe",
    "code": "MCO",
    "flag": "🇲🇨",
    "lat": 43.73333333,
    "lng": 7.4,
    "level": "hard"
  },
  {
    "country": "Mongolia",
    "capital": "Ulan Bator",
    "continent": "Asia",
    "code": "MNG",
    "flag": "🇲🇳",
    "lat": 46.0,
    "lng": 105.0,
    "level": "medium"
  },
  {
    "country": "Montenegro",
    "capital": "Podgorica",
    "continent": "Europe",
    "code": "MNE",
    "flag": "🇲🇪",
    "lat": 42.7087,
    "lng": 19.3744,
    "level": "medium"
  },
  {
    "country": "Morocco",
    "capital": "Rabat",
    "continent": "Africa",
    "code": "MAR",
    "flag": "🇲🇦",
    "lat": 32.0,
    "lng": -5.0,
    "level": "easy"
  },
  {
    "country": "Mozambique",
    "capital": "Maputo",
    "continent": "Africa",
    "code": "MOZ",
    "flag": "🇲🇿",
    "lat": -18.25,
    "lng": 35.0,
    "level": "hard"
  },
  {
    "country": "Myanmar",
    "capital": "Naypyidaw",
    "continent": "Asia",
    "code": "MMR",
    "flag": "🇲🇲",
    "lat": 21.9162,
    "lng": 95.956,
    "level": "medium"
  },
  {
    "country": "Namibia",
    "capital": "Windhoek",
    "continent": "Africa",
    "code": "NAM",
    "flag": "🇳🇦",
    "lat": -22.0,
    "lng": 17.0,
    "level": "medium"
  },
  {
    "country": "Nauru",
    "capital": "Yaren",
    "continent": "Oceania",
    "code": "NRU",
    "flag": "🇳🇷",
    "lat": -0.53333333,
    "lng": 166.91666666,
    "level": "hard",
    "aliases": [
      "Yaren District"
    ]
  },
  {
    "country": "Nepal",
    "capital": "Kathmandu",
    "continent": "Asia",
    "code": "NPL",
    "flag": "🇳🇵",
    "lat": 28.0,
    "lng": 84.0,
    "level": "easy"
  },
  {
    "country": "Netherlands",
    "capital": "Amsterdam",
    "continent": "Europe",
    "code": "NLD",
    "flag": "🇳🇱",
    "lat": 52.5,
    "lng": 5.75,
    "level": "easy",
    "aliases": [
      "The Hague"
    ]
  },
  {
    "country": "New Zealand",
    "capital": "Wellington",
    "continent": "Oceania",
    "code": "NZL",
    "flag": "🇳🇿",
    "lat": -41.0,
    "lng": 174.0,
    "level": "easy"
  },
  {
    "country": "Nicaragua",
    "capital": "Managua",
    "continent": "North America",
    "code": "NIC",
    "flag": "🇳🇮",
    "lat": 13.0,
    "lng": -85.0,
    "level": "medium"
  },
  {
    "country": "Niger",
    "capital": "Niamey",
    "continent": "Africa",
    "code": "NER",
    "flag": "🇳🇪",
    "lat": 16.0,
    "lng": 8.0,
    "level": "hard"
  },
  {
    "country": "Nigeria",
    "capital": "Abuja",
    "continent": "Africa",
    "code": "NGA",
    "flag": "🇳🇬",
    "lat": 10.0,
    "lng": 8.0,
    "level": "easy"
  },
  {
    "country": "North Korea",
    "capital": "Pyongyang",
    "continent": "Asia",
    "code": "PRK",
    "flag": "🇰🇵",
    "lat": 40.0,
    "lng": 127.0,
    "level": "medium"
  },
  {
    "country": "North Macedonia",
    "capital": "Skopje",
    "continent": "Europe",
    "code": "MKD",
    "flag": "🇲🇰",
    "lat": 41.61,
    "lng": 21.75,
    "level": "medium"
  },
  {
    "country": "Norway",
    "capital": "Oslo",
    "continent": "Europe",
    "code": "NOR",
    "flag": "🇳🇴",
    "lat": 62.0,
    "lng": 10.0,
    "level": "easy"
  },
  {
    "country": "Oman",
    "capital": "Muscat",
    "continent": "Asia",
    "code": "OMN",
    "flag": "🇴🇲",
    "lat": 21.0,
    "lng": 57.0,
    "level": "medium"
  },
  {
    "country": "Pakistan",
    "capital": "Islamabad",
    "continent": "Asia",
    "code": "PAK",
    "flag": "🇵🇰",
    "lat": 30.0,
    "lng": 70.0,
    "level": "easy"
  },
  {
    "country": "Palau",
    "capital": "Ngerulmud",
    "continent": "Oceania",
    "code": "PLW",
    "flag": "🇵🇼",
    "lat": 7.5,
    "lng": 134.5,
    "level": "hard"
  },
  {
    "country": "Palestine",
    "capital": "East Jerusalem",
    "continent": "Asia",
    "code": "PSE",
    "flag": "🇵🇸",
    "lat": 31.95,
    "lng": 35.23,
    "level": "hard",
    "aliases": [
      "Ramallah"
    ]
  },
  {
    "country": "Panama",
    "capital": "Panama City",
    "continent": "North America",
    "code": "PAN",
    "flag": "🇵🇦",
    "lat": 9.0,
    "lng": -80.0,
    "level": "easy"
  },
  {
    "country": "Papua New Guinea",
    "capital": "Port Moresby",
    "continent": "Oceania",
    "code": "PNG",
    "flag": "🇵🇬",
    "lat": -6.0,
    "lng": 147.0,
    "level": "hard"
  },
  {
    "country": "Paraguay",
    "capital": "Asunción",
    "continent": "South America",
    "code": "PRY",
    "flag": "🇵🇾",
    "lat": -23.0,
    "lng": -58.0,
    "level": "medium"
  },
  {
    "country": "Peru",
    "capital": "Lima",
    "continent": "South America",
    "code": "PER",
    "flag": "🇵🇪",
    "lat": -10.0,
    "lng": -76.0,
    "level": "easy"
  },
  {
    "country": "Philippines",
    "capital": "Manila",
    "continent": "Asia",
    "code": "PHL",
    "flag": "🇵🇭",
    "lat": 13.0,
    "lng": 122.0,
    "level": "easy"
  },
  {
    "country": "Poland",
    "capital": "Warsaw",
    "continent": "Europe",
    "code": "POL",
    "flag": "🇵🇱",
    "lat": 52.0,
    "lng": 20.0,
    "level": "easy"
  },
  {
    "country": "Portugal",
    "capital": "Lisbon",
    "continent": "Europe",
    "code": "PRT",
    "flag": "🇵🇹",
    "lat": 39.5,
    "lng": -8.0,
    "level": "easy"
  },
  {
    "country": "Qatar",
    "capital": "Doha",
    "continent": "Asia",
    "code": "QAT",
    "flag": "🇶🇦",
    "lat": 25.5,
    "lng": 51.25,
    "level": "medium"
  },
  {
    "country": "Romania",
    "capital": "Bucharest",
    "continent": "Europe",
    "code": "ROU",
    "flag": "🇷🇴",
    "lat": 46.0,
    "lng": 25.0,
    "level": "medium"
  },
  {
    "country": "Russia",
    "capital": "Moscow",
    "continent": "Europe",
    "code": "RUS",
    "flag": "🇷🇺",
    "lat": 60.0,
    "lng": 100.0,
    "level": "easy"
  },
  {
    "country": "Rwanda",
    "capital": "Kigali",
    "continent": "Africa",
    "code": "RWA",
    "flag": "🇷🇼",
    "lat": -2.0,
    "lng": 30.0,
    "level": "medium"
  },
  {
    "country": "Saint Kitts and Nevis",
    "capital": "Basseterre",
    "continent": "North America",
    "code": "KNA",
    "flag": "🇰🇳",
    "lat": 17.33333333,
    "lng": -62.75,
    "level": "hard"
  },
  {
    "country": "Saint Lucia",
    "capital": "Castries",
    "continent": "North America",
    "code": "LCA",
    "flag": "🇱🇨",
    "lat": 13.88333333,
    "lng": -60.96666666,
    "level": "hard"
  },
  {
    "country": "Saint Vincent and the Grenadines",
    "capital": "Kingstown",
    "continent": "North America",
    "code": "VCT",
    "flag": "🇻🇨",
    "lat": 13.25,
    "lng": -61.2,
    "level": "hard"
  },
  {
    "country": "Samoa",
    "capital": "Apia",
    "continent": "Oceania",
    "code": "WSM",
    "flag": "🇼🇸",
    "lat": -13.58333333,
    "lng": -172.33333333,
    "level": "hard"
  },
  {
    "country": "San Marino",
    "capital": "City of San Marino",
    "continent": "Europe",
    "code": "SMR",
    "flag": "🇸🇲",
    "lat": 43.76666666,
    "lng": 12.41666666,
    "level": "hard"
  },
  {
    "country": "São Tomé and Príncipe",
    "capital": "São Tomé",
    "continent": "Africa",
    "code": "STP",
    "flag": "🇸🇹",
    "lat": 1.0,
    "lng": 7.0,
    "level": "hard"
  },
  {
    "country": "Saudi Arabia",
    "capital": "Riyadh",
    "continent": "Asia",
    "code": "SAU",
    "flag": "🇸🇦",
    "lat": 25.0,
    "lng": 45.0,
    "level": "easy"
  },
  {
    "country": "Senegal",
    "capital": "Dakar",
    "continent": "Africa",
    "code": "SEN",
    "flag": "🇸🇳",
    "lat": 14.0,
    "lng": -14.0,
    "level": "medium"
  },
  {
    "country": "Serbia",
    "capital": "Belgrade",
    "continent": "Europe",
    "code": "SRB",
    "flag": "🇷🇸",
    "lat": 44.1305021,
    "lng": 16.4284181,
    "level": "medium"
  },
  {
    "country": "Seychelles",
    "capital": "Victoria",
    "continent": "Africa",
    "code": "SYC",
    "flag": "🇸🇨",
    "lat": -4.58333333,
    "lng": 55.66666666,
    "level": "hard"
  },
  {
    "country": "Sierra Leone",
    "capital": "Freetown",
    "continent": "Africa",
    "code": "SLE",
    "flag": "🇸🇱",
    "lat": 8.5,
    "lng": -11.5,
    "level": "hard"
  },
  {
    "country": "Singapore",
    "capital": "Singapore",
    "continent": "Asia",
    "code": "SGP",
    "flag": "🇸🇬",
    "lat": 1.36666666,
    "lng": 103.8,
    "level": "easy"
  },
  {
    "country": "Slovakia",
    "capital": "Bratislava",
    "continent": "Europe",
    "code": "SVK",
    "flag": "🇸🇰",
    "lat": 48.66666666,
    "lng": 19.5,
    "level": "medium"
  },
  {
    "country": "Slovenia",
    "capital": "Ljubljana",
    "continent": "Europe",
    "code": "SVN",
    "flag": "🇸🇮",
    "lat": 46.11666666,
    "lng": 14.81666666,
    "level": "medium"
  },
  {
    "country": "Solomon Islands",
    "capital": "Honiara",
    "continent": "Oceania",
    "code": "SLB",
    "flag": "🇸🇧",
    "lat": -8.0,
    "lng": 159.0,
    "level": "hard"
  },
  {
    "country": "Somalia",
    "capital": "Mogadishu",
    "continent": "Africa",
    "code": "SOM",
    "flag": "🇸🇴",
    "lat": 10.0,
    "lng": 49.0,
    "level": "hard"
  },
  {
    "country": "South Africa",
    "capital": "Pretoria",
    "continent": "Africa",
    "code": "ZAF",
    "flag": "🇿🇦",
    "lat": -29.0,
    "lng": 24.0,
    "level": "easy",
    "aliases": [
      "Cape Town",
      "Bloemfontein"
    ]
  },
  {
    "country": "South Korea",
    "capital": "Seoul",
    "continent": "Asia",
    "code": "KOR",
    "flag": "🇰🇷",
    "lat": 37.0,
    "lng": 127.5,
    "level": "easy"
  },
  {
    "country": "South Sudan",
    "capital": "Juba",
    "continent": "Africa",
    "code": "SSD",
    "flag": "🇸🇸",
    "lat": 6.88,
    "lng": 31.31,
    "level": "hard"
  },
  {
    "country": "Spain",
    "capital": "Madrid",
    "continent": "Europe",
    "code": "ESP",
    "flag": "🇪🇸",
    "lat": 40.0,
    "lng": -4.0,
    "level": "easy"
  },
  {
    "country": "Sri Lanka",
    "capital": "Sri Jayawardenepura Kotte",
    "continent": "Asia",
    "code": "LKA",
    "flag": "🇱🇰",
    "lat": 7.0,
    "lng": 81.0,
    "level": "easy",
    "aliases": [
      "Colombo"
    ]
  },
  {
    "country": "Sudan",
    "capital": "Khartoum",
    "continent": "Africa",
    "code": "SDN",
    "flag": "🇸🇩",
    "lat": 15.0,
    "lng": 30.0,
    "level": "medium"
  },
  {
    "country": "Suriname",
    "capital": "Paramaribo",
    "continent": "South America",
    "code": "SUR",
    "flag": "🇸🇷",
    "lat": 4.0,
    "lng": -56.0,
    "level": "medium"
  },
  {
    "country": "Sweden",
    "capital": "Stockholm",
    "continent": "Europe",
    "code": "SWE",
    "flag": "🇸🇪",
    "lat": 62.0,
    "lng": 15.0,
    "level": "easy"
  },
  {
    "country": "Switzerland",
    "capital": "Bern",
    "continent": "Europe",
    "code": "CHE",
    "flag": "🇨🇭",
    "lat": 47.0,
    "lng": 8.0,
    "level": "easy"
  },
  {
    "country": "Syria",
    "capital": "Damascus",
    "continent": "Asia",
    "code": "SYR",
    "flag": "🇸🇾",
    "lat": 35.0,
    "lng": 38.0,
    "level": "medium"
  },
  {
    "country": "Tajikistan",
    "capital": "Dushanbe",
    "continent": "Asia",
    "code": "TJK",
    "flag": "🇹🇯",
    "lat": 39.0,
    "lng": 71.0,
    "level": "hard"
  },
  {
    "country": "Tanzania",
    "capital": "Dodoma",
    "continent": "Africa",
    "code": "TZA",
    "flag": "🇹🇿",
    "lat": -6.0,
    "lng": 35.0,
    "level": "medium",
    "aliases": [
      "Dar es Salaam"
    ]
  },
  {
    "country": "Thailand",
    "capital": "Bangkok",
    "continent": "Asia",
    "code": "THA",
    "flag": "🇹🇭",
    "lat": 15.0,
    "lng": 100.0,
    "level": "easy"
  },
  {
    "country": "Timor-Leste",
    "capital": "Dili",
    "continent": "Asia",
    "code": "TLS",
    "flag": "🇹🇱",
    "lat": -8.87,
    "lng": 125.73,
    "level": "hard"
  },
  {
    "country": "Togo",
    "capital": "Lomé",
    "continent": "Africa",
    "code": "TGO",
    "flag": "🇹🇬",
    "lat": 8.0,
    "lng": 1.16666666,
    "level": "hard"
  },
  {
    "country": "Tonga",
    "capital": "Nuku'alofa",
    "continent": "Oceania",
    "code": "TON",
    "flag": "🇹🇴",
    "lat": -20.0,
    "lng": -175.0,
    "level": "hard"
  },
  {
    "country": "Trinidad and Tobago",
    "capital": "Port of Spain",
    "continent": "North America",
    "code": "TTO",
    "flag": "🇹🇹",
    "lat": 11.0,
    "lng": -61.0,
    "level": "hard"
  },
  {
    "country": "Tunisia",
    "capital": "Tunis",
    "continent": "Africa",
    "code": "TUN",
    "flag": "🇹🇳",
    "lat": 34.0,
    "lng": 9.0,
    "level": "medium"
  },
  {
    "country": "Turkey",
    "capital": "Ankara",
    "continent": "Asia",
    "code": "TUR",
    "flag": "🇹🇷",
    "lat": 39.0,
    "lng": 35.0,
    "level": "easy"
  },
  {
    "country": "Turkmenistan",
    "capital": "Ashgabat",
    "continent": "Asia",
    "code": "TKM",
    "flag": "🇹🇲",
    "lat": 40.0,
    "lng": 60.0,
    "level": "medium"
  },
  {
    "country": "Tuvalu",
    "capital": "Funafuti",
    "continent": "Oceania",
    "code": "TUV",
    "flag": "🇹🇻",
    "lat": -8.0,
    "lng": 178.0,
    "level": "hard"
  },
  {
    "country": "Uganda",
    "capital": "Kampala",
    "continent": "Africa",
    "code": "UGA",
    "flag": "🇺🇬",
    "lat": 1.0,
    "lng": 32.0,
    "level": "medium"
  },
  {
    "country": "Ukraine",
    "capital": "Kiev",
    "continent": "Europe",
    "code": "UKR",
    "flag": "🇺🇦",
    "lat": 49.0,
    "lng": 32.0,
    "level": "easy"
  },
  {
    "country": "United Arab Emirates",
    "capital": "Abu Dhabi",
    "continent": "Asia",
    "code": "ARE",
    "flag": "🇦🇪",
    "lat": 24.0,
    "lng": 54.0,
    "level": "easy"
  },
  {
    "country": "United Kingdom",
    "capital": "London",
    "continent": "Europe",
    "code": "GBR",
    "flag": "🇬🇧",
    "lat": 54.0,
    "lng": -2.0,
    "level": "easy"
  },
  {
    "country": "United States",
    "capital": "Washington D.C.",
    "continent": "North America",
    "code": "USA",
    "flag": "🇺🇸",
    "lat": 38.0,
    "lng": -97.0,
    "level": "easy"
  },
  {
    "country": "Uruguay",
    "capital": "Montevideo",
    "continent": "South America",
    "code": "URY",
    "flag": "🇺🇾",
    "lat": -33.0,
    "lng": -56.0,
    "level": "medium"
  },
  {
    "country": "Uzbekistan",
    "capital": "Tashkent",
    "continent": "Asia",
    "code": "UZB",
    "flag": "🇺🇿",
    "lat": 41.0,
    "lng": 64.0,
    "level": "medium"
  },
  {
    "country": "Vanuatu",
    "capital": "Port Vila",
    "continent": "Oceania",
    "code": "VUT",
    "flag": "🇻🇺",
    "lat": -16.0,
    "lng": 167.0,
    "level": "hard"
  },
  {
    "country": "Vatican City",
    "capital": "Vatican City",
    "continent": "Europe",
    "code": "VAT",
    "flag": "🇻🇦",
    "lat": 41.9029,
    "lng": 12.4534,
    "level": "hard"
  },
  {
    "country": "Venezuela",
    "capital": "Caracas",
    "continent": "South America",
    "code": "VEN",
    "flag": "🇻🇪",
    "lat": 8.0,
    "lng": -66.0,
    "level": "easy"
  },
  {
    "country": "Vietnam",
    "capital": "Hanoi",
    "continent": "Asia",
    "code": "VNM",
    "flag": "🇻🇳",
    "lat": 16.16666666,
    "lng": 107.83333333,
    "level": "easy"
  },
  {
    "country": "Yemen",
    "capital": "Sana'a",
    "continent": "Asia",
    "code": "YEM",
    "flag": "🇾🇪",
    "lat": 15.0,
    "lng": 48.0,
    "level": "hard"
  },
  {
    "country": "Zambia",
    "capital": "Lusaka",
    "continent": "Africa",
    "code": "ZMB",
    "flag": "🇿🇲",
    "lat": -15.0,
    "lng": 30.0,
    "level": "medium"
  },
  {
    "country": "Zimbabwe",
    "capital": "Harare",
    "continent": "Africa",
    "code": "ZWE",
    "flag": "🇿🇼",
    "lat": -20.0,
    "lng": 30.0,
    "level": "medium"
  }
];
