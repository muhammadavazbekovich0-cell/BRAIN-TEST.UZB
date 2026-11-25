/* ==========================================================================
   SMART BRAIN GAMES — CORE ENGINE (105 GAMES, 3 LANGUAGES, 10 CALCULATORS)
   ========================================================================== */

// 1. MULTI-LANGUAGE DICTIONARY (UZB, RUS, USA/ENG)
const I18N = {
    uz: {
        nav_home: "Bosh sahifa",
        nav_games: "O'yinlar (105)",
        nav_calc: "Kalkulyatorlar",
        nav_leader: "Reyting",
        hero_badge: "⚡ 105+ Interaktiv Intellektual O'yinlar",
        hero_title: "Miyangni rivojlantir, kelajagingni yarat!",
        hero_desc: "Matematika, virtual trading, tillar, fanlar, xotira va reaksiyani rivojlantiruvchi zamonaviy ta'limiy platforma.",
        btn_start: "🚀 Boshlash",
        btn_random: "🎲 Tasodifiy o'yin",
        btn_daily: "🔥 Kunlik Challenge",
        stats_title: "📊 Sizning Statistikangiz",
        stat_played: "O'ynalgan",
        stat_score: "Umumiy ball",
        stat_streak: "Kunlik streak",
        stat_ach: "Yutuqlar",
        next_level: "Keyingi darajagacha:",
        age_title: "🎯 Yosh Kategoriyasini Tanlang",
        age_subtitle: "Yoshga mos qiyinchilik darajasi va maxsus o'yinlar avtomatik tanlanadi",
        age_all: "Barcha yoshlar",
        age_5_7: "5–7 yosh",
        age_5_7_sub: "Kichkintoylar",
        age_8_10: "8–10 yosh",
        age_8_10_sub: "Yosh iqtidorlar",
        age_11_13: "11–13 yosh",
        age_11_13_sub: "Bilimdonlar",
        age_14_18: "14–18 yosh",
        age_14_18_sub: "Yosh mutaxassislar",
        age_19_plus: "19+ yosh",
        age_19_plus_sub: "Kattalar va PRO",
        search_placeholder: "O'yin nomini qidiring...",
        diff_all: "Barcha darajalar",
        diff_easy: "Oson",
        diff_medium: "O'rta",
        diff_hard: "Qiyin",
        favorites: "Sevimlilar",
        cat_all: "🌐 Barchasi (105)",
        cat_math: "➗ Matematika (15)",
        cat_trading: "📊 Trading & Moliya (15)",
        cat_lang: "🌍 Tillar (15)",
        cat_science: "🧬 Fanlar (15)",
        cat_vision: "👁️ Ko'z & Reaksiya (15)",
        cat_motor: "🎯 Qo'l motorikasi (15)",
        cat_brain: "🧩 Miyya & Xotira (15)",
        safety_disclaimer: "🛡️ Xavfsiz muhit • Virtual ballar • Ko'z mashqlarida tanaffus qiling",
        calc_hub_title: "🧮 Professional Kalkulyatorlar Markazi",
        calc_hub_desc: "Moliyaviy, ilmiy, trading va kundalik aniq hisob-kitoblar",
        leader_title: "🏆 Global Reyting va Yutuqlar",
        leader_desc: "Eng faol intellektual o'yinchilar jadvali",
        top_players: "Top O'yinchilar",
        th_player: "O'yinchi",
        th_level: "Daraja",
        th_xp: "XP Ball",
        ach_title: "🎖️ Yutuqlar (Achievements)",
        profile_title: "👤 Foydalanuvchi Profili",
        lbl_name: "Ismingiz:",
        lbl_age: "Yoshingiz:",
        btn_save: "💾 Saqlash",
        history_title: "📜 So'nggi o'yinlar tarixi",
        footer_rights: "Ta'limiy va intellektual rivojlanish platformasi.",
        footer_disclaimer: "* Barcha trading simulyatorlari faqat virtual valyutada ishlaydi. Ko'z mashqlari tibbiy davolash o'rnini bosmaydi.",
        play_now: "▶️ O'ynash",
        start_game: "🚀 O'yinni Boshlash",
        restart_game: "🔄 Qayta O'ynash",
        game_over: "🏁 O'yin Yakunlandi!",
        rules_label: "📋 Qoidalar:",
        showing_count: "Ko'rsatilmoqda: {n} ta o'yin",
        trading_warn: "⚠️ Eslatma: Bu o'quv simulyatori. Faqat virtual $10,000 ishlatiladi. Real moliyaviy xavf yo'q.",
        vision_warn: "👁️ Eslatma: Har 20 daqiqada ko'zlaringizga 20 soniya dam bering. Bu tibbiy muolaja emas."
    },
    ru: {
        nav_home: "Главная",
        nav_games: "Игры (105)",
        nav_calc: "Калькуляторы",
        nav_leader: "Рейтинг",
        hero_badge: "⚡ 105+ Интерактивных Интеллектуальных Игр",
        hero_title: "Развивай мозг, создавай свое будущее!",
        hero_desc: "Современная образовательная платформа для развития математики, виртуального трейдинга, языков, наук, памяти и реакции.",
        btn_start: "🚀 Начать",
        btn_random: "🎲 Случайная игра",
        btn_daily: "🔥 Ежедневный вызов",
        stats_title: "📊 Ваша Статистика",
        stat_played: "Сыграно",
        stat_score: "Общий счет",
        stat_streak: "Дней подряд",
        stat_ach: "Достижения",
        next_level: "До следующего уровня:",
        age_title: "🎯 Выберите Возрастную Категорию",
        age_subtitle: "Сложность и подбор игр автоматически адаптируются под возраст",
        age_all: "Все возрасты",
        age_5_7: "5–7 лет",
        age_5_7_sub: "Малыши",
        age_8_10: "8–10 лет",
        age_8_10_sub: "Юные таланты",
        age_11_13: "11–13 лет",
        age_11_13_sub: "Знатоки",
        age_14_18: "14–18 лет",
        age_14_18_sub: "Юные профи",
        age_19_plus: "19+ лет",
        age_19_plus_sub: "Взрослые и ПРО",
        search_placeholder: "Поиск игры по названию...",
        diff_all: "Все уровни",
        diff_easy: "Легкий",
        diff_medium: "Средний",
        diff_hard: "Сложный",
        favorites: "Избранное",
        cat_all: "🌐 Все игры (105)",
        cat_math: "➗ Математика (15)",
        cat_trading: "📊 Трейдинг и Финансы (15)",
        cat_lang: "🌍 Языки (15)",
        cat_science: "🧬 Науки (15)",
        cat_vision: "👁️ Зрение и Реакция (15)",
        cat_motor: "🎯 Моторика рук (15)",
        cat_brain: "🧩 Мозг и Память (15)",
        safety_disclaimer: "🛡️ Безопасная среда • Виртуальные очки • Делайте перерывы для глаз",
        calc_hub_title: "🧮 Центр Профессиональных Калькуляторов",
        calc_hub_desc: "Финансовые, научные, торговые и повседневные точные расчеты",
        leader_title: "🏆 Глобальный Рейтинг и Достижения",
        leader_desc: "Таблица самых активных интеллектуальных игроков",
        top_players: "Топ Игроков",
        th_player: "Игрок",
        th_level: "Уровень",
        th_xp: "XP Очки",
        ach_title: "🎖️ Достижения (Achievements)",
        profile_title: "👤 Профиль Пользователя",
        lbl_name: "Ваше имя:",
        lbl_age: "Ваш возраст:",
        btn_save: "💾 Сохранить",
        history_title: "📜 История последних игр",
        footer_rights: "Образовательная платформа интеллектуального развития.",
        footer_disclaimer: "* Все торговые симуляторы используют только виртуальную валюту. Упражнения для глаз не являются лечением.",
        play_now: "▶️ Играть",
        start_game: "🚀 Начать Игру",
        restart_game: "🔄 Играть Снова",
        game_over: "🏁 Игра Окончена!",
        rules_label: "📋 Правила:",
        showing_count: "Показано: {n} игр",
        trading_warn: "⚠️ Примечание: Учебный симулятор. Используются виртуальные $10,000. Реального риска нет.",
        vision_warn: "👁️ Примечание: Каждые 20 минут давайте глазам отдых 20 секунд. Не является мед. процедурой."
    },
    en: {
        nav_home: "Home",
        nav_games: "Games (105)",
        nav_calc: "Calculators",
        nav_leader: "Leaderboard",
        hero_badge: "⚡ 105+ Interactive Brain Training Games",
        hero_title: "Train Your Brain, Create Your Future!",
        hero_desc: "A modern EdTech platform designed to boost mathematics, virtual trading, languages, sciences, memory, and reflexes.",
        btn_start: "🚀 Start Now",
        btn_random: "🎲 Random Game",
        btn_daily: "🔥 Daily Challenge",
        stats_title: "📊 Your Statistics",
        stat_played: "Played",
        stat_score: "Total Score",
        stat_streak: "Daily Streak",
        stat_ach: "Achievements",
        next_level: "Next Level Progress:",
        age_title: "🎯 Choose Age Category",
        age_subtitle: "Difficulty level and tailored games adapt automatically to your age",
        age_all: "All Ages",
        age_5_7: "5–7 yrs",
        age_5_7_sub: "Little Explorers",
        age_8_10: "8–10 yrs",
        age_8_10_sub: "Young Talents",
        age_11_13: "11–13 yrs",
        age_11_13_sub: "Scholars",
        age_14_18: "14–18 yrs",
        age_14_18_sub: "Young Specialists",
        age_19_plus: "19+ yrs",
        age_19_plus_sub: "Adults & PRO",
        search_placeholder: "Search games by name...",
        diff_all: "All Difficulties",
        diff_easy: "Easy",
        diff_medium: "Medium",
        diff_hard: "Hard",
        favorites: "Favorites",
        cat_all: "🌐 All Games (105)",
        cat_math: "➗ Mathematics (15)",
        cat_trading: "📊 Trading & Finance (15)",
        cat_lang: "🌍 Languages (15)",
        cat_science: "🧬 Sciences (15)",
        cat_vision: "👁️ Vision & Reflex (15)",
        cat_motor: "🎯 Hand Motor Skills (15)",
        cat_brain: "🧩 Brain & Memory (15)",
        safety_disclaimer: "🛡️ Safe Environment • Virtual Points • Take regular eye breaks",
        calc_hub_title: "🧮 Professional Calculators Hub",
        calc_hub_desc: "Financial, scientific, trading, and everyday precision tools",
        leader_title: "🏆 Global Leaderboard & Achievements",
        leader_desc: "Top active intellectual players ranking",
        top_players: "Top Players",
        th_player: "Player",
        th_level: "Level",
        th_xp: "XP Points",
        ach_title: "🎖️ Achievements",
        profile_title: "👤 User Profile",
        lbl_name: "Your Name:",
        lbl_age: "Your Age:",
        btn_save: "💾 Save",
        history_title: "📜 Recent Game History",
        footer_rights: "Educational and intellectual development platform.",
        footer_disclaimer: "* All trading simulators use virtual currency only. Eye exercises do not guarantee medical improvement.",
        play_now: "▶️ Play Now",
        start_game: "🚀 Start Game",
        restart_game: "🔄 Play Again",
        game_over: "🏁 Game Over!",
        rules_label: "📋 Rules:",
        showing_count: "Showing: {n} games",
        trading_warn: "⚠️ Disclaimer: Educational simulator using virtual $10,000. No real financial risk.",
        vision_warn: "👁️ Note: Rest your eyes for 20 seconds every 20 minutes. Not a medical treatment."
    }
};

