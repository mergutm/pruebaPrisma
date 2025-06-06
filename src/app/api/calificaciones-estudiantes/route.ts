import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const resultados = await prisma.calificacion.findMany({
            include: {
                estudiante: {
                    select: {
                        matricula: true,
                        nombre: true,
                    },
                },
                materia: {
                    select: {
                        nombre_materia: true,
                    },
                },
            },
        });

        const datos = resultados.map((r) => ({
            matricula: r.estudiante.matricula,
            nombre: r.estudiante.nombre,
            materia: r.materia.nombre_materia,
            calificacion: r.calificacion,
        }));

        return NextResponse.json(datos, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Error al obtener los datos de calificaciones' },
            { status: 500 }
        );
    }
}
