const teamBadges = {
  "DSHS SnowTrex Köln": {
    "short": "DSK",
    "color": "#0D6FB8",
    "text": "#FFFFFF"
  },
  "Eintracht Spontent Düsseldorf": {
    "short": "ESD",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "ESA Grimma Volleys": {
    "short": "EGV",
    "color": "#C3C3C3",
    "text": "#111111"
  },
  "BayerVolleys Leverkusen": {
    "short": "BVL",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "NawaRo Straubing": {
    "short": "STR",
    "color": "#EE7101",
    "text": "#FFFFFF"
  },
  "Neuseenland-Volleys Markkleeberg": {
    "short": "NVM",
    "color": "#65B32E",
    "text": "#FFFFFF"
  },
  "Sparkassen Wildcats Stralsund": {
    "short": "SWS",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "TV Planegg-Krailling": {
    "short": "TVP",
    "color": "#A4CFA1",
    "text": "#111111"
  },
  "TV Waldgirmes": {
    "short": "TVW",
    "color": "#3898CF",
    "text": "#FFFFFF"
  },
  "VCO Dresden": {
    "short": "VCO",
    "color": "#009CD0",
    "text": "#FFFFFF"
  },
  "VfL Oythe": {
    "short": "OYT",
    "color": "#E31825",
    "text": "#FFFFFF"
  },
  "Rote Raben Vilsbiburg": {
    "short": "RRV",
    "color": "#E20010",
    "text": "#FFFFFF"
  },
  "BBSC Berlin": {
    "short": "BER",
    "color": "#D70079",
    "text": "#FFFFFF"
  },
  "TV Dingolfing": {
    "short": "TVD",
    "color": "#E0B187",
    "text": "#111111"
  },
  "TV Hörde": {
    "short": "TVH",
    "color": "#111111",
    "text": "#FFFFFF"
  }
};

const teamProfileUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308895",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776311815",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308803",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308933",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308823",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309559",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309386",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309673",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309795",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309105",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308853",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309082",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308987",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309004",
  "TV Hörde": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309275"
};

const teamLogoUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/uploads/9d7057ef-e7c8-4d41-9c70-3efce1b653a3/DSHS+SnowTrex+K%C3%B6ln.png",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/uploads/131fc503-06e0-4f69-a475-84adf278b0d9/BBSC+Berlin.png",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/uploads/bb11fe67-9f40-49ed-a42f-1e99316dadf9/Bayer+Leverkusen.png",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/uploads/e1c6edbd-64a5-4055-8f01-28c03e70f558/ESA+Grimma+Volleys_kreis.png",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/uploads/11eb6af6-6268-4767-8c60-813b6161d2fc/Eintracht+Spontent_Kreis.png",
  "TV Hörde": "https://www.volleyball-bundesliga.de/uploads/0a049112-a6b6-49b9-8e9d-38f09c907cb7/TV+H%C3%B6rde.png",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/uploads/10c17d7b-d082-4d7d-a4e0-f1d800544ff8/oythe.png",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/uploads/825c2558-e734-45c0-a93d-261df75fb4c3/Straubing.png",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/uploads/befce1b4-d568-4ffd-928a-d351be3301eb/Neuseenland-Volleys+Markkleeberg.png",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/uploads/19de3821-7526-4e46-a0b9-9cd60bf0535e/Vilsbiburg.png",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/uploads/edc53223-6279-497b-8f0c-a3b2bf93eed8/Sparkassen+Wildcats+Stralsund.png",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/uploads/b87f5e38-7eb4-4966-84a1-be0e4839f151/TV+Dingolfing.png",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/uploads/c44d2e47-3206-4312-ac8e-067faff3ac85/Planegg-Krailling_Kreis.png",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/uploads/89cb6afe-a0c8-4c30-a4c6-34cbe79176aa/TV_Waldgirmes_kreis.png",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/uploads/33ebca47-ee88-4505-80a3-8f625a651bdc/Dresden.png"
};

const matchArticles = {
  "3004": [
    {
      "title": "Eintracht Spontent erkämpft Punkt.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778429330",
      "origin": "ESD"
    },
    {
      "title": "Saisonauftakt geglückt: NawaRo setzt sich",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778408614",
      "origin": "STR"
    },
    {
      "title": "Saisonauftakt in Düsseldorf",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778383087",
      "origin": "ESD"
    },
    {
      "title": "Das Warten hat ein Ende",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778383050",
      "origin": "STR"
    }
  ],
  "3009": [
    {
      "title": "Heimspielauftakt geglückt",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778488295",
      "origin": "TVP"
    },
    {
      "title": "Heimspielpremiere in der 2. Liga Pro",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778438626",
      "origin": "TVP"
    }
  ],
  "3018": [
    {
      "title": "Knapp am Punktgewinn vorbei.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778607710",
      "origin": "ESD"
    },
    {
      "title": "Nervenstark zum Derbysieg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778578046",
      "origin": "DSK"
    },
    {
      "title": "Köln gastiert bei Eintracht Spontent",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778548365",
      "origin": "DSK"
    },
    {
      "title": "Zweites Heimspiel für die Eintracht.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778545520",
      "origin": "ESD"
    }
  ],
  "3028": [
    {
      "title": "Heimpremiere gegen Düsseldorf",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778598774",
      "origin": "TVD"
    }
  ],
  "3032": [
    {
      "title": "Erschöpft und das hat man gesehen",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778812821",
      "origin": "TVH"
    },
    {
      "title": "Eintracht Spontent schlägt Hörde souverän.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778810850",
      "origin": "ESD"
    },
    {
      "title": "Dortmund zu Gast in Düsseldorf.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778773865",
      "origin": "ESD"
    }
  ],
  "3040": [],
  "3043": [
    {
      "title": "Waldgirmes dreht das Spiel",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779286379",
      "origin": "TVW"
    },
    {
      "title": "Nach dem Pokalspiel ist vor dem Liga Spiel…",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779254320",
      "origin": "TVW"
    }
  ],
  "3053": [
    {
      "title": "Volleys fehlt in Düsseldorf der Rhythmus",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779396672",
      "origin": "BVL"
    },
    {
      "title": "Verdienter 3:0 Heimsieg.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779395028",
      "origin": "ESD"
    },
    {
      "title": "Derby in Düsseldorf.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779352993",
      "origin": "ESD"
    },
    {
      "title": "Erkältungswelle hat Volleys im Griff",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779350528",
      "origin": "BVL"
    }
  ],
  "3058": [
    {
      "title": "VfL Oythe wird Favoritenrolle gerecht",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779482999",
      "origin": "OYT"
    },
    {
      "title": "Der nächste Aufsteiger kommt zu Gast",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779410414",
      "origin": "OYT"
    }
  ],
  "3067": [
    {
      "title": "Einen Punkt verschenkt.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779628212",
      "origin": "ESD"
    },
    {
      "title": "Immerhin ein Auswärtspunkt",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779597802",
      "origin": "NVM"
    },
    {
      "title": "Markkleeberg zu Gast.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779576010",
      "origin": "ESD"
    },
    {
      "title": "Am 2. Advent Auswärtsspiel in Düsseldorf",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779542747",
      "origin": "NVM"
    }
  ],
  "3076": [
    {
      "title": "Raben bleiben zu Hause weiter ungeschlagen…",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779695655",
      "origin": "RRV"
    },
    {
      "title": "Rote Raben peilen Dreier an",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779678112",
      "origin": "RRV"
    }
  ],
  "3081": [
    {
      "title": "Drei Punkte unter dem Weihnachtsbaum.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779815586",
      "origin": "ESD"
    },
    {
      "title": "Berlin zu Gast.",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779770956",
      "origin": "ESD"
    }
  ],
  "3088": [
    {
      "title": "Wieder Fünf Sätze",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778886511",
      "origin": "SWS"
    },
    {
      "title": "Die nächsten Punkte sollen aufs Konto",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778862007",
      "origin": "SWS"
    }
  ],
  "3095": [
    {
      "title": "3:1-Heimsieg über Düsseldorf",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780004838",
      "origin": "STR"
    },
    {
      "title": "Doppel-Heimspielwochenende",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779989063",
      "origin": "STR"
    }
  ],
  "3100": [],
  "3109": [
    {
      "title": "Sechster Sieg in Folge",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780203090",
      "origin": "DSK"
    },
    {
      "title": "Rheinderby in Halle 22",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780164270",
      "origin": "DSK"
    }
  ],
  "3119": [
    {
      "title": "Auswärts-Wochenende ohne Punktgewinn",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780298858",
      "origin": "TVD"
    }
  ],
  "3123": [
    {
      "title": "Verbesserung auf dem Feld und Ergebnis",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780407507",
      "origin": "TVH"
    },
    {
      "title": "Mit Stimmung zum Erfolg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780352644",
      "origin": "TVH"
    }
  ],
  "3131": [],
  "3134": [],
  "3144": [
    {
      "title": "Volleys erleiden einen Dämpfer",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780759531",
      "origin": "BVL"
    },
    {
      "title": "Volleys befinden sich vor Derby im Aufwind…",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780720813",
      "origin": "BVL"
    }
  ],
  "3149": [],
  "3158": [
    {
      "title": "Leider nur ein Satzgewinn",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781009586",
      "origin": "NVM"
    },
    {
      "title": "Bedeutungsvolles Heimspiel",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780961141",
      "origin": "NVM"
    }
  ],
  "3167": [
    {
      "title": "Souveräner Auftritt der Roten Raben",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781153542",
      "origin": "RRV"
    }
  ],
  "3172": [
    {
      "title": "BBSC holt 2 Sätze beim Saisonhöhepunkt",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780829959",
      "origin": "BER"
    },
    {
      "title": "Saisonhöhepunkt für den BBSC",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780781304",
      "origin": "BER"
    }
  ],
  "3179": [
    {
      "title": "Zum Saisonabschluss noch ein Sieg",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781386693",
      "origin": "SWS"
    },
    {
      "title": "Konstanz in der Leistung fehlt",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781353801",
      "origin": "SWS"
    }
  ],
  "3189": [
    {
      "title": "VCO Dresden siegt 3:0 nach Achterbahnfahrt…",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779021406",
      "origin": "VCO"
    },
    {
      "title": "Erste Heimspiele an diesem Wochenende",
      "url": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778979204",
      "origin": "VCO"
    }
  ],
  "3203": []
};

const officialReportUrls = {
  "3004": "https://distributor.sams-score.de/scoresheet/pdf/208332e9-b3a9-43e5-aad4-34a82f56af84/3004",
  "3009": "https://distributor.sams-score.de/scoresheet/pdf/1b232d69-e718-4f66-a8ef-9df3b548d64d/3009",
  "3018": "https://distributor.sams-score.de/scoresheet/pdf/600448d6-814e-4936-a245-5248306bd6b0/3018",
  "3028": "https://distributor.sams-score.de/scoresheet/pdf/f1291a8d-ae79-448f-81c5-c9d8b1c983f6/3028",
  "3032": "https://distributor.sams-score.de/scoresheet/pdf/92f41024-13c1-443e-8757-2a198753c4ae/3032",
  "3040": "https://distributor.sams-score.de/scoresheet/pdf/276f2a7f-1091-4304-80bb-aac64dc48b32/3040",
  "3043": "https://distributor.sams-score.de/scoresheet/pdf/3facf766-7220-4769-b191-f53f57d1fc69/3043",
  "3053": "https://distributor.sams-score.de/scoresheet/pdf/62623b2e-05ad-4a4c-9104-26e02c389738/3053",
  "3058": "https://distributor.sams-score.de/scoresheet/pdf/e8bc6b01-f11a-4f5b-8fc4-5ca807edd6c3/3058",
  "3067": "https://distributor.sams-score.de/scoresheet/pdf/ac49b905-8f5d-491f-b407-df09409be118/3067",
  "3076": "https://distributor.sams-score.de/scoresheet/pdf/57c5dc88-7f05-4e6b-a675-94b9693aff50/3076",
  "3081": "https://distributor.sams-score.de/scoresheet/pdf/5f5c6ac3-95fa-4b8c-ad93-8e0103adbdbd/3081",
  "3088": "https://distributor.sams-score.de/scoresheet/pdf/6d38c358-c2da-4c56-8401-8138d7515574/3088",
  "3095": "https://distributor.sams-score.de/scoresheet/pdf/d747dc17-4ece-4eb8-be7c-ed54649eace0/3095",
  "3100": "https://distributor.sams-score.de/scoresheet/pdf/c9aeb1ab-2860-4275-9c53-a29cd757c8f0/3100",
  "3109": "https://distributor.sams-score.de/scoresheet/pdf/1c768949-b202-4b06-b2ca-75c6b4365065/3109",
  "3119": "https://distributor.sams-score.de/scoresheet/pdf/1092efa0-8cc8-4bce-89c9-398956a3a687/3119",
  "3123": "https://distributor.sams-score.de/scoresheet/pdf/ee00f50d-6d33-4767-8a04-53420d7c1c9d/3123",
  "3131": "https://distributor.sams-score.de/scoresheet/pdf/d2ac2149-ae88-4ee5-b49c-aa1555a79f7a/3131",
  "3134": "https://distributor.sams-score.de/scoresheet/pdf/7f081514-2bd6-4a1c-914b-8dda32bd7738/3134",
  "3144": "https://distributor.sams-score.de/scoresheet/pdf/da40e47b-7d0d-4a9d-80b7-381f187099c3/3144",
  "3149": "https://distributor.sams-score.de/scoresheet/pdf/65d2801d-27e8-4d1a-a9f3-9bc614f7dc41/3149",
  "3158": "https://distributor.sams-score.de/scoresheet/pdf/019782c4-d28a-4e94-9a36-187b5b6ccd97/3158",
  "3167": "https://distributor.sams-score.de/scoresheet/pdf/e934ffa2-84b4-4136-a09d-f184b199eeba/3167",
  "3172": "https://distributor.sams-score.de/scoresheet/pdf/347cecc5-0d98-469d-bf2b-78168fe6ffde/3172",
  "3179": "https://distributor.sams-score.de/scoresheet/pdf/036096d2-e30d-4344-bcd2-6cf83c33d22b/3179",
  "3189": "https://distributor.sams-score.de/scoresheet/pdf/b91174ef-fd31-43b6-9f22-d0a82cf8fe16/3189",
  "3203": "https://distributor.sams-score.de/scoresheet/pdf/177b3409-eafa-497f-b0e4-44ba86de4c0e/3203"
};

const unavailableStatistics = [
  3004, 3018, 3032, 3053, 3067, 3081, 3088,
  3100, 3119, 3131, 3134, 3149, 3167, 3179, 3203
];


const youtubeViewsDate = "25.06.2026";

const youtubeViews = {
  "3004": 15227,
  "3009": 4410,
  "3018": 8928,
  "3028": 4370,
  "3032": 7364,
  "3040": 2932,
  "3043": 2911,
  "3053": 3442,
  "3058": 1828,
  "3067": 4878,
  "3076": 1810,
  "3081": 5296,
  "3088": 4370,
  "3095": 1813,
  "3100": 3838,
  "3109": 2251,
  "3119": 3633,
  "3123": 2371,
  "3131": 5284,
  "3134": 3296,
  "3144": 1795,
  "3149": 4029,
  "3158": 2166,
  "3167": 3811,
  "3172": 4655,
  "3179": 3757,
  "3189": 4150,
  "3203": 2041
};

const finalStandingsSource = "VBL-Tabelle, Stand 06.05.2026";

const finalStandings = {
  "overall": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 28,
      "wins": 26,
      "sets": "80:11",
      "balls": "2215:1651",
      "points": 79
    },
    {
      "rank": 2,
      "team": "NawaRo Straubing",
      "played": 28,
      "wins": 24,
      "sets": "76:28",
      "balls": "2439:1973",
      "points": 72
    },
    {
      "rank": 3,
      "team": "VfL Oythe",
      "played": 28,
      "wins": 24,
      "sets": "75:32",
      "balls": "2485:2184",
      "points": 69
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 28,
      "wins": 22,
      "sets": "71:30",
      "balls": "2327:2023",
      "points": 63
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 28,
      "wins": 17,
      "sets": "65:45",
      "balls": "2422:2341",
      "points": 52
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 28,
      "wins": 15,
      "sets": "56:52",
      "balls": "2357:2400",
      "points": 45
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 28,
      "wins": 15,
      "sets": "55:53",
      "balls": "2358:2293",
      "points": 44
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 28,
      "wins": 14,
      "sets": "54:49",
      "balls": "2258:2248",
      "points": 42
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 28,
      "wins": 13,
      "sets": "49:59",
      "balls": "2282:2309",
      "points": 35
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 28,
      "wins": 11,
      "sets": "49:63",
      "balls": "2332:2464",
      "points": 35
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 28,
      "wins": 9,
      "sets": "43:67",
      "balls": "2284:2456",
      "points": 27
    },
    {
      "rank": 12,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 28,
      "wins": 7,
      "sets": "34:70",
      "balls": "2128:2386",
      "points": 21
    },
    {
      "rank": 13,
      "team": "TV Dingolfing",
      "played": 28,
      "wins": 5,
      "sets": "32:75",
      "balls": "2134:2493",
      "points": 18
    },
    {
      "rank": 14,
      "team": "TV Hörde",
      "played": 28,
      "wins": 4,
      "sets": "26:77",
      "balls": "2067:2405",
      "points": 16
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 28,
      "wins": 4,
      "sets": "24:78",
      "balls": "1968:2430",
      "points": 12
    }
  ],
  "home": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 14,
      "sets": "42:3",
      "balls": "1108:803",
      "points": 42
    },
    {
      "rank": 2,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 13,
      "sets": "41:10",
      "balls": "1229:1000",
      "points": 40
    },
    {
      "rank": 3,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1215:1018",
      "points": 35
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "34:15",
      "balls": "1121:975",
      "points": 31
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 8,
      "sets": "32:24",
      "balls": "1243:1190",
      "points": 24
    },
    {
      "rank": 6,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 8,
      "sets": "31:26",
      "balls": "1245:1165",
      "points": 24
    },
    {
      "rank": 7,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 8,
      "sets": "28:24",
      "balls": "1143:1119",
      "points": 23
    },
    {
      "rank": 8,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 7,
      "sets": "29:28",
      "balls": "1205:1241",
      "points": 21
    },
    {
      "rank": 9,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1162:1199",
      "points": 20
    },
    {
      "rank": 10,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1201:1165",
      "points": 19
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 5,
      "sets": "25:30",
      "balls": "1196:1187",
      "points": 18
    },
    {
      "rank": 12,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 5,
      "sets": "20:33",
      "balls": "1078:1210",
      "points": 14
    },
    {
      "rank": 13,
      "team": "TV Hörde",
      "played": 14,
      "wins": 4,
      "sets": "17:35",
      "balls": "1093:1199",
      "points": 13
    },
    {
      "rank": 14,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 4,
      "sets": "16:34",
      "balls": "1023:1145",
      "points": 11
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:38",
      "balls": "983:1195",
      "points": 7
    }
  ],
  "away": [
    {
      "rank": 1,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 13,
      "sets": "39:13",
      "balls": "1224:955",
      "points": 37
    },
    {
      "rank": 2,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 12,
      "sets": "38:8",
      "balls": "1107:848",
      "points": 37
    },
    {
      "rank": 3,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1206:1048",
      "points": 32
    },
    {
      "rank": 4,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 11,
      "sets": "34:22",
      "balls": "1256:1184",
      "points": 29
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 9,
      "sets": "33:21",
      "balls": "1179:1151",
      "points": 28
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 8,
      "sets": "29:24",
      "balls": "1195:1201",
      "points": 25
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 7,
      "sets": "24:27",
      "balls": "1113:1128",
      "points": 20
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 6,
      "sets": "26:25",
      "balls": "1115:1129",
      "points": 19
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 6,
      "sets": "22:31",
      "balls": "1081:1144",
      "points": 16
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 4,
      "sets": "20:35",
      "balls": "1127:1223",
      "points": 14
    },
    {
      "rank": 11,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 3,
      "sets": "18:36",
      "balls": "1105:1241",
      "points": 10
    },
    {
      "rank": 12,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 4,
      "sets": "18:37",
      "balls": "1088:1269",
      "points": 9
    },
    {
      "rank": 13,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:40",
      "balls": "985:1235",
      "points": 5
    },
    {
      "rank": 14,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 0,
      "sets": "12:42",
      "balls": "1056:1283",
      "points": 4
    },
    {
      "rank": 15,
      "team": "TV Hörde",
      "played": 14,
      "wins": 0,
      "sets": "9:42",
      "balls": "974:1206",
      "points": 3
    }
  ]
};

