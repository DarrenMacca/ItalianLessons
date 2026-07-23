// ===============================
// CEFR A1 WORD BANK (EXPANDED)
// ===============================

const A1_WORDS = [
    // CONNECTORS
    { english: "and", italian: "e", audio: "e.mp3", category: "connector" },
    { english: "or", italian: "o", audio: "o.mp3", category: "connector" },
    { english: "but", italian: "ma", audio: "ma.mp3", category: "connector" },
    { english: "because", italian: "perché", audio: "perche.mp3", category: "connector" },
    { english: "with", italian: "con", audio: "con.mp3", category: "connector" },
    { english: "without", italian: "senza", audio: "senza.mp3", category: "connector" },
    { english: "about", italian: "di", audio: "di.mp3", category: "connector" },
    { english: "for", italian: "per", audio: "per.mp3", category: "connector" },
    { english: "of", italian: "di", audio: "di.mp3", category: "connector" },
    { english: "to", italian: "a", audio: "a.mp3", category: "connector" },

    // CORE SURVIVAL
    { english: "Hello", italian: "Ciao", audio: "ciao.mp3", category: "core" },
    { english: "Goodbye", italian: "Arrivederci", audio: "arrivederci.mp3", category: "core" },
    { english: "Please", italian: "Per favore", audio: "per-favore.mp3", category: "core" },
    { english: "Thank you", italian: "Grazie", audio: "grazie.mp3", category: "core" },
    { english: "Yes", italian: "Sì", audio: "si.mp3", category: "core" },
    { english: "No", italian: "No", audio: "no.mp3", category: "core" },
    { english: "Sorry", italian: "Scusa", audio: "scusa.mp3", category: "core" },
    { english: "Help", italian: "Aiuto", audio: "aiuto.mp3", category: "core" },

    // DAILY LIFE (NEW A1)
    { english: "morning", italian: "mattina", audio: "mattina.mp3", category: "daily-life" },
    { english: "afternoon", italian: "pomeriggio", audio: "pomeriggio.mp3", category: "daily-life" },
    { english: "evening", italian: "sera", audio: "sera.mp3", category: "daily-life" },
    { english: "today", italian: "oggi", audio: "oggi.mp3", category: "daily-life" },
    { english: "tomorrow", italian: "domani", audio: "domani.mp3", category: "daily-life" },
    { english: "yesterday", italian: "ieri", audio: "ieri.mp3", category: "daily-life" },

    // FAMILY (NEW A1)
    { english: "mother", italian: "madre", audio: "madre.mp3", category: "family" },
    { english: "father", italian: "padre", audio: "padre.mp3", category: "family" },
    { english: "parents", italian: "genitori", audio: "genitori.mp3", category: "family" },
    { english: "child", italian: "bambino", audio: "bambino.mp3", category: "family" },
    { english: "children", italian: "bambini", audio: "bambini.mp3", category: "family" },

    // FOOD & DRINK (YOUR ORIGINAL + NEW)
    { english: "beer", italian: "birra", audio: "birra.mp3", category: "food-drink" },
    { english: "steak", italian: "bistecca", audio: "bistecca.mp3", category: "food-drink" },
    { english: "potato chips", italian: "patatine fritte", audio: "patatine-fritte.mp3", category: "food-drink" },
    { english: "apple", italian: "mela", audio: "mela.mp3", category: "food-drink" },
    { english: "orange", italian: "arancia", audio: "arancia.mp3", category: "food-drink" },
    { english: "banana", italian: "banana", audio: "banana.mp3", category: "food-drink" },
    { english: "chicken", italian: "pollo", audio: "pollo.mp3", category: "food-drink" },
    { english: "fish", italian: "pesce", audio: "pesce.mp3", category: "food-drink" },
    { english: "rice", italian: "riso", audio: "riso.mp3", category: "food-drink" },
    { english: "soup", italian: "zuppa", audio: "zuppa.mp3", category: "food-drink" },
    { english: "salad", italian: "insalata", audio: "insalata.mp3", category: "food-drink" },
    { english: "cheese", italian: "formaggio", audio: "formaggio.mp3", category: "food-drink" },
    { english: "egg", italian: "uovo", audio: "uovo.mp3", category: "food-drink" },
    { english: "water", italian: "acqua", audio: "acqua.mp3", category: "food-drink" },
    { english: "coffee", italian: "caffè", audio: "caffe.mp3", category: "food-drink" },
    { english: "tea", italian: "tè", audio: "te.mp3", category: "food-drink" },
    { english: "bread", italian: "pane", audio: "pane.mp3", category: "food-drink" },
    { english: "milk", italian: "latte", audio: "latte.mp3", category: "food-drink" },

    // BASIC VERBS (NEW A1)
    { english: "to go", italian: "andare", audio: "andare.mp3", category: "verb" },
    { english: "to come", italian: "venire", audio: "venir.mp3", category: "verb" },
    { english: "to live", italian: "vivere", audio: "vivere.mp3", category: "verb" },
    { english: "to eat", italian: "mangiare", audio: "mangiare.mp3", category: "verb" },
    { english: "to drink", italian: "bere", audio: "bere.mp3", category: "verb" },
    { english: "to see", italian: "vedere", audio: "vedere.mp3", category: "verb" },
    { english: "to know", italian: "sapere", audio: "sapere.mp3", category: "verb" },

    // ADJECTIVES (NEW A1)
    { english: "big", italian: "grande", audio: "grande.mp3", category: "adjective" },
    { english: "small", italian: "piccolo", audio: "piccolo.mp3", category: "adjective" },
    { english: "good", italian: "buono", audio: "buono.mp3", category: "adjective" },
    { english: "bad", italian: "cattivo", audio: "cattivo.mp3", category: "adjective" },

    // NUMBERS (NEW A1)
    { english: "one", italian: "uno", audio: "uno.mp3", category: "number" },
    { english: "two", italian: "due", audio: "due.mp3", category: "number" },
    { english: "three", italian: "tre", audio: "tre.mp3", category: "number" },
    { english: "four", italian: "quattro", audio: "quattro.mp3", category: "number" },
    { english: "five", italian: "cinque", audio: "cinque.mp3", category: "number" },
    { english: "six", italian: "sei", audio: "sei.mp3", category: "number" },
    { english: "seven", italian: "sette", audio: "sette.mp3", category: "number" },
    { english: "eight", italian: "otto", audio: "otto.mp3", category: "number" },
    { english: "nine", italian: "nove", audio: "nove.mp3", category: "number" },
    { english: "ten", italian: "dieci", audio: "dieci.mp3", category: "number" }
];
