'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Predica = {
  id: string
  titulo: string
  predicador: string
  fecha: string
  audio_url: string | null
}

export default function ListadoPredicas() {
  const [predicas, setPredicas] = useState<Predica[]>([])

  useEffect(() => {
    let ignore = false

    async function load() {
      const { data, error } = await supabase
        .from("predicas")
        .select("*")
        .order("fecha", { ascending: false })

      if (ignore) return
      if (error) return console.error(error.message)

      setPredicas(data || [])
    }

    queueMicrotask(load)

    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="card predica-card">

      <h3>Prédicas</h3>

      <div className="predicas-grid">

        {predicas.map((p) => (
          <div key={p.id} className="predica-item">

            <h4>{p.titulo}</h4>

            <p className="predicador">
              {p.predicador}
            </p>

            <span className="badge">
              {new Date(p.fecha).toLocaleDateString()}
            </span>

            {p.audio_url && (
              <audio controls className="audio-player">
                <source src={p.audio_url} />
              </audio>
            )}

          </div>
        ))}

      </div>

    </div>
  )
}