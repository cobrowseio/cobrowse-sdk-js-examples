import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Camera.module.css'
import Button from './Button'

export const Camera = ({ onCapture, onClose }) => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [capturedImage, setCapturedImage] = useState(null)
  const [error, setError] = useState(null)
  const animationFrameRef = useRef(null)
  const streamRef = useRef(null)

  const drawVideoFrame = useCallback(() => {
    if (videoRef.current && canvasRef.current && !capturedImage) {
      const context = canvasRef.current.getContext('2d')
      context.drawImage(videoRef.current, 0, 0)
      animationFrameRef.current = window.requestAnimationFrame(drawVideoFrame)
    }
  }, [capturedImage])

  useEffect(() => {
    let isMounted = true

    const startCamera = async () => {
      if (!isMounted) return

      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' }
        })

        if (!isMounted) {
          mediaStream.getTracks().forEach(track => track.stop())
          return
        }

        streamRef.current = mediaStream
        if (videoRef.current && canvasRef.current && isMounted) {
          videoRef.current.srcObject = mediaStream
          // Wait for video metadata to load
          videoRef.current.addEventListener('loadedmetadata', () => {
            if (!isMounted) return
            // Set canvas dimensions to match video
            canvasRef.current.width = videoRef.current.videoWidth
            canvasRef.current.height = videoRef.current.videoHeight
            // Start drawing video frames to canvas
            drawVideoFrame()
          })
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to access camera. Please check permissions.')
          console.error('Camera error:', err)
        }
      }
    }

    startCamera()

    return () => {
      isMounted = false

      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
        streamRef.current = null
      }
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [drawVideoFrame])

  // Stop animation frame when image is captured
  useEffect(() => {
    if (capturedImage && animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current)
    }
  }, [capturedImage])

  const handleCapture = () => {
    if (canvasRef.current) {
      const imageData = canvasRef.current.toDataURL('image/jpeg')
      setCapturedImage(imageData)
    }
  }

  const handleRetake = () => {
    setCapturedImage(null)
    // Restart drawing frames
    drawVideoFrame()
  }

  const handleSave = () => {
    if (capturedImage && onCapture) {
      onCapture(capturedImage)
    }
  }

  const handleClose = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
    }
    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current)
    }
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Take Profile Photo</h2>
          <button className={styles.closeButton} onClick={handleClose} aria-label='Close'>
            ×
          </button>
        </div>

        <div className={styles.cameraContainer}>
          {error
            ? (
              <div className={styles.error}>{error}</div>
              )
            : (
              <>
                <video
                  ref={videoRef}
                  className={styles.hidden}
                  autoPlay
                  playsInline
                />
                {!capturedImage
                  ? (
                    <canvas
                      ref={canvasRef}
                      className={styles.video}
                    />
                    )
                  : (
                    <img
                      src={capturedImage}
                      alt='Captured'
                      className={styles.capturedImage}
                    />
                    )}
              </>
              )}
        </div>

        <div className={styles.controls}>
          {!capturedImage
            ? (
              <Button onClick={handleCapture} disabled={!!error}>
                Capture Photo
              </Button>
              )
            : (
              <>
                <Button onClick={handleRetake} variant='secondary'>
                  Retake
                </Button>
                <Button onClick={handleSave}>
                  Use This Photo
                </Button>
              </>
              )}
        </div>
      </div>
    </div>
  )
}
