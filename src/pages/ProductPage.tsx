import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';

export default function ProductPage() {
    const { id } = useParams();

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="container mx-auto px-6 pt-32 pb-20">
                <h1 className="text-5xl font-bold gradient-text mb-8">Produto {id}</h1>
                <div className="glass-panel p-8">
                    <p className="text-lg text-muted-foreground">
                        Detalhes do produto {id} serão exibidos aqui.
                    </p>
                </div>
            </div>
        </div>
    );
}
