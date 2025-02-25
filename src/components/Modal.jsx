import { useGlobalContext } from '../context'

const Modal = () => {
  const {selectedMeal, closeModal} = useGlobalContext()

  const {strMealThumb:image, strMeal:title, strInstructions:text, strSource:source} = selectedMeal 
  
  return <aside className='modal-overlay'>
    <div className='modal-container'>
      <img src={image} alt={title} className='img modal-img'></img>
      <div className='modal-content'>
        <h4>{title}</h4>
        <p>Coocking Instructions</p>
        <p>{text}</p>
        <a href={source} target="_blank">Original source</a>
      </div>
      <button onClick={closeModal}>close</button>
    </div>  
  </aside>
}

export default Modal;