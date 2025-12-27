import { Users, Server, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function AdminDashboard() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b border-white/10 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold gradient-text">Painel Admin - Seven TV</h1>
                    <Button variant="outline" size="sm" className="gap-2">
                        <LogOut size={16} />
                        Sair
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="glass-panel p-6">
                        <Users className="text-primary mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Usuários</h3>
                        <p className="text-muted-foreground mb-4">Gerenciar usuários do sistema</p>
                        <Button className="w-full">Gerenciar</Button>
                    </div>

                    <div className="glass-panel p-6">
                        <Server className="text-primary mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Servidores</h3>
                        <p className="text-muted-foreground mb-4">Configurar conteúdo dos servidores</p>
                        <Button className="w-full">Configurar</Button>
                    </div>

                    <div className="glass-panel p-6">
                        <Settings className="text-primary mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Configurações</h3>
                        <p className="text-muted-foreground mb-4">Ajustes gerais do sistema</p>
                        <Button className="w-full">Ajustar</Button>
                    </div>
                </div>

                <div className="glass-panel p-8">
                    <h2 className="text-2xl font-bold mb-6">Estatísticas</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary mb-2">150</p>
                            <p className="text-muted-foreground">Usuários Ativos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary mb-2">3</p>
                            <p className="text-muted-foreground">Servidores</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
                            <p className="text-muted-foreground">Uptime</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                            <p className="text-muted-foreground">Suporte</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
