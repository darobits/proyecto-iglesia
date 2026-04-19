'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Predica = {
  id: string
  titulo: string
  predicador: string
  descripcion: string
  fecha: string
  audio_url: string | null
  youtube_url?: string | null
}

export default function ListadoPredicas() {
  const [predicas, setPredicas] = useState<Predica[]>([])

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("predicas")
        .select("*")
        .order("fecha", { ascending: false })

      if (error) return console.error(error.message)

      setPredicas(data || [])
    }

    load()
  }, [])

  return (
    <div className="predica-list">

      <h3 className="predica-title">Prédicas</h3>

      <table className="predica-table">

        <thead>
          <tr>
            <th>Título</th>
            <th>Predicador</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Contenido</th>
          </tr>
        </thead>

        <tbody>
          {predicas.map(p => (
            <tr key={p.id}>

              <td>{p.titulo}</td>

              <td>{p.predicador}</td>

              <td className="predica-desc">{p.descripcion}</td>

              <td>
                {new Date(p.fecha).toLocaleDateString()}
              </td>

              <td>
                {p.audio_url && (
                  <a href={p.audio_url} target="_blank" className="btn-download">
                    Descargar MP3
                  </a>
                )}

                {p.youtube_url && (
                  <a href={p.youtube_url} target="_blank" className="btn-youtube">
                    Ver video
                  </a>
                )}
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}