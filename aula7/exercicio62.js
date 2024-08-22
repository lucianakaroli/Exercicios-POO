/* Voce esta consumindo uma colecao de objetos JSON obtidos a partir de um arquivo texto
que foi exportado de uma determinada base de dados. Os objetos desse arquivo representam
os seguintes dados sobre cidades: nome, país, regiao, custo de vida, moeda representativa
do custo de vida, temperatura media (em Kelvin), humidade relativa do ar media, velocidade
media da conexao com a internet. Deseja-se obter uma lista das 5 primeiras cidades
(em ordem crescente do custo de vida) que atendam aos requisitos de boas condicoes 
climaticas (humidade e temperatura Celsius a serem informadas). */


import { readFileSync } from "node:fs";
import { curry, map, filter, sortBy, pipe, take } from "ramda";

try {
    const cities = JSON.parse(readFileSync("cities.json", "utf8"));
    console.log(cities);
    const CtoK = c => c + 273.15;
    const KtoC = k => k - 273.15;

    const ranges = ({
        Kelvin: map(CtoK, [20, 30]),
        humidity: [30, 70],
    });
    const withinRange = (range, value) => (range[0] <= value && value <= range[1]);
    const byClimatePredicate = curry((ranges, city) => {
        const { temp = 0, humidity = 0 } = city;
        return withinRange(ranges.Kelvin, temp) && withinRange(ranges.humidity, humidity);
    });
    const filterByClimate = filter(byClimatePredicate(ranges));

    const temperatureConverter = KtoC;
    const updateTemperature = curry(
        (temperatureConverter, city) =>
        ({
            ...city,
            temp: Math.round(temperatureConverter(city.temp))
        })
    );
    const toMyPreferredTemperatureUnitConverter = updateTemperature(temperatureConverter);
    const updateTemperatureOfCities = map(toMyPreferredTemperatureUnitConverter);

    const citySorter = cities => sortBy(city => city.cost)(cities);

    const cityGrabber = take(5);

    const pipeline = [
        filterByClimate, // quickly limit list to short list of cities with proper climate
        updateTemperatureOfCities, // convert city’s temperature from Kelvin to Celcius
        citySorter, // sort the list of cities by cost in ascending
        cityGrabber, //†r grab its top 10 cities
    ];
    const cityTop5 = pipe(...pipeline)(cities);
    console.log(cityTop5);
} catch (error) {
    console.log("Falha de leitura de arquivo");
}
