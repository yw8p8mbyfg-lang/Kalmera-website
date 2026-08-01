/* ============================================================
   KALMERA — translations
   English is the source of truth and lives in index.html, so it
   needs no entry here. Every other language overrides the text.
   Product names (KALMERA, KARBON, KLOUD, Mass, Base, Drift) are
   never translated.
   ============================================================ */

/* Numbers, weights, sizes and prices are the same in every language,
   so they live here once instead of in each translation. */
var GARMENT_DATA = {
  hoodie:     { weight: "500 g/m² · 14.7 oz", fabric: "fleece", fit: "oversized", mark: "centreChest", sizes: "S–2XL", price: "£50" },
  tee:        { weight: "400 g/m² · 11.8 oz", fabric: "cotton", fit: "boxy",      mark: "leftChest",   sizes: "S–2XL", price: "£30" },
  sweatpants: { weight: "420 g/m² · 12.4 oz", fabric: "heavy",  fit: "straight",  mark: "vertLeg",     sizes: "S–XL",  price: "£40" }
};

var PRODUCT_MAP = {
  "karbon-hoodie":     { line: "KARBON", garment: "hoodie",     colour: "black" },
  "karbon-tee":        { line: "KARBON", garment: "tee",        colour: "black" },
  "karbon-sweatpants": { line: "KARBON", garment: "sweatpants", colour: "black" },
  "kloud-hoodie":      { line: "KLOUD",  garment: "hoodie",     colour: "white" },
  "kloud-tee":         { line: "KLOUD",  garment: "tee",        colour: "white" },
  "kloud-sweatpants":  { line: "KLOUD",  garment: "sweatpants", colour: "white" }
};

var LANGS = {};

/* ---------------------------------------------------------- FRANÇAIS */
LANGS.fr = {
  ui: {
    navReleases: "Sorties", navTimeline: "Chronologie", navFaq: "FAQ", navContact: "Contact",
    basket: "Panier", ambientOff: "Ambiance désactivée", ambientOn: "Ambiance activée",
    heroTop: "Créer une nouvelle ère de l'essentiel", heroEst: "ANGLETERRE · Depuis 2025",
    heroRole: "Deux pièces, conçues avec une attention obsessionnelle. Rien de gaspillé, tout est intentionnel.",
    scroll: "DÉFILER",
    secReleases: "Sorties", secTimeline: "La chronologie", secFaq: "Questions",
    cntYears: "2025 — 2027", cntGoodToKnow: "Bon à savoir",
    drop01: "Drop 01", drop01meta: "02 Lignes · Oct 2026",
    drop02: "Drop 02", drop02meta: "Prévu 2027",
    dropEmpty: "En atelier — rien sur la table pour l'instant. Inscrivez-vous pour être informé en premier.",
    karbonMeta: "L'Ancre · Noir", kloudMeta: "Le Contrepoint · Blanc",
    aboutHtml: "KALMERA est un studio d'essentiels en Angleterre, qui crée les <span class=\"accent\">pièces les moins nombreuses, les meilleures</span> — tissu travaillé, coupe obsessionnelle, rien de gaspillé. Faites pour être portées des années, pas des saisons.",
    aboutJury: "( fondé en 2025 · bienvenue dans une nouvelle ère ✺ )",
    tl: [
      { d: "T4 2025", h: "Fondation de KALMERA Apparel", p: "Une table, une seule idée — créer les meilleurs essentiels, les moins nombreux, et rien d'autre." },
      { d: "T1 2026", h: "Développement du tissu", p: "Échantillonnage d'une molleton lourd 500 g/m² jusqu'à ce que KARBON et KLOUD tiennent leur forme et leur toucher." },
      { d: "T2 2026", h: "Identité & studio", p: "L'identité KALMERA prend forme — la marque, la typographie, la philosophie du rien gaspillé." },
      { d: "Oct 2026", h: "Drop 01 — l'objectif", p: "Le plan : KARBON & KLOUD arrivent, chacun en sweat à capuche, t-shirt et pantalon. Pas de réassort — une fois partis, ils se reposent." },
      { d: "2027", h: "Drop 02 — à l'horizon", p: "Le prochain chapitre, encore à venir. La liste l'apprend en premier." }
    ],
    faq: [
      { q: "Combien de temps prendra ma commande ?", a: "Chaque pièce est <strong>fabriquée à la commande</strong> — imprimée à la main après votre achat, pour ne rien gaspiller. La production prend quelques jours, puis l'expédition. <strong>La livraison standard est gratuite et prend environ 30 jours dans le monde entier ; l'Express (~10 jours) est disponible au paiement.</strong> Vous recevrez un numéro de suivi dès l'expédition." },
      { q: "Pourquoi la fabrication à la commande ?", a: "Parce que c'est la philosophie KALMERA — <strong>les pièces les moins nombreuses, les meilleures, rien de gaspillé.</strong> Fabriquer chaque pièce uniquement à la commande signifie aucune surproduction, aucun déchet, aucun stock mort. Le compromis est une courte attente ; l'avantage est une pièce faite pour vous." },
      { q: "Quelle taille choisir ?", a: "Les pièces sont coupées <strong>oversize / carrées</strong> par choix. Pour un vrai look oversize, prenez votre taille habituelle ; pour une coupe plus ajustée, prenez une taille en dessous. Un guide des tailles complet figure sur chaque produit." },
      { q: "Livrez-vous dans le monde entier ?", a: "<strong>Oui — dans le monde entier.</strong> La livraison standard est gratuite partout. Les délais varient légèrement selon le pays ; vous verrez l'estimation et un numéro de suivi après commande." },
      { q: "Retours & échanges", a: "Comme chaque pièce est <strong>fabriquée à la commande</strong>, nous ne pouvons pas accepter les retours pour changement d'avis. Mais si votre article arrive <strong>défectueux, endommagé, ou n'est pas le bon article/taille</strong>, écrivez-nous sous 7 jours à <strong>kalmera.team@gmail.com</strong> avec une photo et nous réglerons cela. Consultez le guide des tailles avant de commander." },
      { q: "Comment vous contacter ?", a: "Écrivez à <strong>kalmera.team@gmail.com</strong> pour tout — commandes, tailles, ou simplement pour dire bonjour. Nous lisons chaque message." }
    ],
    contactLead: "Habillons la nouvelle ère", joinList: "rejoindre la liste", watchYt: "regarder sur youtube ↗",
    footerMid: "©—2026 · Bienvenue dans une nouvelle ère", footerRight: "Conçu en Angleterre ✺",
    close: "Fermer", productImage: "Image du produit", sizeGuide: "Guide des tailles",
    deliveryNote: "Fabriqué à la commande · Livraison standard gratuite (~30 jours) ou Express (~10 jours) au paiement.",
    addToBasket: "ajouter au panier →",
    yourBasket: "Votre panier", basketEmpty: "Votre panier est vide.",
    delivery: "Livraison", standard: "Standard", express: "Express",
    stdTime: "Fabriqué à la commande · ~30 jours", expTime: "Fabriqué à la commande · ~10 jours",
    free: "Gratuit", freeStandard: "Gratuit · Standard",
    subtotal: "Sous-total", shipping: "Livraison", total: "Total", pay: "Payer", remove: "Retirer",
    cardSlot: "Votre nom, adresse et carte sont saisis en toute sécurité à l'étape suivante, gérée par Stripe. KALMERA ne voit jamais vos données bancaires.",
    coNote: "Fabriqué à la commande — imprimé à la main après votre commande, puis expédié dans le monde entier. Prévoyez du temps pour la production avant le drop.",
    coSecure: "🔒 Paiements sécurisés par Stripe · KALMERA ne voit jamais vos données bancaires",
    payLoading: "Redirection vers le paiement sécurisé…",
    payError: "Désolé — un problème est survenu au démarrage du paiement. Réessayez, ou écrivez à kalmera.team@gmail.com."
  },
  sp: { colour: "Couleur", weight: "Poids", fabric: "Tissu", fit: "Coupe", mark: "Marque", sizes: "Tailles", made: "Fabrication", price: "Prix", drop: "Drop" },
  v: {
    black: "Noir", white: "Blanc",
    fleece: "Molleton lourd", cotton: "Coton lourd", heavy: "Poids lourd",
    oversized: "Oversize", boxy: "Oversize carré", straight: "Jambe droite",
    centreChest: "Centre poitrine", leftChest: "Poitrine gauche", vertLeg: "Vertical, bas de jambe",
    toOrder: "À la commande · expédié dans le monde entier", freeShip: "livraison gratuite", drop01: "01 — Oct 2026"
  },
  g: {
    hoodie: {
      name: "Sweat à capuche", gal: ["Devant", "Dos", "Détail", "Capuche"],
      desc: ["L'ancre du drop. Construit sur un molleton lourd de 500 g/m² — dense, structuré et substantiel en main. Fait pour garder sa forme et se porter des années, pas des saisons.",
             "Coupe oversize, intérieur brossé moelleux, extérieur épuré et réfléchi. La marque KALMERA est centrée sur la poitrine, imprimée à la commande. Fabriqué au moment de votre commande, expédié dans le monde entier — rien de gaspillé."]
    },
    tee: {
      name: "T-shirt", gal: ["Devant", "Dos", "Détail", "Col"],
      desc: ["La pièce du quotidien. Un t-shirt carré et oversize à un véritable 400 g/m² — lourd pour un t-shirt, avec une vraie structure et un beau tombé.",
             "Une petite marque KALMERA sur la poitrine gauche, imprimée à la commande. Expédié dans le monde entier. Conçu pour bien tomber et durer."]
    },
    sweatpants: {
      name: "Pantalon de survêtement", gal: ["Devant", "Dos", "Détail", "Ceinture"],
      desc: ["L'assortiment du sweat. Pantalon lourd 420 g/m² à coupe droite — un peu plus léger que le sweat, par choix, pour bouger.",
             "La marque KALMERA descend verticalement le long du bas de jambe, imprimée à la commande. Expédié dans le monde entier. L'ensemble complet, de la tête aux pieds."]
    }
  },
  sg: {
    hoodie: { cols: ["Taille", "Poitrine (cm)", "Longueur (cm)", "Manche (cm)"], note: "Coupe oversize. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RW0035." },
    tee: { cols: ["Taille", "Poitrine (cm)", "Longueur (cm)"], note: "Coupe oversize carrée. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RT0080." },
    sweatpants: { cols: ["Taille", "Tour de taille (cm)", "Entrejambe (cm)", "Longueur (cm)"], note: "Coupe jambe droite. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RK0009." }
  }
};

