import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#00539B] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
        <img
    src="https://public.boxcloud.com/api/2.0/internal_files/939389415113/versions/1013629231913/representations/png_paged_2048x2048/content/1.png?access_token=1!M7tQG7RjaGV21enORoOFTgnhlQg8QPm4Py4w4jQR7N_IbJUwE-wcbWAxsVH_mc43qgiXOszeAOCuSSnqu-T6NMd4bbejOt4Quk_mjs-B71h0wj040GJyte66OXE5TdpfJs4mBkSqTDkW_qnQFRCd1FT16yT_IMBvg4b073gHSBY8noDdPpXXFqsGb9UXLE4ekceHn0mBXF5OPNlq9OxHB_FatUhyCKbg8lJGJV7mPhCMwJpUZu1ogswPfjPlDThf4-7uu0Mxgw-aufDLGqRMqiaNdLzmgGcHkosR1hKRVUG6Wc6QsQYZZqENJnZl62U9zDwgJSwB7Lw1cZ836nHj74fsIlDY2eDJLTb73D-x9KpcyEQn3gM4_O-fMip0HV_5vraEtD8n5MgrGg95KECviTj2xIVq4D4vCeVrGj4QRc4DzRw9QxZS0Qp7WX670AecEjm2o6f11DIgSsa2R9gPE-DxjXD0-PoCf3hmKUqgLyNjH-Fm5v9b6wx_P5UAXHIEe3bv8crF59Q4KfrEGD4kF1tPCnPI3KBoEhqcpRPNd8OmhDoiWsZzfDrvc_9tOx5tDE6Q0Ag_FoBWFPgyREY3McpnWrHDrRDoqd8CPbN9v08.&shared_link=https%3A%2F%2Fduke.app.box.com%2Fs%2Fg34jvx97ykevwuaszkiz60z47we8eoji&box_client_name=box-content-preview&box_client_version=2.109.0"
    alt="Duke Health Logo"
    style={{ width: '50%', height: 'auto' }} // Set width to 25% of the parent container
  />
          <h1 className="text-3xl font-bold">Rag Rad Ext</h1>
        </div>

        <Card className="bg-white text-[#00539B] mb-8">
          <CardHeader>
            <CardTitle>Upload and Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept=".csv"
                  className="flex-grow"
                />
                <Button asChild>
                  <Link href="/results">Process CSV</Link>
                </Button>
              </div>
              <Input
                placeholder="Search..."
                className="w-full"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Size of model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of parameters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">1M</SelectItem>
                    <SelectItem value="10m">10M</SelectItem>
                    <SelectItem value="100m">100M</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Quantization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="int8">INT8</SelectItem>
                    <SelectItem value="fp16">FP16</SelectItem>
                    <SelectItem value="fp32">FP32</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Release date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}