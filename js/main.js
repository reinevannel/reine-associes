(function () {
  "use strict";

  const EXP_ICONS = ["pawn", "knight", "bishop", "rook", "queen", "scales"];
  let lang = localStorage.getItem("reine-lang") === "en" ? "en" : "fr";
  let exp = 0;
  let quote = 0;
  let openCase = null;

  function copy() {
    return window.SITE[lang];
  }

  function byPath(obj, path) {
    return String(path).split(".").reduce(function (o, key) {
      return o == null ? o : o[key];
    }, obj);
  }

  function qa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function q(sel, root) {
    return (root || document).querySelector(sel);
  }

  function icon(name) {
    const open =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">';
    const paths = {
      pawn: '<circle cx="12" cy="7" r="2.2"></circle><path d="M9 11.2h6M8 20h8M10 14.5c-1.6.6-2.6 2-3 5.5h10c-.4-3.5-1.4-4.9-3-5.5"></path>',
      knight: '<path d="M8 20h9M9 20l1-6 2 1 1-3-3-4 2-2c2 0 4 2 4 5 1.2.4 2 1.6 2 3.2"></path>',
      bishop:
        '<path d="M12 3v2M9.5 8.5c0-2 1-3.5 2.5-3.5s2.5 1.5 2.5 3.5c0 2-1.2 3-2.5 4.2C10.7 11.5 9.5 10.5 9.5 8.5zM8 20h8l-1.2-5h-5.6z"></path>',
      rook: '<path d="M7 7h2v2h2V7h2v2h2V7h2v5l-1 1v7H8v-7l-1-1z"></path>',
      queen:
        '<path d="M5 18h14l-1.2-8-3.3 3.2L12 6l-2.5 7.2L6.2 10z"></path><circle cx="12" cy="5" r="1" fill="currentColor"></circle>',
      star: '<path d="M12 3.5l2.1 4.6 5 .6-3.7 3.4.9 5L12 15.2 7.7 17.1l.9-5L4.9 8.7l5-.6z"></path>',
      crown: '<path d="M4 16h16l-1.2-8-3.8 3.2L12 5l-3 6.2L5.2 8z"></path>',
      globe: '<circle cx="12" cy="12" r="8"></circle><path d="M4 12h16M12 4c2.2 2.4 2.2 13.6 0 16M12 4c-2.2 2.4-2.2 13.6 0 16"></path>',
      bolt: '<path d="M13 3L6 13h5l-1 8 8-12h-5z"></path>',
      lock: '<rect x="6" y="11" width="12" height="9" rx="1"></rect><path d="M9 11V8a3 3 0 016 0v3"></path>',
      scales: '<path d="M12 4v14M8 18h8M12 7l-5 6h4M12 7l5 6h-4"></path>',
      clock: '<circle cx="12" cy="12" r="7"></circle><path d="M12 8v4l2.5 2"></path>',
    };
    return open + (paths[name] || paths.clock) + "</svg>";
  }

  function applyI18n() {
    const data = copy();
    document.documentElement.lang = lang;
    document.title = data.metaTitle;
    const desc = q('meta[name="description"]');
    if (desc) desc.setAttribute("content", data.metaDesc);

    qa("[data-i18n]").forEach(function (node) {
      const value = byPath(data, node.getAttribute("data-i18n"));
      if (typeof value === "string") node.textContent = value;
    });
    qa("[data-i18n-placeholder]").forEach(function (node) {
      const value = byPath(data, node.getAttribute("data-i18n-placeholder"));
      if (typeof value === "string") node.setAttribute("placeholder", value);
    });
    qa("[data-i18n-alt]").forEach(function (node) {
      const value = byPath(data, node.getAttribute("data-i18n-alt"));
      if (typeof value === "string") node.setAttribute("alt", value);
    });

    qa("[data-lang]").forEach(function (btn) {
      const on = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.setAttribute("aria-current", on ? "true" : "false");
    });

    const ogTitle = q('meta[property="og:title"]');
    const ogDesc = q('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute("content", data.metaTitle);
    if (ogDesc) ogDesc.setAttribute("content", data.metaDesc);
    document.documentElement.setAttribute("lang", lang);

    const drawer = q("#nav-drawer");
    const menuBtn = q("#menu-btn");
    if (menuBtn && drawer) menuBtn.textContent = drawer.hidden ? data.menu : data.menuClose;

    const nav = q("#nav-main");
    if (nav) nav.setAttribute("aria-label", lang === "fr" ? "Navigation principale" : "Main");
    const drawerNav = q("#drawer-nav");
    if (drawerNav) drawerNav.setAttribute("aria-label", lang === "fr" ? "Navigation mobile" : "Mobile");
    qa(".lang-switch").forEach(function (group) {
      group.setAttribute("aria-label", lang === "fr" ? "Langue" : "Language");
    });
    const legalNav = q("#legal-nav");
    if (legalNav) legalNav.setAttribute("aria-label", lang === "fr" ? "Informations légales" : "Legal");

    renderExpertise();
    renderQuote();
    updateCases();
  }

  function renderExpertise() {
    const data = copy();
    const item = data.expertise.items[exp];
    q("#exp-ico").innerHTML = icon(EXP_ICONS[exp]);
    q("#exp-title").textContent = item.title;
    q("#exp-body").textContent = item.body;
    q("#exp-keys").textContent = "— " + data.expertise.keys;
    q("#exp-points").innerHTML = item.points
      .map(function (point) {
        return "<li>" + point.replace(/&/g, "&" + "amp;").replace(/</g, "&" + "lt;") + "</li>";
      })
      .join("");
    q("#exp-panel").setAttribute("aria-labelledby", "tab-" + exp);
    qa(".expertise-nav button").forEach(function (btn, index) {
      const on = index === exp;
      btn.setAttribute("aria-selected", on ? "true" : "false");
      btn.tabIndex = on ? 0 : -1;
    });
  }

  function renderQuote() {
    const data = copy();
    const item = data.quotes.items[quote];
    q("#quote-text").textContent = item.text;
    q("#quote-name").textContent = item.name;
    q("#quote-role").textContent = item.role;
    q("#quote-tag").textContent = item.tag;
    qa(".testimonial-list button").forEach(function (btn, index) {
      btn.setAttribute("aria-pressed", index === quote ? "true" : "false");
    });
  }

  function updateCases() {
    const data = copy();
    qa(".case-item").forEach(function (article) {
      const id = article.getAttribute("data-case");
      const open = openCase === id;
      const item = data.cases.items.filter(function (entry) {
        return entry.id === id;
      })[0];
      article.classList.toggle("is-open", open);
      const body = q(".case-body", article);
      if (body) body.hidden = !open;
      const btn = q(".case-sum", article);
      const mark = q(".case-toggle", article);
      if (mark) mark.textContent = open ? "×" : "+";
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        (open ? data.cases.close : data.cases.open) + " : " + (item ? item.title : "")
      );
    });
  }

  function bind() {
    qa("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });

    const menuBtn = q("#menu-btn");
    const drawer = q("#nav-drawer");

    function closeDrawer() {
      if (!drawer || !menuBtn) return;
      drawer.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = copy().menu;
    }

    function openDrawer() {
      if (!drawer || !menuBtn) return;
      drawer.hidden = false;
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.textContent = copy().menuClose;
      const first = q("#nav-drawer a");
      if (first) first.focus();
    }

    menuBtn.addEventListener("click", function () {
      if (drawer.hidden) openDrawer();
      else closeDrawer();
    });
    qa("#nav-drawer a").forEach(function (link) {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (drawer && !drawer.hidden) {
        closeDrawer();
        menuBtn.focus();
      }
    });

    qa(".expertise-nav button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        exp = Number(btn.getAttribute("data-exp"));
        renderExpertise();
      });
      btn.addEventListener("keydown", function (event) {
        const tabs = qa(".expertise-nav button");
        const i = tabs.indexOf(btn);
        if (i < 0) return;
        let next = i;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (i + 1) % tabs.length;
        else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault();
        exp = Number(tabs[next].getAttribute("data-exp"));
        renderExpertise();
        tabs[next].focus();
      });
    });

    const caseList = q(".case-list");
    if (caseList) {
      caseList.addEventListener("click", function (event) {
        const btn = event.target.closest(".case-sum");
        if (!btn || !caseList.contains(btn)) return;
        const id = btn.getAttribute("data-case");
        openCase = openCase === id ? null : id;
        updateCases();
      });
    }

    qa(".testimonial-list button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        quote = Number(btn.getAttribute("data-quote"));
        renderQuote();
      });
    });

    const form = q("#contact-form");
    const success = q("#form-success");
    const error = q("#form-error");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        error.hidden = false;
        error.textContent = copy().contact.err;
        form.reportValidity();
        return;
      }
      error.hidden = true;
      form.classList.add("is-sent");
      form.hidden = true;
      success.hidden = false;
      success.classList.add("is-visible");
      success.focus();
    });
    q("#form-again").addEventListener("click", function () {
      form.reset();
      const planned = form.querySelector('input[value="planifiee"]');
      if (planned) planned.checked = true;
      success.classList.remove("is-visible");
      success.hidden = true;
      form.classList.remove("is-sent");
      form.hidden = false;
      const name = q("#name");
      if (name) name.focus();
    });

    const dialog = q("#legal-dialog");
    qa("[data-legal]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.getAttribute("data-legal");
        const data = copy();
        q("#legal-title").textContent = btn.textContent;
        q("#legal-body").textContent = data.legal[key];
        q("#legal-close").textContent = data.legal.close;
        dialog.showModal();
      });
    });
    q("#legal-close").addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pre = q("#preloader");
    const root = q("#site-root") || q(".site-root");

    function dismissPreloader() {
      if (!pre || pre.classList.contains("is-done")) return;
      pre.classList.add("is-done");
      pre.setAttribute("aria-hidden", "true");
      if (root) {
        root.setAttribute("aria-hidden", "false");
        root.removeAttribute("inert");
      }
    }

    window.setTimeout(dismissPreloader, reduce ? 400 : 2200);
    q("#preloader-skip").addEventListener("click", dismissPreloader);

    bindMethodLine();
    bindCanvas(reduce);
  }

  function setLang(next) {
    if (next !== "fr" && next !== "en") return;
    lang = next;
    localStorage.setItem("reine-lang", next);
    applyI18n();
  }

  function bindMethodLine() {
    const el = q(".method-track");
    const section = document.getElementById("methode");
    if (!el || !section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let started = false;

    function paint(progress) {
      el.style.setProperty("--line", String(progress));
      qa(".method-steps > li", el).forEach(function (item, index, list) {
        item.classList.toggle("is-lit", progress >= (index + 0.42) / list.length);
      });
    }

    if (reduce) {
      paint(1);
      return;
    }

    function play() {
      if (started) return;
      started = true;
      const duration = 1400;
      let t0 = null;
      function tick(now) {
        if (t0 == null) t0 = now;
        const t = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        paint(eased);
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (typeof IntersectionObserver === "undefined") {
      play();
      return;
    }

    const io = new IntersectionObserver(
      function (entries) {
        if (entries[0] && entries[0].isIntersecting) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(section);
  }

  function bindCanvas(reduce) {
    const canvas = q("#motif");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dots = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      dots = [];
      const count = Math.min(reduce ? 12 : 28, Math.floor((w * h) / 52000));
      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.5 + Math.random() * 1.2,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
        });
      }
    }

    function drawScales(x, y, s, a) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(s, s);
      ctx.strokeStyle = "rgba(201,168,76," + a + ")";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, -28);
      ctx.lineTo(0, 26);
      ctx.moveTo(-10, 26);
      ctx.lineTo(10, 26);
      ctx.moveTo(-22, -8);
      ctx.lineTo(22, -8);
      ctx.moveTo(-22, -8);
      ctx.lineTo(-28, 8);
      ctx.lineTo(-16, 8);
      ctx.closePath();
      ctx.moveTo(22, -8);
      ctx.lineTo(28, 8);
      ctx.lineTo(16, 8);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    function frame(time) {
      ctx.clearRect(0, 0, w, h);
      const drift = reduce ? 0 : time * 0.00008;
      ctx.strokeStyle = "rgba(201,168,76,0.14)";
      ctx.fillStyle = "rgba(201,168,76,0.32)";
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        if (!reduce) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < 0 || d.x > w) d.vx *= -1;
          if (d.y < 0 || d.y > h) d.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dist = Math.hypot(d.x - b.x, d.y - b.y);
          if (dist < 130) {
            ctx.globalAlpha = (1 - dist / 130) * 0.45;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      const pulse = 0.07 + Math.sin(time * 0.0004) * 0.03;
      drawScales(w * 0.12, h * 0.28 + Math.sin(drift * 40) * 8, 1.1, pulse);
      drawScales(w * 0.86, h * 0.62, 0.85, pulse * 0.8);
      ctx.strokeStyle = "rgba(201,168,76,0.08)";
      ctx.beginPath();
      ctx.arc(w * 0.78, h * 0.22, 70 + Math.sin(time * 0.0003) * 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(w * 0.22, h * 0.74, 46, 0, Math.PI * 2);
      ctx.stroke();
      if (!reduce && !document.hidden) raf = requestAnimationFrame(frame);
    }

    let resizeTimer = 0;
    function onResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 120);
    }

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!reduce) {
        raf = requestAnimationFrame(frame);
      }
    });
  }

  bind();
  applyI18n();
})();