/* ---------------------------------------------------------- DEUTSCH */
LANGS.de = {
  ui: {
    navReleases: "Releases", navTimeline: "Zeitleiste", navFaq: "FAQ", navContact: "Kontakt",
    basket: "Warenkorb", ambientOff: "Ambient aus", ambientOn: "Ambient an",
    heroTop: "Eine neue Ära der Essentials", heroEst: "ENGLAND · seit 2025",
    heroRole: "Zwei Teile, mit besessener Sorgfalt entwickelt. Nichts verschwendet, alles bewusst.",
    scroll: "SCROLLEN",
    secReleases: "Releases", secTimeline: "Die Zeitleiste", secFaq: "Fragen",
    cntYears: "2025 — 2027", cntGoodToKnow: "Gut zu wissen",
    drop01: "Drop 01", drop01meta: "02 Linien · Okt 2026",
    drop02: "Drop 02", drop02meta: "Kommt 2027",
    dropEmpty: "Im Studio — noch nichts auf dem Tisch. Trag dich ein, um es zuerst zu erfahren.",
    karbonMeta: "Der Anker · Schwarz", kloudMeta: "Der Gegenpol · Weiß",
    aboutHtml: "KALMERA ist ein Essentials-Studio in England und baut die <span class=\"accent\">wenigsten, besten</span> Teile — entwickelter Stoff, besessene Passform, nichts verschwendet. Gemacht, um jahrelang getragen zu werden, nicht saisonweise.",
    aboutJury: "( gegründet 2025 · willkommen in einer neuen Ära ✺ )",
    tl: [
      { d: "Q4 2025", h: "KALMERA Apparel gegründet", p: "Ein Tisch, eine einzige Idee — die wenigsten, besten Essentials bauen und sonst nichts." },
      { d: "Q1 2026", h: "Stoffentwicklung", p: "Musterung von schwerem 500 g/m² Fleece, bis KARBON und KLOUD Form und Griff halten." },
      { d: "Q2 2026", h: "Identität & Studio", p: "Die KALMERA-Identität nimmt Form an — das Zeichen, die Schrift, die Philosophie des Nichts-Verschwendens." },
      { d: "Okt 2026", h: "Drop 01 — das Ziel", p: "Der Plan: KARBON & KLOUD landen, jeweils als Hoodie, Tee und Jogginghose. Kein Restock — sind sie weg, ruhen sie." },
      { d: "2027", h: "Drop 02 — am Horizont", p: "Das nächste Kapitel, noch offen. Die Liste erfährt es zuerst." }
    ],
    faq: [
      { q: "Wie lange dauert meine Bestellung?", a: "Jedes Teil wird <strong>auf Bestellung gefertigt</strong> — nach deinem Kauf von Hand bedruckt, damit nichts verschwendet wird. Die Produktion dauert einige Tage, dann der Versand. <strong>Der Standardversand ist kostenlos und dauert weltweit etwa 30 Tage; Express (~10 Tage) ist an der Kasse verfügbar.</strong> Du erhältst eine Sendungsnummer, sobald verschickt wurde." },
      { q: "Warum auf Bestellung gefertigt?", a: "Weil es der KALMERA-Weg ist — <strong>die wenigsten, besten Teile, nichts verschwendet.</strong> Jedes Teil erst bei Bestellung zu fertigen bedeutet keine Überproduktion, keine Deponie, keine Restbestände. Der Kompromiss ist eine kurze Wartezeit; der Gewinn ist ein Teil, das für dich gemacht wurde." },
      { q: "Welche Größe soll ich wählen?", a: "Die Teile sind bewusst <strong>oversized / kastig</strong> geschnitten. Für einen echten Oversized-Look nimm deine normale Größe; für eine engere Passform eine Nummer kleiner. Eine vollständige Größentabelle findest du bei jedem Produkt." },
      { q: "Versendet ihr weltweit?", a: "<strong>Ja — weltweit.</strong> Der Standardversand ist überall kostenlos. Die Lieferzeiten variieren je nach Land leicht; nach der Bestellung siehst du die Schätzung und eine Sendungsnummer." },
      { q: "Rückgabe & Umtausch", a: "Da jedes Teil <strong>auf Bestellung gefertigt</strong> wird, können wir keine allgemeine Rückgabe bei Sinneswandel annehmen. Kommt dein Artikel jedoch <strong>defekt, beschädigt oder als falscher Artikel/falsche Größe</strong> an, schreib uns innerhalb von 7 Tagen an <strong>kalmera.team@gmail.com</strong> mit einem Foto und wir bringen es in Ordnung." },
      { q: "Wie erreiche ich euch?", a: "Schreib an <strong>kalmera.team@gmail.com</strong> für alles — Bestellungen, Größen oder einfach nur Hallo. Wir lesen jede Nachricht." }
    ],
    contactLead: "Kleiden wir die neue Ära", joinList: "in die liste eintragen", watchYt: "auf youtube ansehen ↗",
    footerMid: "©—2026 · Willkommen in einer neuen Ära", footerRight: "Entworfen in England ✺",
    close: "Schließen", productImage: "Produktbild", sizeGuide: "Größentabelle",
    deliveryNote: "Auf Bestellung gefertigt · Kostenloser Standardversand (~30 Tage) oder Express (~10 Tage) an der Kasse.",
    addToBasket: "in den warenkorb →",
    yourBasket: "Dein Warenkorb", basketEmpty: "Dein Warenkorb ist leer.",
    delivery: "Versand", standard: "Standard", express: "Express",
    stdTime: "Auf Bestellung · ~30 Tage", expTime: "Auf Bestellung · ~10 Tage",
    free: "Gratis", freeStandard: "Gratis · Standard",
    subtotal: "Zwischensumme", shipping: "Versand", total: "Gesamt", pay: "Bezahlen", remove: "Entfernen",
    cardSlot: "Name, Adresse und Karte werden im nächsten Schritt sicher von Stripe erfasst. KALMERA sieht deine Kartendaten nie.",
    coNote: "Auf Bestellung gefertigt — nach deiner Bestellung von Hand bedruckt und weltweit verschickt. Plane Zeit für die Produktion ein.",
    coSecure: "🔒 Zahlungen abgesichert durch Stripe · KALMERA sieht deine Kartendaten nie",
    payLoading: "Weiterleitung zur sicheren Kasse…",
    payError: "Entschuldigung — beim Start der Kasse ist etwas schiefgelaufen. Bitte versuche es erneut oder schreibe an kalmera.team@gmail.com."
  },
  sp: { colour: "Farbe", weight: "Gewicht", fabric: "Stoff", fit: "Passform", mark: "Zeichen", sizes: "Größen", made: "Fertigung", price: "Preis", drop: "Drop" },
  v: {
    black: "Schwarz", white: "Weiß",
    fleece: "Schweres Fleece", cotton: "Schwere Baumwolle", heavy: "Schwer",
    oversized: "Oversized", boxy: "Kastig oversized", straight: "Gerades Bein",
    centreChest: "Brustmitte", leftChest: "Linke Brust", vertLeg: "Vertikal, unteres Bein",
    toOrder: "Auf Bestellung · weltweiter Versand", freeShip: "kostenloser Versand", drop01: "01 — Okt 2026"
  },
  g: {
    hoodie: {
      name: "Hoodie", gal: ["Vorne", "Hinten", "Detail", "Kapuze"],
      desc: ["Der Anker des Drops. Gebaut auf schwerem 500 g/m² Fleece — dicht, strukturiert und spürbar substanziell. Gemacht, um seine Form zu halten und jahrelang getragen zu werden.",
             "Oversized-Passform, weich angerautes Innenfutter, klares durchdachtes Äußeres. Das KALMERA-Zeichen sitzt mittig auf der Brust, auf Bestellung gedruckt. Weltweiter Versand — nichts verschwendet."]
    },
    tee: {
      name: "Tee", gal: ["Vorne", "Hinten", "Detail", "Kragen"],
      desc: ["Die Alltagshälfte. Ein kastiges, oversized T-Shirt mit echten 400 g/m² — schwer für ein Tee, mit echter Struktur und sauberem Fall.",
             "Ein kleines KALMERA-Zeichen auf der linken Brust, auf Bestellung gedruckt. Weltweiter Versand. Gebaut, um zu sitzen und zu halten."]
    },
    sweatpants: {
      name: "Jogginghose", gal: ["Vorne", "Hinten", "Detail", "Bund"],
      desc: ["Das Gegenstück zum Hoodie. Schwere 420 g/m² Jogginghose mit geradem Bein — bewusst etwas leichter als der Hoodie, damit sie mitgeht.",
             "Das KALMERA-Zeichen läuft senkrecht am unteren Bein herunter, auf Bestellung gedruckt. Weltweiter Versand. Das komplette Set, von Kopf bis Fuß."]
    }
  },
  sg: {
    hoodie: { cols: ["Größe", "Brust (cm)", "Länge (cm)", "Ärmel (cm)"], note: "Oversized-Passform. Maße des flach liegenden Kleidungsstücks. Vorläufige Werte — mit Tapstitch RW0035 abgleichen." },
    tee: { cols: ["Größe", "Brust (cm)", "Länge (cm)"], note: "Kastige Oversized-Passform. Maße flach liegend. Vorläufige Werte — mit Tapstitch RT0080 abgleichen." },
    sweatpants: { cols: ["Größe", "Taille (cm)", "Schrittlänge (cm)", "Länge (cm)"], note: "Gerades Bein. Maße flach liegend. Vorläufige Werte — mit Tapstitch RK0009 abgleichen." }
  }
};
/* ============================================================
   KALMERA — translations
   English is the source of truth and lives in index.html, so it
   needs no entry here. Every other language overrides the text.
   Product names (KALMERA, KARBON, KLOUD, Mass, Base, Drift) are
   never translated.
   ============================================================ */

