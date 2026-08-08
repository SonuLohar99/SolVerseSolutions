const menu=document.querySelector('.menu'),links=document.querySelector('.links');menu?.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open'))});addEventListener('scroll',()=>document.querySelector('.nav').classList.toggle('scrolled',scrollY>12));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));document.querySelectorAll('[data-count]').forEach(el=>{const run=()=>{let target=+el.dataset.count,n=0,step=Math.max(1,Math.ceil(target/55));let tick=()=>{n=Math.min(n+step,target);el.textContent=n+el.dataset.suffix;if(n<target)requestAnimationFrame(tick)};tick()};new IntersectionObserver(x=>{if(x[0].isIntersecting){run();x[0].target.dataset.count='';}}).observe(el)});

// Google Sheets form backend
const GOOGLE_SCRIPT_URL='https://script.google.com/macros/s/AKfycbwiQNanZy24Bl-iAnFkKJ91yQhap9vq-44LCnMoPKdeyuZv2s9pJqOqnh_WZAn9gnoE/exec';

document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',async e=>{
  e.preventDefault();
  const button=form.querySelector('button[type="submit"],button.btn');
  const msg=form.querySelector('.form-message');
  const isInternship=location.pathname.toLowerCase().includes('internship');
  const data={formType:isInternship?'internship':'contact'};
  form.querySelectorAll('input,select,textarea').forEach(el=>{if(el.name) data[el.name]=el.value.trim();});
  if(!data.name || !data.email){
    if(msg){msg.textContent='Please complete the required fields.';msg.style.color='#b42318';}
    return;
  }
  if(button){button.disabled=true;button.dataset.originalText=button.textContent;button.textContent='Sending...';}
  if(msg){msg.textContent='';}
  try{
    // text/plain is a simple request, avoiding a browser CORS preflight.
    await fetch(GOOGLE_SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(data)});
    if(msg){msg.textContent='Thank you — your submission has been received. We will be in touch shortly.';msg.style.color='#16825a';}
    form.reset();
  }catch(err){
    console.error(err);
    if(msg){msg.textContent='Something went wrong. Please try again or contact us directly.';msg.style.color='#b42318';}
  }finally{
    if(button){button.disabled=false;button.textContent=button.dataset.originalText||'Submit';}
  }
}));
