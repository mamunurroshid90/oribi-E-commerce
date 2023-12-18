import React, { useEffect, useState } from "react"
import BreadCrumbs from "../../components/utilities/BreadCrumbs"
import Paragraph from "../../components/utilities/Paragraph"
import Input from "../../components/utilities/Input"
import { Link } from "react-router-dom"

const Checkout = () => {
  let pathname = window.location.href
  let pathArray = pathname.split("/")
  let finalPath = pathArray[pathArray.length - 1]

  let checkoutProduct = [
    {
      id: 0,
      productName: "apple",
      price: 520,
      quantity: 2,
    },
    {
      id: 1,
      productName: "watch",
      price: 100,
      quantity: 2,
    },
    {
      id: 2,
      productName: "monitor",
      price: 260,
      quantity: 2,
    },
    {
      id: 3,
      productName: "television",
      price: 80,
      quantity: 1,
    },
  ]

  let [total, setTotal] = useState(0)
  useEffect(() => {
    for (let i = 0; i < checkoutProduct.length; i++) {
      total += checkoutProduct[i].price * checkoutProduct[i].quantity
      setTotal(total)
    }
  }, [])
  // console.log(total)

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

  const [couponShow, setCouponShow] = useState(false)
  return (
    <section className="pt-[124px] pb-[140px]">
      <div className="max-w-container mx-auto">
        <div>
          <h3 className="font-dm text-[49px] text-[#262626] font-bold leading-normal">
            Checkout
          </h3>
          <BreadCrumbs lastPath={finalPath} />
        </div>
        <div className="flex items-center mt-[127px] gap-1">
          <Paragraph
            text="Have a coupon?"
            style="text-[#767676] font-dm text-base font-normal leading-[30px] "
          />
          <span
            onClick={() => setCouponShow(true)}
            className="text-[#262626] font-dm text-base font-medium leading-[30px ] cursor-pointer"
          >
            Click here to enter your code
          </span>
        </div>
        {couponShow && (
          <div className="mt-4">
            <form>
              <Input
                type="text"
                placeholder="Enter your code"
                style="border border-[#000] px-7 py-3 rounded font-dm"
              />
              <div className="flex gap-2 ">
                <button className="bg-[#000] py-3 px-7 mt-4 text-lg font-bold border-none rounded text-white">
                  Apply
                </button>
                <button
                  onClick={() => setCouponShow(false)}
                  className="bg-[red] py-3 px-7 mt-4 text-lg font-bold border-none rounded text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="w-[1055px]">
          <h2 className="checkoutHeading mt-[120px]">Billing Details</h2>
          <form>
            <div>
              <div className="flex gap-x-10">
                <div className="w-1/2 border-b border-b-[#e0e0e0]">
                  <label
                    htmlFor=""
                    className="text-[#262626] text-base font-bold leading-[23px] block"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full outline-none mt-[10px] pb-4"
                  />
                </div>
                <div className="w-1/2 border-b border-b-[#e0e0e0]">
                  <label
                    htmlFor=""
                    className="text-[#262626] text-base font-bold leading-[23px] block"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full outline-none mt-[10px] pb-4"
                  />
                </div>
              </div>
              <div className="border-b border-b-[#e0e0e0] pt-6">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full outline-none mt-[10px] pb-4"
                />
              </div>
              <div className="border-b border-b-[#e0e0e0] pt-6 w-full">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  Country *
                </label>

                <select
                  name="country"
                  id=""
                  className="w-full outline-none mt-[10px] pb-4"
                >
                  {countryName.map((item, index) => (
                    <option value="" key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border-b border-b-[#e0e0e0] pt-6">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  name="streetName"
                  placeholder="House number and street name"
                  className="w-full outline-none mt-[10px] pb-4 border-b border-b-[#e0e0e0]"
                />
                <input
                  type="text"
                  name="streetName"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  className="w-full outline-none mt-[10px] pb-4"
                />
              </div>
              <div className="border-b border-b-[#e0e0e0] pt-6">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  Town/City *
                </label>
                <input
                  type="text"
                  name="Town/City"
                  placeholder="Town/City"
                  className="w-full outline-none mt-[10px] pb-4"
                />
              </div>
              <div className="border-b border-b-[#e0e0e0] pt-6">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  County (optional)
                </label>
                <input
                  type="text"
                  name="County(optional)"
                  placeholder="County"
                  className="w-full outline-none mt-[10px] pb-4"
                />
              </div>
              <div className="border-b border-b-[#e0e0e0] pt-6">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  Post Code *
                </label>
                <input
                  type="number"
                  name="postCode"
                  placeholder="Post Code"
                  className="w-full outline-none mt-[10px] pb-4 appearance-none"
                />
              </div>
              <div className="border-b border-b-[#e0e0e0] pt-6">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  Phone *
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  className="w-full outline-none mt-[10px] pb-4 appearance-none"
                />
              </div>
              <div className="border-b border-b-[#e0e0e0] pt-6">
                <label
                  htmlFor=""
                  className="text-[#262626] text-base font-bold leading-[23px] block"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full outline-none mt-[10px] pb-4"
                />
              </div>
            </div>
          </form>
          <h2 className="checkoutHeading mt-[130px]">Additional Information</h2>
          <div>
            <label
              htmlFor=""
              className="text-[#262626] text-base font-bold leading-[23px] block"
            >
              Other Notes (optional)
            </label>
            <textarea
              className="w-full h-[100px] p-5 mt-[10px] border-b border-[#f0f0f0]"
              name="other notes"
              id=""
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </div>
        <div className="w-[644px]">
          <h2 className="checkoutHeading mt-[130px]">Your Order</h2>
          <table className="w-full">
            <tr>
              <td className="border border-[#f0f0f0] py-4 px-5 w-1/2 font-dm text-[#262626] text-base font-bold leading-[23px] capitalize">
                Product
              </td>
              <td className="border border-[#f0f0f0] py-4 px-5 w-1/2 font-dm text-[#767676] text-base font-bold leading-[30px] capitalize">
                Total
              </td>
            </tr>
            <tbody>
              {checkoutProduct.map((item, index) => (
                <tr key={index}>
                  <td className="border border-[#f0f0f0] py-4 px-5 w-1/2 ">
                    <h5 className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize">
                      {item.productName} x {item.quantity}
                    </h5>
                  </td>
                  <td className="border border-[#f0f0f0] py-4 px-5 w-1/2 ">
                    <p className="font-dm text-[#767676] text-base font-bold leading-[30px] capitalize">
                      ${item.quantity * item.price}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
            <tr>
              <td className="border border-[#f0f0f0] py-4 px-5 w-1/2 ">
                <h5 className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize">
                  subtotal
                </h5>
              </td>
              <td className="border border-[#f0f0f0] py-4 px-5 w-1/2 ">
                <p className="font-dm text-[#767676] text-base font-bold leading-[30px] capitalize">
                  ${2230}
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-[#f0f0f0] py-4 px-5 w-1/2 ">
                <h5 className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize">
                  total
                </h5>
              </td>
              <td className="border border-[#f0f0f0] py-4 px-5 w-1/2 ">
                <p className="font-dm text-[#767676] text-base font-bold leading-[30px] capitalize">
                  ${total}
                </p>
              </td>
            </tr>
          </table>
        </div>
        <div className="mt-[74px]">
          <div>
            <div className="flex items-center mb-6">
              <input type="radio" name="bank" id="" />
              <label
                htmlFor=""
                className="font-dm text-[#262626] font-bold text-base leading-[23px] ml-[11px]"
              >
                Bank
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input type="radio" name="bank" id="" />
              <label
                htmlFor=""
                className="font-dm text-[#262626] font-bold text-base leading-[23px] ml-[11px]"
              >
                Bank 2
              </label>
            </div>
          </div>
          <Link
            to="#"
            className="font-dm inline-block text-white text-center py-4 px-11 bg-black font-bold leading-normal"
          >
            Proceed to Bank
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Checkout
