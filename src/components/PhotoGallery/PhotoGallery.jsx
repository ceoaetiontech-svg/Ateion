// PhotoGallery.jsx — Main photo gallery component
// Handles filtering, search, lightbox, animations and keyboard navigation

import { useState, useEffect, useCallback } from "react";
// useState   → manages local component state (active filter, search, lightbox etc.)
// useEffect  → runs side effects (scroll listener, keyboard events, animations)
// useCallback → memoizes functions to prevent unnecessary re-renders

import "./PhotoGallery.css";
// Imports all styles for this component

// ── PHOTOS DATA ──────────────────────────────────────────────────────────────
// Static array of all photo objects shown in the gallery
// Each photo has: id, src (image URL), title, location, category, span (layout size)
const PHOTOS = [

  // ── Workshops category ──
  { id: 1,  src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=750&fit=crop",  title: "Global Workshop 2024",       location: "Mumbai, India",     category: "Workshops", span: "wide"   },
  // span: "wide" → takes full width in the grid layout
  { id: 2,  src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=1100&fit=crop",  title: "Capability Training",        location: "Delhi, India",      category: "Workshops", span: "tall"   },
  // span: "tall" → takes extra height in the grid layout
  { id: 3,  src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&h=800&fit=crop",      title: "Interactive Session",        location: "Bangalore, India",  category: "Workshops", span: "square" },
  // span: "square" → equal width and height in the grid layout

  // ── Awards category ──
  { id: 4,  src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&h=750&fit=crop",  title: "Award Ceremony 2024",        location: "New Delhi, India",  category: "Awards",    span: "wide"   },
  { id: 5,  src: "https://images.unsplash.com/photo-1530538987395-032d1800fdd4?w=800&h=1050&fit=crop",  title: "Top Performer Recognition",  location: "Chennai, India",    category: "Awards",    span: "tall"   },
  { id: 6,  src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=850&h=850&fit=crop",   title: "Certificate Distribution",   location: "Pune, India",       category: "Awards",    span: "square" },

  // ── Students category ──
  { id: 7,  src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1100&h=680&fit=crop",  title: "Students in Action",         location: "Hyderabad, India",  category: "Students",  span: "wide"   },
  { id: 8,  src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=780&h=1100&fit=crop",  title: "Assessment Day",             location: "Kolkata, India",    category: "Students",  span: "tall"   },
  { id: 9,  src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=820&h=820&fit=crop",   title: "Team Collaboration",         location: "Ahmedabad, India",  category: "Students",  span: "square" },

  // ── Global category ──
  { id: 10, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1300&h=750&fit=crop",  title: "International Outreach",     location: "Dubai, UAE",        category: "Global",    span: "wide"   },
  { id: 11, src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=1080&fit=crop",  title: "Global Partnership",         location: "London, UK",        category: "Global",    span: "tall"   },
  { id: 12, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=820&h=820&fit=crop",   title: "World Education Summit",     location: "Singapore",         category: "Global",    span: "square" },

  // ── Partners category ──
  { id: 13, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=720&fit=crop",     title: "Advisory Board Meeting",     location: "Mumbai, India",     category: "Partners",  span: "wide"   },
  { id: 14, src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=1100&fit=crop",     title: "Institutional Partnership",  location: "New Delhi, India",  category: "Partners",  span: "tall"   },
  { id: 15, src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=850&h=850&fit=crop",   title: "Collaboration Summit",       location: "Bangalore, India",  category: "Partners",  span: "square" },

  // ── Media category ──
  { id: 16, src: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&h=750&fit=crop",  title: "Press Conference",           location: "Mumbai, India",     category: "Media",     span: "wide"   },
  { id: 17, src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=1050&fit=crop",  title: "Media Feature",              location: "Delhi, India",      category: "Media",     span: "tall"   },
  { id: 18, src: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=820&h=820&fit=crop",   title: "News Coverage",              location: "Bangalore, India",  category: "Media",     span: "square" },
];

// ── CATEGORIES ───────────────────────────────────────────────────────────────
// Dynamically builds category list from PHOTOS array
// "All" is added manually at the start
// Array.from(new Set(...)) → removes duplicate category names
const CATEGORIES = ["All", ...Array.from(new Set(PHOTOS.map(p => p.category)))];

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function PhotoGallery() {

  // Tracks which category filter button is currently active (default: "All")
  const [activeCategory, setActiveCategory] = useState("All");

  // Tracks which photo is open in the lightbox (null = lightbox closed)
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Tracks which photo IDs are visible (used for staggered fade-in animation)
  const [visibleIds, setVisibleIds] = useState([]);

  // Tracks the current search input value
  const [searchQuery, setSearchQuery] = useState("");

  // Tracks whether page has been scrolled (used to change header style)
  const [isScrolled, setIsScrolled] = useState(false);

  // ── FILTERED PHOTOS ───────────────────────────────────────────────────────
  // Filters PHOTOS based on active category AND search query
  // Both title and location are searched (case-insensitive)
  const filtered = PHOTOS.filter(p => {
    const matchCat    = activeCategory === "All" || p.category === activeCategory;
    // matchCat → true if "All" selected OR photo belongs to active category

    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.location.toLowerCase().includes(searchQuery.toLowerCase());
    // matchSearch → true if title or location contains the search query

    return matchCat && matchSearch;
    // Only include photos that match BOTH category AND search
  });

  // ── STAGGERED ANIMATION EFFECT ────────────────────────────────────────────
  // Runs whenever activeCategory or searchQuery changes
  // Clears visible IDs then adds them back one by one with 70ms delay
  // Creates a staggered fade-in effect for the gallery items
  useEffect(() => {
    setVisibleIds([]);
    // Reset all photos to invisible first

    filtered.forEach((p, i) => {
      setTimeout(() => setVisibleIds(v => [...v, p.id]), i * 70);
      // Each photo becomes visible 70ms after the previous one
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, searchQuery]);
  // Dependency: re-run when filter or search changes

  // ── SCROLL LISTENER ───────────────────────────────────────────────────────
  // Adds/removes scroll event listener on mount/unmount
  // Sets isScrolled = true when page scrolled more than 10px
  // Used to apply a scrolled style to the header (e.g. blur/shadow)
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 10);
    // fn → checks if user has scrolled more than 10px

    window.addEventListener("scroll", fn);
    // Attach scroll listener when component mounts

    return () => window.removeEventListener("scroll", fn);
    // Cleanup → remove scroll listener when component unmounts
  }, []);
  // Empty dependency array → runs only once on mount

  // ── KEYBOARD NAVIGATION ───────────────────────────────────────────────────
  // Handles keyboard events when lightbox is open
  // ArrowRight → next photo | ArrowLeft → previous photo | Escape → close
  // useCallback → memoizes function, only re-creates when dependencies change
  const handleKey = useCallback((e) => {
    if (lightboxIndex === null) return;
    // Do nothing if lightbox is closed

    if (e.key === "ArrowRight") setLightboxIndex(i => (i + 1) % filtered.length);
    // Go to next photo (wraps around to first if at end)

    if (e.key === "ArrowLeft")  setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
    // Go to previous photo (wraps around to last if at start)

    if (e.key === "Escape")     setLightboxIndex(null);
    // Close lightbox on Escape key

  }, [lightboxIndex, filtered.length]);
  // Re-create function when lightboxIndex or filtered.length changes

  // ── KEYBOARD EVENT LISTENER ───────────────────────────────────────────────
  // Attaches handleKey to window keydown event
  // Cleans up on unmount or when handleKey changes
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // ── BODY SCROLL LOCK ─────────────────────────────────────────────────────
  // Prevents background page from scrolling when lightbox is open
  // Restores scroll when lightbox closes
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    // "hidden" → locks scroll | "" → restores scroll

    return () => { document.body.style.overflow = ""; };
    // Cleanup → always restore scroll on unmount
  }, [lightboxIndex]);

  // ── LIGHTBOX CONTROLS ─────────────────────────────────────────────────────
  const openLightbox  = (i) => setLightboxIndex(i);
  // Opens lightbox at clicked photo index

  const closeLightbox = () => setLightboxIndex(null);
  // Closes lightbox by resetting index to null

  const goNext = (e) => {
    e.stopPropagation();
    // Prevents click from bubbling up to the overlay (which would close lightbox)
    setLightboxIndex(i => (i + 1) % filtered.length);
    // Move to next photo, wrapping around to first
  };

  const goPrev = (e) => {
    e.stopPropagation();
    // Prevents click from bubbling up to the overlay
    setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
    // Move to previous photo, wrapping around to last
  };

  // Gets the currently active photo object from filtered array
  // null if lightbox is closed
  const activePhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  // ── RENDER 
  return (
    <div className="pg-root">
    {/* Root wrapper div — contains entire gallery app */}

      <div className="pg-noise" aria-hidden="true" />
      {/* Decorative noise texture overlay — hidden from screen readers */}

      {/* ── HEADER ── */}
      <header className={`pg-header ${isScrolled ? "pg-header--scrolled" : ""}`}>
      {/* Adds "pg-header--scrolled" class when user scrolls down — triggers header style change */}

        <div className="pg-header-brand">
        {/* Left side of header — logo and brand name */}
          <span className="pg-brand-icon">◈</span>
          {/* Decorative brand icon */}
          <div>
            <span className="pg-brand-name">GCO</span>
            {/* Organization name */}
            <span className="pg-brand-tagline">Proof Gallery</span>
            {/* Tagline shown below brand name */}
          </div>
        </div>

        <div className="pg-header-controls">
        {/* Right side of header — search input and photo count */}

          <label className="pg-search-label">
          {/* Wrapping in label makes the SVG icon clickable to focus the input */}

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            {/* Search icon SVG */}

            <input
              type="text"
              placeholder="Search events or locations…"
              value={searchQuery}
              // Controlled input — value tied to searchQuery state
              onChange={e => setSearchQuery(e.target.value)}
              // Updates searchQuery state on every keystroke
            />
          </label>

          <span className="pg-photo-count">{filtered.length} photos</span>
          {/* Shows count of currently visible/filtered photos */}
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="pg-hero">
      {/* Large banner section at top of gallery */}

        <div className="pg-hero-lines" aria-hidden="true"><span /><span /><span /></div>
        {/* Decorative animated lines — purely visual, hidden from screen readers */}

        <h1 className="pg-hero-title">Our <em>Impact</em> in Action</h1>
        {/* Main hero heading — "Impact" is italicized for emphasis */}

        <p className="pg-hero-sub">
          Witness the Global Capability Olympiad transforming education — through workshops, awards, student achievements, and worldwide partnerships.
        </p>
        {/* Hero subtitle/description */}

        <div className="pg-hero-stats">
        {/* Row of stat numbers shown in hero section */}
          <div className="pg-stat"><span>500+</span><p>Events Hosted</p></div>
          <div className="pg-stat"><span>50K+</span><p>Students Reached</p></div>
          <div className="pg-stat"><span>30+</span><p>Countries</p></div>
          <div className="pg-stat"><span>200+</span><p>Partner Institutions</p></div>
        </div>
      </section>

      {/* ── CATEGORY FILTER NAV ── */}
      <nav className="pg-filters">
      {/* Navigation bar with category filter buttons */}

        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`pg-filter-btn ${activeCategory === cat ? "pg-filter-btn--active" : ""}`}
            // Adds "active" class to currently selected category button
            onClick={() => setActiveCategory(cat)}
            // Updates active category when button is clicked
          >
            {cat}
            {/* Category name label */}
            <span className="pg-filter-pill">
              {cat === "All" ? PHOTOS.length : PHOTOS.filter(p => p.category === cat).length}
              {/* Shows total count: "All" shows total photos, others show category count */}
            </span>
          </button>
        ))}
      </nav>

      {/* ── PHOTO GRID ── */}
      <main className="pg-grid">
      {/* Main masonry/grid layout containing all photo cards */}

        {filtered.length === 0 ? (
          // Shows empty state when no photos match filter/search
          <div className="pg-empty">
            <span>No photos found</span>
            <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
              Clear filters
              {/* Resets both search and category filter */}
            </button>
          </div>
        ) : (
          filtered.map((photo, index) => (
            // Maps each filtered photo to a card article element
            <article
              key={photo.id}
              // Unique key for React reconciliation

              className={`pg-item pg-item--${photo.span} ${visibleIds.includes(photo.id) ? "pg-item--visible" : ""}`}
              // pg-item--wide/tall/square → controls grid sizing
              // pg-item--visible → triggers fade-in animation when photo ID is in visibleIds

              style={{ transitionDelay: `${index * 50}ms` }}
              // Staggered animation delay — each card appears 50ms after the previous

              onClick={() => openLightbox(index)}
              // Opens lightbox when photo card is clicked

              onKeyDown={e => e.key === "Enter" && openLightbox(index)}
              // Accessibility — allows keyboard users to open lightbox with Enter key

              tabIndex={0}
              // Makes the article focusable via keyboard Tab

              role="button"
              // Tells screen readers this element is interactive like a button
            >
              <div className="pg-item-img-wrap">
              {/* Wrapper div for image — used for overflow hidden and zoom effect */}
                <img src={photo.src} alt={photo.title} loading="lazy" />
                {/* loading="lazy" → image only loads when near viewport (performance optimization) */}
              </div>

              <div className="pg-item-overlay">
              {/* Dark overlay shown on hover — contains title, location, category */}

                <span className="pg-item-cat">{photo.category}</span>
                {/* Category badge shown at top of overlay */}

                <div className="pg-item-text">
                  <h3>{photo.title}</h3>
                  {/* Photo title */}
                  <p>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    {/* Location pin icon SVG */}
                    {photo.location}
                    {/* Location text */}
                  </p>
                </div>

                <div className="pg-item-expand">
                {/* Expand icon shown in corner of overlay — indicates clickable */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  {/* Expand/fullscreen arrows icon */}
                </div>
              </div>

              <div className="pg-item-corner" />
              {/* Decorative corner accent — purely visual */}

            </article>
          ))
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer className="pg-footer">
        <span className="pg-footer-brand">◈ GCO — Global Capability Olympiad</span>
        {/* Brand name in footer */}
        <p>© {new Date().getFullYear()} — All rights reserved</p>
        {/* Dynamic copyright year — automatically updates each year */}
      </footer>

      {/* ── LIGHTBOX ── */}
      {activePhoto && (
        // Only renders lightbox when a photo is selected (activePhoto is not null)
        <div className="pg-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
        {/* Full screen overlay — clicking outside the panel closes lightbox */}
        {/* role="dialog" + aria-modal → accessibility for screen readers */}

          <div className="pg-lb-panel" onClick={e => e.stopPropagation()}>
          {/* Inner panel — stopPropagation prevents clicks inside from closing lightbox */}

            <div className="pg-lb-topbar">
            {/* Top bar of lightbox — shows counter and action buttons */}

              <span className="pg-lb-counter">{lightboxIndex + 1} / {filtered.length}</span>
              {/* Shows current photo position e.g. "3 / 18" */}

              <div className="pg-lb-actions">
              {/* Download and close buttons */}

                <a className="pg-lb-btn" href={activePhoto.src} download onClick={e => e.stopPropagation()}>
                {/* Download button — links directly to image URL with download attribute */}
                {/* stopPropagation → prevents lightbox from closing when clicking download */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                  {/* Download icon SVG */}
                </a>

                <button className="pg-lb-btn" onClick={closeLightbox}>
                {/* Close button — sets lightboxIndex to null */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  {/* X/close icon SVG */}
                </button>
              </div>
            </div>

            <div className="pg-lb-stage">
            {/* Main image area with prev/next navigation buttons */}

              <button className="pg-lb-nav pg-lb-nav--prev" onClick={goPrev}>
              {/* Previous button — navigates to previous photo */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
                {/* Left chevron icon */}
              </button>

              <img key={activePhoto.id} src={activePhoto.src} alt={activePhoto.title} className="pg-lb-img" />
              {/* Main lightbox image */}
              {/* key={activePhoto.id} → forces React to re-render image when photo changes (triggers CSS transition) */}

              <button className="pg-lb-nav pg-lb-nav--next" onClick={goNext}>
              {/* Next button — navigates to next photo */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                {/* Right chevron icon */}
              </button>
            </div>

            <div className="pg-lb-info">
            {/* Info bar below image — shows title, location and category badge */}

              <div className="pg-lb-info-text">
                <h2>{activePhoto.title}</h2>
                {/* Photo title in lightbox */}
                <p>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  {/* Location pin icon */}
                  {activePhoto.location}
                  {/* Photo location text */}
                </p>
              </div>
              <span className="pg-lb-cat-badge">{activePhoto.category}</span>
              {/* Category badge shown on right side of info bar */}
            </div>

            <div className="pg-lb-thumbstrip">
            {/* Horizontal thumbnail strip at bottom of lightbox */}
            {/* Allows quick navigation by clicking thumbnails */}

              {filtered.map((p, i) => (
                <button
                  key={p.id}
                  className={`pg-lb-thumb ${i === lightboxIndex ? "pg-lb-thumb--active" : ""}`}
                  // Adds "active" class to currently viewed photo thumbnail
                  onClick={e => { e.stopPropagation(); setLightboxIndex(i); }}
                  // stopPropagation → prevents overlay click (which would close lightbox)
                  // Sets lightboxIndex to clicked thumbnail's index
                >
                  <img src={p.src} alt={p.title} />
                  {/* Thumbnail image */}
                </button>
              ))}
            </div>

          </div>
          {/* End pg-lb-panel */}
        </div>
        // End pg-lightbox
      )}

    </div>
    // End pg-root
  );
}
// End PhotoGallery component