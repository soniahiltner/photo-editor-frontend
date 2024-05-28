import { useImage } from '../../hooks/useImage'
import styles from './SaveButton.module.css'

const SaveButton = () => {

  const { filename, setImage, setSuccess, setEditDone, handleClose } = useImage()
  const url = `${import.meta.env.VITE_API_URL}/api/image/edit/${filename}`

  const saveChanges = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setImage(data.dataUrl)
      setSuccess(true)
      setEditDone(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    saveChanges()
    handleClose()
  }

  return (
    <div>
      <button
        className={styles.submitButton}
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  )
}

export default SaveButton