import { useCallback, useEffect, useRef, useState } from 'react'

export const useCobrowse = () => {
  const [CobrowseIO, setCobrowseIO] = useState()
  const [cobrowsing, setCobrowsing] = useState(() => CobrowseIO?.currentSession?.isActive())
  const cobrowseStarted = useRef(false)

  useEffect(() => {
    const onCobrowseLoaded = async () => {
      await window.CobrowseIO.client()

      setCobrowseIO(window.CobrowseIO)
    }

    onCobrowseLoaded()
  }, [])

  useEffect(() => {
    // Wait until CobrowseIO is loaded
    if (!CobrowseIO) {
      return
    }

    const onCobrowseStart = (session) => {
      if (session.isActive()) {
        setCobrowsing(true)
      }
    }
    const onCobrowseEnd = (session) => {
      setCobrowsing(false)
    }

    CobrowseIO.on('session.updated', onCobrowseStart)
    CobrowseIO.on('session.ended', onCobrowseEnd)

    return () => {
      CobrowseIO?.off('session.updated', onCobrowseStart)
      CobrowseIO?.off('session.ended', onCobrowseEnd)
    }
  }, [CobrowseIO])

  const start = useCallback(({ api, license, redactedViews, customData, capabilities, sessionCode, allowHeadless = false, customSessionControls = false, registration = true } = {}) => {
    if (!CobrowseIO || cobrowseStarted.current) {
      return
    }

    if (api) {
      CobrowseIO.api = api
    }

    if (Array.isArray(capabilities)) {
      CobrowseIO.capabilities = capabilities
    }

    CobrowseIO.license = license || 'trial'
    CobrowseIO.redactedViews = redactedViews || ['.redacted', '#title', '#amount', '#subtitle', '#map']
    CobrowseIO.customData = customData || {}
    CobrowseIO.registration = registration

    if (customSessionControls) {
      CobrowseIO.showSessionControls = () => true
      CobrowseIO.hideSessionControls = () => true
    } else {
      const button = document.createElement('div')

      button.className = '__cbio_ignored end-session-button'
      button.innerHTML = 'End <span>Cobrowse </span>Session'
      button.addEventListener('click', () => {
        if (CobrowseIO.currentSession) {
          CobrowseIO.currentSession.end()
        }
      })

      CobrowseIO.showSessionControls = () => {
        document.body.appendChild(button)
      }

      CobrowseIO.hideSessionControls = () => {
        if (button.parentNode) {
          button.parentNode.removeChild(button)
        }
      }
    }

    CobrowseIO.start({ allowIFrameStart: true, allowHeadless }).then(() => {
      if (sessionCode) {
        CobrowseIO.getSession(sessionCode)
      }
    })
    cobrowseStarted.current = true
  }, [CobrowseIO])

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
