'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Alabanza = {
  id: string
  titulo: string
  tipo: string
  fecha: string
}

export default function ListadoAlabanzas() {
  const [alabanzas, setAlabanzas] = useState<Alabanza[]>([])

  useEffect(() => {
    let ignore = false

    async function load() {
      const { data, error } = await supabase
        .from("alabanzas")
        .select("*")

      if (ignore) return

      if (error) {
        console.error(error.message)
        return
      }

      setAlabanzas(data || [])
    }

    queueMicrotask(load)

    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="card">
      <h2>Alabanzas</h2>

      {alabanzas.map((a) => (
        <div key={a.id}>
          {a.titulo} - {a.tipo}
        </div>
      ))}
    </div>
  )
}