import { useEffect, useState } from 'react'
import { useImage } from '../../hooks/useImage'
import HeaderEditForm from '../HeaderEditForm/HeaderEditForm'
import styles from './Flip.module.css'
import { usePostFecht } from '../../hooks/usePostFetch'
import flipv from '../../assets/flipv.svg'
import fliph from '../../assets/fliph.svg'

const Flip = () => {

  const {
    filename,
    setImage,
    setError
  } = useImage()

  const url = `${import.meta.env.VITE_API_URL}/api/image/flip/${filename}`
  
  const [flipV, setFlipV] = useState(false)
  const [flop, setFlop] = useState(false)
  
  const { isError, data, postData } = usePostFecht(url, { flipV, flop }, 'Error flipping image')

  // flip image
  const flipImage = () => {
    setFlipV(true)
    setFlop(false)
  }

  // flop image
  const flopImage = () => {
    setFlop(true)
    setFlipV(false)
  }

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    async function fetchData() {
      await postData()
    }
    fetchData()

  }

  useEffect(() => {
    if (data) {
      setImage(data.dataUrl)
      setFlipV(false)
      setFlop(false)
    }
  }, [data, setImage, setFlipV, setFlop])
 
  useEffect(() => {
    if (isError) {
      setError(isError.message)
    }
  }, [isError, setError])


  return (
    <div className={styles.container}>
      <HeaderEditForm
        title='Flip'
      />
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <section className={styles.section}>
          <div className={styles.btnContainer}>
            <button
              type='submit'
              className={styles.button}
              onClick={flipImage}
            >
              <img
                src={flipv}
                alt='flip vertical'
              />
              Vertical
            </button>
            <button
              type='submit'
              className={styles.button}
              onClick={flopImage}
            >
              <img
                src={fliph}
                alt='flip horizontal'
              />
              Horizontal
            </button>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Flip