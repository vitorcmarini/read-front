import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { BookData } from './interface/BookData';
import { useBookData } from './hooks/useBookData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useBookData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (

      <div className='container'>
        <h1>Obras que estou acompanhando!</h1>
        <div className="card-grid">
          {data?.map(bookData => 
            <Card 
              position={bookData.position} 
              title={bookData.title} 
              image={bookData.image} 
              link={bookData.link}
            />
          )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Adicionar</button>    
      </div>
  )
}

export default App
