import { useCallback, useEffect, useRef, useState } from 'react'
import CobrowseIO from 'cobrowse-sdk-js'

export const useCobrowse = () => {
  const [cobrowsing, setCobrowsing] = useState(() => CobrowseIO.currentSession?.isActive())
  const cobrowseStarted = useRef(false)

  useEffect(() => {
    const onCobrowseStart = (session) => {
      if (session.isActive()) {
        setCobrowsing(true)
      }
    }
    const onCobrowseEnd = (session) => {
      setCobrowsing(false)
    }

    window.CobrowseIO = CobrowseIO

    CobrowseIO.on('session.updated', onCobrowseStart)
    CobrowseIO.on('session.ended', onCobrowseEnd)

    return () => {
      CobrowseIO.off('session.updated', onCobrowseStart)
      CobrowseIO.off('session.ended', onCobrowseEnd)
    }
  }, [])

  const start = useCallback(({ api, license, redactedViews, customData, capabilities, customSessionControls = false } = {}) => {
    if (cobrowseStarted.current) {
      return
    }

    if (api) {
      CobrowseIO.api = api
    }

    if (Array.isArray(capabilities)) {
      CobrowseIO.capabilities = capabilities
    }

    console.log({ api, license, redactedViews, customData, capabilities, customSessionControls })

    CobrowseIO.license = license || 'trial'
    CobrowseIO.redactedViews = redactedViews || ['.redacted']
    CobrowseIO.customData = customData || {}

    if (customSessionControls) {
      CobrowseIO.showSessionControls = () => true
      CobrowseIO.hideSessionControls = () => true
    } else {
      const button = document.createElement('div');

      button.className = '__cbio_ignored end-session-button';
      button.innerHTML = 'End <span>Cobrowse </span>Session';
      button.addEventListener('click', () => {
        if (CobrowseIO.currentSession) {
          CobrowseIO.currentSession.end();
        }
      });

      CobrowseIO.showSessionControls = () => {
        document.body.appendChild(button);
      }

      CobrowseIO.hideSessionControls = () => {
        if (button.parentNode) {
          button.parentNode.removeChild(button);
        }
      }
    }

    CobrowseIO.start({ allowIFrameStart: true })

    cobrowseStarted.current = true
  }, [])

  const stop = () => {
    CobrowseIO.stop()

    cobrowseStarted.current = false
  }

  const endSession = () => {
    CobrowseIO.currentSession?.end()
  }

  const createSessionCode = async () => {
    return await CobrowseIO.createSessionCode()
  }

  const present = (code) => {
    CobrowseIO.getSession(code)
  }

  const setCustomData = (data) => {
    CobrowseIO.customData = data
  }

  return {
    cobrowsing,
    start,
    stop,
    endSession,
    createSessionCode,
    present,
    setCustomData
  }
}