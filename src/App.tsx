import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { ShoppingBag, Star, Truck } from 'lucide-react'

const products = [
  { name: 'Air Swift 01', price: 'R$ 699', tag: 'New drop' },
  { name: 'Urban Runner Pro', price: 'R$ 549', tag: 'Best seller' },
  { name: 'Street Classic', price: 'R$ 429', tag: 'Limited' },
  { name: 'Velocity Max', price: 'R$ 799', tag: 'Premium' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-black tracking-tight">RocketShoes</h1>
          <Button><ShoppingBag className="mr-2 h-4 w-4" /> Cart (2)</Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2">
        <div className="space-y-5">
          <Badge className="bg-emerald-500/20 text-emerald-300">E-commerce showcase</Badge>
          <h2 className="text-4xl font-bold md:text-5xl">Sneakers store rebuilt for 2026</h2>
          <p className="text-zinc-400">
            Modern product grid with React, TypeScript, Tailwind CSS v4 and shadcn-inspired components.
            Cart flow, badges, and responsive cards — senior frontend patterns.
          </p>
          <div className="flex gap-3">
            <Button size="lg">Shop collection</Button>
            <Button variant="secondary" size="lg">View lookbook</Button>
          </div>
        </div>
        <Card className="border-emerald-500/20 bg-gradient-to-br from-zinc-900 to-emerald-950">
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-2 text-sm text-zinc-300"><Truck className="h-4 w-4" /> Free shipping over R$ 400</div>
            <div className="flex items-center gap-2 text-sm text-zinc-300"><Star className="h-4 w-4" /> 4.9 average store rating</div>
          </CardContent>
        </Card>
      </section>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.name} className="overflow-hidden border-white/10 bg-zinc-900 transition hover:border-emerald-400/40">
            <CardContent className="space-y-4 p-5">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800" />
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{product.name}</h3>
                <Badge>{product.tag}</Badge>
              </div>
              <p className="text-lg font-bold text-emerald-400">{product.price}</p>
              <Button className="w-full">Add to cart</Button>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  )
}
