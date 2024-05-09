const languages = {
    'tr': {
        'navhome': 'Ana Sayfa',
        'naveducation': 'Eğitim',
        'navskills': 'Beceriler',
        'navabout': 'Hakkımda',
        'navcontact': 'İletişim',
        'main1': 'WEB SİTESİ Mİ LAZIM?',
        'mainh2': 'Ben',
        'mainp': 'Kullanışlı ve etkili bir site için',
        'homebtn': 'Bana Ulaşın',
        'educationh2': 'Eğitim Bilgileri',
        'educationhigh': 'Lise',
        'educationp1': 'Lise öğrenimini Amasya Sınav Fen Lisesinde tamamladı. \
         Başarılı bir öğrenci profili çizdikten sonra üniversite sınavını kazanıp \
         bilgisayar mühendisliği okudu.',
        'educationuniversity': 'Üniversite',
        'educationp2': 'Üniversite sınavına girdikten sonra Bilgisayar Mühendisliği bölümünü kazandı. \
          Eğitimine başarılı bir şekilde devam ediyor.',
        'skillsheading': 'Beceriler',
        'aboutmeheading': 'Hakkımda',
        'aboutmep': 'Mustafa Aslan, 30 Kasım 2002 Mersin Erdemlide doğdu. \
        İlk okul döneminden lise dönemine kadar Mersinde çeşitli okullarda okudu. \
        Liseyi kazandığında ailesi ile birlikte taşındığı Amasyada Amasya Sınav Fen Lisesinde okudu. \
        Sınav Fen Lisesinden mezun olduktan sonra üniversite sınavına hazırlandı. \
        Üniversite sınavında başarılı olup Bilgisayar Mühendisliği bölümünü kazandı. \
        Çeşitli alanlarda kendini geliştirip belirli bir alanda uzmanlaşmak istedi.\
        Bir çok aktivite yaptı ancak kendisi en çok programlama ile uğraşmak istedi. \
        Programlama onun için bir hayat felsefesiydi. \
        2022 yılından bu yana programlama konusunda kendisini geliştirmeye devam ediyor.',
        'contactheading': 'İletişim',
        'contactheading2': 'Bizimle iletişim kurmak için aşağıdaki bilgileri doldurmalısınız.',
        'footer': '© Mustafa Aslan - 2024 | Tüm Hakları Saklıdır',
    },

    'en': {
        'navhome': 'Home',
        'naveducation': 'Education',
        'navskills': 'Skills',
        'navabout': 'About Me',
        'navcontact': 'Contact',
        'main1': 'NEED A WEBSITE?',
        'mainh2': 'I am',
        'mainp': 'For a useful and effective site',
        'homebtn': 'Contact Me',
        'educationh2': 'Education Information',
        'educationhigh': 'High School',
        'educationp1': 'He completed his high school education at Amasya Sınav Science High School. \
         After drawing a successful student profile, he won the university exam studied computer engineering.',
        'educationuniversity': 'University',
        'educationp2': 'After taking the university exam, he won the Computer Engineering department. He continues his education successfully.',
        'skillsheading': 'Skills',
        'aboutmeheading': 'About Me',
        'aboutmep': 'Mustafa Aslan was born on November 30, 2002 in Erdemli, Mersin. \
         He studied in various schools in Mersin from primary school to high school. \
         When he graduated from high school, he studied at Amasya Sınav Science High School in Amasya,\
          where he moved with his family. After graduating from Sınav Science High School, \
          he prepared for the university exam. He succeeded in the university exam and won the Computer Engineering \
           department. He wanted to improve himself in various fields and specialize in a certain field. \
           He did many activities, but he wanted to deal with programming the most. \
           Programming was a philosophy of life for him. Since 2022, \
           he has been continuing to improve himself in programming.',
        'contactheading': 'Contact Us',
        'contactheading2': 'You must fill in the information below to contact us.',
        'footer': '© Mustafa Aslan - 2024 | All Rights Reserved',
    }
}


let currentLanguage = 'tr'; //Default Language
let currentWordIndex = 0;

function changeLanguage(language) {
    if (language === 'tr') {
        currentLanguage = 'tr';
        document.getElementById('tr-flag').src = 'photo/tr.png'; 
        document.getElementById('en-flag').src = 'photo/en.png';
    } else {
        currentLanguage = 'en';
        document.getElementById('en-flag').src = 'photo/en.png';
        document.getElementById('tr-flag').src = 'photo/tr.png';
    }
    updateContentAndPlaceholders();
}

function updateContent() {
    const content = languages[currentLanguage];
    document.getElementById('navhome').textContent = content['navhome'];
    document.getElementById('naveducation').textContent = content['naveducation'];
    document.getElementById('navskills').textContent = content['navskills'];
    document.getElementById('navabout').textContent = content['navabout'];
    document.getElementById('navcontact').textContent = content['navcontact'];
    document.getElementById('main1').textContent = content['main1'];
    document.getElementById('mainh2').textContent = content['mainh2'];
    document.getElementById('mainp').textContent = content['mainp'];
    document.getElementById('homebtn').textContent = content['homebtn'];
    document.getElementById('educationh2').textContent = content['educationh2'];
    document.getElementById('educationhigh').textContent = content['educationhigh'];
    document.getElementById('educationp1').textContent = content['educationp1'];
    document.getElementById('educationuniversity').textContent = content['educationuniversity'];
    document.getElementById('educationp2').textContent = content['educationp2'];
    document.getElementById('skillsheading').textContent = content['skillsheading'];
    document.getElementById('aboutmeheading').textContent = content['aboutmeheading'];
    document.getElementById('aboutmep').textContent = content['aboutmep'];
    document.getElementById('contactheading').textContent = content['contactheading'];
    document.getElementById('contactheading2').textContent = content['contactheading2'];
    document.getElementById('footer').textContent = content['footer'];
}

function updatePlaceholders() {
    const placeholders = {
        'tr': {
            'contactName': 'Adınız',
            'contactSurname': 'Soyadınız',
            'contactMail': 'E-Posta',
            'contactTopic': 'Konu',
            'contactMessage': 'Mesajınızı Buraya Yazabilirsiniz',
            'sbmbtn': 'Mesaj Gönder',
        },
        'en': {
            'contactName': 'Your Name',
            'contactSurname': 'Your Surname',
            'contactMail': 'Email',
            'contactTopic': 'Topic',
            'contactMessage': 'Write Your Message Here',
            'sbmbtn': 'Send Message',
        }
    };

    const currentPlaceholders = placeholders[currentLanguage];
    Object.keys(currentPlaceholders).forEach(function(key) {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'sbmbtn') {
                element.value = currentPlaceholders[key];
            } else {
                element.placeholder = currentPlaceholders[key];
            }
        }
    });
}

function updateContentAndPlaceholders() {
    updateContent();
    updatePlaceholders();
}
