import { useImage } from '../../hooks/useImage'
import DownloadButton from '../DownloadButton/DownloadButton'
import Message from '../Messsage/Message'
import ResetButton from '../ResetButton/ResetButton'
import UploadForm from '../UploadForm/UploadForm'
import styles from './Header.module.css'

const Header = () => {

  const { error, success, successMessage} = useImage()
  return (
    <header className={styles.header}>
      <h1>Photo Editor</h1>
      <div className={styles.formContainer}>
        <UploadForm />
        <div className={styles.btnContainer}>
          <ResetButton />
          <DownloadButton />
        </div>
      </div>

      {error && (
        <div className={styles.errorContainer}>
          <Message message={error} />
        </div>
      )}
      {success && (
        <div className={styles.errorContainer}>
          <Message message={successMessage} />
        </div>
      )}
    </header>
  )
}

export default Header