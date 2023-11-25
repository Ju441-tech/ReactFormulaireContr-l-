
import { useState } from 'react'

//Le formulaire est dit contrôlé parceque parcequ'il appelle à chaque saisie la fonction handle change puis fait un render aussi donc à chaque saisie
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
