import { blogImg, depoimentosAutoresImg, depoimentosImg, equipe, equipeImg, eventosImg, mockimageurl, publicacoesImg } from "./imageUrls";

export const depoimentos = [
    {
        id:1,
        nome: "Grabriela Rodrigues",
        email: "Grabriela@email.com",
        tipo: "leitor",
        foto: depoimentosImg[0],
        comentario: "A CompSelect tem sido uma referência constante nas minhas pesquisas. As publicações são sempre muito bem fundamentadas e com uma curadoria impecável. É ótimo ter uma editora especializada em Ciência da Computação com esse nível de qualidade."
    },
    {
        id:2,
        nome: "Rita Karla",
        email: "rita@email.com",
        tipo: "autor",
        foto: depoimentosImg[1],
        comentario: "Gosto muito da abordagem da CompSelect nos livros e artigos que publica. O conteúdo é técnico, mas acessível, o que ajuda tanto quem está começando quanto profissionais mais experientes."
    },
    {
        id:3,
        nome: "Jacinto Donato",
        email: "jacinto@email.com",
        tipo: "autor",
        foto: depoimentosImg[2],
        comentario: "É impressionante a qualidade editorial da CompSelect. Os trabalhos são claros, atualizados e trazem contribuições relevantes para o meio acadêmico e científico. Recomendo sempre aos meus alunos."
    },
    {
        id:4,
        nome: "Catarina Sampaio",
        email: "catarina@email.com",
        tipo: "leitor",
        foto: depoimentosImg[3],
        comentario: "Já utilizei diversos materiais da CompSelect como base para projetos e apresentações. Sempre encontro algo novo e relevante para o que estou estudando ou desenvolvendo."
    },
    {
        id:5,
        nome: "Nicolau Mineiro",
        email: "mineiro@email.com",
        tipo: "leitor",
        foto: depoimentosImg[4],
        comentario: "A CompSelect valoriza o trabalho de pesquisadores da área e oferece uma plataforma excelente para divulgação científica. Publicar com eles foi uma experiência extremamente positiva."
    },
    {
        id:6,
        nome: "Carlos Bragança",
        email: "carlos@email.com",
        tipo: "leitor",
        foto: depoimentosImg[5],
        comentario: "Fico feliz em ver uma editora nacional investindo tanto em ciência e tecnologia. A CompSelect tem um papel importante na disseminação de conhecimento de qualidade."
    },
    {
        id:7,
        nome: "Lionel Vasconselos",
        email: "lionel@email.com",
        tipo: "leitor",
        foto: depoimentosImg[6],
        comentario: "O cuidado com a revisão técnica e o design das publicações é algo que diferencia a CompSelect. Dá gosto de ler os materiais, tanto pela clareza quanto pela apresentação."
    },
    {
        id:8,
        nome: "Jorge Guerreiro",
        email: "jorge@email.com",
        tipo: "leitor",
        foto: depoimentosImg[7],
        comentario: "Sempre que procuro referências sólidas em ciência da computação, acabo caindo em alguma publicação da CompSelect. É um verdadeiro selo de confiança no meio acadêmico."
    },
]

