import { useImage } from '../../hooks/useImage'
import styles from './CancelButton.module.css'

const CancelButton = () => {
  const { filename, setImage, setWidth, setHeight, setEditDone, handleClose } =
    useImage()

  const url = `${import.meta.env.VITE_API_URL}/api/image/reset/${filename}`

  const resetChanges = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setImage(data.dataUrl)
      setWidth(data.width)
      setHeight(data.height)
      setEditDone(false)
    } catch (error) {
      console.error(error)
    }
  }

  //handle click
  const handleClick = async (e) => {
    e.preventDefault()
    resetChanges()
    handleClose()
  }

  return (
    <button
      onClick={handleClick}
      className={styles.button}
    >
      Cancel
    </button>
  )
}

export default CancelButton
