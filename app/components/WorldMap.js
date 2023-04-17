import React, { useState, useContext, useCallback } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";

import Svg, { Path, Circle } from "react-native-svg";
import world from "../assets/world";
import colors from "../config/colors";
import cache from "../utility/cache";
import AuthContext from "../navigation/authContext";
import AppText from "./AppText";
import { moderateScale } from "../utility/scaler";

const countriesData = [
  { name: "Afghanistan" },
  { name: "Albania" },
  { name: "Algeria" },
  { name: "American Samoa" },
  { name: "Angola" },
  { name: "Anguilla" },
  { name: "Antigua and Barbuda" },
  { name: "Argentina" },
  { name: "Armenia" },
  { name: "Aruba" },
  { name: "Australia" },
  { name: "Austria" },
  { name: "Azerbaijan" },
  { name: "Bahamas" },
  { name: "Bahrain" },
  { name: "Bangladesh" },
  { name: "Barbados" },
  { name: "Belarus" },
  { name: "Belgium" },
  { name: "Belize" },
  { name: "Benin" },
  { name: "Bermuda" },
  { name: "Bhutan" },
  { name: "Bolivia" },
  { name: "Bosnia and Herzegovina" },
  { name: "Botswana" },
  { name: "Brazil" },
  { name: "British Virgin Islands" },
  { name: "Brunei Darussalam" },
  { name: "Bulgaria" },
  { name: "Burkina Faso" },
  { name: "Burundi" },
  { name: "Cambodia" },
  { name: "Cameroon" },
  { name: "Canada" },
  { name: "Canary Islands (Spain)" },
  { name: "Cape Verde" },
  { name: "Cayman Islands" },
  { name: "Central African Republic" },
  { name: "Chad" },
  { name: "Chile" },
  { name: "China" },
  { name: "Colombia" },
  { name: "Comoros" },
  { name: "Costa Rica" },
  { name: "Croatia" },
  { name: "Cuba" },
  { name: "Curaçao" },
  { name: "Cyprus" },
  { name: "Czech Republic" },
  { name: "Côte d'Ivoire" },
  { name: "Dem. Rep. Korea" },
  { name: "Democratic Republic of the Congo" },
  { name: "Denmark" },
  { name: "Djibouti" },
  { name: "Dominica" },
  { name: "Dominican Republic" },
  { name: "Ecuador" },
  { name: "Egypt" },
  { name: "El Salvador" },
  { name: "Equatorial Guinea" },
  { name: "Eritrea" },
  { name: "Estonia" },
  { name: "Ethiopia" },
  { name: "Faeroe Islands" },
  { name: "Falkland Islands" },
  { name: "Federated States of Micronesia" },
  { name: "Fiji" },
  { name: "Finland" },
  { name: "France" },
  { name: "French Guiana" },
  { name: "French Polynesia" },
  { name: "Gabon" },
  { name: "Georgia" },
  { name: "Germany" },
  { name: "Ghana" },
  { name: "Greece" },
  { name: "Greenland" },
  { name: "Grenada" },
  { name: "Guadeloupe" },
  { name: "Guam" },
  { name: "Guatemala" },
  { name: "Guinea" },
  { name: "Guinea-Bissau" },
  { name: "Guyana" },
  { name: "Haiti" },
  { name: "Honduras" },
  { name: "Hungary" },
  { name: "Iceland" },
  { name: "India" },
  { name: "Indonesia" },
  { name: "Iran" },
  { name: "Iraq" },
  { name: "Ireland" },
  { name: "Israel" },
  { name: "Italy" },
  { name: "Jamaica" },
  { name: "Japan" },
  { name: "Jordan" },
  { name: "Kazakhstan" },
  { name: "Kenya" },
  { name: "Kosovo" },
  { name: "Kuwait" },
  { name: "Kyrgyzstan" },
  { name: "Lao PDR" },
  { name: "Latvia" },
  { name: "Lebanon" },
  { name: "Lesotho" },
  { name: "Liberia" },
  { name: "Libya" },
  { name: "Lithuania" },
  { name: "Luxembourg" },
  { name: "Macedonia" },
  { name: "Madagascar" },
  { name: "Malawi" },
  { name: "Malaysia" },
  { name: "Maldives" },
  { name: "Mali" },
  { name: "Malta" },
  { name: "Marshall Islands" },
  { name: "Martinique" },
  { name: "Mauritania" },
  { name: "Mauritius" },
  { name: "Mayotte" },
  { name: "Mexico" },
  { name: "Moldova" },
  { name: "Mongolia" },
  { name: "Montenegro" },
  { name: "Montserrat" },
  { name: "Morocco" },
  { name: "Mozambique" },
  { name: "Myanmar" },
  { name: "Namibia" },
  { name: "Nauru" },
  { name: "Nepal" },
  { name: "Netherlands" },
  { name: "New Caledonia" },
  { name: "New Zealand" },
  { name: "Nicaragua" },
  { name: "Niger" },
  { name: "Nigeria" },
  { name: "Northern Mariana Islands" },
  { name: "Norway" },
  { name: "Oman" },
  { name: "Pakistan" },
  { name: "Palau" },
  { name: "Palestine" },
  { name: "Panama" },
  { name: "Papua New Guinea" },
  { name: "Paraguay" },
  { name: "Peru" },
  { name: "Philippines" },
  { name: "Poland" },
  { name: "Portugal" },
  { name: "Puerto Rico" },
  { name: "Qatar" },
  { name: "Republic of Congo" },
  { name: "Republic of Korea" },
  { name: "Reunion" },
  { name: "Romania" },
  { name: "Russian Federation" },
  { name: "Rwanda" },
  { name: "Saba (Netherlands)" },
  { name: "Saint Kitts and Nevis" },
  { name: "Saint Lucia" },
  { name: "Saint Vincent and the Grenadines" },
  { name: "Saint-Barthélemy" },
  { name: "Saint-Martin" },
  { name: "Samoa" },
  { name: "Saudi Arabia" },
  { name: "Senegal" },
  { name: "Serbia" },
  { name: "Seychelles" },
  { name: "Sierra Leone" },
  { name: "Sint Maarten" },
  { name: "Slovakia" },
  { name: "Slovenia" },
  { name: "Solomon Islands" },
  { name: "Somalia" },
  { name: "South Africa" },
  { name: "South Sudan" },
  { name: "Spain" },
  { name: "Sri Lanka" },
  { name: "St. Eustatius (Netherlands)" },
  { name: "Sudan" },
  { name: "Suriname" },
  { name: "Swaziland" },
  { name: "Sweden" },
  { name: "Switzerland" },
  { name: "Syria" },
  { name: "São Tomé and Principe" },
  { name: "Taiwan" },
  { name: "Tajikistan" },
  { name: "Tanzania" },
  { name: "Thailand" },
  { name: "The Gambia" },
  { name: "Timor-Leste" },
  { name: "Togo" },
  { name: "Tonga" },
  { name: "Trinidad and Tobago" },
  { name: "Tunisia" },
  { name: "Turkey" },
  { name: "Turkmenistan" },
  { name: "Turks and Caicos Islands" },
  { name: "Tuvalu" },
  { name: "Uganda" },
  { name: "Ukraine" },
  { name: "United Arab Emirates" },
  { name: "United Kingdom" },
  { name: "United States" },
  { name: "United States Virgin Islands" },
  { name: "Uruguay" },
  { name: "Uzbekistan" },
  { name: "Vanuatu" },
  { name: "Venezuela" },
  { name: "Vietnam" },
  { name: "Western Sahara" },
  { name: "Yemen" },
  { name: "Zambia" },
  { name: "Zimbabwe" },
];

