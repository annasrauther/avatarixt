// Import partMap from the 'lib/parts' module.
import partMap from '@/lib/parts';

// Import the CustomizerForm and Preview components from their respective modules.
import CustomizerForm from '@/components/customizerForm/CustomizerForm';
import Preview from '@/components/preview/Preview';

// Import the OptionsProvider and styles from their respective modules.
import { OptionsProvider } from '@/context/optionsContext';

// Import the styles module.
import styles from './page.module.css';

/**
 * The Home page component.
 * @function Home
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    // Wrap the components with the OptionsProvider context.
    <OptionsProvider>
      {/* The main grid section that contains the Preview and CustomizerForm components */}
      <section className={styles.grid}>
        {/* The Preview component */}
        <Preview />

        {/* The CustomizerForm component */}
        <CustomizerForm partMap={partMap} />
      </section>
    </OptionsProvider>
  );
}