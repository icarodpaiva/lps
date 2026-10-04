interface ProductsSectionProps {
  title: string
  products: { id: number; image: string; name: string }[]
}

export function ProductsSection({ title, products }: ProductsSectionProps) {
  return (
    <section className="products-section">
      <h2 id={title}>{title}</h2>

      <div className="product-grid">
        {products.map(product => (
          <a
            key={product.id}
            href={`https://wa.me/5511977830855?text=Quero%20saber%20mais%20sobre%20o%%20${encodeURIComponent(product.name)}`}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </a>
        ))}
      </div>
    </section>
  )
}
