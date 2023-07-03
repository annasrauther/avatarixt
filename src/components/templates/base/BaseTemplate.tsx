import styles from './BaseTemplate.module.css'

export interface IBaseTemplateProps {
  sampleProps: string
}

const BaseTemplate = ({ sampleProps }: IBaseTemplateProps) => {
  return <div className={styles.container}>{sampleProps}</div>;
}

export default BaseTemplate