export const depoimentosAutores = [
    {
        id:1,
        nome: "Cibeli Rodrigues",
        email: "cibeli@email.com",
        tipo: "autor",
        foto: depoimentosAutoresImg[0],
        comentario: "Publicar meu artigo com a CompSelect foi uma das experiências mais profissionais que já tive. A equipe editorial foi atenciosa do início ao fim, com sugestões valiosas que melhoraram muito o resultado final."
    },
    {
      id:2,
      nome: "Rita Karla",
      email: "rita@email.com",
      tipo: "autor",
      foto: depoimentosAutoresImg[1],
      comentario: "Gosto muito da abordagem da CompSelect nos livros e artigos que publica. O conteúdo é técnico, mas acessível, o que ajuda tanto quem está começando quanto profissionais mais experientes."
    },
    {
        id:3,
        nome: "Jacinto Donato",
        email: "jacinto@email.com",
        tipo: "autor",
        foto: depoimentosImg[2],
        comentario: "É impressionante a qualidade editorial da CompSelect. Os trabalhos são claros, atualizados e trazem contribuições relevantes para o meio acadêmico e científico. Recomendo sempre aos meus alunos."
    },
    {
        id:4,
        nome: "Sofia Guimarães",
        email: "sofia@email.com",
        tipo: "autor",
        foto: depoimentosAutoresImg[3],
        comentario: "Tive a oportunidade de lançar meu primeiro livro técnico com a CompSelect e fiquei impressionado com o cuidado em cada etapa do processo. Eles realmente valorizam o autor e o conteúdo científico."
    },
    {
        id:5,
        nome: "Maria João",
        email: "mariaj@email.com",
        tipo: "autor",
        foto: depoimentosAutoresImg[4],
        comentario: "A CompSelect ofereceu todo o suporte necessário para a publicação da minha pesquisa. O trabalho ficou com excelente apresentação gráfica e teve ótima visibilidade na comunidade acadêmica."
    },
    {
        id:6,
        nome: "Silvia Brasileiro",
        email: "slvbrslr@email.com",
        tipo: "autor",
        foto: depoimentosAutoresImg[5],
        comentario: "Sou muito grata à CompSelect por acreditar no meu projeto. A seriedade da editora e o compromisso com a qualidade científica fizeram toda a diferença na publicação do meu trabalho."
    },
]

  export const events = [
      {
        id: 1,
        nome: "Simpósio de Inovação em Computação",
        foto: eventosImg[0],
        data: "15/03/25",
        local: "Centro de Convenções de Recife",
        inscricao: "Livre",
        conteudo: "O Simpósio de Inovação em Computação reuniu pesquisadores, profissionais e estudantes para discutir os avanços recentes em IA, computação em nuvem e segurança da informação. A CompSelect participou com um estande interativo e lançou três novas publicações voltadas à Inteligência Artificial e Ciência de Dados."
    },
    {
        id: 2,
        nome: "Workshop de Publicações Acadêmicas",
        foto: eventosImg[1],
        data: "10/01/25",
        local: "Online",
        inscricao: "Gratuita mediante inscrição",
        conteudo: "Voltado a estudantes de pós-graduação e jovens pesquisadores, o workshop abordou práticas recomendadas para publicação científica. A CompSelect organizou o evento e ministrou sessões sobre estruturação de artigos, revisão por pares e critérios de qualidade editorial."
    },
    {
        id: 3,
        nome: "Feira Nacional de Tecnologia Aplicada",
        foto: eventosImg[2],
        data: "04/04/25",
        local: "Expo Center Norte - São Paulo",
        inscricao: "Paga",
        conteudo: "A feira é um dos maiores eventos de tecnologia do país, apresentando soluções e produtos de empresas e centros de pesquisa. A CompSelect teve participação ativa apresentando seu catálogo técnico, promovendo painéis sobre inovação científica e distribuindo edições especiais de seus principais livros."
    },
    {
        id: 4,
        nome: "Lançamento Coletivo de Livros",
        foto: eventosImg[3],
        data: "02/05/25",
        local: "Auditório da UFSC",
        inscricao: "Livre",
        conteudo: "O evento celebrou o lançamento simultâneo de diversas obras acadêmicas produzidas por docentes e discentes da área de ciência da computação. A CompSelect foi a responsável pela publicação das obras, realizando também uma sessão de autógrafos e uma mesa-redonda sobre o papel da divulgação científica."
    },
    {
        id: 5,
        nome: "Congresso Internacional de Computação e Sociedade",
        foto: eventosImg[4],
        data: "18/06/25",
        local: "Universidade Federal da Bahia",
        inscricao: "Mediante inscrição",
        conteudo: "Este congresso discute as relações entre tecnologia, ética, educação e impacto social. A CompSelect participará como editora convidada, apresentando publicações recentes sobre inclusão digital, inteligência artificial e políticas públicas voltadas à tecnologia."
    },
    {
        id: 6,
        nome: "Semana Acadêmica de Ciência da Computação",
        foto: eventosImg[5],
        data: "22/11/25",
        local: "IFSP — Campus Campinas",
        inscricao: "Aberta ao público",
        conteudo: "Com palestras, minicursos e mesas-redondas, a semana acadêmica promoveu a troca de conhecimentos entre alunos e profissionais da área. A CompSelect marcou presença com uma palestra sobre o mercado editorial técnico e lançou um e-book gratuito voltado a estudantes de graduação."
    }
]

export const ourTeam = [
    {
        nome: "Evaldo Alves",
        foto: equipe[0],
        funcao: "editor",
        email: "pessoa@email.com",
        descricao: "Doutor em Ciência da Computação com 22 anos de experiência na área de visão computacional"
    },
    {
        nome: "Emile Christie",
        foto: equipe[1],
        funcao: "editora",
        email: "pessoa@email.com",
        descricao: "Doutora em Ciência da Computação e fundadora da editora. Especialista em UX/UI com 37 anos de experiência no mercado"
    },
    {
        nome: "Luiz Sergio",
        foto: equipe[2],
        funcao: "editor",
        email: "pessoa@email.com",
        descricao: "Mestre em Ciência da Computação com um vasto arcabolso de habilidades com o uso de multiplas tecnologias."
    },
]

