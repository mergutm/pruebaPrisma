
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    const listado = await prisma.todo.findMany({
        where: {
            completed: false
        }
    });

    return NextResponse.json(listado);
}