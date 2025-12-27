import Navbar from '@/components/Navbar';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="container mx-auto px-6 pt-32 pb-20">
                <h1 className="text-5xl font-bold gradient-text mb-8 text-center">Fale Conosco</h1>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="glass-panel p-8">
                        <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary" size={24} />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-muted-foreground">contato@seventv.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="text-primary" size={24} />
                                <div>
                                    <p className="font-medium">Telefone</p>
                                    <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <MessageSquare className="text-primary" size={24} />
                                <div>
                                    <p className="font-medium">WhatsApp</p>
                                    <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8">
                        <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Nome</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Mensagem</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Sua mensagem..."
                                />
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                Enviar Mensagem
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
