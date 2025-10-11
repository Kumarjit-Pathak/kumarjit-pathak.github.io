// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.timeline-item, .education-card, .skill-category, .about-text, .about-stats');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Skill items hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Education cards hover effect
document.querySelectorAll('.education-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Timeline animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize timeline animation when timeline comes into view
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateTimeline();
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const timeline = document.querySelector('.timeline');
if (timeline) {
    timelineObserver.observe(timeline);
    
    // Set initial state for timeline items
    // document.querySelectorAll('.timeline-item').forEach(item => {
    //     item.style.opacity = '0';
    //     item.style.transform = 'translateY(30px)';
    //     item.style.transition = 'all 0.6s ease';
    // });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Preloader (optional)
const preloader = document.createElement('div');
preloader.className = 'preloader';
preloader.innerHTML = '<div class="spinner"></div>';
document.body.appendChild(preloader);

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});

// Thought Leadership cards animation (staggered fade-in)
const leadershipCards = document.querySelectorAll('.leadership-card');

const leadershipObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      leadershipCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 200); // 200ms stagger between cards
      });
      leadershipObserver.unobserve(entry.target); // run once
    }
  });
}, { threshold: 0.2 });

// Observe the Thought Leadership section
const thoughtLeadershipSection = document.querySelector('#thought-leadership');
if (thoughtLeadershipSection) {
  leadershipObserver.observe(thoughtLeadershipSection);
}

