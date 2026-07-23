// ===============================
// CEFR B2 WORD BANK (EXPANDED)
// ===============================

const B2_WORDS = [
    // ADVANCED CONNECTORS (B2)
    { english: "however", italian: "tuttavia", audio: "tuttavia.mp3", category: "connector" },
    { english: "on the other hand", italian: "d'altra parte", audio: "daltra-parte.mp3", category: "connector" },
    { english: "as a result", italian: "di conseguenza", audio: "di-conseguenza.mp3", category: "connector" },
    { english: "in my opinion", italian: "secondo me", audio: "secondo-me.mp3", category: "connector" },
    { english: "furthermore", italian: "inoltre", audio: "inoltre.mp3", category: "connector" },
    { english: "although", italian: "sebbene", audio: "sebbene.mp3", category: "connector" },
    { english: "therefore", italian: "quindi / perciò", audio: "quindi.mp3", category: "connector" },
    { english: "in contrast", italian: "al contrario", audio: "al-contrario.mp3", category: "connector" },

    // ADVANCED OPINIONS & EXPRESSIONS (B2)
    { english: "I believe that…", italian: "Credo che…", audio: "credo-che.mp3", category: "core" },
    { english: "It seems that…", italian: "Sembra che…", audio: "sembra-che.mp3", category: "core" },
    { english: "From my perspective", italian: "Dalla mia prospettiva", audio: "dalla-mia-prospettiva.mp3", category: "core" },
    { english: "In general", italian: "In generale", audio: "in-generale.mp3", category: "core" },
    { english: "In conclusion", italian: "In conclusione", audio: "in-conclusione.mp3", category: "core" },

    // WORK & STUDY (ADVANCED B2)
    { english: "project", italian: "progetto", audio: "progetto.mp3", category: "work" },
    { english: "deadline", italian: "scadenza", audio: "scadenza.mp3", category: "work" },
    { english: "responsibility", italian: "responsabilità", audio: "responsabilita.mp3", category: "work" },
    { english: "experience", italian: "esperienza", audio: "esperienza.mp3", category: "work" },
    { english: "skills", italian: "competenze", audio: "competenze.mp3", category: "work" },
    { english: "training", italian: "formazione", audio: "formazione.mp3", category: "work" },
    { english: "career", italian: "carriera", audio: "carriera.mp3", category: "work" },
    { english: "opportunity", italian: "opportunità", audio: "opportunita.mp3", category: "work" },

    // ABSTRACT TOPICS (B2)
    { english: "problem", italian: "problema", audio: "problema.mp3", category: "core" },
    { english: "solution", italian: "soluzione", audio: "soluzione.mp3", category: "core" },
    { english: "reason", italian: "ragione", audio: "ragione.mp3", category: "core" },
    { english: "choice", italian: "scelta", audio: "scelta.mp3", category: "core" },
    { english: "change", italian: "cambiamento", audio: "cambiamento.mp3", category: "core" },
    { english: "situation", italian: "situazione", audio: "situazione.mp3", category: "core" },

    // ADVANCED TRAVEL (B2)
    { english: "destination", italian: "destinazione", audio: "destinazione.mp3", category: "travel" },
    { english: "accommodation", italian: "alloggio", audio: "alloggio.mp3", category: "travel" },
    { english: "transportation", italian: "trasporto", audio: "trasporto.mp3", category: "travel" },
    { english: "schedule", italian: "orario / programma", audio: "orario.mp3", category: "travel" },
    { english: "guide", italian: "guida", audio: "guida.mp3", category: "travel" },
    { english: "tour", italian: "tour", audio: "tour.mp3", category: "travel" },

    // FOOD & DRINK (ADVANCED B2 — FOR SENTENCE TAB)
    { english: "I would like a table for two", italian: "Vorrei un tavolo per due", audio: "tavolo-per-due.mp3", category: "food-drink" },
    { english: "Do you have any recommendations?", italian: "Ha qualche raccomandazione?", audio: "qualche-raccomandazione.mp3", category: "food-drink" },
    { english: "Is this dish spicy?", italian: "Questo piatto è piccante?", audio: "piatto-picante.mp3", category: "food-drink" },
    { english: "I have a food allergy", italian: "Ho un'allergia alimentare", audio: "allergia-alimentare.mp3", category: "food-drink" },
    { english: "Could you bring the bill?", italian: "Potrebbe portare il conto?", audio: "portare-il-conto.mp3", category: "food-drink" },
    { english: "Can I have a glass of water?", italian: "Posso avere un bicchiere d'acqua?", audio: "bicchiere-dacqua.mp3", category: "food-drink" },

    // ADVANCED VERBS (B2)
    { english: "to improve", italian: "migliorare", audio: "migliorare.mp3", category: "verb" },
    { english: "to develop", italian: "sviluppare", audio: "sviluppare.mp3", category: "verb" },
    { english: "to recommend", italian: "raccomandare", audio: "raccomandare.mp3", category: "verb" },
    { english: "to organize", italian: "organizzare", audio: "organizzare.mp3", category: "verb" },
    { english: "to prepare", italian: "preparare", audio: "preparare.mp3", category: "verb" },
    { english: "to solve", italian: "risolvere", audio: "risolvere.mp3", category: "verb" },
    { english: "to compare", italian: "confrontare", audio: "confrontare.mp3", category: "verb" },
    { english: "to describe", italian: "descrivere", audio: "descrivere.mp3", category: "verb" },

    // ADVANCED ADJECTIVES (B2)
    { english: "effective", italian: "efficace", audio: "efficace.mp3", category: "adjective" },
    { english: "efficient", italian: "efficiente", audio: "efficiente.mp3", category: "adjective" },
    { english: "necessary", italian: "necessario", audio: "necessario.mp3", category: "adjective" },
    { english: "possible", italian: "possibile", audio: "possibile.mp3", category: "adjective" },
    { english: "comfortable", italian: "comodo", audio: "comodo.mp3", category: "adjective" },
    { english: "available", italian: "disponibile", audio: "disponibile.mp3", category: "adjective" },
    { english: "correct", italian: "corretto", audio: "corretto.mp3", category: "adjective" },
    { english: "wrong", italian: "sbagliato", audio: "sbagliato.mp3", category: "adjective" },

    // QUANTITIES & COMPLEX EXPRESSIONS (B2)
    { english: "majority", italian: "maggioranza", audio: "maggioranza.mp3", category: "number" },
    { english: "minority", italian: "minoranza", audio: "minoranza.mp3", category: "number" },
    { english: "approximately", italian: "approssimativamente", audio: "approssimativamente.mp3", category: "number" },
    { english: "almost", italian: "quasi", audio: "casi.mp3", category: "number" }
];
