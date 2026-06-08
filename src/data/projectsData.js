export const projectsData = [
  {
    title: 'Reparti 💸',
    subtitle: 'Web App - Gestión y Optimización de Gastos',
    stack: 'Next.js (React 19), TypeScript, PostgreSQL, Prisma ORM, NextAuth.js, Tailwind CSS, SWR.',
    link: 'https://repartiapp.vercel.app/',
    github: 'https://github.com/JuanAgusAlej/', // Ajustar si el repo tiene otro nombre
    description: [
      'Desarrollé una aplicación web end-to-end inspirada en Splitwise para la división y liquidación inteligente de gastos grupales.',
      'Diseñé e implementé un algoritmo Greedy para la optimización de deudas, calculando el camino óptimo y minimizando la cantidad de transacciones requeridas entre usuarios.',
      'Integré autenticación segura con Google OAuth (NextAuth.js v5) y modelé la base de datos relacional en PostgreSQL utilizando Prisma ORM.',
      'Construí un dashboard interactivo con gráficos (Recharts) para la visualización de analíticas mensuales y fetching en tiempo real mediante SWR.',
    ],
  },
  {
    title: 'TaskMaster Local 🚀',
    subtitle: 'Mobile App - Productividad y Recordatorios',
    stack: 'React Native, Expo (Managed Workflow), TypeScript, React Navigation, AsyncStorage, Expo Notifications.',
    link: 'https://drive.google.com/file/d/1Rejfa1c72vQmo-_kBQ0tVXfous53hHqh/view?usp=sharing', // Link de la APK
    github: 'https://github.com/JuanAgusAlej/TaskMaster',
    description: [
      'Desarrollé una aplicación móvil funcional 100% local orientada a la gestión eficiente de tareas y persistencia nativa con AsyncStorage.',
      'Diseñé e implementé un sistema híbrido de recordatorios (temporizadores dinámicos y calendarizados) integrado con flujos de notificaciones push locales nativas.',
      'Estructuré el proyecto bajo una arquitectura modular limpia para asegurar la separación de la lógica de negocio, servicios independientes y tipado estricto.',
      'Creé interfaces premium en modo oscuro con animaciones fluidas (esqueletos de carga) y un sistema integrado de protección de rutas públicas y privadas.',
    ],
  },
];