/* Numbers, weights, sizes and prices are the same in every language,
   so they live here once instead of in each translation. */
var GARMENT_DATA = {
  hoodie:     { weight: "500 g/m² · 14.7 oz", fabric: "fleece", fit: "oversized", mark: "centreChest", sizes: "S–2XL", price: "£50" },
  tee:        { weight: "400 g/m² · 11.8 oz", fabric: "cotton", fit: "boxy",      mark: "leftChest",   sizes: "S–2XL", price: "£30" },
  sweatpants: { weight: "420 g/m² · 12.4 oz", fabric: "heavy",  fit: "straight",  mark: "vertLeg",     sizes: "S–XL",  price: "£40" }
};

var PRODUCT_MAP = {
  "karbon-hoodie":     { line: "KARBON", garment: "hoodie",     colour: "black" },
  "karbon-tee":        { line: "KARBON", garment: "tee",        colour: "black" },
  "karbon-sweatpants": { line: "KARBON", garment: "sweatpants", colour: "black" },
  "kloud-hoodie":      { line: "KLOUD",  garment: "hoodie",     colour: "white" },
  "kloud-tee":         { line: "KLOUD",  garment: "tee",        colour: "white" },
  "kloud-sweatpants":  { line: "KLOUD",  garment: "sweatpants", colour: "white" }
};

var LANGS = {};

/* ---------------------------------------------------------- FRANÇAIS */
LANGS.fr = {
  ui: {
    navReleases: "Sorties", navTimeline: "Chronologie", navFaq: "FAQ", navContact: "Contact",
    basket: "Panier", ambientOff: "Ambiance désactivée", ambientOn: "Ambiance activée",
    heroTop: "Créer une nouvelle ère de l'essentiel", heroEst: "ANGLETERRE · Depuis 2025",
    heroRole: "Deux pièces, conçues avec une attention obsessionnelle. Rien de gaspillé, tout est intentionnel.",
    scroll: "DÉFILER",
    secReleases: "Sorties", secTimeline: "La chronologie", secFaq: "Questions",
    cntYears: "2025 — 2027", cntGoodToKnow: "Bon à savoir",
    drop01: "Drop 01", drop01meta: "02 Lignes · Oct 2026",
    drop02: "Drop 02", drop02meta: "Prévu 2027",
    dropEmpty: "En atelier — rien sur la table pour l'instant. Inscrivez-vous pour être informé en premier.",
    karbonMeta: "L'Ancre · Noir", kloudMeta: "Le Contrepoint · Blanc",
    aboutHtml: "KALMERA est un studio d'essentiels en Angleterre, qui crée les <span class=\"accent\">pièces les moins nombreuses, les meilleures</span> — tissu travaillé, coupe obsessionnelle, rien de gaspillé. Faites pour être portées des années, pas des saisons.",
    aboutJury: "( fondé en 2025 · bienvenue dans une nouvelle ère ✺ )",
    tl: [
      { d: "T4 2025", h: "Fondation de KALMERA Apparel", p: "Une table, une seule idée — créer les meilleurs essentiels, les moins nombreux, et rien d'autre." },
      { d: "T1 2026", h: "Développement du tissu", p: "Échantillonnage d'une molleton lourd 500 g/m² jusqu'à ce que KARBON et KLOUD tiennent leur forme et leur toucher." },
      { d: "T2 2026", h: "Identité & studio", p: "L'identité KALMERA prend forme — la marque, la typographie, la philosophie du rien gaspillé." },
      { d: "Oct 2026", h: "Drop 01 — l'objectif", p: "Le plan : KARBON & KLOUD arrivent, chacun en sweat à capuche, t-shirt et pantalon. Pas de réassort — une fois partis, ils se reposent." },
      { d: "2027", h: "Drop 02 — à l'horizon", p: "Le prochain chapitre, encore à venir. La liste l'apprend en premier." }
    ],
    faq: [
      { q: "Combien de temps prendra ma commande ?", a: "Chaque pièce est <strong>fabriquée à la commande</strong> — imprimée à la main après votre achat, pour ne rien gaspiller. La production prend quelques jours, puis l'expédition. <strong>La livraison standard est gratuite et prend environ 30 jours dans le monde entier ; l'Express (~10 jours) est disponible au paiement.</strong> Vous recevrez un numéro de suivi dès l'expédition." },
      { q: "Pourquoi la fabrication à la commande ?", a: "Parce que c'est la philosophie KALMERA — <strong>les pièces les moins nombreuses, les meilleures, rien de gaspillé.</strong> Fabriquer chaque pièce uniquement à la commande signifie aucune surproduction, aucun déchet, aucun stock mort. Le compromis est une courte attente ; l'avantage est une pièce faite pour vous." },
      { q: "Quelle taille choisir ?", a: "Les pièces sont coupées <strong>oversize / carrées</strong> par choix. Pour un vrai look oversize, prenez votre taille habituelle ; pour une coupe plus ajustée, prenez une taille en dessous. Un guide des tailles complet figure sur chaque produit." },
      { q: "Livrez-vous dans le monde entier ?", a: "<strong>Oui — dans le monde entier.</strong> La livraison standard est gratuite partout. Les délais varient légèrement selon le pays ; vous verrez l'estimation et un numéro de suivi après commande." },
      { q: "Retours & échanges", a: "Comme chaque pièce est <strong>fabriquée à la commande</strong>, nous ne pouvons pas accepter les retours pour changement d'avis. Mais si votre article arrive <strong>défectueux, endommagé, ou n'est pas le bon article/taille</strong>, écrivez-nous sous 7 jours à <strong>kalmera.team@gmail.com</strong> avec une photo et nous réglerons cela. Consultez le guide des tailles avant de commander." },
      { q: "Comment vous contacter ?", a: "Écrivez à <strong>kalmera.team@gmail.com</strong> pour tout — commandes, tailles, ou simplement pour dire bonjour. Nous lisons chaque message." }
    ],
    contactLead: "Habillons la nouvelle ère", joinList: "rejoindre la liste", watchYt: "regarder sur youtube ↗",
    footerMid: "©—2026 · Bienvenue dans une nouvelle ère", footerRight: "Conçu en Angleterre ✺",
    close: "Fermer", productImage: "Image du produit", sizeGuide: "Guide des tailles",
    deliveryNote: "Fabriqué à la commande · Livraison standard gratuite (~30 jours) ou Express (~10 jours) au paiement.",
    addToBasket: "ajouter au panier →",
    yourBasket: "Votre panier", basketEmpty: "Votre panier est vide.",
    delivery: "Livraison", standard: "Standard", express: "Express",
    stdTime: "Fabriqué à la commande · ~30 jours", expTime: "Fabriqué à la commande · ~10 jours",
    free: "Gratuit", freeStandard: "Gratuit · Standard",
    subtotal: "Sous-total", shipping: "Livraison", total: "Total", pay: "Payer", remove: "Retirer",
    cardSlot: "Votre nom, adresse et carte sont saisis en toute sécurité à l'étape suivante, gérée par Stripe. KALMERA ne voit jamais vos données bancaires.",
    coNote: "Fabriqué à la commande — imprimé à la main après votre commande, puis expédié dans le monde entier. Prévoyez du temps pour la production avant le drop.",
    coSecure: "🔒 Paiements sécurisés par Stripe · KALMERA ne voit jamais vos données bancaires",
    payLoading: "Redirection vers le paiement sécurisé…",
    payError: "Désolé — un problème est survenu au démarrage du paiement. Réessayez, ou écrivez à kalmera.team@gmail.com."
  },
  sp: { colour: "Couleur", weight: "Poids", fabric: "Tissu", fit: "Coupe", mark: "Marque", sizes: "Tailles", made: "Fabrication", price: "Prix", drop: "Drop" },
  v: {
    black: "Noir", white: "Blanc",
    fleece: "Molleton lourd", cotton: "Coton lourd", heavy: "Poids lourd",
    oversized: "Oversize", boxy: "Oversize carré", straight: "Jambe droite",
    centreChest: "Centre poitrine", leftChest: "Poitrine gauche", vertLeg: "Vertical, bas de jambe",
    toOrder: "À la commande · expédié dans le monde entier", freeShip: "livraison gratuite", drop01: "01 — Oct 2026"
  },
  g: {
    hoodie: {
      name: "Sweat à capuche", gal: ["Devant", "Dos", "Détail", "Capuche"],
      desc: ["L'ancre du drop. Construit sur un molleton lourd de 500 g/m² — dense, structuré et substantiel en main. Fait pour garder sa forme et se porter des années, pas des saisons.",
             "Coupe oversize, intérieur brossé moelleux, extérieur épuré et réfléchi. La marque KALMERA est centrée sur la poitrine, imprimée à la commande. Fabriqué au moment de votre commande, expédié dans le monde entier — rien de gaspillé."]
    },
    tee: {
      name: "T-shirt", gal: ["Devant", "Dos", "Détail", "Col"],
      desc: ["La pièce du quotidien. Un t-shirt carré et oversize à un véritable 400 g/m² — lourd pour un t-shirt, avec une vraie structure et un beau tombé.",
             "Une petite marque KALMERA sur la poitrine gauche, imprimée à la commande. Expédié dans le monde entier. Conçu pour bien tomber et durer."]
    },
    sweatpants: {
      name: "Pantalon de survêtement", gal: ["Devant", "Dos", "Détail", "Ceinture"],
      desc: ["L'assortiment du sweat. Pantalon lourd 420 g/m² à coupe droite — un peu plus léger que le sweat, par choix, pour bouger.",
             "La marque KALMERA descend verticalement le long du bas de jambe, imprimée à la commande. Expédié dans le monde entier. L'ensemble complet, de la tête aux pieds."]
    }
  },
  sg: {
    hoodie: { cols: ["Taille", "Poitrine (cm)", "Longueur (cm)", "Manche (cm)"], note: "Coupe oversize. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RW0035." },
    tee: { cols: ["Taille", "Poitrine (cm)", "Longueur (cm)"], note: "Coupe oversize carrée. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RT0080." },
    sweatpants: { cols: ["Taille", "Tour de taille (cm)", "Entrejambe (cm)", "Longueur (cm)"], note: "Coupe jambe droite. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RK0009." }
  }
};

