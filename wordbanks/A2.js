// ===============================
// CEFR A2 WORD BANK (EXPANDED)
// ===============================

const A2_WORDS = [
    // CONNECTORS (A2)
    { english: "and", italian: "e", audio: "e.mp3", category: "connector" },
    { english: "or", italian: "o", audio: "o.mp3", category: "connector" },
    { english: "but", italian: "ma", audio: "ma.mp3", category: "connector" },
    { english: "because", italian: "perché", audio: "perche.mp3", category: "connector" },
    { english: "then", italian: "allora", audio: "allora.mp3", category: "connector" },
    { english: "later", italian: "dopo / più tardi", audio: "piu-tardi.mp3", category: "connector" },
    { english: "after", italian: "dopo", audio: "dopo.mp3", category: "connector" },
    { english: "before", italian: "prima", audio: "prima.mp3", category: "connector" },

    // CORE A2 FUNCTIONAL LANGUAGE
    { english: "I want", italian: "Voglio", audio: "voglio.mp3", category: "core" },
    { english: "I need", italian: "Ho bisogno", audio: "ho-bisogno.mp3", category: "core" },
    { english: "I like", italian: "Mi piace", audio: "mi-piace.mp3", category: "core" },
    { english: "I don’t understand", italian: "Non capisco", audio: "non-capisco.mp3", category: "core" },
    { english: "Where is…?", italian: "Dov'è…?", audio: "dove.mp3", category: "core" },
    { english: "How much?", italian: "Quanto costa?", audio: "quanto-costa.mp3", category: "core" },
    { english: "Help", italian: "Aiuto", audio: "aiuto.mp3", category: "core" },
    { english: "I am tired", italian: "Sono stanco", audio: "sono-stanco.mp3", category: "core" },

    // DAILY LIFE (NEW A2)
    { english: "always", italian: "sempre", audio: "sempre.mp3", category: "daily-life" },
    { english: "sometimes", italian: "a volte", audio: "a-volte.mp3", category: "daily-life" },
    { english: "never", italian: "mai", audio: "mai.mp3", category: "daily-life" },
    { english: "early", italian: "presto", audio: "presto.mp3", category: "daily-life" },
    { english: "late", italian: "tardi", audio: "tardi.mp3", category: "daily-life" },

    // TRAVEL (NEW A2)
    { english: "bus", italian: "autobus", audio: "autobus.mp3", category: "travel" },
    { english: "train", italian: "treno", audio: "treno.mp3", category: "travel" },
    { english: "taxi", italian: "taxi", audio: "taxi.mp3", category: "travel" },
    { english: "ticket", italian: "biglietto", audio: "biglietto.mp3", category: "travel" },
    { english: "map", italian: "mappa", audio: "mappa.mp3", category: "travel" },
    { english: "left", italian: "sinistra", audio: "sinistra.mp3", category: "travel" },
    { english: "right", italian: "destra", audio: "destra.mp3", category: "travel" },
    { english: "straight", italian: "dritto", audio: "dritto.mp3", category: "travel" },

    // FAMILY (NEW A2)
    { english: "brother", italian: "fratello", audio: "fratello.mp3", category: "family" },
    { english: "sister", italian: "sorella", audio: "sorella.mp3", category: "family" },
    { english: "family", italian: "famiglia", audio: "famiglia.mp3", category: "family" },

    // FOOD & DRINK (EXPANDED FOR SENTENCE TAB)
    { english: "menu", italian: "menu", audio: "menu.mp3", category: "food-drink" },
    { english: "breakfast", italian: "colazione", audio: "colazione.mp3", category: "food-drink" },
    { english: "lunch", italian: "pranzo", audio: "pranzo.mp3", category: "food-drink" },
    { english: "dinner", italian: "cena", audio: "cena.mp3", category: "food-drink" },
    { english: "vegetarian", italian: "vegetariano", audio: "vegetariano.mp3", category: "food-drink" },
    { english: "allergy", italian: "allergia", audio: "allergia.mp3", category: "food-drink" },
    { english: "bill", italian: "conto", audio: "conto.mp3", category: "food-drink" },
    { english: "card payment", italian: "pagamento con carta", audio: "pagamento-con-carta.mp3", category: "food-drink" },

    // BASIC VERBS (NEW A2)
    { english: "to buy", italian: "comprare", audio: "comprare.mp3", category: "verb" },
    { english: "to pay", italian: "pagare", audio: "pagare.mp3", category: "verb" },
    { english: "to walk", italian: "camminare", audio: "camminare.mp3", category: "verb" },
    { english: "to talk", italian: "parlare", audio: "parlare.mp3", category: "verb" },
    { english: "to read", italian: "leggere", audio: "leggere.mp3", category: "verb" },
    { english: "to write", italian: "scrivere", audio: "scrivere.mp3", category: "verb" },

    // ADJECTIVES (NEW A2)
    { english: "easy", italian: "facile", audio: "facile.mp3", category: "adjective" },
    { english: "difficult", italian: "difficile", audio: "difficile.mp3", category: "adjective" },
    { english: "expensive", italian: "caro", audio: "caro.mp3", category: "adjective" },
    { english: "cheap", italian: "economico", audio: "economico.mp3", category: "adjective" },

    // NUMBERS & QUANTITIES (NEW A2)
    { english: "many", italian: "molti", audio: "molti.mp3", category: "number" },
    { english: "few", italian: "pochi", audio: "pochi.mp3", category: "number" },
    { english: "more", italian: "più", audio: "piu.mp3", category: "number" },
    { english: "less", italian: "meno", audio: "meno.mp3", category: "number" },

    // NUMBERS (NEW A2)
    { english: "eleven", italian: "undici", audio: "undici.mp3", category: "number" },
    { english: "twelve", italian: "dodici", audio: "dodici.mp3", category: "number" },
    { english: "thirteen", italian: "tredici", audio: "tredici.mp3", category: "number" },
    { english: "fourteen", italian: "quattordici", audio: "quattordici.mp3", category: "number" },
    { english: "fifteen", italian: "quindici", audio: "quindici.mp3", category: "number" },
    { english: "sixteen", italian: "sedici", audio: "sedici.mp3", category: "number" },
    { english: "seventeen", italian: "diciassette", audio: "diciassette.mp3", category: "number" },
    { english: "eighteen", italian: "diciotto", audio: "diciotto.mp3", category: "number" },
    { english: "nineteen", italian: "diciannove", audio: "diciannove.mp3", category: "number" },
    { english: "twenty", italian: "venti", audio: "venti.mp3", category: "number" }
];
