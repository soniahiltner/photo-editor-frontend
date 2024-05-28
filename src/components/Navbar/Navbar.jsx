import { useImage } from '../../hooks/useImage'
import styles from './Navbar.module.css'

const Navbar = () => {
  
  const {
    filename,
    setNavbar,
    setResize,
    setConvert,
    setRotate,
    setFlip,
    setAdjust,
    setFrames,
    setCrop,
    setCropAndResize
  } = useImage()

  // Disable button if no image is selected
  const isDisabled = filename === '' ? true : false

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <button
          className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
          onClick={() => {
            if (!isDisabled) {
              setResize(true), setNavbar(false)
            }
          }}
        >
          Resize
        </button>
        <button
          className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
          onClick={() => {
            if (!isDisabled) {
              setConvert(true), setNavbar(false)
            }
          }}
        >
          Convert
        </button>
        <button
          className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
          onClick={() => {
            if (!isDisabled) {
              setAdjust(true), setNavbar(false)
            }
          }}
        >
          Adjust
        </button>
        
        <button
          className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
          onClick={() => {
            if (!isDisabled) {
              setRotate(true), setNavbar(false)
            }
          }}
        >
          Rotate
        </button>
        <button
          className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
          onClick={() => {
            if (!isDisabled) {
              setFlip(true), setNavbar(false)
            }
          }}
        >
          Flip
        </button>
        <button
          className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
          onClick={() => {
            if (!isDisabled) {
              setFrames(true), setNavbar(false)
            }
          }}
        >
          Frames
        </button>
        <button
          className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
          onClick={() => {
            if (!isDisabled) {
              setCrop(true), setNavbar(false)
            }
          }}
        >
          Crop
        </button>
        <button
          className={`${styles.button} ${isDisabled ? styles.disabled : ''}`}
          onClick={() => {
            if (!isDisabled) {
              setCropAndResize(true), setNavbar(false)
            }
          }}
        >
          Crop & Resize
        </button>
        
      </nav>
    </div>
  )
}

export default Navbar
