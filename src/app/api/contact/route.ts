// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log('Dados recebidos no contato:', data);

  
    return NextResponse.json({ message: 'Contato recebido com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar o contato:', error);
    return NextResponse.json({ error: 'Erro ao enviar a mensagem' }, { status: 500 });
  }
}
