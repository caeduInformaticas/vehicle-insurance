// ✅ App.jsx CORREGIDO Y SIMPLIFICADO
import React, { useState } from 'react';
import MenuScreen from './MenuScreen';
import CuentaScreen from './CuentaScreen';
import HistorialScreen from './HistorialScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: 'https://img.icons8.com/fluency/256/lock-2.png',
      title: '🔒 Vehículo Protegido, Siempre Seguro',
      action: '¡Quiero asegurar mi auto!',
      text: 'Tu auto está asegurado en nuestro taller con beneficios exclusivos por solo 150 Bs al mes.\nAcumula cuotas mensuales para cualquier servicio. ¿No las usaste? ¡Te devolvemos tu dinero!'
    },
    {
      icon: 'https://img.icons8.com/fluency/256/tow-truck.png',
      title: '🚨 Auxilio en el Lugar',
      action: 'Solicitar asistencia ahora',
      text: '¿Tu vehículo se detuvo? Vamos hasta donde estés: apertura de puertas, batería, llantas o combustible.\nRemolque gratis hasta nuestro taller incluido.'
    },
    {
      icon: 'https://img.icons8.com/fluency/256/task.png',
      title: '📋 Estado en Tiempo Real',
      action: 'Ver el estado de mi auto',
      text: 'Sigue cada detalle de la reparación: piezas cambiadas, historial y agenda fácilmente tu próxima revisión.'
    }
  ];

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentScreen('menu');
    } else {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (currentScreen === 'menu') {
    return (
      <MenuScreen
        goToCuenta={() => setCurrentScreen('cuentas')}
        goToHistorial={() => setCurrentScreen('historial')}
      />
    );
  }

  if (currentScreen === 'cuentas') {
    return <CuentaScreen goBack={() => setCurrentScreen('menu')} />;
  }

  if (currentScreen === 'historial') {
    return <HistorialScreen goBack={() => setCurrentScreen('menu')} />;
  }

  return (
    <div className="min-h-screen bg-[#003366] flex items-center justify-center font-merriweather text-white transition-all duration-500 p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <img
            src={slides[currentSlide].icon}
            alt="Slide visual large"
            className="w-full max-h-[500px] object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center p-8 shadow-lg rounded-2xl bg-[#002244]/70 w-full">
          <img
            src={slides[currentSlide].icon}
            alt="Slide icon"
            className="mb-4 w-24 h-24 md:hidden"
          />
          <h2 className="text-3xl font-semibold mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="mb-3 text-[#A7E92F] font-medium text-lg">
            {slides[currentSlide].action}
          </p>
          <p className="text-base whitespace-pre-line leading-relaxed max-w-md">
            {slides[currentSlide].text}
          </p>

          <div className="flex justify-between mt-8 w-full max-w-sm">
            <button
              onClick={handlePrev}
              className="bg-[#A7E92F] hover:bg-[#c3ff4d] text-[#003366] font-semibold px-6 py-3 rounded-full transition-colors w-32"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="bg-[#A7E92F] hover:bg-[#c3ff4d] text-[#003366] font-semibold px-6 py-3 rounded-full transition-colors w-32"
            >
              {currentSlide === slides.length - 1 ? 'Ir al Menú' : 'Siguiente'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
