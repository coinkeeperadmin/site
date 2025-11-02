const root=document.getElementById("root")
root.innerHTML=`
<div class="grid3d"></div>
<header>
  <div class="nav">
    <div class="brand">CoinKeeper</div>
    <div class="actions">
      <div class="more">
        <button class="more-btn" id="moreBtn" aria-haspopup="true" aria-expanded="false">
          추가 서비스
          <svg class="chev" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#d9cff9" stroke-width="2.4" stroke-linecap="round"/></svg>
        </button>
        <div class="menu" id="moreMenu" role="menu" aria-label="추가 제공 서비스">
          <a href="https://t.me/rent_for_trx_ch/26" target="_blank" rel="noopener" role="menuitem">
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M13 2L6 14h6l-1 8 7-12h-6l1-8z" fill="rgba(139,92,246,.85)"/></svg>
            트론 에너지 임대 서비스
          </a>
          <a href="https://t.me/rent_for_trx_ch/30" target="_blank" rel="noopener" role="menuitem">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9.5 12.5l9-6.5-3.2 12.6c-.1.4-.6.5-.9.3l-4-3-2.1 2c-.3.2-.8.1-.9-.3l.8-3.1 9.5-8.1" stroke="#cbb4ff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            텔레그램 프리미엄 간편 구매
          </a>
        </div>
      </div>
      <a class="btn-top" href="https://t.me/RENT_FOR_TRX" target="_blank" rel="noopener">고객센터</a>
    </div>
  </div>
</header>
<main>
  <div class="wrap">
    <section class="hero">
      <h1 class="headline">
        <span class="keep" id="headlineKeep">KEEP IT</span>
        <span class="simple" id="headlineSimple">SIMPLE</span>
      </h1>
      <div class="headline-line"></div>
      <p class="sub">복잡한 절차 없이, 누구나 쉽고 빠르게 바로 스왑</p>
    </section>
    <section class="trust">
      <div class="badge">
        <svg class="ic" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#cbb4ff" stroke-width="1.6"/>
          <path d="M7 12l3 3 7-7" stroke="#cbb4ff" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
        KYC 없음
      </div>
      <div class="badge">
        <svg class="ic" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" stroke="#cbb4ff" stroke-width="1.6" fill="rgba(139,92,246,.18)"/>
        </svg>
        1000+ 코인
      </div>
      <div class="badge">
        <svg class="ic ic-bolt" viewBox="0 0 24 24">
          <defs><linearGradient id="boltGrad" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#bca7ff"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient></defs>
          <path d="M13 2l-2 8h5l-5 12 2-8H8l5-12z" fill="url(#boltGrad)"/>
        </svg>
        즉시 스왑
      </div>
    </section>
    <section class="swap-wrap" id="swapWrap">
      <div class="swap-crop" id="swapCrop">
        <iframe title="PegasusSwap Widget" src="https://widget.pegasusswap.com/widget?deposit=USDT&depositNetwork=TRX&receive=TRX&receiveNetwork=TRX&amount=&isOptional=false&ref=URNNCCO" style="width:100%;height:100%" frameborder="0" scrolling="yes" allow="clipboard-read; clipboard-write"></iframe>
      </div>
    </section>
  </div>
</main>
<button class="fab-trigger" id="fabTrigger" aria-label="에너지 임대 서비스 열기" title="에너지 임대">
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs><linearGradient id="trigGrad" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#efeaff"/><stop offset="100%" stop-color="#bca7ff"/></linearGradient></defs>
    <path d="M13 2L6 14h6l-1 8 7-12h-6l1-8z" fill="url(#trigGrad)"/>
  </svg>
</button>
<div class="energy-fab" id="energyFab" data-open="0" aria-live="polite" role="dialog" aria-labelledby="fabTitle" aria-describedby="fabDesc">
  <div class="fab-row">
    <div>
      <div class="fab-title" id="fabTitle">트론 에너지 임대 서비스</div>
      <div class="fab-desc" id="fabDesc"><strong>USDT-TRC20</strong> 전송수수료를 절약하세요</div>
    </div>
    <button class="close" id="fabClose" aria-label="닫기">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
  </div>
  <div class="fab-actions">
    <button class="btn-sec" id="openCalc" aria-controls="fabPanel" aria-expanded="false">
      <svg width="18" height="18" viewBox="0 0 24 24">
        <defs><linearGradient id="btnGrad1" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#bca7ff"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient></defs>
        <path d="M3 12h12m-6-6l6 6-6 6" fill="none" stroke="url(#btnGrad1)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      절약금액 확인
    </button>
    <a class="btn-prim" href="https://t.me/rent_for_trx_ch/26" target="_blank" rel="noopener">
      <svg width="18" height="18" viewBox="0 0 24 24">
        <defs><linearGradient id="btnGrad2" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#efeaff"/><stop offset="100%" stop-color="#bca7ff"/></linearGradient></defs>
        <path d="M7 12h10M13 6l4 6-4 6" fill="none" stroke="url(#btnGrad2)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      이용하러 가기
    </a>
  </div>
  <div class="fab-panel" id="fabPanel" data-open="0">
    <div class="panel-head">
      <div class="panel-title">에너지 임대 계산기</div>
      <button class="panel-close" id="panelClose" aria-label="계산기 닫기">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="calc">
      <div>
        <label for="txCount">이용 횟수</label>
        <input id="txCount" type="number" min="1" step="1" value="1" inputmode="numeric">
      </div>
    </div>
    <div class="result">
      <div class="sum" id="summary">1회 이용 시</div>
      <div class="num" id="grossTrx">약 11 TRX 절약</div>
      <div class="krw" id="grossKrw">약 ₩0 절약</div>
    </div>
    <div class="price-note" id="priceNote">시세 불러오는 중…</div>
  </div>
</div>
<footer>
  © <span id="y"></span> CoinKeeper · 모든 권리 보유 · 안전하고 간편한 코인 스왑 서비스
</footer>
`
const CFG={seenKey:"ck_fab_seen_v12",perUseSave:11,priceKey:"ck_trx_krw_v1",priceTTL:3600e3,timeoutMs:5e3}
document.getElementById("y").textContent=new Date().getFullYear()
const fab=document.getElementById("energyFab")
const trigger=document.getElementById("fabTrigger")
const closeBtn=document.getElementById("fabClose")
const openCalcBtn=document.getElementById("openCalc")
const panel=document.getElementById("fabPanel")
const panelClose=document.getElementById("panelClose")
const swapWrap=document.getElementById("swapWrap")
const swapCrop=document.getElementById("swapCrop")
const keep=document.getElementById("headlineKeep")
const simple=document.getElementById("headlineSimple")
const btn=document.getElementById("moreBtn")
const menu=document.getElementById("moreMenu")
function showFab(){fab.setAttribute("data-open","1");document.body.setAttribute("data-fab-open","1");matchFabToSwap();focusFirst()}
function hideFab(){fab.setAttribute("data-open","0");document.body.removeAttribute("data-fab-open");trigger.focus()}
const seen=localStorage.getItem(CFG.seenKey)==="1"
if(!seen){showFab();localStorage.setItem(CFG.seenKey,"1")}
trigger.addEventListener("click",showFab)
closeBtn.addEventListener("click",hideFab)
openCalcBtn.addEventListener("click",()=>{panel.setAttribute("data-open","1");openCalcBtn.setAttribute("aria-expanded","true")})
panelClose.addEventListener("click",()=>{panel.setAttribute("data-open","0");openCalcBtn.setAttribute("aria-expanded","false");openCalcBtn.focus()})
function matchFabToSwap(){
  const mq=matchMedia("(min-width: 840px)")
  if(!fab||!swapWrap)return
  if(mq.matches){
    const r=(swapCrop||swapWrap).getBoundingClientRect()
    fab.style.left=Math.round(r.left)+"px"
    fab.style.right="auto"
    fab.style.width=Math.round(r.width)+"px"
    fab.style.maxWidth=Math.round(r.width)+"px"
    fab.style.margin="0"
    fab.style.paddingTop="12px"
    fab.style.paddingBottom="12px"
  }else{
    fab.style.left=""
    fab.style.right=""
    fab.style.width=""
    fab.style.maxWidth=""
    fab.style.margin=""
    fab.style.paddingTop=""
    fab.style.paddingBottom=""
  }
}
let rafId=0
function onScrollResize(){if(rafId)return;rafId=requestAnimationFrame(()=>{matchFabToSwap();rafId=0})}
addEventListener("resize",onScrollResize,{passive:true})
addEventListener("scroll",onScrollResize,{passive:true})
matchFabToSwap()
const ro=new ResizeObserver(()=>matchFabToSwap())
if(swapWrap)ro.observe(swapWrap)
if(swapCrop)ro.observe(swapCrop)
function balanceHeadline(){
  const keepW=keep.offsetWidth
  const simpleW=simple.offsetWidth
  if(keepW>0&&simpleW>0){
    const base=parseFloat(getComputedStyle(simple).fontSize)
    const ratio=Math.min(1.35,keepW/simpleW)
    simple.style.fontSize=base*ratio+"px"
  }
}
addEventListener("load",balanceHeadline)
addEventListener("resize",()=>{simple.style.fontSize="";requestAnimationFrame(balanceHeadline)})
if(document.fonts&&document.fonts.ready){document.fonts.ready.then(()=>{simple.style.fontSize="";balanceHeadline()})}
const txCount=document.getElementById("txCount")
const summary=document.getElementById("summary")
const grossTrx=document.getElementById("grossTrx")
const grossKrw=document.getElementById("grossKrw")
const priceNote=document.getElementById("priceNote")
const fmt=new Intl.NumberFormat("ko-KR")
const krwFmt=new Intl.NumberFormat("ko-KR",{style:"currency",currency:"KRW",maximumFractionDigits:0})
let trxKrw=0
function toInt(el){const v=parseInt(el.value,10);return isNaN(v)||v<0?0:v}
function recalc(){
  const n=toInt(txCount)||1
  const gross=n*CFG.perUseSave
  summary.textContent=`${n}회 이용 시`
  grossTrx.textContent=`약 ${fmt.format(gross)} TRX 절약`
  if(trxKrw>0){grossKrw.textContent=`약 ${krwFmt.format(Math.round(gross*trxKrw))} 절약`}
}
txCount.addEventListener("input",recalc,{passive:true})
txCount.addEventListener("change",recalc)
recalc()
function loadCachedPrice(){
  try{
    const raw=localStorage.getItem(CFG.priceKey)
    if(!raw)return null
    const {v,t}=JSON.parse(raw)
    if(Date.now()-t>CFG.priceTTL)return null
    return Number(v)||null
  }catch{return null}
}
function saveCachedPrice(v){try{localStorage.setItem(CFG.priceKey,JSON.stringify({v,t:Date.now()}))}catch{}}
function hhmm(d){const h=String(d.getHours()).padStart(2,"0");const m=String(d.getMinutes()).padStart(2,"0");return `${h}:${m}`}
function setPriceNote(){priceNote.textContent=trxKrw>0?`오늘 시세 1 TRX ≈ ${krwFmt.format(trxKrw)} · 업데이트 ${hhmm(new Date())}`:"시세 로드 실패"}
function withTimeout(url,ms){const ctl=new AbortController(),t=setTimeout(()=>ctl.abort(),ms);return fetch(url,{signal:ctl.signal}).finally(()=>clearTimeout(t))}
function fetchPrimary(){return withTimeout("https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=krw",CFG.timeoutMs).then(r=>r.ok?r.json():Promise.reject()).then(d=>{const v=d&&d.tron&&d.tron.krw?Number(d.tron.krw):0;if(v>0){trxKrw=v;saveCachedPrice(trxKrw);setPriceNote();recalc();return true}return false})}
function fetchFallback(){return withTimeout("https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=KRW",CFG.timeoutMs).then(r=>r.ok?r.json():Promise.reject()).then(d=>{const v=d&&d.KRW?Number(d.KRW):0;if(v>0){trxKrw=v;saveCachedPrice(trxKrw);setPriceNote();recalc();return true}return false})}
trxKrw=loadCachedPrice()||0
if(trxKrw>0){setPriceNote();recalc()}else{fetchPrimary().catch(()=>false).then(ok=>{if(!ok)return fetchFallback()}).catch(()=>{}).finally(()=>{if(!trxKrw)setPriceNote()})}
function focusables(root){return Array.from(root.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])')).filter(el=>!el.disabled&&el.offsetParent!==null)}
function focusFirst(){const f=focusables(fab);if(f.length>0)f[0].focus()}
function trapFocus(e){
  if(fab.getAttribute("data-open")!=="1")return
  if(e.key!=="Tab")return
  const f=focusables(fab)
  if(f.length===0)return
  const first=f[0],last=f[f.length-1]
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
}
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&fab.getAttribute("data-open")==="1"){hideFab()}
  trapFocus(e)
})
document.addEventListener("click",e=>{
  const isOpen=fab.getAttribute("data-open")==="1"
  if(!isOpen)return
  if(menu&&menu.classList.contains("open"))return
  const insideFab=fab.contains(e.target)
  const insideTrigger=trigger.contains(e.target)
  if(!insideFab&&!insideTrigger){hideFab()}
})
btn?.addEventListener("click",e=>{
  e.stopPropagation()
  const open=menu.classList.toggle("open")
  btn.setAttribute("aria-expanded",open)
  if(open){const first=menu.querySelector("a");if(first)first.focus()}
})
document.addEventListener("click",()=>{menu?.classList.remove("open");btn?.setAttribute("aria-expanded","false")})
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){menu?.classList.remove("open");btn?.setAttribute("aria-expanded","false")}
  if(!menu||!menu.classList.contains("open"))return
  const items=[...menu.querySelectorAll("a")]
  const i=items.indexOf(document.activeElement)
  if(e.key==="ArrowDown"){e.preventDefault();items[(i+1+items.length)%items.length]?.focus()}
  if(e.key==="ArrowUp"){e.preventDefault();items[(i-1+items.length)%items.length]?.focus()}
  if(e.key==="Home"){e.preventDefault();items[0]?.focus()}
  if(e.key==="End"){e.preventDefault();items[items.length-1]?.focus()}
})
