/*
 * Configuration du site : modifiez ici les coordonnées et les deux adresses e-mail.
 * contactEmail = contact général ; ordersEmail = adresse dédiée aux commandes.
 */
const siteConfig = {
  contactEmail: 'boostiawebdevelopment@gmail.com',
  ordersEmail: 'boostiawebdevelopment@gmail.com',
  whatsappNumber: '212699779715',
  emailSubject: 'Nouveau message — Boostia Web Development',
  orderSubject: 'Nouvelle demande — Boostia Web Development',
  contactInfo: {
    name: 'Boostia / Web Development',
    role: 'Direction & développement web',
    phone: '0699779715',
    location: 'Rabat, Maroc',
    hours: 'Lun — Ven · 09:00 — 18:00'
  }
};

const translations = {
  fr: {
    navExpertise: 'Expertise', navApproach: 'Approche', navContact: 'Parlons de votre projet <span>↗</span>',
    heroEyebrow: 'Studio web indépendant · Disponible pour de nouveaux projets', heroTitle: "Votre prochaine <em>bonne</em> idée mérite mieux qu'un site ordinaire.",
    heroText: "Boostia aide les entreprises ambitieuses à construire une présence en ligne claire, mémorable et prête à soutenir leur croissance — du premier écran jusqu'au dernier clic.", heroButton: 'Démarrer une conversation', heroLink: "Découvrir l'approche", heroProof: 'Une collaboration directe, sans intermédiaire inutile',
    noteOne: 'Clarté<br>avant tout.', noteTwo: 'Beau, utile,<br>durable.', tickerOne: 'STRATÉGIE DIGITALE', tickerTwo: 'IDENTITÉ & DESIGN', tickerThree: 'DÉVELOPPEMENT WEB', tickerFour: 'EXPÉRIENCES UTILES',
    expertiseEyebrow: '/ Ce que nous construisons', expertiseTitle: "Un site ne doit pas seulement être joli. Il doit <span>faire avancer</span> votre activité.", serviceOneTitle: 'Présence digitale', serviceOneText: 'Nous transformons votre positionnement en une expérience qui inspire confiance dès la première seconde, avec des mots justes et une direction visuelle qui vous ressemble.', serviceLink: 'En parler <span>↗</span>', serviceTwoTitle: 'Sites web sur mesure', serviceTwoText: 'Des interfaces rapides, accessibles et pensées pour guider naturellement vos visiteurs vers la bonne action.', serviceThreeTitle: 'Refonte stratégique', serviceThreeText: "Nous clarifions ce qui bloque, simplifions le parcours et redonnons de l'élan à une présence existante.",
    approachEyebrow: '/ Notre manière de faire', approachTitle: "Moins de bruit.<br><span>Plus d'impact.</span>", approachText: "Les meilleurs projets naissent d'une conversation simple : comprendre où vous voulez aller, ce qui vous retient aujourd'hui, puis construire exactement ce qu'il faut pour passer à l'étape suivante.", processOne: '<strong>Écouter</strong><br>Votre contexte, vos objectifs, vos clients.', processTwo: '<strong>Clarifier</strong><br>Le message, la structure et les priorités.', processThree: '<strong>Construire</strong><br>Une expérience élégante, solide et mesurable.',
    quote: "Un bon site donne à votre entreprise l'espace pour être comprise, choisie et mémorisée.", quoteBy: '— La philosophie Boostia', contactEyebrow: '/ Le prochain chapitre commence ici', contactTitle: 'Parlons de ce que votre prochain site doit <span>rendre possible.</span>', contactText: "Vous avez une idée, un site à faire évoluer ou simplement l'envie de remettre les choses à plat ? Écrivez-nous. Nous vous répondrons avec attention, sans discours tout fait.", formTitle: 'Formulaire de demande', fullNameLabel: 'Nom complet', fullNamePlaceholder: 'Votre nom complet', emailFieldLabel: 'E-mail', emailPlaceholder: 'vous@exemple.com', phoneLabel: 'Numéro de téléphone', phonePlaceholder: '06 00 00 00 00', serviceFieldLabel: 'Type de service', servicePlaceholder: 'Choisissez un service', serviceWeb: 'Création d’un site web', serviceRedesign: 'Refonte d’un site existant', serviceEcommerce: 'Boutique en ligne', serviceBranding: 'Identité visuelle et design', serviceOther: 'Autre service', budgetFieldLabel: 'Budget approximatif', budgetPlaceholder: 'Choisissez une estimation', budgetUnder5: 'Moins de 1.000 MAD', budget5to10: '1.500 — 2.000 MAD', budget10to20: '2.500 — 3.000 MAD', budgetOver20: 'Plus de 4.000 MAD', budgetUndecided: 'À définir ensemble', projectFieldLabel: 'Description du projet', projectPlaceholder: 'Décrivez votre projet, vos objectifs et vos besoins...', formButton: 'Envoyer ma demande', formSuccess: 'Votre demande a été envoyée avec succès.', formError: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp.', whatsappButton: 'Parler sur WhatsApp', privacyNote: 'Vos informations servent uniquement à répondre à votre demande.', emailLabel: 'E-mail général', orderEmailLabel: 'E-mail des commandes', footerText: 'Des expériences web qui font avancer<br>les idées ambitieuses.', backTop: 'Retour en haut ↑'
  },
  ar: {
    navExpertise: 'خدماتنا', navApproach: 'منهجيتنا', navContact: 'لنتحدث عن مشروعك <span>↗</span>',
    heroEyebrow: 'استوديو ويب مستقل · متاح لمشاريع جديدة', heroTitle: 'فكرتك <em>الجديدة</em> تستحق أكثر من موقع عادي.',
    heroText: 'تساعد Boostia الشركات الطموحة على بناء حضور رقمي واضح، مميز وجاهز لدعم نموها — من الشاشة الأولى حتى آخر نقرة.', heroButton: 'ابدأ محادثة', heroLink: 'اكتشف منهجيتنا', heroProof: 'تعاون مباشر، من دون وسطاء غير ضروريين',
    noteOne: 'الوضوح<br>أولاً.', noteTwo: 'جميل، مفيد،<br>ومستدام.', tickerOne: 'الاستراتيجية الرقمية', tickerTwo: 'الهوية والتصميم', tickerThree: 'تطوير الويب', tickerFour: 'تجارب مفيدة',
    expertiseEyebrow: '/ ما نبنيه', expertiseTitle: 'الموقع لا يجب أن يكون جميلاً فقط، بل يجب أن <span>يطوّر</span> نشاطك.', serviceOneTitle: 'الحضور الرقمي', serviceOneText: 'نحوّل تموضعك إلى تجربة تبني الثقة من اللحظة الأولى، بكلمات دقيقة واتجاه بصري يعكس هويتك.', serviceLink: 'لنتحدث <span>↗</span>', serviceTwoTitle: 'مواقع مخصصة', serviceTwoText: 'واجهات سريعة وسهلة الوصول، مصممة لتقود زوارك بشكل طبيعي نحو الخطوة الصحيحة.', serviceThreeTitle: 'إعادة تصميم استراتيجية', serviceThreeText: 'نوضح ما يعيقك، نبسّط الرحلة ونمنح حضورك الرقمي دفعة جديدة.',
    approachEyebrow: '/ طريقتنا في العمل', approachTitle: 'ضجيج أقل.<br><span>تأثير أكبر.</span>', approachText: 'تبدأ أفضل المشاريع بمحادثة بسيطة: نفهم إلى أين تريد الوصول وما الذي يعيقك اليوم، ثم نبني بالضبط ما تحتاجه للانتقال إلى المرحلة التالية.', processOne: '<strong>نستمع</strong><br>سياقك، أهدافك، وعملاؤك.', processTwo: '<strong>نوضّح</strong><br>الرسالة، الهيكل والأولويات.', processThree: '<strong>نبني</strong><br>تجربة أنيقة، متينة وقابلة للقياس.',
    quote: 'الموقع الجيد يمنح شركتك المساحة لكي تُفهم، وتُختار، وتُتذكّر.', quoteBy: '— فلسفة Boostia', contactEyebrow: '/ الفصل القادم يبدأ من هنا', contactTitle: 'لنتحدث عمّا يجب أن <span>يحققه</span> موقعك القادم.', contactText: 'لديك فكرة، أو موقع يحتاج إلى تطوير، أو ترغب ببساطة في إعادة ترتيب الأمور؟ اكتب لنا. سنرد عليك باهتمام، بعيداً عن الخطابات الجاهزة.', formTitle: 'نموذج الطلب', fullNameLabel: 'الاسم الكامل', fullNamePlaceholder: 'اكتب اسمك الكامل', emailFieldLabel: 'البريد الإلكتروني', emailPlaceholder: 'you@example.com', phoneLabel: 'رقم الهاتف', phonePlaceholder: '06 00 00 00 00', serviceFieldLabel: 'نوع الخدمة', servicePlaceholder: 'اختر الخدمة', serviceWeb: 'إنشاء موقع إلكتروني', serviceRedesign: 'إعادة تصميم موقع موجود', serviceEcommerce: 'متجر إلكتروني', serviceBranding: 'هوية بصرية وتصميم', serviceOther: 'خدمة أخرى', budgetFieldLabel: 'الميزانية التقريبية', budgetPlaceholder: 'اختر تقديراً للميزانية', budgetUnder5: 'أقل من 1.000 درهم', budget5to10: '1.500 — 2.000 درهم', budget10to20: '2.500 — 3.000 درهم', budgetOver20: 'أكثر من 4.000 درهم', budgetUndecided: 'نحددها معاً', projectFieldLabel: 'وصف المشروع', projectPlaceholder: 'اشرح مشروعك وأهدافك واحتياجاتك...', formButton: 'إرسال الطلب', formSuccess: 'تم إرسال طلبك بنجاح.', formError: 'حدث خطأ. حاول مرة أخرى أو تواصل معنا عبر واتساب.', whatsappButton: 'تحدث معنا عبر واتساب', privacyNote: 'تُستخدم معلوماتك فقط للرد على طلبك.', emailLabel: 'البريد الإلكتروني العام', orderEmailLabel: 'بريد الطلبات', footerText: 'تجارب ويب تدفع<br>الأفكار الطموحة إلى الأمام.', backTop: 'العودة إلى الأعلى ↑'
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.fr;
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('is-arabic', language === 'ar');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (dictionary[element.dataset.i18n]) element.innerHTML = dictionary[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    if (dictionary[element.dataset.i18nPlaceholder]) element.placeholder = dictionary[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('.language-button').forEach((button) => button.classList.toggle('is-active', button.dataset.lang === language));
  document.title = language === 'ar' ? 'Boostia — تجارب ويب تدفع أعمالك إلى الأمام' : 'Boostia — Des expériences web qui font avancer';
  localStorage.setItem('boostia-language', language);
}

document.querySelectorAll('.language-button').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

const savedLanguage = localStorage.getItem('boostia-language');
setLanguage(savedLanguage === 'ar' ? 'ar' : 'fr');

document.querySelectorAll('[data-email-link]').forEach((link) => {
  link.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;
});
document.querySelectorAll('[data-order-link]').forEach((link) => {
  link.href = `mailto:${siteConfig.ordersEmail}?subject=${encodeURIComponent(siteConfig.orderSubject)}`;
});
const emailDisplay = document.querySelector('[data-email-display]');
const orderEmailDisplay = document.querySelector('[data-order-email-display]');
if (emailDisplay) emailDisplay.textContent = siteConfig.contactEmail;
if (orderEmailDisplay) orderEmailDisplay.textContent = siteConfig.ordersEmail;
document.querySelectorAll('[data-contact]').forEach((element) => {
  const value = siteConfig.contactInfo[element.dataset.contact];
  if (value) element.textContent = value;
});
document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
  link.href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Bonjour Boostia, je souhaite parler de mon projet.')}`;
});

const requestForm = document.querySelector('#request-form');
const formStatus = document.querySelector('#form-status');
if (requestForm) {
  requestForm.action = `https://formsubmit.co/${siteConfig.ordersEmail}`;
  requestForm.querySelector('[name="_subject"]').value = siteConfig.orderSubject;
  requestForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitButton = requestForm.querySelector('button[type="submit"]');
    const formData = Object.fromEntries(new FormData(requestForm).entries());
    delete formData._honey;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.style.opacity = '0.65';
    }
    if (formStatus) formStatus.textContent = '';
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.ordersEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error('FormSubmit request failed');
      if (formStatus) formStatus.textContent = translations[document.documentElement.lang]?.formSuccess || translations.fr.formSuccess;
      requestForm.reset();
    } catch (error) {
      if (formStatus) formStatus.textContent = translations[document.documentElement.lang]?.formError || translations.fr.formError;
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.style.opacity = '';
      }
    }
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
