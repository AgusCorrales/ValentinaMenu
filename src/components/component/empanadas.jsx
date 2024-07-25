import "./empanadas.css"


export function Empanadas() {
  return (
    (<div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Empanadas</h2>
          <p>Nuestras empanadas hechas con los mejores ingredientes.</p>
        </div>       
        <div
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberGreen">1</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">FUGAZZETA</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Queso muzzarella,cebolla y orégano.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberGreen">2</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">CAPRESSE</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Queso mozzarella, tomate natural y albahaca fresca.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberGreen">3</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">ESPINACA</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Espinacas, champiniones salteados y queso parmesano.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberRed">4</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">JAMÓN Y QUESO</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Queso mozzarella, jamón york y un toque de oregano.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberRed">5</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">BACON</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Bacon ahumado, cebolla salteada y mozzarella.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberGreen">6</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">HUMITA</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Maíz dulce en crema bechamel, cebolla salteada y zanahorias caramelizadas.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberRed">7</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">POLLO</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Pechuga a la parrilla, cebolla, huevo duro y pimientos verdes asados.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberRed">8</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">TERNERA SUAVE</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
            Carne de ternera, cebolla salteada, pimientos asados y especias.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberRed">9</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">TERNERA PICANTE</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Carne de ternera sazonada con un punto de chiles y pimientos asados.
            </p>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-x-3">
              <div
                className="numberRed">10</div>
              <h3 className="text-base font-semibold leading-7 text-gray-900"> SECRETO</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Bondiola de cerdo a baja temperatura cortada a cuchillo, cebolla salteada y mucho jugo de carne.
            </p>
          </div>
        </div>
      </div>
    </div>)
  );
}
