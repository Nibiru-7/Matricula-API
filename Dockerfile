# =====================================
# Etapa 1: Construcción del código
# =====================================

# Usa una imagen liviana de Node
FROM node:20-alpine AS builder

# Crea la carpeta de trabajo
WORKDIR /app

# Copia los archivos de definición primero (para cachear dependencias)
COPY package*.json ./
COPY tsconfig.json ./

# Instala TODAS las dependencias (incluidas devDependencies)
RUN npm install

# Copia el código fuente
COPY ./src ./src

# Compila TypeScript a JavaScript en /dist
RUN npm run build

# =====================================
# Etapa 2: Imagen final (producción)
# =====================================

FROM node:20-alpine AS production

# Carpeta de trabajo
WORKDIR /app

# Copia SOLO lo necesario
COPY package*.json ./
COPY --from=builder /app/dist ./dist

# Instala solo dependencias de producción
RUN npm install --omit=dev

# Expón el puerto (Elastika usa PORT env var)
ENV PORT=8080
EXPOSE 8080

# Comando por defecto
CMD ["node", "dist/server.js"]