/* ---------------------------------------------------------- DEUTSCH */
LANGS.de = {
  ui: {
    navReleases: "Releases", navTimeline: "Zeitleiste", navFaq: "FAQ", navContact: "Kontakt",
    basket: "Warenkorb", ambientOff: "Ambient aus", ambientOn: "Ambient an",
    heroTop: "Eine neue Ära der Essentials", heroEst: "ENGLAND · seit 2025",
    heroRole: "Zwei Teile, mit besessener Sorgfalt entwickelt. Nichts verschwendet, alles bewusst.",
    scroll: "SCROLLEN",
    secReleases: "Releases", secTimeline: "Die Zeitleiste", secFaq: "Fragen",
    cntYears: "2025 — 2027", cntGoodToKnow: "Gut zu wissen",
    drop01: "Drop 01", drop01meta: "02 Linien · Okt 2026",
    drop02: "Drop 02", drop02meta: "Kommt 2027",
    dropEmpty: "Im Studio — noch nichts auf dem Tisch. Trag dich ein, um es zuerst zu erfahren.",
    karbonMeta: "Der Anker · Schwarz", kloudMeta: "Der Gegenpol · Weiß",
    aboutHtml: "KALMERA ist ein Essentials-Studio in England und baut die <span class=\"accent\">wenigsten, besten</span> Teile — entwickelter Stoff, besessene Passform, nichts verschwendet. Gemacht, um jahrelang getragen zu werden, nicht saisonweise.",
    aboutJury: "( gegründet 2025 · willkommen in einer neuen Ära ✺ )",
    tl: [
      { d: "Q4 2025", h: "KALMERA Apparel gegründet", p: "Ein Tisch, eine einzige Idee — die wenigsten, besten Essentials bauen und sonst nichts." },
      { d: "Q1 2026", h: "Stoffentwicklung", p: "Musterung von schwerem 500 g/m² Fleece, bis KARBON und KLOUD Form und Griff halten." },
      { d: "Q2 2026", h: "Identität & Studio", p: "Die KALMERA-Identität nimmt Form an — das Zeichen, die Schrift, die Philosophie des Nichts-Verschwendens." },
      { d: "Okt 2026", h: "Drop 01 — das Ziel", p: "Der Plan: KARBON & KLOUD landen, jeweils als Hoodie, Tee und Jogginghose. Kein Restock — sind sie weg, ruhen sie." },
      { d: "2027", h: "Drop 02 — am Horizont", p: "Das nächste Kapitel, noch offen. Die Liste erfährt es zuerst." }
    ],
    faq: [
      { q: "Wie lange dauert meine Bestellung?", a: "Jedes Teil wird <strong>auf Bestellung gefertigt</strong> — nach deinem Kauf von Hand bedruckt, damit nichts verschwendet wird. Die Produktion dauert einige Tage, dann der Versand. <strong>Der Standardversand ist kostenlos und dauert weltweit etwa 30 Tage; Express (~10 Tage) ist an der Kasse verfügbar.</strong> Du erhältst eine Sendungsnummer, sobald verschickt wurde." },
      { q: "Warum auf Bestellung gefertigt?", a: "Weil es der KALMERA-Weg ist — <strong>die wenigsten, besten Teile, nichts verschwendet.</strong> Jedes Teil erst bei Bestellung zu fertigen bedeutet keine Überproduktion, keine Deponie, keine Restbestände. Der Kompromiss ist eine kurze Wartezeit; der Gewinn ist ein Teil, das für dich gemacht wurde." },
      { q: "Welche Größe soll ich wählen?", a: "Die Teile sind bewusst <strong>oversized / kastig</strong> geschnitten. Für einen echten Oversized-Look nimm deine normale Größe; für eine engere Passform eine Nummer kleiner. Eine vollständige Größentabelle findest du bei jedem Produkt." },
      { q: "Versendet ihr weltweit?", a: "<strong>Ja — weltweit.</strong> Der Standardversand ist überall kostenlos. Die Lieferzeiten variieren je nach Land leicht; nach der Bestellung siehst du die Schätzung und eine Sendungsnummer." },
      { q: "Rückgabe & Umtausch", a: "Da jedes Teil <strong>auf Bestellung gefertigt</strong> wird, können wir keine allgemeine Rückgabe bei Sinneswandel annehmen. Kommt dein Artikel jedoch <strong>defekt, beschädigt oder als falscher Artikel/falsche Größe</strong> an, schreib uns innerhalb von 7 Tagen an <strong>kalmera.team@gmail.com</strong> mit einem Foto und wir bringen es in Ordnung." },
      { q: "Wie erreiche ich euch?", a: "Schreib an <strong>kalmera.team@gmail.com</strong> für alles — Bestellungen, Größen oder einfach nur Hallo. Wir lesen jede Nachricht." }
    ],
    contactLead: "Kleiden wir die neue Ära", joinList: "in die liste eintragen", watchYt: "auf youtube ansehen ↗",
    footerMid: "©—2026 · Willkommen in einer neuen Ära", footerRight: "Entworfen in England ✺",
    close: "Schließen", productImage: "Produktbild", sizeGuide: "Größentabelle",
    deliveryNote: "Auf Bestellung gefertigt · Kostenloser Standardversand (~30 Tage) oder Express (~10 Tage) an der Kasse.",
    addToBasket: "in den warenkorb →",
    yourBasket: "Dein Warenkorb", basketEmpty: "Dein Warenkorb ist leer.",
    delivery: "Versand", standard: "Standard", express: "Express",
    stdTime: "Auf Bestellung · ~30 Tage", expTime: "Auf Bestellung · ~10 Tage",
    free: "Gratis", freeStandard: "Gratis · Standard",
    subtotal: "Zwischensumme", shipping: "Versand", total: "Gesamt", pay: "Bezahlen", remove: "Entfernen",
    cardSlot: "Name, Adresse und Karte werden im nächsten Schritt sicher von Stripe erfasst. KALMERA sieht deine Kartendaten nie.",
    coNote: "Auf Bestellung gefertigt — nach deiner Bestellung von Hand bedruckt und weltweit verschickt. Plane Zeit für die Produktion ein.",
    coSecure: "🔒 Zahlungen abgesichert durch Stripe · KALMERA sieht deine Kartendaten nie",
    payLoading: "Weiterleitung zur sicheren Kasse…",
    payError: "Entschuldigung — beim Start der Kasse ist etwas schiefgelaufen. Bitte versuche es erneut oder schreibe an kalmera.team@gmail.com."
  },
  sp: { colour: "Farbe", weight: "Gewicht", fabric: "Stoff", fit: "Passform", mark: "Zeichen", sizes: "Größen", made: "Fertigung", price: "Preis", drop: "Drop" },
  v: {
    black: "Schwarz", white: "Weiß",
    fleece: "Schweres Fleece", cotton: "Schwere Baumwolle", heavy: "Schwer",
    oversized: "Oversized", boxy: "Kastig oversized", straight: "Gerades Bein",
    centreChest: "Brustmitte", leftChest: "Linke Brust", vertLeg: "Vertikal, unteres Bein",
    toOrder: "Auf Bestellung · weltweiter Versand", freeShip: "kostenloser Versand", drop01: "01 — Okt 2026"
  },
  g: {
    hoodie: {
      name: "Hoodie", gal: ["Vorne", "Hinten", "Detail", "Kapuze"],
      desc: ["Der Anker des Drops. Gebaut auf schwerem 500 g/m² Fleece — dicht, strukturiert und spürbar substanziell. Gemacht, um seine Form zu halten und jahrelang getragen zu werden.",
             "Oversized-Passform, weich angerautes Innenfutter, klares durchdachtes Äußeres. Das KALMERA-Zeichen sitzt mittig auf der Brust, auf Bestellung gedruckt. Weltweiter Versand — nichts verschwendet."]
    },
    tee: {
      name: "Tee", gal: ["Vorne", "Hinten", "Detail", "Kragen"],
      desc: ["Die Alltagshälfte. Ein kastiges, oversized T-Shirt mit echten 400 g/m² — schwer für ein Tee, mit echter Struktur und sauberem Fall.",
             "Ein kleines KALMERA-Zeichen auf der linken Brust, auf Bestellung gedruckt. Weltweiter Versand. Gebaut, um zu sitzen und zu halten."]
    },
    sweatpants: {
      name: "Jogginghose", gal: ["Vorne", "Hinten", "Detail", "Bund"],
      desc: ["Das Gegenstück zum Hoodie. Schwere 420 g/m² Jogginghose mit geradem Bein — bewusst etwas leichter als der Hoodie, damit sie mitgeht.",
             "Das KALMERA-Zeichen läuft senkrecht am unteren Bein herunter, auf Bestellung gedruckt. Weltweiter Versand. Das komplette Set, von Kopf bis Fuß."]
    }
  },
  sg: {
    hoodie: { cols: ["Größe", "Brust (cm)", "Länge (cm)", "Ärmel (cm)"], note: "Oversized-Passform. Maße des flach liegenden Kleidungsstücks. Vorläufige Werte — mit Tapstitch RW0035 abgleichen." },
    tee: { cols: ["Größe", "Brust (cm)", "Länge (cm)"], note: "Kastige Oversized-Passform. Maße flach liegend. Vorläufige Werte — mit Tapstitch RT0080 abgleichen." },
    sweatpants: { cols: ["Größe", "Taille (cm)", "Schrittlänge (cm)", "Länge (cm)"], note: "Gerades Bein. Maße flach liegend. Vorläufige Werte — mit Tapstitch RK0009 abgleichen." }
  }
};
/* ---------------------------------------------------------- 日本語 */
LANGS.ja = {
  ui: {
    navReleases: "リリース", navTimeline: "タイムライン", navFaq: "よくある質問", navContact: "お問い合わせ",
    basket: "カート", ambientOff: "アンビエント オフ", ambientOn: "アンビエント オン",
    heroTop: "エッセンシャルの新時代をつくる", heroEst: "イングランド · 2025年創業",
    heroRole: "二着の服を、執拗なまでのこだわりで。無駄はなく、すべてに意図がある。",
    scroll: "スクロール",
    secReleases: "リリース", secTimeline: "タイムライン", secFaq: "よくある質問",
    cntYears: "2025 — 2027", cntGoodToKnow: "知っておきたいこと",
    drop01: "ドロップ 01", drop01meta: "02 ライン · 2026年10月",
    drop02: "ドロップ 02", drop02meta: "2027年予定",
    dropEmpty: "制作中 — まだ何も出ていません。リストに登録すると最初にお知らせします。",
    karbonMeta: "アンカー · ブラック", kloudMeta: "カウンターポイント · ホワイト",
    aboutHtml: "KALMERA はイングランドのエッセンシャル・スタジオ。<span class=\"accent\">最少で最高の</span>一着だけをつくります — 設計された生地、執拗なフィット、無駄のなさ。シーズンではなく、何年も着るために。",
    aboutJury: "( 2025年創業 · 新しい時代へようこそ ✺ )",
    tl: [
      { d: "2025年 第4四半期", h: "KALMERA Apparel 創業", p: "一つの机と、一つの考え — 最少で最高のエッセンシャルだけをつくる。" },
      { d: "2026年 第1四半期", h: "生地の開発", p: "KARBON と KLOUD が形と風合いを保つまで、500 g/m² のヘビーウェイト・フリースを試作。" },
      { d: "2026年 第2四半期", h: "アイデンティティとスタジオ", p: "KALMERA のアイデンティティが形になる — マーク、書体、そして無駄をつくらない哲学。" },
      { d: "2026年10月", h: "ドロップ 01 — 目標", p: "計画は、KARBON と KLOUD がそれぞれフーディー、Tシャツ、スウェットパンツで登場すること。再入荷はなし。" },
      { d: "2027年", h: "ドロップ 02 — 地平線の先", p: "次の章はこれから。リストの方が最初に知ります。" }
    ],
    faq: [
      { q: "注文からどのくらいかかりますか？", a: "すべての商品は<strong>受注生産</strong>です — ご購入後に一枚ずつ手作業でプリントするため、無駄が出ません。製作に数日、その後発送となります。<strong>通常配送は無料で、世界中どこでも約30日。速達（約10日）はお会計時に選べます。</strong>発送時に追跡番号をお送りします。" },
      { q: "なぜ受注生産なのですか？", a: "それが KALMERA のやり方だからです — <strong>最少で最高の一着、無駄はゼロ。</strong>注文を受けてから作ることで、過剰生産も廃棄も在庫過多もありません。少し待つ代わりに、あなたのための一着が届きます。" },
      { q: "サイズはどう選べばいいですか？", a: "デザイン上、<strong>オーバーサイズ／ボクシー</strong>な作りです。しっかりオーバーサイズに着たい方は普段のサイズを、すっきり着たい方はワンサイズ下をお選びください。各商品に詳しいサイズガイドがあります。" },
      { q: "海外にも発送していますか？", a: "<strong>はい — 世界中に発送します。</strong>通常配送はどこでも無料です。お届け日数は国により多少異なります。ご注文後に目安と追跡番号をご確認いただけます。" },
      { q: "返品・交換について", a: "すべて<strong>受注生産</strong>のため、お客様都合による返品はお受けできません。ただし<strong>不良品、破損、商品やサイズの誤り</strong>があった場合は、7日以内に写真を添えて <strong>kalmera.team@gmail.com</strong> までご連絡ください。必ず対応いたします。" },
      { q: "問い合わせ方法は？", a: "ご注文、サイズのご相談、ご挨拶まで、何でも <strong>kalmera.team@gmail.com</strong> へどうぞ。すべてのメッセージに目を通しています。" }
    ],
    contactLead: "新しい時代を着る", joinList: "リストに登録する", watchYt: "youtube で見る ↗",
    footerMid: "©—2026 · 新しい時代へようこそ", footerRight: "イングランドでデザイン ✺",
    close: "閉じる", productImage: "商品画像", sizeGuide: "サイズガイド",
    deliveryNote: "受注生産 · 通常配送無料（約30日）または速達（約10日）をお会計時に選択。",
    addToBasket: "カートに追加 →",
    yourBasket: "カート", basketEmpty: "カートは空です。",
    delivery: "配送", standard: "通常", express: "速達",
    stdTime: "受注生産 · 約30日", expTime: "受注生産 · 約10日",
    free: "無料", freeStandard: "無料 · 通常配送",
    subtotal: "小計", shipping: "配送", total: "合計", pay: "支払う", remove: "削除",
    cardSlot: "お名前・ご住所・カード情報は次のステップで Stripe が安全に取得します。KALMERA がカード情報を見ることはありません。",
    coNote: "受注生産 — ご注文後に手作業でプリントし、世界中へ発送します。製作期間を見込んでご注文ください。",
    coSecure: "🔒 決済は Stripe が保護 · KALMERA がカード情報を見ることはありません",
    payLoading: "安全な決済ページへ移動しています…",
    payError: "申し訳ありません — 決済の開始で問題が発生しました。もう一度お試しいただくか、kalmera.team@gmail.com までご連絡ください。"
  },
  sp: { colour: "カラー", weight: "重量", fabric: "生地", fit: "フィット", mark: "マーク", sizes: "サイズ", made: "生産", price: "価格", drop: "ドロップ" },
  v: {
    black: "ブラック", white: "ホワイト",
    fleece: "ヘビーウェイト・フリース", cotton: "ヘビーウェイト・コットン", heavy: "ヘビーウェイト",
    oversized: "オーバーサイズ", boxy: "ボクシー・オーバーサイズ", straight: "ストレートレッグ",
    centreChest: "胸中央", leftChest: "左胸", vertLeg: "裾に縦方向",
    toOrder: "受注生産 · 世界中へ発送", freeShip: "送料無料", drop01: "01 — 2026年10月"
  },
  g: {
    hoodie: {
      name: "フーディー", gal: ["フロント", "バック", "ディテール", "フード"],
      desc: ["ドロップの軸。500 g/m² のヘビーウェイト・フリースを使用 — 密度があり、構築的で、手に取ると確かな重み。シーズンではなく何年も着られるよう、形が崩れないように作られています。",
             "オーバーサイズのシルエット、起毛した柔らかな裏地、そぎ落とされた表側。KALMERA のマークは胸の中央に、受注後にプリント。世界中へ発送します — 無駄はありません。"]
    },
    tee: {
      name: "Tシャツ", gal: ["フロント", "バック", "ディテール", "襟"],
      desc: ["日常のための一枚。ボクシーでオーバーサイズ、正真正銘 400 g/m² — Tシャツとしては重量級で、しっかりとした構築感ときれいなドレープ。",
             "左胸に小さな KALMERA のマークを受注後にプリント。世界中へ発送。きれいに落ち、長く着られるように作られています。"]
    },
    sweatpants: {
      name: "スウェットパンツ", gal: ["フロント", "バック", "ディテール", "ウエスト"],
      desc: ["フーディーと合わせる一本。420 g/m² のヘビーウェイト、ストレートレッグ — 動きやすさのため、フーディーより少しだけ軽く設計。",
             "KALMERA のマークは裾に縦方向、受注後にプリント。世界中へ発送。頭から足元まで揃うセットアップです。"]
    }
  },
  sg: {
    hoodie: { cols: ["サイズ", "身幅 (cm)", "着丈 (cm)", "袖丈 (cm)"], note: "オーバーサイズ。平置きでの実寸です。暫定値 — Tapstitch RW0035 で要確認。" },
    tee: { cols: ["サイズ", "身幅 (cm)", "着丈 (cm)"], note: "ボクシー・オーバーサイズ。平置きでの実寸です。暫定値 — Tapstitch RT0080 で要確認。" },
    sweatpants: { cols: ["サイズ", "ウエスト (cm)", "股下 (cm)", "総丈 (cm)"], note: "ストレートレッグ。平置きでの実寸です。暫定値 — Tapstitch RK0009 で要確認。" }
  }
};

