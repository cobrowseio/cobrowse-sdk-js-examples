import { useCobrowse } from '../hooks/useCobrowse'
import { getQueryParam } from '../utils/getQueryParam'
import Button from './Button'
import Icon from './Icon'
import styles from './EndSessionButton.module.css'

const EndSessionButton = () => {
  const { cobrowsing, endSession } = useCobrowse()

  if (!cobrowsing) {
    return false
  }

  if (!getQueryParam('custom_session_controls')) {
    return false
  }

  return (
    <Button variant='plain' onClick={endSession} className={styles.button}>
      <Icon name='cancel_presentation'/>
    </Button>
  )
}

export default EndSessionButton
