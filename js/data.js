/* Textes du site — français (fr) puis anglais (en).
   Les deux langues ont exactement les mêmes clés.
   index.html affiche le français. main.js remplace le texte
   au clic sur FR / EN, via data-i18n="section.cle".
*/
const SITE = {
  "fr": {

    // Page
    "metaTitle": "Reine & Associés — Cabinet d'avocats · Lyon",
    "metaDesc": "Cabinet d'avocats à Lyon. Stratégie, anticipation, victoire. Maître Marie Reine.",
    "skip": "Aller au contenu",

    // Écran d'ouverture
    "pre": {
      "name": "Marie Reine",
      "role": "Avocate à la Cour · Lyon",
      "tag": "Stratégie · Anticipation · Victoire",
      "pass": "Passer →"
    },

    // Navigation  —  nav[i] va avec navHref[i]
    "nav": [
      "Stratégie",
      "Maître Reine",
      "Expertises",
      "Victoires",
      "Témoignages",
      "Contact"
    ],
    "navHref": [
      "#methode",
      "#about",
      "#domaines",
      "#victoires",
      "#temoignages",
      "#contact"
    ],
    "cta": "Consultation",
    "menu": "Menu",
    "menuClose": "Fermer",
    "logoSub": "Cabinet d'avocats · Lyon",

    // Couverture
    "hero": {
      "eyebrow": "Avocate à la Cour · Lyon, France",
      "titleA": "Maîtriser",
      "titleB": "l'échiquier du droit",
      "tag": "Stratégie · Anticipation · Victoire",
      "primary": "Lancer ma stratégie",
      "secondary": "Ma méthode",
      "scroll": "Scroll"
    },

    // La Stratège
    "about": {
      "label": "La Stratège",
      "l1": "Le droit n'est pas",
      "l2": "une bataille.",
      "l3": "C'est un jeu d'échecs.",
      "p1a": "Avocate au Barreau de Lyon, ",
      "name": "Maître Marie Reine",
      "p1b": " ne subit pas le droit : elle le joue.",
      "p2a": "Diplômée avec les plus hautes distinctions, elle conjugue ",
      "p2b": "exigence intellectuelle",
      "p2c": ", vision internationale et technologie juridique.",
      "p3a": "Chaque dossier est mené avec ",
      "p3b": "méthode, anticipation et maîtrise",
      "p3c": " — pour transformer la complexité en avantage stratégique.",
      "year": "2025",
      "badge": "Admise au barreau",
      "creds": [
        "Barreau de Lyon — Promotion 2025",
        "Master II Droit International des Affaires",
        "Certification Legal Tech & IA Juridique · 2026"
      ],
      "alt": "Portrait de Maître Marie Reine, avocate au Barreau de Lyon"
    },

    // Ma Méthode  —  steps[i] = [titre, sous-titre]
    "method": {
      "eyebrow": "De la consultation à la victoire",
      "title": "Ma Méthode",
      "steps": [
        [
          "Consultation",
          "Première position"
        ],
        [
          "Investigation",
          "Étude du terrain"
        ],
        [
          "Stratégie",
          "Planification"
        ],
        [
          "Construction",
          "Montage du dossier"
        ],
        [
          "Exécution",
          "Jeu décisif"
        ],
        [
          "Victoire",
          "Résultat obtenu"
        ]
      ]
    },

    // Expertises
    "expertise": {
      "eyebrow": "Domaines de pratique",
      "title": "Six piliers",
      "em": "d'expertise",
      "lead": "Spécialisation approfondie dans chaque domaine pour une défense sans compromis de vos intérêts.",
      "keys": "Interventions clés",
      "items": [
        {
          "short": "PI & Numérique",
          "title": "Propriété Intellectuelle, Numérique & Conformité des Données",
          "body": "Protection complète des actifs immatériels — marques, brevets, droits d'auteur, logiciels — et accompagnement sur les enjeux du numérique : RGPD, cybersécurité, conformité des données et contrats technologiques.",
          "points": [
            "Dépôt et protection de marques & brevets",
            "Contentieux en contrefaçon",
            "RGPD & protection des données personnelles",
            "Contrats SaaS, licences logiciels",
            "Cybersécurité & data breach"
          ]
        },
        {
          "short": "Droit Commercial",
          "title": "Droit Commercial & des Affaires",
          "body": "Accompagnement juridique stratégique des entreprises à chaque étape : création, structuration, croissance, fusion-acquisition et restructuration.",
          "points": [
            "Création et structuration de sociétés",
            "Fusions-acquisitions & due diligence",
            "Rédaction et négociation de contrats",
            "Recouvrement de créances",
            "Procédures collectives"
          ]
        },
        {
          "short": "Successions",
          "title": "Successions & Transmission Patrimoniale",
          "body": "Anticipation et règlement des transmissions patrimoniales. Assistance dans les successions complexes, internationales et en cas de conflits entre héritiers.",
          "points": [
            "Planification successorale",
            "Testament & donations",
            "Successions internationales",
            "Médiation entre héritiers",
            "Pactes successoraux & familiaux"
          ]
        },
        {
          "short": "Patrimoine & Fiscal",
          "title": "Conseil Patrimonial & Optimisation Fiscale",
          "body": "Structuration et protection du patrimoine personnel et professionnel. Stratégies fiscales légales et transmission d'entreprise.",
          "points": [
            "Optimisation patrimoniale",
            "Stratégies fiscales (IR, IS, IFI)",
            "Transmission d'entreprise",
            "Protection du patrimoine familial",
            "Holding patrimoniale & family office"
          ]
        },
        {
          "short": "International",
          "title": "Droit des Affaires Internationales (France · UE · USA)",
          "body": "Conseil et représentation dans les transactions et litiges transfrontaliers. Expertise en droit américain (Delaware, New York), droit européen et conventions internationales.",
          "points": [
            "Contrats internationaux & cross-border M&A",
            "Arbitrage CCI, CIRDI & AAA (USA)",
            "Droit américain des affaires & compliance SEC",
            "Implantation en France & accès au marché US",
            "Due diligence franco-américaine"
          ]
        },
        {
          "short": "Pénal & Compliance",
          "title": "Droit Pénal des Affaires & Compliance",
          "body": "Défense pénale des entreprises et dirigeants, prévention des risques et mise en conformité. Expertise en abus de biens sociaux, fraude fiscale et corruption.",
          "points": [
            "Défense en abus de biens sociaux",
            "Fraude fiscale & blanchiment",
            "Loi Sapin II & anticorruption",
            "Programme compliance & risk management",
            "Enquêtes internes & whistleblowing"
          ]
        }
      ]
    },

    // Études de cas
    "cases": {
      "eyebrow": "Études de cas",
      "title": "Affaires",
      "em": "emblématiques",
      "ctx": "Contexte",
      "app": "Approche",
      "res": "Résultat",
      "open": "Ouvrir le dossier",
      "close": "Fermer le dossier",
      "items": [
        {
          "id": "001",
          "meta": "Propriété intellectuelle · 2025",
          "title": "Protection d'une marque lyonnaise face à la contrefaçon internationale",
          "time": "8 mois",
          "ctx": "Maison de prêt-à-porter lyonnaise : 2 M€ de marque à gagner sur des contrefaçons asiatiques.",
          "app": "Injonction internationale, saisie douanière européenne coordonnée, accord de cessation négocié.",
          "res": "12 000 produits retirés, 380 000 € de dommages-intérêts obtenus.",
          "tags": [
            "Marque",
            "Contrefaçon",
            "International"
          ]
        },
        {
          "id": "002",
          "meta": "Droit des affaires · 2026",
          "title": "Fusion-acquisition groupe industriel rhônalpin — Due diligence 28 M€",
          "time": "5 mois",
          "ctx": "Fonds parisien : acquisition d'un groupe de 340 salariés à Villeurbanne pour 28 M€.",
          "app": "Audit juridique complet, garantie actif-passif, coordination conseils fiscaux.",
          "res": "3,2 M€ de réduction du prix identifiée. Transition sans contentieux.",
          "tags": [
            "M&A",
            "Due Diligence",
            "Négociation"
          ]
        },
        {
          "id": "003",
          "meta": "Affaires internationales · USA · 2025",
          "title": "Implantation startup SaaS lyonnaise aux États-Unis — Delaware & New York",
          "time": "7 mois",
          "ctx": "Startup SaaS en série A souhaitant lever des fonds auprès d'investisseurs américains.",
          "app": "Constitution d'une Delaware C-Corp, adaptation CGU droit américain, term sheets négociés.",
          "res": "4,5 M$ levés en 7 mois. Double structure franco-américaine opérationnelle.",
          "tags": [
            "Delaware",
            "Series A",
            "Droit US"
          ]
        },
        {
          "id": "004",
          "meta": "Pénal des affaires · 2024",
          "title": "Défense dirigeant mis en examen pour abus de biens sociaux",
          "time": "18 mois",
          "ctx": "PDG d'un groupe lyonnais mis en examen suite à un signalement interne. Enjeu pénal et réputationnel majeur.",
          "app": "Stratégie de défense, enquête interne parallèle, gestion de crise médiatique.",
          "res": "Non-lieu prononcé après 18 mois. Programme compliance mis en place.",
          "tags": [
            "Pénal",
            "ABS",
            "Compliance"
          ]
        }
      ]
    },

    // Pourquoi me choisir  —  items[i] = [titre, texte]
    "why": {
      "eyebrow": "Pourquoi me choisir",
      "title": "L'excellence",
      "em": "au service de vos intérêts",
      "items": [
        [
          "Excellence académique",
          "Mention Très Bien, examen du Barreau avec distinction. La rigueur de la formation se retrouve dans chaque dossier."
        ],
        [
          "Vision internationale",
          "Droit français, européen et américain. Interventions à Lyon, Paris, Londres et New York."
        ],
        [
          "Technologie juridique",
          "IA juridique, legal tech et analyse prédictive pour des stratégies plus précises, plus rapides."
        ],
        [
          "Méthode éprouvée",
          "Six étapes stratégiques inspirées des échecs : chaque mouvement est calculé, chaque victoire préparée."
        ],
        [
          "Réseau d'élite",
          "Correspondants confirmés en France, Europe, États-Unis et Asie pour des dossiers sans frontières."
        ],
        [
          "Confidentialité absolue",
          "Secret professionnel garanti. Vos données et votre dossier sont protégés avec la plus haute exigence."
        ]
      ]
    },

    // Témoignages
    "quotes": {
      "eyebrow": "Témoignages clients",
      "title": "La confiance,",
      "em": "en paroles",
      "items": [
        {
          "id": "marchetti",
          "text": "Maître Reine a géré la protection de nos marques avec une efficacité remarquable. Sa connaissance du droit international nous a permis de récupérer des marchés que nous pensions perdus définitivement.",
          "name": "D. Marchetti",
          "role": "Directeur Général, groupe textile rhônalpin",
          "tag": "Propriété Intellectuelle"
        },
        {
          "id": "beaumont",
          "text": "La rigueur de Maître Reine dans notre dossier de fusion a été déterminante. Elle a identifié des risques que nos équipes internes n'avaient pas anticipés, nous faisant économiser plusieurs millions.",
          "name": "S. Beaumont",
          "role": "Associée, fonds d'investissement parisien",
          "tag": "Droit des Affaires"
        },
        {
          "id": "osei",
          "text": "Notre implantation aux États-Unis semblait un parcours du combattant. Maître Reine nous a guidés avec précision entre le droit français et américain. La levée s'est faite dans les délais.",
          "name": "K. Osei",
          "role": "CEO, startup SaaS lyonnaise",
          "tag": "Affaires Internationales"
        },
        {
          "id": "delcourt",
          "text": "La stratégie de défense de Maître Reine, sa maîtrise du dossier pénal et sa gestion de la pression médiatique ont été exemplaires. Un non-lieu obtenu après 18 mois.",
          "name": "Me. T. Delcourt",
          "role": "Avocat associé partenaire",
          "tag": "Pénal des Affaires"
        }
      ]
    },

    // Contact  —  types[i] = [valeur, titre, sous-titre]
    "contact": {
      "eyebrow": "Prise de contact",
      "title": "Écrivez-",
      "em": "nous",
      "lead": "Première consultation de 30 minutes offerte. Maître Reine examine personnellement chaque dossier avant de vous proposer une stratégie sur mesure.",
      "address": "Adresse",
      "street": "14 rue de la République",
      "city": "69001 Lyon, France",
      "phone": "Téléphone",
      "email": "Email",
      "hours": "Horaires",
      "hoursA": "Lun–Ven : 9h00 – 18h30",
      "hoursB": "Sur rendez-vous uniquement",
      "guarantees": [
        "Secret professionnel absolu garanti",
        "Réponse sous 24h ouvrées",
        "Devis honoraires sans engagement"
      ],
      "type": "Type de consultation",
      "types": [
        [
          "urgente",
          "Urgente",
          "Réponse sous 24h"
        ],
        [
          "planifiee",
          "Planifiée",
          "RDV dans la semaine"
        ],
        [
          "devis",
          "Devis",
          "Estimation honoraires"
        ],
        [
          "info",
          "Information",
          "Renseignement général"
        ]
      ],
      "name": "Nom complet",
      "namePh": "Marie Dupont",
      "emailL": "Email",
      "emailPh": "m.dupont@exemple.fr",
      "phoneL": "Téléphone",
      "phonePh": "+33 6 00 00 00 00",
      "domain": "Domaine concerné",
      "select": "Sélectionner…",
      "domains": [
        "01 — Propriété Intellectuelle, Numérique & Données",
        "02 — Droit Commercial & des Affaires",
        "03 — Successions & Transmission Patrimoniale",
        "04 — Conseil Patrimonial & Optimisation Fiscale",
        "05 — Affaires Internationales (France · UE · USA)",
        "06 — Droit Pénal des Affaires & Compliance",
        "07 — Autre / Non défini"
      ],
      "message": "Votre message",
      "messagePh": "Décrivez votre situation juridique, vos besoins et la nature de votre demande. Le secret professionnel s'applique dès ce premier échange.",
      "rgpd": "J'accepte que mes données personnelles soient traitées par le Cabinet Reine & Associés dans le cadre de ma demande de consultation, conformément à notre politique de confidentialité et au RGPD.",
      "send": "Envoyer ma demande",
      "note": "Première consultation 30 min · Offerte et sans engagement",
      "sentTitle": "Message envoyé",
      "sentBody": "Maître Reine prendra connaissance de votre demande et vous contactera sous 24h ouvrées.",
      "again": "Nouveau message",
      "required": "obligatoire",
      "err": "Veuillez compléter les champs obligatoires."
    },

    // Pied de page  —  links[i] = [clé, libellé]
    "footer": {
      "sub": "Cabinet d'avocats · Barreau de Lyon",
      "links": [
        [
          "mentions",
          "Mentions légales"
        ],
        [
          "confidentialite",
          "Politique de confidentialité"
        ],
        [
          "rgpd",
          "RGPD"
        ],
        [
          "honoraires",
          "Honoraires"
        ]
      ],
      "cert": "Certificat professionnel · Lyon · 2026",
      "copy": "© 2026 Reine & Associés"
    },

    // Textes des fenêtres légales
    "legal": {
      "mentions": "Reine & Associés — Cabinet fictif à des fins de démonstration. Maître Marie Reine, avocate au Barreau de Lyon (fiction). Siège : 14 rue de la République, 69001 Lyon. Directrice de la publication : Marie Reine. Hébergement : infrastructure de démonstration.",
      "confidentialite": "Les données transmises via le formulaire (identité, coordonnées, message) servent uniquement à répondre à votre demande de consultation. Elles ne sont ni vendues ni cédées. Durée de conservation indicative : 24 mois après le dernier échange, sauf obligation légale plus longue.",
      "rgpd": "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition. Pour l'exercer : contact@reine-avocats.com. Réclamation possible auprès de la CNIL.",
      "honoraires": "La première consultation de 30 minutes est offerte et sans engagement. Les honoraires suivants sont fixés par convention, au temps passé ou au forfait, après devis écrit. Aucun honoraire de résultat n'est perçu sans accord préalable.",
      "close": "Fermer"
    }
  },
  "en": {

    // Page
    "metaTitle": "Reine & Associés — Law firm · Lyon",
    "metaDesc": "Lyon law firm. Strategy, anticipation, victory. Maître Marie Reine.",
    "skip": "Skip to content",

    // Écran d'ouverture
    "pre": {
      "name": "Marie Reine",
      "role": "Attorney at Law · Lyon",
      "tag": "Strategy · Anticipation · Victory",
      "pass": "Skip →"
    },

    // Navigation  —  nav[i] va avec navHref[i]
    "nav": [
      "Strategy",
      "Ms. Reine",
      "Practice areas",
      "Case studies",
      "Testimonials",
      "Contact"
    ],
    "navHref": [
      "#methode",
      "#about",
      "#domaines",
      "#victoires",
      "#temoignages",
      "#contact"
    ],
    "cta": "Consultation",
    "menu": "Menu",
    "menuClose": "Close",
    "logoSub": "Law firm · Lyon",

    // Couverture
    "hero": {
      "eyebrow": "Attorney at Law · Lyon, France",
      "titleA": "Master",
      "titleB": "the chessboard of law",
      "tag": "Strategy · Anticipation · Victory",
      "primary": "Start my strategy",
      "secondary": "My method",
      "scroll": "Scroll"
    },

    // La Stratège
    "about": {
      "label": "The Strategist",
      "l1": "Law is not",
      "l2": "a battle.",
      "l3": "It's a game of chess.",
      "p1a": "Member of the Lyon Bar, ",
      "name": "Maître Marie Reine",
      "p1b": " doesn't submit to the law: she plays it.",
      "p2a": "Graduated with the highest distinctions, combining ",
      "p2b": "intellectual rigor",
      "p2c": ", international vision and legal technology.",
      "p3a": "Every case is handled with ",
      "p3b": "method, anticipation and mastery",
      "p3c": " — transforming complexity into strategic advantage.",
      "year": "2025",
      "badge": "Admitted to the Bar",
      "creds": [
        "Lyon Bar — Cohort 2025",
        "Master II International Business Law",
        "Legal Tech & Legal AI Certification · 2026"
      ],
      "alt": "Portrait of Maître Marie Reine, attorney at the Lyon Bar"
    },

    // Ma Méthode  —  steps[i] = [titre, sous-titre]
    "method": {
      "eyebrow": "From consultation to victory",
      "title": "My Method",
      "steps": [
        [
          "Consultation",
          "Opening position"
        ],
        [
          "Investigation",
          "Reading the board"
        ],
        [
          "Strategy",
          "Planning"
        ],
        [
          "Construction",
          "Building the file"
        ],
        [
          "Execution",
          "The decisive game"
        ],
        [
          "Victory",
          "Result secured"
        ]
      ]
    },

    // Expertises
    "expertise": {
      "eyebrow": "Practice areas",
      "title": "Six pillars",
      "em": "of expertise",
      "lead": "Deep specialization in each field, so your interests are defended without compromise.",
      "keys": "Key work",
      "items": [
        {
          "short": "IP & Digital",
          "title": "Intellectual Property, Digital & Data Compliance",
          "body": "Full protection of intangible assets — trademarks, patents, copyright, software — and guidance on digital matters: GDPR, cybersecurity, data compliance and technology contracts.",
          "points": [
            "Trademark and patent filing & protection",
            "Infringement litigation",
            "GDPR & personal data protection",
            "SaaS contracts, software licenses",
            "Cybersecurity & data breach"
          ]
        },
        {
          "short": "Commercial law",
          "title": "Commercial & Business Law",
          "body": "Strategic legal counsel at every stage: formation, structuring, growth, mergers and restructuring.",
          "points": [
            "Company formation and structuring",
            "M&A and due diligence",
            "Contract drafting and negotiation",
            "Debt recovery",
            "Insolvency proceedings"
          ]
        },
        {
          "short": "Estates",
          "title": "Estates & Wealth Transfer",
          "body": "Anticipating and settling transfers of wealth. Support for complex and cross-border estates, and for disputes between heirs.",
          "points": [
            "Estate planning",
            "Wills and gifts",
            "International estates",
            "Mediation between heirs",
            "Family and succession agreements"
          ]
        },
        {
          "short": "Wealth & Tax",
          "title": "Wealth Advisory & Tax Optimization",
          "body": "Structuring and protecting personal and business wealth. Lawful tax strategies and business succession.",
          "points": [
            "Wealth optimization",
            "Tax strategies",
            "Business succession",
            "Family wealth protection",
            "Holding companies and family office"
          ]
        },
        {
          "short": "International",
          "title": "International Business Law (France · EU · USA)",
          "body": "Counsel and representation in cross-border deals and disputes. US law (Delaware, New York), European law and international conventions.",
          "points": [
            "International contracts and cross-border M&A",
            "ICC, ICSID and AAA arbitration",
            "US business law and SEC compliance",
            "Setting up in France and US market access",
            "Franco-American due diligence"
          ]
        },
        {
          "short": "Criminal & Compliance",
          "title": "White-Collar Crime & Compliance",
          "body": "Criminal defense for companies and executives, risk prevention and compliance. Expertise in misuse of corporate assets, tax fraud and corruption.",
          "points": [
            "Defense in misuse of corporate assets",
            "Tax fraud and money laundering",
            "Sapin II and anti-corruption",
            "Compliance and risk programs",
            "Internal investigations and whistleblowing"
          ]
        }
      ]
    },

    // Études de cas
    "cases": {
      "eyebrow": "Case studies",
      "title": "Landmark",
      "em": "matters",
      "ctx": "Context",
      "app": "Approach",
      "res": "Result",
      "open": "Open case",
      "close": "Close case",
      "items": [
        {
          "id": "001",
          "meta": "Intellectual property · 2025",
          "title": "Protecting a Lyon brand against international counterfeiting",
          "time": "8 months",
          "ctx": "A Lyon fashion house: €2M of brand value at stake against Asian counterfeits.",
          "app": "International injunction, coordinated EU customs seizure, negotiated cessation.",
          "res": "12,000 products removed, €380,000 in damages awarded.",
          "tags": [
            "Trademark",
            "Counterfeit",
            "International"
          ]
        },
        {
          "id": "002",
          "meta": "Business law · 2026",
          "title": "Rhône-Alpes industrial group acquisition — €28M due diligence",
          "time": "5 months",
          "ctx": "A Paris fund acquiring a 340-employee group in Villeurbanne for €28M.",
          "app": "Full legal audit, warranty package, coordination with tax counsel.",
          "res": "€3.2M price reduction identified. Transition without dispute.",
          "tags": [
            "M&A",
            "Due diligence",
            "Negotiation"
          ]
        },
        {
          "id": "003",
          "meta": "International · USA · 2025",
          "title": "Lyon SaaS startup entering the United States — Delaware & New York",
          "time": "7 months",
          "ctx": "A Series A SaaS company raising from US investors.",
          "app": "Delaware C-Corp, US-law terms, negotiated term sheets.",
          "res": "$4.5M raised in 7 months. Dual Franco-American structure live.",
          "tags": [
            "Delaware",
            "Series A",
            "US law"
          ]
        },
        {
          "id": "004",
          "meta": "White-collar · 2024",
          "title": "Defense of an executive charged with misuse of corporate assets",
          "time": "18 months",
          "ctx": "CEO of a Lyon group charged after an internal report. Major criminal and reputational stakes.",
          "app": "Defense strategy, parallel internal inquiry, media crisis management.",
          "res": "Case dismissed after 18 months. Compliance program in place.",
          "tags": [
            "Criminal",
            "ABS",
            "Compliance"
          ]
        }
      ]
    },

    // Pourquoi me choisir  —  items[i] = [titre, texte]
    "why": {
      "eyebrow": "Why choose me",
      "title": "Excellence",
      "em": "in the service of your interests",
      "items": [
        [
          "Academic excellence",
          "Highest honors at the Bar examination. That rigor shows in every file."
        ],
        [
          "International vision",
          "French, European and American law. Work in Lyon, Paris, London and New York."
        ],
        [
          "Legal technology",
          "Legal AI and predictive analysis for sharper, faster strategy."
        ],
        [
          "A proven method",
          "Six chess-inspired steps: every move calculated, every victory prepared."
        ],
        [
          "An elite network",
          "Trusted correspondents in France, Europe, the United States and Asia."
        ],
        [
          "Absolute confidentiality",
          "Professional secrecy guaranteed. Your data and your file are held to the highest standard."
        ]
      ]
    },

    // Témoignages
    "quotes": {
      "eyebrow": "Client voices",
      "title": "Trust,",
      "em": "in their words",
      "items": [
        {
          "id": "marchetti",
          "text": "Maître Reine handled the protection of our trademarks with remarkable efficiency. Her command of international law let us recover markets we thought were lost for good.",
          "name": "D. Marchetti",
          "role": "Managing Director, Rhône-Alpes textile group",
          "tag": "Intellectual Property"
        },
        {
          "id": "beaumont",
          "text": "Maître Reine's rigor on our merger was decisive. She identified risks our internal teams had not anticipated, saving us several million.",
          "name": "S. Beaumont",
          "role": "Partner, Paris investment fund",
          "tag": "Business Law"
        },
        {
          "id": "osei",
          "text": "Entering the United States looked like an ordeal. Maître Reine guided us precisely between French and American law. The round closed on time.",
          "name": "K. Osei",
          "role": "CEO, Lyon SaaS startup",
          "tag": "International"
        },
        {
          "id": "delcourt",
          "text": "Her defense strategy, command of the criminal file and handling of media pressure were exemplary. A dismissal after 18 months.",
          "name": "Me. T. Delcourt",
          "role": "Partner attorney",
          "tag": "White-collar"
        }
      ]
    },

    // Contact  —  types[i] = [valeur, titre, sous-titre]
    "contact": {
      "eyebrow": "Get in touch",
      "title": "Write to ",
      "em": "us",
      "lead": "A complimentary 30-minute first consultation. Maître Reine reviews every matter personally before proposing a tailored strategy.",
      "address": "Address",
      "street": "14 rue de la République",
      "city": "69001 Lyon, France",
      "phone": "Phone",
      "email": "Email",
      "hours": "Hours",
      "hoursA": "Mon–Fri: 9:00 – 18:30",
      "hoursB": "By appointment only",
      "guarantees": [
        "Absolute professional secrecy",
        "Reply within one business day",
        "Fee estimate with no commitment"
      ],
      "type": "Consultation type",
      "types": [
        [
          "urgente",
          "Urgent",
          "Reply within 24h"
        ],
        [
          "planifiee",
          "Scheduled",
          "Appointment this week"
        ],
        [
          "devis",
          "Estimate",
          "Fee estimate"
        ],
        [
          "info",
          "Information",
          "General enquiry"
        ]
      ],
      "name": "Full name",
      "namePh": "Marie Dupont",
      "emailL": "Email",
      "emailPh": "m.dupont@example.com",
      "phoneL": "Phone",
      "phonePh": "+33 6 00 00 00 00",
      "domain": "Practice area",
      "select": "Select…",
      "domains": [
        "01 — Intellectual Property, Digital & Data",
        "02 — Commercial & Business Law",
        "03 — Estates & Wealth Transfer",
        "04 — Wealth Advisory & Tax",
        "05 — International (France · EU · USA)",
        "06 — White-Collar & Compliance",
        "07 — Other / Undecided"
      ],
      "message": "Your message",
      "messagePh": "Describe your legal situation, your needs and the nature of your request. Professional secrecy applies from this first exchange.",
      "rgpd": "I agree that my personal data may be processed by Reine & Associés to handle my consultation request, in accordance with the privacy policy and the GDPR.",
      "send": "Send my request",
      "note": "First consultation 30 min · Complimentary, no commitment",
      "sentTitle": "Message sent",
      "sentBody": "Maître Reine will review your request and contact you within one business day.",
      "again": "New message",
      "required": "required",
      "err": "Please complete the required fields."
    },

    // Pied de page  —  links[i] = [clé, libellé]
    "footer": {
      "sub": "Law firm · Lyon Bar",
      "links": [
        [
          "mentions",
          "Legal notice"
        ],
        [
          "confidentialite",
          "Privacy policy"
        ],
        [
          "rgpd",
          "GDPR"
        ],
        [
          "honoraires",
          "Fees"
        ]
      ],
      "cert": "Professional certificate · Lyon · 2026",
      "copy": "© 2026 Reine & Associés"
    },

    // Textes des fenêtres légales
    "legal": {
      "mentions": "Reine & Associés — a fictional firm created for demonstration. Maître Marie Reine, attorney at the Lyon Bar (fiction). Seat: 14 rue de la République, 69001 Lyon.",
      "confidentialite": "Data sent through the form (identity, contact details, message) is used only to answer your consultation request. It is neither sold nor shared. Indicative retention: 24 months after the last exchange, unless a longer legal duty applies.",
      "rgpd": "Under the GDPR you may access, rectify, erase, restrict or object to processing. Write to contact@reine-avocats.com. You may also lodge a complaint with the CNIL.",
      "honoraires": "The first 30-minute consultation is complimentary and without commitment. Further fees are set by written agreement, hourly or fixed, after a quote. No success fee is charged without prior consent.",
      "close": "Close"
    }
  }
};

window.SITE = SITE;
