import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5",
            scrolled ? "bg-background/80 backdrop-blur-md py-2" : "bg-transparent py-4"
        )}>
            <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                    <img src="/images/seven_tv_logo_v2.png" alt="Seven TV" className="h-12 object-contain" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#products" className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                        Servidores
                    </a>
                    <a href="#features" className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                        Recursos
                    </a>
                    <Link to="/demo/spline" className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                        Demo 3D
                    </Link>
                    <Link to="/contact" className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                        Contato
                    </Link>
                    <Link to="/admin/login">
                        <Button variant="outline" size="sm" className="gap-2 font-bold border-primary text-primary hover:bg-primary hover:text-white">
                            <LogIn size={16} /> Admin
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-background border-b border-border flex flex-col p-4 gap-4 md:hidden animate-in slide-in-from-top-2">
                        <a href="#products" className="text-lg font-medium p-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Servidores</a>
                        <a href="#features" className="text-lg font-medium p-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Recursos</a>
                        <Link to="/demo/spline" className="text-lg font-medium p-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Demo 3D</Link>
                        <Link to="/contact" className="text-lg font-medium p-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Contato</Link>
                        <Link to="/admin/login" className="text-lg font-bold text-primary p-2" onClick={() => setIsOpen(false)}>Painel Admin</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
