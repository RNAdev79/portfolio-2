// ========================================
// Translation Object - English & Arabic
// ========================================
const translations = {
    en: {
        // Page Title
        title: "RNA - Personal Portfolio",
        
        // Navigation
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        
        // Hero Section
        "hero-greeting": "Hello, It's",
        "hero-subtitle": "Frontend Developer | UI/UX Enthusiast | Creative Designer",
        "cta-button": "Let's Start",
        
        // About Section
        "about-title": "About Me",
        "about-text": "I'm a passionate frontend developer with a keen eye for design and user experience. I specialize in creating modern, responsive websites that not only look stunning but also provide seamless user interactions. With expertise in HTML, CSS, JavaScript, and modern frameworks, I bring creative ideas to life through clean, efficient code.",
        
        // Skills Section
        "skills-title": "Skills",
        "skill-java-name": "Java",
        "skill-java-desc": "Object-oriented programming and backend development",
        "skill-js-name": "JavaScript",
        "skill-js-desc": "Dynamic web applications and interactive experiences",
        "skill-html-name": "HTML & CSS",
        "skill-html-desc": "Semantic markup and modern responsive design",
        "skill-react-name": "React",
        "skill-react-desc": "Component-based UI development and state management",
        "skill-db-name": "Database",
        "skill-db-desc": "SQL and NoSQL database design and optimization",
        "skill-design-name": "UI/UX Design",
        "skill-design-desc": "User-centered design and visual aesthetics",
        
        // Projects Section
        "projects-title": "Projects",
        "project1-title": "Power BI Dashboard",
        "project1-desc": "Interactive data visualization dashboard with real-time analytics and custom reports for business intelligence insights.",
        "project2-title": "Ticket Booking App",
        "project2-desc": "Full-stack booking application with user authentication, seat selection, and payment integration for seamless ticket purchasing.",
        "project3-title": "Interactive Web Projects",
        "project3-desc": "Collection of creative web applications featuring animations, games, and interactive UI components with modern design patterns.",
        
        // Contact Section
        "contact-title": "Get In Touch",
        "contact-text": "Let's work together! Feel free to reach out for collaborations or just a friendly chat.",
        
        // Footer
        "footer-text": "© 2026 RNA. All rights reserved."
    },
    ar: {
        // Page Title
        title: "RNA - معرض الأعمال الشخصي",
        
        // Navigation
        "nav-home": "الرئيسية",
        "nav-about": "نبذة عني",
        "nav-skills": "المهارات",
        "nav-projects": "المشاريع",
        "nav-contact": "تواصل معي",
        
        // Hero Section
        "hero-greeting": "مرحباً، أنا",
        "hero-subtitle": "مطورة واجهات أمامية | مهتمة بتجربة المستخدم | مصممة إبداعية",
        "cta-button": "لنبدأ",
        
        // About Section
        "about-title": "نبذة عني",
        "about-text": "أنا مطورة واجهات أمامية شغوفة بالتصميم وتجربة المستخدم. أتخصص في إنشاء مواقع ويب حديثة ومتجاوبة لا تبدو مذهلة فحسب، بل توفر أيضاً تفاعلات سلسة للمستخدم. مع خبرة في HTML و CSS و JavaScript والأطر الحديثة، أحول الأفكار الإبداعية إلى واقع من خلال كود نظيف وفعال.",
        
        // Skills Section
        "skills-title": "المهارات",
        "skill-java-name": "جافا",
        "skill-java-desc": "البرمجة الكائنية وتطوير الواجهات الخلفية",
        "skill-js-name": "جافا سكريبت",
        "skill-js-desc": "تطبيقات الويب الديناميكية والتجارب التفاعلية",
        "skill-html-name": "HTML و CSS",
        "skill-html-desc": "الترميز الدلالي والتصميم المتجاوب الحديث",
        "skill-react-name": "ريأكت",
        "skill-react-desc": "تطوير واجهات المستخدم القائمة على المكونات وإدارة الحالة",
        "skill-db-name": "قواعد البيانات",
        "skill-db-desc": "تصميم وتحسين قواعد البيانات SQL و NoSQL",
        "skill-design-name": "تصميم UI/UX",
        "skill-design-desc": "التصميم المرتكز على المستخدم والجماليات البصرية",
        
        // Projects Section
        "projects-title": "المشاريع",
        "project1-title": "لوحة معلومات Power BI",
        "project1-desc": "لوحة معلومات تفاعلية لتصور البيانات مع تحليلات في الوقت الفعلي وتقارير مخصصة لرؤى ذكاء الأعمال.",
        "project2-title": "تطبيق حجز التذاكر",
        "project2-desc": "تطبيق حجز متكامل مع مصادقة المستخدم واختيار المقاعد وتكامل الدفع لشراء تذاكر سلس.",
        "project3-title": "مشاريع ويب تفاعلية",
        "project3-desc": "مجموعة من تطبيقات الويب الإبداعية التي تتميز بالرسوم المتحركة والألعاب ومكونات واجهة المستخدم التفاعلية مع أنماط التصميم الحديثة.",
        
        // Contact Section
        "contact-title": "تواصل معي",
        "contact-text": "لنعمل معاً! لا تتردد في التواصل للتعاون أو مجرد محادثة ودية.",
        
        // Footer
        "footer-text": "© 2026 RNA. جميع الحقوق محفوظة."
    }
};