/* ---------------------------------------------------------- 한국어 */
LANGS.ko = {
  ui: {
    navReleases: "릴리스", navTimeline: "타임라인", navFaq: "자주 묻는 질문", navContact: "문의",
    basket: "장바구니", ambientOff: "앰비언트 꺼짐", ambientOn: "앰비언트 켜짐",
    heroTop: "에센셜의 새로운 시대를 만듭니다", heroEst: "잉글랜드 · 2025년 설립",
    heroRole: "단 두 벌, 집요한 주의로 설계했습니다. 낭비는 없고, 모든 것이 의도적입니다.",
    scroll: "스크롤",
    secReleases: "릴리스", secTimeline: "타임라인", secFaq: "질문",
    cntYears: "2025 — 2027", cntGoodToKnow: "알아두면 좋은 것",
    drop01: "드롭 01", drop01meta: "02 라인 · 2026년 10월",
    drop02: "드롭 02", drop02meta: "2027년 예정",
    dropEmpty: "작업 중 — 아직 공개된 것이 없습니다. 리스트에 등록하면 가장 먼저 알려드립니다.",
    karbonMeta: "앵커 · 블랙", kloudMeta: "카운터포인트 · 화이트",
    aboutHtml: "KALMERA는 잉글랜드의 에센셜 스튜디오로, <span class=\"accent\">가장 적고 가장 좋은</span> 옷만 만듭니다 — 설계된 원단, 집요한 핏, 낭비 없는 제작. 한 시즌이 아니라 몇 년을 입기 위해.",
    aboutJury: "( 2025년 설립 · 새로운 시대에 오신 것을 환영합니다 ✺ )",
    tl: [
      { d: "2025년 4분기", h: "KALMERA Apparel 설립", p: "책상 하나, 생각 하나 — 가장 적고 가장 좋은 에센셜만 만든다." },
      { d: "2026년 1분기", h: "원단 개발", p: "KARBON과 KLOUD가 형태와 감촉을 유지할 때까지 500 g/m² 헤비웨이트 플리스를 샘플링." },
      { d: "2026년 2분기", h: "아이덴티티 & 스튜디오", p: "KALMERA의 아이덴티티가 형태를 갖춥니다 — 마크, 서체, 그리고 낭비하지 않는 철학." },
      { d: "2026년 10월", h: "드롭 01 — 목표", p: "계획은 KARBON과 KLOUD가 각각 후디, 티셔츠, 스웨트팬츠로 출시되는 것. 재입고는 없습니다." },
      { d: "2027년", h: "드롭 02 — 다음 지평", p: "다음 챕터는 아직 앞에 있습니다. 리스트가 가장 먼저 듣습니다." }
    ],
    faq: [
      { q: "주문하면 얼마나 걸리나요?", a: "모든 제품은 <strong>주문 제작</strong>입니다 — 구매 후 한 장씩 손으로 프린트하여 낭비가 없습니다. 제작에 며칠, 이후 배송이 진행됩니다. <strong>기본 배송은 무료이며 전 세계 약 30일이 걸립니다. 특급(약 10일)은 결제 시 선택할 수 있습니다.</strong> 발송되면 추적 번호를 보내드립니다." },
      { q: "왜 주문 제작인가요?", a: "그것이 KALMERA의 방식이기 때문입니다 — <strong>가장 적고 가장 좋은 옷, 낭비는 없이.</strong> 주문이 들어온 뒤에만 만들면 과잉 생산도, 폐기도, 재고도 없습니다. 짧은 기다림을 대신해 당신을 위해 만든 한 벌을 받게 됩니다." },
      { q: "어떤 사이즈를 골라야 하나요?", a: "디자인상 <strong>오버사이즈 / 박시</strong>하게 재단되었습니다. 확실한 오버사이즈 핏을 원하면 평소 사이즈를, 조금 더 붙는 핏을 원하면 한 사이즈 작게 선택하세요. 각 제품에 상세 사이즈 가이드가 있습니다." },
      { q: "해외 배송도 하나요?", a: "<strong>네 — 전 세계로 배송합니다.</strong> 기본 배송은 어디든 무료입니다. 배송 기간은 국가에 따라 조금씩 다르며, 주문 후 예상 기간과 추적 번호를 확인하실 수 있습니다." },
      { q: "반품 및 교환", a: "모든 제품이 <strong>주문 제작</strong>이므로 단순 변심에 의한 반품은 어렵습니다. 다만 <strong>불량, 파손, 잘못된 제품이나 사이즈</strong>가 도착한 경우 7일 이내에 사진과 함께 <strong>kalmera.team@gmail.com</strong>으로 연락 주시면 바로 해결해 드립니다." },
      { q: "어떻게 연락하나요?", a: "주문, 사이즈 문의, 혹은 그냥 인사까지 무엇이든 <strong>kalmera.team@gmail.com</strong>으로 보내주세요. 모든 메시지를 읽고 있습니다." }
    ],
    contactLead: "새로운 시대를 입다", joinList: "리스트에 등록하기", watchYt: "youtube에서 보기 ↗",
    footerMid: "©—2026 · 새로운 시대에 오신 것을 환영합니다", footerRight: "잉글랜드에서 디자인 ✺",
    close: "닫기", productImage: "제품 이미지", sizeGuide: "사이즈 가이드",
    deliveryNote: "주문 제작 · 기본 배송 무료(약 30일) 또는 특급(약 10일)을 결제 시 선택.",
    addToBasket: "장바구니에 담기 →",
    yourBasket: "장바구니", basketEmpty: "장바구니가 비어 있습니다.",
    delivery: "배송", standard: "기본", express: "특급",
    stdTime: "주문 제작 · 약 30일", expTime: "주문 제작 · 약 10일",
    free: "무료", freeStandard: "무료 · 기본 배송",
    subtotal: "소계", shipping: "배송", total: "합계", pay: "결제", remove: "삭제",
    cardSlot: "이름, 주소, 카드 정보는 다음 단계에서 Stripe가 안전하게 처리합니다. KALMERA는 카드 정보를 절대 보지 않습니다.",
    coNote: "주문 제작 — 주문 후 손으로 프린트하여 전 세계로 배송합니다. 제작 기간을 감안해 주세요.",
    coSecure: "🔒 결제는 Stripe가 보호 · KALMERA는 카드 정보를 보지 않습니다",
    payLoading: "안전한 결제 페이지로 이동 중…",
    payError: "죄송합니다 — 결제를 시작하는 중 문제가 발생했습니다. 다시 시도하시거나 kalmera.team@gmail.com으로 연락해 주세요."
  },
  sp: { colour: "색상", weight: "중량", fabric: "원단", fit: "핏", mark: "마크", sizes: "사이즈", made: "제작", price: "가격", drop: "드롭" },
  v: {
    black: "블랙", white: "화이트",
    fleece: "헤비웨이트 플리스", cotton: "헤비웨이트 코튼", heavy: "헤비웨이트",
    oversized: "오버사이즈", boxy: "박시 오버사이즈", straight: "스트레이트 레그",
    centreChest: "가슴 중앙", leftChest: "왼쪽 가슴", vertLeg: "밑단 세로 방향",
    toOrder: "주문 제작 · 전 세계 배송", freeShip: "무료 배송", drop01: "01 — 2026년 10월"
  },
  g: {
    hoodie: {
      name: "후디", gal: ["앞면", "뒷면", "디테일", "후드"],
      desc: ["드롭의 중심. 500 g/m² 헤비웨이트 플리스로 제작 — 밀도 있고 구조적이며 손에 잡히는 무게감이 있습니다. 한 시즌이 아니라 몇 년을 입도록 형태가 유지되게 만들었습니다.",
             "오버사이즈 핏, 부드럽게 기모 처리된 안감, 군더더기 없는 겉면. KALMERA 마크는 가슴 중앙에 주문 후 프린트됩니다. 전 세계 배송 — 낭비는 없습니다."]
    },
    tee: {
      name: "티셔츠", gal: ["앞면", "뒷면", "디테일", "넥라인"],
      desc: ["일상을 위한 한 장. 박시한 오버사이즈 실루엣에 진짜 400 g/m² — 티셔츠로는 묵직하며, 확실한 구조감과 깔끔한 드레이프를 냅니다.",
             "왼쪽 가슴에 작은 KALMERA 마크를 주문 후 프린트합니다. 전 세계 배송. 잘 떨어지고 오래 가도록 만들었습니다."]
    },
    sweatpants: {
      name: "스웨트팬츠", gal: ["앞면", "뒷면", "디테일", "허리"],
      desc: ["후디와 짝을 이루는 한 벌. 420 g/m² 헤비웨이트 스트레이트 레그 — 움직임을 위해 후디보다 살짝 가볍게 설계했습니다.",
             "KALMERA 마크가 밑단을 따라 세로로 들어가며, 주문 후 프린트됩니다. 전 세계 배송. 머리부터 발끝까지 완성되는 셋업입니다."]
    }
  },
  sg: {
    hoodie: { cols: ["사이즈", "가슴단면 (cm)", "총장 (cm)", "소매 (cm)"], note: "오버사이즈 핏. 평면 실측 기준입니다. 임시 수치 — Tapstitch RW0035로 확인 필요." },
    tee: { cols: ["사이즈", "가슴단면 (cm)", "총장 (cm)"], note: "박시 오버사이즈 핏. 평면 실측 기준입니다. 임시 수치 — Tapstitch RT0080으로 확인 필요." },
    sweatpants: { cols: ["사이즈", "허리 (cm)", "인심 (cm)", "총장 (cm)"], note: "스트레이트 레그. 평면 실측 기준입니다. 임시 수치 — Tapstitch RK0009로 확인 필요." }
  }
};

