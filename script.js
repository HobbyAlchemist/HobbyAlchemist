const spareTips = [
    {
        id: 1,
        category: 'mat',
        title: 'Handlekurv-sammenligning med Allematpriser.no',
        description: 'Bruk Allematpriser.no eller tilsvarende tjenester for å sammenligne priser på identiske produkter på tvers av butikker. Spar opptil 30% på handleturen.',
        savings: '3000-5000 kr/år',
        difficulty: 'Lett',
        icon: '🛒',
        likes: 245
    },
    {
        id: 2,
        category: 'mat',
        title: 'Kjøp dagligvarer på tilbud og frys ned',
        description: 'Kjøp kjøtt, brød og grønnsaker når de er på tilbud. Frys ned umiddelbart. Dette kan halvere matbudsjettet ditt.',
        savings: '4000-6000 kr/år',
        difficulty: 'Lett',
        icon: '❄️',
        likes: 189
    },
    {
        id: 3,
        category: 'mat',
        title: 'Handleliste og ukesmeny',
        description: 'Planlegg ukens middager på forhånd og lag en nøyaktig handleliste. Unngå impulshandel og matsvinn.',
        savings: '2000-3000 kr/år',
        difficulty: 'Middels',
        icon: '📝',
        likes: 167
    },
    {
        id: 4,
        category: 'mat',
        title: 'Kjøp dagligvarebutikkens egne merker',
        description: 'Butikkenes egne merker er ofte identiske produkter som merkevarer, men 20-40% billigere.',
        savings: '3000-4000 kr/år',
        difficulty: 'Lett',
        icon: '🏷️',
        likes: 203
    },
    {
        id: 5,
        category: 'bolig',
        title: 'Bytt strømleverandør regelmessig',
        description: 'Sammenlign strømpriser på Strømpris.no og bytt til billigste leverandør. Gjør dette hver 6. måned.',
        savings: '2000-4000 kr/år',
        difficulty: 'Lett',
        icon: '⚡',
        likes: 312
    },
    {
        id: 6,
        category: 'bolig',
        title: 'Senk romtemperaturen med 1 grad',
        description: 'Senk oppvarmingen fra 22 til 21 grader. Dette reduserer strømforbruket med ca. 5% uten at du merker stor forskjell.',
        savings: '1500-2500 kr/år',
        difficulty: 'Lett',
        icon: '🌡️',
        likes: 156
    },
    {
        id: 7,
        category: 'bolig',
        title: 'LED-pærer overalt',
        description: 'Bytt ut alle gamle lyspærer med LED. De bruker 80% mindre strøm og varer 10 ganger lengre.',
        savings: '1000-1500 kr/år',
        difficulty: 'Lett',
        icon: '💡',
        likes: 134
    },
    {
        id: 8,
        category: 'bolig',
        title: 'Reforhandle boliglån årlig',
        description: 'Ring banken din eller bruk konkurranseklausulen. En rentereduksjon på 0,5% gir betydelige besparelser.',
        savings: '10000-30000 kr/år',
        difficulty: 'Middels',
        icon: '🏠',
        likes: 423
    },
    {
        id: 9,
        category: 'bolig',
        title: 'Tett luftlekkasjer og gjennomtrekk',
        description: 'Kjøp tettelister og fugemasse. Tett vinduer og dører. Kan redusere oppvarmingskostnader med opptil 15%.',
        savings: '2000-4000 kr/år',
        difficulty: 'Middels',
        icon: '🚪',
        likes: 98
    },
    {
        id: 10,
        category: 'reise',
        title: 'Book fly på tirsdager og onsdager',
        description: 'Statistikk viser at flybilletter ofte er billigst på tirsdager. Unngå helger og mandager.',
        savings: '2000-5000 kr/år',
        difficulty: 'Lett',
        icon: '✈️',
        likes: 267
    },
    {
        id: 11,
        category: 'reise',
        title: 'Bruk inkognito-modus ved booking',
        description: 'Bookingsider sporer deg med cookies og øker priser ved gjentatte søk. Bruk inkognito-modus.',
        savings: '1000-2000 kr/år',
        difficulty: 'Lett',
        icon: '🕵️',
        likes: 189
    },
    {
        id: 12,
        category: 'reise',
        title: 'Reiseplanlegging 2-3 måneder i forveien',
        description: 'Book flyreiser 6-8 uker før avreise for beste priser. Siste liten-reiser er sjelden billigere.',
        savings: '3000-6000 kr/år',
        difficulty: 'Middels',
        icon: '📅',
        likes: 145
    },
    {
        id: 13,
        category: 'reise',
        title: 'Bonusprogrammer for fly og hotell',
        description: 'Meld deg inn i bonusprogrammer som SAS EuroBonus, Norwegian Reward osv. Spar poeng til gratisreiser.',
        savings: '2000-4000 kr/år',
        difficulty: 'Lett',
        icon: '🎁',
        likes: 201
    },
    {
        id: 14,
        category: 'streaming',
        title: 'Del streaming-abonnementer',
        description: 'Netflix, HBO, Disney+ tillater flere profiler. Del abonnement med familie/venner og splitt regningen.',
        savings: '2000-3000 kr/år',
        difficulty: 'Lett',
        icon: '📺',
        likes: 356
    },
    {
        id: 15,
        category: 'streaming',
        title: 'Ruter abonnementer sesongvis',
        description: 'Ha kun 1-2 abonnementer om gangen. Bytt når du er ferdig med innholdet. Unngå å betale for alt samtidig.',
        savings: '1500-2500 kr/år',
        difficulty: 'Middels',
        icon: '🔄',
        likes: 234
    },
    {
        id: 16,
        category: 'streaming',
        title: 'Sjekk inkluderte tjenester via mobilabonnement',
        description: 'Mange mobilabonnementer inkluderer Spotify, HBO eller Apple Music. Sjekk hva du allerede betaler for.',
        savings: '1000-2000 kr/år',
        difficulty: 'Lett',
        icon: '📱',
        likes: 178
    },
    {
        id: 17,
        category: 'streaming',
        title: 'Avslutt ubrukte gratisperioder',
        description: 'Sett en reminder når gratisperioden utgår. Mange glemmer å si opp og betaler unødvendig.',
        savings: '1000-1500 kr/år',
        difficulty: 'Lett',
        icon: '⏰',
        likes: 145
    },
    {
        id: 18,
        category: 'bank',
        title: 'Bruk høyrentekonto for sparepenger',
        description: 'Flytt sparepenger til bankkonto med høyest rente. Forskjellen kan være 3-4% mellom banker.',
        savings: '2000-8000 kr/år',
        difficulty: 'Lett',
        icon: '💰',
        likes: 289
    },
    {
        id: 19,
        category: 'bank',
        title: 'Bytt til gebyrfritt kredittkort',
        description: 'Mange banker tilbyr gebyrfrie kredittkort med cashback. Spar både årsavgift og få penger tilbake.',
        savings: '500-1500 kr/år',
        difficulty: 'Lett',
        icon: '💳',
        likes: 198
    },
    {
        id: 20,
        category: 'bank',
        title: 'Automatisk sparing hver måned',
        description: 'Sett opp automatisk overføring til sparekonto på lønningsdagen. "Betal deg selv først".',
        savings: '12000-36000 kr/år',
        difficulty: 'Lett',
        icon: '🏦',
        likes: 267
    },
    {
        id: 21,
        category: 'bank',
        title: 'Unngå minibanker med gebyr',
        description: 'Bruk alltid minibanker fra din egen bank eller gebyrfrie alternativer. Unngå uttak med gebyr.',
        savings: '500-1000 kr/år',
        difficulty: 'Lett',
        icon: '🏧',
        likes: 123
    },
    {
        id: 22,
        category: 'mat',
        title: 'Bruk app som "Too Good To Go"',
        description: 'Kjøp overskuddsmat fra restauranter og butikker til 50-70% rabatt. God mat som ellers kastes.',
        savings: '3000-5000 kr/år',
        difficulty: 'Lett',
        icon: '🍱',
        likes: 412
    },
    {
        id: 23,
        category: 'mat',
        title: 'Kjøp sesongens grønnsaker',
        description: 'Sesongens grønnsaker og frukt er både billigere og smaker bedre. Følg sesongen.',
        savings: '1500-2500 kr/år',
        difficulty: 'Lett',
        icon: '🥬',
        likes: 167
    },
    {
        id: 24,
        category: 'bolig',
        title: 'Vask klær på 30 grader',
        description: 'Moderne vaskemidler virker like godt på 30 grader. Halverer energiforbruket vs. 60 grader.',
        savings: '800-1200 kr/år',
        difficulty: 'Lett',
        icon: '👕',
        likes: 145
    },
    {
        id: 25,
        category: 'streaming',
        title: 'Finn gratis alternativer: NRK, bibliotek',
        description: 'NRK TV er gratis. Biblioteket tilbyr strømmetjenester som Filmoteket og ebøker helt gratis.',
        savings: '1000-2000 kr/år',
        difficulty: 'Lett',
        icon: '📚',
        likes: 234
    },
    {
        id: 26,
        category: 'reise',
        title: 'Campingferie i Norge',
        description: 'Utforsk Norge med campingvogn eller telt. Stor opplevelse til en brøkdel av utenlandsferien.',
        savings: '10000-20000 kr/år',
        difficulty: 'Middels',
        icon: '⛺',
        likes: 198
    },
    {
        id: 27,
        category: 'bank',
        title: 'Betal ned dyrest gjeld først',
        description: 'Prioriter å betale ned kredittkort og forbrukslån (høyest rente) før boliglån.',
        savings: '5000-15000 kr/år',
        difficulty: 'Middels',
        icon: '📉',
        likes: 287
    },
    {
        id: 28,
        category: 'bolig',
        title: 'Kjøp brukt møbler og utstyr',
        description: 'Finn kvalitetsmøbler på Finn.no, Tise eller loppemarkeder. Ofte som nye til 20-30% av prisen.',
        savings: '5000-10000 kr/år',
        difficulty: 'Middels',
        icon: '🛋️',
        likes: 176
    }
];

