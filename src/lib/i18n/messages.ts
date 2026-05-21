export type Locale = 'en' | 'pt-br';

export type Messages = {
  nav: {
    whoAmI: string;
    myBackground: string;
    projects: string;
  };
  intro: {
    greeting: string;
    tagline: string;
    title: string;
    bootSignal: string;
    immersiveMode: string;
    playBtn: string;
    lockedBtn: string;
  };
  whoAmI: {
    badge: string;
    name: string;
    role: string;
    availability: string;
    signalBadge: string;
    signalTitle: string;
    quote: string;
    portraitAlt: string;
    introPara1: string;
    introPara2: string;
    resumeBtn: string;
    projectsBtn: string;
    linkedinBtn: string;
    avatarLabel: string;
    dragLabel: string;
    syncingLabel: string;
  };
  background: {
    badge: string;
    feedTag: string;
    verticalTag: string;
    eyebrow: string;
    title: string;
    description: string;
  };
  projects: {
    badge: string;
    myProjectsBadge: string;
    curatedTag: string;
    liveTag: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredDesc: string;
    featuredError: string;
    githubEyebrow: string;
    githubTitle: string;
    githubDesc: string;
    feedUnavailable: string;
    githubError: string;
  };
  technologies: {
    eyebrow: string;
    title: string;
    note: string;
  };
};

const en: Messages = {
  nav: {
    whoAmI: 'Who Am I ?',
    myBackground: 'My Background',
    projects: 'Projects',
  },
  intro: {
    greeting: "Hi, i'm Dante.",
    tagline: 'and this is my',
    title: 'Immersive Cyberpunk Portfolio',
    bootSignal: 'signal boot / dante-escame.portfolio',
    immersiveMode: 'immersive mode loading',
    playBtn: 'Play',
    lockedBtn: 'Locked',
  },
  whoAmI: {
    badge: 'Who Am I',
    name: 'Dante Escame',
    role: 'Full-stack engineer',
    availability: 'Remote-ready',
    signalBadge: 'Profile signal',
    signalTitle: 'Senior Software Engineer',
    quote: '"Everything should be made as simple as possible, but not simpler."',
    portraitAlt: 'Portrait of Dante Escame',
    introPara1:
      'Senior Software Engineer with 6+ years of experience in full-stack development across high-impact, large-scale applications.',
    introPara2:
      'I build products with a delivery mindset and focus on backend performance, by applying market patterns with: .NET, C#, React, Node, Next, AWS, Kubernetes and Docker.',
    resumeBtn: 'Download My Resume',
    projectsBtn: 'View my projects',
    linkedinBtn: 'Visit LinkedIn',
    avatarLabel: 'Interactive avatar',
    dragLabel: 'Drag to inspect',
    syncingLabel: 'Syncing avatar rig...',
  },
  background: {
    badge: 'My Background',
    feedTag: 'Timeline feed',
    verticalTag: 'Vertical mode',
    eyebrow: 'Chronology layer',
    title: 'Welcome to my background timeline',
    description: "Let's see how is my journey so far.",
  },
  projects: {
    badge: 'Projects',
    myProjectsBadge: 'My Projects',
    curatedTag: 'Curated',
    liveTag: 'Live',
    featuredEyebrow: 'Featured Work',
    featuredTitle: 'Featured Projects',
    featuredDesc:
      'These cards are selected from the GitHub project feed by slug, so this section stays curated without maintaining a separate content source.',
    featuredError:
      'Featured projects are temporarily unavailable because the GitHub project feed could not be loaded.',
    githubEyebrow: 'From GitHub',
    githubTitle: 'Live public project feed',
    githubDesc: 'All of the data in this page is being dinamically fetched from my Github!',
    feedUnavailable: 'Feed unavailable',
    githubError: 'GitHub projects could not be loaded right now.',
  },
  technologies: {
    eyebrow: 'Core stack signal',
    title: 'What I Tend To Build Around',
    note: "This is my usual stack, but not the boundary of what I can build with. I'm a fast learner that often ramp into new technologies when the product calls for it.",
  },
};

const ptBr: Messages = {
  nav: {
    whoAmI: 'Quem Sou Eu ?',
    myBackground: 'Minha Trajetória',
    projects: 'Projetos',
  },
  intro: {
    greeting: 'Olá, sou o Dante.',
    tagline: 'e este é o meu',
    title: 'Portfolio Cyberpunk Imersivo',
    bootSignal: 'signal boot / dante-escame.portfolio',
    immersiveMode: 'carregando modo imersivo',
    playBtn: 'Entrar',
    lockedBtn: 'Aguardando',
  },
  whoAmI: {
    badge: 'Quem Sou Eu',
    name: 'Dante Escame',
    role: 'Engenheiro Full-stack',
    availability: 'Disponível Remotamente',
    signalBadge: 'Sinal de Perfil',
    signalTitle: 'Engenheiro de Software Sênior',
    quote:
      '"Tudo deve ser feito da forma mais simples possível, mas não mais simples do que isso."',
    portraitAlt: 'Retrato de Dante Escame',
    introPara1:
      'Engenheiro de Software Sênior com mais de 6 anos de experiência em desenvolvimento full-stack em aplicações de grande escala e alto impacto.',
    introPara2:
      'Construo produtos com mentalidade de entrega e foco em performance de backend, aplicando padrões de mercado com: .NET, C#, React, Node, Next, AWS, Kubernetes e Docker.',
    resumeBtn: 'Baixar Meu Currículo',
    projectsBtn: 'Ver meus projetos',
    linkedinBtn: 'Visitar LinkedIn',
    avatarLabel: 'Avatar interativo',
    dragLabel: 'Arraste para inspecionar',
    syncingLabel: 'Sincronizando avatar...',
  },
  background: {
    badge: 'Minha Trajetória',
    feedTag: 'Feed do histórico',
    verticalTag: 'Modo vertical',
    eyebrow: 'Camada cronológica',
    title: 'Bem-vindo à minha linha do tempo',
    description: 'Veja como tem sido minha jornada até aqui.',
  },
  projects: {
    badge: 'Projetos',
    myProjectsBadge: 'Meus Projetos',
    curatedTag: 'Curadoria',
    liveTag: 'Ao Vivo',
    featuredEyebrow: 'Trabalhos em Destaque',
    featuredTitle: 'Projetos em Destaque',
    featuredDesc:
      'Esses cards são selecionados do feed de projetos do GitHub, mantendo esta seção atualizada sem uma fonte de conteúdo separada.',
    featuredError:
      'Os projetos em destaque estão temporariamente indisponíveis porque o feed do GitHub não pôde ser carregado.',
    githubEyebrow: 'Do GitHub',
    githubTitle: 'Feed público de projetos',
    githubDesc: 'Todos os dados desta página estão sendo buscados dinamicamente do meu GitHub!',
    feedUnavailable: 'Feed indisponível',
    githubError: 'Os projetos do GitHub não puderam ser carregados no momento.',
  },
  technologies: {
    eyebrow: 'Stack principal',
    title: 'O que Costumo Utilizar',
    note: 'Esse é o meu stack habitual, mas não representa o limite do que posso construir. Possuo aprendizado rápido e frequentemente estudo novas tecnologias quando o produto exige.',
  },
};

export const messages: Record<Locale, Messages> = {
  en,
  'pt-br': ptBr,
};
