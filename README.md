# Arrancar contenedor de BD
```bash
docker compose up -d 
```

# Configuración base de Prisma

```bash
npx prisma init
```

modificar archivo .env
```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb?schema=public"
```

Agregar a prisma/schema.prisma
```js
model Todo {
  id          String   @id @default(uuid())
  description String
  complete    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

# migrar
```bash
npx prisma migrate dev
```

Ya debería verse la BD actualizada usando algún visor de BD
