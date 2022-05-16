import React from 'react'
import sura from '../../assets/img/sura.png'

const index = ({ generatePDF }) => {
  return (
    <>
      <div
        className='m-auto bg-white shadow-xl px-5 py-5 rounded-xl w-full 2xl:w-2/3'
        id='patient'
      >
        <h1 className='text-2xl text-center uppercase font-bold mb-10'>
          Detalle del cliente
        </h1>
        <div className='flex flex-col lg:flex-row items-center gap-7 justify-center'>
          <div className='w-full max-w-[500px]'>
            <img src={sura} alt='entidad-imagen' />
          </div>
          <div>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Identificación:
              <span className='normal-case font-normal'> 1.140.903.322</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Nombre:
              <span className='normal-case font-normal'>
                {' '}
                Andres Felipe Jaramillo Gonzalez
              </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Estado:
              <span className='normal-case font-normal'>
                {' '}
                Tiene derecho a cobertura integral
              </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Categoria:
              <span className='normal-case font-normal'> A</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Afiliación:
              <span className='normal-case font-normal'> Cotizante activo</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              PC:
              <span className='normal-case font-normal'>
                {' '}
                Saldo tope cantidad
              </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Plan:
              <span className='normal-case font-normal'> Pos</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Marcación especial:
              <span className='normal-case font-normal'>
                {' '}
                Covid-19, cotizantes lineamientos covid
              </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Celular:
              <span className='normal-case font-normal'> 3043512931</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Sexo:
              <span className='normal-case font-normal'> Masculino</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Ips:
              <span className='normal-case font-normal'>
                {' '}
                54 - ips sura altos barranquilla
              </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Funcionario Sura:
              <span className='normal-case font-normal'> No</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
              Empleadores:
              <span className='normal-case font-normal'>
                {' '}
                CC 1.140.903.322 razon social
              </span>
            </p>
            <div className='flex items-center justify-end mt-5'>
              <button
                type='button'
                onClick={() => generatePDF()}
                className='py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all'
              >
                Exportar PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
