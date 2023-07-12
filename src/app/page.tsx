import partMap from '@/lib/parts';
import CustomizerForm from '@/components/customizerForm/CustomizerForm';
import Preview from '@/components/preview/Preview';
import { OptionsProvider } from '@/context/optionsContext';
import styles from './page.module.css';

export default function Home() {
  return (
    <OptionsProvider>
      <h2 className={styles.logo}>AVATARIXT</h2>
      <div className={styles.grid}>
        <Preview />
        <CustomizerForm partMap={partMap} />
      </div>
    </OptionsProvider>
  );
}