const playerProfileUrls = {
  "Carlotta Strube": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761",
  "Valbona Ismaili": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735",
  "Nora Harner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=767130990",
  "Lara Drölle": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117",
  "Emelie Siegner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100",
  "Franziska Koob": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854",
  "Hannah Mohr": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=767092260",
  "Vanessa Gorny": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=777566810",
  "Tara Fröhlich": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=762405115",
  "Zoe Albert": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233",
  "Meret Singer": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302",
  "Leonie Amann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234",
  "Lena Rößler": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=9573817",
  "Maria Petkova": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333",
  "Hannah Buß": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982676",
  "Tina De Groot": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545",
  "Anna-Lena Vogel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=44010163",
  "Maia Rackel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028",
  "Julia Ziegler": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=742449977",
  "Melanie Gosmann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=9969466",
  "Maya Lucia Kleinpeter": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=778128140",
  "Antonia Herpich": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=752403302",
  "Sophie Dreblow": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895",
  "Benja Lensing": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=69786660",
  "Tessa Müller": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=750792399",
  "Paula Reinisch": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655",
  "Emichika Tomoi": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895005",
  "Nele Fickenwirth": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=778191508",
  "Lena Olliges": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010",
  "Jenni Liu": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=59195178",
  "Gianna Limmroth": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=8663",
  "Amelie Grawert": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=70817295"
};

