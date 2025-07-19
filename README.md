# 🌟 SpotLight App

Una aplicación de redes sociales moderna construida con React Native, Expo, Clerk para autenticación y Convex como backend. SpotLight te permite compartir momentos, seguir a otros usuarios, y interactuar con contenido a través de likes, comentarios y más.

> **Nota**: Este proyecto es el seguimiento de un tutorial de desarrollo de aplicaciones móviles, pero incluye funcionalidades adicionales y mejoras implementadas durante el proceso de aprendizaje.

## ✨ Características

- 📱 **Aplicación móvil nativa** construida con React Native y Expo
- 🔐 **Autenticación segura** con Clerk
- ☁️ **Backend en tiempo real** con Convex
- 📸 **Subida de imágenes** y gestión de contenido
- 💬 **Sistema de comentarios** en tiempo real
- ❤️ **Sistema de likes** y interacciones
- 👥 **Sistema de seguimiento** de usuarios
- 🔖 **Marcadores** para guardar posts favoritos
- 🔔 **Notificaciones** en tiempo real
- 📱 **Navegación por pestañas** intuitiva
- 🎨 **Diseño moderno** con tema oscuro

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React Native** - Framework para desarrollo móvil
- **Expo** - Plataforma de desarrollo y herramientas
- **Expo Router** - Navegación basada en archivos
- **React Navigation** - Navegación entre pantallas
- **TypeScript** - Tipado estático

### Backend & Servicios

- **Convex** - Backend en tiempo real y base de datos
- **Clerk** - Autenticación y gestión de usuarios
- **Expo Image Picker** - Selección de imágenes
- **Expo File System** - Gestión de archivos

### UI/UX

- **React Native Safe Area Context** - Manejo seguro de áreas
- **Expo Blur** - Efectos de desenfoque
- **Expo Haptics** - Retroalimentación táctil
- **JetBrains Mono** - Fuente personalizada

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Git**

### Para desarrollo móvil:

- **Expo Go** app en tu dispositivo móvil
- O **Android Studio** / **Xcode** para emuladores

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/SpotLight-App.git
cd SpotLight-App
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Clerk Configuration
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key
CLERK_WEBHOOK_SECRET=tu_clerk_webhook_secret

# Convex Configuration
EXPO_PUBLIC_CONVEX_URL=tu_convex_url
CONVEX_DEPLOYMENT=tu_convex_deployment
```

### 4. Configurar Clerk

1. Ve a [Clerk Dashboard](https://dashboard.clerk.com/)
2. Crea una nueva aplicación
3. Copia tu **Publishable Key** y **Webhook Secret**
4. Configura los dominios permitidos en tu aplicación Clerk
5. Configura los webhooks para sincronización con Convex

### 5. Configurar Convex

1. Ve a [Convex Dashboard](https://dashboard.convex.dev/)
2. Crea un nuevo proyecto
3. Copia tu **Convex URL** y **Deployment URL**
4. Actualiza `convex/auth.config.ts` con tu dominio de Clerk:

```typescript
export default {
  providers: [
    {
      domain: "https://tu-dominio.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};
```

### 6. Ejecutar el proyecto

```bash
# Iniciar el servidor de desarrollo
npm start
# o
yarn start
```

### 7. Probar la aplicación

- **En dispositivo móvil**: Escanea el código QR con Expo Go
- **En emulador**: Presiona `a` para Android o `i` para iOS
- **En web**: Presiona `w` para abrir en navegador

## 📱 Estructura del Proyecto

```
SpotLight-App/
├── app/                    # Navegación y pantallas principales
│   ├── (auth)/            # Pantallas de autenticación
│   ├── (tabs)/            # Navegación por pestañas
│   └── _layout.tsx        # Layout principal
├── components/            # Componentes reutilizables
├── convex/               # Backend y funciones de Convex
├── constants/            # Constantes y datos mock
├── providers/            # Proveedores de contexto
├── Styles/              # Estilos de las pantallas
└── assets/              # Imágenes y fuentes
```

## 🎯 Funcionalidades Principales

### Autenticación

- Registro e inicio de sesión con Clerk
- Gestión de perfiles de usuario
- Protección de rutas

### Feed Principal

- Visualización de posts en tiempo real
- Stories en la parte superior
- Pull-to-refresh para actualizar contenido
- Navegación fluida

### Creación de Contenido

- Subida de imágenes desde galería
- Captura de fotos con cámara
- Agregar descripciones a los posts
- Gestión de archivos

### Interacciones Sociales

- Sistema de likes y unlike
- Comentarios en tiempo real
- Seguir/dejar de seguir usuarios
- Marcadores para posts favoritos

### Notificaciones

- Notificaciones en tiempo real
- Diferentes tipos: likes, comentarios, follows
- Gestión de notificaciones

## 🔧 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en web
npm run web

# Ejecutar tests
npm test

# Linting
npm run lint
```

## 📊 Base de Datos

El proyecto utiliza Convex con las siguientes tablas principales:

- **users**: Información de usuarios
- **posts**: Publicaciones de usuarios
- **likes**: Relación de likes en posts
- **comments**: Comentarios en posts
- **follows**: Relaciones de seguimiento
- **notifications**: Notificaciones del sistema
- **bookmarks**: Posts guardados por usuarios

## 🎨 Temas y Estilos

La aplicación utiliza un tema oscuro consistente con:

- **Colores primarios**: Azul y blanco
- **Fondo**: Negro
- **Tipografía**: JetBrains Mono
- **Componentes**: Diseño moderno y minimalista

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa los [Issues](https://github.com/tu-usuario/SpotLight-App/issues) existentes
2. Crea un nuevo Issue con detalles del problema
3. Contacta al equipo de desarrollo

## 🙏 Agradecimientos

- [Expo](https://expo.dev/) por la plataforma de desarrollo
- [Clerk](https://clerk.com/) por la autenticación
- [Convex](https://convex.dev/) por el backend en tiempo real
- [React Native](https://reactnative.dev/) por el framework

---

⭐ **¡No olvides darle una estrella al repositorio si te gustó el proyecto!**
