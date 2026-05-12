/* =========================================
   PROJECT DETAIL PAGE — project.js
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  const projectData = {
    'knobzz-motion': {
      title: 'Knobzz & Motion in Color',
      status: 'Live product',
      type: 'Medical · Mobile · Arduino',
      metric: 'Wearable rehab system with mobile connectivity and vibration feedback',
      overview: 'Knobzz pairs a wearable therapy jacket with a mobile app to deliver personalized muscle rehabilitation for patients with pain, paralysis, and mobility issues. The product uses Arduino-controlled vibration nodes and Bluetooth telemetry to guide users through therapy sequences and track progress over time.',
      design: 'Focused on accessible healthcare UX, the design balances clear rehabilitation prompts with supportive visuals. The product concept includes patient-centered guidance, simplified controls, and in-app progress tracking for stronger adherence and recovery transparency.',
      development: 'Built as a hardware-software system, the solution integrates Arduino sensor control, Bluetooth communication, and a mobile application interface. I led the product delivery, aligning hardware firmware, app workflows, and clinical testing to create a cohesive rehab experience.',
      tools: ['Arduino', 'Unity', 'Bluetooth', 'Mobile', 'PC', 'Healthcare'],
      links: [
        { label: 'Case Study', href: 'index.html#projects' },
        { label: 'Product Summary', href: 'index.html#projects' }
      ],
      media: [
        { type: 'image', src: '1.png', alt: 'Knobzz therapy jacket product overview' }
      ]
    },
    'trigger-points-3d': {
      title: 'Trigger Points 3D',
      status: 'Published',
      type: 'Medical · 3D · Research',
      metric: '5M+ global downloads · Top category ranking',
      overview: 'Trigger Points 3D is a medical education platform built around a high-fidelity 4K layered human body model. The product helps clinicians and students explore 600+ muscle groups with guided anatomy walkthroughs, expert video content, and research-backed therapy protocols.',
      design: 'The experience was designed to make complex anatomy approachable through visual layering, responsive interaction, and clean navigation. Visual clarity and consistent labeling were prioritized so users can quickly switch between systems and discover the right muscle groups.',
      development: 'Delivery combined Unity 3D visualization, cross-platform mobile deployment, and media-rich tutorial playback. The project required close collaboration with medical subject matter experts to ensure accuracy and usability across iOS and Android.',
      tools: ['Unity 3D', 'R&D', 'Blender', 'Medical', 'iOS/Android'],
      links: [
        { label: 'Visit Website', href: 'https://www.triggerpoints3d.com/' },
        { label: 'Download on Google Play', href: 'https://play.google.com/store/apps/details?id=com.simeon.tps' },
        { label: 'Download on App Store', href: 'https://apps.apple.com/us/app/triggerpoints3d/id1453498126' },
        { label: 'Research Summary', href: 'index.html#projects' }
      ],
      media: [
        { type: 'image', src: '1.png', alt: 'Trigger Points 3D anatomy visualization' }
      ]
    },
    'mega-dance': {
      title: 'Mega Dance',
      status: 'Deployed',
      type: 'Game · Windows · Multiplayer',
      metric: '200+ students tested · Schools in 2 countries',
      overview: 'Mega Dance is a large-scale hardware-controlled multiplayer gaming platform built for schools, competitions, and live events. The system supports 150+ concurrent offline players, combining music, motion-based gameplay, and synchronized multiplayer experiences in real-world event environments. The platform was designed to deliver a highly interactive and accessible dance experience where students could participate together through hardware-integrated gameplay stations connected over a local network infrastructure.',
      design: 'Vision: To promote physical movement, sports, and music-driven engagement for children, especially in snowfall regions where outdoor activity opportunities are limited. As the Design & Development Lead, I managed the project from research and planning to deployment and live event execution. My responsibilities covered product strategy, technical architecture, cross-team coordination, deployment planning, and on-ground execution. Key contributions included product & execution leadership (roadmap planning, team coordination, R&D on hardware compatibility and networking), UX & event experience (fast feedback, easy onboarding, clear scoring, high-energy visuals optimized for school competitions).',
      development: 'I led the complete software planning and multiplayer infrastructure design, ensuring reliable operation in large school environments. Designed the LAN/Wi-Fi based multiplayer ecosystem supporting 150+ simultaneous players using Unity Netcode principles for player joining, song synchronization, match timing, and real-time state management. Implemented lightweight JSON-based synchronization for low-latency communication. Led hardware integration planning for gameplay inputs, reducing latency for live competitive environments. Conducted live event tests, deployment across US and Switzerland schools, real-time troubleshooting, and performance optimization.',
      tools: ['Unity', 'Multiplayer Netcode Architecture', 'LAN / Wi-Fi Networking', 'JSON State Synchronization', 'Hardware Integration Systems', 'Windows Multiplayer Environment'],
      links: [
        { label: 'Visit Website', href: 'https://www.travelingtykes.us/' },
        { label: 'Watch on YouTube', href: 'https://youtu.be/0hTjYi8Trh0' },
        { label: 'Watch on YouTube #2', href: 'https://youtube.com/shorts/zYMxp9YcE9M' }
      ],
      media: []
    },
    'rad-radiation': {
      title: 'RAD Radiation Re-Route Software',
      status: 'Top product',
      type: 'Scientist · US & UAE',
      metric: 'Top 1% performance ranking · 2 global markets',
      overview: 'RAD Radiation Re-Route Software encompasses RADTeamSim.Route and RADTeamSim.Flight, AI-assisted radiation route intelligence and simulation platforms designed to help emergency response teams identify safer navigation paths during radiological or nuclear incidents. Worked with a team of scientists to deliver a difference + safety solution. The systems analyze real-time radiation exposure data across roads, coordinates, and geographic zones to support route optimization between fastest and safest travel paths. Built using real-world GIS terrain systems and radiation mapping simulations, the platforms provide live operational visibility into radiation hotspots, exposure thresholds, and responder movement tracking across affected regions. The objective of the platforms was to simulate and evaluate how intelligent routing systems could improve responder safety, mission planning, and field decision-making during high-risk nuclear emergency scenarios.',
      design: 'The product strategy focused on combining AI-assisted route intelligence with geospatial radiation visualization to support safer operational movement in contaminated environments. The system was designed around: Real-time radiation-based route evaluation, Safe vs fast route recommendation logic, Live GPS coordinate tracking, Radiation hotspot visualization, Exposure-aware navigation systems, Operational telemetry dashboards, Low cognitive load emergency UI workflows. Special emphasis was placed on helping field operators quickly understand: Which roads were highly contaminated, Which routes minimized radiation exposure, Real-time dose rate changes, Latitude and longitude-based radiation density, Safe traversal zones during emergency operations. The experience was designed to simulate realistic emergency conditions while maintaining fast situational awareness and mission-critical usability.',
      development: 'Led development coordination and simulation workflow planning for a geospatial radiation intelligence platform supporting operational route analysis and emergency navigation systems. The platform combined: Radiation mapping systems, GPS navigation workflows, AI-assisted routing logic, Real-time telemetry pipelines, Automated driving systems, Cloud-based operational syncing, Mission analytics dashboards. Built simulation systems capable of: Tracking live radiation intensity, Mapping contamination zones dynamically, Monitoring route safety conditions, Comparing fastest vs safest travel paths, Visualizing radiation density across coordinates and road networks. The project architecture supported scalable emergency response simulations and multi-region operational testing environments.',
      tools: ['Unity', 'Cesium Ion', 'GO Map SDK', 'C#', 'GPS Navigation', 'Cloud-Based Data Sync', 'Agile Project Management', 'Radiation Mapping Systems', 'Automatic Driving Systems', 'Mission Analytics Dashboard', 'Real-Time Telemetry', 'GIS & Geospatial Visualization', 'Route Intelligence Systems', 'Latitude & Longitude Tracking Systems'],
      links: [
        { label: 'Visit Website', href: 'https://www.radiationemergencyservices.com/training-and-drill-software' },
        { label: 'RadTeamSim Route', href: 'https://www.radiationemergencyservices.com/radteamsim-route' },
        { label: 'RadTeamSim Flight', href: 'https://www.radiationemergencyservices.com/radteamsim-flight' }
      ],
      media: [
        { type: 'image', src: '1.png', alt: 'RAD radiation routing dashboard' }
      ]
    },
    'arab-startup': {
      title: 'Arab Startup Product Launch',
      status: 'Market release',
      type: 'Startup · Middle East · Mobile',
      metric: '20M+ downloads · 1.2M monthly active users',
      overview: 'This launch supported a Middle Eastern consumer gaming studio from concept through store release. The work included download growth strategies, review optimization, and localized product positioning for regional audiences across 3 games.',
      design: 'The product experience blended culturally relevant visuals with performance-focused flows. We prioritized clear onboarding, fast discovery, and retention tactics aligned to local market habits.',
      development: 'Delivered the release pipeline, app store optimization, and launch analytics while coordinating cross-functional marketing, QA, and engineering teams across a multi-game portfolio.',
      tools: ['0→1 Launch', 'App Store', 'Google Play', 'GTM'],
      links: [
        { label: 'Visit Website', href: 'https://omeletgames.com/' },
        { label: 'Launch Summary', href: 'index.html#projects' }
      ],
      media: [
        { type: 'image', src: '1.png', alt: 'Arab startup product launch visuals' }
      ]
    },
    'driving-sim': {
      title: 'Driving Simulation System',
      status: 'Product launched',
      type: 'Simulation · Hardware · Product',
      metric: '0→1 product · Hardware + software integration',
      overview: 'A driving simulation system combining physical hardware controls with real-time simulation feedback. The solution supports operator training and performance testing via immersive software controls.',
      design: 'The user experience focused on instrument clarity, realistic feedback, and a stable data flow between hardware and simulation layers. Interface decisions were informed by real driver behavior and training use cases.',
      development: 'Led the integration of hardware telemetry, simulator logic, and delivery planning across engineering and testing teams. The final system balanced simulation fidelity with robust operational stability.',
      tools: ['Unity', 'Hardware', 'Simulation', 'R&D'],
      links: [
        { label: 'System Brief', href: 'index.html#projects' }
      ],
      media: [
        { type: 'image', src: '1.png', alt: 'Driving simulation product design' }
      ]
    },
    'deva': {
      title: 'Deva',
      status: 'Upcoming Project',
      type: 'AAA Game Development · Mythological Action RPG',
      metric: '1 Hour Playable Demo · 3 Missions · 1 Major Boss Fight',
      overview: 'Deva is an upcoming AAA Indian mythological action RPG focused on immersive storytelling, cinematic world-building, and skill-based souls-like combat mechanics. The project aims to blend Indian mythology, ancient architecture, and spiritual lore into a modern next-generation action experience designed for PC and console platforms. The first playable demo features approximately one hour of gameplay, including three narrative-driven missions, environmental exploration, advanced melee combat systems, and a large-scale boss fight designed around tactical combat and player mastery. The project emphasizes atmospheric storytelling, realistic environments, cinematic presentation, and intense combat encounters inspired by mythology-driven fantasy worlds.',
      design: 'The vision behind Deva is to create a globally competitive Indian AAA game experience that authentically represents Indian mythology through modern cinematic gameplay and high-production-value world-building. The product strategy focuses on: Bringing Indian mythology to AAA gaming audiences, Building emotionally immersive storytelling, Creating visually rich next-gen environments, Delivering challenging but rewarding combat systems, Combining realism with mythological fantasy. Special attention is being given to: Combat responsiveness, Animation quality, Environmental immersion, Narrative pacing, Cinematic presentation, Audio atmosphere, Player progression systems. The demo is designed as a vertical slice to establish: Gameplay quality benchmarks, Core combat mechanics, Narrative direction, Visual identity, Technical scalability for full production.',
      development: 'Leading end-to-end planning and development coordination for the project, including gameplay systems, production workflows, cinematic direction, and technical implementation. Development areas include: Combat system architecture, Mission gameplay design, AI behavior systems, Environment design pipelines, Cinematic sequencing, Character gameplay mechanics, Performance optimization, Technical art workflows, Unreal Engine production pipelines. The project is currently focused on building a polished playable demo that demonstrates the core gameplay experience, visual fidelity, and narrative foundation for future large-scale production.',
      tools: ['Unreal Engine 5', 'Blueprint System', 'C++', 'MetaHuman', 'Motion Matching', 'Niagara VFX', 'Lumen Lighting', 'Nanite Geometry', 'AI Behavior Trees', 'Souls-Like Combat Systems', 'Cinematic Sequencer', 'Environment Art Pipelines', 'World Building Systems', 'Animation Retargeting', 'Gameplay Ability Systems', 'Performance Optimization', 'Git & Version Control', 'Agile Production Workflow'],
      links: [],
      media: []
    },
    'ai-voice-tutor': {
      title: 'AI Voice Tutor Agent',
      status: 'Upcoming AI Product',
      type: 'AI Product · Conversational Learning Platform',
      metric: 'Voice AI · Real-Time Interaction · Personalized Education',
      overview: 'The AI Voice Tutor Agent is an AI-assisted conversational learning platform built to simulate natural human tutoring through real-time voice interaction and adaptive educational guidance. The system combines speech recognition, conversational AI, and contextual learning workflows to create an immersive tutoring experience where users can ask questions naturally, receive intelligent explanations, and engage in dynamic back-and-forth educational conversations. The platform is designed for scalable learning environments across: Students, Skill development programs, Language learning, Technical education, Personalized training systems. The objective is to create a highly interactive AI tutor capable of delivering low-latency, human-like learning support while adapting responses based on user understanding, behavior, and conversation flow.',
      design: 'The product strategy focused on building an AI-first educational experience that feels conversational, responsive, and human-like rather than robotic or command-driven. The system was designed around: Natural interaction flow, Low cognitive friction, Real-time responsiveness, Personalized learning paths, Scalable AI conversation architecture, Human-like tutoring behavior. Special attention was given to: Voice interaction quality, Conversational pacing, Context retention, Educational clarity, User engagement, Learning accessibility, Adaptive AI response systems. The goal was to create a tutoring experience where users feel like they are speaking to an intelligent mentor rather than interacting with a traditional chatbot interface.',
      development: 'Leading end-to-end planning and development coordination for the AI tutoring platform including conversational systems, voice infrastructure, AI interaction pipelines, and learning workflow architecture. Development areas include: Voice AI pipeline integration, Conversational flow systems, AI response orchestration, Speech recognition systems, Real-time communication architecture, Context memory systems, User interaction analytics, Educational workflow design, AI behavior optimization, Cross-platform deployment planning. The platform architecture is designed to support scalable real-time voice interactions while maintaining fast response latency and natural conversation quality.',
      tools: ['OpenAI APIs', 'GPT Models', 'Whisper Speech Recognition', 'Text-to-Speech Systems', 'Python', 'Node.js', 'React', 'WebRTC', 'Real-Time Voice Streaming', 'AI Conversation Systems', 'Context Memory Architecture', 'Cloud-Based AI Infrastructure', 'Vector Database Systems', 'Prompt Engineering', 'AI Workflow Orchestration', 'Firebase / Supabase', 'Analytics & Monitoring Systems'],
      links: [],
      media: []
    },
    'ai-product-analytics': {
      title: 'AI Product Analytics Dashboard',
      status: 'Upcoming',
      type: 'SaaS · AI · Product Management',
      metric: 'Upcoming · 2026 · Beta launch planned',
      overview: 'AI Product Analytics Dashboard is a SaaS platform that leverages AI to provide product managers with predictive insights, user behavior analysis, and automated KPI tracking. The tool integrates with various data sources to deliver real-time dashboards, trend predictions, and actionable recommendations for product optimization. Designed for teams managing digital products, it helps identify user pain points, forecast feature adoption, and optimize release strategies through intelligent data processing and visualization.',
      design: 'The design focuses on intuitive data visualization, AI-driven insights, and seamless integration with existing product management workflows. Key features include customizable dashboards, predictive analytics, anomaly detection, and collaborative reporting. The user experience emphasizes clarity, speed, and actionable intelligence to empower product teams in making data-driven decisions.',
      development: 'Leading the development of AI algorithms for data analysis, dashboard architecture, and API integrations. The platform uses machine learning models for trend prediction and user segmentation, built on scalable cloud infrastructure. Focus areas include data security, real-time processing, and cross-platform compatibility.',
      tools: ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS', 'PostgreSQL', 'Tableau', 'Machine Learning', 'API Integrations', 'Data Visualization'],
      links: [],
      media: []
    },
    'metaverse-collaboration': {
      title: 'Metaverse Collaboration Platform',
      status: 'Upcoming',
      type: 'VR/AR · Collaboration · SaaS',
      metric: 'Upcoming · 2026 · Prototype development',
      overview: 'Metaverse Collaboration Platform is a virtual reality-based workspace for remote teams, enabling immersive meetings, collaborative design, and interactive presentations in 3D environments. The platform supports avatar-based interactions, shared virtual whiteboards, and integration with productivity tools. Built for enterprises, it aims to enhance remote work productivity through spatial computing and real-time collaboration features.',
      design: 'Design emphasizes user-friendly VR interfaces, intuitive gesture controls, and customizable virtual spaces. The platform includes features like voice chat, screen sharing in VR, and cross-device compatibility. Focus on accessibility, low-latency interactions, and seamless transitions between 2D and 3D modes.',
      development: 'Coordinating VR development using Unity, integrating networking for multi-user experiences, and building backend services for data synchronization. Key challenges include optimizing for various VR headsets, ensuring low latency, and implementing secure user authentication.',
      tools: ['Unity', 'VR/AR SDKs', 'Photon Networking', 'C#', 'Blender', 'WebRTC', 'Node.js', 'MongoDB', '3D Modeling', 'Real-Time Rendering'],
      links: [],
      media: []
    }
  };

  const params = new URLSearchParams(window.location.search);
  const projectKey = params.get('project');
  const project = projectData[projectKey];

  const titleEl = document.getElementById('project-title');
  const taglineEl = document.getElementById('project-tagline');
  const typeEl = document.getElementById('project-type');
  const metricEl = document.getElementById('project-metric');
  const statusEl = document.getElementById('project-status');
  const overviewEl = document.getElementById('project-overview');
  const designEl = document.getElementById('project-design');
  const developmentEl = document.getElementById('project-development');
  const toolsEl = document.getElementById('project-tools');
  const linksEl = document.getElementById('project-links');
  const mediaEl = document.getElementById('project-media');

  if (!project) {
    const main = document.querySelector('main');
    main.innerHTML = `
      <section class="project-hero">
        <div class="project-hero-top">
          <a href="index.html#projects" class="btn-ghost">← Back to projects</a>
        </div>
        <div class="project-title">Project not found</div>
        <p class="project-tagline">Please return to the portfolio and select a project card.</p>
      </section>
    `;
    document.title = 'Project Not Found — Saksham Dixit';
    return;
  }

  document.title = `${project.title} — Saksham Dixit`;
  titleEl.textContent = project.title;
  taglineEl.textContent = project.overview;
  typeEl.textContent = project.type;
  metricEl.textContent = project.metric;
  statusEl.textContent = project.status || 'Live product';
  overviewEl.textContent = project.overview;
  designEl.textContent = project.design;
  developmentEl.textContent = project.development;

  toolsEl.innerHTML = '';
  project.tools.forEach(tool => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = tool;
    toolsEl.appendChild(chip);
  });

  linksEl.innerHTML = '';
  project.links.forEach(link => {
    const anchor = document.createElement('a');
    anchor.className = 'project-link';
    anchor.href = link.href;
    anchor.textContent = link.label;
    if (!link.href.startsWith('#') && !link.href.startsWith('index.html')) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    }
    linksEl.appendChild(anchor);
  });

  mediaEl.innerHTML = '';
  project.media.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = 'project-media';

    if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.alt = item.alt || project.title;
      video.controls = true;
      wrapper.appendChild(video);
    } else if (item.type === 'youtube') {
      const iframe = document.createElement('iframe');
      iframe.src = item.src;
      iframe.title = item.alt || project.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      wrapper.appendChild(iframe);
    } else {
      const image = document.createElement('img');
      image.src = item.src;
      image.alt = item.alt || project.title;
      wrapper.appendChild(image);
    }

    mediaEl.appendChild(wrapper);
  });
});
