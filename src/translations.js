export const translations = {
  ro: {
    navbar: {
      home: 'Acasă',
      pricing: 'Prețuri',
      cars: 'Mașini',
      howItWorks: 'Cum funcționează',
      resources: 'Legislație',
      contact: 'Contact',
      enroll: 'Înscrie-te',
      openMenu: 'Deschide meniul',
      closeMenu: 'Închide meniul',
    },

    home: {
      hero: {
        eyebrow: 'Școală de șoferi · Categoria B · București',
        line1: 'Învață corect.',
        line2: 'Condu',
        line3: 'perfect.',
        lead: 'Te pregătim pentru examen și pentru o viață întreagă de condus, cu instructori atestați și mașini bine întreținute.',
        ctaPrimary: 'Programează prima ședință',
        ctaSecondary: 'Vezi prețurile',
        badgeLabel: 'Pachet complet de la',
        badgePrice: '3.000 Lei',
        imageAlt: 'Kia XCeed a școlii, noaptea, cu farurile aprinse',
      },

      stats: [
        { value: '24h', label: 'curs teoretic' },
        { value: '30h', label: 'conducere practică' },
        { value: '4 săpt.', label: 'durată minimă' },
        { value: 'M / A', label: 'manual sau automat' },
      ],

      pricing: {
        line1: 'Prețuri clare.',
        line2: 'Fără surprize.',
        intro: 'Prețul include cursurile teoretice, cele 30 de ore de practică și pregătirea dosarului pentru examen.',
        currency: 'Lei',
        manual: {
          title: 'Transmisie manuală',
          price: '3.000',
          badge: 'Cel mai ales',
          cars: 'Hyundai i30 Fastback · Hyundai i30 · Renault Megane · Ford Focus',
        },
        automatic: {
          title: 'Transmisie automată',
          price: '4.000',
          cars: 'Kia XCeed plug-in hybrid',
        },
        extras: [
          { label: 'Ședință suplimentară', value: '300 Lei' },
          { label: 'Mașina școlii la examen', value: '300 Lei' },
          { label: 'Elevi și studenți', value: '−100 Lei' },
          { label: 'Grup de minimum 3 prieteni înscriși împreună', value: '−100 Lei / persoană' },
          { label: 'Recomanzi un prieten cât timp ești elevul nostru', value: '+1 ședință gratuită' },
        ],
        note: 'Reducerile nu se cumulează.',
      },

      steps: {
        line1: 'De la înscriere',
        line2: 'la',
        highlight: 'permis',
        items: [
          { title: 'Înscrierea', text: 'Alegi transmisia și programul. Noi pregătim dosarul complet pentru examen.' },
          { title: 'Teoria · 24h', text: 'Legislație rutieră, prim ajutor, conducere preventivă și întreținerea mașinii.' },
          { title: 'Practica · 30h', text: 'Pe traseele de examen sau pe cele care te interesează, în ritmul tău.' },
          { title: 'Examenul', text: 'Mergi la examen cu mașina pe care ai învățat. Restul depinde de tine.' },
        ],
      },

      resources: {
        line1: 'Învață și',
        line2: 'de acasă.',
        intro: 'Chestionarele și legislația de care ai nevoie pentru examenul teoretic. Linkurile de legislație duc la forma actualizată de pe portalul oficial.',
        items: [
          { key: 'quiz', title: 'Chestionare auto', text: 'Exersează cu întrebările de la examenul teoretic, cu mediu de învățare.' },
          { key: 'school', title: 'Școala Rutieră', text: 'Chestionare explicate, indicatoare și marcaje rutiere.' },
          { key: 'code', title: 'Codul rutier', text: 'OUG nr. 195/2002 privind circulația pe drumurile publice, forma actualizată.' },
          { key: 'rules', title: 'Regulamentul de aplicare', text: 'Regulamentul de aplicare a OUG nr. 195/2002 (HG nr. 1391/2006), forma actualizată.' },
          { key: 'penalties', title: 'Penalizări la proba practică', text: 'Punctele de penalizare de la examenul pe traseu (Anexa nr. 3 la Ordinul MAI nr. 268/2010).' },
          { key: 'examSheet', title: 'Foaia de la examen', text: 'Formularul de punctaj pe care îl primești la proba practică, în forma originală.' },
        ],
      },

      cars: {
        title: 'Mașinile școlii',
        galleryLink: 'Toată galeria →',
        caption: 'Kia XCeed (automat) și Hyundai i30 (manual)',
        altBoth: 'Kia XCeed albă și Hyundai i30 gri, mașinile școlii',
        altKia: 'Kia XCeed albă a școlii',
        altHyundai: 'Hyundai i30 gri a școlii',
      },

      testimonials: [
        {
          quote: 'Domnul instructor Adam a fost răbdător și profesionist, iar eu am promovat testul din prima încercare!',
          author: 'Maria S., elevă',
        },
        {
          quote: 'Am învățat tot ce trebuie să știu pentru a deveni un șofer încrezător. Recomand cu drag!',
          author: 'Andrei D., elev',
        },
      ],
      reviewsLink: 'Toate recenziile pe Google →',

      cta: {
        title: 'Gata de volan?',
        text: 'Sună sau scrie-ne pe WhatsApp și stabilim prima ședință.',
        whatsapp: 'Scrie pe WhatsApp',
        map: 'Vezi pe hartă',
      },
    },

    carsPage: {
      back: '← Înapoi',
      title: 'Galeria mașinilor',
      subtitle: 'Mașinile cu care facem pregătirea, fotografiate pe teren.',
      filter: { all: 'Toate', kia: 'Kia XCeed', hyundai: 'Hyundai i30' },
      empty: 'Momentan nu sunt fotografii pentru filtrul selectat.',
      close: 'Închide',
      prev: 'Fotografia anterioară',
      next: 'Fotografia următoare',
    },

    footer: {
      rights: 'Adam Maricel PFA · Școală de șoferi categoria B',
    },
  },

  en: {
    navbar: {
      home: 'Home',
      pricing: 'Prices',
      cars: 'Cars',
      howItWorks: 'How it works',
      resources: 'Road law',
      contact: 'Contact',
      enroll: 'Enroll',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },

    home: {
      hero: {
        eyebrow: 'Driving school · Category B · Bucharest',
        line1: 'Learn it right.',
        line2: 'Drive',
        line3: 'perfectly.',
        lead: 'We prepare you for the exam and for a lifetime of driving, with certified instructors and well-maintained cars.',
        ctaPrimary: 'Book your first lesson',
        ctaSecondary: 'See prices',
        badgeLabel: 'Full package from',
        badgePrice: '3,000 Lei',
        imageAlt: "The school's Kia XCeed at night with its headlights on",
      },

      stats: [
        { value: '24h', label: 'theory course' },
        { value: '30h', label: 'practical driving' },
        { value: '4 wks', label: 'minimum duration' },
        { value: 'M / A', label: 'manual or automatic' },
      ],

      pricing: {
        line1: 'Clear prices.',
        line2: 'No surprises.',
        intro: 'The price includes the theory courses, the 30 hours of practice and preparing your exam file.',
        currency: 'Lei',
        manual: {
          title: 'Manual transmission',
          price: '3,000',
          badge: 'Most popular',
          cars: 'Hyundai i30 Fastback · Hyundai i30 · Renault Megane · Ford Focus',
        },
        automatic: {
          title: 'Automatic transmission',
          price: '4,000',
          cars: 'Kia XCeed plug-in hybrid',
        },
        extras: [
          { label: 'Extra lesson', value: '300 Lei' },
          { label: "School's car for the exam", value: '300 Lei' },
          { label: 'Pupils and students', value: '−100 Lei' },
          { label: 'Group of 3 or more friends enrolling together', value: '−100 Lei each' },
          { label: 'Refer a friend while you train with us', value: '+1 free lesson' },
        ],
        note: 'Discounts cannot be combined.',
      },

      steps: {
        line1: 'From enrollment',
        line2: 'to your',
        highlight: 'licence',
        items: [
          { title: 'Enrollment', text: 'Choose the transmission and your schedule. We prepare your complete exam file.' },
          { title: 'Theory · 24h', text: 'Traffic law, first aid, defensive driving and vehicle maintenance.' },
          { title: 'Practice · 30h', text: 'On the exam routes or the ones that matter to you, at your own pace.' },
          { title: 'The exam', text: 'Take the exam in the car you learned in. The rest is up to you.' },
        ],
      },

      resources: {
        line1: 'Study',
        line2: 'at home too.',
        intro: 'The practice tests and road law you need for the theory exam. Law links open the up-to-date version on the official portal (in Romanian).',
        items: [
          { key: 'quiz', title: 'Practice tests', text: 'Practise with the theory exam questions, with a learning mode.' },
          { key: 'school', title: 'Școala Rutieră', text: 'Explained tests, road signs and markings.' },
          { key: 'code', title: 'Road Traffic Code', text: 'Emergency Ordinance no. 195/2002 on public road traffic, current version.' },
          { key: 'rules', title: 'Implementing regulation', text: 'Regulation implementing Ordinance no. 195/2002 (Government Decision no. 1391/2006), current version.' },
          { key: 'penalties', title: 'Practical exam penalties', text: 'Penalty points for the on-road exam (Annex 3 to MAI Order no. 268/2010), in Romanian.' },
          { key: 'examSheet', title: 'Exam score sheet', text: 'The original score sheet you receive at the practical exam, in Romanian.' },
        ],
      },

      cars: {
        title: "The school's cars",
        galleryLink: 'Full gallery →',
        caption: 'Kia XCeed (automatic) and Hyundai i30 (manual)',
        altBoth: "The school's white Kia XCeed and grey Hyundai i30",
        altKia: "The school's white Kia XCeed",
        altHyundai: "The school's grey Hyundai i30",
      },

      testimonials: [
        {
          quote: 'Mr. Adam was patient and professional, and I passed the test on my first try!',
          author: 'Maria S., student',
        },
        {
          quote: 'I learned everything I needed to become a confident driver. Highly recommend!',
          author: 'Andrei D., student',
        },
      ],
      reviewsLink: 'All reviews on Google →',

      cta: {
        title: 'Ready to drive?',
        text: "Call or message us on WhatsApp and we'll book your first lesson.",
        whatsapp: 'Message on WhatsApp',
        map: 'See on map',
      },
    },

    carsPage: {
      back: '← Back',
      title: 'Car gallery',
      subtitle: 'The cars we train with, photographed on the road.',
      filter: { all: 'All', kia: 'Kia XCeed', hyundai: 'Hyundai i30' },
      empty: 'There are no photos for the selected filter yet.',
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
    },

    footer: {
      rights: 'Adam Maricel PFA · Category B driving school',
    },
  },
};
