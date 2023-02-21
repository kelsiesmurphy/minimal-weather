export interface WeatherConversionData {
    coord: {};
    weather: { 
        id: number,
        main: string,
        description: string,
        icon: string
    }[];
    base: string;
    main: {};
    visibility: number;
    wind: {};
    clouds: {};
    dt: number;
    sys: {};
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }


export interface LocationConversionData {
    name: {},
    tld: [],
    cca2: string,
    ccn3: number,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: {},
    idd: {},
    capital: [],
    altSpellings: [],
    region: string,
    subregion: string,
    languages: {},
    translations: {},
    latlng: [],
    landlocked: false,
    area: number,
    demonyms: {},
    flag: string,
    maps: {},
    population: number,
    gini: {},
    fifa: string,
    car: {},
    timezones: [],
    continents: [],
    flags: {},
    coatOfArms: {},
    startOfWeek: string,
    capitalInfo: {},
    postalCode: {}
}