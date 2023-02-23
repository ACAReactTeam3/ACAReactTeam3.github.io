export const prodTYear = (() => {
  const x = [];
  let i = 2024;
  while (i >= 1911) {
    x.push(`${i}`);
    i--;
  }
  return x;
})();

export const engineType = (() => {
  const x = [];
  let i = 0.1;
  while (i <= 7.0) {
    x.push(`${i.toFixed(1)}`);
    i += 0.1;
  }
  return x;
})();

export const cylinders = (() => {
  const x = [];
  let i = 1;
  while (i <= 16) {
    x.push(`${i}`);
    i++;
  }
  return x;
})();

export const doors = (() => {
  const x = [];
  let i = 1;
  while (i <= 5) {
    x.push(`${i}`);
    i++;
  }
  return x;
})();

export const tires = (() => {
  const x = [];
  let i = 12;
  while (i <= 30) {
    x.push(`${i}"`);
    i++;
  }
  return x;
})();

export const provincesOfArmenia = [
  "Երևան",
  "Արագածոտն",
  "Արարատ",
  "Արցախ",
  "Արմավիր",
  "Գեղարքունիք",
  "Կոտայք",
  "Լոռի",
  "Շիրակ",
  "Սյունիք",
  "Տավուշ",
  "Վայոց ձոր",
];

export const additOpt = [
  "ABS",
  "TRC",
  "EBD",
  "ESP",
  "Մոնիտոր/TV",
  "Տուրբոմղիչ",
  "Բորտ-համակարգիչ",
  "Հայելիների տաքացում",
  "Տաքացվող նստատեղեր",
  "Էլեկտրակառավարվող հայելիներ",
  "Անձրևի սենսոր",
  "Լույսի սենսոր",
  "Կրուիզ-կոնտրոլ",
  "Քսենոնային լուսարձակներ",
  "Լեդ լուսարձակներ",
  "Լուսարձակների լվացում",
  "Հակաառևանգման համակարգ",
  "Կենտրոնական փական",
  "Պարկտրոնիկ",
  "Պարկինգ-կոնտրոլ",
  "Ղեկի կարգավորում",
  "Հակամառախուղային լուսարձակներ",
  "Ալյումինե սկավառակներ",
  "Նոր անվադողեր",
  "Լյուկ",
  "Պանորամային լյուկ",
  "Տաքացվող ղեկ",
  "Ետևի տեսադաշտի տեսախցիկ",
  "Կասետային մագնիտոֆոն",
  "CD/MP3",
  "DVD",
  "CD-չեյնջեր",
  "Գնված է ավտոսրահից",
  "Նավիգացիոն համակարգ",
  "Անվտանգության բարձիկներ",
  "Դիմացի նստատեղերի էլ․կարգավորում",
  "Կաշեպատ սրահ",
  "Մգեցված ապակիներ",
  "Կոնդիցիոներ",
  "Կլիմատ-կոնտրոլ",
  "Էլեկտրակառավարվող ղեկ",
  "Հիդրավլիկ ղեկ",
  "Էլեկտրակառավարվող ապակիներ",
  "Ձայնամեկուսացում",
  "Թյունինգ",
];
export const initialOptions = ((additOpt) => {
  const state = {};
  additOpt.map((item, index) => (state[item] = false));
  return state;
})(additOpt);
export const carState = [
  "Գերազանց",
  "Լավ",
  "Նորմալ",
  "Վթարված",
  "Պահեստամասերի համար",
];

export const customsCleared = ["Այո", "Ոչ"];

export const drive = ["Առջևի", "Ետևի", "Լիաքարշակ 4x4"];

export const carMileageType = ["կմ", "մղոն"];

export const transmission = [
  "Մեխանիկական",
  "Ավտոմատ",
  "Կիսաավտոմատ",
  "Վարիատոր",
];

export const steeringWheel = ["Ձախ", "Աջ", "Փոխված աջից ձախ"];

export const fuel = ["Բենզին", "Գազ", "Դիզել", "Հիբրիդ", "Էլեկտրական"];

export const color = [
  "Սպիտակ",
  "Սև",
  "Արծաթագույն",
  "Կապույտ",
  "Կարմիր",
  "Կանաչ",
  "Մոխրագույն",
  "Երկնագույն",
  "Վարդագույն",
  "Դեղին",
  "Ոսկեգույն",
  "Շագանակագույն",
  "Բեժ",
  "Սմբուկագույն",
  "Բալագույն",
  "Այլ գույն",
];
export const description = [
  "Մակնիշը*",
  "Մոդելը",
  "Տարեթիվը*",
  "Թափքը*",
  "Վազքը*",
  "Ընտրել",
  "Փոխանցման տուփը*",
  "Ղեկը*",
  "Շարժիչը*",
  "Գույնը*",
  "Սրահի գույնը",
  "Շարժիչի ծավալը",
  "Ձիաուժը",
  "Մխոցների քանակը",
  "Քարշակը",
  "Դռների քանակը",
  "Անվահեծերը",
];

export const carsType = [
  "Մարդատար",
  "Բեռնատար",
  "Մոտոտեխնիկա",
  "Հատուկ տեխնիկա",
  "Ավտոբուս",
  "Կցասայլ",
  "Ջրային տեխնիկա",
];

