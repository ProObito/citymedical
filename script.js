const menu=document.querySelector(".hamb"), links=document.querySelector(".links");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

document.querySelectorAll(".accordion button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const answer=btn.nextElementSibling;
    document.querySelectorAll(".answer").forEach(x=>{if(x!==answer)x.classList.remove("open")});
    document.querySelectorAll(".accordion button span").forEach(x=>{if(x!==btn.querySelector("span"))x.textContent="+"});
    const open=answer.classList.toggle("open");
    btn.querySelector("span").textContent=open?"−":"+";
  });
});

const form=document.getElementById("orderForm");
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const items=document.getElementById("items").value.trim();
  const address=document.getElementById("address").value.trim();
  const maplink=document.getElementById("maplink").value.trim();
  const error=document.getElementById("orderError");
  if(!items || !address){error.textContent="Please enter the medicines/items and delivery address.";return}
  error.textContent="";
  let message="Hello City Medical Store 👋\n\n*NEW MEDICINE ORDER*\n\n*Items required:*\n"+items+
    "\n\n*Delivery address:*\n"+address;
  if(maplink) message+="\n\n*Google Maps link:*\n"+maplink;
  message+="\n\nPlease confirm availability, total amount and delivery.";
  window.location.href="https://wa.me/917248439169?text="+encodeURIComponent(message);
});

const obs=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
     entry.target.style.transition="opacity .7s ease, transform .7s ease";
     entry.target.style.opacity="1";
     entry.target.style.transform="none";
     obs.unobserve(entry.target);
   }
 });
},{threshold:.08});
document.querySelectorAll(".service,.about-visual,.test-panel,.test-copy,.order-form-card,.order-side-card,.location-visual,.location-copy,.pharmacist-card,.faq-grid>div").forEach(el=>obs.observe(el));
