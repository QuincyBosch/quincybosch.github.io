/* ==========================================================
   Renders the page from window.PROFILE and runs the effects.
   You shouldn't need to edit this file — see js/profile.js.
   ========================================================== */
(() => {
  "use strict";

  const P = window.PROFILE || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const esc = (v) =>
    String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const has = (a) => Array.isArray(a) && a.length > 0;

  const STROKE = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = {
    github:
      '<path fill="currentColor" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>',
    linkedin:
      '<path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
    discord:
      '<path fill="currentColor" d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>',
    twitch:
      '<path fill="currentColor" d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>',
    steam:
      '<path fill="currentColor" d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.063 0 .125.004.188.006l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25a2.551 2.551 0 0 0 3.337-3.324 2.547 2.547 0 0 0-3.255-1.413l1.523.63a1.878 1.878 0 0 1-1.446 3.467zm11.415-9.303a3.019 3.019 0 0 0-3.015-3.015 3.015 3.015 0 1 0 3.015 3.015zm-5.273-.005a2.264 2.264 0 1 1 4.531 0 2.265 2.265 0 0 1-4.531 0z"/>',
    x: '<path fill="currentColor" d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"/>',
    email: `<rect x="3" y="5" width="18" height="14" rx="2" ${STROKE}/><path d="m3 7 9 6 9-6" ${STROKE}/>`,
    website: `<circle cx="12" cy="12" r="9" ${STROKE}/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" ${STROKE}/>`,
    resume: `<path d="M6 2h9l5 5v15H6z" ${STROKE}/><path d="M14 2v6h6M9 13h8M9 17h8" ${STROKE}/>`,
    external: `<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" ${STROKE}/>`,
    play: '<path fill="currentColor" d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/>',
  };
  const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.website}</svg>`;
  const tags = (list) => (has(list) ? `<ul class="tags">${list.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>` : "");
  const extLink = (url) => (/^https?:/i.test(url) ? ' target="_blank" rel="noopener"' : "");

  const initials = (P.name || "?").split(/\s+/).filter(Boolean).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  function hideSection(id) {
    const section = document.getElementById(id);
    if (section) section.hidden = true;
    $$(`.nav-links a[href="#${id}"]`).forEach((a) => (a.parentElement.hidden = true));
  }

  /* ---------- Rendering ---------- */
  function renderMeta() {
    if (P.name) document.title = P.title ? `${P.name} — ${P.title.replace(/[[\]]/g, "")}` : P.name;
    $("#logo-initials").textContent = initials;
    $("#footer-name").textContent = P.name || "";
    $("#year").textContent = new Date().getFullYear();
  }

  function renderHero() {
    $("#hero-name").textContent = P.name || "";
    $("#hero-script").textContent = P.heroScript || "";
    $("#hero-location").textContent = P.location ? `◆ ${P.location} ◆` : "";
    $("#hero-typed-sr").textContent = (P.taglines || []).join(". ");
    if (P.resumeUrl) {
      $(".hero-cta").insertAdjacentHTML(
        "beforeend",
        `<a class="btn" href="${esc(P.resumeUrl)}" download>${icon("resume")}Résumé</a>`
      );
    }
  }

  function renderAbout() {
    const photo = P.photo
      ? `<img src="${esc(P.photo)}" alt="Portrait of ${esc(P.name)}" loading="lazy">`
      : `<div class="initials" aria-hidden="true">${esc(initials)}</div>`;
    const facts = [
      P.location && `<li><b>LOC</b>${esc(P.location)}</li>`,
      P.title && `<li><b>CLASS</b>${esc(P.title)}</li>`,
    ].filter(Boolean).join("");
    const stats = has(P.stats)
      ? `<div class="stats">${P.stats.map((s) => `<div class="stat"><div class="stat-value">${esc(s.value)}</div><div class="stat-label">${esc(s.label)}</div></div>`).join("")}</div>`
      : "";

    $("#about-body").innerHTML = `
      <div class="avatar-col">
        <div class="avatar">${photo}</div>
        <p class="avatar-label">PLAYER 1</p>
      </div>
      <div class="about-text panel">
        <p class="about-role">${esc(P.title)}</p>
        ${(P.summary || []).map((p) => `<p>${esc(p)}</p>`).join("")}
        ${facts ? `<ul class="facts">${facts}</ul>` : ""}
        ${stats}
      </div>`;
  }

  function renderSkills() {
    if (!has(P.skills)) return hideSection("skills");
    $("#skills-body").innerHTML = P.skills.map((group) => {
      const items = (group.items || []).map((s) => (typeof s === "string" ? { name: s } : s));
      const leveled = items.filter((s) => typeof s.level === "number");
      const plain = items.filter((s) => typeof s.level !== "number");
      const meters = leveled.map((s) => {
        const filled = Math.max(0, Math.min(10, Math.round(s.level / 10)));
        const segs = Array.from({ length: 10 }, (_, i) =>
          `<i class="${i < filled ? "on" : ""}" style="--h:${185 + Math.round((145 * i) / 9)};--d:${(i * 0.06).toFixed(2)}s"></i>`
        ).join("");
        return `<div class="skill">
            <span class="skill-name">${esc(s.name)}</span>
            <span class="skill-level">LV.${filled}</span>
            <div class="meter" role="img" aria-label="${esc(s.name)}: level ${filled} of 10">${segs}</div>
          </div>`;
      }).join("");
      return `<div class="panel reveal">
          <h3 class="panel-title">${esc(group.group)}</h3>
          ${meters}
          ${tags(plain.map((s) => s.name))}
        </div>`;
    }).join("");
  }

  function renderExperience() {
    if (!has(P.experience)) return hideSection("experience");
    $("#experience-body").innerHTML = P.experience.map((job) => `
      <li class="job panel reveal">
        <p class="job-when">${esc(job.start)}${job.end ? ` — ${esc(job.end)}` : ""}</p>
        <h3 class="job-role">${esc(job.role)} <span class="job-company">@ ${esc(job.company)}</span></h3>
        ${job.location ? `<p class="job-where">${esc(job.location)}</p>` : ""}
        ${has(job.bullets) ? `<ul class="bullets">${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
        ${tags(job.tech)}
      </li>`).join("");
  }

  function renderProjects() {
    if (!has(P.projects)) return hideSection("projects");
    const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
    $("#projects-body").innerHTML = P.projects.map((p) => {
      const links = [
        p.repo && `<a class="link" href="${esc(p.repo)}"${extLink(p.repo)}>${icon("github")}Code</a>`,
        p.demo && `<a class="link" href="${esc(p.demo)}"${extLink(p.demo)}>${icon(p.demoLabel === "Play" ? "play" : "external")}${esc(p.demoLabel || "Live")}</a>`,
      ].filter(Boolean).join("");
      return `<article class="window reveal">
          <div class="window-bar" aria-hidden="true">
            <span class="dots"><i></i><i></i><i></i></span>
            <span class="window-title">${esc(slug(p.name) || "project")}.exe</span>
          </div>
          <div class="window-body">
            <h3>${esc(p.name)}</h3>
            <p>${esc(p.description)}</p>
            ${tags(p.tech)}
            ${links ? `<div class="links">${links}</div>` : ""}
          </div>
        </article>`;
    }).join("");
  }

  function renderEducation() {
    if (!has(P.education) && !has(P.certifications)) return hideSection("education");
    const when = (a, b) => [a, b].filter(Boolean).map(esc).join(" — ");
    const edu = has(P.education)
      ? `<div class="panel reveal"><h3 class="panel-title">Education</h3><ul class="edu-list">${P.education.map((e) => `
          <li class="edu-item"><p class="when">${when(e.start, e.end)}</p><h3>${esc(e.degree)}</h3><p>${esc(e.school)}</p></li>`).join("")}</ul></div>`
      : "";
    const certs = has(P.certifications)
      ? `<div class="panel reveal"><h3 class="panel-title">Certifications</h3><ul class="edu-list">${P.certifications.map((c) => `
          <li class="edu-item"><p class="when">${esc(c.year)}</p><h3>${esc(c.name)}</h3><p>${esc(c.issuer)}</p></li>`).join("")}</ul></div>`
      : "";
    $("#education-body").innerHTML = edu + certs;
  }

  function renderGaming() {
    const G = P.gaming || {};
    if (!has(G.games)) return hideSection("gaming");
    const twitch = G.twitch
      ? `<a class="btn btn--twitch" href="${esc(G.twitch)}"${extLink(G.twitch)}>${icon("twitch")}Watch me on Twitch</a>`
      : "";
    const games = G.games.map((g, i) => `
      <li class="game reveal" style="--i:${i}">
        <div class="game-cover">
          ${g.image ? `<img src="${esc(g.image)}" alt="${esc(g.name)} cover art" loading="lazy" width="300" height="450">` : ""}
        </div>
        <p class="game-name">${esc(g.name)}</p>
      </li>`).join("");
    $("#gaming-body").innerHTML = `
      <div class="gaming-intro reveal">
        ${G.blurb ? `<p>${esc(G.blurb)}</p>` : ""}
        ${twitch}
      </div>
      <ul class="games">${games}</ul>`;
  }

  function renderContact() {
    const mail = P.email ? `<a class="btn" href="mailto:${esc(P.email)}">${icon("email")}Send a message</a>` : "";
    const socials = has(P.socials)
      ? `<ul class="socials">${P.socials.map((s) => `
          <li><a class="social" href="${esc(s.url)}"${extLink(s.url)} aria-label="${esc(s.label || s.type)}" title="${esc(s.label || s.type)}">${icon(s.type)}</a></li>`).join("")}</ul>`
      : "";
    $("#contact-body").innerHTML = `
      ${P.contactBlurb ? `<p class="contact-blurb">${esc(P.contactBlurb)}</p>` : ""}
      ${mail}
      ${socials}`;
  }

  /* ---------- Effects ---------- */
  function typewriter(el, lines) {
    if (!has(lines)) return;
    if (reduceMotion) { el.textContent = lines[0]; return; }
    let line = 0, chars = 0, deleting = false;
    const tick = () => {
      const text = lines[line];
      chars += deleting ? -1 : 1;
      el.textContent = text.slice(0, chars);
      let delay = deleting ? 30 : 65;
      if (!deleting && chars >= text.length) { deleting = true; delay = 1900; }
      else if (deleting && chars <= 0) { deleting = false; line = (line + 1) % lines.length; delay = 450; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 600);
  }

  function starfield(canvas) {
    const ctx = canvas.getContext("2d");
    let stars = [], w = 0, h = 0, visible = true;

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const twinkle = reduceMotion ? 0.8 : 0.35 + 0.65 * Math.abs(Math.sin(s.phase + t * s.speed));
        ctx.globalAlpha = twinkle * (1 - (s.y / h) * 0.75);
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: Math.round((w * h) / 3800) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.002 + 0.0004,
        color: Math.random() < 0.15 ? "#9ff6ff" : Math.random() < 0.15 ? "#ffb3e6" : "#ffffff",
      }));
      draw(performance.now());
    };
    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) return;

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(canvas);
    }
    const loop = (t) => { if (visible) draw(t); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }

  function reveals() {
    const els = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) return els.forEach((el) => el.classList.add("in"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  function navigation() {
    const nav = $("#nav"), toggle = $("#nav-toggle"), links = $("#nav-links");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const setOpen = (open) => {
      links.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
    links.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

    if (!("IntersectionObserver" in window)) return;
    const anchors = $$(".nav-links a");
    const setActive = (id) => anchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("#top, main .section").forEach((s) => spy.observe(s));
    // The last section is often too short to reach the middle of the screen
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive("contact");
    }, { passive: true });
  }

  function crtToggle() {
    const btn = $("#crt-toggle");
    const apply = (on) => {
      document.body.classList.toggle("no-crt", !on);
      btn.setAttribute("aria-pressed", String(on));
    };
    let on = true;
    try { on = localStorage.getItem("crt") !== "off"; } catch (_) { /* storage unavailable */ }
    apply(on);
    btn.addEventListener("click", () => {
      on = !on;
      apply(on);
      try { localStorage.setItem("crt", on ? "on" : "off"); } catch (_) { /* storage unavailable */ }
    });
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  function konami() {
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let pos = 0;
    document.addEventListener("keydown", (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
      if (pos === code.length) {
        pos = 0;
        const turbo = document.body.classList.toggle("turbo");
        toast(turbo ? "TURBO MODE ENGAGED" : "TURBO MODE OFF");
      }
    });
  }

  renderMeta();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderGaming();
  renderContact();

  typewriter($("#hero-typed"), P.taglines);
  starfield($("#stars"));
  reveals();
  navigation();
  crtToggle();
  konami();
})();