export const carsTypeSort = {
  truckSort: [
    "Բորտային",
    "Ինքնաթափ",
    "Ավտոցիստերն",
    "Քարշակ",
    "Շասսի",
    "Աղբատար",
    "Ռեֆրեժիրատոր",
    "Մանիպուլյատոր",
    "Բեռնասայլ/Ֆուրգոն",
  ],
  motoTechSort: [
    "Մոտոցիկլ",
    "Սկուտեր/Մոպեդ",
    "Սպայդեր/Տրիցիկլ",
    "Կվադրացիկլ/Բագգի",
    "Ձյունագնաց",
  ],
  specTechSort: [
    "Ավտոաշտարակ",
    "Ավտոկռունկ",
    "Բուլդոզեր",
    "Էկսկավատոր",
    "Ավտոբեռնիչ",
    "Տրակտոր",
    "Կոմբայն",
    "Կատոկ",
    "Բետոնախառնիչ",
    "Էվակուատոր",
    "Այլ",
  ],
  hidroTechSort: ["Հիդրոցիկլ", "Նավակ", "Կատեր", "Զբոսանավ"],
};

export const bodyType = [
  "Սեդան",
  "Հետչբեք",
  "ՈՒնիվերսալ",
  "Կուպե",
  "Կաբրիոլետ / Ռոդսթեր",
  "Ամենագնաց",
  "Պիկապ",
  "Մինիվեն / Միկրոավտոբուս",
  "Ֆուրգոն",
  "Լիմուզին",
];

