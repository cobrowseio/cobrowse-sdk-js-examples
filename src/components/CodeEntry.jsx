import { CodeEntry as CbCodeEntry } from 'cobrowse-agent-ui'
import './CodeEntry.module.css'

const CodeEntry = ({ onCode }) => {
  return (
    <CbCodeEntry onCode={onCode} />
  )
}

export default CodeEntry
