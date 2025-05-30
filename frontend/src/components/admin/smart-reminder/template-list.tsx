import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Template {
  id: number
  name: string
  active: boolean
  lastUsed: string
}

interface TemplateListProps {
  templates: Template[]
}

export function TemplateList({ templates }: TemplateListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Aktif</CardTitle>
        <CardDescription>Template yang sedang digunakan</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {templates
            .filter((t) => t.active)
            .map((template) => (
              <div key={template.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{template.name}</p>
                  <p className="text-sm text-gray-600">Terakhir digunakan: {template.lastUsed}</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Aktif
                </Badge>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