export const carBrandModels = [
  {
    brand: "Seat",
    models: [
      "Alhambra",
      "Altea",
      "Altea XL",
      "Arosa",
      "Cordoba",
      "Cordoba Vario",
      "Exeo",
      "Ibiza",
      "Ibiza ST",
      "Exeo ST",
      "Leon",
      "Leon ST",
      "Inca",
      "Mii",
      "Toledo",
    ],
  },
  {
    brand: "Renault",
    models: [
      "Captur",
      "Clio",
      "Clio Grandtour",
      "Espace",
      "Express",
      "Fluence",
      "Grand Espace",
      "Grand Modus",
      "Grand Scenic",
      "Kadjar",
      "Kangoo",
      "Kangoo Express",
      "Koleos",
      "Laguna",
      "Laguna Grandtour",
      "Latitude",
      "Mascott",
      "Mégane",
      "Mégane CC",
      "Mégane Combi",
      "Mégane Grandtour",
      "Mégane Coupé",
      "Mégane Scénic",
      "Scénic",
      "Talisman",
      "Talisman Grandtour",
      "Thalia",
      "Twingo",
      "Wind",
      "Zoé",
    ],
  },
  {
    brand: "Peugeot",
    models: [
      "1007",
      "107",
      "106",
      "108",
      "2008",
      "205",
      "205 Cabrio",
      "206",
      "206 CC",
      "206 SW",
      "207",
      "207 CC",
      "207 SW",
      "306",
      "307",
      "307 CC",
      "307 SW",
      "308",
      "308 CC",
      "308 SW",
      "309",
      "4007",
      "4008",
      "405",
      "406",
      "407",
      "407 SW",
      "5008",
      "508",
      "508 SW",
      "605",
      "806",
      "607",
      "807",
      "Bipper",
      "RCZ",
    ],
  },
  {
    brand: "Dacia",
    models: [
      "Dokker",
      "Duster",
      "Lodgy",
      "Logan",
      "Logan MCV",
      "Logan Van",
      "Sandero",
      "Solenza",
    ],
  },
  {
    brand: "Citroën",
    models: [
      "Berlingo",
      "C-Crosser",
      "C-Elissée",
      "C-Zero",
      "C1",
      "C2",
      "C3",
      "C3 Picasso",
      "C4",
      "C4 Aircross",
      "C4 Cactus",
      "C4 Coupé",
      "C4 Grand Picasso",
      "C4 Sedan",
      "C5",
      "C5 Break",
      "C5 Tourer",
      "C6",
      "C8",
      "DS3",
      "DS4",
      "DS5",
      "Evasion",
      "Jumper",
      "Jumpy",
      "Saxo",
      "Nemo",
      "Xantia",
      "Xsara",
    ],
  },
  {
    brand: "Opel",
    models: [
      "Agila",
      "Ampera",
      "Antara",
      "Astra",
      "Astra cabrio",
      "Astra caravan",
      "Astra coupé",
      "Calibra",
      "Campo",
      "Cascada",
      "Corsa",
      "Frontera",
      "Insignia",
      "Insignia kombi",
      "Kadett",
      "Meriva",
      "Mokka",
      "Movano",
      "Omega",
      "Signum",
      "Vectra",
      "Vectra Caravan",
      "Vivaro",
      "Vivaro Kombi",
      "Zafira",
    ],
  },
  {
    brand: "Alfa Romeo",
    models: [
      "145",
      "146",
      "147",
      "155",
      "156",
      "156 Sportwagon",
      "159",
      "159 Sportwagon",
      "164",
      "166",
      "4C",
      "Brera",
      "GTV",
      "MiTo",
      "Crosswagon",
      "Spider",
      "GT",
      "Giulietta",
      "Giulia",
    ],
  },
  {
    brand: "Škoda",
    models: [
      "Favorit",
      "Felicia",
      "Citigo",
      "Fabia",
      "Fabia Combi",
      "Fabia Sedan",
      "Felicia Combi",
      "Octavia",
      "Octavia Combi",
      "Roomster",
      "Yeti",
      "Rapid",
      "Rapid Spaceback",
      "Superb",
      "Superb Combi",
    ],
  },
  {
    brand: "Chevrolet",
    models: [
      "Alero",
      "Aveo",
      "Camaro",
      "Captiva",
      "Corvette",
      "Cruze",
      "Cruze SW",
      "Epica",
      "Equinox",
      "Evanda",
      "HHR",
      "Kalos",
      "Lacetti",
      "Lacetti SW",
      "Lumina",
      "Malibu",
      "Matiz",
      "Monte Carlo",
      "Nubira",
      "Orlando",
      "Spark",
      "Suburban",
      "Tacuma",
      "Tahoe",
      "Trax",
    ],
  },
  {
    brand: "Porsche",
    models: [
      "911 Carrera",
      "911 Carrera Cabrio",
      "911 Targa",
      "911 Turbo",
      "924",
      "944",
      "997",
      "Boxster",
      "Cayenne",
      "Cayman",
      "Macan",
      "Panamera",
    ],
  },
  {
    brand: "Honda",
    models: [
      "Accord",
      "Accord Coupé",
      "Accord Tourer",
      "City",
      "Civic",
      "Civic Aerodeck",
      "Civic Coupé",
      "Civic Tourer",
      "Civic Type R",
      "CR-V",
      "CR-X",
      "CR-Z",
      "FR-V",
      "HR-V",
      "Insight",
      "Integra",
      "Jazz",
      "Legend",
      "Prelude",
    ],
  },
  {
    brand: "Subaru",
    models: [
      "BRZ",
      "Forester",
      "Impreza",
      "Impreza Wagon",
      "Justy",
      "Legacy",
      "Legacy Wagon",
      "Legacy Outback",
      "Levorg",
      "Outback",
      "SVX",
      "Tribeca",
      "Tribeca B9",
      "XV",
    ],
  },
  {
    brand: "Mazda",
    models: [
      "121",
      "2",
      "3",
      "323",
      "323 Combi",
      "323 Coupé",
      "323 F",
      "5",
      "6",
      "6 Combi",
      "626",
      "626 Combi",
      "B-Fighter",
      "B2500",
      "BT",
      "CX-3",
      "CX-5",
      "CX-7",
      "CX-9",
      "Demio",
      "MPV",
      "MX-3",
      "MX-5",
      "MX-6",
      "Premacy",
      "RX-7",
      "RX-8",
      "Xedox 6",
    ],
  },
  {
    brand: "Mitsubishi",
    models: [
      "3000 GT",
      "ASX",
      "Carisma",
      "Colt",
      "Colt CC",
      "Eclipse",
      "Fuso canter",
      "Galant",
      "Galant Combi",
      "Grandis",
      "L200",
      "L200 Pick up",
      "L200 Pick up Allrad",
      "L300",
      "Lancer",
      "Lancer Combi",
      "Lancer Evo",
      "Lancer Sportback",
      "Outlander",
      "Pajero",
      "Pajeto Pinin",
      "Pajero Pinin Wagon",
      "Pajero Sport",
      "Pajero Wagon",
      "Space Star",
    ],
  },
  {
    brand: "Lexus",
    models: [
      "CT",
      "GS",
      "GS 300",
      "GX",
      "IS",
      "IS 200",
      "IS 250",
      "IS 250 C",
      "IS-F",
      "LS",
      "LX",
      "NX",
      "RC F",
      "RX",
      "RX 300",
      "RX 400h",
      "RX 450h",
      "SC 430",
    ],
  },
  {
    brand: "Toyota",
    models: [
      "4-Runner",
      "Auris",
      "Avensis",
      "Avensis Combi",
      "Avensis Van Verso",
      "Aygo",
      "Camry",
      "Carina",
      "Celica",
      "Corolla",
      "Corolla Combi",
      "Corolla sedan",
      "Corolla Verso",
      "FJ Cruiser",
      "GT86",
      "Hiace",
      "Hiace Van",
      "Highlander",
      "Hilux",
      "Land Cruiser",
      "MR2",
      "Paseo",
      "Picnic",
      "Prius",
      "RAV4",
      "Sequoia",
      "Starlet",
      "Supra",
      "Tundra",
      "Urban Cruiser",
      "Verso",
      "Yaris",
      "Yaris Verso",
    ],
  },
  {
    brand: "BMW",
    models: [
      "i3",
      "i8",
      "M3",
      "M4",
      "M5",
      "M6",
      "Rad 1",
      "Rad 1 Cabrio",
      "Rad 1 Coupé",
      "Rad 2",
      "Rad 2 Active Tourer",
      "Rad 2 Coupé",
      "Rad 2 Gran Tourer",
      "Rad 3",
      "Rad 3 Cabrio",
      "Rad 3 Compact",
      "Rad 3 Coupé",
      "Rad 3 GT",
      "Rad 3 Touring",
      "Rad 4",
      "Rad 4 Cabrio",
      "Rad 4 Gran Coupé",
      "Rad 5",
      "Rad 5 GT",
      "Rad 5 Touring",
      "Rad 6",
      "Rad 6 Cabrio",
      "Rad 6 Coupé",
      "Rad 6 Gran Coupé",
      "Rad 7",
      "Rad 8 Coupé",
      "X1",
      "X3",
      "X4",
      "X5",
      "X6",
      "Z3",
      "Z3 Coupé",
      "Z3 Roadster",
      "Z4",
      "Z4 Roadster",
    ],
  },
  {
    brand: "Volkswagen",
    models: [
      "Amarok",
      "Beetle",
      "Bora",
      "Bora Variant",
      "Caddy",
      "Caddy Van",
      "Life",
      "California",
      "Caravelle",
      "CC",
      "Crafter",
      "Crafter Van",
      "Crafter Kombi",
      "CrossTouran",
      "Eos",
      "Fox",
      "Golf",
      "Golf Cabrio",
      "Golf Plus",
      "Golf Sportvan",
      "Golf Variant",
      "Jetta",
      "LT",
      "Lupo",
      "Multivan",
      "New Beetle",
      "New Beetle Cabrio",
      "Passat",
      "Passat Alltrack",
      "Passat CC",
      "Passat Variant",
      "Passat Variant Van",
      "Phaeton",
      "Polo",
      "Polo Van",
      "Polo Variant",
      "Scirocco",
      "Sharan",
      "T4",
      "T4 Caravelle",
      "T4 Multivan",
      "T5",
      "T5 Caravelle",
      "T5 Multivan",
      "T5 Transporter Shuttle",
      "Tiguan",
      "Touareg",
      "Touran",
    ],
  },
  {
    brand: "Suzuki",
    models: [
      "Alto",
      "Baleno",
      "Baleno kombi",
      "Grand Vitara",
      "Grand Vitara XL-7",
      "Ignis",
      "Jimny",
      "Kizashi",
      "Liana",
      "Samurai",
      "Splash",
      "Swift",
      "SX4",
      "SX4 Sedan",
      "Vitara",
      "Wagon R+",
    ],
  },
  {
    brand: "Mercedes-Benz",
    models: [
      "100 D",
      "115",
      "124",
      "126",
      "190",
      "190 D",
      "190 E",
      "200 - 300",
      "200 D",
      "200 E",
      "210 Van",
      "210 kombi",
      "310 Van",
      "310 kombi",
      "230 - 300 CE Coupé",
      "260 - 560 SE",
      "260 - 560 SEL",
      "500 - 600 SEC Coupé",
      "Trieda A",
      "A",
      "A L",
      "AMG GT",
      "Trieda B",
      "Trieda C",
      "C",
      "C Sportcoupé",
      "C T",
      "Citan",
      "CL",
      "CL",
      "CLA",
      "CLC",
      "CLK Cabrio",
      "CLK Coupé",
      "CLS",
      "Trieda E",
      "E",
      "E Cabrio",
      "E Coupé",
      "E T",
      "Trieda G",
      "G Cabrio",
      "GL",
      "GLA",
      "GLC",
      "GLE",
      "GLK",
      "Trieda M",
      "MB 100",
      "Trieda R",
      "Trieda S",
      "S",
      "S Coupé",
      "SL",
      "SLC",
      "SLK",
      "SLR",
      "Sprinter",
    ],
  },
  {
    brand: "Saab",
    models: [
      "9-3",
      "9-3 Cabriolet",
      "9-3 Coupé",
      "9-3 SportCombi",
      "9-5",
      "9-5 SportCombi",
      "900",
      "900 C",
      "900 C Turbo",
      "9000",
    ],
  },
  {
    brand: "Audi",
    models: [
      "100",
      "100 Avant",
      "80",
      "80 Avant",
      "80 Cabrio",
      "90",
      "A1",
      "A2",
      "A3",
      "A3 Cabriolet",
      "A3 Limuzina",
      "A3 Sportback",
      "A4",
      "A4 Allroad",
      "A4 Avant",
      "A4 Cabriolet",
      "A5",
      "A5 Cabriolet",
      "A5 Sportback",
      "A6",
      "A6 Allroad",
      "A6 Avant",
      "A7",
      "A8",
      "A8 Long",
      "Q3",
      "Q5",
      "Q7",
      "R8",
      "RS4 Cabriolet",
      "RS4/RS4 Avant",
      "RS5",
      "RS6 Avant",
      "RS7",
      "S3/S3 Sportback",
      "S4 Cabriolet",
      "S4/S4 Avant",
      "S5/S5 Cabriolet",
      "S6/RS6",
      "S7",
      "S8",
      "SQ5",
      "TT Coupé",
      "TT Roadster",
      "TTS",
    ],
  },
  {
    brand: "Kia",
    models: [
      "Avella",
      "Besta",
      "Carens",
      "Carnival",
      "Cee`d",
      "Cee`d SW",
      "Cerato",
      "K 2500",
      "Magentis",
      "Opirus",
      "Optima",
      "Picanto",
      "Pregio",
      "Pride",
      "Pro Cee`d",
      "Rio",
      "Rio Combi",
      "Rio sedan",
      "Sephia",
      "Shuma",
      "Sorento",
      "Soul",
      "Sportage",
      "Venga",
    ],
  },
  {
    brand: "Land Rover",
    models: [
      "109",
      "Defender",
      "Discovery",
      "Discovery Sport",
      "Freelander",
      "Range Rover",
      "Range Rover Evoque",
      "Range Rover Sport",
    ],
  },
  {
    brand: "Dodge",
    models: [
      "Avenger",
      "Caliber",
      "Challenger",
      "Charger",
      "Grand Caravan",
      "Journey",
      "Magnum",
      "Nitro",
      "RAM",
      "Stealth",
      "Viper",
    ],
  },
  {
    brand: "Chrysler",
    models: [
      "300 C",
      "300 C Touring",
      "300 M",
      "Crossfire",
      "Grand Voyager",
      "LHS",
      "Neon",
      "Pacifica",
      "Plymouth",
      "PT Cruiser",
      "Sebring",
      "Sebring Convertible",
      "Stratus",
      "Stratus Cabrio",
      "Town & Country",
      "Voyager",
    ],
  },
  {
    brand: "Ford",
    models: [
      "Aerostar",
      "B-Max",
      "C-Max",
      "Cortina",
      "Cougar",
      "Edge",
      "Escort",
      "Escort Cabrio",
      "Escort kombi",
      "Explorer",
      "F-150",
      "F-250",
      "Fiesta",
      "Focus",
      "Focus C-Max",
      "Focus CC",
      "Focus kombi",
      "Fusion",
      "Galaxy",
      "Grand C-Max",
      "Ka",
      "Kuga",
      "Maverick",
      "Mondeo",
      "Mondeo Combi",
      "Mustang",
      "Orion",
      "Puma",
      "Ranger",
      "S-Max",
      "Sierra",
      "Street Ka",
      "Tourneo Connect",
      "Tourneo Custom",
      "Transit",
      "Transit",
      "Transit Bus",
      "Transit Connect LWB",
      "Transit Courier",
      "Transit Custom",
      "Transit kombi",
      "Transit Tourneo",
      "Transit Valnik",
      "Transit Van",
      "Transit Van 350",
      "Windstar",
    ],
  },
  { brand: "Hummer", models: ["H2", "H3"] },
  {
    brand: "Hyundai",
    models: [
      "Accent",
      "Atos",
      "Atos Prime",
      "Coupé",
      "Elantra",
      "Galloper",
      "Genesis",
      "Getz",
      "Grandeur",
      "H 350",
      "H1",
      "H1 Bus",
      "H1 Van",
      "H200",
      "i10",
      "i20",
      "i30",
      "i30 CW",
      "i40",
      "i40 CW",
      "ix20",
      "ix35",
      "ix55",
      "Lantra",
      "Matrix",
      "Santa Fe",
      "Sonata",
      "Terracan",
      "Trajet",
      "Tucson",
      "Veloster",
    ],
  },
  { brand: "Infiniti", models: ["EX", "FX", "G", "G Coupé", "M", "Q", "QX"] },
  {
    brand: "Jaguar",
    models: [
      "Daimler",
      "F-Pace",
      "F-Type",
      "S-Type",
      "Sovereign",
      "X-Type",
      "X-type Estate",
      "XE",
      "XF",
      "XJ",
      "XJ12",
      "XJ6",
      "XJ8",
      "XJ8",
      "XJR",
      "XK",
      "XK8 Convertible",
      "XKR",
      "XKR Convertible",
    ],
  },
  {
    brand: "Jeep",
    models: [
      "Cherokee",
      "Commander",
      "Compass",
      "Grand Cherokee",
      "Patriot",
      "Renegade",
      "Wrangler",
    ],
  },
  {
    brand: "Nissan",
    models: [
      "100 NX",
      "200 SX",
      "350 Z",
      "350 Z Roadster",
      "370 Z",
      "Almera",
      "Almera Tino",
      "Cabstar E - T",
      "Cabstar TL2 Valnik",
      "e-NV200",
      "GT-R",
      "Insterstar",
      "Juke",
      "King Cab",
      "Leaf",
      "Maxima",
      "Maxima QX",
      "Micra",
      "Murano",
      "Navara",
      "Note",
      "NP300 Pickup",
      "NV200",
      "NV400",
      "Pathfinder",
      "Patrol",
      "Patrol GR",
      "Pickup",
      "Pixo",
      "Primastar",
      "Primastar Combi",
      "Primera",
      "Primera Combi",
      "Pulsar",
      "Qashqai",
      "Serena",
      "Sunny",
      "Terrano",
      "Tiida",
      "Trade",
      "Vanette Cargo",
      "X-Trail",
    ],
  },
  {
    brand: "Volvo",
    models: [
      "240",
      "340",
      "360",
      "460",
      "850",
      "850 kombi",
      "C30",
      "C70",
      "C70 Cabrio",
      "C70 Coupé",
      "S40",
      "S60",
      "S70",
      "S80",
      "S90",
      "V40",
      "V50",
      "V60",
      "V70",
      "V90",
      "XC60",
      "XC70",
      "XC90",
    ],
  },
  {
    brand: "Daewoo",
    models: [
      "Espero",
      "Kalos",
      "Lacetti",
      "Lanos",
      "Leganza",
      "Lublin",
      "Matiz",
      "Nexia",
      "Nubira",
      "Nubira kombi",
      "Racer",
      "Tacuma",
      "Tico",
    ],
  },
  {
    brand: "Fiat",
    models: [
      "1100",
      "126",
      "500",
      "500L",
      "500X",
      "850",
      "Barchetta",
      "Brava",
      "Cinquecento",
      "Coupé",
      "Croma",
      "Doblo",
      "Doblo Cargo",
      "Doblo Cargo Combi",
      "Ducato",
      "Ducato Van",
      "Ducato Kombi",
      "Ducato Podvozok",
      "Florino",
      "Florino Combi",
      "Freemont",
      "Grande Punto",
      "Idea",
      "Linea",
      "Marea",
      "Marea Weekend",
      "Multipla",
      "Palio Weekend",
      "Panda",
      "Panda Van",
      "Punto",
      "Punto Cabriolet",
      "Punto Evo",
      "Punto Van",
      "Qubo",
      "Scudo",
      "Scudo Van",
      "Scudo Kombi",
      "Sedici",
      "Seicento",
      "Stilo",
      "Stilo Multiwagon",
      "Strada",
      "Talento",
      "Tipo",
      "Ulysse",
      "Uno",
      "X1/9",
    ],
  },
  {
    brand: "MINI",
    models: [
      "Cooper",
      "Cooper Cabrio",
      "Cooper Clubman",
      "Cooper D",
      "Cooper D Clubman",
      "Cooper S",
      "Cooper S Cabrio",
      "Cooper S Clubman",
      "Countryman",
      "Mini One",
      "One D",
    ],
  },
  {
    brand: "Rover",
    models: ["200", "214", "218", "25", "400", "414", "416", "620", "75"],
  },
  {
    brand: "Smart",
    models: [
      "Cabrio",
      "City-Coupé",
      "Compact Pulse",
      "Forfour",
      "Fortwo cabrio",
      "Fortwo coupé",
      "Roadster",
    ],
  },
];

