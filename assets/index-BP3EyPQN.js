(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(t){if(t.ep)return;t.ep=!0;const c=i(t);fetch(t.href,c)}})();document.querySelector("#app").innerHTML=`
  <!-- Scroll Progress -->
    <div class="scroll-indicator">
        <div class="scroll-progress" id="scrollProgress"></div>
    </div>

    <!-- Background Particles -->
    <div class="bg-particles" id="particles"></div>
    <div class="bg-particles" id="particles"></div>

    <!-- Navigation -->
    <nav id="navbar">
        <div class="nav-container">
            <div class="logo">PCM</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Parag Chandra Maharjan</h1>
            <p>Frontend Developer & Graphic Designer crafting beautiful digital experiences with code and creativity</p>
            <a href="#projects" class="cta-button">View My Work</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <h2>About Me</h2>
        <div style="text-align: center; max-width: 600px; margin: 0 auto; font-size: 1.1rem; opacity: 0.9;">
            <p>I'm a passionate frontend developer and graphic designer with 5+ years of experience creating stunning web applications and visual identities. I bridge the gap between design and development, ensuring every pixel serves both form and function.</p>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills">
        <h2>Skills & Expertise</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <div class="skill-icon">⚛️</div>
                <h3>Frontend Development</h3>
                <p>React, Vue.js, TypeScript, JavaScript ES6+, HTML5, CSS3, SASS, Tailwind CSS</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon">🎨</div>
                <h3>Graphic Design</h3>
                <p>Adobe Creative Suite, Figma, Sketch, Brand Identity, Logo Design, Print Design</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon">🚀</div>
                <h3>Performance & Tools</h3>
                <p>Webpack, Vite, Git, npm/yarn, REST APIs, GraphQL, Testing Libraries</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon">📱</div>
                <h3>UI/UX Design</h3>
                <p>Responsive Design, Mobile-First, Accessibility, User Research, Prototyping</p>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <h2>Featured Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">🏪</div>
                <div class="project-content">
                    <h3 class="project-title">E-Commerce Platform</h3>
                    <p class="project-description">A modern, responsive e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.</p>
                    <div class="project-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">TypeScript</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">Stripe</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">Live Demo →</a>
                        <a href="#" class="project-link">GitHub →</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">📊</div>
                <div class="project-content">
                    <h3 class="project-title">Analytics Dashboard</h3>
                    <p class="project-description">Interactive data visualization dashboard with real-time charts, custom filters, and export functionality.</p>
                    <div class="project-tech">
                        <span class="tech-tag">Vue.js</span>
                        <span class="tech-tag">D3.js</span>
                        <span class="tech-tag">Chart.js</span>
                        <span class="tech-tag">Firebase</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">Live Demo →</a>
                        <a href="#" class="project-link">GitHub →</a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">🎵</div>
                <div class="project-content">
                    <h3 class="project-title">Music Streaming App</h3>
                    <p class="project-description">Spotify-inspired music streaming application with playlists, search, and audio visualization features.</p>
                    <div class="project-tech">
                        <span class="tech-tag">React Native</span>
                        <span class="tech-tag">Redux</span>
                        <span class="tech-tag">Audio API</span>
                        <span class="tech-tag">Express</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">Live Demo →</a>
                        <a href="#" class="project-link">GitHub →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <div class="contact">
            <h2>Let's Work Together</h2>
            <p style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 0;">Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.</p>
            <div class="contact-links">
                <a href="mailto:abc@example.com" class="contact-link">
                    📧 Email
                </a>
                <a href="#" class="contact-link">
                    💼 LinkedIn
                </a>
                <a href="#" class="contact-link">
                    🐙 GitHub
                </a>
                <a href="#" class="contact-link">
                    🎨 Dribbble
                </a>
            </div>
        </div>
    </section>
`;function o(){const e=document.getElementById("particles"),s=150;for(let i=0;i<s;i++){const a=document.createElement("div");a.className="particle",a.style.left=Math.random()*100+"%",a.style.animationDelay=Math.random()*50+"s",a.style.animationDuration=Math.random()*30+10+"s",e.appendChild(a)}}function n(){const e=window.pageYOffset,s=document.documentElement.scrollHeight-window.innerHeight,i=e/s*100;document.getElementById("scrollProgress").style.width=i+"%"}function l(){const e=document.getElementById("navbar");window.scrollY>100?e.classList.add("scrolled"):e.classList.remove("scrolled")}function d(){document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const a=document.querySelector(s.getAttribute("href"));a&&a.scrollIntoView({behavior:"smooth",block:"start"})})})}function p(){const e=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&i.target.classList.add("fade-in")})},{threshold:.1});document.querySelectorAll(".skill-card, .project-card").forEach(s=>{e.observe(s)})}document.addEventListener("DOMContentLoaded",()=>{o(),d(),p()});window.addEventListener("scroll",()=>{n(),l()});document.querySelectorAll(".skill-card, .project-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform=e.classList.contains("skill-card")?"translateY(-10px)":"scale(1.02)"}),e.addEventListener("mouseleave",()=>{e.style.transform="none"})});
