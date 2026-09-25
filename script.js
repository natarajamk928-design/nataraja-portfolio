const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const form=document.getElementById("contactForm");
const msg=document.getElementById("formMessage");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  msg.textContent="Thank you! Your message form is ready to connect to an email service.";
  form.reset();
});

const sections=document.querySelectorAll("main section[id]");
const links=document.querySelectorAll("nav a");
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(section=>{
    if(window.scrollY >= section.offsetTop-120) current=section.id;
  });
  links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});