export const countries = [
  { code: "AM", label: "Հայաստան", phone: "374" },
  {
    code: "JP",
    label: "Ճապոնիա",
    phone: "81",
    suggested: true,
  },
  {
    code: "DE",
    label: "Գերմանիա",
    phone: "49",
    suggested: true,
  },
  { code: "GE", label: "Վրաստան", phone: "995" },
  { code: "RU", label: "Ռուսաստան", phone: "7" },
  {
    code: "AE",
    label: "ԱՄԷ",
    phone: "971",
  },
  {
    code: "US",
    label: "ԱՄՆ",
    phone: "1",
    suggested: true,
  },
  {
    code: "KP",
    label: "Հարավային Կորեա",
    phone: "850",
  },

  { code: "CN", label: "Չինաստան", phone: "86" },
  // { code: "AD", label: "Andorra", phone: "376" },

  // { code: "AF", label: "Afghanistan", phone: "93" },
  // {
  //   code: "AG",
  //   label: "Antigua and Barbuda",
  //   phone: "1-268",
  // },
  // { code: "AI", label: "Anguilla", phone: "1-264" },
  // { code: "AL", label: "Albania", phone: "355" },
  // { code: "AO", label: "Angola", phone: "244" },
  // { code: "AQ", label: "Antarctica", phone: "672" },
  // { code: "AR", label: "Argentina", phone: "54" },
  // { code: "AS", label: "American Samoa", phone: "1-684" },
  // { code: "AT", label: "Austria", phone: "43" },
  // {
  //   code: "AU",
  //   label: "Australia",
  //   phone: "61",
  //   suggested: true,
  // },
  // { code: "AW", label: "Aruba", phone: "297" },
  // { code: "AX", label: "Alland Islands", phone: "358" },
  // { code: "AZ", label: "Azerbaijan", phone: "994" },
  // {
  //   code: "BA",
  //   label: "Bosnia and Herzegovina",
  //   phone: "387",
  // },
  // { code: "BB", label: "Barbados", phone: "1-246" },
  // { code: "BD", label: "Bangladesh", phone: "880" },
  // { code: "BE", label: "Belgium", phone: "32" },
  // { code: "BF", label: "Burkina Faso", phone: "226" },
  // { code: "BG", label: "Bulgaria", phone: "359" },
  // { code: "BH", label: "Bahrain", phone: "973" },
  // { code: "BI", label: "Burundi", phone: "257" },
  // { code: "BJ", label: "Benin", phone: "229" },
  // { code: "BL", label: "Saint Barthelemy", phone: "590" },
  // { code: "BM", label: "Bermuda", phone: "1-441" },
  // { code: "BN", label: "Brunei Darussalam", phone: "673" },
  // { code: "BO", label: "Bolivia", phone: "591" },
  // { code: "BR", label: "Brazil", phone: "55" },
  // { code: "BS", label: "Bahamas", phone: "1-242" },
  // { code: "BT", label: "Bhutan", phone: "975" },
  // { code: "BV", label: "Bouvet Island", phone: "47" },
  // { code: "BW", label: "Botswana", phone: "267" },
  // { code: "BY", label: "Belarus", phone: "375" },
  // { code: "BZ", label: "Belize", phone: "501" },
  // {
  //   code: "CA",
  //   label: "Canada",
  //   phone: "1",
  //   suggested: true,
  // },
  // {
  //   code: "CC",
  //   label: "Cocos (Keeling) Islands",
  //   phone: "61",
  // },
  // {
  //   code: "CD",
  //   label: "Congo, Democratic Republic of the",
  //   phone: "243",
  // },
  // {
  //   code: "CF",
  //   label: "Central African Republic",
  //   phone: "236",
  // },
  // {
  //   code: "CG",
  //   label: "Congo, Republic of the",
  //   phone: "242",
  // },
  // { code: "CH", label: "Switzerland", phone: "41" },
  // { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  // { code: "CK", label: "Cook Islands", phone: "682" },
  // { code: "CL", label: "Chile", phone: "56" },
  // { code: "CM", label: "Cameroon", phone: "237" },
  // { code: "CO", label: "Colombia", phone: "57" },
  // { code: "CR", label: "Costa Rica", phone: "506" },
  // { code: "CU", label: "Cuba", phone: "53" },
  // { code: "CV", label: "Cape Verde", phone: "238" },
  // { code: "CW", label: "Curacao", phone: "599" },
  // { code: "CX", label: "Christmas Island", phone: "61" },
  // { code: "CY", label: "Cyprus", phone: "357" },
  // { code: "CZ", label: "Czech Republic", phone: "420" },

  // { code: "DJ", label: "Djibouti", phone: "253" },
  // { code: "DK", label: "Denmark", phone: "45" },
  // { code: "DM", label: "Dominica", phone: "1-767" },
  // {
  //   code: "DO",
  //   label: "Dominican Republic",
  //   phone: "1-809",
  // },
  // { code: "DZ", label: "Algeria", phone: "213" },
  // { code: "EC", label: "Ecuador", phone: "593" },
  // { code: "EE", label: "Estonia", phone: "372" },
  // { code: "EG", label: "Egypt", phone: "20" },
  // { code: "EH", label: "Western Sahara", phone: "212" },
  // { code: "ER", label: "Eritrea", phone: "291" },
  // { code: "ES", label: "Spain", phone: "34" },
  // { code: "ET", label: "Ethiopia", phone: "251" },
  // { code: "FI", label: "Finland", phone: "358" },
  // { code: "FJ", label: "Fiji", phone: "679" },
  // {
  //   code: "FK",
  //   label: "Falkland Islands (Malvinas)",
  //   phone: "500",
  // },
  // {
  //   code: "FM",
  //   label: "Micronesia, Federated States of",
  //   phone: "691",
  // },
  // { code: "FO", label: "Faroe Islands", phone: "298" },
  // {
  //   code: "FR",
  //   label: "France",
  //   phone: "33",
  //   suggested: true,
  // },
  // { code: "GA", label: "Gabon", phone: "241" },
  // { code: "GB", label: "United Kingdom", phone: "44" },
  // { code: "GD", label: "Grenada", phone: "1-473" },
  // { code: "GF", label: "French Guiana", phone: "594" },
  // { code: "GG", label: "Guernsey", phone: "44" },
  // { code: "GH", label: "Ghana", phone: "233" },
  // { code: "GI", label: "Gibraltar", phone: "350" },
  // { code: "GL", label: "Greenland", phone: "299" },
  // { code: "GM", label: "Gambia", phone: "220" },
  // { code: "GN", label: "Guinea", phone: "224" },
  // { code: "GP", label: "Guadeloupe", phone: "590" },
  // { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  // { code: "GR", label: "Greece", phone: "30" },
  // {
  //   code: "GS",
  //   label: "South Georgia and the South Sandwich Islands",
  //   phone: "500",
  // },
  // { code: "GT", label: "Guatemala", phone: "502" },
  // { code: "GU", label: "Guam", phone: "1-671" },
  // { code: "GW", label: "Guinea-Bissau", phone: "245" },
  // { code: "GY", label: "Guyana", phone: "592" },
  // { code: "HK", label: "Hong Kong", phone: "852" },
  // {
  //   code: "HM",
  //   label: "Heard Island and McDonald Islands",
  //   phone: "672",
  // },
  // { code: "HN", label: "Honduras", phone: "504" },
  // { code: "HR", label: "Croatia", phone: "385" },
  // { code: "HT", label: "Haiti", phone: "509" },
  // { code: "HU", label: "Hungary", phone: "36" },
  // { code: "ID", label: "Indonesia", phone: "62" },
  // { code: "IE", label: "Ireland", phone: "353" },
  // { code: "IL", label: "Israel", phone: "972" },
  // { code: "IM", label: "Isle of Man", phone: "44" },
  // { code: "IN", label: "India", phone: "91" },
  // {
  //   code: "IO",
  //   label: "British Indian Ocean Territory",
  //   phone: "246",
  // },
  // { code: "IQ", label: "Iraq", phone: "964" },
  // {
  //   code: "IR",
  //   label: "Iran, Islamic Republic of",
  //   phone: "98",
  // },
  // { code: "IS", label: "Iceland", phone: "354" },
  // { code: "IT", label: "Italy", phone: "39" },
  // { code: "JE", label: "Jersey", phone: "44" },
  // { code: "JM", label: "Jamaica", phone: "1-876" },
  // { code: "JO", label: "Jordan", phone: "962" },

  // { code: "KE", label: "Kenya", phone: "254" },
  // { code: "KG", label: "Kyrgyzstan", phone: "996" },
  // { code: "KH", label: "Cambodia", phone: "855" },
  // { code: "KI", label: "Kiribati", phone: "686" },
  // { code: "KM", label: "Comoros", phone: "269" },
  // {
  //   code: "KN",
  //   label: "Saint Kitts and Nevis",
  //   phone: "1-869",
  // },

  // { code: "KR", label: "Korea, Republic of", phone: "82" },
  // { code: "KW", label: "Kuwait", phone: "965" },
  // { code: "KY", label: "Cayman Islands", phone: "1-345" },
  // { code: "KZ", label: "Kazakhstan", phone: "7" },
  // {
  //   code: "LA",
  //   label: "Lao People's Democratic Republic",
  //   phone: "856",
  // },
  // { code: "LB", label: "Lebanon", phone: "961" },
  // { code: "LC", label: "Saint Lucia", phone: "1-758" },
  // { code: "LI", label: "Liechtenstein", phone: "423" },
  // { code: "LK", label: "Sri Lanka", phone: "94" },
  // { code: "LR", label: "Liberia", phone: "231" },
  // { code: "LS", label: "Lesotho", phone: "266" },
  // { code: "LT", label: "Lithuania", phone: "370" },
  // { code: "LU", label: "Luxembourg", phone: "352" },
  // { code: "LV", label: "Latvia", phone: "371" },
  // { code: "LY", label: "Libya", phone: "218" },
  // { code: "MA", label: "Morocco", phone: "212" },
  // { code: "MC", label: "Monaco", phone: "377" },
  // {
  //   code: "MD",
  //   label: "Moldova, Republic of",
  //   phone: "373",
  // },
  // { code: "ME", label: "Montenegro", phone: "382" },
  // {
  //   code: "MF",
  //   label: "Saint Martin (French part)",
  //   phone: "590",
  // },
  // { code: "MG", label: "Madagascar", phone: "261" },
  // { code: "MH", label: "Marshall Islands", phone: "692" },
  // {
  //   code: "MK",
  //   label: "Macedonia, the Former Yugoslav Republic of",
  //   phone: "389",
  // },
  // { code: "ML", label: "Mali", phone: "223" },
  // { code: "MM", label: "Myanmar", phone: "95" },
  // { code: "MN", label: "Mongolia", phone: "976" },
  // { code: "MO", label: "Macao", phone: "853" },
  // {
  //   code: "MP",
  //   label: "Northern Mariana Islands",
  //   phone: "1-670",
  // },
  // { code: "MQ", label: "Martinique", phone: "596" },
  // { code: "MR", label: "Mauritania", phone: "222" },
  // { code: "MS", label: "Montserrat", phone: "1-664" },
  // { code: "MT", label: "Malta", phone: "356" },
  // { code: "MU", label: "Mauritius", phone: "230" },
  // { code: "MV", label: "Maldives", phone: "960" },
  // { code: "MW", label: "Malawi", phone: "265" },
  // { code: "MX", label: "Mexico", phone: "52" },
  // { code: "MY", label: "Malaysia", phone: "60" },
  // { code: "MZ", label: "Mozambique", phone: "258" },
  // { code: "NA", label: "Namibia", phone: "264" },
  // { code: "NC", label: "New Caledonia", phone: "687" },
  // { code: "NE", label: "Niger", phone: "227" },
  // { code: "NF", label: "Norfolk Island", phone: "672" },
  // { code: "NG", label: "Nigeria", phone: "234" },
  // { code: "NI", label: "Nicaragua", phone: "505" },
  // { code: "NL", label: "Netherlands", phone: "31" },
  // { code: "NO", label: "Norway", phone: "47" },
  // { code: "NP", label: "Nepal", phone: "977" },
  // { code: "NR", label: "Nauru", phone: "674" },
  // { code: "NU", label: "Niue", phone: "683" },
  // { code: "NZ", label: "New Zealand", phone: "64" },
  // { code: "OM", label: "Oman", phone: "968" },
  // { code: "PA", label: "Panama", phone: "507" },
  // { code: "PE", label: "Peru", phone: "51" },
  // { code: "PF", label: "French Polynesia", phone: "689" },
  // { code: "PG", label: "Papua New Guinea", phone: "675" },
  // { code: "PH", label: "Philippines", phone: "63" },
  // { code: "PK", label: "Pakistan", phone: "92" },
  // { code: "PL", label: "Poland", phone: "48" },
  // {
  //   code: "PM",
  //   label: "Saint Pierre and Miquelon",
  //   phone: "508",
  // },
  // { code: "PN", label: "Pitcairn", phone: "870" },
  // { code: "PR", label: "Puerto Rico", phone: "1" },
  // {
  //   code: "PS",
  //   label: "Palestine, State of",
  //   phone: "970",
  // },
  // { code: "PT", label: "Portugal", phone: "351" },
  // { code: "PW", label: "Palau", phone: "680" },
  // { code: "PY", label: "Paraguay", phone: "595" },
  // { code: "QA", label: "Qatar", phone: "974" },
  // { code: "RE", label: "Reunion", phone: "262" },
  // { code: "RO", label: "Romania", phone: "40" },
  // { code: "RS", label: "Serbia", phone: "381" },
  // { code: "RW", label: "Rwanda", phone: "250" },
  // { code: "SA", label: "Saudi Arabia", phone: "966" },
  // { code: "SB", label: "Solomon Islands", phone: "677" },
  // { code: "SC", label: "Seychelles", phone: "248" },
  // { code: "SD", label: "Sudan", phone: "249" },
  // { code: "SE", label: "Sweden", phone: "46" },
  // { code: "SG", label: "Singapore", phone: "65" },
  // { code: "SH", label: "Saint Helena", phone: "290" },
  // { code: "SI", label: "Slovenia", phone: "386" },
  // {
  //   code: "SJ",
  //   label: "Svalbard and Jan Mayen",
  //   phone: "47",
  // },
  // { code: "SK", label: "Slovakia", phone: "421" },
  // { code: "SL", label: "Sierra Leone", phone: "232" },
  // { code: "SM", label: "San Marino", phone: "378" },
  // { code: "SN", label: "Senegal", phone: "221" },
  // { code: "SO", label: "Somalia", phone: "252" },
  // { code: "SR", label: "Suriname", phone: "597" },
  // { code: "SS", label: "South Sudan", phone: "211" },
  // {
  //   code: "ST",
  //   label: "Sao Tome and Principe",
  //   phone: "239",
  // },
  // { code: "SV", label: "El Salvador", phone: "503" },
  // {
  //   code: "SX",
  //   label: "Sint Maarten (Dutch part)",
  //   phone: "1-721",
  // },
  // {
  //   code: "SY",
  //   label: "Syrian Arab Republic",
  //   phone: "963",
  // },
  // { code: "SZ", label: "Swaziland", phone: "268" },
  // {
  //   code: "TC",
  //   label: "Turks and Caicos Islands",
  //   phone: "1-649",
  // },
  // { code: "TD", label: "Chad", phone: "235" },
  // {
  //   code: "TF",
  //   label: "French Southern Territories",
  //   phone: "262",
  // },
  // { code: "TG", label: "Togo", phone: "228" },
  // { code: "TH", label: "Thailand", phone: "66" },
  // { code: "TJ", label: "Tajikistan", phone: "992" },
  // { code: "TK", label: "Tokelau", phone: "690" },
  // { code: "TL", label: "Timor-Leste", phone: "670" },
  // { code: "TM", label: "Turkmenistan", phone: "993" },
  // { code: "TN", label: "Tunisia", phone: "216" },
  // { code: "TO", label: "Tonga", phone: "676" },
  // { code: "TR", label: "Turkey", phone: "90" },
  // {
  //   code: "TT",
  //   label: "Trinidad and Tobago",
  //   phone: "1-868",
  // },
  // { code: "TV", label: "Tuvalu", phone: "688" },
  // {
  //   code: "TW",
  //   label: "Taiwan, Republic of China",
  //   phone: "886",
  // },
  // {
  //   code: "TZ",
  //   label: "United Republic of Tanzania",
  //   phone: "255",
  // },
  // { code: "UA", label: "Ukraine", phone: "380" },
  // { code: "UG", label: "Uganda", phone: "256" },

  // { code: "UY", label: "Uruguay", phone: "598" },
  // { code: "UZ", label: "Uzbekistan", phone: "998" },
  // {
  //   code: "VA",
  //   label: "Holy See (Vatican City State)",
  //   phone: "379",
  // },
  // {
  //   code: "VC",
  //   label: "Saint Vincent and the Grenadines",
  //   phone: "1-784",
  // },
  // { code: "VE", label: "Venezuela", phone: "58" },
  // {
  //   code: "VG",
  //   label: "British Virgin Islands",
  //   phone: "1-284",
  // },
  // {
  //   code: "VI",
  //   label: "US Virgin Islands",
  //   phone: "1-340",
  // },
  // { code: "VN", label: "Vietnam", phone: "84" },
  // { code: "VU", label: "Vanuatu", phone: "678" },
  // { code: "WF", label: "Wallis and Futuna", phone: "681" },
  // { code: "WS", label: "Samoa", phone: "685" },
  // { code: "XK", label: "Kosovo", phone: "383" },
  // { code: "YE", label: "Yemen", phone: "967" },
  // { code: "YT", label: "Mayotte", phone: "262" },
  // { code: "ZA", label: "South Africa", phone: "27" },
  // { code: "ZM", label: "Zambia", phone: "260" },
  // { code: "ZW", label: "Zimbabwe", phone: "263" },
];
