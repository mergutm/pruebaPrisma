import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'


export async function GET(request: Request) {

    try {

        const answ = await prisma.todo.create({
            data: {
                description: 'Prueba de creación de una tarea',
                completed: false
            }
        });
        console.log('Tarea creada:', answ);
        return new Response(JSON.stringify({
            message: 'Tarea creada correctamente',
            task: answ
        }), { status: 200 });
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        return new Response(JSON.stringify({
            message: 'Error al crear la tarea'
        }), { status: 500 });
    }
}


export async function POST(request: Request) {

    try {
        const data = await request.json();
        const answ = await prisma.todo.create({
            data: {
                description: data.description,
                completed: data.completed
            }
        });
        console.log('Tarea creada:', answ);
        return new Response(JSON.stringify({
            message: 'Tarea creada correctamente',
            task: answ
        }), { status: 200 });
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        return new Response(JSON.stringify({
            message: 'Error al crear la tarea'
        }), { status: 500 });
    }
}
export async function PUT(request: Request) {

    try {
        const data = await request.json();
        const answ = await prisma.todo.update({
            where: { id: data.id },
            data: {
                description: data.description,
                completed: data.completed
            }
        });
        console.log('Tarea actualizada:', answ);
        return new Response(JSON.stringify({
            message: 'Tarea actualizada correctamente',
            task: answ
        }), { status: 200 });
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
        return new Response(JSON.stringify({
            message: 'Error al actualizar la tarea'
        }), { status: 500 });
    }
}
export async function DELETE(request: Request) {

    try {
        const data = await request.json();
        const answ = await prisma.todo.delete({
            where: { id: data.id }
        });
        console.log('Tarea eliminada:', answ);
        return new Response(JSON.stringify({
            message: 'Tarea eliminada correctamente',
            task: answ
        }), { status: 200 });
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
        return new Response(JSON.stringify({
            message: 'Error al eliminar la tarea'
        }), { status: 500 });
    }
}