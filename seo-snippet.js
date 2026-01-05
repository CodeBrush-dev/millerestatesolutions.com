// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.millerestatesolutions.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.millerestatesolutions.com/","title_tag":"Estate Liquidation Minnesota | Miller Estate Solutions","meta_description":"Family-owned estate liquidator providing estate liquidation, downsizing, cleanouts, and as-is home sales across Minnesota. Compassionate, full-service solutions since 2001."},{"page_url":"https://www.millerestatesolutions.com/about-us","title_tag":"Family-Owned Estate Liquidator | Miller Estate Solutions","meta_description":"Family-owned estate liquidator in Minnesota certified by the American Society of Estate Liquidators. Expert personal property liquidation, estate management and downsizing."},{"page_url":"https://www.millerestatesolutions.com/downsizing","title_tag":"Downsizing Services Minnesota | Miller Estate Solutions","meta_description":"Home downsizing and pre-listing thin-out experts in Minnesota. We sell, donate, recycle, and manage post-move liquidation to maximize value and reduce stress."},{"page_url":"https://www.millerestatesolutions.com/estate-liquidation-cleanout","title_tag":"Cleanout Services Minnesota | Miller Estate Solutions","meta_description":"Efficient estate liquidation and cleanout services across Minnesota. We empty homes fast, maximize net proceeds, and handle personal property liquidation with care."},{"page_url":"https://www.millerestatesolutions.com/sales-of-estate","title_tag":"Estate Sale Minnesota | Miller Estate Solutions","meta_description":"Off-site, private estate sales and personal property liquidation to maximize net proceeds. We place items with top vendors and protect your home's privacy in Minnesota."},{"page_url":"https://www.millerestatesolutions.com/sell-your-home-as-is","title_tag":"Sell Home As-Is Minnesota | Miller Estate Solutions","meta_description":"Sell your home as-is in Minnesota — fast, fair buyouts and customized plans. We handle contents, cleanouts, and offer compassionate, full-service estate solutions."},{"page_url":"https://www.millerestatesolutions.com/get-started","title_tag":"Professional Estate Services MN | Miller Estate Solutions","meta_description":"Get started with our full-service estate management: liquidation, downsizing, cleanouts, and as-is home sales in Minnesota. Submit details for a customized plan."},{"page_url":"https://www.millerestatesolutions.com/trust-testimonials","title_tag":"Estate Management Minnesota | Miller Estate Solutions","meta_description":"Read client testimonials about our estate management, liquidation, downsizing and cleanout services in Minnesota. Trusted, family-owned estate liquidator with decades of experience."}],"keywords":["estate liquidation minnesota","downsizing services minnesota","sell home as-is minnesota","cleanout services minnesota","estate sale minnesota","personal property liquidation minnesota","home downsizing minnesota","estate management minnesota","family-owned estate liquidator","professional estate services minnesota"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Miller Estate Solutions",
  "legalName": "Miller Estate Solutions & Services, Inc.",
  "url": "https://www.millerestatesolutions.com/",
  "logo": "https://static.wixstatic.com/media/af3df6_2523434f4cea45d4aef59fd34a9d0a36~mv2.png/v1/fill/w_600,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Miller%20Estate%20-%20Logo-01.png",
  "image": "https://static.wixstatic.com/media/af3df6_2523434f4cea45d4aef59fd34a9d0a36~mv2.png/v1/fill/w_600,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Miller%20Estate%20-%20Logo-01.png",
  "description": "Full-service estate liquidation & sales, downsizing, and cleanout specialists. Now offering as-is house-plus-contents buyouts. The only professional estate liquidator in MN, WI and the Dakotas certified by The American Society of Estate Liquidators. Family-owned and operated since 2001.",
  "telephone": "651-398-3605",
  "email": "info@millerestatesolutions.com",
  "founder": {
    "@type": "Person",
    "name": "Laura K. Miller",
    "jobTitle": "President"
  },
  "foundingDate": "2001",
  "areaServed": [
    "Minnesota",
    "Wisconsin",
    "Eastern Dakotas"
  ],
  "serviceOffered": [
    {
      "@type": "Service",
      "name": "Downsizing",
      "serviceType": "Downsizing",
      "description": "Pre-listing thin out and post-move liquidation: sell, donate, recycle or discard items to prepare a home for market or to liquidate remaining contents after a move."
    },
    {
      "@type": "Service",
      "name": "Estate Liquidation & Cleanout",
      "serviceType": "Estate Liquidation",
      "description": "Efficient off-site liquidation and complete cleanout services for estates including homes, farms, hoarded properties, memory care units, and storage units with the goal of maximizing net proceeds."
    },
    {
      "@type": "Service",
      "name": "Sales of Estate Items",
      "serviceType": "Sales of Estate Items",
      "description": "Off-site sales coordination with vetted selling vendors (physical and online) to maximize exposure and net proceeds for individual items or entire estate contents."
    },
    {
      "@type": "Service",
      "name": "Sell Your Home As-Is",
      "serviceType": "Sell Home As-Is",
      "description": "As-is house-plus-contents buyouts and customized options to purchase properties with or without contents, providing a quick, straightforward sale alternative."
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "651-398-3605",
      "contactType": "customer service",
      "email": "info@millerestatesolutions.com",
      "availableLanguage": "English"
    }
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.millerestatesolutions.com/"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Donna M."
      },
      "datePublished": "2022-08-15",
      "reviewBody": "In my 30 years in the business of trusts and estate settlement, I have never been more pleased than I was to work with Laura Miller. I was impressed with her knowledge of the contents of the home and also impressed with her compassion for the family’s feelings about their loved one’s possessions. I highly recommend Laura for your estate settlement needs."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
