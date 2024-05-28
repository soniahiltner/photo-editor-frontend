import { useEffect } from 'react'
import { useImage } from '../../hooks/useImage'
import styles from './CropForm.module.css'
import { usePostFecht } from '../../hooks/usePostFetch'

const CropForm = () => {
  const {
    setImage,
    filename,
    setWidth,
    setHeight,
    setEdit,
    coordinates,
    setCoordinates,
    setCroppedImage,
    handleClose,
    setError
  } = useImage()

  const url = `${import.meta.env.VITE_API_URL}/api/image/crop/${filename}`

  const { isError, data, postData } = usePostFecht(
    url,
    coordinates,
    'Error cropping image'
  )

  // Handle reset
  const handleReset = () => {
    setEdit(false)
    setCoordinates(null)
    setCroppedImage(null)
  }

  // Handle submit
  const handleSubmit = async () => {
    async function fetchData() {
      await postData()
    }
    fetchData()
  }

  useEffect(() => {
    if (data) {
      setImage(data.dataUrl)
      setWidth(data.width)
      setHeight(data.height)
      handleClose()
    }
  }, [data, setImage, setWidth, setHeight, handleClose])

  // Handle error
  useEffect(() => {
    if (isError) {
      setError(isError.message)
    }
  }, [isError, setError])

  return (
    <div className={styles.form}>
      <div className={styles.btnContainer}>
        {coordinates && (
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            Save
          </button>
        )}
        <button
          className={styles.cancelButton}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default CropForm