const WorldMap = (props) => {
  const { selectedCountries, setSelectedCountries } = useContext(AuthContext);

  const getCountryFillColor = (code) => {
    return selectedCountries.includes(code) ? colors.worldMapPrimary : "grey";
  };

  const toggleCountrySelection = useCallback(
    (code) => {
      const index = selectedCountries.indexOf(code);
      if (index === -1) {
        setSelectedCountries([...selectedCountries, code]);
      } else {
        setSelectedCountries(selectedCountries.filter((c) => c !== code));
      }
      setSelectedCountries((updatedSelectedCountries) => {
        cache.store("worldMapCountries", updatedSelectedCountries);
        return updatedSelectedCountries;
      });
    },
    [selectedCountries]
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/mapBackground.png")}
        style={{
          position: "absolute",
          resizeMode: "stretch",
          width: "100%",
          height: 468.5,
          left: 15,
        }}
      ></Image>

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
          style={styles.svg}
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
      <FlatList
        data={countriesData}
        contentContainerStyle={styles.buttonList}
        numColumns={4}
        renderItem={({ item }) => (
          <Pressable
            key={item.name}
            style={[
              styles.countryButton,
              {
                backgroundColor: selectedCountries.includes(item.name)
                  ? colors.worldMapPrimary + "90"
                  : colors.light,
              },
            ]}
            onPress={() => toggleCountrySelection(item.name)}
          >
            <AppText style={styles.countryText}>{item.name}</AppText>
          </Pressable>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // height: 428.5,
    //  width: 1000,
  },
  buttonList: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 40,
    alignItems: "center",
  },
  countryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 2,
    borderWidth: 1,
    borderColor: "grey",
    width: 200,
  },
  worldContainer: {
    //flex: 1,
    height: 428.5,
    width: 1000,
    marginVertical: 25,
    // backgroundColor: colors.red,
    // borderRadius: 50,
    padding: 20,
    marginLeft: 15,
  },
  worldBackground: {
    //flex: 1,
    // resizeMode: "cover",
    height: 428.5,
    width: 1000,
  },
  countryText: {
    color: colors.darkText,
    fontSize: moderateScale(18),
  },
});

export default WorldMap;
