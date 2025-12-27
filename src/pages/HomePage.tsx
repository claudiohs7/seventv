import Navbar from '@/components/Navbar';
import { SplineScene } from '@/components/ui/spline';


export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section with 3D Background */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* 3D Background - Full Screen */}
                <div className="absolute inset-0 z-0">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>

                {/* Dark Overlay for better text readability - pointer-events-none to allow 3D interaction */}
                <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

                {/* Content Over 3D - pointer-events-none except for buttons */}
                <div className="relative z-20 h-full flex items-center justify-center px-6 pointer-events-none">
                    <div className="container mx-auto max-w-7xl text-center">
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text drop-shadow-2xl">
                            SEVEN TV
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto drop-shadow-lg font-medium">
                            A melhor experiência em servidores IPTV premium. Qualidade, estabilidade e suporte incomparáveis.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a href="#products" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 tech-glow pointer-events-auto">
                                Ver Servidores
                            </a>
                            <a href="#contact" className="px-8 py-4 border-2 border-primary bg-primary/10 backdrop-blur-sm text-primary rounded-lg font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all neon-border pointer-events-auto">
                                Fale Conosco
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
                        Nossos Servidores
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {['Blade', 'Elite', 'Club'].map((server) => (
                            <div key={server} className="glass-panel p-8 hover:scale-105 transition-transform">
                                <h3 className="text-3xl font-bold mb-4 text-primary">{server}</h3>
                                <p className="text-muted-foreground mb-6">
                                    Servidor premium com qualidade excepcional e suporte 24/7.
                                </p>
                                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all">
                                    Acessar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6 bg-card/20">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
                        Recursos Premium
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'HD/4K', desc: 'Qualidade superior' },
                            { title: '24/7', desc: 'Suporte sempre disponível' },
                            { title: 'Estável', desc: 'Sem travamentos' },
                            { title: 'Rápido', desc: 'Carregamento instantâneo' }
                        ].map((feature, i) => (
                            <div key={i} className="glass-panel p-6 text-center">
                                <h4 className="text-2xl font-bold mb-2 text-primary">{feature.title}</h4>
                                <p className="text-muted-foreground">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10">
                <div className="container mx-auto max-w-7xl text-center text-muted-foreground">
                    <p>&copy; 2025 Seven TV. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