export const authors = [
    {
      id: 1,
      nome: "Cibeli Rodrigues",
      email: "cibeli@email.com",
      funcao: "autor",
      foto: depoimentosAutoresImg[0],
      descricao: "Mestre em Engenharia de Software, com foco em testes automatizados e qualidade de código."
    },
    {
      id: 2,
      nome: "Rita Karla",
      email: "rita@email.com",
      funcao: "autor",
      foto: depoimentosAutoresImg[1],
      descricao: "Desenvolvedora full stack e entusiasta de projetos open source voltados à educação."
    },
    {
      id: 3,
      nome: "Jacinto Donato",
      email: "jacinto@email.com",
      funcao: "autor",
      foto: depoimentosImg[2],
      descricao: "Professor universitário há mais de 15 anos, com ênfase em algoritmos e estruturas de dados."
    },
    {
      id: 4,
      nome: "Sofia Guimarães",
      email: "sofia@email.com",
      funcao: "autor",
      foto: depoimentosAutoresImg[3],
      descricao: "Engenheira de computação com experiência em sistemas embarcados e hardware inteligente."
    },
    {
      id: 5,
      nome: "Maria João",
      email: "mariaj@email.com",
      funcao: "autor",
      foto: depoimentosAutoresImg[4],
      descricao: "Mestranda em ciência da computação, pesquisando acessibilidade digital e usabilidade."
    },
    {
      id: 6,
      nome: "Silvia Brasileiro",
      email: "slvbrslr@email.com",
      funcao: "autor",
      foto: depoimentosAutoresImg[5],
      descricao: "Pesquisadora em inteligência artificial com foco em aprendizado de máquina e ética algorítmica."
    }
]

export const bestSellers = [
    {
      title: 'Desenvolvimento de Aplicações Serverless',
      type: 'Livro',
      coverImage: publicacoesImg[0],
    },
    {
      title: 'Sistemas Embarcados para IoT',
      type: 'Livro',
      coverImage: publicacoesImg[2],
    },
    {
      title: 'Ética em Algoritmos de IA',
      type: 'Livro',
      coverImage: publicacoesImg[4],
    },
    {
      title: 'MapReduce na Prática',
      type: 'Livro',
      coverImage: publicacoesImg[10],
    },
    {
      title: 'Comunicação MQTT para Dispositivos',
      type: 'Periódico',
      coverImage: publicacoesImg[12],
    },
    {
      title: 'Otimização de Pipelines de Build',
      type: 'Artigo',
      coverImage: publicacoesImg[5],
    },
    {
      title: 'Automação de Code Coverage',
      type: 'Artigo',
      coverImage: publicacoesImg[6],
    },
  ];

export const destaques = [
    {
      title: 'Sistemas Embarcados para IoT',
      type: 'livro',
      author: 'Sofia Guimarães',
      summary: 'Sofia Guimarães apresenta um framework leve para desenvolvimento de sistemas embarcados comunicando dispositivos IoT em redes heterogêneas.',
      coverImage: publicacoesImg[2],
    },
    {
      title: 'MapReduce na Prática',
      type: 'artigo',
      author: 'Jacinto Donato',
      summary: 'Jacinto detalha a implementação do MapReduce para processar grandes volumes de dados.',
      coverImage: publicacoesImg[10],
    },
    {
      title: 'Microcontroladores ARM para Iniciantes',
      type: 'periódico',
      author: 'Sofia Guimarães',
      summary: 'Edição inaugural do Periódico Sistemas Embarcados, abordando fundamentos de programação em microcontroladores ARM para quem está começando na área.',
      coverImage: publicacoesImg[13],
    },
  ];

