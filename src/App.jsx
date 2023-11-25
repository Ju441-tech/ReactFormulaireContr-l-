
import { useState } from 'react'

//Le formulaire est dit contrôlé. Ici, à chaque fois qu'on saisit une valeur dans le input, à chaquelettre (ou donnée), 
//on appelle la fonction handleChange parcequ'elle écoute tous les changements à chaque entrée dans input, pour n'envoyer la saisit qu'une fois terminée, il faut faire un submit sur form, pas de fonction sur input
function App() {

  //useState simple changement de valeur unique d'une variable :
  const [firstName, setFirstName] = useState("Jhon")
  const handleChange = (e) => {
    setFirstName(e.currentTarget.value)
  }
  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} />
        {firstName}
      </form>

    </div >
  );
}

export default App;
