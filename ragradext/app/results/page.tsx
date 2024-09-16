'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Results() {
  const [jsonData, setJsonData] = useState<any>({
    // Sample data, replace with actual data in a real application
    model: "Sample Model",
    size: "Medium",
    parameters: "10M",
    quantization: "FP16",
    releaseDate: "2023"
  })

  const handleDownload = () => {
    if (jsonData) {
      const dataStr = JSON.stringify(jsonData, null, 2)
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
      const exportFileDefaultName = 'data.json'
      const linkElement = document.createElement('a')
      linkElement.setAttribute('href', dataUri)
      linkElement.setAttribute('download', exportFileDefaultName)
      linkElement.click()
    }
  }

  return (
    <div className="min-h-screen bg-[#00539B] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
        <img
    src="https://public.boxcloud.com/api/2.0/internal_files/939389415113/versions/1013629231913/representations/png_paged_2048x2048/content/1.png?access_token=1!M7tQG7RjaGV21enORoOFTgnhlQg8QPm4Py4w4jQR7N_IbJUwE-wcbWAxsVH_mc43qgiXOszeAOCuSSnqu-T6NMd4bbejOt4Quk_mjs-B71h0wj040GJyte66OXE5TdpfJs4mBkSqTDkW_qnQFRCd1FT16yT_IMBvg4b073gHSBY8noDdPpXXFqsGb9UXLE4ekceHn0mBXF5OPNlq9OxHB_FatUhyCKbg8lJGJV7mPhCMwJpUZu1ogswPfjPlDThf4-7uu0Mxgw-aufDLGqRMqiaNdLzmgGcHkosR1hKRVUG6Wc6QsQYZZqENJnZl62U9zDwgJSwB7Lw1cZ836nHj74fsIlDY2eDJLTb73D-x9KpcyEQn3gM4_O-fMip0HV_5vraEtD8n5MgrGg95KECviTj2xIVq4D4vCeVrGj4QRc4DzRw9QxZS0Qp7WX670AecEjm2o6f11DIgSsa2R9gPE-DxjXD0-PoCf3hmKUqgLyNjH-Fm5v9b6wx_P5UAXHIEe3bv8crF59Q4KfrEGD4kF1tPCnPI3KBoEhqcpRPNd8OmhDoiWsZzfDrvc_9tOx5tDE6Q0Ag_FoBWFPgyREY3McpnWrHDrRDoqd8CPbN9v08.&shared_link=https%3A%2F%2Fduke.app.box.com%2Fs%2Fg34jvx97ykevwuaszkiz60z47we8eoji&box_client_name=box-content-preview&box_client_version=2.109.0"
    alt="Duke Health Logo"
    style={{ width: '50%', height: 'auto' }} // Set width to 25% of the parent container
  />
          <h1 className="text-3xl font-bold"> Rag Rad Ext </h1>
        </div>

        <Card className="bg-white text-[#00539B] mb-8">
          <CardHeader>
            <CardTitle>Extraction Results</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap mb-4">
              {JSON.stringify(jsonData, null, 2)}
            </pre>
            <div className="flex justify-between">
              <Button onClick={handleDownload}>
                Download JSON
              </Button>
              <Button asChild>
                <Link href="/">Back to Search</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}