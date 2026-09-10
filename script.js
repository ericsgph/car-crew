const grid = document.querySelector('#service-grid');
grid.innerHTML = siteContent.services.map(service => `<article class="service-card"><span class="service-number">${service.number}</span><span class="service-tag">${service.tag}</span><h3>${service.title}</h3><p>${service.text}</p><a data-booking href="${siteContent.bookingUrl}">Enquire <b>→</b></a></article>`).join('');

document.querySelectorAll('[data-booking]').forEach(a => a.href = siteContent.bookingUrl);
document.querySelectorAll('[data-facebook]').forEach(a => a.href = siteContent.facebookUrl);
document.querySelectorAll('[data-map]').forEach(a => a.href = siteContent.mapUrl);

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