// Add CSS for preloader
const preloaderCSS = `
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #2563eb;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

const style = document.createElement('style');
style.textContent = preloaderCSS;
document.head.appendChild(style);

// Competency Modal Functionality
const competencyData = {
    'transformation': {
        icon: 'fas fa-rocket',
        title: 'Data-Driven Transformation & Culture Building',
        description: 'Leading organizational change through data-driven decision-making and building analytics-first culture across global teams.',
        examples: [
            '<strong>AB InBev:</strong> Led company-wide upskilling program with industry experts, fostering culture of innovation and elevating analytical skills across teams',
            '<strong>Ascena Retail:</strong> Drove cultural transformation for data-driven decisions, fostering better collaboration between analytics and business teams',
            '<strong>Global Impact:</strong> Directed global data-led transformation across 28 countries, embedding advanced analytics in business decision-making for sales, distribution, and marketing functions'
        ]
    },
    'ai-platform': {
        icon: 'fas fa-cube',
        title: 'AI Product/Platform (SaaS) Building & Ethics',
        description: 'Architecting scalable AI platforms with ethical considerations and responsible AI practices for enterprise solutions.',
        examples: [
            '<strong>TestOps Platform:</strong> Designed and built experimentation platform (TestOps) enabling rapid testing of commercial strategies with analytics measurement throughout project lifecycles',
            '<strong>Digital Route-to-Market:</strong> Developed innovative self-serve tool using social media presence and voice of consumer, generating ~$31 million in incremental revenue',
            '<strong>Promotional Planning Tool:</strong> Developed in-season promotional scenario tool enabling data-driven decisions, yielding $15 million incremental margin annually'
        ]
    },
    'ml-causal': {
        icon: 'fas fa-brain',
        title: 'Applied Machine Learning & Causal AI',
        description: 'Implementing advanced ML solutions and causal inference methodologies (joint research with MIT) for measurable business impact.',
        examples: [
            '<strong>Wagner Prize Winner:</strong> Developed new causal inference method working closely with MIT professor, won Wagner Prize (2022) from INFORMS for scientific innovation',
            '<strong>Computer Vision & LLM:</strong> Identified premium beer buyer leads using computer vision and LLM with Python and TensorFlow',
            '<strong>Predictive Analytics:</strong> Built propensity & churn models, bug detection models (83% → 98%), and "Sherlock" AI for predictive maintenance saving £1.4M annually'
        ]
    },
    'agentic-ai': {
        icon: 'fas fa-network-wired',
        title: 'Agentic AI with MCP Server, A2A Protocols',
        description: 'Building autonomous AI agents and multi-agent systems with modern protocols for intelligent automation.',
        examples: [
            '<strong>NL to SQL Agent:</strong> Developed natural language to SQL agent providing actionable insights and prescriptive recommendations based on historical experimentation outputs',
            '<strong>Contract Intelligence:</strong> Implemented GenAI solutions for contract analysis and intelligence extraction',
            '<strong>Duplicate Payment Detection:</strong> Built AI agents for automated fraud detection and payment verification'
        ]
    },
    'experimentation': {
        icon: 'fas fa-flask',
        title: 'Experimentation & Measurement Frameworks',
        description: 'Designing and implementing robust A/B testing and causal measurement systems for scientific decision-making.',
        examples: [
            '<strong>TestOps Platform:</strong> Pioneered AB InBev\'s TestOps experimentation platform with causal inference methodology',
            '<strong>Generalized Synthetic Control:</strong> Published research on "Generalized Synthetic Control for TestOps at ABI" as part of Daniel H. Wagner Prize',
            '<strong>ROI-driven Frameworks:</strong> Partnered with CXOs to define enterprise-wide measurement frameworks and ROI optimization strategies'
        ]
    },
    'data-platform': {
        icon: 'fas fa-server',
        title: 'Data Platform Architecture & MLOps',
        description: 'Building scalable data infrastructure and ML operations pipelines for enterprise-grade solutions.',
        examples: [
            '<strong>Standardized Components:</strong> Built community and standardized reusable components, reducing code complexity by 50% and increasing development efficiency by 28%',
            '<strong>GCP Data Lake:</strong> Centralized GCP data lake and implemented standardized data protocols at Ascena Retail',
            '<strong>ML Ops Pipeline:</strong> Established infrastructure for continuous deployment and monitoring of ML models'
        ]
    },
    'stakeholder': {
        icon: 'fas fa-handshake',
        title: 'Stakeholder & Change Management',
        description: 'Managing complex stakeholder relationships and driving organizational transformation across business units.',
        examples: [
            '<strong>CXO Partnership:</strong> Partnered with CXOs to define enterprise-wide data strategy, governance, and ROI-driven measurement frameworks',
            '<strong>Multi-departmental Transition:</strong> Led $1.2B Nielsen project transition across geographies, ensuring smooth integration of analytics processes',
            '<strong>Client Engagement:</strong> Spearheaded analytics for high-profile clients including British Telecom and Microsoft'
        ]
    },
    'team-leadership': {
        icon: 'fas fa-users',
        title: 'Cross-Functional & Geographical Team Leadership',
        description: 'Leading diverse global teams across multiple functions and geographies with proven track record.',
        examples: [
            '<strong>Global Team Building:</strong> Built cross-geographical product team (data scientists, ML Ops, developers) across Mexico, Colombia, Brazil, USA, and India',
            '<strong>110-Member Team:</strong> Managed 110-member team at TCS overseeing data science, customer insights, and data engineering',
            '<strong>MP&A Analytics:</strong> Built data science team from ground up for Merchandise Planning & Allocation analytics at Ascena Retail'
        ]
    },
    'roi': {
        icon: 'fas fa-chart-line',
        title: 'Portfolio & ROI Optimization',
        description: 'Optimizing project portfolios and maximizing return on analytics investments with measurable outcomes.',
        examples: [
            '<strong>$50M+ YOY Impact:</strong> Delivered $50M+ in incremental revenue YOY and efficiency gains across Retail, CPG, and Technology',
            '<strong>Commercial Resource Allocation:</strong> Optimized sales packages and marketing investments, driving $10M in first year',
            '<strong>Inventory Optimization:</strong> Implemented forecasting models reducing excess inventory, saving $10M annually'
        ]
    },
    'innovation': {
        icon: 'fas fa-lightbulb',
        title: 'Innovation & Research Leadership',
        description: 'Driving innovation through research collaboration with MIT and cutting-edge AI development.',
        examples: [
            '<strong>Research Publications:</strong> 5 published research papers including INFORMS Wagner Prize winner and arXiv publications',
            '<strong>3AI Thought Leadership:</strong> Regular contributor to industry roundtables on AI adoption, ethics, and business impact',
            '<strong>Academic Speaking:</strong> Invited speaker at industry and academic forums on GenAI, TestOps, and Causal Inference'
        ]
    },
    'storytelling': {
        icon: 'fas fa-presentation',
        title: 'Business Storytelling & Executive Communication',
        description: 'Translating complex technical concepts into compelling business narratives for executive audiences.',
        examples: [
            '<strong>Executive Presentations:</strong> Presented TestOps platform and ROI impact to C-suite executives across 28 countries',
            '<strong>Wagner Prize Presentation:</strong> Showcased causal inference research to INFORMS academic and industry audience',
            '<strong>Stakeholder Influence:</strong> Successfully influenced business units through data-driven storytelling and visualization'
        ]
    },
    'partnerships': {
        icon: 'fas fa-project-diagram',
        title: 'Strategic Partnerships & Ecosystem Building',
        description: 'Building strategic alliances and fostering industry ecosystems for collaborative innovation.',
        examples: [
            '<strong>MIT Collaboration:</strong> Joint research partnership with MIT professor on causal inference methodologies',
            '<strong>3AI Leadership Circle:</strong> Active contributor engaging with senior leaders across industries and functions',
            '<strong>Industry Forums:</strong> Regular participation in practitioner forums on AI adoption and implementation'
        ]
    },
    'practice': {
        icon: 'fas fa-user-tie',
        title: 'Practice Leadership',
        description: 'Leading analytics practices with vision, strategy, and execution excellence across organizations.',
        examples: [
            '<strong>Practice Lead Role:</strong> Current Practice Lead – Data & Analytics driving enterprise AI transformation at AB InBev',
            '<strong>Vision Setting:</strong> Established vision for MP&A analytics at Ascena Retail and created scalable AI products',
            '<strong>Strategy Execution:</strong> Defined and executed analytics strategy for British Telecom and Microsoft engagements'
        ]
    },
    'technical': {
        icon: 'fas fa-laptop-code',
        title: 'Hands-on Technical Leadership & Mentorship',
        description: 'Providing technical guidance while mentoring teams on best practices in AI/ML development.',
        examples: [
            '<strong>Technical Stack:</strong> Hands-on with Python, R, SQL, TensorFlow, Azure AI Foundry, LangChain, AutoGen, LangGraph',
            '<strong>Code Reviews:</strong> Led technological overhaul with standardized reusable components and best practices',
            '<strong>Upskilling Programs:</strong> Championed continuous learning with organization-wide training and mentorship'
        ]
    }
};

// Get modal elements
const modal = document.getElementById('competencyModal');
const modalClose = document.querySelector('.modal-close');
const modalIcon = document.querySelector('.modal-icon');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const examplesList = document.querySelector('.examples-list');

// Add click event to all competency tags
document.querySelectorAll('.competency-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const competencyKey = this.getAttribute('data-competency');
        const data = competencyData[competencyKey];

        if (data) {
            // Update modal content
            modalIcon.className = 'modal-icon ' + data.icon;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;

            // Clear and populate examples
            examplesList.innerHTML = '';
            data.examples.forEach(example => {
                const li = document.createElement('li');
                li.innerHTML = example;
                examplesList.appendChild(li);
            });

            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal when clicking X
modalClose.addEventListener('click', function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Experience Card Expand/Collapse Functionality
document.querySelectorAll('.experience-card').forEach(card => {
    const header = card.querySelector('.exp-header');

    header.addEventListener('click', function() {
        const isExpanded = card.getAttribute('data-expanded') === 'true';

        // Close all other cards
        document.querySelectorAll('.experience-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.setAttribute('data-expanded', 'false');
            }
        });

        // Toggle current card
        card.setAttribute('data-expanded', !isExpanded);
    });
});

// Image Lightbox Functionality
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');

// Function to open lightbox
function openLightbox(imageSrc, caption) {
    lightbox.classList.add('show');
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close lightbox
function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Add click event to speaking images
document.querySelectorAll('.speaking-image').forEach(imgContainer => {
    imgContainer.addEventListener('click', function() {
        const img = this.querySelector('img');
        const caption = this.parentElement.querySelector('.speaking-content h3').textContent;
        openLightbox(img.src, caption);
    });
});

// Add click event to certificate images
document.querySelectorAll('.certificate-image').forEach(imgContainer => {
    imgContainer.addEventListener('click', function() {
        const img = this.querySelector('img');
        const caption = this.parentElement.querySelector('h3').textContent;
        openLightbox(img.src, caption);
    });
});

// Add click event to award images
document.querySelectorAll('.award-image').forEach(imgContainer => {
    imgContainer.addEventListener('click', function() {
        const img = this.querySelector('img');
        const caption = this.parentElement.querySelector('h3').textContent;
        openLightbox(img.src, caption);
    });
});

// Close lightbox when clicking X
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === lightboxImg) {
            closeLightbox();
        }
    });
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('show')) {
        closeLightbox();
    }
});
