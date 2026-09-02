import Button from './Button'
import styles from './ConsentPrompt.module.css'

const prompts = {
  session: {
    heading: 'Cobrowse Session',
    body: 'A support agent is requesting access to view your screen.',
    terms: 'Sensitive information remains hidden. Terms & Privacy Policy apply.'
  },
  remoteControl: {
    heading: 'Remote Control',
    body: 'By activating the remote control feature, you authorize your agent to perform actions on your behalf on this page. This includes navigating and entering information as directed by you.',
    terms: 'Your acceptance confirms your consent to these terms and the permissions granted for remote actions.'
  },
  fullDevice: {
    heading: 'Full Device',
    body: 'By enabling full device mode, you allow your agent to view content beyond this page, including other tabs and windows you choose to share.',
    terms: 'Your browser will ask you to pick what to share before capture begins.'
  }
}

const ConsentPrompt = ({ request, onRespond }) => {
  const prompt = prompts[request]

  if (!prompt) {
    return false
  }

  return (
    <div className={`__cbio_ignored ${styles.overlay}`}>
      <div className={styles.prompt} role='dialog' aria-modal='true' aria-labelledby='consent-title'>
        <div className={styles.content}>
          <h2 id='consent-title' className={styles.title}>{prompt.heading}</h2>
          <p className={styles.description}>{prompt.body}</p>
          <p className={styles.terms}>{prompt.terms}</p>
        </div>
        <div className={styles.actions}>
          <Button variant='plain' className={styles.deny} onClick={() => onRespond(false)}>Deny</Button>
          <Button className={styles.allow} onClick={() => onRespond(true)}>Allow</Button>
        </div>
      </div>
    </div>
  )
}

export default ConsentPrompt
