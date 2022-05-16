import React from 'react'
import { jsPDF } from 'jspdf'
import Card from '../components/Card'
import html2canvas from 'html2canvas'

const index = () => {
  const generatePDF = () => {
    const doc = document.getElementById('patient')
    html2canvas(doc).then(canvas => {
      const imgData = canvas.toDataURL('image/jpg')
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [canvas.width, canvas.height],
      })
      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height)
      pdf.save('test.pdf')
    })
  }
  return (
    <div className='container-1440'>
      <Card generatePDF={generatePDF} />
    </div>
  )
}

export default index
