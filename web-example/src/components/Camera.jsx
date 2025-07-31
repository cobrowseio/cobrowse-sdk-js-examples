import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Camera.module.css'
import Button from './Button'
import Select from './Select'

export const Camera = ({ onCapture, onClose }) => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [capturedImage, setCapturedImage] = useState(null)
  const [error, setError] = useState(null)
  const [cameras, setCameras] = useState([])
  const [selectedCameraId, setSelectedCameraId] = useState(null)
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
    const getCameras = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        const videoDevices = devices.filter((device) => device.kind === 'videoinput')

        setCameras(videoDevices)

        if (videoDevices.length > 0 && !selectedCameraId) {
          setSelectedCameraId(videoDevices[0].deviceId)
        }
      } catch (err) {
        console.error('Error enumerating devices:', err)
      }
    }

    getCameras()
  }, [selectedCameraId])

  useEffect(() => {
    let isMounted = true

    const startCamera = async () => {
      if (!isMounted) return

      try {
        const constraints = {
          video: {
            deviceId: selectedCameraId ? { exact: selectedCameraId } : undefined,
            facingMode: selectedCameraId ? undefined : 'user'
          }
        }
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints)

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
  }, [drawVideoFrame, selectedCameraId])

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

        {cameras.length > 1 && !capturedImage && (
          <div className={styles.cameraSelector}>
            <label htmlFor="camera-select">Camera:</label>
            <Select
              id="camera-select"
              value={selectedCameraId || ''}
              onChange={(e) => setSelectedCameraId(e.target.value)}
            >
              {cameras.map((camera) => (
                <option key={camera.deviceId} value={camera.deviceId}>
                  {camera.label || `Camera ${cameras.indexOf(camera) + 1}`}
                </option>
              ))}
            </Select>
          </div>
        )}

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
