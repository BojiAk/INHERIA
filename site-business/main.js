// meniu mobil (pe toate paginile)
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.classList.remove('open');
    });
  });
}

// animatii la scroll (optional, dar arata bine)
const items = document.querySelectorAll('.section, .card, .product-card');
if (items.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.12 });

  items.forEach(i => { i.classList.add('reveal'); io.observe(i); });
}

// anul in footer (daca exista)
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// ====== CART (robust: merge și cu coș vechi, și cu qty) ======
const CART_KEY = "cart";

function readCart() {
  let cart;
  try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { cart = []; }

  // Normalizare: acceptă atât ["id","id"], cât și [{id,qty}]
  const normalized = [];

  for (const item of cart) {
    if (typeof item === "string") {
      const existing = normalized.find(x => x.id === item);
      if (existing) existing.qty += 1;
      else normalized.push({ id: item, qty: 1 });
    } else if (item && typeof item === "object") {
      const id = item.id;
      const qty = Number(item.qty ?? 1);
      if (!id) continue;

      const existing = normalized.find(x => x.id === id);
      const q = Number.isFinite(qty) && qty > 0 ? qty : 1;

      if (existing) existing.qty += q;
      else normalized.push({ id, qty: q });
    }
  }

  localStorage.setItem(CART_KEY, JSON.stringify(normalized));
  return normalized;
}

function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty = 1) {
  const cart = readCart();
  const item = cart.find(x => x.id === id);
  const addQty = Number(qty);
  const q = Number.isFinite(addQty) && addQty > 0 ? addQty : 1;

  if (item) item.qty += q;
  else cart.push({ id, qty: q });

  writeCart(cart);
}

function cartCount() {
  const cart = readCart();
  return cart.reduce((sum, x) => sum + (Number(x.qty) || 1), 0);
}

function updateCartBadge() {
  const el = document.querySelector("[data-cart-badge]");
  if (!el) return;

  const c = cartCount();
  if (c > 0) {
    el.textContent = c;
    el.style.display = "inline-flex";
  } else {
    el.textContent = "";
    el.style.display = "none";
  }
}
// ====== FORM WIZARD (formular.html) ======
(function () {
  const form = document.getElementById("inheriaForm");
  if (!form) return;

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const sexSelect = document.getElementById("sex");
  const pregWrap = document.getElementById("pregWrap");
  const err1 = document.getElementById("errStep1");
  const err2 = document.getElementById("errStep2");

  let current = 1;

  function showStep(n) {
    current = n;
    steps.forEach(s => {
      const stepNo = Number(s.dataset.step);
      s.hidden = stepNo !== n;
    });
    if (err1) err1.textContent = "";
    if (err2) err2.textContent = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateStep(stepNo) {
    const stepEl = steps.find(s => Number(s.dataset.step) === stepNo);
    if (!stepEl) return true;

    const requiredFields = stepEl.querySelectorAll("input[required], select[required], textarea[required]");
    for (const el of requiredFields) {
      if (el.type === "checkbox") {
        if (!el.checked) return false;
      } else if (!el.value || !String(el.value).trim()) {
        return false;
      }
    }
    return true;
  }

  // Toggle “pregnant” only for F
  function togglePreg() {
    if (!pregWrap) return;
    pregWrap.hidden = !(sexSelect && sexSelect.value === "F");
  }
  if (sexSelect) sexSelect.addEventListener("change", togglePreg);
  togglePreg();

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!validateStep(1)) {
        if (err1) err1.textContent = "Completează toate câmpurile obligatorii (*) înainte să continui.";
        return;
      }
      showStep(2);
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => showStep(1));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateStep(2)) {
      if (err2) err2.textContent = "Completează toate câmpurile obligatorii (*) și bifează acordul.";
      return;
    }

    // Salvează local (demo pentru concurs)
    const data = Object.fromEntries(new FormData(form).entries());
    data.submittedAt = new Date().toISOString();
    localStorage.setItem("inheria_form_last", JSON.stringify(data));

    // Arată step 3 (success)
    showStep(3);
  });

  // start
  showStep(1);
})();
