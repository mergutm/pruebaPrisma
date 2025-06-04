import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'


export async function GET(request: Request) {

    const answ = await prisma.todo.createMany({
        data:
            [
                { description: 'Preparar frontend', completed: false },
                { description: 'Preparar backend', completed: false },
                { description: 'Preparar base de datos', completed: false },
                { description: 'Preparar servidor', completed: false },
                { description: 'Preparar despliegue', completed: false }
            ]
    });

    console.log('Tareas creadas:', answ);
    if (!answ) {
        return new Response(JSON.stringify({
            message: 'Campo creado'
        }), { status: 200 });
    } else {
        return new Response(JSON.stringify({
            message: 'Error al crear el campo'
        }), { status: 500 });
    }

}