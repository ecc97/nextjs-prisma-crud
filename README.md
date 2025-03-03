# Next.js Prisma CRUD de Notas

Este es un proyecto de CRUD (Crear, Leer, Actualizar, Eliminar) de notas desarrollado con Next.js 14, TypeScript, Prisma y Tailwind CSS.

## 📌 Características
- 📌 **Next.js 14** como framework principal.
- 📌 **TypeScript** para tipado estático.
- 📌 **Prisma** como ORM para la base de datos.
- 📌 **Tailwind CSS** para estilización rápida y eficiente.
- 📌 API REST para la gestión de notas.

## 📂 Estructura del Proyecto
```
NEXTJS-PRISMA-CRUD
│── prisma
│   ├── migrations/       # Migraciones de la base de datos
│   ├── dev.db            # Base de datos SQLite (puede variar según configuración)
│   ├── schema.prisma     # Definición del esquema de Prisma
│
│── src
│   ├── app
│   │   ├── about/        # Página de información
│   │   ├── api/notes/    # API REST para las notas
│   │   │   ├── [id]/route.ts  # Endpoints para notas individuales
│   │   │   ├── route.ts       # Endpoints para notas
│   │   ├── fonts/        # Archivos de fuentes
│   │   ├── globals.css   # Estilos globales
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página principal
│
│   ├── components        # Componentes reutilizables
│   │   ├── NoteCard.tsx          # Tarjeta de nota
│   │   ├── NoteForm.tsx          # Formulario de nota
│   │   ├── NotesContainer.tsx    # Contenedor de notas
│   │   ├── NotesSkeletonLoading.tsx  # Skeleton loading
│
│   ├── context           # Context API para gestión de estado
│   │   ├── NoteContext.tsx
│
│   ├── interfaces        # Interfaces TypeScript
│   │   ├── Note.ts
│
│   ├── libs              # Configuración de Prisma
│   │   ├── prisma.ts
│
│── .env                  # Variables de entorno (DATABASE_URL)
│── .eslintrc.json        # Configuración de ESLint
│── .gitignore            # Archivos a ignorar en Git
│── next.config.mjs       # Configuración de Next.js
│── package.json          # Dependencias y scripts
│── postcss.config.mjs    # Configuración de PostCSS
│── tailwind.config.ts    # Configuración de Tailwind CSS
│── tsconfig.json         # Configuración de TypeScript
│── README.md             # Documentación del proyecto
```

## 🚀 Instalación y Configuración
1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/ecc97/nextjs-prisma-crud
   cd nextjs-prisma-crud
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   # o con yarn
   yarn install
   ```

3. **Configura la base de datos:**
   - Crea un archivo `.env` en la raíz y agrega:
     ```env
     DATABASE_URL="URL_DE_TU_BASE_DE_DATOS"
     ```
   - Ejecuta las migraciones:
     ```sh
     npx prisma migrate dev --name init
     ```

4. **Ejecuta el servidor en desarrollo:**
   ```sh
   npm run dev
   # o con yarn
   yarn dev
   ```

## 📌 Uso de la API
### 📍 Endpoints disponibles
- **GET /api/notes** → Obtiene todas las notas
- **POST /api/notes** → Crea una nueva nota
- **GET /api/notes/:id** → Obtiene una nota por ID
- **PUT /api/notes/:id** → Actualiza una nota
- **DELETE /api/notes/:id** → Elimina una nota

## 🎨 Estilos
El proyecto utiliza **Tailwind CSS** para el diseño responsivo y estilización de los componentes.

## 📜 Licencia
Este proyecto está bajo la licencia MIT.

