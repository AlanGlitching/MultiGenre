import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('表單資料:', formData)
    alert(`表單已提交！\n姓名: ${formData.name}\nEmail: ${formData.email}\n電話: ${formData.phone}`)
  }

  return (
    <div className="app">
      <h1>聯絡表單</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">姓名：</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="請輸入您的姓名"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email：</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="請輸入您的 Email"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">電話：</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="請輸入您的電話"
          />
        </div>
        
        <button type="submit" className="submit-btn">提交</button>
      </form>
    </div>
  )
}

export default App
