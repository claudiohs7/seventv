# Seven TV - Vite Edition

Projeto Seven TV recriado com **Vite + React + TypeScript**.

## 🚀 Tecnologias

- **Vite** - Build tool ultra-rápido
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **React Router** - Roteamento
- **TailwindCSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Prisma** - ORM (preparado para uso)

## 📁 Estrutura do Projeto

```
seventv-vite/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── ui/         # Componentes UI base
│   │   └── Navbar.tsx
│   ├── pages/          # Páginas da aplicação
│   │   ├── HomePage.tsx
│   │   ├── AdminLoginPage.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── ServerPage.tsx
│   │   ├── ProductPage.tsx
│   │   └── ContactPage.tsx
│   ├── lib/            # Utilitários
│   │   └── utils.ts
│   ├── data/           # Dados estáticos
│   ├── App.tsx         # Componente principal com rotas
│   ├── main.tsx        # Ponto de entrada
│   └── index.css       # Estilos globais
├── public/             # Arquivos estáticos
└── package.json
```

## 🎯 Rotas Disponíveis

- `/` - Página inicial
- `/admin/login` - Login administrativo
- `/admin` - Dashboard admin
- `/server/:slug` - Página de servidor específico
- `/product/:id` - Página de produto
- `/contact` - Página de contato

## 🛠️ Como Usar

### Instalação

```bash
cd seventv-vite
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 🎨 Diferenças do Next.js

### Roteamento
- **Next.js**: File-based routing (`app/` directory)
- **Vite**: React Router DOM (configurado em `App.tsx`)

### Navegação
- **Next.js**: `<Link href="/path">`
- **Vite**: `<Link to="/path">`

### Imagens
- **Next.js**: `<Image>` component otimizado
- **Vite**: `<img>` tag padrão (ou use vite-plugin-image-optimizer)

### API Routes
- **Next.js**: `app/api/` directory
- **Vite**: Precisa de backend separado (Express, Fastify, etc.)

### Server Components
- **Next.js**: Suporta Server Components
- **Vite**: Apenas Client Components

## 📦 Próximos Passos

1. **Backend**: Configurar servidor Express/Fastify para APIs
2. **Autenticação**: Implementar sistema de auth completo
3. **Banco de Dados**: Configurar Prisma com PostgreSQL
4. **Imagens**: Adicionar imagens do projeto original
5. **Componentes**: Migrar componentes restantes do Next.js

## 🔧 Configurações

- **Alias**: `@/` aponta para `src/`
- **TailwindCSS**: Configurado com tema customizado
- **TypeScript**: Strict mode habilitado
- **ESLint**: Configurado para React

## 📝 Notas

Este projeto replica a estrutura do Seven TV original (Next.js) mas usando Vite para melhor performance de desenvolvimento e builds mais rápidos.

Para funcionalidades que dependem de SSR (Server-Side Rendering), será necessário implementar um backend separado ou considerar usar Vite SSR.
