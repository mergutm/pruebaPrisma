'use client';
import { useEffect, useState } from 'react';

type Calificacion = {
    nombre: string;
    matricula: string;
    materia: string;
    calificacion: number;
};

export default function EstudiantesPage() {
    const [datos, setDatos] = useState<Calificacion[]>([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/api/calificaciones-estudiantes')
            .then((res) => res.json())
            .then((data) => {
                setDatos(data);
                setCargando(false);
            })
            .catch((err) => {
                console.error('Error al cargar los datos:', err);
                setCargando(false);
            });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Calificaciones de Estudiantes</h1>
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                        <thead>
                            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                                <th className="p-3 border-b">Matrícula</th>
                                <th className="p-3 border-b">Nombre</th>
                                <th className="p-3 border-b">Materia</th>
                                <th className="p-3 border-b">Calificación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 text-sm">
                                    <td className="p-3 border-b">{item.matricula}</td>
                                    <td className="p-3 border-b">{item.nombre}</td>
                                    <td className="p-3 border-b">{item.materia}</td>
                                    <td className="p-3 border-b">{item.calificacion.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
