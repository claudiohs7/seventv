# Seven TV - Vite Edition 🚀

Projeto Seven TV migrado para Vite com integração de modelo 3D Spline.

## 🎯 Características

- ⚡ **Vite** - Build ultra-rápido
- 🎨 **React 19** + TypeScript
- 🎭 **Spline 3D** - Modelo interativo em tela cheia
- 🎨 **Tailwind CSS** - Estilização moderna
- 🧭 **React Router** - Navegação client-side
- 📦 **Shadcn UI** - Componentes acessíveis

## 🚀 Deploy na Hostinger

### Configurações Necessárias:

1. **Framework**: Vite
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Node Version**: 22.x

### Passos:

1. Conecte seu repositório GitHub à Hostinger
2. Configure as variáveis acima
3. Clique em "Deploy"

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📁 Estrutura

```
src/
├── components/
│   ├── ui/          # Componentes base (Button, Card, Spline, Spotlight)
│   ├── Navbar.tsx
│   └── SplineDemo.tsx
├── pages/
│   ├── HomePage.tsx          # Hero 3D em tela cheia
│   ├── SplineDemoPage.tsx
│   ├── AdminDashboard.tsx
│   ├── AdminLoginPage.tsx
│   ├── ContactPage.tsx
│   ├── ProductPage.tsx
│   └── ServerPage.tsx
├── lib/
│   └── utils.ts
└── App.tsx
```

## 🎨 Páginas

- `/` - Home com modelo 3D interativo
- `/demo/spline` - Demonstração completa do Spline
- `/admin/login` - Login administrativo
- `/admin` - Dashboard
- `/contact` - Contato
- `/server/:slug` - Servidor específico
- `/product/:id` - Produto específico

## 🔧 Tecnologias

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.3.0
- Tailwind CSS 3.3.0
- React Router DOM
- Spline (@splinetool/react-spline)
- Framer Motion
- Radix UI
- Lucide React

## 📝 Notas

- O modelo 3D está configurado para interação com mouse
- Build otimizado para produção
- Lazy loading do Spline para melhor performance

## 🐛 Troubleshooting

### Build falha com erro TypeScript
Execute: `npm run build` localmente para verificar erros

### Modelo 3D não carrega
Verifique se a URL do Spline está acessível

### Erro de CORS
Certifique-se que a cena Spline está publicada publicamente

## 📄 Licença

Projeto privado - Seven TV © 2025
