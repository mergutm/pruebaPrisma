import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    return new Response(JSON.stringify({
        message: 'Hello World'
    }), { status: 200 });
}


export async function POST(request: Request) {

    return new Response(JSON.stringify({
        message: 'Hello World',
        method: 'POST'
    }), { status: 200 });
}