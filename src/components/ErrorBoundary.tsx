import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="min-h-[400px] flex items-center justify-center p-8 text-center">
                    <div className="max-w-md">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-4">Ups! Ceva nu a funcționat corect.</h2>
                        <p className="text-neutral-600 mb-6">Ne cerem scuze pentru inconvenient. Vă rugăm să reîncărcați pagina sau să reveniți mai târziu.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                        >
                            Reîncarcă Pagina
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
