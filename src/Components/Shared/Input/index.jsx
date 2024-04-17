import styles from './input.module.css';

const Input = ({type, placeholder}) => {
  return (
    <div className={` ${styles.inputContainer}`}>
      <input className={` w-100 h-100 ${styles.inputBox}`} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input;
