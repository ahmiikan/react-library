import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  children, 
  title, 
  subtitle,
  image,
  footer,
  hoverable = false,
  bordered = true,
  shadow = 'medium',
  className = '',
  onClick,
  ...props 
}) => {
  const cardClass = `
    ${styles.card} 
    ${hoverable ? styles.hoverable : ''} 
    ${bordered ? styles.bordered : ''} 
    ${styles[`shadow-${shadow}`]} 
    ${className}
  `.trim();

  return (
    <div className={cardClass} onClick={onClick} {...props}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title || 'Card image'} className={styles.image} />
        </div>
      )}
      
      <div className={styles.content}>
        {title && (
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        
        <div className={styles.body}>
          {children}
        </div>
      </div>
      
      {footer && (
        <div className={styles.footer}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;