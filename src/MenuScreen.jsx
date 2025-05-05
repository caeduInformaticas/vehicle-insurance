// MenuScreen.jsx (ajuste: sin espacio extra cuando no hay hover)
import React from 'react';

const menuItems = [
  {
    name: 'Cuentas',
    description: 'Consulta tu suscripción, pagos realizados y tu saldo acumulado.',
    icon: 'https://img.icons8.com/fluency/96/wallet.png',
    route: '/cuentas',
    action: 'goToCuenta',
    roles: ['user', 'admin']
  },
  {
    name: 'Historial',
    description: 'Revisa todo el historial de reparaciones, mantenimientos y revisiones técnicas.',
    icon: 'https://img.icons8.com/fluency/96/maintenance.png',
    route: '/historial',
    action: 'goToHistorial',
    roles: ['user', 'admin']
  },
  {
    name: 'Ofertas',
    description: 'Accede a promociones y descuentos exclusivos.',
    icon: 'https://img.icons8.com/fluency/96/sale.png',
    route: '/ofertas',
    roles: ['user', 'admin']
  },
  {
    name: 'Notificaciones',
    description: 'Mantente informado sobre el estado de tu auto y nuevas promociones.',
    icon: 'https://img.icons8.com/fluency/96/appointment-reminders--v2.png',
    route: '/notificaciones',
    roles: ['user', 'admin']
  },
  {
    name: 'Reservas',
    description: 'Agenda tus próximas revisiones o mantenimientos fácilmente.',
    icon: 'https://img.icons8.com/fluency/96/calendar.png',
    route: '/reservas',
    roles: ['user', 'admin']
  },
  {
    name: 'Mis Vehículos',
    description: 'Administra y consulta las características de todos tus autos.',
    icon: 'https://img.icons8.com/fluency/96/car.png',
    route: '/mis-vehiculos',
    roles: ['user', 'admin']
  },
  {
    name: 'Perfil',
    description: 'Administra tu información personal y configuración de la cuenta.',
    icon: 'https://img.icons8.com/fluency/96/user-male-circle.png',
    route: '/perfil',
    roles: ['user', 'admin']
  },
];

export default function MenuScreen({ goToCuenta, goToHistorial }) {
  const handleClick = (item) => {
    if (item.action === 'goToCuenta') goToCuenta();
    if (item.action === 'goToHistorial') goToHistorial();
  };

  return (
    <div className="min-h-screen bg-[#003366] font-merriweather text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Menú Principal</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className="group bg-[#002244]/70 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer shadow-md"
          >
            <img src={item.icon} alt={`${item.name} icon`} className="w-20 h-20 mb-2" />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 flex flex-col items-center">
              <p className="text-sm text-[#A7E92F] mb-3 px-2 mt-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
