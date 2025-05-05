// ✅ HistorialScreen.jsx MEJORADO CON UI/UX + Botón PDF
import React from 'react';

const historialData = [
  {
    id: 1,
    fechaIngreso: '2025-04-20',
    fechaSalida: '2025-04-22',
    tipo: 'Mantenimiento General',
    detalles: 'Cambio de aceite, revisión de frenos, alineación y balanceo.',
    piezas: ['Aceite sintético 5W30', 'Pastillas de freno delanteras'],
    costo: '350 Bs'
  },
  {
    id: 2,
    fechaIngreso: '2025-03-15',
    fechaSalida: '2025-03-16',
    tipo: 'Cambio de Piezas',
    detalles: 'Cambio de batería y revisión eléctrica.',
    piezas: ['Batería 12V 60Ah'],
    costo: '450 Bs'
  },
  {
    id: 3,
    fechaIngreso: '2025-01-10',
    fechaSalida: '2025-01-10',
    tipo: 'Emergencia',
    detalles: 'Asistencia en carretera: pinchazo de llanta reparado.',
    piezas: ['Parche para llanta'],
    costo: '50 Bs'
  }
];

export default function HistorialScreen({ goBack }) {
  return (
    <div className="min-h-screen bg-[#003366] font-merriweather text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📜 Historial del Vehículo</h1>
        <button
          className="bg-[#A7E92F] hover:bg-[#c3ff4d] text-[#003366] font-semibold px-4 py-2 rounded shadow-lg transition-colors"
        >
          Descargar PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {historialData.map((item) => (
          <div key={item.id} className="bg-[#001933] rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <div className="flex justify-between items-center mb-2 border-b border-gray-600 pb-2">
              <h2 className="text-xl font-semibold">{item.tipo}</h2>
              <span className="text-sm text-gray-400">#{item.id}</span>
            </div>
            <p className="text-sm text-[#A7E92F] mb-2">
              Ingreso: <span className="font-medium text-white">{item.fechaIngreso}</span> | Salida: <span className="font-medium text-white">{item.fechaSalida}</span>
            </p>
            <p className="text-sm mb-2">{item.detalles}</p>
            <div className="text-sm mb-2">
              <span className="font-semibold text-[#A7E92F]">Piezas:</span> {item.piezas.join(', ')}
            </div>
            <div className="text-sm font-semibold text-[#A7E92F]">
              Costo total: {item.costo}
            </div>
          </div>
        ))}
      </div>

      {goBack && (
        <button
          onClick={goBack}
          className="mt-10 bg-[#A7E92F] hover:bg-[#c3ff4d] text-[#003366] font-semibold px-6 py-2 rounded-full transition-colors shadow-lg"
        >
          Volver al Menú
        </button>
      )}
    </div>
  );
} 
