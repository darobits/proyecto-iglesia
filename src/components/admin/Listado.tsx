"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Listado({ tabla }: { tabla: string }) {

  const [data, setData] = useState<any[]>([])

  const fetchData = async () => {
    const { data } = await supabase
      .from(tabla)
      .select("*")
      .order("fecha", { ascending: false })

    setData(data || [])
  }

  const eliminar = async (id: string) => {
    if (!confirm("¿Eliminar registro?")) return

    await supabase.from(tabla).delete().eq("id", id)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="listado">

      {data.map(item => (
        <div key={item.id} className="card-admin">

          <h4>{item.titulo}</h4>
          <p>{item.descripcion}</p>

          <div className="card-actions">
            <button onClick={() => eliminar(item.id)}>Eliminar</button>
          </div>

        </div>
      ))}

    </div>
  )
}