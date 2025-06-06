import prisma from '@/lib/prisma';
const { faker } = require('@faker-js/faker');
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    // Crear materias
    const materias = await Promise.all(
        Array.from({ length: 5 }).map(() =>
            prisma.materia.create({
                data: {
                    nombre_materia: faker.lorem.words(2),
                },
            })
        )
    );

    // Crear estudiantes y calificaciones
    for (let i = 0; i < 10; i++) {
        const matricula = faker.string.alphanumeric(8).toUpperCase();
        const estudiante = await prisma.estudiante.create({
            data: {
                matricula,
                nombre: faker.person.fullName(),
                grupo: `G${faker.number.int({ min: 1, max: 3 })}`,
            },
        });

        // Calificaciones para cada materia
        for (const materia of materias) {
            await prisma.calificacion.create({
                data: {
                    matricula: estudiante.matricula,
                    id_materia: materia.id_materia,
                    calificacion:
                        parseFloat(faker.number.float(
                            { min: 5, max: 10, precision: 0.1 }).toFixed(1)),
                },
            });
        }
    }

    return NextResponse.json(
        { message: 'Base de datos poblada con datos fake.' },
        { status: 200 }
    );
}
