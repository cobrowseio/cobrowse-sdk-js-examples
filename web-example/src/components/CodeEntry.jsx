import { CodeEntry as CbCodeEntry } from 'cobrowse-agent-ui'
import 'cobrowse-agent-ui/style.css'
import styles from './CodeEntry.module.css'

const CodeEntry = ({ onCode }) => {
  return (
    <CbCodeEntry
      className={styles.root}
      inputClassName={styles.input}
      label={false}
      onCode={onCode}
    />
  )
}

export default CodeEntry
