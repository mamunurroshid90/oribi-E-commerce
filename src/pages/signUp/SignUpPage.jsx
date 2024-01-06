import React from "react"
import BreadCrumbs from "../../components/utilities/BreadCrumbs"

const SignUpPage = () => {
  let pathname = window.location.href
  let pathArray = pathname.split("/")
  let finalPath = pathArray[pathArray.length - 1]

  const countryName = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ]

  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className=" mt-[124px] mb-[125px]">
          <h3 className="font-dm text-[49px] capitalize text-[#262626] font-bold leading-normal mb-3">
            sign up
          </h3>
          <BreadCrumbs lastPath={finalPath} />
        </div>
        <div className=" mb-[57px] border-b border-[#f0f0f0f]">
          <p className="font-dm font-normal text-[#767676] text-base leading-[30px] mb-[62px] w-[644px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <div className="mb-[58px] border-b border-[#f0f0f0]">
          <h2 className="font-dm text-[#262626] text-[39px] font-bold capitalize leading-normal mb-[42px]">
            Your Personal Details
          </h2>
          <form action="" className="w-[1055px]">
            <div className="flex justify-between gap-[39px] mb-10">
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  first name
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  last name
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex justify-between gap-[39px] mb-10">
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  email address
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="email"
                  name="email"
                  placeholder="company@domain.com"
                />
              </div>
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  telephone
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="number"
                  name="telephone"
                  placeholder="Your phone number"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="border-b border-[#f0f0f0]">
          <h2 className="font-dm text-[#262626] text-[39px] font-bold capitalize leading-normal mb-[42px]">
            New Customer
          </h2>
          <form action="" className="w-[1055px] border-b border-[#f0f0f0]">
            <div className="flex justify-between gap-[39px] mb-10">
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  address 1
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="text"
                  name="address1"
                  placeholder="4279 Zboncak Port Suite 6212"
                />
              </div>
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  address 2
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="text"
                  name="address2"
                  placeholder="4279 Zboncak Port Suite 6212"
                />
              </div>
            </div>
            <div className="flex justify-between gap-[39px] mb-10">
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  city
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="text"
                  name="city"
                  placeholder="Your city"
                />
              </div>
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  post code
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="number"
                  name="post_code"
                  placeholder="1205"
                />
              </div>
            </div>
            <div className="flex justify-between gap-[39px] mb-20">
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  Country *
                </label>

                <select name="country" id="" className="w-full mt-[10px] pb-4">
                  {countryName.map((item, index) => (
                    <option value="" key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  Region/State
                </label>
                <select name="region_state" id="">
                  <option value="">kabul</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-[57px] mb-[70px] border-b border-[#f0f0f0]">
          <form action="" className="w-[1055px]">
            <h2 className="font-dm text-[#262626] text-[39px] font-bold capitalize leading-normal mb-[42px]">
              Your Password
            </h2>
            <div className="flex justify-between gap-[39px] mb-16">
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  password
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  repeat password
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="password"
                  name="repeat_password"
                  placeholder="Repeat Password"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="flex items-center">
            <input className="inline-block mr-4 text-3xl" type="checkbox" />
            <label
              className="text-[#767676] text-sm font-dm leading-normal capitalize"
              htmlFor=""
            >
              I have read and agree to the Privacy Policy
            </label>
          </div>
          <div className="flex items-center">
            <span className="text-[#767676] text-sm font-dm leading-normal capitalize mr-[33px]">
              Subscribe Newsletter
            </span>
            <span className="mr-[43px] flex items-center gap-4">
              <input type="checkbox" />
              <span className="text-[#767676] text-sm font-dm leading-normal capitalize">
                yes
              </span>
            </span>
            <span className="flex items-center gap-4 mt-6 mb-7">
              <input type="checkbox" />
              <span className="text-[#767676] text-sm font-dm leading-normal capitalize">
                no
              </span>
            </span>
          </div>
          <button className="py-4 px-20 border border-[#2b2b2b] bg-white mb-[70px] font-dm text-sm text-[#262626] font-bold text-center hover:bg-[#262626] hover:text-[#fff] transition-all duration-300">
            log in
          </button>
        </div>
      </div>
    </section>
  )
}

export default SignUpPage