let currentCategory = 'alle';
let currentSort = 'popular';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    updateTipCount();
    renderTips();
    attachEventListeners();
}

function updateTipCount() {
    document.getElementById('tipCount').textContent = spareTips.length;
}

function attachEventListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentCategory = link.dataset.category;
            renderTips();
        });
    });

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderTips();
    });

    searchBtn.addEventListener('click', () => {
        searchQuery = searchInput.value.toLowerCase();
        renderTips();
    });

    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderTips();
    });
}

function renderTips() {
    const tipsGrid = document.getElementById('tipsGrid');
    const noResults = document.getElementById('noResults');
    const categoryTitle = document.getElementById('categoryTitle');

    let filteredTips = filterTips();
    filteredTips = sortTips(filteredTips);

    const categoryNames = {
        'alle': 'Alle Sparetips',
        'mat': 'Mat & Dagligvare',
        'bolig': 'Bolig',
        'reise': 'Reise',
        'streaming': 'Streaming & Abonnement',
        'bank': 'Bank & Finans'
    };

    categoryTitle.textContent = categoryNames[currentCategory] || 'Alle Sparetips';

    if (filteredTips.length === 0) {
        tipsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    tipsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    tipsGrid.innerHTML = filteredTips.map(tip => createTipCard(tip)).join('');

    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleLike(btn);
        });
    });
}