const gameSummaries = {
  "3004": [
    "Eintracht Spontent Düsseldorf unterlag zum Saisonauftakt dem Topteam NawaRo Straubing nach einem Volleyballkrimi mit 2:3.",
    "Die Gastgeberinnen führten zweimal nach Sätzen und begegneten Straubing über weite Strecken auf Augenhöhe.",
    "Im Tiebreak setzte sich NawaRo mit 15:12 durch, Düsseldorf sicherte sich für die leidenschaftliche Leistung aber einen verdienten Punkt."
  ],
  "3009": [
    "Düsseldorf verlor das Auswärtsspiel beim TV Planegg-Krailling deutlich mit 0:3.",
    "Zu Beginn war die Partie noch ausgeglichen, anschließend übernahm Planegg mit druckvollen Aufschlägen und starker Blockarbeit die Kontrolle.",
    "Die Gastgeberinnen steigerten ihre Überlegenheit von Satz zu Satz und ließen der Eintracht insgesamt nur 40 Ballpunkte."
  ],
  "3018": [
    "Eintracht Spontent Düsseldorf musste sich DSHS SnowTrex Köln zu Hause mit 1:3 geschlagen geben.",
    "Nach einem schwachen ersten Durchgang fand die Eintracht besser in die Partie und gewann den zweiten Satz mit 25:23.",
    "In den folgenden beiden Sätzen blieb Düsseldorf in Reichweite, doch Köln agierte in den entscheidenden Phasen stabiler und abgeklärter."
  ],
  "3028": [
    "Düsseldorf verlor die Auswärtspartie beim TV Dingolfing mit 1:3.",
    "Die Eintracht entschied den engen Auftaktsatz mit 26:24 für sich, danach übernahmen die Gastgeberinnen zunehmend das Spiel.",
    "Dingolfing gewann die folgenden drei Sätze immer deutlicher und ließ Düsseldorf in den letzten beiden Durchgängen nur 24 Ballpunkte."
  ],
  "3032": [
    "Eintracht Spontent gewann das Heimspiel gegen den TV Hörde klar mit 3:0.",
    "Hörde startete mit einer 4:0-Führung, doch Düsseldorf reagierte nach einer frühen Auszeit und setzte sich mit aggressiven, platzierten Angriffen durch.",
    "Der zweite Satz blieb bis zum Ende eng, bevor die Eintracht im dritten Durchgang wieder deutlich die Kontrolle übernahm."
  ],
  "3040": [
    "Düsseldorf unterlag den ESA Grimma Volleys auswärts mit 1:3.",
    "Nach zwei verlorenen Sätzen stemmte sich die Eintracht gegen die Niederlage und gewann einen umkämpften dritten Durchgang mit 29:27.",
    "Grimma fand im vierten Satz wieder zur klareren Linie und beendete die Partie mit 25:17."
  ],
  "3043": [
    "Eintracht Spontent verlor beim TV Waldgirmes trotz eines starken Beginns mit 1:3.",
    "Düsseldorf überzeugte im ersten Satz mit druckvollem Angriff und aufmerksamem Block und gewann deutlich mit 25:15.",
    "Waldgirmes stellte sich anschließend besser auf das Spiel der Gäste ein und entschied die folgenden drei Sätze zunehmend klar für sich."
  ],
  "3053": [
    "Düsseldorf gewann das Heimspiel gegen die BayerVolleys Leverkusen mit 3:0.",
    "Die personell geschwächten Gäste fanden nach schwierigen Trainingswochen nur selten ihren gewohnten Rhythmus, während die Eintracht konsequent Druck ausübte.",
    "Im dritten Satz wehrte Leverkusen sich noch einmal energisch, doch Düsseldorf vollendete den verdienten Erfolg mit 28:26."
  ],
  "3058": [
    "Eintracht Spontent unterlag dem favorisierten VfL Oythe auswärts mit 0:3.",
    "Düsseldorf startete mutig und brachte Oythe im ersten Satz mit variablem Aufschlagdruck zeitweise deutlich in Rückstand.",
    "Nach zwei frühen Auszeiten stabilisierten sich die Gastgeberinnen und kontrollierten den weiteren Verlauf der Partie."
  ],
  "3067": [
    "Düsseldorf gewann das Heimspiel gegen Neuseenland-Volleys Markkleeberg mit 3:2.",
    "Nach einer 2:1-Satzführung verpasste es die Eintracht, ihre gute Leistung im vierten Durchgang fortzusetzen und gab dadurch einen Tabellenpunkt ab.",
    "Im Tiebreak fand das Team wieder zu seinem Spiel und sicherte sich mit 15:8 zwei wichtige Zähler."
  ],
  "3076": [
    "Eintracht Spontent verlor beim Tabellenführer Rote Raben Vilsbiburg klar mit 0:3.",
    "Die Gastgeberinnen blieben auch in ihrem sechsten Heimspiel ungeschlagen und entschieden die Partie bereits nach 62 Minuten.",
    "Düsseldorf hielt in den ersten beiden Sätzen phasenweise mit, brach im dritten Durchgang aber deutlich ein und verlor diesen mit 8:25."
  ],
  "3081": [
    "Düsseldorf beendete die Hinrunde mit einem 3:1-Heimsieg gegen den BBSC Berlin.",
    "Nach dem knapp verlorenen Auftaktsatz drehte die Eintracht die Partie und gewann auch den umkämpften dritten Durchgang mit 26:24.",
    "Der klare vierte Satz besiegelte den dritten Heimsieg in Folge und brachte Düsseldorf drei wichtige Punkte."
  ],
  "3088": [
    "Düsseldorf gewann das fünfte Satzspiel bei den Sparkassen Wildcats Stralsund mit 3:2.",
    "Beide Mannschaften wechselten sich mit Satzgewinnen ab, wobei starke Phasen immer wieder von Fehlern und Leistungsschwankungen abgelöst wurden.",
    "Im Tiebreak blieb die Eintracht stabiler und entschied den fünften Durchgang mit 15:12 für sich."
  ],
  "3095": [
    "Eintracht Spontent verlor bei NawaRo Straubing mit 1:3.",
    "Straubing dominierte die ersten beiden Sätze, ehe Düsseldorf mit einem 25:23 im dritten Durchgang zurückschlug.",
    "Auch im vierten Satz leistete die Eintracht lange Widerstand, konnte die Überlegenheit der Gastgeberinnen in der Schlussphase aber nicht brechen."
  ],
  "3100": [
    "Düsseldorf unterlag dem TV Planegg-Krailling im Heimspiel mit 0:3.",
    "Nach einem klar verlorenen ersten Satz steigerte sich die Eintracht in jedem weiteren Durchgang.",
    "Im dritten Satz fehlten beim 23:25 nur zwei Ballpunkte zum Satzgewinn, Planegg brachte den Dreisatzsieg jedoch ohne Verlängerung ins Ziel."
  ],
  "3109": [
    "Eintracht Spontent verlor das intensive Rheinderby bei DSHS SnowTrex Köln mit 1:3.",
    "Düsseldorf fand gut in die Begegnung und glich nach dem verlorenen Auftaktsatz mit einem 25:19 zum 1:1 aus.",
    "Köln gewann den dritten Durchgang deutlich und entschied den engen vierten Satz mit 26:24 durch größere Nervenstärke."
  ],
  "3119": [
    "Düsseldorf besiegte den TV Dingolfing zu Hause souverän mit 3:0.",
    "Die personell geschwächten Gäste kamen aus einem belastenden Auswärts-Doppelwochenende und konnten dem konstanten Druck der Eintracht nur phasenweise standhalten.",
    "Spontent kontrollierte alle drei Sätze und gab insgesamt lediglich 52 Ballpunkte ab."
  ],
  "3123": [
    "Eintracht Spontent verlor beim TV Hörde nach gewonnenem Auftaktsatz mit 1:3.",
    "Düsseldorf nutzte die anfänglichen Unsicherheiten der Gastgeberinnen konsequent, doch Hörde steigerte sich danach in allen Spielelementen.",
    "Die folgenden drei Sätze blieben jeweils eng, gingen aber mit 25:23, 25:23 und 25:22 allesamt an Hörde."
  ],
  "3131": [
    "Düsseldorf musste sich den ESA Grimma Volleys nach fünf Sätzen mit 2:3 geschlagen geben.",
    "Nach dem verlorenen ersten Durchgang drehte die Eintracht die Partie zunächst mit zwei klaren Satzgewinnen.",
    "Grimma erzwang den Tiebreak und setzte sich dort mit 15:9 durch, sodass Düsseldorf ein Tabellenpunkt blieb."
  ],
  "3134": [
    "Eintracht Spontent verlor das Heimspiel gegen den TV Waldgirmes mit 0:3.",
    "Alle drei Sätze verliefen lange offen, Düsseldorf konnte jedoch keine der engen Schlussphasen für sich entscheiden.",
    "Waldgirmes gewann die Durchgänge mit 25:23, 25:22 und 25:21 und nahm dadurch alle drei Punkte mit."
  ],
  "3144": [
    "Düsseldorf gewann das Auswärtsderby bei den BayerVolleys Leverkusen mit 3:2.",
    "Die Eintracht ging zweimal nach Sätzen in Führung, Leverkusen erzwang jedoch jeweils den Ausgleich.",
    "Im Tiebreak setzte sich Spontent mit 15:11 durch und belohnte sich für die stabilere Schlussphase mit zwei Punkten."
  ],
  "3149": [
    "Düsseldorf verlor ein außergewöhnlich enges Heimspiel gegen den VfL Oythe mit 2:3.",
    "Nach vier umkämpften Sätzen führte die Eintracht zwischenzeitlich mit 2:1, verpasste den Sieg aber im vierten Durchgang beim 28:30.",
    "Im Tiebreak setzte sich Oythe deutlich mit 15:9 durch, sodass Düsseldorf nur ein Tabellenpunkt blieb."
  ],
  "3158": [
    "Eintracht Spontent gewann das wichtige Auswärtsspiel bei Neuseenland-Volleys Markkleeberg mit 3:1.",
    "Markkleeberg entschied den ersten Satz für sich, anschließend steigerte Düsseldorf die Stabilität unter dem Druck des Abstiegskampfs.",
    "Die Eintracht gewann die folgenden drei Durchgänge und nahm drei wertvolle Punkte aus Markkleeberg mit."
  ],
  "3167": [
    "Eintracht Spontent verlor gegen den bereits feststehenden Meister Rote Raben Vilsbiburg mit 0:3.",
    "Düsseldorf hielt alle drei Sätze eng und erreichte jeweils mindestens 23 Punkte, konnte aber keine Schlussphase für sich entscheiden.",
    "Vilsbiburg vollendete den Auswärtssieg nach 67 Minuten, wobei Zuspielerin Jenni Liu zur MVP gewählt wurde."
  ],
  "3172": [
    "Eintracht Spontent gewann vor der Rekordkulisse von 3.845 Zuschauern beim BBSC Berlin mit 3:2.",
    "Düsseldorf lag zweimal nach Sätzen zurück, dominierte dann aber den vierten Durchgang mit 25:13.",
    "Der Tiebreak blieb bis zum Ende offen und ging knapp mit 15:13 an die Eintracht."
  ],
  "3179": [
    "Düsseldorf beendete die Saison mit einer 2:3-Heimniederlage gegen die Sparkassen Wildcats Stralsund.",
    "Die Eintracht gewann den ersten und dritten Satz deutlich, während starke Leistungsschwankungen beiden Teams immer wieder die Initiative überließen.",
    "Stralsund glich zweimal aus und entschied den Tiebreak schließlich mit 15:10 für sich."
  ],
  "3189": [
    "Eintracht Spontent verlor beim VCO Dresden trotz dreier enger Sätze mit 0:3.",
    "Düsseldorf brachte die Gastgeberinnen in jedem Durchgang unter Druck, konnte die eigenen Führungen und Chancen aber nicht konsequent nutzen.",
    "Besonders knapp war der dritte Satz, den Dresden erst mit 28:26 zum Gesamtsieg abschloss."
  ],
  "3203": [
    "Düsseldorf unterlag dem VCO Dresden im Heimspiel mit 1:3.",
    "Nach zwei mit 19:25 verlorenen Sätzen kämpfte sich die Eintracht mit einem 25:20 im dritten Durchgang zurück.",
    "Der vierte Satz blieb bis zum Ende offen, ging aber mit 26:24 an Dresden."
  ]
};


