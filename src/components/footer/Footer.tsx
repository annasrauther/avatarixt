// Import Icon
import { FaGithub } from 'react-icons/fa';

// Import styles
import styles from './Footer.module.css';

/**
 * Represents the Footer props.
 * 
 * @interface FooterProps
 * @property {string} description The description text.
 * @property {string} githubLink The GitHub link.
 */
interface FooterProps {
  description: string;
  githubLink: string;
}

/**
 * Represents the Footer.
 * 
 * The `Footer` component displays the footer of the application.
 * 
 * @component
 * @param {FooterProps} props - The component props.
 * @returns {React.FC} The Footer component.
 * @example
 * <Footer description={'This is the footer description.'} githubLink={'github.com/username/repo'} />
 */

const Footer: React.FC<FooterProps> = ({ description, githubLink }) => {
  return (
    <footer className={styles.footer}>
      <p>
        {description}, View on{' '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub <FaGithub />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
