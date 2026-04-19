'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Alabanza = {
  id: string
  titulo: string
  descripcion: string
  fecha: string
  tipo: string
  audio_url: string | null
  youtube_url: string | null
}

export default function ListadoAlabanzas() {
  const [alabanzas, setAlabanzas] = useState<Alabanza[]>([])

  useEffect(() => {
    let ignore = false

    async function load() {
      const { data, error } = await supabase
        .from("alabanzas")
        .select("*")
        .order("fecha", { ascending: false })

      if (ignore) return
      if (error) return console.error(error.message)

      setAlabanzas(data || [])
    }

    queueMicrotask(load)

    return () => { ignore = true }
  }, [])

  return (
    <div className="card alabanza-list">

      <h3 className="alabanza-title">Alabanzas</h3>

      <table className="alabanza-table">

        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Contenido</th>
          </tr>
        </thead>

        <tbody>

          {alabanzas.map((a) => (
            <tr key={a.id}>

              <td>{a.titulo}</td>

              <td className="alabanza-desc">
                {a.descripcion || "-"}
              </td>

              <td>
                {new Date(a.fecha).toLocaleDateString()}
              </td>

              <td>
                {a.tipo === "audio" && a.audio_url && (
                  <a
                    href={a.audio_url}
                    target="_blank"
                    className="btn-download"
                  >
                    Descargar MP3
                  </a>
                )}

                {a.tipo === "youtube" && a.youtube_url && (
                  <a
                    href={a.youtube_url}
                    target="_blank"
                    className="btn-youtube"
                  >
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