/* ---------------------------------------------------------- العربية */
LANGS.ar = {
  ui: {
    navReleases: "الإصدارات", navTimeline: "الجدول الزمني", navFaq: "الأسئلة الشائعة", navContact: "تواصل معنا",
    basket: "السلة", ambientOff: "الصوت المحيط مغلق", ambientOn: "الصوت المحيط مفعّل",
    heroTop: "نصنع عصراً جديداً للقطع الأساسية", heroEst: "إنجلترا · تأسست 2025",
    heroRole: "قطعتان، صُمّمتا بعناية لا تهدأ. لا شيء يُهدر، وكل تفصيل مقصود.",
    scroll: "مرّر",
    secReleases: "الإصدارات", secTimeline: "الجدول الزمني", secFaq: "أسئلة",
    cntYears: "2025 — 2027", cntGoodToKnow: "معلومات مفيدة",
    drop01: "الإصدار 01", drop01meta: "خطّان · أكتوبر 2026",
    drop02: "الإصدار 02", drop02meta: "قادم في 2027",
    dropEmpty: "قيد العمل — لا شيء جاهز بعد. انضم إلى القائمة لتكون أول من يعرف.",
    karbonMeta: "المرساة · أسود", kloudMeta: "النقيض · أبيض",
    aboutHtml: "‏KALMERA استوديو للقطع الأساسية في إنجلترا، يصنع <span class=\"accent\">أقل القطع وأفضلها</span> — قماش مدروس، قَصّة دقيقة، ولا شيء يُهدر. مصنوعة لتُلبس سنوات، لا مواسم.",
    aboutJury: "( تأسست 2025 · أهلاً بك في عصر جديد ✺ )",
    tl: [
      { d: "الربع الرابع 2025", h: "تأسيس KALMERA Apparel", p: "طاولة واحدة وفكرة واحدة — أن نصنع أقل القطع الأساسية وأفضلها، ولا شيء غير ذلك." },
      { d: "الربع الأول 2026", h: "تطوير القماش", p: "تجريب قماش الفليس الثقيل 500 غم/م² حتى يحافظ KARBON و KLOUD على شكلهما وملمسهما." },
      { d: "الربع الثاني 2026", h: "الهوية والاستوديو", p: "تتشكّل هوية KALMERA — العلامة، والخط، وفلسفة ألّا يُهدر شيء." },
      { d: "أكتوبر 2026", h: "الإصدار 01 — الهدف", p: "الخطة: يصل KARBON و KLOUD، كلٌ منهما بهودي وتي شيرت وبنطال. لا إعادة تصنيع — وما ينفد يرتاح." },
      { d: "2027", h: "الإصدار 02 — في الأفق", p: "الفصل التالي، لم يأتِ بعد. القائمة تعرف أولاً." }
    ],
    faq: [
      { q: "كم تستغرق طلبيتي؟", a: "كل قطعة <strong>تُصنع عند الطلب</strong> — تُطبع يدوياً بعد شرائك، حتى لا يُهدر شيء. يستغرق التصنيع بضعة أيام، ثم الشحن. <strong>الشحن العادي مجاني ويستغرق نحو 30 يوماً حول العالم، والشحن السريع (نحو 10 أيام) متاح عند الدفع.</strong> سيصلك رقم تتبّع فور الشحن." },
      { q: "لماذا التصنيع عند الطلب؟", a: "لأن هذه طريقة KALMERA — <strong>أقل القطع وأفضلها، ولا شيء يُهدر.</strong> صناعة القطعة عند طلبها فقط تعني بلا إنتاج زائد، ولا نفايات، ولا مخزون راكد. المقابل انتظار قصير، والمكسب قطعة صُنعت من أجلك." },
      { q: "أي مقاس أختار؟", a: "القطع مقصوصة <strong>واسعة / مربّعة</strong> بحكم التصميم. إن أردت مظهراً واسعاً حقيقياً فاختر مقاسك المعتاد، وإن فضّلت قَصّة أقرب للجسم فانزل مقاساً. يوجد دليل مقاسات كامل مع كل منتج." },
      { q: "هل تشحنون إلى جميع الدول؟", a: "<strong>نعم — إلى جميع أنحاء العالم.</strong> الشحن العادي مجاني في كل مكان. تختلف المدة قليلاً حسب الدولة، وسترى التقدير ورقم التتبّع بعد الطلب." },
      { q: "الإرجاع والاستبدال", a: "بما أن كل قطعة <strong>تُصنع عند الطلب</strong>، لا يمكننا قبول الإرجاع لتغيير الرأي. لكن إن وصلك المنتج <strong>معيباً أو تالفاً أو بمقاس أو صنف خاطئ</strong>، راسلنا خلال 7 أيام على <strong>kalmera.team@gmail.com</strong> مع صورة وسنصلح الأمر." },
      { q: "كيف أتواصل معكم؟", a: "راسلنا على <strong>kalmera.team@gmail.com</strong> لأي شيء — الطلبات أو المقاسات أو حتى مجرد التحية. نقرأ كل رسالة." }
    ],
    contactLead: "لنُلبِس العصر الجديد", joinList: "انضم إلى القائمة", watchYt: "شاهد على يوتيوب ↗",
    footerMid: "©—2026 · أهلاً بك في عصر جديد", footerRight: "صُمّم في إنجلترا ✺",
    close: "إغلاق", productImage: "صورة المنتج", sizeGuide: "دليل المقاسات",
    deliveryNote: "يُصنع عند الطلب · شحن عادي مجاني (نحو 30 يوماً) أو سريع (نحو 10 أيام) عند الدفع.",
    addToBasket: "أضف إلى السلة →",
    yourBasket: "سلتك", basketEmpty: "سلتك فارغة.",
    delivery: "الشحن", standard: "عادي", express: "سريع",
    stdTime: "يُصنع عند الطلب · نحو 30 يوماً", expTime: "يُصنع عند الطلب · نحو 10 أيام",
    free: "مجاني", freeStandard: "مجاني · عادي",
    subtotal: "المجموع الفرعي", shipping: "الشحن", total: "الإجمالي", pay: "ادفع", remove: "إزالة",
    cardSlot: "يتم إدخال اسمك وعنوانك وبطاقتك بأمان في الخطوة التالية عبر Stripe. لا ترى KALMERA بيانات بطاقتك أبداً.",
    coNote: "يُصنع عند الطلب — يُطبع يدوياً بعد طلبك ثم يُشحن حول العالم. يُرجى احتساب وقت التصنيع.",
    coSecure: "🔒 المدفوعات محمية عبر Stripe · لا ترى KALMERA بيانات بطاقتك",
    payLoading: "جارٍ نقلك إلى صفحة الدفع الآمنة…",
    payError: "نعتذر — حدث خطأ عند بدء الدفع. حاول مرة أخرى أو راسلنا على kalmera.team@gmail.com."
  },
  sp: { colour: "اللون", weight: "الوزن", fabric: "القماش", fit: "القَصّة", mark: "العلامة", sizes: "المقاسات", made: "التصنيع", price: "السعر", drop: "الإصدار" },
  v: {
    black: "أسود", white: "أبيض",
    fleece: "فليس ثقيل", cotton: "قطن ثقيل", heavy: "وزن ثقيل",
    oversized: "واسع", boxy: "واسع مربّع", straight: "ساق مستقيمة",
    centreChest: "وسط الصدر", leftChest: "الصدر الأيسر", vertLeg: "عمودي، أسفل الساق",
    toOrder: "عند الطلب · شحن عالمي", freeShip: "شحن مجاني", drop01: "01 — أكتوبر 2026"
  },
  g: {
    hoodie: {
      name: "هودي", gal: ["الأمام", "الخلف", "تفصيل", "القلنسوة"],
      desc: ["مرساة الإصدار. مصنوع من فليس ثقيل بوزن 500 غم/م² — كثيف ومتماسك وله ثقل محسوس في اليد. صُمّم ليحافظ على شكله ويُلبس سنوات لا مواسم.",
             "قَصّة واسعة، وبطانة داخلية ناعمة، وسطح خارجي نظيف مدروس. علامة KALMERA في وسط الصدر، تُطبع عند الطلب. يُشحن حول العالم — ولا شيء يُهدر."]
    },
    tee: {
      name: "تي شيرت", gal: ["الأمام", "الخلف", "تفصيل", "الياقة"],
      desc: ["قطعة اليوم العادي. تي شيرت مربّع وواسع بوزن 400 غم/م² حقيقية — ثقيل بمقاييس التي شيرت، بتماسك واضح وانسدال أنيق.",
             "علامة KALMERA صغيرة على الصدر الأيسر، تُطبع عند الطلب. يُشحن حول العالم. صُنع ليقع بشكل صحيح ويدوم."]
    },
    sweatpants: {
      name: "بنطال رياضي", gal: ["الأمام", "الخلف", "تفصيل", "الخصر"],
      desc: ["رفيق الهودي. بنطال ثقيل بوزن 420 غم/م² بقَصّة ساق مستقيمة — أخفّ قليلاً من الهودي بشكل مقصود، ليمنحك حرية الحركة.",
             "تنزل علامة KALMERA عمودياً على أسفل الساق، وتُطبع عند الطلب. يُشحن حول العالم. الطقم كاملاً، من الرأس حتى القدم."]
    }
  },
  sg: {
    hoodie: { cols: ["المقاس", "الصدر (سم)", "الطول (سم)", "الكم (سم)"], note: "قَصّة واسعة. القياسات للقطعة مفرودة. قيم مبدئية — تُراجع مع Tapstitch RW0035." },
    tee: { cols: ["المقاس", "الصدر (سم)", "الطول (سم)"], note: "قَصّة واسعة مربّعة. القياسات للقطعة مفرودة. قيم مبدئية — تُراجع مع Tapstitch RT0080." },
    sweatpants: { cols: ["المقاس", "الخصر (سم)", "طول الساق الداخلي (سم)", "الطول (سم)"], note: "قَصّة ساق مستقيمة. القياسات للقطعة مفرودة. قيم مبدئية — تُراجع مع Tapstitch RK0009." }
  }
};

