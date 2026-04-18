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

      if (ignore) return

      if (error) {
        console.error(error.message)
        return
      }

      setPredicas(data || [])
    }

    queueMicrotask(load)

    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="card">
      <h2>Prédicas</h2>

      {predicas.map((p) => (
        <div key={p.id}>
          {p.titulo} - {p.predicador}
        </div>
      ))}
    </div>
  )
}