//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

// Defining the data. Here are all of the temperatures for each day. 
const day1TempF = 32 
const day2TempC = 25 
const day3TempF = 70 
const day4TempC = 18 
const day5TempF = 80 
const day6TempC = 15 
const day7TempF = 72 
const day8TempC = 28 
const day9TempF = 68 
const day10TempC = 20 
const day11TempF = 75 
const day12TempC = 23 
const day13TempF = 82 
const day14TempC = 30 
const day15TempF = 65 
const day16TempC = 22 
const day17TempF = 77 
const day18TempC = 26 
const day19TempF = 78 
const day20TempC = 24 
const day21TempF = 73 
const day22TempC = 21 
const day23TempF = 79 
const day24TempC = 27 
const day25TempF = 71 
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17 
const day29TempF = 76 
const day30TempC = 29


// Half of the temperatures are in Celsius and the other half is in Fahrenheit. 
// The following code converts all the Celsius temperatures into Fahrenheit.

CelsiustoFahrenheitday2 = (day2TempC * 9 / 5) + 32
CelsiustoFahrenheitday4 = (day4TempC * 9 / 5) + 32
CelsiustoFahrenheitday6 = (day6TempC * 9 / 5) + 32
CelsiustoFahrenheitday8 = (day8TempC * 9 / 5) + 32
CelsiustoFahrenheitday10 = (day10TempC * 9 / 5) + 32
CelsiustoFahrenheitday12 = (day12TempC * 9 / 5) + 32
CelsiustoFahrenheitday14 = (day14TempC * 9 / 5) + 32
CelsiustoFahrenheitday16 = (day16TempC * 9 / 5) + 32
CelsiustoFahrenheitday18 = (day18TempC * 9 / 5) + 32
CelsiustoFahrenheitday20 = (day20TempC * 9 / 5) + 32
CelsiustoFahrenheitday22 = (day22TempC * 9 / 5) + 32
CelsiustoFahrenheitday24 = (day24TempC * 9 / 5) + 32
CelsiustoFahrenheitday26 = (day26TempC * 9 / 5) + 32
CelsiustoFahrenheitday28 = (day28TempC * 9 / 5) + 32
CelsiustoFahrenheitday30 = (day30TempC * 9 / 5) + 32

// console.log(CelsiustoFahrenheitday2)
// console.log(CelsiustoFahrenheitday4)
// console.log(CelsiustoFahrenheitday6)
// console.log(CelsiustoFahrenheitday8)
// console.log(CelsiustoFahrenheitday10)
// console.log(CelsiustoFahrenheitday12)
// console.log(CelsiustoFahrenheitday14)
// console.log(CelsiustoFahrenheitday16)
// console.log(CelsiustoFahrenheitday18)
// console.log(CelsiustoFahrenheitday20)
// console.log(CelsiustoFahrenheitday22)
// console.log(CelsiustoFahrenheitday24)
// console.log(CelsiustoFahrenheitday26)
// console.log(CelsiustoFahrenheitday28)
// console.log(CelsiustoFahrenheitday30)

// The following code converts all of the Fahrenheit temperatures into Celsius.
FahrenheittoCelsiusday1 = (day1TempF - 32) * 5 / 9
FahrenheittoCelsiusday3 = (day3TempF - 32) * 5 / 9
FahrenheittoCelsiusday5 = (day5TempF - 32) * 5 / 9
FahrenheittoCelsiusday7 = (day7TempF - 32) * 5 / 9
FahrenheittoCelsiusday9 = (day9TempF - 32) * 5 / 9
FahrenheittoCelsiusday11 = (day11TempF - 32) * 5 / 9
FahrenheittoCelsiusday13 = (day13TempF - 32) * 5 / 9
FahrenheittoCelsiusday15 = (day15TempF - 32) * 5 / 9
FahrenheittoCelsiusday17 = (day17TempF - 32) * 5 / 9
FahrenheittoCelsiusday19 = (day19TempF - 32) * 5 / 9
FahrenheittoCelsiusday21 = (day21TempF - 32) * 5 / 9
FahrenheittoCelsiusday23 = (day23TempF - 32) * 5 / 9
FahrenheittoCelsiusday25 = (day25TempF - 32) * 5 / 9
FahrenheittoCelsiusday27 = (day27TempF - 32) * 5 / 9
FahrenheittoCelsiusday29 = (day29TempF - 32) * 5 / 9
 
// This adds all the converted temperatures with the already Celsius / Fahrenheit non-converted temperatures
let tot_temperature_in_fahrenheit = day1TempF + day3TempF + day5TempF + day7TempF + day9TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF + CelsiustoFahrenheitday2 + CelsiustoFahrenheitday4 + CelsiustoFahrenheitday6 + CelsiustoFahrenheitday8 + CelsiustoFahrenheitday10 + CelsiustoFahrenheitday12 + CelsiustoFahrenheitday14 + CelsiustoFahrenheitday16 + CelsiustoFahrenheitday18 + CelsiustoFahrenheitday20 + CelsiustoFahrenheitday22 + CelsiustoFahrenheitday24 + CelsiustoFahrenheitday26 + CelsiustoFahrenheitday28 + CelsiustoFahrenheitday30
let tot_temperature_in_celsius = day2TempC + day4TempC + day6TempC + day8TempC + day10TempC + day12TempC + day14TempC + day16TempC + day18TempC + day20TempC + day22TempC + day24TempC + day26TempC + day28TempC + day30TempC + FahrenheittoCelsiusday1 + FahrenheittoCelsiusday3 + FahrenheittoCelsiusday5 + FahrenheittoCelsiusday7 + FahrenheittoCelsiusday9 + FahrenheittoCelsiusday11 + FahrenheittoCelsiusday13 + FahrenheittoCelsiusday15 + FahrenheittoCelsiusday17 + FahrenheittoCelsiusday19 + FahrenheittoCelsiusday21 + FahrenheittoCelsiusday23 + FahrenheittoCelsiusday25 + FahrenheittoCelsiusday27 + FahrenheittoCelsiusday29

// Returning the Average
avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
console.log(`This is the average Temperature of all 30 days in Fahrenheit ${avg_temperature_in_fahrenheit}`)

avg_temperature_in_celsius = tot_temperature_in_celsius / 30
console.log(`This is the average Temperature of all 30 days in Celsius ${avg_temperature_in_celsius}`)
