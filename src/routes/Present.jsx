import CodeEntry from '../components/CodeEntry'
import Icon from '../components/Icon'
import Main from '../components/Main'
import { useCobrowse } from '../hooks/useCobrowse'
import styles from './Present.module.css'

const Present = () => {
  const { present, cobrowsing } = useCobrowse()

  const handleCode = (code) => {
    present(code)

    return true
  }

  return (
    <Main>
      <div className={styles.present}>
        {!cobrowsing && (
          <>
            <p>Please enter your present code</p>
            <CodeEntry onCode={handleCode}/>
          </>
        )}
        {cobrowsing && (
          <div className={styles.presenting}>
            <p>You are now presenting</p>
            <Icon name='co_present' />
          </div>
        )}
      </div>
    </Main>
  )
}

export default Present