// 2. WEB AUDIO API SYNTHESIZER (No external audio files needed)
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.soundEnabled = true;
        this.musicEnabled = false;
        this.musicInterval = null;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    playTone(freq, type = 'sine', duration = 0.15, vol = 0.12) {
        if (!this.soundEnabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    click() { this.playTone(520, 'sine', 0.08, 0.08); }
    correct() {
        this.playTone(587.33, 'triangle', 0.12, 0.14);
        setTimeout(() => this.playTone(880, 'triangle', 0.2, 0.14), 90);
    }
    wrong() {
        this.playTone(220, 'sawtooth', 0.22, 0.12);
    }
    win() {
        [523, 659, 784, 1046].forEach((f, i) => {
            setTimeout(() => this.playTone(f, 'triangle', 0.22, 0.14), i * 110);
        });
    }

    toggleMusic() {
        this.musicEnabled = !this.musicEnabled;
        if (this.musicEnabled) {
            this.init();
            const notes = [261.63, 329.63, 392.00, 493.88, 392.00, 329.63];
            let step = 0;
            this.musicInterval = setInterval(() => {
                if (this.musicEnabled) {
                    this.playTone(notes[step % notes.length], 'sine', 0.4, 0.03);
                    step++;
                }
            }, 600);
        } else {
            clearInterval(this.musicInterval);
        }
        return this.musicEnabled;
    }
}

const sfx = new SoundEngine();

// 3. COMPLETE CATALOG OF 105 REAL WORKING GAMES (7 CATEGORIES x 15 GAMES)
const GAME_DEFINITIONS = [
    // A. MATHEMATICS (15)
    { id: 1, cat: 'math', type: 'math_add', icon: '➕', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Tezkor Qo'shish", ru: "Быстрое Сложение", en: "Speed Addition" }, desc: { uz: "Sonlarni tez va aniq qo'shish mashqi", ru: "Тренировка быстрого сложения чисел", en: "Fast and accurate number addition" } },
    { id: 2, cat: 'math', type: 'math_sub', icon: '➖', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Ayirish Ustasi", ru: "Мастер Вычитания", en: "Subtraction Master" }, desc: { uz: "Aqliy ayirish tezligini oshiring", ru: "Развивайте скорость вычитания в уме", en: "Boost mental subtraction speed" } },
    { id: 3, cat: 'math', type: 'math_mul', icon: '✖️', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Ko'paytirish Jadvali Pro", ru: "Таблица Умножения Про", en: "Multiplication Pro" }, desc: { uz: "Ko'paytirish amallarini soniyalar ichida yeching", ru: "Решайте примеры на умножение за секунды", en: "Solve multiplication in seconds" } },
    { id: 4, cat: 'math', type: 'math_div', icon: '➗', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Aniq Bo'lish", ru: "Точное Деление", en: "Exact Division" }, desc: { uz: "Qoldiqsiz bo'lish bo'yicha intellektual sinov", ru: "Интеллектуальный тест на деление", en: "Mental division challenge" } },
    { id: 5, cat: 'math', type: 'math_frac', icon: '🍰', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Kasrlar Dunyosi", ru: "Мир Дробей", en: "Fraction World" }, desc: { uz: "Oddiy va o'nli kasrlarni hisoblash", ru: "Вычисление обыкновенных и десятичных дробей", en: "Calculate common and decimal fractions" } },
    { id: 6, cat: 'math', type: 'math_pct', icon: '💯', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Foizlar Hisobi", ru: "Расчет Процентов", en: "Percentage Sprint" }, desc: { uz: "Sonlarning foizini tez topish", ru: "Быстрый поиск процентов от чисел", en: "Find percentages of numbers fast" } },
    { id: 7, cat: 'math', type: 'math_eq', icon: '📐', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Tenglamalar Yechimi", ru: "Решение Уравнений", en: "Equation Solver" }, desc: { uz: "Noma'lum X qiymatini toping", ru: "Найдите неизвестное значение X", en: "Solve for unknown variable X" } },
    { id: 8, cat: 'math', type: 'math_geo', icon: '🔷', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Geometriya Bilimdoni", ru: "Знаток Геометрии", en: "Geometry Genius" }, desc: { uz: "Perimetr, yuza va burchaklarni hisoblang", ru: "Вычисляйте периметр, площадь и углы", en: "Calculate perimeter, area, and angles" } },
    { id: 9, cat: 'math', type: 'math_mental', icon: '🧠', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Mental Arifmetika", ru: "Ментальная Арифметика", en: "Mental Arithmetic" }, desc: { uz: "Ko'p bosqichli arifmetik zanjir", ru: "Многошаговая арифметическая цепочка", en: "Multi-step arithmetic chain" } },
    { id: 10, cat: 'math', type: 'math_speed', icon: '⚡', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Tez Hisoblash", ru: "Скоростной Счет", en: "Flash Calculation" }, desc: { uz: "Vaqt tugamasidan maksimal misol yeching", ru: "Решите максимум примеров до конца времени", en: "Solve maximum problems before time runs out" } },
    { id: 11, cat: 'math', type: 'math_cmp', icon: '⚖️', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Sonlarni Taqqoslash", ru: "Сравнение Чисел", en: "Number Comparison" }, desc: { uz: "Qaysi ifoda katta yoki teng ekanini aniqlang", ru: "Определите какое выражение больше или равно", en: "Compare expressions: >, <, or =" } },
    { id: 12, cat: 'math', type: 'math_puzzle', icon: '🔢', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Matematik Puzzle", ru: "Математический Пазл", en: "Math Operator Puzzle" }, desc: { uz: "Tushib qolgan matematik belgini toping", ru: "Найдите пропущенный математический знак", en: "Find the missing math operator" } },
    { id: 13, cat: 'math', type: 'math_calc_chal', icon: '🖩', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Kalkulyator Challenge", ru: "Калькулятор Челлендж", en: "Target Number Challenge" }, desc: { uz: "Berilgan sonlardan maqsadli sonni hosil qiling", ru: "Составьте целевое число из данных цифр", en: "Reach the target number using given digits" } },
    { id: 14, cat: 'math', type: 'math_seq', icon: '📈', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Sonlar Ketma-ketligi", ru: "Числовые Ряды", en: "Number Sequences" }, desc: { uz: "Progressiyadagi keyingi sonni toping", ru: "Найдите следующее число в прогрессии", en: "Find the next number in the sequence" } },
    { id: 15, cat: 'math', type: 'math_quiz', icon: '🎓', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Matematik Viktorina", ru: "Математическая Викторина", en: "Math Trivia Quiz" }, desc: { uz: "Qiziqarli matematik savollar to'plami", ru: "Сборник интересных математических вопросов", en: "Fun mathematical trivia questions" } },

    // B. TRADING & FINANCIAL LITERACY (15)
    { id: 16, cat: 'trading', type: 'trade_sim', icon: '📊', ages: ['14-18', '19+'], diff: 'medium', name: { uz: "Trading Simulator", ru: "Трейдинг Симулятор", en: "Trading Simulator" }, desc: { uz: "Virtual $10,000 bilan jonli grafikda savdo qiling", ru: "Торгуйте на живом графике с виртуальными $10,000", en: "Trade live charts with virtual $10,000" } },
    { id: 17, cat: 'trading', type: 'trade_sim', icon: '🏛️', ages: ['14-18', '19+'], diff: 'medium', name: { uz: "Virtual Stock Market", ru: "Виртуальный Фондовый Рынок", en: "Virtual Stock Market" }, desc: { uz: "Texnologiya kompaniyalari aksiyalari simulyatori", ru: "Симулятор акций технологических компаний", en: "Tech stocks virtual market simulator" } },
    { id: 18, cat: 'trading', type: 'trade_sim', icon: '💹', ages: ['11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Buy & Sell Challenge", ru: "Челлендж Купи и Продай", en: "Buy & Sell Challenge" }, desc: { uz: "Arzon narxda sotib oling va qimmatda soting", ru: "Покупайте дешево и продавайте дорого", en: "Buy low and sell high challenge" } },
    { id: 19, cat: 'trading', type: 'trade_sim', icon: '🪙', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Crypto Market Sim", ru: "Крипто Симулятор", en: "Crypto Market Sim" }, desc: { uz: "Yuqori volatillikdagi virtual kripto bozori", ru: "Виртуальный крипторынок высокой волатильности", en: "High volatility virtual crypto simulator" } },
    { id: 20, cat: 'trading', type: 'trade_sim', icon: '💱', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Forex Valyuta Simulyatori", ru: "Форекс Симулятор", en: "Forex Currency Sim" }, desc: { uz: "EUR/USD virtual valyuta juftligi tahlili", ru: "Анализ виртуальной валютной пары EUR/USD", en: "EUR/USD virtual currency pair simulator" } },
    { id: 21, cat: 'trading', type: 'trade_candle', icon: '🕯️', ages: ['14-18', '19+'], diff: 'medium', name: { uz: "Candlestick Chart Game", ru: "Японские Свечи", en: "Candlestick Pattern Game" }, desc: { uz: "Shamdon patternlari orqali yo'nalishni toping", ru: "Определите тренд по свечным паттернам", en: "Predict direction using candlestick patterns" } },
    { id: 22, cat: 'trading', type: 'trade_sr', icon: '🧱', ages: ['14-18', '19+'], diff: 'medium', name: { uz: "Support & Resistance", ru: "Поддержка и Сопротивление", en: "Support & Resistance" }, desc: { uz: "Narxning qo'llab-quvvatlash darajasini aniqlang", ru: "Определите уровни поддержки и сопротивления", en: "Identify key support and resistance levels" } },
    { id: 23, cat: 'trading', type: 'fin_quiz', icon: '🛡️', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Risk Management", ru: "Риск-Менеджмент", en: "Risk Management Pro" }, desc: { uz: "Kapitalni himoya qilish va Stop-Loss qoidalari", ru: "Защита капитала и правила Stop-Loss", en: "Capital protection and Stop-Loss rules" } },
    { id: 24, cat: 'trading', type: 'fin_math', icon: '💰', ages: ['11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Profit & Loss Ustasi", ru: "Мастер Прибыли и Убытков", en: "Profit & Loss Master" }, desc: { uz: "Bitim foydasi va zararini tezkor hisoblang", ru: "Быстро рассчитывайте прибыль и убыток сделки", en: "Calculate trade profit and loss quickly" } },
    { id: 25, cat: 'trading', type: 'fin_quiz', icon: '🏦', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Investment Challenge", ru: "Инвестиционный Вызов", en: "Investment Challenge" }, desc: { uz: "Uzoq muddatli portfel diversifikatsiyasi", ru: "Долгосрочная диверсификация портфеля", en: "Long-term portfolio diversification" } },
    { id: 26, cat: 'trading', type: 'fin_math', icon: '💳', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Budget Manager", ru: "Менеджер Бюджета", en: "Smart Budget Manager" }, desc: { uz: "Daromad va xarajatlarni oqilona taqsimlang", ru: "Грамотно распределяйте доходы и расходы", en: "Manage income and expenses wisely" } },
    { id: 27, cat: 'trading', type: 'fin_math', icon: '📈', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Murakkab Foiz O'yini", ru: "Сложный Процент", en: "Compound Interest Game" }, desc: { uz: "Kapitalning yillik o'sish kuchini hisoblang", ru: "Рассчитайте силу годового роста капитала", en: "Calculate annual compound growth power" } },
    { id: 28, cat: 'trading', type: 'fin_quiz', icon: '🐷', ages: ['5-7', '8-10', '11-13'], diff: 'easy', name: { uz: "Yosh Jamg'armachi", ru: "Юный Копилка", en: "Junior Money Saver" }, desc: { uz: "Bolalar uchun pul va tejash asoslari", ru: "Основы денег и сбережений для детей", en: "Money and saving basics for kids" } },
    { id: 29, cat: 'trading', type: 'fin_quiz', icon: '📉', ages: ['14-18', '19+'], diff: 'medium', name: { uz: "Inflyatsiya va Pul Qadri", ru: "Инфляция и Ценность Денег", en: "Inflation & Purchasing Power" }, desc: { uz: "Iqtisodiy ko'rsatkichlarni tushunish", ru: "Понимание экономических показателей", en: "Understand inflation and purchasing power" } },
    { id: 30, cat: 'trading', type: 'fin_quiz', icon: '🧾', ages: ['14-18', '19+'], diff: 'medium', name: { uz: "Moliyaviy Savodxonlik", ru: "Финансовая Грамотность", en: "Financial Literacy Quiz" }, desc: { uz: "Aktivlar, passivlar va kredit madaniyati", ru: "Активы, пассивы и кредитная культура", en: "Assets, liabilities, and smart finance" } },

    // C. LANGUAGES LEARNING (15)
    { id: 31, cat: 'lang', type: 'lang_match', icon: '🔤', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Word Match (UZ-EN-RU)", ru: "Совпадение Слов", en: "Word Match Trio" }, desc: { uz: "So'zlarni tarjimasi bilan moslashtiring", ru: "Сопоставляйте слова с их переводом", en: "Match words with their translations" } },
    { id: 32, cat: 'lang', type: 'lang_quiz', icon: '📚', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Vocabulary Quiz", ru: "Словарный Тест", en: "Vocabulary Builder Quiz" }, desc: { uz: "So'z boyligingizni 3 tilda sinab ko'ring", ru: "Проверьте свой словарный запас на 3 языках", en: "Test your vocabulary across 3 languages" } },
    { id: 33, cat: 'lang', type: 'lang_trans', icon: '🌐', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Translate Challenge", ru: "Челлендж Перевода", en: "Translate Challenge" }, desc: { uz: "Tezkor tarjima qilish musobaqasi", ru: "Соревнование по быстрому переводу", en: "Fast translation challenge" } },
    { id: 34, cat: 'lang', type: 'lang_gram', icon: '✍️', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Grammar Master", ru: "Мастер Грамматики", en: "Grammar Master" }, desc: { uz: "Zamonlar va artikllarni to'g'ri qo'llang", ru: "Правильно используйте времена и артикли", en: "Master tenses and articles" } },
    { id: 35, cat: 'lang', type: 'lang_listen', icon: '🎧', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Listening Audio Game", ru: "Аудирование Игры", en: "Audio Listening Game" }, desc: { uz: "Talaffuzni eshiting va to'g'ri so'zni toping", ru: "Прослушайте произношение и выберите слово", en: "Listen to pronunciation and pick the word" } },
    { id: 36, cat: 'lang', type: 'lang_spell', icon: '🐝', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Spelling Bee Challenge", ru: "Орфография Челлендж", en: "Spelling Bee Challenge" }, desc: { uz: "So'zlarni harfma-harf xatosiz yozing", ru: "Пишите слова по буквам без ошибок", en: "Spell words accurately letter by letter" } },
    { id: 37, cat: 'lang', type: 'lang_missing', icon: '🧩', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Missing Word", ru: "Пропущенное Слово", en: "Missing Word Fill" }, desc: { uz: "Gapdagi tushib qolgan so'zni toping", ru: "Найдите пропущенное слово в предложении", en: "Fill in the missing word in the sentence" } },
    { id: 38, cat: 'lang', type: 'lang_pic', icon: '🖼️', ages: ['5-7', '8-10'], diff: 'easy', name: { uz: "Picture Vocabulary", ru: "Словарь в Картинках", en: "Picture Vocabulary" }, desc: { uz: "Emojilar orqali xorijiy so'zlarni o'rganing", ru: "Учите иностранные слова по картинкам", en: "Learn foreign words through emojis" } },
    { id: 39, cat: 'lang', type: 'lang_quiz', icon: '🔄', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Antonimlar va Sinonimlar", ru: "Антонимы и Синонимы", en: "Antonyms & Synonyms" }, desc: { uz: "Qarama-qarshi ma'noli so'zlarni toping", ru: "Найдите слова с противоположным значением", en: "Find opposite and similar words" } },
    { id: 40, cat: 'lang', type: 'lang_quiz', icon: '💬', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Idiomalar va Ibora", ru: "Идиомы и Фразеологизмы", en: "Idioms & Expressions" }, desc: { uz: "Kundalik nutqdagi mashhur iboralar", ru: "Популярные выражения разговорной речи", en: "Popular everyday idioms and phrases" } },
    { id: 41, cat: 'lang', type: 'lang_pic', icon: '🍎', ages: ['5-7', '8-10'], diff: 'easy', name: { uz: "Mevalar va Hayvonlar", ru: "Фрукты и Животные", en: "Fruits & Animals" }, desc: { uz: "Bolalar uchun birinchi xorijiy so'zlar", ru: "Первые иностранные слова для детей", en: "First foreign words for kids" } },
    { id: 42, cat: 'lang', type: 'lang_gram', icon: '🕒', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Fe'l Zamonlari", ru: "Времена Глаголов", en: "Verb Tenses Trainer" }, desc: { uz: "Past, Present va Future zamonlari mashqi", ru: "Тренировка времен Past, Present и Future", en: "Practice Past, Present, and Future tenses" } },
    { id: 43, cat: 'lang', type: 'lang_trans', icon: '✈️', ages: ['11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Sayohat Lug'ati", ru: "Словарь Путешественника", en: "Travel Phrasebook" }, desc: { uz: "Aeroport va mehmonxonada kerakli so'zlar", ru: "Нужные фразы в аэропорту и отеле", en: "Essential phrases for airport and hotel" } },
    { id: 44, cat: 'lang', type: 'lang_trans', icon: '💼', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Business English", ru: "Бизнес Английский", en: "Business Vocabulary" }, desc: { uz: "Ishbilarmonlik va IT atamalari", ru: "Деловая и IT терминология", en: "Business and IT terminology" } },
    { id: 45, cat: 'lang', type: 'lang_spell', icon: '🔠', ages: ['5-7', '8-10'], diff: 'easy', name: { uz: "Alifbo va Harflar", ru: "Алфавит и Буквы", en: "Alphabet & Letters" }, desc: { uz: "Harflarni tartib bilan joylashtiring", ru: "Расставьте буквы в правильном порядке", en: "Arrange letters in alphabetical order" } },

    // D. SCIENCES (15)
    { id: 46, cat: 'science', type: 'sci_physics', icon: '⚛️', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Fizika Qonunlari", ru: "Законы Физики", en: "Physics Laws Quiz" }, desc: { uz: "Mexanika, elektr va yorug'lik hodisalari", ru: "Механика, электричество и оптика", en: "Mechanics, electricity, and optics" } },
    { id: 47, cat: 'science', type: 'sci_chem', icon: '🧪', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Kimyoviy Elementlar", ru: "Химические Элементы", en: "Periodic Table Master" }, desc: { uz: "Mendeleyev jadvali va formulalar", ru: "Таблица Менделеева и формулы", en: "Periodic table symbols and formulas" } },
    { id: 48, cat: 'science', type: 'sci_bio', icon: '🧬', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Biologiya va Inson", ru: "Биология и Человек", en: "Biology & Human Body" }, desc: { uz: "Tiriklik olami va hujayra tuzilishi", ru: "Живой мир и строение клетки", en: "Living organisms and cell structure" } },
    { id: 49, cat: 'science', type: 'sci_hist', icon: '🏛️', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Jahon Tarixi", ru: "Всемирная История", en: "World History Challenge" }, desc: { uz: "Buyuk kashfiyotlar va tarixiy sanalar", ru: "Великие открытия и исторические даты", en: "Great discoveries and historical dates" } },
    { id: 50, cat: 'science', type: 'sci_geo', icon: '🌍', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Geografiya va Poytaxtlar", ru: "География и Столицы", en: "Geography & Capitals" }, desc: { uz: "Davlatlar, qit'alar va okeanlar", ru: "Страны, континенты и океаны", en: "Countries, continents, and oceans" } },
    { id: 51, cat: 'science', type: 'sci_astro', icon: '🪐', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Astronomiya va Koinot", ru: "Астрономия и Космос", en: "Astronomy & Space" }, desc: { uz: "Quyosh tizimi sayyoralari va yulduzlar", ru: "Планеты Солнечной системы и звезды", en: "Solar system planets and stars" } },
    { id: 52, cat: 'science', type: 'sci_cs', icon: '💻', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Informatika va Kodlash", ru: "Информатика и Кодинг", en: "Computer Science & Code" }, desc: { uz: "Algoritmlar, ikkilik sanoq va dasturlash", ru: "Алгоритмы, двоичный код и программирование", en: "Algorithms, binary code, and programming" } },
    { id: 53, cat: 'science', type: 'sci_lit', icon: '📖', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Jahon Adabiyoti", ru: "Мировая Литература", en: "World Literature" }, desc: { uz: "Mashhur asarlar va ularning mualliflari", ru: "Знаменитые произведения и их авторы", en: "Famous books and their authors" } },
    { id: 54, cat: 'science', type: 'sci_eco', icon: '🌱', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Ekologiya va Tabiat", ru: "Экология и Природа", en: "Ecology & Nature" }, desc: { uz: "Atrof-muhitni asrash va yashil energiya", ru: "Защита окружающей среды и зеленая энергия", en: "Environmental protection and green energy" } },
    { id: 55, cat: 'science', type: 'sci_nature', icon: '🦋', ages: ['5-7', '8-10'], diff: 'easy', name: { uz: "Tabiatshunoslik", ru: "Природоведение", en: "Nature Explorer" }, desc: { uz: "Fasllar, ob-havo va hayvonot olami", ru: "Времена года, погода и животный мир", en: "Seasons, weather, and wildlife" } },
    { id: 56, cat: 'science', type: 'sci_elec', icon: '🔌', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Elektronika Asoslari", ru: "Основы Электроники", en: "Electronics & Circuits" }, desc: { uz: "Rezistor, kondensator va Om qonuni", ru: "Резистор, конденсатор и закон Ома", en: "Resistors, capacitors, and Ohm's law" } },
    { id: 57, cat: 'science', type: 'sci_robo', icon: '🦾', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Robototexnika", ru: "Робототехника", en: "Robotics & AI" }, desc: { uz: "Sensorlar, mikrokontrollerlar va sun'iy intellekt", ru: "Сенсоры, микроконтроллеры и ИИ", en: "Sensors, microcontrollers, and AI" } },
    { id: 58, cat: 'science', type: 'sci_gen', icon: '💡', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Umumiy Bilimlar", ru: "Общая Эрудиция", en: "General Knowledge" }, desc: { uz: "Turli sohalardan qiziqarli faktlar", ru: "Интересные факты из разных областей", en: "Fascinating facts across all fields" } },
    { id: 59, cat: 'science', type: 'sci_cs', icon: '0️⃣', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Binary Sanoq Tizimi", ru: "Двоичная Система", en: "Binary Number Master" }, desc: { uz: "0 va 1 larni o'nlik sonlarga o'giring", ru: "Переводите 0 и 1 в десятичные числа", en: "Convert binary 0s and 1s to decimal" } },
    { id: 60, cat: 'science', type: 'sci_geo', icon: '🚩', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Davlat Bayroqlari", ru: "Флаги Мира", en: "World Flags Quiz" }, desc: { uz: "Bayroq orqali davlatni toping", ru: "Угадайте страну по флагу", en: "Identify the country by its flag" } },

    // E. VISION & REACTION (15)
    { id: 61, cat: 'vision', type: 'vis_track', icon: '🛸', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Moving Object Tracking", ru: "Слежение за Объектом", en: "Moving Object Tracking" }, desc: { uz: "Harakatlanuvchi nishonni ko'z bilan kuzating", ru: "Следите глазами за движущейся целью", en: "Track moving targets smoothly" } },
    { id: 62, cat: 'vision', type: 'vis_color', icon: '🎨', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Color Recognition", ru: "Распознавание Цветов", en: "Color Shade Finder" }, desc: { uz: "Boshqalaridan farq qiluvchi rangni toping", ru: "Найдите квадрат с отличающимся оттенком", en: "Spot the slightly different color shade" } },
    { id: 63, cat: 'vision', type: 'vis_diff', icon: '🔍', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Find the Difference", ru: "Найди Отличие", en: "Odd Emoji Out" }, desc: { uz: "O'xshash belgilar orasidan farqlisini toping", ru: "Найдите отличающийся символ среди похожих", en: "Find the different symbol in the grid" } },
    { id: 64, cat: 'vision', type: 'vis_react', icon: '⚡', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Fast Reaction Test", ru: "Тест Быстрой Реакции", en: "Lightning Reflex Test" }, desc: { uz: "Yashil rang yonganda millisekundda bosing", ru: "Нажмите за миллисекунды при зеленом сигнале", en: "Click in milliseconds when screen turns green" } },
    { id: 65, cat: 'vision', type: 'vis_mem', icon: '👁️', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Visual Matrix Memory", ru: "Визуальная Матрица", en: "Visual Matrix Memory" }, desc: { uz: "Yongan katakchalarni eslab qoling", ru: "Запомните подсвеченные клетки матрицы", en: "Memorize the highlighted grid tiles" } },
    { id: 66, cat: 'vision', type: 'vis_diff', icon: '🕵️', ages: ['5-7', '8-10', '11-13'], diff: 'easy', name: { uz: "Hidden Object Finder", ru: "Поиск Скрытых Предметов", en: "Hidden Object Finder" }, desc: { uz: "Ko'p belgilar ichidan so'ralganini toping", ru: "Найдите нужный предмет среди множества", en: "Find the requested icon in the crowd" } },
    { id: 67, cat: 'vision', type: 'vis_shape', icon: '🔺', ages: ['5-7', '8-10'], diff: 'easy', name: { uz: "Shape Recognition", ru: "Распознавание Фигур", en: "Shape Recognition" }, desc: { uz: "Geometrik shakllarni tez ajrating", ru: "Быстро различайте геометрические фигуры", en: "Identify geometric shapes rapidly" } },
    { id: 68, cat: 'vision', type: 'vis_schulte', icon: '🔢', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Schulte Table (Number Tracking)", ru: "Таблица Шульте", en: "Schulte Number Table" }, desc: { uz: "1 dan 16 gacha sonlarni tartib bilan bosing", ru: "Нажимайте числа от 1 до 16 по порядку", en: "Click numbers 1 to 16 in ascending order" } },
    { id: 69, cat: 'vision', type: 'vis_color', icon: '🌈', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Stroop Color Effect", ru: "Эффект Струпа", en: "Stroop Color Challenge" }, desc: { uz: "So'z ma'nosiga emas, uning rangiga qarang", ru: "Смотрите на цвет текста, а не на слово", en: "Match the ink color, ignore the word text" } },
    { id: 70, cat: 'vision', type: 'vis_track', icon: '🎯', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Peripheral Focus", ru: "Периферийный Фокус", en: "Peripheral Focus Trainer" }, desc: { uz: "Markazdan chalg'imasdan chetdagi nishonni tuting", ru: "Ловите цели по краям, глядя в центр", en: "Catch peripheral targets while focusing" } },
    { id: 71, cat: 'vision', type: 'vis_react', icon: '🚦', ages: ['5-7', '8-10'], diff: 'easy', name: { uz: "Svetofor Reaksiyasi", ru: "Реакция Светофора", en: "Traffic Light Reflex" }, desc: { uz: "Bolalar uchun rangli reaksiya o'yini", ru: "Цветная игра на реакцию для детей", en: "Colorful traffic light reaction game" } },
    { id: 72, cat: 'vision', type: 'vis_mem', icon: '✨', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Flash Pattern Detection", ru: "Детектор Паттернов", en: "Flash Pattern Detection" }, desc: { uz: "Qisqa soniyada ko'ringan naqshni tiklang", ru: "Восстановите узор, показанный на секунду", en: "Recreate the briefly flashed pattern" } },
    { id: 73, cat: 'vision', type: 'vis_schulte', icon: '⏱️', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Tez O'qish Trenajyori", ru: "Тренажер Скорочтения", en: "Speed Reading Grid" }, desc: { uz: "Ko'z harakati tezligini oshiruvchi jadval", ru: "Таблица для ускорения движения глаз", en: "Expand visual span for speed reading" } },
    { id: 74, cat: 'vision', type: 'vis_diff', icon: '💎', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Olmos Qidiruvchi", ru: "Искатель Алмазов", en: "Diamond Spotter" }, desc: { uz: "Toshlar orasidan yagona olmosni toping", ru: "Найдите единственный алмаз среди камней", en: "Spot the single diamond among rocks" } },
    { id: 75, cat: 'vision', type: 'vis_color', icon: '🌗', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Kontrast Sezgirligi", ru: "Контрастная Чувствительность", en: "Contrast Sensitivity" }, desc: { uz: "Eng nozik rang farqlarini ajratish", ru: "Различение тончайших оттенков цвета", en: "Distinguish ultra-subtle color contrasts" } },

    // F. HAND MOTOR SKILLS & COORDINATION (15)
    { id: 76, cat: 'motor', type: 'mot_target', icon: '🎯', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Target Practice Aim", ru: "Тренировка Точности", en: "Pro Aim Target Trainer" }, desc: { uz: "Paydo bo'lgan nishonlarga aniq bosing", ru: "Точно кликайте по появляющимся мишеням", en: "Click spawning targets with high accuracy" } },
    { id: 77, cat: 'motor', type: 'mot_speed', icon: '🖱️', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Speed Click CPS Test", ru: "Тест Скорости Кликов", en: "Speed Click CPS Test" }, desc: { uz: "10 soniyada maksimal bosish tezligi", ru: "Максимальная скорость кликов за 10 секунд", en: "Maximum clicks per second in 10s" } },
    { id: 78, cat: 'motor', type: 'mot_catch', icon: '🧺', ages: ['5-7', '8-10', '11-13'], diff: 'easy', name: { uz: "Hand-Eye Catcher", ru: "Ловец Звезд", en: "Star Catcher Coordination" }, desc: { uz: "Tushayotgan yulduzlarni savatcha bilan tuting", ru: "Ловите падающие звезды корзинкой", en: "Catch falling stars with the basket" } },
    { id: 79, cat: 'motor', type: 'mot_maze', icon: '🌀', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Maze Runner", ru: "Бегущий в Лабиринте", en: "Cyber Maze Runner" }, desc: { uz: "Klaviatura yoki tugmalar bilan labirintdan chiqing", ru: "Выйдите из лабиринта с помощью клавиш", en: "Navigate through the maze to the exit" } },
    { id: 80, cat: 'motor', type: 'mot_prec', icon: '🔬', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Mouse Precision Micro", ru: "Микро-Точность Мыши", en: "Micro Precision Dots" }, desc: { uz: "Kichik nuqtalarga xatosiz teging", ru: "Попадайте по маленьким точкам без промаха", en: "Hit tiny precision dots without missing" } },
    { id: 81, cat: 'motor', type: 'mot_draw', icon: '✏️', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Freehand Drawing Pad", ru: "Свободное Рисование", en: "Creative Sketch Pad" }, desc: { uz: "Qo'l motorikasi uchun erkin rasm chizish", ru: "Свободное рисование для моторики рук", en: "Freehand drawing for motor control" } },
    { id: 82, cat: 'motor', type: 'mot_whack', icon: '🐹', ages: ['5-7', '8-10', '11-13'], diff: 'easy', name: { uz: "Reaction Whack", ru: "Поймай Крота", en: "Quick Whack Reflex" }, desc: { uz: "Chiqib kelgan qahramonga tez bosing", ru: "Быстро нажимайте на появляющегося героя", en: "Tap popping characters rapidly" } },
    { id: 83, cat: 'motor', type: 'mot_type', icon: '⌨️', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Tez Yozish (Typing)", ru: "Слепая Печать", en: "Speed Typing Sprint" }, desc: { uz: "Klaviaturada so'zlarni tez va bexato tering", ru: "Быстро печатайте слова на клавиатуре", en: "Type words fast and accurately" } },
    { id: 84, cat: 'motor', type: 'mot_target', icon: '🎈', ages: ['5-7', '8-10'], diff: 'easy', name: { uz: "Shar Yorish O'yini", ru: "Лопай Шарики", en: "Balloon Pop Motor" }, desc: { uz: "Kichkintoylar uchun barmoq motorikasi", ru: "Моторика пальцев для малышей", en: "Finger coordination balloon pop for kids" } },
    { id: 85, cat: 'motor', type: 'mot_catch', icon: '⚽', ages: ['8-10', '11-13', '14-18'], diff: 'medium', name: { uz: "Darvozabon Reaksiyasi", ru: "Реакция Вратаря", en: "Goalkeeper Reflex" }, desc: { uz: "To'plarni darvozaga kiritmasdan tutib oling", ru: "Ловите мячи, не давая им попасть в ворота", en: "Block incoming balls as goalkeeper" } },
    { id: 86, cat: 'motor', type: 'mot_prec', icon: '🩺', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Jarroh Qo'li (Steady Hand)", ru: "Твердая Рука", en: "Steady Hand Precision" }, desc: { uz: "Kichik nishonlarni ketma-ket tozalang", ru: "Последовательно очищайте мелкие цели", en: "Clear micro targets with steady control" } },
    { id: 87, cat: 'motor', type: 'mot_maze', icon: '🚀', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Kosmik Labirint", ru: "Космический Лабиринт", en: "Space Station Maze" }, desc: { uz: "Murakkab yo'laklardan chiqish yo'lini toping", ru: "Найдите выход из сложного лабиринта", en: "Escape the complex space maze" } },
    { id: 88, cat: 'motor', type: 'mot_speed', icon: '🥁', ages: ['5-7', '8-10', '11-13'], diff: 'easy', name: { uz: "Ritm va Tezlik", ru: "Ритм и Скорость", en: "Rhythm Tap Challenge" }, desc: { uz: "Barmoqlar tezligini sinovdan o'tkazing", ru: "Проверьте скорость ваших пальцев", en: "Test your finger tapping speed" } },
    { id: 89, cat: 'motor', type: 'mot_whack', icon: '👾', ages: ['8-10', '11-13', '14-18'], diff: 'medium', name: { uz: "Virus Buster", ru: "Охотник на Вирусы", en: "Cyber Virus Buster" }, desc: { uz: "Ekrandagi raqamli viruslarni yo'q qiling", ru: "Уничтожайте цифровые вирусы на экране", en: "Eliminate digital viruses on screen" } },
    { id: 90, cat: 'motor', type: 'mot_type', icon: '💻', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Kod Yozish Tezligi", ru: "Скорость Кодинга", en: "Code Syntax Typer" }, desc: { uz: "Dasturlash kalit so'zlarini tez tering", ru: "Быстро печатайте ключевые слова кода", en: "Type programming keywords at high speed" } },

    // G. BRAIN & MEMORY (15)
    { id: 91, cat: 'brain', type: 'br_cards', icon: '🃏', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'easy', name: { uz: "Memory Cards", ru: "Карточки Памяти", en: "Memory Pair Cards" }, desc: { uz: "Bir xil juftliklarni eslab toping", ru: "Запоминайте и открывайте одинаковые пары", en: "Flip and match identical pairs" } },
    { id: 92, cat: 'brain', type: 'br_num', icon: '🔢', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Number Memory", ru: "Память на Числа", en: "Digit Span Memory" }, desc: { uz: "Ko'rsatilgan uzun sonni eslab yozing", ru: "Запомните и введите показанное число", en: "Memorize and type the flashed number" } },
    { id: 93, cat: 'brain', type: 'br_simon', icon: '🎛️', ages: ['5-7', '8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Sequence Simon Memory", ru: "Последовательность Саймон", en: "Simon Sequence Memory" }, desc: { uz: "Ranglar ketma-ketligini xatosiz takrorlang", ru: "Повторите последовательность цветов", en: "Repeat the flashing color sequence" } },
    { id: 94, cat: 'brain', type: 'br_iq', icon: '🧠', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "IQ Test Challenge", ru: "IQ Тест Челлендж", en: "Logical IQ Test" }, desc: { uz: "Mantiqiy fikrlash koeffitsientini sinang", ru: "Проверьте коэффициент логического мышления", en: "Test your logical reasoning quotient" } },
    { id: 95, cat: 'brain', type: 'br_riddle', icon: '❓', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Topishmoqlar (Riddles)", ru: "Загадки на Логику", en: "Brain Teaser Riddles" }, desc: { uz: "Aql charxlovchi qiziqarli topishmoqlar", ru: "Интересные загадки для тренировки ума", en: "Clever riddles to sharpen your mind" } },
    { id: 96, cat: 'brain', type: 'br_sudoku', icon: '🔲', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Mini Sudoku 4x4", ru: "Мини Судоку 4x4", en: "Speed Mini Sudoku" }, desc: { uz: "Har bir qator va ustunda 1-4 raqamlarini joylang", ru: "Расставьте цифры 1-4 в каждой строке и столбце", en: "Place 1-4 in every row and column" } },
    { id: 97, cat: 'brain', type: 'br_chess', icon: '♟️', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Shaxmat Mantiqi", ru: "Шахматные Задачи", en: "Chess Tactics Quiz" }, desc: { uz: "Shaxmat donalari yurishi va taktikasi", ru: "Ходы шахматных фигур и тактика", en: "Chess piece moves and tactical puzzles" } },
    { id: 98, cat: 'brain', type: 'br_word', icon: '📝', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Word Memory", ru: "Словесная Память", en: "Word Recall Memory" }, desc: { uz: "Ko'rsatilgan so'zlarni eslab qoling", ru: "Запомните показанные слова", en: "Remember which words were shown before" } },
    { id: 99, cat: 'brain', type: 'br_logic', icon: '⚙️', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Mantiqiy Xulosa", ru: "Логические Выводы", en: "Deductive Logic" }, desc: { uz: "Syllogism va mantiqiy masalalar", ru: "Силлогизмы и логические задачи", en: "Syllogisms and deductive logic puzzles" } },
    { id: 100, cat: 'brain', type: 'br_hanoi', icon: '🗼', ages: ['11-13', '14-18', '19+'], diff: 'hard', name: { uz: "Xanoy Minorasi", ru: "Ханойская Башня", en: "Tower of Hanoi" }, desc: { uz: "Halqalarni qoidaga ko'ra boshqa ustunga o'tkazing", ru: "Переместите кольца на другой стержень по правилам", en: "Move disks to the target rod following rules" } },
    { id: 101, cat: 'brain', type: 'br_cards', icon: '🐾', ages: ['5-7', '8-10'], diff: 'easy', name: { uz: "Hayvonlar Xotirasi", ru: "Память Животных", en: "Animal Memory Match" }, desc: { uz: "Bolalar uchun yoqimli hayvonlar kartochkasi", ru: "Карточки с милыми животными для детей", en: "Cute animal memory cards for kids" } },
    { id: 102, cat: 'brain', type: 'br_iq', icon: '🧩', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "Spatial Reasoning", ru: "Пространственное Мышление", en: "Spatial Reasoning 3D" }, desc: { uz: "Fazoviy tasavvur va shakllar mantiqi", ru: "Пространственное воображение и логика", en: "3D mental rotation and spatial logic" } },
    { id: 103, cat: 'brain', type: 'br_num', icon: '🔐', ages: ['14-18', '19+'], diff: 'hard', name: { uz: "PIN Kod Xotirasi", ru: "Память PIN-кода", en: "Bank Vault PIN Memory" }, desc: { uz: "Xavfsizlik kodlarini eslab qolish mashqi", ru: "Тренировка запоминания кодов безопасности", en: "Memorize security vault PIN codes" } },
    { id: 104, cat: 'brain', type: 'br_riddle', icon: '🕵️‍♂️', ages: ['11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Detektiv Mantiqi", ru: "Логика Детектива", en: "Detective Problem Solving" }, desc: { uz: "Dalillar asosida yagona to'g'ri yechimni toping", ru: "Найдите верное решение на основе улик", en: "Solve mysteries using logical clues" } },
    { id: 105, cat: 'brain', type: 'br_simon', icon: '🎹', ages: ['8-10', '11-13', '14-18', '19+'], diff: 'medium', name: { uz: "Musiqiy Xotira", ru: "Музыкальная Память", en: "Musical Note Memory" }, desc: { uz: "Ohang va ranglar ketma-ketligini eslab qoling", ru: "Запомните последовательность нот и цветов", en: "Memorize musical tones and color sequence" } }
];

// 4. ACHIEVEMENTS LIST
const ACHIEVEMENTS = [
    { id: 'first_win', icon: '🌟', title: { uz: "Birinchi Qadam", ru: "Первый Шаг", en: "First Step" }, desc: { uz: "1 ta o'yinni yakunlang", ru: "Завершите 1 игру", en: "Complete 1 game" }, check: (u) => u.played >= 1 },
    { id: 'five_games', icon: '🔥', title: { uz: "Faol O'yinchi", ru: "Активный Игрок", en: "Active Player" }, desc: { uz: "5 ta o'yin o'ynang", ru: "Сыграйте 5 игр", en: "Play 5 games" }, check: (u) => u.played >= 5 },
    { id: 'xp_500', icon: '⚡', title: { uz: "500 XP Ustasi", ru: "Мастер 500 XP", en: "500 XP Master" }, desc: { uz: "500 XP to'plang", ru: "Наберите 500 XP", en: "Earn 500 XP" }, check: (u) => u.xp >= 500 },
    { id: 'lvl_3', icon: '👑', title: { uz: "Intellektual Lider", ru: "Интеллект Лидер", en: "Brain Leader" }, desc: { uz: "3-darajaga yeting", ru: "Достигните 3 уровня", en: "Reach Level 3" }, check: (u) => u.level >= 3 },
    { id: 'fav_3', icon: '❤️', title: { uz: "Kolleksioner", ru: "Коллекционер", en: "Collector" }, desc: { uz: "3 ta sevimli o'yin tanlang", ru: "Добавьте 3 игры в избранное", en: "Favorite 3 games" }, check: (u) => u.favorites.length >= 3 },
    { id: 'score_1000', icon: '💎', title: { uz: "Minglik Marrasi", ru: "Рубеж 1000", en: "1000 Score Club" }, desc: { uz: "1000 ball to'plang", ru: "Наберите 1000 очков", en: "Reach 1000 total score" }, check: (u) => u.score >= 1000 },
    { id: 'explorer', icon: '🧭', title: { uz: "Kashfiyotchi", ru: "Исследователь", en: "Explorer" }, desc: { uz: "10 ta o'yin o'ynang", ru: "Сыграйте 10 игр", en: "Play 10 games" }, check: (u) => u.played >= 10 },
    { id: 'genius', icon: '🧠', title: { uz: "Super Daho", ru: "Супер Гений", en: "Super Genius" }, desc: { uz: "2000 XP to'plang", ru: "Наберите 2000 XP", en: "Earn 2000 XP" }, check: (u) => u.xp >= 2000 }
];

// 5. MAIN APPLICATION CONTROLLER
class SmartBrainApp {
    constructor() {
        this.lang = localStorage.getItem('sbg_lang') || 'uz';
        this.theme = localStorage.getItem('sbg_theme') || 'dark';
        this.filters = {
            age: 'all',
            cat: 'all',
            diff: 'all',
            search: '',
            favOnly: false
        };
        this.user = this.loadUser();
        this.activeGame = null;
        this.gameTimer = null;
        this.init();
    }

    loadUser() {
        const saved = localStorage.getItem('sbg_user');
        if (saved) return JSON.parse(saved);
        return {
            name: 'BrainMaster',
            avatar: '🚀',
            ageGroup: '14-18',
            xp: 0,
            level: 1,
            score: 0,
            played: 0,
            streak: 1,
            favorites: [1, 16, 64, 91],
            history: []
        };
    }

    saveUser() {
        localStorage.setItem('sbg_user', JSON.stringify(this.user));
        this.updateUserUI();
    }

    init() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.applyLanguage(this.lang);
        this.bindEvents();
        this.updateUserUI();
        this.renderGames();
        this.initCalculators();
        this.renderLeaderboard();
    }

    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                sfx.click();
                this.navigate(btn.dataset.view);
            });
        });

        // Language switcher
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                sfx.click();
                this.applyLanguage(btn.dataset.lang);
            });
        });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', this.theme);
            localStorage.setItem('sbg_theme', this.theme);
            document.getElementById('theme-toggle').textContent = this.theme === 'dark' ? '☀️' : '🌙';
            sfx.click();
        });

        // Sound & Music toggles
        document.getElementById('sound-toggle').addEventListener('click', (e) => {
            sfx.soundEnabled = !sfx.soundEnabled;
            e.target.textContent = sfx.soundEnabled ? '🔊' : '🔇';
            if (sfx.soundEnabled) sfx.click();
        });

        document.getElementById('music-toggle').addEventListener('click', (e) => {
            const on = sfx.toggleMusic();
            e.target.style.background = on ? 'var(--accent-purple)' : '';
            this.toast(on ? '🎵 Music ON' : '🎵 Music OFF');
        });

        // Age cards
        document.querySelectorAll('.age-card').forEach(card => {
            card.addEventListener('click', () => {
                sfx.click();
                document.querySelectorAll('.age-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.filters.age = card.dataset.age;
                if (this.filters.age === '5-7' || this.filters.age === '8-10') {
                    document.body.classList.add('kids-mode');
                } else {
                    document.body.classList.remove('kids-mode');
                }
                this.renderGames();
            });
        });

        // Category tabs
        document.querySelectorAll('.cat-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                sfx.click();
                document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.filters.cat = tab.dataset.cat;
                this.renderGames();
            });
        });

        // Search & Difficulty & Favorites
        document.getElementById('global-search').addEventListener('input', (e) => {
            this.filters.search = e.target.value.toLowerCase();
            this.renderGames();
        });

        document.getElementById('difficulty-filter').addEventListener('change', (e) => {
            this.filters.diff = e.target.value;
            this.renderGames();
        });

        document.getElementById('fav-filter-btn').addEventListener('click', (e) => {
            sfx.click();
            this.filters.favOnly = !this.filters.favOnly;
            e.currentTarget.classList.toggle('active', this.filters.favOnly);
            this.renderGames();
        });

        // Avatar selection in profile
        document.querySelectorAll('.av-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.av-opt').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    navigate(viewName) {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === viewName));
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        if (viewName === 'games') {
            document.getElementById('view-home').classList.add('active');
            this.scrollToGames();
        } else {
            document.getElementById(`view-${viewName}`).classList.add('active');
        }
        if (viewName === 'leaderboard') this.renderLeaderboard();
    }

    scrollToGames() {
        document.getElementById('games-section').scrollIntoView({ behavior: 'smooth' });
    }

    applyLanguage(lang) {
        this.lang = lang;
        localStorage.setItem('sbg_lang', lang);
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        const dict = I18N[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.placeholder = dict[key];
        });

        this.renderGames();
        this.renderLeaderboard();
        if (document.getElementById('calc-menu').children.length) {
            this.initCalculators();
        }
    }

    updateUserUI() {
        this.user.level = Math.floor(this.user.xp / 500) + 1;
        const currentLvlXp = this.user.xp % 500;
        const unlockedCount = ACHIEVEMENTS.filter(a => a.check(this.user)).length;

        document.getElementById('header-avatar').textContent = this.user.avatar;
        document.getElementById('header-username').textContent = this.user.name;
        document.getElementById('header-level').textContent = this.user.level;
        document.getElementById('header-xp').textContent = this.user.xp;

        document.getElementById('stat-played').textContent = this.user.played;
        document.getElementById('stat-score').textContent = this.user.score;
        document.getElementById('stat-streak').textContent = `${this.user.streak} 🔥`;
        document.getElementById('stat-achievements').textContent = `${unlockedCount}/${ACHIEVEMENTS.length}`;

        document.getElementById('xp-progress-text').textContent = `${currentLvlXp} / 500 XP`;
        document.getElementById('xp-progress-fill').style.width = `${(currentLvlXp / 500) * 100}%`;
    }

    renderGames() {
        const grid = document.getElementById('games-grid');
        const dict = I18N[this.lang];

        const filtered = GAME_DEFINITIONS.filter(g => {
            if (this.filters.age !== 'all' && !g.ages.includes(this.filters.age)) return false;
            if (this.filters.cat !== 'all' && g.cat !== this.filters.cat) return false;
            if (this.filters.diff !== 'all' && g.diff !== this.filters.diff) return false;
            if (this.filters.favOnly && !this.user.favorites.includes(g.id)) return false;
            if (this.filters.search) {
                const title = g.name[this.lang].toLowerCase();
                const desc = g.desc[this.lang].toLowerCase();
                if (!title.includes(this.filters.search) && !desc.includes(this.filters.search)) return false;
            }
            return true;
        });

        document.getElementById('games-count-label').textContent = dict.showing_count.replace('{n}', filtered.length);

        grid.innerHTML = filtered.map(g => {
            const isFav = this.user.favorites.includes(g.id);
            return `
                <div class="game-card">
                    <div>
                        <div class="card-top">
                            <div class="game-icon">${g.icon}</div>
                            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="app.toggleFavorite(${g.id})">
                                ${isFav ? '❤️' : '🤍'}
                            </button>
                        </div>
                        <h3>#${g.id}. ${g.name[this.lang]}</h3>
                        <p>${g.desc[this.lang]}</p>
                    </div>
                    <div>
                        <div class="card-tags">
                            <span class="tag">${g.cat.toUpperCase()}</span>
                            <span class="tag">${g.diff.toUpperCase()}</span>
                            <span class="tag">${g.ages[0]}..</span>
                        </div>
                        <button class="play-btn" onclick="app.openGame(${g.id})">${dict.play_now}</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    toggleFavorite(id) {
        sfx.click();
        const idx = this.user.favorites.indexOf(id);
        if (idx > -1) this.user.favorites.splice(idx, 1);
        else this.user.favorites.push(id);
        this.saveUser();
        this.renderGames();
    }

    startRandomGame() {
        const rand = GAME_DEFINITIONS[Math.floor(Math.random() * GAME_DEFINITIONS.length)];
        this.openGame(rand.id);
    }

    startDailyChallenge() {
        const dayIndex = new Date().getDate() % GAME_DEFINITIONS.length;
        this.toast('🔥 Daily Challenge (+2x XP)!');
        this.openGame(GAME_DEFINITIONS[dayIndex].id, true);
    }

    toast(msg) {
        const box = document.getElementById('toast-container');
        const el = document.createElement('div');
        el.className = 'toast';
        el.textContent = msg;
        box.appendChild(el);
        setTimeout(() => el.remove(), 3200);
    }

    // PROFILE MODAL
    openProfileModal() {
        sfx.click();
        document.getElementById('prof-name-input').value = this.user.name;
        document.getElementById('prof-age-input').value = this.user.ageGroup;
        document.querySelectorAll('.av-opt').forEach(b => {
            b.classList.toggle('active', b.dataset.av === this.user.avatar);
        });
        const histEl = document.getElementById('game-history-list');
        histEl.innerHTML = this.user.history.length
            ? this.user.history.slice(0, 10).map(h => `
                <div class="history-item">
                    <span>${h.icon} ${h.title}</span>
                    <strong>+${h.score} pts</strong>
                </div>`).join('')
            : `<small style="color:var(--text-muted)">Hali o'yinlar o'ynalmagan</small>`;
        document.getElementById('profile-modal').classList.add('open');
    }

    closeProfileModal() {
        document.getElementById('profile-modal').classList.remove('open');
    }

    saveProfile() {
        sfx.correct();
        const name = document.getElementById('prof-name-input').value.trim();
        if (name) this.user.name = name;
        this.user.ageGroup = document.getElementById('prof-age-input').value;
        const activeAv = document.querySelector('.av-opt.active');
        if (activeAv) this.user.avatar = activeAv.dataset.av;
        this.saveUser();
        this.closeProfileModal();
        this.toast('✅ Profil saqlandi!');
    }

    renderLeaderboard() {
        const tbody = document.getElementById('leaderboard-body');
        const bots = [
            { name: 'Amirbek_UZ', avatar: '👑', level: 8, xp: 3850 },
            { name: 'Sophia_AI', avatar: '🧠', level: 6, xp: 2900 },
            { name: 'AlexTrader', avatar: '📈', level: 5, xp: 2150 },
            { name: 'Madina_Pro', avatar: '🦄', level: 4, xp: 1620 },
            { name: this.user.name + ' (You)', avatar: this.user.avatar, level: this.user.level, xp: this.user.xp }
        ].sort((a, b) => b.xp - a.xp);

        tbody.innerHTML = bots.map((p, i) => `
            <tr>
                <td><strong>#${i + 1}</strong></td>
                <td>${p.avatar} ${p.name}</td>
                <td>LVL ${p.level}</td>
                <td><strong style="color:var(--accent-cyan)">${p.xp} XP</strong></td>
            </tr>
        `).join('');

        const achList = document.getElementById('achievements-list');
        achList.innerHTML = ACHIEVEMENTS.map(a => {
            const ok = a.check(this.user);
            return `
                <div class="ach-item ${ok ? 'unlocked' : ''}">
                    <div style="font-size:1.5rem">${a.icon}</div>
                    <strong>${a.title[this.lang]}</strong>
                    <div style="font-size:0.78rem;color:var(--text-muted)">${a.desc[this.lang]}</div>
                </div>
            `;
        }).join('');
    }

    // =========================================================================
    // UNIVERSAL GAME ARENA & 105 REAL WORKING GAME MECHANICS
    // =========================================================================
    openGame(gameId, isDaily = false) {
        sfx.click();
        const game = GAME_DEFINITIONS.find(g => g.id === gameId);
        if (!game) return;

        clearInterval(this.gameTimer);
        this.activeGame = {
            def: game,
            isDaily,
            score: 0,
            lives: 3,
            timeLeft: 45,
            level: 1
        };

        const dict = I18N[this.lang];
        document.getElementById('arena-icon').textContent = game.icon;
        document.getElementById('arena-title').textContent = game.name[this.lang];
        document.getElementById('arena-badge').textContent = `${game.cat.toUpperCase()} • ${game.diff.toUpperCase()}`;
        document.getElementById('hud-score').textContent = '0';
        document.getElementById('hud-lives').textContent = '3';
        document.getElementById('hud-timer').textContent = '45';

        const footer = document.getElementById('arena-footer');
        if (game.cat === 'trading') footer.textContent = dict.trading_warn;
        else if (game.cat === 'vision') footer.textContent = dict.vision_warn;
        else footer.textContent = dict.safety_disclaimer;

        const body = document.getElementById('arena-body');
        body.innerHTML = `
            <div style="max-width:520px">
                <div style="font-size:4rem;margin-bottom:10px">${game.icon}</div>
                <h2>${game.name[this.lang]}</h2>
                <p style="color:var(--text-muted);margin:12px 0 20px">${dict.rules_label} ${game.desc[this.lang]}</p>
                <button class="btn btn-primary btn-lg" onclick="app.startGameLoop()">${dict.start_game}</button>
            </div>
        `;

        document.getElementById('game-modal').classList.add('open');
    }

    closeGame() {
        clearInterval(this.gameTimer);
        document.getElementById('game-modal').classList.remove('open');
        this.activeGame = null;
    }

    toggleFullscreen() {
        const el = document.getElementById('game-arena-box');
        if (!document.fullscreenElement) el.requestFullscreen().catch(() => {});
        else document.exitFullscreen();
    }

    startGameLoop() {
        sfx.click();
        this.activeGame.score = 0;
        this.activeGame.lives = 3;
        this.activeGame.timeLeft = 45;
        this.updateHUD();

        clearInterval(this.gameTimer);
        this.gameTimer = setInterval(() => {
            if (!this.activeGame) return clearInterval(this.gameTimer);
            this.activeGame.timeLeft--;
            this.updateHUD();
            if (this.activeGame.timeLeft <= 0) {
                this.finishGame();
            }
        }, 1000);

        this.dispatchGameMechanic();
    }

    updateHUD() {
        if (!this.activeGame) return;
        document.getElementById('hud-timer').textContent = this.activeGame.timeLeft;
        document.getElementById('hud-score').textContent = this.activeGame.score;
        document.getElementById('hud-lives').textContent = this.activeGame.lives;
    }

    addScore(pts) {
        sfx.correct();
        this.activeGame.score += pts;
        this.updateHUD();
    }

    loseLife() {
        sfx.wrong();
        this.activeGame.lives--;
        this.updateHUD();
        if (this.activeGame.lives <= 0) {
            this.finishGame();
        }
    }

    finishGame() {
        clearInterval(this.gameTimer);
        if (!this.activeGame) return;
        sfx.win();

        const g = this.activeGame;
        const mult = g.isDaily ? 2 : 1;
        const earnedXp = Math.max(25, g.score * mult);

        this.user.played++;
        this.user.score += g.score;
        this.user.xp += earnedXp;
        this.user.history.unshift({
            icon: g.def.icon,
            title: g.def.name[this.lang],
            score: g.score
        });
        this.saveUser();

        const dict = I18N[this.lang];
        document.getElementById('arena-body').innerHTML = `
            <div>
                <div style="font-size:4rem">🏆</div>
                <h2>${dict.game_over}</h2>
                <p style="font-size:1.3rem;margin:12px 0">Score: <strong style="color:var(--accent-cyan)">${g.score}</strong> | +<strong>${earnedXp} XP</strong></p>
                <div style="display:flex;gap:12px;justify-content:center;margin-top:20px">
                    <button class="btn btn-primary" onclick="app.startGameLoop()">${dict.restart_game}</button>
                    <button class="btn btn-secondary" onclick="app.closeGame()">✖ Close</button>
                </div>
            </div>
        `;
    }

    // DISPATCHES ALL 105 GAMES TO REAL INTERACTIVE ENGINES
    dispatchGameMechanic() {
        const type = this.activeGame.def.type;

        if (type.startsWith('math_') || type === 'fin_math') {
            this.runMathEngine(type);
        } else if (type === 'trade_sim' || type === 'trade_candle' || type === 'trade_sr') {
            this.runTradingEngine(type);
        } else if (type.startsWith('lang_')) {
            this.runLanguageEngine(type);
        } else if (type.startsWith('sci_') || type === 'fin_quiz' || type === 'br_iq' || type === 'br_riddle' || type === 'br_chess' || type === 'br_logic') {
            this.runKnowledgeQuizEngine(type);
        } else if (type === 'vis_color' || type === 'vis_diff' || type === 'vis_shape') {
            this.runVisualGridEngine(type);
        } else if (type === 'vis_react') {
            this.runReactionEngine();
        } else if (type === 'vis_schulte') {
            this.runSchulteEngine();
        } else if (type === 'vis_mem' || type === 'br_cards') {
            this.runMemoryCardsEngine();
        } else if (type === 'vis_track' || type === 'mot_target' || type === 'mot_prec' || type === 'mot_whack') {
            this.runTargetAimEngine(type);
        } else if (type === 'mot_speed') {
            this.runSpeedClickEngine();
        } else if (type === 'mot_catch') {
            this.runCatcherCanvasEngine();
        } else if (type === 'mot_maze') {
            this.runMazeEngine();
        } else if (type === 'mot_draw') {
            this.runDrawingPadEngine();
        } else if (type === 'mot_type' || type === 'br_num' || type === 'br_word') {
            this.runTypingAndMemoryInputEngine(type);
        } else if (type === 'br_simon') {
            this.runSimonEngine();
        } else if (type === 'br_sudoku') {
            this.runMiniSudokuEngine();
        } else if (type === 'br_hanoi') {
            this.runTowerOfHanoiEngine();
        } else {
            this.runMathEngine('math_add');
        }
    }

    // ENGINE 1: DYNAMIC MATHEMATICS & FINANCIAL MATH
    runMathEngine(type) {
        const body = document.getElementById('arena-body');
        const nextQ = () => {
            if (!this.activeGame) return;
            let q = '', ans = 0, opts = new Set();
            const a = Math.floor(Math.random() * 25) + 5;
            const b = Math.floor(Math.random() * 15) + 2;

            if (type === 'math_add' || type === 'math_speed') { q = `${a} + ${b} = ?`; ans = a + b; }
            else if (type === 'math_sub') { const max = Math.max(a, b) + 10, min = Math.min(a, b); q = `${max} - ${min} = ?`; ans = max - min; }
            else if (type === 'math_mul') { q = `${a} × ${b} = ?`; ans = a * b; }
            else if (type === 'math_div') { ans = b; q = `${a * b} ÷ ${a} = ?`; }
            else if (type === 'math_pct') { const base = (Math.floor(Math.random() * 9) + 1) * 100; const p = [10, 20, 25, 50][Math.floor(Math.random() * 4)]; q = `${p}% of ${base} = ?`; ans = (base * p) / 100; }
            else if (type === 'math_eq') { ans = b; q = `2x + ${a} = ${2 * b + a}  →  x = ?`; }
            else if (type === 'math_geo') { q = `Square side = ${b}. Area = ?`; ans = b * b; }
            else if (type === 'math_seq') { q = `${a}, ${a + b}, ${a + 2 * b}, ?`; ans = a + 3 * b; }
            else if (type === 'math_cmp') {
                const left = a + b, right = a + b + (Math.random() > 0.5 ? 3 : -2);
                q = `${a} + ${b}  [ ? ]  ${right}`;
                const correctSym = left > right ? '>' : '<';
                body.innerHTML = `
                    <div class="question-box">${q}</div>
                    <div class="options-grid">
                        ${['>', '<', '='].map(s => `<button class="option-btn" onclick="app.checkQuizAns('${s}', '${correctSym}', () => app.runMathEngine('${type}'))">${s}</button>`).join('')}
                    </div>`;
                return;
            } else if (type === 'fin_math') {
                const buy = a * 10, sell = buy + b * 5;
                q = `Buy: $${buy} → Sell: $${sell}. Profit = ?`;
                ans = sell - buy;
            } else {
                q = `(${a} + ${b}) × 2 = ?`; ans = (a + b) * 2;
            }

            opts.add(ans);
            while (opts.size < 4) {
                opts.add(ans + (Math.floor(Math.random() * 15) - 7) || ans + 5);
            }
            const shuffled = [...opts].sort(() => Math.random() - 0.5);

            body.innerHTML = `
                <div class="question-box">${q}</div>
                <div class="options-grid">
                    ${shuffled.map(o => `<button class="option-btn" onclick="app.checkQuizAns(${o}, ${ans}, () => app.runMathEngine('${type}'))">${o}</button>`).join('')}
                </div>
            `;
        };
        nextQ();
    }

    checkQuizAns(picked, correct, nextFn) {
        if (picked === correct) {
            this.addScore(20);
            nextFn();
        } else {
            this.loseLife();
            if (this.activeGame && this.activeGame.lives > 0) nextFn();
        }
    }

    // ENGINE 2: INTERACTIVE VIRTUAL TRADING SIMULATOR (CANVAS CHART)
    runTradingEngine() {
        const body = document.getElementById('arena-body');
        let balance = 10000;
        let shares = 0;
        let entryPrice = 0;
        let prices = [100, 102, 101, 104, 103, 106, 105, 108, 107, 110];

        body.innerHTML = `
            <div style="width:100%;max-width:620px">
                <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-weight:700">
                    <span>💵 Balance: $<span id="tr-bal">10000</span></span>
                    <span>📈 Price: $<span id="tr-price">110</span></span>
                    <span>📦 Position: <span id="tr-pos">0</span></span>
                </div>
                <canvas id="trade-canvas" class="game-canvas" width="580" height="210"></canvas>
                <div style="display:flex;gap:12px;justify-content:center;margin-top:14px">
                    <button class="btn" style="background:var(--accent-green);color:#fff" id="tr-buy">🟢 BUY (Virtual)</button>
                    <button class="btn" style="background:var(--accent-red);color:#fff" id="tr-sell">🔴 SELL (Take Profit)</button>
                </div>
            </div>
        `;

        const canvas = document.getElementById('trade-canvas');
        const ctx = canvas.getContext('2d');

        const drawChart = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#06b6d4';
            ctx.lineWidth = 3;
            ctx.beginPath();
            const min = Math.min(...prices) - 5;
            const max = Math.max(...prices) + 5;
            prices.forEach((p, idx) => {
                const x = (idx / (prices.length - 1)) * (canvas.width - 40) + 20;
                const y = canvas.height - ((p - min) / (max - min)) * (canvas.height - 40) - 20;
                if (idx === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();
        };

        const tick = setInterval(() => {
            if (!document.getElementById('trade-canvas')) return clearInterval(tick);
            const last = prices[prices.length - 1];
            const next = Math.max(50, +(last + (Math.random() - 0.48) * 6).toFixed(2));
            prices.push(next);
            if (prices.length > 25) prices.shift();
            document.getElementById('tr-price').textContent = next;
            drawChart();
        }, 900);

        document.getElementById('tr-buy').onclick = () => {
            const cur = prices[prices.length - 1];
            if (shares === 0 && balance >= cur * 10) {
                shares = 10;
                entryPrice = cur;
                balance = +(balance - cur * 10).toFixed(2);
                document.getElementById('tr-bal').textContent = balance;
                document.getElementById('tr-pos').textContent = `10 @ $${entryPrice}`;
                sfx.click();
            }
        };

        document.getElementById('tr-sell').onclick = () => {
            const cur = prices[prices.length - 1];
            if (shares > 0) {
                const pnl = +((cur - entryPrice) * shares).toFixed(2);
                balance = +(balance + cur * shares).toFixed(2);
                shares = 0;
                document.getElementById('tr-bal').textContent = balance;
                document.getElementById('tr-pos').textContent = '0';
                if (pnl >= 0) this.addScore(Math.max(25, Math.round(pnl)));
                else this.loseLife();
            }
        };

        drawChart();
    }

    // ENGINE 3: LANGUAGES (UZB / RUS / USA) + SPEECH SYNTHESIS
    runLanguageEngine(type) {
        const words = [
            { uz: "Olma", ru: "Яблоко", en: "Apple", icon: "🍎" },
            { uz: "Kitob", ru: "Книга", en: "Book", icon: "📚" },
            { uz: "Quyosh", ru: "Солнце", en: "Sun", icon: "☀️" },
            { uz: "Kosmos", ru: "Космос", en: "Space", icon: "🚀" },
            { uz: "Miya", ru: "Мозг", en: "Brain", icon: "🧠" },
            { uz: "Suv", ru: "Вода", en: "Water", icon: "💧" },
            { uz: "Vaqt", ru: "Время", en: "Time", icon: "⏳" },
            { uz: "G'alaba", ru: "Победа", en: "Victory", icon: "🏆" }
        ];
        const item = words[Math.floor(Math.random() * words.length)];
        const opts = [...words].sort(() => Math.random() - 0.5).slice(0, 4);
        if (!opts.includes(item)) opts[0] = item;
        opts.sort(() => Math.random() - 0.5);

        const body = document.getElementById('arena-body');
        body.innerHTML = `
            <div style="font-size:3rem">${item.icon}</div>
            <div class="question-box">
                ${type === 'lang_listen' ? '🔊 Listen & Choose' : `${item.en} = ?`}
                <button class="icon-btn" style="margin-left:10px" onclick="speechSynthesis.speak(new SpeechSynthesisUtterance('${item.en}'))">🔊</button>
            </div>
            <div class="options-grid">
                ${opts.map(o => `<button class="option-btn" onclick="app.checkQuizAns('${o.uz}', '${item.uz}', () => app.runLanguageEngine('${type}'))">${this.lang === 'ru' ? o.ru : o.uz}</button>`).join('')}
            </div>
        `;
        if (type === 'lang_listen' && 'speechSynthesis' in window) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(item.en));
        }
    }

    // ENGINE 4: SCIENCES, IQ, CHESS, RIDDLES, FINANCE QUIZ
    runKnowledgeQuizEngine(type) {
        const bank = [
            { q: "H₂O — bu qaysi modda? / Формула воды?", a: "Suv / Вода / Water", o: ["Suv / Вода / Water", "Kislorod / Oxygen", "Oltin / Gold", "Temir / Iron"] },
            { q: "Quyosh tizimidagi eng katta sayyora?", a: "Yupiter / Юпитер / Jupiter", o: ["Mars", "Yupiter / Юпитер / Jupiter", "Venera", "Saturn"] },
            { q: "1 Bayt necha bitga teng?", a: "8 bit", o: ["4 bit", "8 bit", "16 bit", "32 bit"] },
            { q: "Shaxmatda eng kuchli dona qaysi?", a: "Farzin / Ферзь / Queen", o: ["Ot / Knight", "Farzin / Ферзь / Queen", "Fil / Bishop", "Piyoda / Pawn"] },
            { q: "IQ: 2, 4, 8, 16, ... keyingi son?", a: "32", o: ["24", "30", "32", "64"] },
            { q: "Stop-Loss nima uchun kerak?", a: "Zararni cheklash / Limit Loss", o: ["Zararni cheklash / Limit Loss", "Kredit olish", "Soliq to'lash", "Parol tiklash"] },
            { q: "Yorug'lik tezligi taxminan qancha?", a: "300,000 km/s", o: ["300,000 km/s", "1,000 km/s", "340 m/s", "150,000 km/s"] },
            { q: "Yaponiya poytaxti qaysi shahar?", a: "Tokio / Токио / Tokyo", o: ["Seul", "Pekin", "Tokio / Токио / Tokyo", "Kioto"] }
        ];
        const item = bank[Math.floor(Math.random() * bank.length)];
        const shuffled = [...item.o].sort(() => Math.random() - 0.5);

        document.getElementById('arena-body').innerHTML = `
            <div class="question-box" style="font-size:1.35rem">${item.q}</div>
            <div class="options-grid">
                ${shuffled.map(opt => `<button class="option-btn" onclick="app.checkQuizAns(\`${opt}\`, \`${item.a}\`, () => app.runKnowledgeQuizEngine('${type}'))">${opt}</button>`).join('')}
            </div>
        `;
    }

    // ENGINE 5: VISUAL COLOR & ODD-ONE-OUT GRID
    runVisualGridEngine(type) {
        const size = 16;
        const oddIdx = Math.floor(Math.random() * size);
        const hue = Math.floor(Math.random() * 360);
        const emojis = [['🍎', '🍅'], ['😀', '😃'], ['💎', '🔷'], ['⭐', '🌟']];
        const pair = emojis[Math.floor(Math.random() * emojis.length)];

        let cells = '';
        for (let i = 0; i < size; i++) {
            const isOdd = i === oddIdx;
            if (type === 'vis_color') {
                const light = isOdd ? 58 : 48;
                cells += `<button style="width:65px;height:65px;border-radius:12px;border:none;cursor:pointer;background:hsl(${hue}, 75%, ${light}%)" onclick="app.checkQuizAns(${isOdd}, true, () => app.runVisualGridEngine('${type}'))"></button>`;
            } else {
                cells += `<button class="option-btn" style="font-size:1.8rem;padding:10px" onclick="app.checkQuizAns(${isOdd}, true, () => app.runVisualGridEngine('${type}'))">${isOdd ? pair[1] : pair[0]}</button>`;
            }
        }
        document.getElementById('arena-body').innerHTML = `
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">${cells}</div>
        `;
    }

    // ENGINE 6: LIGHTNING REACTION TEST
    runReactionEngine() {
        const body = document.getElementById('arena-body');
        body.innerHTML = `<div id="react-box" style="width:100%;max-width:480px;height:240px;border-radius:18px;background:var(--accent-red);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;cursor:pointer">WAIT FOR GREEN...</div>`;
        const box = document.getElementById('react-box');
        let startTime = 0;
        let ready = false;

        const delay = Math.random() * 2200 + 1000;
        const t = setTimeout(() => {
            if (!document.getElementById('react-box')) return;
            box.style.background = 'var(--accent-green)';
            box.textContent = 'CLICK NOW! ⚡';
            startTime = performance.now();
            ready = true;
        }, delay);

        box.onclick = () => {
            if (!ready) {
                clearTimeout(t);
                this.loseLife();
                if (this.activeGame && this.activeGame.lives > 0) this.runReactionEngine();
            } else {
                const ms = Math.round(performance.now() - startTime);
                this.addScore(Math.max(20, 100 - Math.floor(ms / 10)));
                this.toast(`⚡ ${ms} ms!`);
                this.runReactionEngine();
            }
        };
    }

    // ENGINE 7: SCHULTE NUMBER TRACKING TABLE
    runSchulteEngine() {
        let nextNum = 1;
        const nums = Array.from({ length: 16 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
        const body = document.getElementById('arena-body');
        body.innerHTML = `
            <p style="margin-bottom:10px">Next: <strong id="sch-next" style="color:var(--accent-cyan);font-size:1.3rem">1</strong></p>
            <div style="display:grid;grid-template-columns:repeat(4,68px);gap:8px">
                ${nums.map(n => `<button class="option-btn" id="sch-${n}" onclick="window._schClick(${n})">${n}</button>`).join('')}
            </div>
        `;
        window._schClick = (n) => {
            if (n === nextNum) {
                document.getElementById(`sch-${n}`).classList.add('correct');
                nextNum++;
                this.addScore(10);
                if (nextNum > 16) this.runSchulteEngine();
                else document.getElementById('sch-next').textContent = nextNum;
            } else {
                this.loseLife();
            }
        };
    }

    // ENGINE 8: MEMORY CARDS
    runMemoryCardsEngine() {
        const icons = ['🚀', '🧠', '💎', '⚡', '🦊', '🪐', '🎯', '🔥'];
        const deck = [...icons, ...icons].sort(() => Math.random() - 0.5);
        let flipped = [];
        let matched = 0;

        document.getElementById('arena-body').innerHTML = `
            <div class="memory-grid">
                ${deck.map((ic, i) => `<div class="mem-card" data-idx="${i}" data-ic="${ic}">${ic}</div>`).join('')}
            </div>
        `;

        document.querySelectorAll('.mem-card').forEach(card => {
            card.onclick = () => {
                if (flipped.length === 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;
                sfx.click();
                card.classList.add('flipped');
                flipped.push(card);
                if (flipped.length === 2) {
                    const [c1, c2] = flipped;
                    if (c1.dataset.ic === c2.dataset.ic) {
                        c1.classList.add('matched');
                        c2.classList.add('matched');
                        flipped = [];
                        matched += 2;
                        this.addScore(25);
                        if (matched === deck.length) this.runMemoryCardsEngine();
                    } else {
                        setTimeout(() => {
                            c1.classList.remove('flipped');
                            c2.classList.remove('flipped');
                            flipped = [];
                        }, 600);
                    }
                }
            };
        });
    }

    // ENGINE 9: TARGET PRACTICE AIM & TRACKING
    runTargetAimEngine(type) {
        const body = document.getElementById('arena-body');
        body.innerHTML = `<div id="aim-field" style="position:relative;width:100%;max-width:560px;height:280px;background:#050814;border:2px solid var(--accent-cyan);border-radius:16px;overflow:hidden"></div>`;
        const field = document.getElementById('aim-field');
        const spawn = () => {
            if (!document.getElementById('aim-field')) return;
            field.innerHTML = '';
            const btn = document.createElement('button');
            const size = type === 'mot_prec' ? 28 : 44;
            btn.textContent = type === 'mot_whack' ? '👾' : '🎯';
            btn.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;border:none;background:var(--accent-red);color:#fff;font-size:1.2rem;cursor:pointer;left:${Math.random() * 82 + 5}%;top:${Math.random() * 75 + 5}%`;
            btn.onclick = () => {
                this.addScore(15);
                spawn();
            };
            field.appendChild(btn);
        };
        spawn();
    }

    // ENGINE 10: SPEED CLICK CPS TEST
    runSpeedClickEngine() {
        let clicks = 0;
        document.getElementById('arena-body').innerHTML = `
            <button id="cps-btn" class="btn btn-primary" style="width:240px;height:140px;font-size:1.5rem">CLICK FAST! (0)</button>
        `;
        document.getElementById('cps-btn').onclick = (e) => {
            clicks++;
            e.target.textContent = `CLICK FAST! (${clicks})`;
            this.addScore(5);
        };
    }

    // ENGINE 11: HAND-EYE CATCHER CANVAS
    runCatcherCanvasEngine() {
        document.getElementById('arena-body').innerHTML = `<canvas id="catch-canvas" class="game-canvas" width="480" height="280"></canvas>`;
        const canvas = document.getElementById('catch-canvas');
        const ctx = canvas.getContext('2d');
        let basketX = 200;
        let star = { x: 240, y: 0 };

        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            basketX = e.clientX - rect.left - 40;
        };

        const loop = () => {
            if (!document.getElementById('catch-canvas')) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            star.y += 4;
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.arc(star.x, star.y, 12, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#06b6d4';
            ctx.fillRect(basketX, 250, 80, 16);

            if (star.y > 245 && star.x > basketX && star.x < basketX + 80) {
                this.addScore(20);
                star = { x: Math.random() * 440 + 20, y: 0 };
            } else if (star.y > 280) {
                this.loseLife();
                star = { x: Math.random() * 440 + 20, y: 0 };
            }
            requestAnimationFrame(loop);
        };
        loop();
    }

    // ENGINE 12: MAZE, DRAWING, TYPING, SIMON, SUDOKU, HANOI
    runMazeEngine() {
        const grid = [
            [2,0,1,0,0],
            [1,0,1,0,1],
            [0,0,0,0,1],
            [0,1,1,0,0],
            [0,0,0,1,3]
        ];
        let pos = { r: 0, c: 0 };
        const render = () => {
            const body = document.getElementById('arena-body');
            if (!body) return;
            body.innerHTML = `
                <div style="display:grid;grid-template-columns:repeat(5,48px);gap:4px;margin-bottom:14px">
                    ${grid.map((row, r) => row.map((cell, c) => {
                        let bg = cell === 1 ? '#334155' : cell === 3 ? '#10b981' : '#0f172a';
                        let txt = (r === pos.r && c === pos.c) ? '🚀' : cell === 3 ? '🏁' : '';
                        return `<div style="width:48px;height:48px;background:${bg};display:flex;align-items:center;justify-content:center;border-radius:8px;font-size:1.3rem">${txt}</div>`;
                    }).join('')).join('')}
                </div>
                <div style="display:flex;gap:8px">
                    <button class="btn btn-secondary" onclick="window._moveMaze(-1,0)">⬆️</button>
                    <button class="btn btn-secondary" onclick="window._moveMaze(1,0)">⬇️</button>
                    <button class="btn btn-secondary" onclick="window._moveMaze(0,-1)">⬅️</button>
                    <button class="btn btn-secondary" onclick="window._moveMaze(0,1)">➡️</button>
                </div>
            `;
        };
        window._moveMaze = (dr, dc) => {
            const nr = pos.r + dr, nc = pos.c + dc;
            if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5 && grid[nr][nc] !== 1) {
                pos = { r: nr, c: nc };
                sfx.click();
                if (grid[nr][nc] === 3) {
                    this.addScore(50);
                    pos = { r: 0, c: 0 };
                }
                render();
            }
        };
        render();
    }

    runDrawingPadEngine() {
        document.getElementById('arena-body').innerHTML = `
            <canvas id="draw-canvas" class="game-canvas" width="520" height="250"></canvas>
            <div style="margin-top:10px;display:flex;gap:10px">
                <button class="btn btn-primary" onclick="app.addScore(25)">✅ Done (+25 pts)</button>
            </div>
        `;
        const c = document.getElementById('draw-canvas');
        const ctx = c.getContext('2d');
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 4;
        let drawing = false;
        c.onmousedown = () => drawing = true;
        c.onmouseup = () => { drawing = false; ctx.beginPath(); };
        c.onmousemove = (e) => {
            if (!drawing) return;
            const r = c.getBoundingClientRect();
            ctx.lineTo(e.clientX - r.left, e.clientY - r.top);
            ctx.stroke();
        };
    }

    runTypingAndMemoryInputEngine(type) {
        const target = type === 'br_num'
            ? String(Math.floor(100000 + Math.random() * 900000))
            : ['ALGORITHM', 'QUANTUM', 'VICTORY', 'NEURON', 'GALAXY'][Math.floor(Math.random() * 5)];
        const body = document.getElementById('arena-body');
        body.innerHTML = `
            <div class="question-box" id="mem-target">${target}</div>
            <input type="text" id="mem-input" class="text-input" placeholder="Type here..." style="font-size:1.2rem;text-align:center">
        `;
        if (type === 'br_num') {
            setTimeout(() => {
                const el = document.getElementById('mem-target');
                if (el) el.textContent = '******';
            }, 1800);
        }
        const inp = document.getElementById('mem-input');
        inp.focus();
        inp.oninput = () => {
            if (inp.value.toUpperCase() === target) {
                this.addScore(30);
                this.runTypingAndMemoryInputEngine(type);
            }
        };
    }

    runSimonEngine() {
        const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'];
        const targetIdx = Math.floor(Math.random() * 4);
        document.getElementById('arena-body').innerHTML = `
            <p style="margin-bottom:12px">Click the glowing pad!</p>
            <div style="display:grid;grid-template-columns:repeat(2,110px);gap:12px">
                ${colors.map((c, i) => `<button style="height:110px;border-radius:16px;border:${i === targetIdx ? '4px solid #fff' : 'none'};background:${c};opacity:${i === targetIdx ? 1 : 0.45};cursor:pointer" onclick="app.checkQuizAns(${i}, ${targetIdx}, () => app.runSimonEngine())"></button>`).join('')}
            </div>
        `;
    }

    runMiniSudokuEngine() {
        document.getElementById('arena-body').innerHTML = `
            <p style="margin-bottom:10px">Find missing number (1-4) in row: <strong>[ 3, 1, ?, 4 ]</strong></p>
            <div class="options-grid">
                ${[1, 2, 3, 4].map(n => `<button class="option-btn" onclick="app.checkQuizAns(${n}, 2, () => app.runMiniSudokuEngine())">${n}</button>`).join('')}
            </div>
        `;
    }

    runTowerOfHanoiEngine() {
        document.getElementById('arena-body').innerHTML = `
            <div class="question-box" style="font-size:1.2rem">🗼 Tower of Hanoi: Minimum moves for 3 disks?</div>
            <div class="options-grid">
                ${[5, 7, 8, 9].map(n => `<button class="option-btn" onclick="app.checkQuizAns(${n}, 7, () => app.runTowerOfHanoiEngine())">${n} moves</button>`).join('')}
            </div>
        `;
    }

    // =========================================================================
    // 6. 10 PROFESSIONAL CALCULATORS HUB
    // =========================================================================
    initCalculators() {
        const calcs = [
            { id: 'std', name: '🖩 Oddiy Kalkulyator / Standard' },
            { id: 'sci', name: '🔬 Ilmiy / Scientific' },
            { id: 'pct', name: '💯 Foiz / Percentage' },
            { id: 'loan', name: '🏦 Kredit / Loan Calculator' },
            { id: 'comp', name: '📈 Murakkab Foiz / Compound' },
            { id: 'pnl', name: '📊 Trading Profit / Loss' },
            { id: 'inv', name: '💰 Investment ROI' },
            { id: 'curr', name: '💱 Currency Converter (Demo)' },
            { id: 'bmi', name: '⚖️ BMI Health Calculator' },
            { id: 'age', name: '🎂 Age Calculator' }
        ];

        const menu = document.getElementById('calc-menu');
        menu.innerHTML = calcs.map((c, i) => `
            <button class="calc-menu-btn ${i === 0 ? 'active' : ''}" onclick="app.renderCalculator('${c.id}', this)">${c.name}</button>
        `).join('');

        this.renderCalculator('std', menu.children[0]);
    }

    renderCalculator(id, btnEl) {
        if (btnEl) {
            document.querySelectorAll('.calc-menu-btn').forEach(b => b.classList.remove('active'));
            btnEl.classList.add('active');
        }
        const ws = document.getElementById('calc-workspace');

        if (id === 'std') {
            ws.innerHTML = `
                <h3>🖩 Standard Calculator</h3>
                <input type="text" id="std-disp" class="text-input" style="width:100%;max-width:360px;font-size:1.5rem;text-align:right;margin-top:12px" readonly value="0">
                <div class="std-calc-keys">
                    ${['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'].map(k => `<button onclick="app.stdCalcKey('${k}')">${k}</button>`).join('')}
                </div>
            `;
        } else if (id === 'sci') {
            ws.innerHTML = `
                <h3>🔬 Scientific Calculator</h3>
                <div class="calc-grid-inputs">
                    <input type="number" id="sci-val" class="text-input" placeholder="Enter number (e.g. 90)" value="45">
                    <select id="sci-op" class="select-input">
                        <option value="sqrt">√ Square Root</option>
                        <option value="sin">sin(deg)</option>
                        <option value="cos">cos(deg)</option>
                        <option value="log">log10(x)</option>
                        <option value="pow2">x²</option>
                    </select>
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('sci')">Calculate</button>
                <div class="calc-result-box" id="calc-out">Result: 6.7082</div>
            `;
        } else if (id === 'pct') {
            ws.innerHTML = `
                <h3>💯 Percentage Calculator</h3>
                <div class="calc-grid-inputs">
                    <input type="number" id="pct-p" class="text-input" placeholder="Percent %" value="15">
                    <input type="number" id="pct-v" class="text-input" placeholder="Value" value="200">
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('pct')">Calculate</button>
                <div class="calc-result-box" id="calc-out">15% of 200 = 30</div>
            `;
        } else if (id === 'loan') {
            ws.innerHTML = `
                <h3>🏦 Loan Monthly Payment Calculator</h3>
                <div class="calc-grid-inputs">
                    <input type="number" id="ln-amt" class="text-input" placeholder="Amount" value="10000">
                    <input type="number" id="ln-rate" class="text-input" placeholder="Annual Rate %" value="18">
                    <input type="number" id="ln-mo" class="text-input" placeholder="Months" value="12">
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('loan')">Calculate</button>
                <div class="calc-result-box" id="calc-out">Monthly Payment: $916.80</div>
            `;
        } else if (id === 'comp') {
            ws.innerHTML = `
                <h3>📈 Compound Interest Calculator</h3>
                <div class="calc-grid-inputs">
                    <input type="number" id="cp-p" class="text-input" placeholder="Initial Capital" value="1000">
                    <input type="number" id="cp-r" class="text-input" placeholder="Annual Return %" value="12">
                    <input type="number" id="cp-y" class="text-input" placeholder="Years" value="5">
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('comp')">Calculate</button>
                <div class="calc-result-box" id="calc-out">Future Value: $1,762.34</div>
            `;
        } else if (id === 'pnl') {
            ws.innerHTML = `
                <h3>📊 Trading Profit / Loss Calculator</h3>
                <div class="calc-grid-inputs">
                    <input type="number" id="tr-ent" class="text-input" placeholder="Entry Price" value="100">
                    <input type="number" id="tr-ext" class="text-input" placeholder="Exit Price" value="125">
                    <input type="number" id="tr-qty" class="text-input" placeholder="Quantity" value="10">
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('pnl')">Calculate</button>
                <div class="calc-result-box" id="calc-out">Net PnL: +$250.00 (+25%)</div>
            `;
        } else if (id === 'inv') {
            ws.innerHTML = `
                <h3>💰 Investment ROI Calculator</h3>
                <div class="calc-grid-inputs">
                    <input type="number" id="iv-in" class="text-input" placeholder="Invested" value="5000">
                    <input type="number" id="iv-ret" class="text-input" placeholder="Returned" value="6500">
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('inv')">Calculate</button>
                <div class="calc-result-box" id="calc-out">ROI: +30.00% ($1,500 profit)</div>
            `;
        } else if (id === 'curr') {
            ws.innerHTML = `
                <h3>💱 Currency Converter (Demo Rates)</h3>
                <p style="color:var(--text-muted);font-size:0.85rem">* Demo kurslar: 1 USD = 12,850 UZS | 1 USD = 92 RUB</p>
                <div class="calc-grid-inputs">
                    <input type="number" id="cu-amt" class="text-input" value="100">
                    <select id="cu-pair" class="select-input">
                        <option value="uzs">USD → UZS</option>
                        <option value="rub">USD → RUB</option>
                        <option value="usd">UZS → USD</option>
                    </select>
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('curr')">Convert</button>
                <div class="calc-result-box" id="calc-out">1,285,000 UZS</div>
            `;
        } else if (id === 'bmi') {
            ws.innerHTML = `
                <h3>⚖️ BMI Calculator</h3>
                <div class="calc-grid-inputs">
                    <input type="number" id="bmi-w" class="text-input" placeholder="Weight (kg)" value="70">
                    <input type="number" id="bmi-h" class="text-input" placeholder="Height (cm)" value="175">
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('bmi')">Calculate</button>
                <div class="calc-result-box" id="calc-out">BMI: 22.86 (Normal)</div>
            `;
        } else if (id === 'age') {
            ws.innerHTML = `
                <h3>🎂 Age Calculator</h3>
                <div class="calc-grid-inputs">
                    <input type="date" id="age-dob" class="text-input" value="2005-05-15">
                </div>
                <button class="btn btn-primary" onclick="app.calcAction('age')">Calculate</button>
                <div class="calc-result-box" id="calc-out">Age: 21 years</div>
            `;
        }
    }

    stdCalcKey(k) {
        const d = document.getElementById('std-disp');
        if (k === 'C') d.value = '0';
        else if (k === '=') {
            try { d.value = Function('"use strict";return (' + d.value + ')')(); }
            catch { d.value = 'Error'; }
        } else {
            d.value = d.value === '0' ? k : d.value + k;
        }
    }

    calcAction(type) {
        const out = document.getElementById('calc-out');
        if (type === 'sci') {
            const v = parseFloat(document.getElementById('sci-val').value) || 0;
            const op = document.getElementById('sci-op').value;
            let r = 0;
            if (op === 'sqrt') r = Math.sqrt(v);
            if (op === 'sin') r = Math.sin((v * Math.PI) / 180);
            if (op === 'cos') r = Math.cos((v * Math.PI) / 180);
            if (op === 'log') r = Math.log10(v);
            if (op === 'pow2') r = v * v;
            out.textContent = `Result: ${r.toFixed(4)}`;
        } else if (type === 'pct') {
            const p = +document.getElementById('pct-p').value;
            const v = +document.getElementById('pct-v').value;
            out.textContent = `${p}% of ${v} = ${((p / 100) * v).toFixed(2)}`;
        } else if (type === 'loan') {
            const P = +document.getElementById('ln-amt').value;
            const r = (+document.getElementById('ln-rate').value / 100) / 12;
            const n = +document.getElementById('ln-mo').value;
            const m = (P * r) / (1 - Math.pow(1 + r, -n));
            out.textContent = `Monthly Payment: $${m.toFixed(2)} | Total: $${(m * n).toFixed(2)}`;
        } else if (type === 'comp') {
            const P = +document.getElementById('cp-p').value;
            const r = +document.getElementById('cp-r').value / 100;
            const y = +document.getElementById('cp-y').value;
            const fv = P * Math.pow(1 + r, y);
            out.textContent = `Future Value: $${fv.toFixed(2)}`;
        } else if (type === 'pnl') {
            const ent = +document.getElementById('tr-ent').value;
            const ext = +document.getElementById('tr-ext').value;
            const qty = +document.getElementById('tr-qty').value;
            const pnl = (ext - ent) * qty;
            const pct = ((ext - ent) / ent) * 100;
            out.textContent = `Net PnL: ${pnl >= 0 ? '+' : ''}$${pnl.toFixed(2)} (${pct.toFixed(2)}%)`;
        } else if (type === 'inv') {
            const inv = +document.getElementById('iv-in').value;
            const ret = +document.getElementById('iv-ret').value;
            const roi = ((ret - inv) / inv) * 100;
            out.textContent = `ROI: ${roi.toFixed(2)}% ($${(ret - inv).toFixed(2)})`;
        } else if (type === 'curr') {
            const amt = +document.getElementById('cu-amt').value;
            const pair = document.getElementById('cu-pair').value;
            if (pair === 'uzs') out.textContent = `${(amt * 12850).toLocaleString()} UZS (Demo)`;
            if (pair === 'rub') out.textContent = `${(amt * 92).toLocaleString()} RUB (Demo)`;
            if (pair === 'usd') out.textContent = `$${(amt / 12850).toFixed(2)} USD (Demo)`;
        } else if (type === 'bmi') {
            const w = +document.getElementById('bmi-w').value;
            const h = +document.getElementById('bmi-h').value / 100;
            const bmi = w / (h * h);
            out.textContent = `BMI: ${bmi.toFixed(2)}`;
        } else if (type === 'age') {
            const dob = new Date(document.getElementById('age-dob').value);
            const diff = Date.now() - dob.getTime();
            const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            out.textContent = `Age: ${age} years`;
        }
    }
}

// Initialize App
const app = new SmartBrainApp();
