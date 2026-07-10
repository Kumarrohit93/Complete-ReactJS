import React, {useState} from 'react'

const FormProjectByObject = () => {
    const [formData, setFormData] = useState({
        name: "Rohit", 
        age: 20,
        city: "Sonipat"
    })

    function changeFormData() {
        if(formData.name == "Rohit") {
            setFormData({...formData, name: "Virat"})
        } else {
            setFormData({...formData, name: "Rohit"})
        }
    }
  return (
    <div>
      <h1>{formData.name}</h1>
      <h1>{formData.age}</h1>
      <h1>{formData.city}</h1>
      <button onClick={changeFormData}>change</button>
    </div>
  )
}

export default FormProjectByObject