/* ============================================================
   ENGINE — applies the chosen language to the page
   ============================================================ */
(function () {
  var STORE_KEY = "kalmera-lang";
  var lang = null;
  try { lang = localStorage.getItem(STORE_KEY); } catch (e) { lang = null; }
  if (!lang || !LANGS[lang]) lang = "en";

  var L = LANGS[lang];

  /* Expose the strings the main script asks for via TT(). */
  if (L) {
    window.KALMERA_STRINGS = L.ui;

    /* Build the translated product copy the product panel reads. */
    var pt = {};
    Object.keys(PRODUCT_MAP).forEach(function (key) {
      var m = PRODUCT_MAP[key];
      var gd = GARMENT_DATA[m.garment];
      var g = L.g[m.garment];
      pt[key] = {
        sub: g.name + " · " + m.line + " " + L.v[m.colour] + " · Drop 01",
        desc: g.desc,
        gallery: g.gal,
        specs: [
          [L.sp.colour, L.v[m.colour]],
          [L.sp.weight, gd.weight],
          [L.sp.fabric, L.v[gd.fabric]],
          [L.sp.fit, L.v[gd.fit]],
          [L.sp.mark, L.v[gd.mark]],
          [L.sp.sizes, gd.sizes],
          [L.sp.made, L.v.toOrder],
          [L.sp.price, gd.price + " · " + L.v.freeShip],
          [L.sp.drop, L.v.drop01]
        ]
      };
    });
    window.KALMERA_PRODUCT_TEXT = pt;
    window.KALMERA_SIZE_TEXT = L.sg;
  }

  function setText(sel, val) {
    if (val == null) return;
    var el = document.querySelector(sel);
    if (el) el.textContent = val;
  }
  function setHtml(sel, val) {
    if (val == null) return;
    var el = document.querySelector(sel);
    if (el) el.innerHTML = val;
  }

  function apply() {
    /* language picker reflects the current choice and reloads on change,
       so every animation rebuilds cleanly in the new language */
    var sel = document.getElementById("langSel");
    if (sel) {
      sel.value = lang;
      sel.addEventListener("change", function () {
        try { localStorage.setItem(STORE_KEY, sel.value); } catch (e) {}
        location.reload();
      });
    }

    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("lang", lang);
    }

    if (!L) return;
    var u = L.ui;

    setText('.n-links a[href="#recognitions"]', u.navReleases);
    setText('.n-links a[href="#timeline"]', u.navTimeline);
    setText('.n-links a[href="#faq"]', u.navFaq);
    setText('.n-links a[href="#contact"]', u.navContact);
    setText('#cartBtn span:nth-of-type(2)', u.basket);
    setText('.sound-btn .lbl-off', u.ambientOff);
    setText('.sound-btn .lbl-on', u.ambientOn);

    setText('.hero .top span:nth-child(1)', u.heroTop);
    setText('.hero .top span:nth-child(2)', u.heroEst);
    setText('.hero .foot .role', u.heroRole);
    setText('.hero .foot .scrolldn .mono', u.scroll);

    setText('#recognitions .shead h2', u.secReleases);
    setText('#timeline .shead h2', u.secTimeline);
    setText('#timeline .shead .cnt', u.cntYears);
    setText('#faq .shead h2', u.secFaq);
    setText('#faq .shead .cnt', u.cntGoodToKnow);

    var folders = document.querySelectorAll(".releases > .folder");
    if (folders[0]) {
      setTextIn(folders[0], ".fname", u.drop01);
      setTextIn(folders[0], ".fmeta", u.drop01meta);
      var subs = folders[0].querySelectorAll(".subfolder");
      if (subs[0]) setTextIn(subs[0], ".sfmeta", u.karbonMeta);
      if (subs[1]) setTextIn(subs[1], ".sfmeta", u.kloudMeta);
    }
    if (folders[1]) {
      setTextIn(folders[1], ".fname", u.drop02);
      setTextIn(folders[1], ".fmeta", u.drop02meta);
      setTextIn(folders[1], ".rel-empty", u.dropEmpty);
    }

    setHtml('.about [data-words]', u.aboutHtml);
    setText('.about .jury', u.aboutJury);

    var rows = document.querySelectorAll(".timeline .trow");
    (u.tl || []).forEach(function (t, i) {
      if (!rows[i]) return;
      setTextIn(rows[i], ".tdate", t.d);
      setTextIn(rows[i], "h4", t.h);
      setTextIn(rows[i], "p", t.p);
    });

    var faqs = document.querySelectorAll("[data-faq]");
    (u.faq || []).forEach(function (f, i) {
      if (!faqs[i]) return;
      setTextIn(faqs[i], ".fq-txt", f.q);
      setHtmlIn(faqs[i], ".fa-inner", f.a);
    });

    setText('.contact .lead', u.contactLead);
    setText('[data-email]', u.joinList);
    setText('[data-yt]', u.watchYt);

    var fspans = document.querySelectorAll("footer span");
    if (fspans[1]) fspans[1].textContent = u.footerMid;
    if (fspans[2]) fspans[2].textContent = u.footerRight;

    setText('.po-close .mono', u.close);
    setText('.po-hero .ph-tag', u.productImage);
    setText('#poSizeGuide summary', u.sizeGuide);
    setText('#poDelivery', u.deliveryNote);
    setText('[data-cta]', u.addToBasket);

    setText('.co-h', u.yourBasket);
    setText('#coEmpty', u.basketEmpty);
    setText('.co-form .co-field label', u.delivery);
    var opts = document.querySelectorAll("#coShip .ship-opt");
    if (opts[0]) {
      setTextIn(opts[0], ".s-name", u.standard);
      setTextIn(opts[0], ".s-time", u.stdTime);
      setTextIn(opts[0], ".s-price", u.free);
    }
    if (opts[1]) {
      setTextIn(opts[1], ".s-name", u.express);
      setTextIn(opts[1], ".s-time", u.expTime);
    }
    setHtml('.co-card-slot', '<span class="lock">🔒</span> ' + u.cardSlot);
    var trs = document.querySelectorAll("#coTotals .tr");
    if (trs[0]) setTextIn(trs[0], "span:first-child", u.subtotal);
    if (trs[1]) setTextIn(trs[1], "span:first-child", u.shipping);
    if (trs[2]) setTextIn(trs[2], "span:first-child", u.total);
    setText('#coShipLine', u.freeStandard);
    setText('#coPay', u.pay + " —");
    setText('.co-note', u.coNote);
    setText('.co-secure', u.coSecure);
  }

  function setTextIn(root, sel, val) {
    if (val == null) return;
    var el = root.querySelector(sel);
    if (el) el.textContent = val;
  }
  function setHtmlIn(root, sel, val) {
    if (val == null) return;
    var el = root.querySelector(sel);
    if (el) el.innerHTML = val;
  }

  /* Runs before the main script's own DOMContentLoaded handler,
     so text is translated before it gets split for animation. */
  document.addEventListener("DOMContentLoaded", apply);
})();
