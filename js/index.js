const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Dom Selectors

let logo = document.getElementById("logo-img");

const [nav] = document.getElementsByTagName('nav');

let ctaHeader = document.querySelector('h1');

let ctaBtn = document.querySelector('button');

let headerImg = document.getElementById("cta-img");

const [featHeader] = document.getElementsByClassName('main-content');

const [aboutHeader] = document.getElementsByClassName('main-content');

const [featContent] = document.getElementsByClassName('main-content');

const [aboutContent] = document.getElementsByClassName('main-content');

let middleImg = document.getElementById("middle-img");

const [serviceHeader] = document.getElementsByClassName('main-content');

const [prodHeader] = document.getElementsByClassName('main-content');

const [visionHeader] = document.getElementsByClassName('main-content');

const [serviceContent] = document.getElementsByClassName('main-content');

const [prodContent] = document.getElementsByClassName('main-content');

const [visionContent] = document.getElementsByClassName('main-content');

const [contactHeader] = document.getElementsByClassName('contact');

const [addressContent] = document.getElementsByClassName('contact');

const [phoneContent] = document.getElementsByClassName('contact');

const [emailContent] = document.getElementsByClassName('contact');

const [copyrightContent] = document.getElementsByTagName('footer');

//Mutate the DOM HTML Edits

logo.setAttribute('src', siteContent["nav"]["img-src"]);

Array.from(nav.children).forEach((val, idx) => {
  val.textContent = siteContent['nav'][`nav-item-${idx + 1}`];
});

ctaHeader.textContent = (siteContent["cta"]["h1"]);

ctaBtn.textContent = (siteContent["cta"]["button"]);

headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

featHeader.getElementsByTagName('h4')[0].textContent = (siteContent["main-content"]["features-h4"]);

aboutHeader.getElementsByTagName('h4')[1].textContent = (siteContent["main-content"]["about-h4"]);

featContent.getElementsByTagName('p')[0].textContent = (siteContent["main-content"]["features-content"]);

aboutContent.getElementsByTagName('p')[1].textContent = (siteContent["main-content"]["about-content"]);

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

serviceHeader.getElementsByTagName('h4')[2].textContent = (siteContent["main-content"]["services-h4"]);

prodHeader.getElementsByTagName('h4')[3].textContent = (siteContent["main-content"]["product-h4"]);

visionHeader.getElementsByTagName('h4')[4].textContent = (siteContent["main-content"]["vision-h4"]);

serviceContent.getElementsByTagName('p')[2].textContent = (siteContent["main-content"]["services-content"]);

prodContent.getElementsByTagName('p')[3].textContent = (siteContent["main-content"]["product-content"]);

visionContent.getElementsByTagName('p')[4].textContent = (siteContent["main-content"]["vision-content"]);

contactHeader.getElementsByTagName('h4')[0].textContent = (siteContent["contact"]["contact-h4"]);

addressContent.getElementsByTagName('p')[0].textContent = (siteContent["contact"]["address"]);

phoneContent.getElementsByTagName('p')[1].textContent = (siteContent["contact"]["phone"]);

emailContent.getElementsByTagName('p')[2].textContent = (siteContent["contact"]["email"]);

copyrightContent.getElementsByTagName('p')[0].textContent = (siteContent["footer"]["copyright"]);