// ========================================
// Current Language State
// ========================================
let currentLang = 'en';

// ========================================
// Typewriter Effect for Hero Subtitle
// ========================================
class TypewriterEffect {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.currentWordIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        
        // إعدادات قابلة للتعديل
        this.typingSpeed = options.typingSpeed || 100;  // سرعة الكتابة (ميلي ثانية)
        this.deletingSpeed = options.deletingSpeed || 50;  // سرعة المسح (ميلي ثانية)
        this.pauseAfterWord = options.pauseAfterWord || 2000;  // الوقفة بعد كتابة الكلمة كاملة
        this.pauseAfterDelete = options.pauseAfterDelete || 500;  // الوقفة بعد مسح الكلمة
        
        this.type();
    }
    
    type() {
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.isDeleting) {
            // مسح حرف واحد
            this.currentText = currentWord.substring(0, this.currentText.length - 1);
        } else {
            // كتابة حرف واحد
            this.currentText = currentWord.substring(0, this.currentText.length + 1);
        }
        
        // تحديث النص في العنصر
        this.element.textContent = this.currentText;
        
        let typeSpeed = this.typingSpeed;
        
        if (this.isDeleting) {
            typeSpeed = this.deletingSpeed;
        }
        
        // إذا انتهت الكتابة
        if (!this.isDeleting && this.currentText === currentWord) {
            typeSpeed = this.pauseAfterWord;
            this.isDeleting = true;
        } 
        // إذا انتهى المسح
        else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            typeSpeed = this.pauseAfterDelete;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// تهيئة تأثير Typewriter
function initTypewriter() {
    const subtitleElement = document.querySelector('#typewriter-word');
    
    if (subtitleElement) {
        // الكلمات للغة الإنجليزية - بالترتيب المطلوب
        const wordsEN = [
            'Software Engineer',
            'Frontend Developer',
            'Creative Designer'
        ];
        
        // الكلمات للغة العربية
        const wordsAR = [
            'مهندسة برمجيات',
            'مطورة واجهات أمامية',
            'مصممة إبداعية'
        ];
        
        // اختيار الكلمات بناءً على اللغة الحالية
        const words = currentLang === 'ar' ? wordsAR : wordsEN;
        
        // إنشاء تأثير typewriter مع إعدادات مخصصة
        new TypewriterEffect(subtitleElement, words, {
            typingSpeed: 100,      // سرعة الكتابة: 100 ميلي ثانية لكل حرف
            deletingSpeed: 50,     // سرعة المسح: 50 ميلي ثانية لكل حرف
            pauseAfterWord: 3000,  // وقفة بعد كتابة الكلمة: 3 ثوانٍ
            pauseAfterDelete: 500  // وقفة بعد مسح الكلمة: 0.5 ثانية
        });
    }
}

// ========================================
// Language Switching Function
// ========================================
function switchLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    
    // Update HTML direction and lang attribute
    if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }
    
    // Update all elements with data-lang attribute
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language switch button active state
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang-btn');
        if (optionLang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // إعادة تهيئة typewriter effect باللغة الجديدة
    initTypewriter();
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// ========================================
// Navigation Active Link Highlighting
// ========================================
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                navMenu.classList.remove('active');
            }
        });
    });
}

// ========================================
// Mobile Menu Toggle
// ========================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ========================================
// Fade-in Animation on Scroll
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe skill cards and project cards
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// ========================================
// Initialize Language Switcher
// ========================================
function initLanguageSwitcher() {
    const langSwitch = document.getElementById('langSwitch');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        switchLanguage(savedLang);
    }
    
    // Add click event to language options
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang-btn');
            switchLanguage(lang);
        });
    });
}

// ========================================
// Navbar Background on Scroll
// ========================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 4px 16px rgba(107, 42, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ========================================
// Initialize All Functions on Page Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
    initNavbarScroll();
    initTypewriter();  // تشغيل تأثير typewriter
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call to set active nav
    updateActiveNav();
    
    console.log('Portfolio website initialized successfully! 🚀');
});

// ========================================
// Prevent FOUC (Flash of Unstyled Content)
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
