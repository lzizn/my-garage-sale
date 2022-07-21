import { BuyButton, Card, Title } from './Card.styles'

interface ProductCardProps {
  title: string
}

function ProductCard({ title }: ProductCardProps): JSX.Element {
  return (
    <Card>
      <Title>{title}</Title>

      <BuyButton>Buy</BuyButton>
    </Card>
  )
}


export { ProductCard }