export const lancamentos = [
    {
      title: 'Acessibilidade em Interfaces Web',
      type: 'Artigo',
      coverImage: publicacoesImg[3],
    },
    {
      title: 'Refatoração de Código Legado',
      type: 'Livro',
      coverImage: publicacoesImg[7],
    },
    {
      title: 'Patterns de Serverless Orchestration',
      type: 'Artigo',
      coverImage: publicacoesImg[8],
    },
    {
      title: 'Guia Prático de Functions as a Service',
      type: 'Livro',
      coverImage: publicacoesImg[9],
    },
    {
      title: 'Hadoop vs Spark: Comparativo',
      type: 'Periódico',
      coverImage: publicacoesImg[11],
    },
    {
      title: 'Microcontroladores ARM para Iniciantes',
      type: 'Periódico',
      coverImage: publicacoesImg[13],
    },
    {
      title: 'Estruturas de Dados Avançadas para Big Data',
      type: 'Artigo',
      coverImage: publicacoesImg[1],
    },
  ];

  export const todasPublicacoes = [
    {
      title: 'Desenvolvimento de Aplicações Serverless',
      type: 'Livro',
      author: 'Rita Karla',
      summary: 'Rita Karla explora padrões e práticas para criar aplicações serverless escaláveis usando AWS Lambda e Azure Functions.',
      coverImage: publicacoesImg[0],
      vendas: 120,
      sobreOautor: 'Desenvolvedora full stack e entusiasta de projetos open source voltados à educação.',
      formato: 'ebook e físico',
      tema: 'Desenvolvimento Serverless',
      ano: 2023,
      precoEbook: 1.49,
      precoFisico: 39.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.0,
      avaliacoes: [
        {
          avaliacao: 4,
          foto: '',
          nome: 'Letícia Alves',
          email: 'leticia.alves@email.com',
          comentario: 'Metodologia clara e exemplos práticos.'
        },
        {
          avaliacao: 4,
          foto: '',
          nome: 'Bruno Costa',
          email: 'bruno.costa@email.com',
          comentario: 'Excelente para iniciantes e intermediários.'
        },
        {
          avaliacao: 3,
          foto: '',
          nome: 'Ana Rocha',
          email: 'ana.rocha@email.com',
          comentario: 'Gostei dos casos de uso, mas faltou profundidade.'
        }
      ]
    },
    {
      title: 'Estruturas de Dados Avançadas para Big Data',
      type: 'Artigo',
      author: 'Jacinto Donato',
      summary: 'Neste artigo, Jacinto Donato explora técnicas avançadas de estruturas de dados para gerenciamento eficiente de grandes volumes de dados.',
      coverImage: publicacoesImg[1],
      vendas: 90,
      sobreOautor: 'Professor universitário há mais de 15 anos, com ênfase em algoritmos e estruturas de dados.',
      formato: 'ebook e físico',
      tema: 'Big Data',
      ano: 2023,
      precoEbook: 0.99,
      precoFisico: 29.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.7,
      avaliacoes: [
        {
          avaliacao: 5,
          foto: '',
          nome: 'Carlos Pereira',
          email: 'carlos.pereira@email.com',
          comentario: 'Conteúdo profundo e muito bem explicado.'
        },
        {
          avaliacao: 5,
          foto: '',
          nome: 'Letícia Alves',
          email: 'leticia.alves@email.com',
          comentario: 'Referência essencial para estudo de Big Data.'
        },
        {
          avaliacao: 4,
          foto: '',
          nome: 'Bruno Costa',
          email: 'bruno.costa@email.com',
          comentario: 'Bom equilíbrio entre teoria e prática.'
        }
      ]
    },
    {
      title: 'Sistemas Embarcados para IoT',
      type: 'Livro',
      author: 'Sofia Guimarães',
      summary: 'Sofia Guimarães apresenta um framework leve para desenvolvimento de sistemas embarcados comunicando dispositivos IoT em redes heterogêneas.',
      coverImage: publicacoesImg[2],
      vendas: 110,
      sobreOautor: 'Engenheira de computação com experiência em sistemas embarcados e hardware inteligente.',
      formato: 'ebook e físico',
      tema: 'IoT',
      ano: 2023,
      precoEbook: 1.19,
      precoFisico: 31.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 3.7,
      avaliacoes: [
        {
          avaliacao: 4,
          foto: '',
          nome: 'Ana Rocha',
          email: 'ana.rocha@email.com',
          comentario: 'Ótima introdução ao hardware embarcado.'
        },
        {
          avaliacao: 4,
          foto: '',
          nome: 'Diego Martins',
          email: 'diego.martins@email.com',
          comentario: 'Framework fácil de usar e bem documentado.'
        },
        {
          avaliacao: 3,
          foto: '',
          nome: 'Priscila Dias',
          email: 'priscila.dias@email.com',
          comentario: 'Conteúdo bom, mas poderia ter mais exemplos.'
        }
      ]
    },
    {
      title: 'Acessibilidade em Interfaces Web',
      type: 'Artigo',
      author: 'Maria João',
      summary: 'Maria João discute melhores práticas de acessibilidade em interfaces web, visando usabilidade para pessoas com deficiência.',
      coverImage: publicacoesImg[3],
      vendas: 80,
      sobreOautor: 'Mestranda em ciência da computação, pesquisando acessibilidade digital e usabilidade.',
      formato: 'ebook e físico',
      tema: 'Acessibilidade',
      ano: 2023,
      precoEbook: 0.89,
      precoFisico: 27.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.7,
      avaliacoes: [
        {
          avaliacao: 5,
          foto: '',
          nome: 'Rafael Mendes',
          email: 'rafael.mendes@email.com',
          comentario: 'Abordagem clara e inclusiva.'
        },
        {
          avaliacao: 5,
          foto: '',
          nome: 'Juliana Ferreira',
          email: 'juliana.ferreira@email.com',
          comentario: 'Referência essencial para designers.'
        },
        {
          avaliacao: 4,
          foto: '',
          nome: 'Marcelo Souza',
          email: 'marcelo.souza@email.com',
          comentario: 'Conteúdo aplicável e relevante.'
        }
      ]
    },
    {
      title: 'Ética em Algoritmos de IA',
      type: 'Livro',
      author: 'Silvia Brasileiro',
      summary: 'Silvia Brasileiro analisa dilemas éticos e propostas de regulamentação em algoritmos de inteligência artificial.',
      coverImage: publicacoesImg[4],
      vendas: 130,
      sobreOautor: 'Pesquisadora em inteligência artificial com foco em aprendizado de máquina e ética algorítmica.',
      formato: 'ebook e físico',
      tema: 'Ética em IA',
      ano: 2023,
      precoEbook: 1.99,
      precoFisico: 49.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 3.7,
      avaliacoes: [
        {
          avaliacao: 4,
          foto: '',
          nome: 'Fernanda Lima',
          email: 'fernanda.lima@email.com',
          comentario: 'Debate importante e bem fundamentado.'
        },
        {
          avaliacao: 3,
          foto: '',
          nome: 'Carlos Pereira',
          email: 'carlos.pereira@email.com',
          comentario: 'Faltou mais casos de estudo.'
        },
        {
          avaliacao: 4,
          foto: '',
          nome: 'Letícia Alves',
          email: 'leticia.alves@email.com',
          comentario: 'Livro provocativo e atual.'
        }
      ]
    },
    {
      title: 'Otimização de Pipelines de Build',
      type: 'Artigo',
      author: 'Cibeli Rodrigues',
      summary: 'Cibeli Rodrigues detalha estratégias para otimização de pipelines de build usando ferramentas modernas de automação.',
      coverImage: publicacoesImg[5],
      vendas: 140,
      sobreOautor: 'Mestre em Engenharia de Software, com foco em testes automatizados e qualidade de código.',
      formato: 'ebook e físico',
      tema: 'DevOps',
      ano: 2024,
      precoEbook: 1.29,
      precoFisico: 34.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.7,
      avaliacoes: [
        {
          avaliacao: 5,
          foto: '',
          nome: 'Diego Martins',
          email: 'diego.martins@email.com',
          comentario: 'Dicas valiosas e fáceis de aplicar.'
        },
        {
          avaliacao: 5,
          foto: '',
          nome: 'Priscila Dias',
          email: 'priscila.dias@email.com',
          comentario: 'Conteúdo prático e eficiente.'
        },
        {
          avaliacao: 4,
          foto: '',
          nome: 'Rafael Mendes',
          email: 'rafael.mendes@email.com',
          comentario: 'Boa abordagem de automação.'
        }
      ]
    },
    {
      title: 'Automação de Code Coverage',
      type: 'Artigo',
      author: 'Cibeli Rodrigues',
      summary: 'Cibeli explora ferramentas para medir e automatizar cobertura de testes em projetos ágeis.',
      coverImage: publicacoesImg[6],
      vendas: 100,
      sobreOautor: 'Mestre em Engenharia de Software, com foco em testes automatizados e qualidade de código.',
      formato: 'ebook e físico',
      tema: 'Qualidade de Software',
      ano: 2024,
      precoEbook: 0.79,
      precoFisico: 24.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.3,
      avaliacoes: [
        { avaliacao: 5, foto: '', nome: 'Marcelo Souza', email: 'marcelo.souza@email.com', comentario: 'Muito claro e objetivo.' },
        { avaliacao: 4, foto: '', nome: 'Ana Rocha', email: 'ana.rocha@email.com', comentario: 'Conteúdo bem estruturado.' },
        { avaliacao: 4, foto: '', nome: 'Bruno Costa', email: 'bruno.costa@email.com', comentario: 'Exemplos práticos úteis.' }
      ]
    },
    {
      title: 'Refatoração de Código Legado',
      type: 'Livro',
      author: 'Rita Karla',
      summary: 'Rita apresenta técnicas de refatoração para modernizar e manter sistemas legados.',
      coverImage: publicacoesImg[7],
      vendas: 85,
      sobreOautor: 'Desenvolvedora full stack e entusiasta de projetos open source voltados à educação.',
      formato: 'ebook e físico',
      tema: 'Qualidade de Software',
      ano: 2024,
      precoEbook: 1.19,
      precoFisico: 31.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.0,
      avaliacoes: [
        { avaliacao: 4, foto: '', nome: 'Fernanda Lima', email: 'fernanda.lima@email.com', comentario: 'Livro prático e direto.' },
        { avaliacao: 3, foto: '', nome: 'Diego Martins', email: 'diego.martins@email.com', comentario: 'Boa abordagem, mas pouco aprofundada.' },
        { avaliacao: 5, foto: '', nome: 'Juliana Ferreira', email: 'juliana.ferreira@email.com', comentario: 'Transformador para meu trabalho.' }
      ]
    },
  
    // Desenvolvimento Serverless
    {
      title: 'Patterns de Serverless Orchestration',
      type: 'Artigo',
      author: 'Rita Karla',
      summary: 'Rita discute padrões de orquestração em arquiteturas serverless distribuídas.',
      coverImage: publicacoesImg[8],
      vendas: 95,
      sobreOautor: 'Desenvolvedora full stack e entusiasta de projetos open source voltados à educação.',
      formato: 'ebook e físico',
      tema: 'Desenvolvimento Serverless',
      ano: 2024,
      precoEbook: 0.89,
      precoFisico: 27.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.3,
      avaliacoes: [
        { avaliacao: 4, foto: '', nome: 'Letícia Alves', email: 'leticia.alves@email.com', comentario: 'Patrones bem explicados.' },
        { avaliacao: 5, foto: '', nome: 'Marcelo Souza', email: 'marcelo.souza@email.com', comentario: 'Conteúdo excelente.' },
        { avaliacao: 4, foto: '', nome: 'Ana Rocha', email: 'ana.rocha@email.com', comentario: 'Extremamente útil.' }
      ]
    },
    {
      title: 'Guia Prático de Functions as a Service',
      type: 'Livro',
      author: 'Cibeli Rodrigues',
      summary: 'Cibeli demonstra como implementar e testar funções serverless em diferentes provedores.',
      coverImage: publicacoesImg[9],
      vendas: 70,
      sobreOautor: 'Mestre em Engenharia de Software, com foco em testes automatizados e qualidade de código.',
      formato: 'ebook e físico',
      tema: 'Desenvolvimento Serverless',
      ano: 2024,
      precoEbook: 0.99,
      precoFisico: 29.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.0,
      avaliacoes: [
        { avaliacao: 4, foto: '', nome: 'Bruno Costa', email: 'bruno.costa@email.com', comentario: 'Muito bem documentado.' },
        { avaliacao: 3, foto: '', nome: 'Diego Martins', email: 'diego.martins@email.com', comentario: 'Cobertura básica.' },
        { avaliacao: 5, foto: '', nome: 'Juliana Ferreira', email: 'juliana.ferreira@email.com', comentario: 'Recomendado para iniciantes.' }
      ]
    },
  
    // Big Data
    {
      title: 'MapReduce na Prática',
      type: 'Artigo',
      author: 'Jacinto Donato',
      summary: 'Jacinto detalha a implementação do MapReduce para processar grandes volumes de dados.',
      coverImage: publicacoesImg[10],
      vendas: 110,
      sobreOautor: 'Professor universitário há mais de 15 anos, com ênfase em algoritmos e estruturas de dados.',
      formato: 'ebook e físico',
      tema: 'Big Data',
      ano: 2024,
      precoEbook: 0.99,
      precoFisico: 29.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.7,
      avaliacoes: [
        { avaliacao: 5, foto: '', nome: 'Carlos Pereira', email: 'carlos.pereira@email.com', comentario: 'Teoria e prática bem equilibradas.' },
        { avaliacao: 5, foto: '', nome: 'Letícia Alves', email: 'leticia.alves@email.com', comentario: 'Referência essencial.' },
        { avaliacao: 4, foto: '', nome: 'Ana Rocha', email: 'ana.rocha@email.com', comentario: 'Conteúdo aprofundado.' }
      ]
    },
    {
      title: 'Hadoop vs Spark: Comparativo',
      type: 'Periódico',
      author: 'Jacinto Donato',
      summary: 'Edição especial do Periódico Big Data Journal que compara arquiteturas Hadoop e Spark, enfatizando desempenho e casos de uso em ambientes distribuídos.',
      coverImage: publicacoesImg[11],
      vendas: 95,
      sobreOautor: 'Professor universitário há mais de 15 anos, com ênfase em algoritmos e estruturas de dados.',
      formato: 'ebook e físico',
      tema: 'Big Data',
      ano: 2024,
      precoEbook: 1.29,
      precoFisico: 34.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.3,
      avaliacoes: [
        { avaliacao: 4, foto: '', nome: 'Bruno Costa',    email: 'bruno.costa@email.com',    comentario: 'Comparativo claro.'                 },
        { avaliacao: 4, foto: '', nome: 'Diego Martins',  email: 'diego.martins@email.com',  comentario: 'Bom guia de referência.'          },
        { avaliacao: 5, foto: '', nome: 'Juliana Ferreira',email: 'juliana.ferreira@email.com',comentario: 'Excelente análise.'                }
      ]
    },
    
    // IoT
    {
      title: 'Comunicação MQTT para Dispositivos',
      type: 'Periódico',
      author: 'Sofia Guimarães',
      summary: 'Artigo de capa do Periódico IoT Insights dedicando-se ao protocolo MQTT e suas aplicações em redes de baixa latência para dispositivos embarcados.',
      coverImage: publicacoesImg[12],
      vendas: 105,
      sobreOautor: 'Engenheira de computação com experiência em sistemas embarcados e hardware inteligente.',
      formato: 'ebook e físico',
      tema: 'IoT',
      ano: 2024,
      precoEbook: 0.89,
      precoFisico: 27.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.7,
      avaliacoes: [
        { avaliacao: 5, foto: '', nome: 'Rafael Mendes',    email: 'rafael.mendes@email.com',    comentario: 'Explicação objetiva.'           },
        { avaliacao: 5, foto: '', nome: 'Marcelo Souza',    email: 'marcelo.souza@email.com',    comentario: 'Muito útil.'                     },
        { avaliacao: 4, foto: '', nome: 'Carlos Pereira',  email: 'carlos.pereira@email.com',  comentario: 'Bom para iniciantes.'            }
      ]
    },
    {
      title: 'Microcontroladores ARM para Iniciantes',
      type: 'Periódico',
      author: 'Sofia Guimarães',
      summary: 'Edição inaugural do Periódico Sistemas Embarcados, abordando fundamentos de programação em microcontroladores ARM para quem está começando na área.',
      coverImage: publicacoesImg[13],
      vendas: 90,
      sobreOautor: 'Engenheira de computação com experiência em sistemas embarcados e hardware inteligente.',
      formato: 'ebook e físico',
      tema: 'IoT',
      ano: 2024,
      precoEbook: 1.19,
      precoFisico: 31.90,
      avaliacoesQtd: 3,
      avaliacaoMedia: 4.3,
      avaliacoes: [
        { avaliacao: 4, foto: '', nome: 'Priscila Dias',   email: 'priscila.dias@email.com',   comentario: 'Conteúdo bem detalhado.'       },
        { avaliacao: 4, foto: '', nome: 'Bruno Costa',     email: 'bruno.costa@email.com',     comentario: 'Explicações claras.'           },
        { avaliacao: 5, foto: '', nome: 'Ana Rocha',       email: 'ana.rocha@email.com',       comentario: 'Excelente para iniciantes.'    }
      ]
    }, 
  ]  


