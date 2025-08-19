import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy loading components
const LazyComponent = ({ component: Component, fallback, ...props }) => {
  const LoadingFallback = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        color: '#c770f0'
      }}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </motion.div>
  );

  return (
    <Suspense fallback={fallback || <LoadingFallback />}>
      <Component {...props} />
    </Suspense>
  );
};

// Performance optimized image component
export const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <div className={className} style={{ position: 'relative' }}>
      {!loaded && !error && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(199, 112, 240, 0.1)',
            borderRadius: '10px'
          }}
        >
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <motion.img
        src={src}
        alt={alt}
        style={{ 
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
      {error && (
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            color: '#c770f0',
            background: 'rgba(199, 112, 240, 0.1)',
            borderRadius: '10px'
          }}
        >
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default LazyComponent;
