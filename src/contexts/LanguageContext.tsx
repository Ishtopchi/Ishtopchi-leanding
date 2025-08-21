import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'uz' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    // Header
    home: "Bosh sahifa",
    support: "Yordam",
    partnership: "Hamkorlik",
    privacy: "Maxfiylik siyosati",
    
    // Hero Section
    appName: "IshTopchi",
    heroSubtitle: "Ish topishning eng oson yo'li",
    heroDescription: "IshTopchi – sizga mos ishni topish va ish beruvchilar bilan to'g'ridan-to'g'ri bog'lanish imkonini beruvchi mobil ilova.",
    downloadFrom: "Yuklab oling",
    appStore: "App Store",
    googlePlay: "Google Play",
    
    // About Section
    aboutTitle: "Ilova haqida",
    viewJobsWithoutAccount: "Ishlarni hisob ochmasdan ko'rish",
    filterJobs: "Vakansiyalarni filtr bilan qidirish (maosh, joylashuv, ish turi)",
    directChat: "Ish beruvchilar bilan chat orqali bevosita bog'lanish",
    
    // Features Section
    featuresTitle: "Asosiy xususiyatlar",
    findJob: "Ish topish",
    findJobDesc: "Minglab vakansiyalar orasidan sizga mos ishni toping",
    directChatTitle: "To'g'ridan-to'g'ri chat",
    directChatDesc: "Ish beruvchilar bilan bevosita muloqot qiling",
    easyApply: "Oson murojaat",
    easyApplyDesc: "Bir tugma bosish bilan ishga murojaat qiling",
    
    // Download Section
    downloadNow: "Hoziroq yuklab oling",
    downloadDescription: "IshTopchi ilovasini yuklab olib, o'zingizga mos ishni toping",
    
    // Footer
    footerDescription: "Ish topishning eng oson yo'li. Sizga mos ishni toping va ish beruvchilar bilan to'g'ridan-to'g'ri bog'laning.",
    pages: "Sahifalar",
    contact: "Aloqa",
    allRightsReserved: "Barcha huquqlar himoyalangan.",
    
    // Support Page
    supportTitle: "Yordam markazi",
    supportDescription: "IshTopchi ilova haqida savollaringiz bormi? Biz yordam beramiz!",
    onlineChat: "Onlayn chat",
    onlineChatDesc: "24/7 onlayn yordam xizmati",
    email: "Elektron pochta",
    phoneSupport: "Telefon orqali yordam",
    faqTitle: "Ko'p beriladigan savollar",
    faq1Q: "IshTopchi ilovasini qanday ishlataman?",
    faq1A: "Ilovani yuklab oling, ro'yxatdan o'ting va kerakli ishni qidiring. Filtrlar yordamida qidiruvni aniqlashtiring.",
    faq2Q: "Ishga murojaat qilish bepulmi?",
    faq2A: "Ha, IshTopchi ilovasida ishga murojaat qilish mutlaqo bepul.",
    faq3Q: "Ish beruvchilar bilan qanday bog'lanaman?",
    faq3A: "Ilova ichidagi chat funksiyasi orqali ish beruvchilar bilan to'g'ridan-to'g'ri muloqot qilishingiz mumkin.",
    faq4Q: "Parolimni unutdim, nima qilishim kerak?",
    faq4A: "Kirish sahifasida 'Parolni unutdingizmi?' tugmasini bosing va ko'rsatmalarga amal qiling.",
    backToHome: "Bosh sahifaga qaytish",
    
    // Marketing Page
    marketingTitle: "Biznes hamkorligi",
    marketingDescription: "IshTopchi bilan hamkorlik qiling va o'z kompaniyangiz uchun eng yaxshi mutaxassislarni toping",
    wideAudience: "Keng auditoriya",
    wideAudienceDesc: "Minglab faol foydalanuvchilar orasida o'z kompaniyangizni targ'ib qiling",
    highConversion: "Yuqori konversiya",
    highConversionDesc: "Maqsadli auditoriya va yuqori sifatli kandidatlar",
    preciseTargeting: "Aniq maqsadlash",
    preciseTargetingDesc: "Kerakli malaka va tajribaga ega mutaxassislarni toping",
    startPartnership: "Hamkorlik boshlaylik!",
    partnershipDesc: "O'z kompaniyangiz uchun eng yaxshi talantlarni topishga tayyor misiz? Biz bilan bog'laning va hamkorlikni boshlaylik.",
    contactUs: "Aloqa qurish",
    forEmployers: "Ish beruvchilar uchun",
    freeJobPosting: "Bepul vakansiya e'lon qilish imkoniyati",
    directChatWithCandidates: "Kandidatlar bilan to'g'ridan-to'g'ri chat",
    flexibleFilters: "Moslashuvchan filtrlar va qidiruv",
    analyticsReports: "Analitika va hisobotlar",
    premiumServices: "Premium xizmatlar",
    promoteListings: "E'lonlarni yuqoriga chiqarish",
    customDesign: "Maxsus dizayn va brendlash",
    extendedAnalytics: "Kengaytirilgan analitika",
    personalSupport: "24/7 shaxsiy yordam",
    
    // Privacy Page
    privacyTitle: "Maxfiylik siyosati",
    privacyDescription: "IshTopchi sizning maxfiyligingizni himoya qilishga bag'ishlangan",
    dataProtection: "Ma'lumotlarni himoya qilish",
    dataProtectionDesc: "IshTopchi foydalanuvchilarning shaxsiy ma'lumotlarini himoya qilishni birinchi o'ringa qo'yadi.",
    dataUsage: "Ma'lumotlardan foydalanish",
    dataUsageDesc: "Sizning ma'lumotlaringiz faqat ish qidirish tajribasini yaxshilash uchun ishlatiladi.",
    security: "Xavfsizlik",
    securityDesc: "Barcha ma'lumotlar zamonaviy shifrlash usullari bilan himoyalangan.",
    thirdParties: "Uchinchi shaxslar",
    thirdPartiesDesc: "Sizning ma'lumotlaringiz roziligingizsiz uchinchi shaxslar bilan baham ko'rilmaydi.",
    generalInfo: "Umumiy ma'lumot",
    privacyContent1: "IshTopchi nozik shaxsiy ma'lumotlarni to'plamaydi yoki baham ko'rmaydi. Biz foydalanuvchilarning maxfiyligini hurmat qilamiz va ma'lumotlarni himoya qilishning eng yuqori standartlariga amal qilamiz.",
    privacyContent2: "Sizning ma'lumotlaringiz faqat quyidagi maqsadlarda ishlatiladi:",
    purpose1: "Ish qidirish tajribasini yaxshilash",
    purpose2: "Tegishli ish imkoniyatlarini tavsiya qilish",
    purpose3: "Ish beruvchilar bilan bog'lanishni osonlashtirish",
    purpose4: "Ilova xavfsizligini ta'minlash",
    moreDetails: "Batafsil ma'lumot tez orada. Qo'shimcha savollar uchun ishtopchi@gmail.com manziliga murojaat qiling.",
    lastUpdated: "Oxirgi yangilanish: Yanvar 2025"
  },
  
  en: {
    // Header
    home: "Home",
    support: "Support",
    partnership: "Partnership",
    privacy: "Privacy Policy",
    
    // Hero Section
    appName: "IshTopchi",
    heroSubtitle: "The easiest way to find a job",
    heroDescription: "IshTopchi is a mobile app that allows you to find the right job and connect directly with employers.",
    downloadFrom: "Download",
    appStore: "App Store",
    googlePlay: "Google Play",
    
    // About Section
    aboutTitle: "About the App",
    viewJobsWithoutAccount: "View jobs without creating an account",
    filterJobs: "Search vacancies with filters (salary, location, job type)",
    directChat: "Direct communication with employers via chat",
    
    // Features Section
    featuresTitle: "Key Features",
    findJob: "Find Jobs",
    findJobDesc: "Find the right job among thousands of vacancies",
    directChatTitle: "Direct Chat",
    directChatDesc: "Communicate directly with employers",
    easyApply: "Easy Apply",
    easyApplyDesc: "Apply for jobs with one click",
    
    // Download Section
    downloadNow: "Download Now",
    downloadDescription: "Download the IshTopchi app and find your perfect job",
    
    // Footer
    footerDescription: "The easiest way to find a job. Find your perfect job and connect directly with employers.",
    pages: "Pages",
    contact: "Contact",
    allRightsReserved: "All rights reserved.",
    
    // Support Page
    supportTitle: "Help Center",
    supportDescription: "Have questions about the IshTopchi app? We're here to help!",
    onlineChat: "Online Chat",
    onlineChatDesc: "24/7 online support service",
    email: "Email",
    phoneSupport: "Phone Support",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How do I use the IshTopchi app?",
    faq1A: "Download the app, register, and search for the job you need. Use filters to refine your search.",
    faq2Q: "Is applying for jobs free?",
    faq2A: "Yes, applying for jobs in the IshTopchi app is completely free.",
    faq3Q: "How do I contact employers?",
    faq3A: "You can communicate directly with employers through the in-app chat feature.",
    faq4Q: "I forgot my password, what should I do?",
    faq4A: "Click 'Forgot Password?' on the login page and follow the instructions.",
    backToHome: "Back to Home",
    
    // Marketing Page
    marketingTitle: "Business Partnership",
    marketingDescription: "Partner with IshTopchi and find the best specialists for your company",
    wideAudience: "Wide Audience",
    wideAudienceDesc: "Promote your company among thousands of active users",
    highConversion: "High Conversion",
    highConversionDesc: "Targeted audience and high-quality candidates",
    preciseTargeting: "Precise Targeting",
    preciseTargetingDesc: "Find specialists with the required skills and experience",
    startPartnership: "Let's Start Partnership!",
    partnershipDesc: "Ready to find the best talents for your company? Contact us and let's start the partnership.",
    contactUs: "Contact Us",
    forEmployers: "For Employers",
    freeJobPosting: "Free job posting opportunity",
    directChatWithCandidates: "Direct chat with candidates",
    flexibleFilters: "Flexible filters and search",
    analyticsReports: "Analytics and reports",
    premiumServices: "Premium Services",
    promoteListings: "Promote listings to the top",
    customDesign: "Custom design and branding",
    extendedAnalytics: "Extended analytics",
    personalSupport: "24/7 personal support",
    
    // Privacy Page
    privacyTitle: "Privacy Policy",
    privacyDescription: "IshTopchi is dedicated to protecting your privacy",
    dataProtection: "Data Protection",
    dataProtectionDesc: "IshTopchi prioritizes the protection of users' personal information.",
    dataUsage: "Data Usage",
    dataUsageDesc: "Your information is used solely to enhance the job search experience.",
    security: "Security",
    securityDesc: "All data is protected with modern encryption methods.",
    thirdParties: "Third Parties",
    thirdPartiesDesc: "Your data is not shared with third parties without your consent.",
    generalInfo: "General Information",
    privacyContent1: "IshTopchi does not collect or share sensitive personal data. We respect users' privacy and adhere to the highest standards of data protection.",
    privacyContent2: "Your information is used only for the following purposes:",
    purpose1: "Improving the job search experience",
    purpose2: "Recommending relevant job opportunities",
    purpose3: "Facilitating connections with employers",
    purpose4: "Ensuring application security",
    moreDetails: "More details coming soon. For additional questions, contact us at ishtopchi@gmail.com.",
    lastUpdated: "Last updated: January 2025"
  },
  
  ru: {
    // Header
    home: "Главная",
    support: "Поддержка",
    partnership: "Партнерство",
    privacy: "Политика конфиденциальности",
    
    // Hero Section
    appName: "IshTopchi",
    heroSubtitle: "Самый простой способ найти работу",
    heroDescription: "IshTopchi - мобильное приложение, которое позволяет найти подходящую работу и напрямую связаться с работодателями.",
    downloadFrom: "Скачать",
    appStore: "App Store",
    googlePlay: "Google Play",
    
    // About Section
    aboutTitle: "О приложении",
    viewJobsWithoutAccount: "Просмотр вакансий без создания аккаунта",
    filterJobs: "Поиск вакансий с фильтрами (зарплата, местоположение, тип работы)",
    directChat: "Прямое общение с работодателями через чат",
    
    // Features Section
    featuresTitle: "Основные функции",
    findJob: "Поиск работы",
    findJobDesc: "Найдите подходящую работу среди тысяч вакансий",
    directChatTitle: "Прямой чат",
    directChatDesc: "Общайтесь напрямую с работодателями",
    easyApply: "Легкая подача заявки",
    easyApplyDesc: "Подавайте заявки на работу одним кликом",
    
    // Download Section
    downloadNow: "Скачать сейчас",
    downloadDescription: "Скачайте приложение IshTopchi и найдите свою идеальную работу",
    
    // Footer
    footerDescription: "Самый простой способ найти работу. Найдите свою идеальную работу и свяжитесь напрямую с работодателями.",
    pages: "Страницы",
    contact: "Контакты",
    allRightsReserved: "Все права защищены.",
    
    // Support Page
    supportTitle: "Центр поддержки",
    supportDescription: "Есть вопросы о приложении IshTopchi? Мы поможем!",
    onlineChat: "Онлайн чат",
    onlineChatDesc: "Служба онлайн поддержки 24/7",
    email: "Электронная почта",
    phoneSupport: "Поддержка по телефону",
    faqTitle: "Часто задаваемые вопросы",
    faq1Q: "Как использовать приложение IshTopchi?",
    faq1A: "Скачайте приложение, зарегистрируйтесь и ищите нужную работу. Используйте фильтры для уточнения поиска.",
    faq2Q: "Бесплатно ли подавать заявки на работу?",
    faq2A: "Да, подача заявок на работу в приложении IshTopchi абсолютно бесплатна.",
    faq3Q: "Как связаться с работодателями?",
    faq3A: "Вы можете общаться напрямую с работодателями через функцию чата в приложении.",
    faq4Q: "Я забыл пароль, что делать?",
    faq4A: "Нажмите 'Забыли пароль?' на странице входа и следуйте инструкциям.",
    backToHome: "Вернуться на главную",
    
    // Marketing Page
    marketingTitle: "Бизнес-партнерство",
    marketingDescription: "Сотрудничайте с IshTopchi и найдите лучших специалистов для своей компании",
    wideAudience: "Широкая аудитория",
    wideAudienceDesc: "Продвигайте свою компанию среди тысяч активных пользователей",
    highConversion: "Высокая конверсия",
    highConversionDesc: "Целевая аудитория и высококачественные кандидаты",
    preciseTargeting: "Точное таргетирование",
    preciseTargetingDesc: "Найдите специалистов с необходимыми навыками и опытом",
    startPartnership: "Начнем партнерство!",
    partnershipDesc: "Готовы найти лучшие таланты для своей компании? Свяжитесь с нами и начнем партнерство.",
    contactUs: "Связаться с нами",
    forEmployers: "Для работодателей",
    freeJobPosting: "Возможность бесплатного размещения вакансий",
    directChatWithCandidates: "Прямой чат с кандидатами",
    flexibleFilters: "Гибкие фильтры и поиск",
    analyticsReports: "Аналитика и отчеты",
    premiumServices: "Премиум услуги",
    promoteListings: "Продвижение объявлений в топ",
    customDesign: "Индивидуальный дизайн и брендинг",
    extendedAnalytics: "Расширенная аналитика",
    personalSupport: "Персональная поддержка 24/7",
    
    // Privacy Page
    privacyTitle: "Политика конфиденциальности",
    privacyDescription: "IshTopchi заботится о защите вашей конфиденциальности",
    dataProtection: "Защита данных",
    dataProtectionDesc: "IshTopchi приоритизирует защиту личной информации пользователей.",
    dataUsage: "Использование данных",
    dataUsageDesc: "Ваша информация используется исключительно для улучшения опыта поиска работы.",
    security: "Безопасность",
    securityDesc: "Все данные защищены современными методами шифрования.",
    thirdParties: "Третьи стороны",
    thirdPartiesDesc: "Ваши данные не передаются третьим сторонам без вашего согласия.",
    generalInfo: "Общая информация",
    privacyContent1: "IshTopchi не собирает и не передает конфиденциальные персональные данные. Мы уважаем конфиденциальность пользователей и придерживаемся высочайших стандартов защиты данных.",
    privacyContent2: "Ваша информация используется только для следующих целей:",
    purpose1: "Улучшение опыта поиска работы",
    purpose2: "Рекомендация подходящих вакансий",
    purpose3: "Облегчение связи с работодателями",
    purpose4: "Обеспечение безопасности приложения",
    moreDetails: "Подробности скоро появятся. По дополнительным вопросам обращайтесь по адресу ishtopchi@gmail.com.",
    lastUpdated: "Последнее обновление: Январь 2025"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};