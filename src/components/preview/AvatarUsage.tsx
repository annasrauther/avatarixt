import { useState } from 'react';
import styles from './Button.module.css';

const AvatarUsage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prevOpen) => !prevOpen);
  };

  const code = `// Sample code
const avatar = createAvatar();`;

  return (
    <div className={styles.popupContainer}>
      <button title="Use Library" className={styles.button} onClick={togglePopup}>
        Usage
      </button>
      {isPopupOpen && (
        <div className={styles.popup}>
          <pre className={styles.code}>{code}</pre>
        </div>
      )}
    </div>
  );
};

export default AvatarUsage;
