import React from 'react'
import { jsPDF } from 'jspdf'
import Card from '../components/Card'
import html2canvas from 'html2canvas'

const index = () => {
  const generatePDF = () => {
    const doc = document.getElementById('patient')
    html2canvas(doc).then(canvas => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('l', 'px', 'a4')
      let width = pdf.internal.pageSize.getWidth()
      let height = pdf.internal.pageSize.getHeight()
      pdf.addImage(imgData, 'PNG', 0, 0, width, height)
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
