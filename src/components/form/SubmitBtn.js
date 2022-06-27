import styles from './SubmitBtn.module.css'

function SubmitBtn({ text }) {
  return (
    <div>
      <button className={styles.btnSubmit}>
        { text }
      </button>
    </div>
  )
}

export default SubmitBtn