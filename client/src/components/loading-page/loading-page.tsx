
import React from 'react';

function LoadingPage(): React.JSX.Element {
    return (
        <div className="page page--gray page--loading">
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                fontSize: '24px',
                color: '#4481c3'
            }}>
                ⏳ Загрузка...
            </div>
        </div>
    );
}

export { LoadingPage };