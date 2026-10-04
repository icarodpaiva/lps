import { List, ListItem, Link } from "@mui/material"
import { ProductsSection } from "./components/ProductsSection"

import "./dalvasilva.css"

const brands = ["Natura", "Boticário", "Eudora"]

const products = [
  {
    id: 1,
    image: "/product-example.png",
    name: "Mamãe e Bebê"
  },
  {
    id: 2,
    image: "/product-example.png",
    name: "Mamãe e Bebê"
  },
  {
    id: 3,
    image: "/product-example.png",
    name: "Mamãe e Bebê"
  },
  {
    id: 4,
    image: "/product-example.png",
    name: "Mamãe e Bebê"
  }
]

export default function Page() {
  return (
    <div className="dalvasilva-container">
      <header>
        <nav>
          <List className="flex flex-row justify-center gap-4">
            {brands.map(brand => (
              <ListItem key={brand}>
                <Link href={`#${brand}`}>{brand}</Link>
              </ListItem>
            ))}
          </List>
        </nav>
      </header>

      {brands.map(brand => (
        <ProductsSection key={brand} title={brand} products={products} />
      ))}
    </div>
  )
}