export const artigosMock = [
  {
    id: 1,
    titulo: "Fluxo Óptico na Visão Computacional",
    conteudo: `O fluxo óptico é uma técnica central na visão computacional, utilizada para estimar o movimento aparente de elementos em uma cena com base na variação de intensidade de pixels entre quadros consecutivos de uma sequência de vídeo. Ele fornece um campo vetorial que indica a direção e velocidade com que cada ponto da imagem se desloca. A base do fluxo óptico está na suposição de consistência de brilho, que considera que a intensidade de um ponto na imagem permanece constante ao longo do tempo, mesmo que sua posição mude. A partir dessa premissa, a derivada temporal da intensidade pode ser relacionada às derivadas espaciais, o que leva à equação fundamental do fluxo óptico. Dois dos algoritmos mais tradicionais para cálculo de fluxo óptico são: Horn-Schunck (1981), método global que impõe uma suavidade ao campo de movimento, assumindo que o fluxo muda lentamente ao longo da imagem. Embora seja útil em cenas suaves, pode ter dificuldade em lidar com descontinuidades de movimento. O outro é o de Lucas-Kanade (1981): Método local que estima o movimento dentro de pequenas regiões (janelas) da imagem. É mais robusto a variações locais, sendo muito usado em aplicações como rastreamento de pontos (feature tracking). Esses métodos são eficientes e funcionam bem para pequenos deslocamentos e cenas com boa iluminação, mas apresentam limitações em condições de oclusão, variações bruscas de movimento ou mudanças de iluminação. O fluxo óptico é amplamente aplicado em diversas áreas da tecnologia como em veículos autônomos (para estimar o movimento de pedestres, veículos e obstáculos em tempo real), análise de vídeo (para detecção de atividade, reconhecimento de comportamento ou vigilância inteligente), rastreamento de objetos (em jogos, realidade aumentada e navegação robótica) e reconstrução 3D (em combinação com outras técnicas, o fluxo óptico pode ajudar a reconstruir a estrutura de cenas tridimensionais em movimento) Com o avanço das redes neurais, surgiram modelos como o FlowNet, que aprendem a estimar o fluxo óptico diretamente de dados rotulados. Esses modelos são capazes de lidar com movimentos maiores e cenas complexas, superando algoritmos tradicionais em precisão e robustez. Mais recentemente, arquiteturas como RAFT (Recurrent All-Pairs Field Transforms) vêm obtendo resultados de estado da arte, utilizando atenção recorrente e refinamento de correspondências entre todos os pares de pixels. Um exemplo clássico de fluxo óptico pode ser visto em vídeos de trânsito urbano. Ao aplicar o algoritmo de Lucas-Kanade em um trecho de vídeo, é possível visualizar vetores apontando o deslocamento dos carros e pedestres, o que permite estimar a velocidade média da via ou antecipar possíveis colisões. O fluxo óptico continua sendo uma ferramenta poderosa e versátil na visão computacional, conectando conceitos matemáticos clássicos com avanços modernos em inteligência artificial. Sua capacidade de descrever e prever o movimento o torna indispensável em sistemas que buscam interpretar o mundo visual de forma dinâmica.`,
    autor: "Evaldo Alves",
    autorImg: equipe[0],
    tipo: "artigo",
    imagem: blogImg[0],
    data: "31/02/2025",
    comentarios: [
      {
          foto: '',
          nome: "João Gomes",
          email: "jgcomprador@email.com",
          comentario: "Um artigo meui bem escrito que demonstra o domínio que o autor tem sobre o tema",
      },
    ]
  },
  {
    id: 2,
    titulo: "Entrevista com Cibeli Rodrigues: Sucesso editorial com o artigo “Otimização de Pipelines de Build”",
    conteudo: `Luiz Sergio (Editor da CompSelect):\nCibeli, é um prazer conversar com você. O seu artigo "Otimização de Pipelines de Build" se tornou uma das publicações mais acessadas e recomendadas da CompSelect. Para começar, de onde veio a motivação para escrevê-lo?\nCibeli Rodrigues (Autora):\nO prazer é meu, Luiz. A motivação surgiu da vivência prática mesmo. Durante um período em que atuei como consultora em times de desenvolvimento ágil, percebi que os pipelines de build eram muitas vezes tratados como um detalhe técnico, quando na verdade tinham impacto direto na produtividade e na qualidade das entregas. Comecei a documentar alguns padrões e boas práticas que observei funcionando bem, e isso naturalmente se transformou no esboço do artigo.\nLuiz Sergio:\nVocê acredita então que o sucesso do artigo está ligado à sua aplicabilidade?\nCibeli Rodrigues:\nSem dúvida. O artigo é técnico, mas tem um viés muito prático. Eu falo sobre gargalos comuns em pipelines, como o uso ineficiente de etapas de cache, a repetição desnecessária de builds em múltiplos ambientes e o custo de builds paralelos mal configurados. O objetivo foi apresentar estratégias que podem ser aplicadas tanto em pequenas startups quanto em grandes times de engenharia. Acho que isso ajudou a atrair leitores de diferentes contextos.\nLuiz Sergio:\nPara quem ainda não leu, o que você destacaria como ponto central do artigo?\nCibeli Rodrigues:\nEu diria que a principal ideia é enxergar o pipeline como um fluxo contínuo de valor e não apenas como um conjunto de scripts automatizados. Quando o time começa a tratar o pipeline como uma parte essencial da entrega, e não apenas uma "caixa preta", muita coisa melhora: os testes ficam mais confiáveis, as entregas mais rápidas e o feedback mais ágil.\nLuiz Sergio:\nO artigo realmente ganhou força rapidamente. Você tem alguma hipótese sobre o que contribuiu para essa popularidade?\nCibeli Rodrigues:\nAcredito que seja uma soma de fatores. O tema é bastante atual — com o crescimento das práticas DevOps, muitos profissionais estão em busca de otimização real, não só de teoria. Além disso, a CompSelect tem uma base de leitores muito qualificada, que valoriza conteúdo técnico sólido. E, claro, a divulgação feita pela própria editora ajudou bastante.\nLuiz Sergio:\nVocê pretende expandir esse conteúdo futuramente?\nCibeli Rodrigues:\nSim! Estou desenvolvendo um material mais extenso com estudos de caso reais, comparando ferramentas e analisando métricas de performance em pipelines modernos. A ideia é transformar esse artigo em um capítulo de um futuro livro técnico. A recepção positiva me incentivou bastante.\nLuiz Sergio:\nQue excelente notícia. Cibeli, muito obrigado por compartilhar sua experiência com a gente. Parabéns pelo trabalho e que venham mais sucessos pela frente!\nCibeli Rodrigues:\nMuito obrigada, Luiz. E obrigada também à CompSelect por apoiar publicações técnicas com tanto cuidado editorial.`,
    autor: "Luiz Sergio",
    autorImg: equipe[2],
    tipo: "entrevista",
    imagem: blogImg[1],
    data: "31/02/2025",
    comentarios: [
      {
          foto: '',
          nome: "Maurício de Souza",
          email: "souzamauricio@email.com",
          comentario: "Muito bom ver a perspectiva da autora sobre o tema para além de seu trabalho publicado",
      },
    ]
  },
  {
    id: 3,
    titulo: "CompSelect celebra 30 anos de compromisso com a ciência da computação",
    conteudo: "Neste ano, a Editora CompSelect completa 30 anos de trajetória dedicada à disseminação do conhecimento na área de ciência da computação. Desde a sua fundação, a editora tem sido uma aliada constante da comunidade acadêmica e científica, apoiando professores, pesquisadores e autores na publicação de conteúdos técnicos e relevantes para o desenvolvimento do setor. Com mais de 200 títulos publicados ao longo de três décadas — entre livros, artigos, periódicos e proceedings —, a CompSelect construiu um catálogo respeitado e diversificado, sempre pautado pela qualidade editorial, rigor científico e acessibilidade. Suas publicações já foram adotadas por instituições de ensino de todo o país e contribuíram diretamente para a formação de milhares de estudantes e profissionais da área. Ao longo dessa jornada, a editora também acompanhou as transformações tecnológicas, inovando em formatos e canais de publicação. Hoje, além das versões impressas, seus materiais estão disponíveis em plataformas digitais, tanto online quanto offline, ampliando o acesso ao conteúdo técnico e acadêmico em múltiplos contextos. Mais do que celebrar um marco temporal, os 30 anos da CompSelect representam um compromisso renovado com o futuro da ciência da computação. Em sintonia com as demandas contemporâneas, a editora segue incentivando novos autores, apoiando a pesquisa científica e promovendo o diálogo entre universidade, mercado e sociedade. A todos que fizeram parte dessa história — autores, leitores, parceiros e colaboradores —, o nosso mais sincero agradecimento. Que venham os próximos 30 anos de inovação, conhecimento e colaboração!",
    autor: "Emile Christie",
    autorImg: equipe[1],
    tipo: "novidade",
    imagem: blogImg[2],
    data: "31/02/2025",
    comentarios: [
      {
          foto: '',
          nome: "Thiago Gomes",
          email: "tgcamargo@email.com",
          comentario: "Muito obrigado por todos os seus servições durante todo esse tempo, CompSelect",
      },
    ]
  },
]