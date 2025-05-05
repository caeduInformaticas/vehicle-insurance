// ✅ Pantalla de CuentaScreen mejorada con enfoque UX/UI
import React from 'react';

export default function CuentaScreen({ goBack }) {
  return (
    <div className="min-h-screen bg-[#003366] font-merriweather text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">🚗 Mi Cuenta</h1>

      {/* Estado actual destacado */}
      <div className="w-full max-w-xl bg-[#001933] rounded-2xl shadow-lg p-6 text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2">Estado de la Cuenta</h2>
        <p className="text-[#A7E92F] text-lg font-bold mb-2">✅ Al día</p>
        <p className="text-sm text-gray-300">Último pago: <span className="font-medium text-white">150 Bs (Abril 2025)</span></p>
        <p className="text-sm text-gray-300">Total acumulado: <span className="font-medium text-white">600 Bs</span></p>
      </div>

      {/* Acción principal destacada */}
      <div className="w-full max-w-xl bg-[#A7E92F] text-[#003366] rounded-2xl shadow-lg p-6 text-center mb-6 flex flex-col items-center">
        <img
          src="https://img.icons8.com/fluency/96/lock-2.png"
          alt="Seguro icon"
          className="mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">🔒 Vehículo Protegido, Siempre Seguro</h2>
        <p className="text-sm mb-4 max-w-sm">
          Activa tu seguro en segundos y olvídate de sorpresas. Beneficios exclusivos por solo 150 Bs al mes.
        </p>
        <button className="mt-2 bg-[#003366] hover:bg-[#001933] text-[#A7E92F] font-semibold px-8 py-3 rounded-full transition-colors text-lg shadow-lg">
          ¡Quiero asegurar mi auto!
        </button>
      </div>

      {/* Información adicional al final */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mt-6">
        <div className="bg-[#001933] rounded-2xl p-4 shadow-lg flex flex-col items-center text-center">
          <img
            src="https://img.icons8.com/fluency/64/money.png"
            alt="Ahorro icon"
            className="mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">💰 Ahorra Hoy, Usa Cuando Lo Necesites</h3>
          <p className="text-sm text-[#A7E92F]">
            Acumula cuotas mensuales que puedes utilizar para cualquier servicio. ¿No las usaste? ¡Te devolvemos tu dinero!
          </p>
        </div>
        <div className="bg-[#001933] rounded-2xl p-4 shadow-lg flex flex-col items-center text-center">
          <img
            src="https://img.icons8.com/fluency/64/calendar.png"
            alt="Revisión icon"
            className="mb-3"
          />
          <h3 className="text-lg font-semibold mb-2">🔧 Revisión Técnica Preventiva</h3>
          <p className="text-sm text-[#A7E92F]">
            Cubre la revisión técnica cada 3 meses para mantener tu vehículo en óptimas condiciones.
          </p>
        </div>
      </div>

      {goBack && (
        <button
          onClick={goBack}
          className="mt-8 bg-[#A7E92F] hover:bg-[#c3ff4d] text-[#003366] font-semibold px-6 py-2 rounded-full transition-colors shadow-lg"
        >
          Volver al Menú
        </button>
      )}
    </div>
  );
}
