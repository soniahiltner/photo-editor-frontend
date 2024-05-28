import loader from '../../assets/loader.svg'

const Loader = () => {
  return (
    <div
      style={{ textAlign: 'center', margin: '0rem' }}
      data-testid='loader'
    >
      <img
        src={loader}
        alt='loader'
      />
    </div>
  )
}

export default Loader
