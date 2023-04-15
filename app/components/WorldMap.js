import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

import Svg, { Path, Circle } from "react-native-svg";
import world from "../assets/world";
import colors from "../config/colors";

const countriesData = [
  { name: "Afghanistan" },
  { name: "Angola" },
  { name: "Albania" },
  { name: "United Arab Emirates" },
  { name: "Argentina" },
  { name: "Armenia" },
  { name: "Australia" },
  { name: "Austria" },
  { name: "Azerbaijan" },
  { name: "Burundi" },
  { name: "Belgium" },
  { name: "Benin" },
  { name: "Burkina Faso" },
  { name: "Bangladesh" },
  { name: "Bulgaria" },
  { name: "Bosnia and Herzegovina" },
  { name: "Belarus" },
  { name: "Belize" },
  { name: "Bolivia" },
  { name: "Brazil" },
  { name: "Brunei Darussalam" },
  { name: "Bhutan" },
  { name: "Botswana" },
  { name: "Central African Republic" },
  { name: "Canada" },
  { name: "Switzerland" },
  { name: "China" },
  { name: "Côte d'Ivoire" },
  { name: "Cameroon" },
  { name: "Democratic Republic of the Congo" },
  { name: "Republic of Congo" },
  { name: "Colombia" },
  { name: "Costa Rica" },
  { name: "Cuba" },
  { name: "Czech Republic" },
  { name: "Germany" },
  { name: "Djibouti" },
  { name: "Denmark" },
  { name: "Dominican Republic" },
  { name: "Algeria" },
  { name: "Ecuador" },
  { name: "Egypt" },
  { name: "Eritrea" },
  { name: "Estonia" },
  { name: "Ethiopia" },
  { name: "Finland" },
  { name: "Gabon" },
  { name: "United Kingdom" },
  { name: "Georgia" },
  { name: "Ghana" },
  { name: "Guinea" },
  { name: "The Gambia" },
  { name: "Guinea-Bissau" },
  { name: "Equatorial Guinea" },
  { name: "Greece" },
  { name: "Greenland" },
  { name: "Guatemala" },
  { name: "Guyana" },
  { name: "Honduras" },
  { name: "Croatia" },
  { name: "Haiti" },
  { name: "Hungary" },
  { name: "Indonesia" },
  { name: "India" },
  { name: "Ireland" },
  { name: "Iran" },
  { name: "Iraq" },
  { name: "Iceland" },
  { name: "Israel" },
  { name: "Italy" },
  { name: "Jamaica" },
  { name: "Jordan" },
  { name: "Japan" },
  { name: "Kazakhstan" },
  { name: "Kenya" },
  { name: "Kyrgyzstan" },
  { name: "Cambodia" },
  { name: "Republic of Korea" },
  { name: "Kuwait" },
  { name: "Lao PDR" },
  { name: "Lebanon" },
  { name: "Liberia" },
  { name: "Libya" },
  { name: "Sri Lanka" },
  { name: "Lesotho" },
  { name: "Lithuania" },
  { name: "Luxembourg" },
  { name: "Latvia" },
  { name: "Morocco" },
  { name: "Moldova" },
  { name: "Madagascar" },
  { name: "Mexico" },
  { name: "Macedonia" },
  { name: "Mali" },
  { name: "Myanmar" },
  { name: "Montenegro" },
  { name: "Mongolia" },
  { name: "Mozambique" },
  { name: "Mauritania" },
  { name: "Malawi" },
  { name: "Malaysia" },
  { name: "Namibia" },
  { name: "Niger" },
  { name: "Nigeria" },
  { name: "Nicaragua" },
  { name: "Norway" },
  { name: "Nepal" },
  { name: "Oman" },
  { name: "Pakistan" },
  { name: "Panama" },
  { name: "Peru" },
  { name: "Philippines" },
  { name: "Papua New Guinea" },
  { name: "Poland" },
  { name: "Dem. Rep. Korea" },
  { name: "Paraguay" },
  { name: "Palestine" },
  { name: "Qatar" },
  { name: "Romania" },
  { name: "Rwanda" },
  { name: "Western Sahara" },
  { name: "Saudi Arabia" },
  { name: "Sudan" },
  { name: "South Sudan" },
  { name: "Senegal" },
  { name: "Sierra Leone" },
  { name: "El Salvador" },
  { name: "Serbia" },
  { name: "Suriname" },
  { name: "Slovakia" },
  { name: "Slovenia" },
  { name: "Sweden" },
  { name: "Swaziland" },
  { name: "Syria" },
  { name: "Chad" },
  { name: "Togo" },
  { name: "Thailand" },
  { name: "Tajikistan" },
  { name: "Turkmenistan" },
  { name: "Timor-Leste" },
  { name: "Tunisia" },
  { name: "Turkey" },
  { name: "Taiwan" },
  { name: "Tanzania" },
  { name: "Uganda" },
  { name: "Ukraine" },
  { name: "Uruguay" },
  { name: "Uzbekistan" },
  { name: "Venezuela" },
  { name: "Vietnam" },
  { name: "Yemen" },
  { name: "Zambia" },
  { name: "Zimbabwe" },
  { name: "Somalia" },
  { name: "Kosovo" },
  { name: "South Africa" },
  { name: "New Zealand" },
  { name: "Chile" },
  { name: "Netherlands" },
  { name: "Portugal" },
  { name: "Russian Federation" },
  { name: "Spain" },
  { name: "France" },
  { name: "United States" },
  { name: "French Guiana" },
  { name: "Aruba" },
  { name: "Anguilla" },
  { name: "American Samoa" },
  { name: "Antigua and Barbuda" },
  { name: "Bahrain" },
  { name: "Bahamas" },
  { name: "Saint-Barthélemy" },
  { name: "Bermuda" },
  { name: "Barbados" },
  { name: "Comoros" },
  { name: "Cape Verde" },
  { name: "Curaçao" },
  { name: "Cayman Islands" },
  { name: "Cyprus" },
  { name: "Dominica" },
  { name: "Falkland Islands" },
  { name: "Faeroe Islands" },
  { name: "Federated States of Micronesia" },
  { name: "Grenada" },
  { name: "Guam" },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint-Martin" },
  { name: "Maldives" },
  { name: "Marshall Islands" },
  { name: "Malta" },
  { name: "Northern Mariana Islands" },
  { name: "Montserrat" },
  { name: "Mauritius" },
  { name: "New Caledonia" },
  { name: "Nauru" },
  { name: "Palau" },
  { name: "Puerto Rico" },
  { name: "French Polynesia" },
  { name: "Solomon Islands" },
  { name: "São Tomé and Principe" },
  { name: "Sint Maarten" },
  { name: "Seychelles" },
  { name: "Turks and Caicos Islands" },
  { name: "Tonga" },
  { name: "Trinidad and Tobago" },
  { name: "Tuvalu" },
  { name: "Saint Vincent and the Grenadines" },
  { name: "British Virgin Islands" },
  { name: "United States Virgin Islands" },
  { name: "Vanuatu" },
  { name: "Samoa" },
  { name: "St. Eustatius (Netherlands)" },
  { name: "Saba (Netherlands)" },
  { name: "Martinique" },
  { name: "Canary Islands (Spain)" },
  { name: "Mayotte" },
  { name: "Reunion" },
  { name: "Guadeloupe" },
  { name: "Fiji" },
];

const WorldMap = (props) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const getCountryFillColor = (code) => {
    return selectedCountries.includes(code) ? "purple" : "grey";
  };
  const toggleCountrySelection = (code) => {
    const index = selectedCountries.indexOf(code);
    if (index === -1) {
      setSelectedCountries([...selectedCountries, code]);
    } else {
      setSelectedCountries(selectedCountries.filter((c) => c !== code));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.worldContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={"100%"}
          viewBox="0 0 2000 857"
          fill={colors.primary}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.4}
          {...props}
        >
          {world.map((path, index) => (
            <Path
              key={index}
              d={path.path}
              id={path.id}
              name={path.name}
              fill={getCountryFillColor(path.name)}
            />
          ))}
        </Svg>
      </View>
      <ScrollView>
        <FlatList
          data={countriesData}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.name}
              style={[
                styles.countryButton,
                {
                  backgroundColor: selectedCountries.includes(item.name)
                    ? "purple"
                    : "white",
                },
              ]}
              onPress={() => toggleCountrySelection(item.name)}
            >
              <Text style={{ color: "black" }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "grey",
  },
  worldContainer: {
    flex: 1,
    height: 428.5,
    width: 1000,
  },
});

export default WorldMap;
