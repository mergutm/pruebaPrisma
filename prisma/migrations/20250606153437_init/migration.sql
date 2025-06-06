-- CreateTable
CREATE TABLE "Estudiante" (
    "matricula" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "grupo" TEXT NOT NULL,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("matricula")
);

-- CreateTable
CREATE TABLE "Materia" (
    "id_materia" SERIAL NOT NULL,
    "nombre_materia" TEXT NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id_materia")
);

-- CreateTable
CREATE TABLE "Calificacion" (
    "id" SERIAL NOT NULL,
    "matricula" TEXT NOT NULL,
    "id_materia" INTEGER NOT NULL,
    "calificacion" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Calificacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calificacion" ADD CONSTRAINT "Calificacion_matricula_fkey" FOREIGN KEY ("matricula") REFERENCES "Estudiante"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calificacion" ADD CONSTRAINT "Calificacion_id_materia_fkey" FOREIGN KEY ("id_materia") REFERENCES "Materia"("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;