const games = [
  {
    number: 3004,
    matchId: 777353312,
    weekday: "Samstag",
    date: "20.09.2025",
    shortDate: "20.09.25",
    time: "19:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "NawaRo Straubing",
    score: "2:3",
    ballPoints: "92:114",
    sets: [
      "25:23",
      "14:25",
      "28:26",
      "13:25",
      "12:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/208332e9-b3a9-43e5-aad4-34a82f56af84/3004",
    rankAfter: 5,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 100,
    duration: 109,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      },
      {
        team: "NawaRo Straubing",
        name: "Valbona Ismaili",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778429330",
    summary: [
      "In einem hochdramatischen und emotionalen Volleyballkrimi der 2. Bundesliga Pro der Frauen musste sich Eintracht Spontent am Dienstagabend knapp mit 2:3 dem Topteam NawaRo Straubing geschlagen geben."
    ],
    videoUrl: "https://www.youtube.com/watch?v=cIskygiYw40&pp=ygUzRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBOYXdhcm8gU3RyYXViaW5n",
    youtubeViews: 15227
  },
  {
    number: 3009,
    matchId: 777353349,
    weekday: "Samstag",
    date: "27.09.2025",
    shortDate: "27.09.25",
    time: "18:00",
    home: "TV Planegg-Krailling",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:0",
    ballPoints: "75:40",
    sets: [
      "25:17",
      "25:13",
      "25:10"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/1b232d69-e718-4f66-a8ef-9df3b548d64d/3009",
    rankAfter: 9,
    venue: "Feodor-Lynen-Gymnasium",
    spectators: 187,
    duration: 59,
    mvps: [
      {
        team: "TV Planegg-Krailling",
        name: "Nora Harner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=767130990"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778488295",
    summary: [
      "TV Planegg-Krailling feiert klaren 3:0-Sieg gegen Eintracht Spontent Düsseldorf."
    ],
    videoUrl: "https://www.youtube.com/watch?v=zWdmPaE1rDc&pp=ygUtRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBUViBQbGFuZWdn",
    youtubeViews: 4410
  },
  {
    number: 3018,
    matchId: 777353398,
    weekday: "Samstag",
    date: "04.10.2025",
    shortDate: "04.10.25",
    time: "16:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "DSHS SnowTrex Köln",
    score: "1:3",
    ballPoints: "79:98",
    sets: [
      "12:25",
      "25:23",
      "20:25",
      "22:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/600448d6-814e-4936-a245-5248306bd6b0/3018",
    rankAfter: 10,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 90,
    duration: 93,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        team: "DSHS SnowTrex Köln",
        name: "Emelie Siegner",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778607710",
    summary: [
      "Gegen die Spitzen-Mannschaft aus Köln fehlen der Eintracht ein paar Prozentpunkte, um etwas Zählbares einzufahren."
    ],
    videoUrl: "https://www.youtube.com/watch?v=WYb3e9a45HU&t=3s",
    youtubeViews: 8928
  },
  {
    number: 3028,
    matchId: 777353465,
    weekday: "Samstag",
    date: "11.10.2025",
    shortDate: "11.10.25",
    time: "19:00",
    home: "TV Dingolfing",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:1",
    ballPoints: "99:69",
    sets: [
      "24:26",
      "25:19",
      "25:14",
      "25:10"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/f1291a8d-ae79-448f-81c5-c9d8b1c983f6/3028",
    rankAfter: 12,
    venue: "Sporthalle Höll-Ost",
    spectators: 301,
    duration: 93,
    mvps: [
      {
        team: "TV Dingolfing",
        name: "Franziska Koob",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Hannah Mohr",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=767092260"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778598774",
    summary: [
      "Der TV Dingolfing bestreitet sein erstes Heimspiel in der neuen Saison am Samstagabend gegen Eintracht Spontent Düsseldorf und hofft auf den ersten Erfolg in der neuen Spielzeit."
    ],
    videoUrl: "https://www.youtube.com/watch?v=olmb-YuEmVs&pp=ygUwRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBUViBEaW5nb2xmaW5n",
    youtubeViews: 4370
  },
  {
    number: 3032,
    matchId: 777353484,
    weekday: "Sonntag",
    date: "19.10.2025",
    shortDate: "19.10.25",
    time: "14:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "TV Hörde",
    score: "3:0",
    ballPoints: "75:57",
    sets: [
      "25:18",
      "25:23",
      "25:16"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/92f41024-13c1-443e-8757-2a198753c4ae/3032",
    rankAfter: 10,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 80,
    duration: 69,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        team: "TV Hörde",
        name: "Vanessa Gorny",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=777566810"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778812821",
    summary: [
      "Der zweite Tag des Doppelspielwochenendes ging für unsere Hörerinnen früh los. Um 14 Uhr startete ihr Spiel gegen Eintracht Spontent Düsseldorf. Leider sah man ihnen den langen Vortag an und sie verlo"
    ],
    videoUrl: "https://www.youtube.com/watch?v=MaQZUGnzTm4&pp=ygUpRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBIw7ZyZGU%3D",
    youtubeViews: 7364
  },
  {
    number: 3088,
    matchId: 777353834,
    weekday: "Samstag",
    date: "25.10.2025",
    shortDate: "25.10.25",
    time: "17:00",
    home: "Sparkassen Wildcats Stralsund",
    away: "Eintracht Spontent Düsseldorf",
    score: "2:3",
    ballPoints: "97:106",
    sets: [
      "25:19",
      "17:25",
      "25:22",
      "18:25",
      "12:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/6d38c358-c2da-4c56-8401-8138d7515574/3088",
    rankAfter: 9,
    venue: "Diesterweg-Sporthalle",
    spectators: 387,
    duration: 104,
    mvps: [
      {
        team: "Sparkassen Wildcats Stralsund",
        name: "Tara Fröhlich",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=762405115"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Hannah Mohr",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=767092260"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778886511",
    summary: [
      "In diesem Spiel konnte keine Weiterentwicklung nachgewiesen werden"
    ],
    videoUrl: "https://www.youtube.com/watch?v=z5DmQFZySm4&pp=ygUsRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBTdHJhbHN1bmQ%3D",
    youtubeViews: 4370
  },
  {
    number: 3189,
    matchId: 777354454,
    weekday: "Samstag",
    date: "01.11.2025",
    shortDate: "01.11.25",
    time: "16:00",
    home: "VCO Dresden",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:0",
    ballPoints: "78:70",
    sets: [
      "25:23",
      "25:21",
      "28:26"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/b91174ef-fd31-43b6-9f22-d0a82cf8fe16/3189",
    rankAfter: 11,
    venue: "Schulsporthalle des Sportschulzentrum",
    spectators: 72,
    duration: 75,
    mvps: [
      {
        team: "VCO Dresden",
        name: "Zoe Albert",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779021406",
    summary: [
      "Mit großer Vorfreude und spürbarer Nervosität startete der VCO Dresden am Samstag, den 2. November, in das erste Heimspiel der Saison. Nach einer langen Pause hieß es endlich wieder Volleyball in der"
    ],
    videoUrl: "https://www.youtube.com/watch?v=ewv0bt6wZO4",
    youtubeViews: 4150
  },
  {
    number: 3040,
    matchId: 777353539,
    weekday: "Sonntag",
    date: "02.11.2025",
    shortDate: "02.11.25",
    time: "15:00",
    home: "ESA Grimma Volleys",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:1",
    ballPoints: "102:75",
    sets: [
      "25:19",
      "25:10",
      "27:29",
      "25:17"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/276f2a7f-1091-4304-80bb-aac64dc48b32/3040",
    rankAfter: 11,
    venue: "Muldentalhalle",
    spectators: 307,
    duration: 93,
    mvps: [
      {
        team: "ESA Grimma Volleys",
        name: "Meret Singer",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    videoUrl: "https://www.youtube.com/watch?v=q7z0jP-bmGE",
    youtubeViews: 2932
  },
  {
    number: 3043,
    matchId: 777353594,
    weekday: "Samstag",
    date: "15.11.2025",
    shortDate: "15.11.25",
    time: "20:00",
    home: "TV Waldgirmes",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:1",
    ballPoints: "90:73",
    sets: [
      "15:25",
      "25:17",
      "25:19",
      "25:12"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/3facf766-7220-4769-b191-f53f57d1fc69/3043",
    rankAfter: 12,
    venue: "Sporthalle der Lahntalschule Atzbach",
    spectators: 150,
    duration: 84,
    mvps: [
      {
        team: "TV Waldgirmes",
        name: "Leonie Amann",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779286379",
    summary: [
      "TV Waldgirmes – Eintracht Spontent Düsseldorf 3:1 / 90:73 (15:25 25:17 25:19 25:12). „Ich hatte befürchtet, dass wir uns schwertun, …“ sagte Trainer Daniel Bock nach dem Spiel."
    ],
    videoUrl: "https://www.youtube.com/watch?v=GkEZGGsLrRo&pp=ygUwRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBUViBXYWxkZ2lybWVz",
    youtubeViews: 2911
  },
  {
    number: 3053,
    matchId: 777353619,
    weekday: "Samstag",
    date: "22.11.2025",
    shortDate: "22.11.25",
    time: "19:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "BayerVolleys Leverkusen",
    score: "3:0",
    ballPoints: "78:62",
    sets: [
      "25:22",
      "25:14",
      "28:26"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/62623b2e-05ad-4a4c-9104-26e02c389738/3053",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 100,
    duration: 69,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Hannah Mohr",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=767092260"
      },
      {
        team: "BayerVolleys Leverkusen",
        name: "Lena Rößler",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=9573817"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779396672",
    summary: [
      "Zweiligateam fehlt beim 0:3 in Düsseldorf unter Ausfällen und Problemen beim Training"
    ],
    videoUrl: "https://www.youtube.com/watch?v=Cv1kURO4-LE",
    youtubeViews: 3442
  },
  {
    number: 3058,
    matchId: 777353644,
    weekday: "Samstag",
    date: "29.11.2025",
    shortDate: "29.11.25",
    time: "18:00",
    home: "VfL Oythe",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:0",
    ballPoints: "75:53",
    sets: [
      "25:19",
      "25:18",
      "25:16"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/e8bc6b01-f11a-4f5b-8fc4-5ca807edd6c3/3058",
    rankAfter: 11,
    venue: "SH Gymnasium Antonianum Vechta",
    spectators: 186,
    duration: 67,
    mvps: [
      {
        team: "VfL Oythe",
        name: "Maria Petkova",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779482999",
    summary: [
      "3:0-Erfolg gegen Aufsteiger Eintracht Spontent Düsseldorf"
    ],
    videoUrl: "https://www.youtube.com/watch?v=okOerMdThbU&pp=ygUsRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBWZkwgT3l0aGU%3D",
    youtubeViews: 1828
  },
  {
    number: 3067,
    matchId: 777353705,
    weekday: "Sonntag",
    date: "07.12.2025",
    shortDate: "07.12.25",
    time: "14:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "Neuseenland-Volleys Markkleeberg",
    score: "3:2",
    ballPoints: "104:96",
    sets: [
      "22:25",
      "25:21",
      "25:17",
      "17:25",
      "15:8"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/ac49b905-8f5d-491f-b407-df09409be118/3067",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 55,
    duration: 99,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        team: "Neuseenland-Volleys Markkleeberg",
        name: "Hannah Buß",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982676"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779628212",
    summary: [
      "Beim 3:2 Heimsieg lässt die Eintracht gegen Markkleeberg einen Punkt liegen, sammelt aber immerhin zwei wichtige Zähler ein."
    ],
    videoUrl: "https://www.youtube.com/watch?v=5pZ2RYkGwLA&pp=ygUuRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBNYXJrbGVlYmVyZw%3D%3D",
    youtubeViews: 4878
  },
  {
    number: 3076,
    matchId: 777353754,
    weekday: "Samstag",
    date: "13.12.2025",
    shortDate: "13.12.25",
    time: "19:00",
    home: "Rote Raben Vilsbiburg",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:0",
    ballPoints: "75:44",
    sets: [
      "25:19",
      "25:17",
      "25:8"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/57c5dc88-7f05-4e6b-a675-94b9693aff50/3076",
    rankAfter: 11,
    venue: "Ballsporthalle Vilsbiburg",
    spectators: 663,
    duration: 62,
    mvps: [
      {
        team: "Rote Raben Vilsbiburg",
        name: "Tina De Groot",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=742835545"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779695655",
    summary: [
      "Am Ende war es wieder eine klare Angelegenheit: Die Roten Raben bleiben auch bei ihrem sechsten Heimspiel ungeschlagen. Sie besiegten in nur 62 Minuten Eintracht Spontent Düsseldorf mit 3:0."
    ],
    videoUrl: "https://www.youtube.com/watch?v=a59o7h6j_6E&pp=ygU4RFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBSb3RlIFJhYmVuIFZpbHNiaWJ1cmc%3D",
    youtubeViews: 1810
  },
  {
    number: 3081,
    matchId: 777353785,
    weekday: "Samstag",
    date: "20.12.2025",
    shortDate: "20.12.25",
    time: "16:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "BBSC Berlin",
    score: "3:1",
    ballPoints: "100:78",
    sets: [
      "24:26",
      "25:18",
      "26:24",
      "25:10"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/5f5c6ac3-95fa-4b8c-ad93-8e0103adbdbd/3081",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 75,
    duration: 94,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        team: "BBSC Berlin",
        name: "Anna-Lena Vogel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=44010163"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779815586",
    summary: [
      "Zum Abschluss des Jahren sichert sich die Eintracht drei wichtige Punkte. Gegen BBSC Berlin gewinnt Eintracht Spontent nach 0:1 Rückstand mit 3:1."
    ],
    videoUrl: "https://www.youtube.com/watch?v=xsm6NjE7nQw&t=36s&pp=ygUpRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBCZXJsaW4%3D",
    youtubeViews: 5296
  },
  {
    number: 3095,
    matchId: 777353877,
    weekday: "Samstag",
    date: "10.01.2026",
    shortDate: "10.01.26",
    time: "19:00",
    home: "NawaRo Straubing",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:1",
    ballPoints: "98:75",
    sets: [
      "25:17",
      "25:13",
      "23:25",
      "25:20"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/d747dc17-4ece-4eb8-be7c-ed54649eace0/3095",
    rankAfter: 11,
    venue: "turmair Volleyballarena",
    spectators: 520,
    duration: 81,
    mvps: [
      {
        team: "NawaRo Straubing",
        name: "Maia Rackel",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780004838",
    summary: [
      "NawaRo Straubing startet stark in das neue Kalenderjahr, denn Eintracht Spontent Düsseldorf konnte vor 509 Zuschauern mit 3:1 (25:17 25:13 23:25 25:20) bezwungen werden."
    ],
    videoUrl: "https://www.youtube.com/watch?v=vN3VY_8f_9w&t=28s&pp=ygUzRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBOYXdhcm8gU3RyYXViaW5n0gcJCUELAYcqIYzv",
    youtubeViews: 1813
  },
  {
    number: 3100,
    matchId: 777353908,
    weekday: "Sonntag",
    date: "18.01.2026",
    shortDate: "18.01.26",
    time: "14:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "TV Planegg-Krailling",
    score: "0:3",
    ballPoints: "57:75",
    sets: [
      "15:25",
      "19:25",
      "23:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/c9aeb1ab-2860-4275-9c53-a29cd757c8f0/3100",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 45,
    duration: 67,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      },
      {
        team: "TV Planegg-Krailling",
        name: "Julia Ziegler",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=742449977"
      }
    ],
    videoUrl: "https://www.youtube.com/watch?v=sQVChYWZOpY&t=33s&pp=ygUtRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBUViBQbGFuZWdn",
    youtubeViews: 3838
  },
  {
    number: 3109,
    matchId: 777353963,
    weekday: "Samstag",
    date: "24.01.2026",
    shortDate: "24.01.26",
    time: "19:00",
    home: "DSHS SnowTrex Köln",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:1",
    ballPoints: "95:84",
    sets: [
      "25:21",
      "19:25",
      "25:14",
      "26:24"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/1c768949-b202-4b06-b2ca-75c6b4365065/3109",
    rankAfter: 11,
    venue: "Deutsche Sporthochschule Köln, Halle 22",
    spectators: 210,
    duration: 97,
    mvps: [
      {
        team: "DSHS SnowTrex Köln",
        name: "Melanie Gosmann",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=9969466"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Maya Lucia Kleinpeter",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=778128140"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780203090",
    summary: [
      "In einem intensiven Rheinderby setzte sich DSHS SnowTrex Köln vor heimischem Publikum mit 3:1 gegen Eintracht Spontent Düsseldorf durch."
    ],
    videoUrl: "https://www.youtube.com/watch?v=JYLFtvnXI3k&t=8485s",
    youtubeViews: 2251
  },
  {
    number: 3119,
    matchId: 777354018,
    weekday: "Sonntag",
    date: "01.02.2026",
    shortDate: "01.02.26",
    time: "14:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "TV Dingolfing",
    score: "3:0",
    ballPoints: "75:52",
    sets: [
      "25:19",
      "25:15",
      "25:18"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/1092efa0-8cc8-4bce-89c9-398956a3a687/3119",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 60,
    duration: 64,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        team: "TV Dingolfing",
        name: "Antonia Herpich",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=752403302"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780298858",
    summary: [
      "Das letzte Doppel-Auswärts-Wochenende der Saison endete für den TV Dingolfing beim VfL Oythe und in Düsseldorf ohne Punkt- und Satzgewinn."
    ],
    videoUrl: "https://www.youtube.com/watch?v=wuFA8WFTFX4&pp=ygUwRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBUViBEaW5nb2xmaW5n0gcJCUELAYcqIYzv",
    youtubeViews: 3633
  },
  {
    number: 3123,
    matchId: 777354049,
    weekday: "Samstag",
    date: "07.02.2026",
    shortDate: "07.02.26",
    time: "19:30",
    home: "TV Hörde",
    away: "Eintracht Spontent Düsseldorf",
    score: "3:1",
    ballPoints: "94:93",
    sets: [
      "19:25",
      "25:23",
      "25:23",
      "25:22"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/ee00f50d-6d33-4767-8a04-53420d7c1c9d/3123",
    rankAfter: 11,
    venue: "Sporthalle Phoenix (Hörde III)",
    spectators: 200,
    duration: 103,
    mvps: [
      {
        team: "TV Hörde",
        name: "Vanessa Gorny",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=777566810"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780407507",
    summary: [
      "Am Samstag, den 7. Februar 2026, empfing der TV Hörde in der 2. Bundesliga Pro Volleyball Damen die Gäste von Eintracht Spontent Düsseldorf in Dortmund. Nach einem schwachen Start zeigten die Hörderin"
    ],
    videoUrl: "https://www.youtube.com/watch?v=qQl93M2B5eA&pp=ygUpRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBIw7ZyZGU%3D",
    youtubeViews: 2371
  },
  {
    number: 3131,
    matchId: 777354092,
    weekday: "Samstag",
    date: "14.02.2026",
    shortDate: "14.02.26",
    time: "16:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "ESA Grimma Volleys",
    score: "2:3",
    ballPoints: "99:97",
    sets: [
      "20:25",
      "25:17",
      "25:15",
      "20:25",
      "9:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/d2ac2149-ae88-4ee5-b49c-aa1555a79f7a/3131",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 105,
    duration: 98,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      },
      {
        team: "ESA Grimma Volleys",
        name: "Sophie Dreblow",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      }
    ],
    videoUrl: "https://www.youtube.com/watch?v=hQWUKAPwC5s",
    youtubeViews: 5284
  },
  {
    number: 3134,
    matchId: 777354117,
    weekday: "Sonntag",
    date: "22.02.2026",
    shortDate: "22.02.26",
    time: "14:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "TV Waldgirmes",
    score: "0:3",
    ballPoints: "66:75",
    sets: [
      "23:25",
      "22:25",
      "21:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/7f081514-2bd6-4a1c-914b-8dda32bd7738/3134",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 100,
    duration: 78,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Maya Lucia Kleinpeter",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=778128140"
      },
      {
        team: "TV Waldgirmes",
        name: "Benja Lensing",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=69786660"
      }
    ],
    videoUrl: "https://www.youtube.com/watch?v=UpgGZzo0GO4&pp=ygUwRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBUViBXYWxkZ2lybWVz",
    youtubeViews: 3296
  },
  {
    number: 3144,
    matchId: 777354172,
    weekday: "Samstag",
    date: "07.03.2026",
    shortDate: "07.03.26",
    time: "19:30",
    home: "BayerVolleys Leverkusen",
    away: "Eintracht Spontent Düsseldorf",
    score: "2:3",
    ballPoints: "105:102",
    sets: [
      "20:25",
      "25:16",
      "24:26",
      "25:20",
      "11:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/da40e47b-7d0d-4a9d-80b7-381f187099c3/3144",
    rankAfter: 11,
    venue: "Ostermann-Arena",
    spectators: 317,
    duration: 114,
    mvps: [
      {
        team: "BayerVolleys Leverkusen",
        name: "Tessa Müller",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=750792399"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Hannah Mohr",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=767092260"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780759531",
    summary: [
      "Zweitliga-Team von Trainer Dirk Sauermann unterliegt Eintracht Spontent Düsseldorf mit 2:3"
    ],
    videoUrl: "https://www.youtube.com/watch?v=9BSu8PI5Cxs",
    youtubeViews: 1795
  },
  {
    number: 3172,
    matchId: 777354350,
    weekday: "Samstag",
    date: "14.03.2026",
    shortDate: "14.03.26",
    time: "20:00",
    home: "BBSC Berlin",
    away: "Eintracht Spontent Düsseldorf",
    score: "2:3",
    ballPoints: "100:110",
    sets: [
      "25:23",
      "24:26",
      "25:21",
      "13:25",
      "13:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/347cecc5-0d98-469d-bf2b-78168fe6ffde/3172",
    rankAfter: 11,
    venue: "Max-Schmeling-Halle",
    spectators: 3845,
    duration: 112,
    mvps: [
      {
        team: "BBSC Berlin",
        name: "Paula Reinisch",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780829959",
    summary: [
      "Immerhin zwei Sätze geholt, den 3.845 Zuschauern ein spannendes Spiel über lange 5 Sätze geboten - eigentlich könnte man auf Seiten des BBSC zufrieden sein, doch so ganz einfach war es doch nicht."
    ],
    videoUrl: "https://www.youtube.com/watch?v=jtxdBBX7MZM&pp=ygUpRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBCZXJsaW4%3D",
    youtubeViews: 4655
  },
  {
    number: 3149,
    matchId: 777354209,
    weekday: "Samstag",
    date: "21.03.2026",
    shortDate: "21.03.26",
    time: "20:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "VfL Oythe",
    score: "2:3",
    ballPoints: "114:119",
    sets: [
      "24:26",
      "25:22",
      "28:26",
      "28:30",
      "9:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/65d2801d-27e8-4d1a-a9f3-9bc614f7dc41/3149",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 70,
    duration: 132,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        team: "VfL Oythe",
        name: "Emichika Tomoi",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895005"
      }
    ],
    videoUrl: "https://www.youtube.com/watch?v=HVhCUxsPw1E&pp=ygUsRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBWZkwgT3l0aGU%3D",
    youtubeViews: 4029
  },
  {
    number: 3158,
    matchId: 777354258,
    weekday: "Samstag",
    date: "28.03.2026",
    shortDate: "28.03.26",
    time: "18:00",
    home: "Neuseenland-Volleys Markkleeberg",
    away: "Eintracht Spontent Düsseldorf",
    score: "1:3",
    ballPoints: "86:94",
    sets: [
      "25:19",
      "19:25",
      "22:25",
      "20:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/019782c4-d28a-4e94-9a36-187b5b6ccd97/3158",
    rankAfter: 11,
    venue: "Neuseenlandhalle",
    spectators: 247,
    duration: 101,
    mvps: [
      {
        team: "Neuseenland-Volleys Markkleeberg",
        name: "Nele Fickenwirth",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=778191508"
      },
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781009586",
    summary: [
      "Am letzten Samstag stand das vorletzte Heimspiel der Neuseenland-Volleys Markkleeberg gegen Eintracht Spontent Düsseldorf an."
    ],
    videoUrl: "https://www.youtube.com/watch?v=XFL1aRU5CNo&pp=ygUuRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBNYXJrbGVlYmVyZw%3D%3D",
    youtubeViews: 2166
  },
  {
    number: 3203,
    matchId: 777354526,
    weekday: "Samstag",
    date: "11.04.2026",
    shortDate: "11.04.26",
    time: "19:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "VCO Dresden",
    score: "1:3",
    ballPoints: "87:96",
    sets: [
      "19:25",
      "19:25",
      "25:20",
      "24:26"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/177b3409-eafa-497f-b0e4-44ba86de4c0e/3203",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 105,
    duration: 87,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Carlotta Strube",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      },
      {
        team: "VCO Dresden",
        name: "Lena Olliges",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      }
    ],
    videoUrl: "https://www.youtube.com/watch?v=LKSHHuIzHec&pp=ygUuRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBWQ08gRHJlc2Rlbg%3D%3D",
    youtubeViews: 2041
  },
  {
    number: 3167,
    matchId: 777354319,
    weekday: "Sonntag",
    date: "12.04.2026",
    shortDate: "12.04.26",
    time: "14:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "Rote Raben Vilsbiburg",
    score: "0:3",
    ballPoints: "70:76",
    sets: [
      "23:25",
      "24:26",
      "23:25"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/e934ffa2-84b4-4136-a09d-f184b199eeba/3167",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 50,
    duration: 67,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Lara Drölle",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        team: "Rote Raben Vilsbiburg",
        name: "Jenni Liu",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=59195178"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781153542",
    summary: [
      "Auch wenn die Roten Raben bereits als Meister in der Sparda 2. Liga Pro feststehen, haben sie eindrucksvoll bewiesen, warum sie ganz oben stehen: Mit einem souveränen 3:0-Auswärtssieg in Düsseldorf."
    ],
    videoUrl: "https://www.youtube.com/watch?v=PNjF77BZYd0&pp=ygU4RFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBSb3RlIFJhYmVuIFZpbHNiaWJ1cmc%3D",
    youtubeViews: 3811
  },
  {
    number: 3179,
    matchId: 777354393,
    weekday: "Samstag",
    date: "02.05.2026",
    shortDate: "02.05.26",
    time: "19:00",
    home: "Eintracht Spontent Düsseldorf",
    away: "Sparkassen Wildcats Stralsund",
    score: "2:3",
    ballPoints: "100:92",
    sets: [
      "25:16",
      "19:25",
      "25:11",
      "21:25",
      "10:15"
    ],
    statsUrl: "https://distributor.sams-score.de/scoresheet/pdf/036096d2-e30d-4344-bcd2-6cf83c33d22b/3179",
    rankAfter: 11,
    venue: "DH Brinckmannstraße, Hulda Pankok",
    spectators: 50,
    duration: 100,
    mvps: [
      {
        team: "Eintracht Spontent Düsseldorf",
        name: "Gianna Limmroth",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=8663"
      },
      {
        team: "Sparkassen Wildcats Stralsund",
        name: "Amelie Grawert",
        url: "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=70817295"
      }
    ],
    articleUrl: "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781386693",
    summary: [
      "Das Spiel über fünf Sätze war ein Spiegelbild des Saisonverlaufs mit Höhen und Tiefen."
    ],
    videoUrl: "https://www.youtube.com/watch?v=dTbAYnUN73Q&pp=ygUsRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBTdHJhbHN1bmQ%3D",
    youtubeViews: 3757
  }
];
