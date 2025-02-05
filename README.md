# ⚡️ Clima

Buscador de Clima es una aplicación web que permite a los usuarios buscar el clima de diferentes ciudades, proporcionando información detallada sobre la temperatura actual, mínima y máxima. La aplicación permite a los usuarios ingresar el nombre de la ciudad y el país, y muestra los resultados de manera clara y responsiva.

## 🛠️ Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz de usuario
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido
- **TailwindCSS**: Framework para los estilos del proyecto
- **Zod**: Biblioteca para la validación de esquemas y tipos
- **ESLint**: Para mantener la calidad y consistencia del código
- **Git**: Sistema de control de versiones
- **GitHub Pages**: Para el despliegue de la aplicación

## 📁 Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables que forman la interfaz de usuario.
    - `Alert.tsx`: Componente para mostrar mensajes de alerta.
    - `Form.tsx`: Componente para buscar el clima.
    - `Spinner.tsx`: Componente que muestra un indicador de carga.
    - `WeatherDetail.tsx`: Componente que muestra los detalles del clima.
  - **hooks/**: Contiene hooks personalizados que encapsulan la lógica de la aplicación.
  - **types/**: Tipos y interfaces compartidos que definen la estructura de los datos.
    - `index.ts`: Tipos y interfaces utilizados en toda la aplicación.
  - **utils/**: Funciones utilitarias que ayudan en la manipulación de datos.
    - `index.ts`: Funciones utilitarias como el formateo de temperaturas.
  - **schema/**: Define los esquemas de validación utilizando Zod.
    - `index.ts`: Esquema para validar la estructura de los datos del clima.
  - `App.tsx`: Componente principal que integra todos los componentes y gestiona el estado global.

## 🚀 Características Principales

- **Búsqueda de Clima**: Permite a los usuarios buscar el clima de una ciudad ingresando el nombre de la ciudad y el país.
- **Interfaz Responsiva**: Asegura que la aplicación se vea bien en dispositivos de diferentes tamaños.
- **Validación de Datos**: Utiliza Zod para validar la entrada del usuario antes de realizar la búsqueda.
- **Manejo de Estado**: Utiliza hooks personalizados para gestionar el estado de la aplicación de manera eficiente.
- **Despliegue Automático**: Facilita el acceso a la aplicación en línea a través de GitHub Pages.

## 🛠️ Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JMatochePascual/Clima-React-TS.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en:
   ```bash
   http://localhost:5173
   ```

## 🤝 Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un Fork del repositorio:

   ```bash
   git remote add upstream https://github.com/JMatochePascual/Clima-React-TS.git
   ```

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git add .
   git commit -m "Agrega nueva característica"
   ```

4. Sube los cambios a tu Fork:

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request desde tu repositorio al repositorio original.

Por favor, antes de realizar cambios importantes:

- Abre un Issue para discutir las modificaciones propuestas.
- Asegúrate de que tu código sigue las convenciones del proyecto.
- Incluye tests si es necesario.
- Actualiza la documentación según corresponda.

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

<p style="text-align: center">Hecho con 💚 por JMCode | ©2025 - Transformando ideas en realidad.</p>