function filterTips() {
    return spareTips.filter(tip => {
        const matchesCategory = currentCategory === 'alle' || tip.category === currentCategory;
        const matchesSearch = searchQuery === '' || 
            tip.title.toLowerCase().includes(searchQuery) ||
            tip.description.toLowerCase().includes(searchQuery) ||
            tip.category.toLowerCase().includes(searchQuery);
        
        return matchesCategory && matchesSearch;
    });
}

function sortTips(tips) {
    const sorted = [...tips];
    
    switch(currentSort) {
        case 'popular':
            return sorted.sort((a, b) => b.likes - a.likes);
        case 'savings':
            return sorted.sort((a, b) => {
                const aSavings = parseInt(a.savings.match(/\d+/)[0]);
                const bSavings = parseInt(b.savings.match(/\d+/)[0]);
                return bSavings - aSavings;
            });
        case 'recent':
            return sorted.reverse();
        default:
            return sorted;
    }
}

function createTipCard(tip) {
    const difficultyIcons = {
        'Lett': '⭐',
        'Middels': '⭐⭐',
        'Vanskelig': '⭐⭐⭐'
    };

    return `
        <div class="tip-card fade-in">
            <div class="tip-header">
                <span class="tip-category ${tip.category}">${tip.category}</span>
                <span class="tip-savings">${tip.savings}</span>
            </div>
            <div class="tip-icon">${tip.icon}</div>
            <h4 class="tip-title">${tip.title}</h4>
            <p class="tip-description">${tip.description}</p>
            <div class="tip-footer">
                <div class="tip-difficulty">
                    ${difficultyIcons[tip.difficulty]} ${tip.difficulty}
                </div>
                <div class="tip-likes">
                    <button class="like-btn" data-tip-id="${tip.id}">❤️</button>
                    <span class="like-count">${tip.likes}</span>
                </div>
            </div>
        </div>
    `;
}

function handleLike(button) {
    const tipId = parseInt(button.dataset.tipId);
    const tip = spareTips.find(t => t.id === tipId);
    
    if (!button.classList.contains('liked')) {
        tip.likes++;
        button.classList.add('liked');
        button.style.transform = 'scale(1.3)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    } else {
        tip.likes--;
        button.classList.remove('liked');
    }
    
    const likeCount = button.nextElementSibling;
    likeCount.textContent = tip.likes;
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});
