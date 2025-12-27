import Navbar from '@/components/Navbar';
import { SplineSceneBasic } from '@/components/SplineDemo';
import { SplineScene } from '@/components/ui/spline';
import { Card } from '@/components/ui/card';

export default function SplineDemoPage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <h1 className="text-5xl font-bold gradient-text mb-4 text-center">
                    Demonstração 3D Spline
                </h1>
                <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                    Explore cenas 3D interativas integradas perfeitamente ao seu design.
                </p>

                {/* Demo Principal */}
                <div className="mb-16">
                    <SplineSceneBasic />
                </div>

                {/* Exemplos Adicionais */}
                <h2 className="text-3xl font-bold mb-8 text-center">Mais Exemplos</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Exemplo 1 */}
                    <Card className="overflow-hidden">
                        <div className="h-[400px] relative bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Cena Interativa</h3>
                            <p className="text-muted-foreground">
                                Modelo 3D totalmente interativo com controles de mouse e touch.
                            </p>
                        </div>
                    </Card>

                    {/* Exemplo 2 */}
                    <Card className="overflow-hidden">
                        <div className="h-[400px] relative bg-gradient-to-br from-orange-900/20 to-red-900/20">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Design Responsivo</h3>
                            <p className="text-muted-foreground">
                                Adapta-se perfeitamente a qualquer tamanho de tela.
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Informações de Uso */}
                <div className="mt-16 glass-panel p-8">
                    <h2 className="text-2xl font-bold mb-4">Como Usar</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            <strong className="text-foreground">1. Importar o componente:</strong>
                            <code className="block mt-2 p-3 bg-black/50 rounded">
                                import &#123; SplineScene &#125; from '@/components/ui/spline'
                            </code>
                        </p>
                        <p>
                            <strong className="text-foreground">2. Usar na sua página:</strong>
                            <code className="block mt-2 p-3 bg-black/50 rounded">
                                &lt;SplineScene scene="URL_DA_CENA" className="w-full h-[500px]" /&gt;
                            </code>
                        </p>
                        <p>
                            <strong className="text-foreground">3. Criar cenas:</strong> Visite{' '}
                            <a href="https://spline.design" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                spline.design
                            </a>{' '}
                            para criar suas próprias cenas 3D.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
